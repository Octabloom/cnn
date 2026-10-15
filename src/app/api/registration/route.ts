import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Admissions <onboarding@resend.dev>";

export interface RegistrationSubmission {
  formSource?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  motivation?: string;
  focusAreas?: string[];
  certificateType?: string;
  background?: string;
  readyOctober14?: string;
  provinceCountry?: string;
  city?: string;
  reachMethod?: string;
  heardFrom?: string;
  message?: string;
  // Bot Honeypot fields (hidden in real forms; if filled, bot is detected)
  _gotcha?: string;
  website?: string;
  company?: string;
}

// In-Memory Rate Limiting: Max 5 requests per IP per 60 seconds
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic cleanup to avoid memory leaks
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// Security sanitizers: strip HTML tags and CRLF injection characters
function sanitizeSingleLine(str?: string, maxLength = 100): string {
  if (!str) return "";
  return str
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[\r\n\t]/g, " ") // strip CRLF header injection
    .trim()
    .slice(0, maxLength);
}

function sanitizeMultiLine(str?: string, maxLength = 1500): string {
  if (!str) return "";
  return str
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .trim()
    .slice(0, maxLength);
}

const DESTINATION_EMAIL =
  process.env.ADMISSIONS_EMAIL || "adminoctobloom@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`;

export async function POST(request: Request) {
  try {
    // 1. Payload size guard
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 50000) {
      return NextResponse.json(
        { success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    // 2. Client IP extraction & Rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "unknown-ip";

    if (clientIp !== "unknown-ip" && !checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a minute and try again.",
        },
        {
          status: 429,
          headers: { "Retry-After": "60" },
        }
      );
    }

    // 3. Origin & CSRF validation
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const host = request.headers.get("host");

    if (origin) {
      try {
        const originUrl = new URL(origin);
        const isAllowedOrigin =
          originUrl.hostname === host ||
          originUrl.hostname === "octobloomwellness.com" ||
          originUrl.hostname === "www.octobloomwellness.com" ||
          originUrl.hostname === "toronto.csnn.ca" ||
          originUrl.hostname.endsWith(".vercel.app") ||
          originUrl.hostname === "localhost" ||
          originUrl.hostname === "127.0.0.1";

        if (!isAllowedOrigin) {
          return NextResponse.json(
            { success: false, error: "Forbidden cross-origin request." },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid origin header." },
          { status: 400 }
        );
      }
    }

    // 4. Parse request body
    const body: RegistrationSubmission = await request.json();

    // 5. Bot Honeypot Guard: If hidden bot field is filled, silently return success without emailing
    if (body._gotcha || body.website || body.company) {
      console.warn(`[Security] Spam bot blocked from IP: ${clientIp}`);
      return NextResponse.json({
        success: true,
        message: "Registration received.",
      });
    }

    // 6. Strict Field Validation
    const cleanEmail = sanitizeSingleLine(body.email, 120);
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanPhone = sanitizeSingleLine(body.phone, 30);
    const phoneDigits = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone || phoneDigits.length < 7 || phoneDigits.length > 20) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required (min 7 digits)." },
        { status: 400 }
      );
    }

    // 7. Sanitize all lead fields
    const rawName =
      body.fullName ||
      `${body.firstName || ""} ${body.lastName || ""}`.trim() ||
      "Prospective Student";
    const candidateName = sanitizeSingleLine(rawName, 80) || "Prospective Student";

    const sanitizedFocusAreas = Array.isArray(body.focusAreas)
      ? body.focusAreas.slice(0, 10).map((f) => sanitizeSingleLine(String(f), 50))
      : [];

    const motivation = sanitizeMultiLine(body.motivation, 500) || "Clinical Holistic Nutrition Program";
    const cohort = sanitizeSingleLine(body.readyOctober14, 100) || "October 28, 2026 · Evenings 6:00–8:30 pm EST (Live Online)";
    const formSource = sanitizeSingleLine(body.formSource, 80) || "Website Registration";
    const background = sanitizeSingleLine(body.background, 100) || "General Applicant";
    const certificateType = sanitizeSingleLine(body.certificateType, 100) || "Comprehensive Certificate";
    const city = sanitizeSingleLine(body.city, 50);
    const provinceCountry = sanitizeSingleLine(body.provinceCountry, 50) || "Not Specified";
    const reachMethod = sanitizeSingleLine(body.reachMethod, 50) || "Any (Phone/Email/Text)";
    const heardFrom = sanitizeSingleLine(body.heardFrom, 80) || "Online";
    const message = sanitizeMultiLine(body.message, 1500) || "None provided";

    // 8. Prepare safe FormSubmit payload
    const formSubmitPayload: Record<string, string> = {
      _subject: `🎓 New Student Lead: ${candidateName} (October 28 Intake)`,
      _template: "table",
      _replyto: cleanEmail,
      _captcha: "false",
      _autoresponse: `Thank you for your interest in the Clinical Holistic Nutrition Program! We have received your registration for the October 28, 2026 cohort. An admissions advisor from Octabloom will be in touch shortly with curriculum details and your live mentorship schedule.`,
      "Candidate Full Name": candidateName,
      "Email Address": cleanEmail,
      "Phone Number": cleanPhone,
      "Program Interest / Motivation": motivation,
      "Target Cohort / Intake": cohort,
      "Admissions Portal Source": formSource,
      "Clinical Focus Areas":
        sanitizedFocusAreas.length > 0
          ? sanitizedFocusAreas.join(", ")
          : "Standard Admissions Intake",
      "Academic / Career Background": background,
      "Certificate Pathway": certificateType,
      "City & Region": `${city ? city + ", " : ""}${provinceCountry}`,
      "Best Way to Reach": reachMethod,
      "How Heard About Us": heardFrom,
      "Candidate Note / Question": message,
      "Tuition Status": "Free Seat Hold (Zero Tuition Due Today)",
      "Submission Timestamp":
        new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "medium",
          timeZone: "America/New_York",
        }) + " (EST)",
    };

    // 9. Dispatch via Resend (Direct Email & Autoresponder)
    let resendApplicantSent = false;
    let resendAdminSent = false;

    if (resend) {
      // A. Send Auto-Response Confirmation Email to the APPLICANT (cleanEmail)
      try {
        const applicantEmailResult = await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: cleanEmail,
          subject: "Registration Received: Clinical Holistic Nutrition Program · Octabloom",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <div style="background: linear-gradient(135deg, #064e3b, #047857); color: #ffffff; padding: 24px; border-radius: 8px; text-align: center;">
                <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">Octabloom · CSNN Toronto</h1>
                <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">Healthy Eating &amp; Lifestyle Certificate</p>
              </div>
              
              <div style="padding: 24px 8px 16px;">
                <p style="font-size: 16px; margin-top: 0;">Dear <strong>${candidateName}</strong>,</p>
                <p>Thank you for your interest! We have received your registration details for the <strong>${cohort}</strong> intake.</p>
                
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; padding: 16px 20px; margin: 24px 0; border-radius: 8px;">
                  <h3 style="margin: 0 0 12px; font-size: 15px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">Registration Summary</h3>
                  <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                    <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Candidate Name:</td><td style="font-weight: 600; color: #0f172a;">${candidateName}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Selected Intake:</td><td style="font-weight: 600; color: #0f172a;">${cohort}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Pathway:</td><td style="font-weight: 600; color: #0f172a;">${certificateType}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Tuition Status:</td><td style="font-weight: 600; color: #059669;">Free Seat Hold (Zero Due Today)</td></tr>
                  </table>
                </div>

                <h3 style="font-size: 16px; color: #0f172a; margin-top: 24px; margin-bottom: 12px;">What Happens Next?</h3>
                <ul style="padding-left: 20px; font-size: 14px; color: #334155; margin-top: 0;">
                  <li style="margin-bottom: 8px;">An admissions advisor will connect with you via <strong>${cleanPhone}</strong> or <strong>${cleanEmail}</strong>.</li>
                  <li style="margin-bottom: 8px;">We will provide your orientation schedule, syllabus overview, and mentorship access.</li>
                  <li style="margin-bottom: 8px;">Your seat hold is active, ensuring your spot is reserved.</li>
                </ul>

                <p style="margin-top: 28px; font-size: 14px; color: #64748b;">Have a question right now? Reply directly to this email or reach us at <a href="mailto:${DESTINATION_EMAIL}" style="color: #047857; font-weight: 500;">${DESTINATION_EMAIL}</a>.</p>
              </div>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
                <p style="margin: 0;">Octabloom Wellness &amp; Canadian School of Natural Nutrition (CSNN) Toronto</p>
                <p style="margin: 4px 0 0;">This email confirms receipt of your registration submission.</p>
              </div>
            </div>
          `,
        });

        if (applicantEmailResult.error) {
          console.warn("[Resend Applicant Notice]:", applicantEmailResult.error.message);
        } else {
          resendApplicantSent = true;
        }
      } catch (err) {
        console.warn("[Resend Applicant Error]:", err);
      }

      // B. Send Lead Notification Email to the ADMISSIONS TEAM (DESTINATION_EMAIL)
      try {
        const adminEmailResult = await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: DESTINATION_EMAIL,
          replyTo: cleanEmail,
          subject: `🎓 New Student Lead: ${candidateName} (${cohort})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #064e3b; margin-top: 0;">🎓 New Student Lead Received</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; width: 160px;">Full Name</td><td style="padding: 8px;">${candidateName}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;"><a href="tel:${cleanPhone}">${cleanPhone}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Cohort / Intake</td><td style="padding: 8px;">${cohort}</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold;">Pathway</td><td style="padding: 8px;">${certificateType}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Clinical Focus</td><td style="padding: 8px;">${sanitizedFocusAreas.length > 0 ? sanitizedFocusAreas.join(", ") : "Standard Admissions Intake"}</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold;">Location</td><td style="padding: 8px;">${city ? city + ", " : ""}${provinceCountry}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Preferred Reach</td><td style="padding: 8px;">${reachMethod}</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold;">Source / Portal</td><td style="padding: 8px;">${formSource} (Heard via: ${heardFrom})</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Background</td><td style="padding: 8px;">${background}</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold;">Motivation / Note</td><td style="padding: 8px;">${motivation}<br/><em>${message}</em></td></tr>
              </table>
            </div>
          `,
        });

        if (!adminEmailResult.error) {
          resendAdminSent = true;
        }
      } catch (err) {
        console.warn("[Resend Admin Error]:", err);
      }
    }

    // 10. Secondary Backup: Also trigger FormSubmit as an async safety net
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://octabloomwellness.com/",
          Origin: "https://octabloomwellness.com",
        },
        body: JSON.stringify(formSubmitPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch (fsError) {
      console.info("[FormSubmit sync fallback status]:", fsError);
    }

    return NextResponse.json({
      success: true,
      message: "Registration received successfully.",
      resendApplicantSent,
      resendAdminSent,
    });
  } catch (error) {
    // Log real error internally; never expose stack traces or system internals to the client
    console.error("[Registration API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to complete registration at this time. Please try again.",
      },
      { status: 500 }
    );
  }
}
