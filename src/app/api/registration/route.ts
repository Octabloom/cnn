import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Admin <admin@octobloomwellness.com>";

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
  // HELC Qualifier Questions
  interestReason?: string;
  liveScheduleAnswer?: string;
  intakeTiming?: string;
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
    const cleanFirstName = sanitizeSingleLine(body.firstName, 50) || (body.fullName ? body.fullName.split(" ")[0] : "");
    const cleanLastName = sanitizeSingleLine(body.lastName, 50) || (body.fullName ? body.fullName.split(" ").slice(1).join(" ") : "");
    const rawName =
      body.fullName ||
      `${cleanFirstName} ${cleanLastName}`.trim() ||
      "Prospective Student";
    const candidateName = sanitizeSingleLine(rawName, 80) || "Prospective Student";

    const sanitizedFocusAreas = Array.isArray(body.focusAreas)
      ? body.focusAreas.slice(0, 10).map((f) => sanitizeSingleLine(String(f), 50))
      : [];

    const motivation = sanitizeMultiLine(body.motivation, 500) || "Healthy Eating & Lifestyle Certificate (HELC)";
    const cohort = sanitizeSingleLine(body.readyOctober14, 100) || "October 28, 2026 · Evenings 6:00–8:00 pm EST (Live Online)";
    const formSource = sanitizeSingleLine(body.formSource, 80) || "Website Registration";
    const background = sanitizeSingleLine(body.background, 100) || "General Applicant";
    const certificateType = sanitizeSingleLine(body.certificateType, 100) || "Healthy Eating & Lifestyle Certificate (HELC)";
    const city = sanitizeSingleLine(body.city, 50);
    const provinceCountry = sanitizeSingleLine(body.provinceCountry, 50) || "Not Specified";
    const reachMethod = sanitizeSingleLine(body.reachMethod, 50) || "Any (Phone/Email/Text)";
    const heardFrom = sanitizeSingleLine(body.heardFrom, 80) || "Online";
    const message = sanitizeMultiLine(body.message, 1500) || "None provided";
    const interestReason = sanitizeSingleLine(body.interestReason, 150);
    const liveScheduleAnswer = sanitizeSingleLine(body.liveScheduleAnswer, 100);
    const intakeTiming = sanitizeSingleLine(body.intakeTiming, 100);

    // 8. Dispatch via Resend (Direct Email & Autoresponder)
    let resendApplicantSent = false;
    let resendAdminSent = false;

    if (resend) {
      // A. Send Auto-Response Confirmation Email to the APPLICANT (cleanEmail)
      try {
        const applicantEmailResult = await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: cleanEmail,
          replyTo: DESTINATION_EMAIL,
          subject: "Registration Confirmed: Healthy Eating & Lifestyle Certificate · CSNN Toronto",
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Registration Confirmed</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 32px 12px;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
                      
                      <!-- Brand Logo Header -->
                      <tr>
                        <td align="center" style="padding: 32px 24px 20px; background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
                          <img src="https://www.octobloomwellness.com/graphics/logo.jpg" alt="CSNN Toronto" style="max-height: 56px; max-width: 220px; height: auto; display: block; margin: 0 auto 12px; object-fit: contain;" />
                          <p style="margin: 0; font-size: 12px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 1px;">Canadian School of Natural Nutrition · Toronto Branch</p>
                          <p style="margin: 4px 0 0; font-size: 11px; color: #64748b; letter-spacing: 0.3px;">In Academic Partnership with Octabloom Wellness</p>
                        </td>
                      </tr>

                      <!-- Hero Banner -->
                      <tr>
                        <td style="background: linear-gradient(135deg, #064e3b 0%, #047857 100%); padding: 36px 28px 32px; text-align: center; color: #ffffff;">
                          <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.18); border: 1px solid rgba(255, 255, 255, 0.35); border-radius: 9999px; padding: 5px 16px; font-size: 12px; font-weight: 700; color: #ffffff; margin-bottom: 12px; letter-spacing: 0.4px;">
                            ✓ Free Seat Hold Reserved · Zero Due Today
                          </div>
                          <h1 style="margin: 0; font-size: 24px; font-weight: 800; line-height: 1.3; letter-spacing: -0.3px;">Healthy Eating &amp; Lifestyle Certificate</h1>
                        </td>
                      </tr>

                      <!-- Main Body -->
                      <tr>
                        <td style="padding: 32px 28px 24px; color: #1e293b;">
                          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #0f172a;">
                            Dear <strong>${candidateName}</strong>,
                          </p>
                          <p style="font-size: 15px; line-height: 1.7; color: #334155; margin: 0 0 16px;">
                            Thank you for your interest in Healthy Eating &amp; Lifestyle certificate. We are glad that you want to transform your life and lives of people around you. This is a life changing program with practical applications which can be practised everyday.
                          </p>

                          <!-- Call Notice Pill -->
                          <div style="background-color: #ecfdf5; border-left: 4px solid #059669; border-radius: 8px; padding: 14px 18px; margin: 20px 0;">
                            <p style="margin: 0; font-size: 14px; font-weight: 700; color: #064e3b; line-height: 1.6;">
                              📞 Our program advisor will call you in 24 hours to discuss further.
                            </p>
                          </div>

                          <p style="font-size: 15px; line-height: 1.7; color: #334155; margin: 0 0 24px;">
                            We are looking forward to having you as a part of our wonderful <strong>CSNN TORONTO</strong> community!
                          </p>

                          <!-- Registration Summary Card -->
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #10b981; overflow: hidden;">
                            <tr>
                              <td style="padding: 18px 20px;">
                                <p style="margin: 0 0 14px; font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.6px;">
                                  📋 Registration Summary
                                </p>
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
                                  <tr>
                                    <td style="padding: 6px 0; color: #64748b; width: 140px; font-weight: 500;">Candidate Name:</td>
                                    <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${candidateName}</td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Target Intake:</td>
                                    <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${cohort}</td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Certificate Pathway:</td>
                                    <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${certificateType}</td>
                                  </tr>
                                  ${
                                    sanitizedFocusAreas.length > 0
                                      ? `<tr>
                                          <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Clinical Focus:</td>
                                          <td style="padding: 6px 0; font-weight: 600; color: #047857;">${sanitizedFocusAreas.join(", ")}</td>
                                        </tr>`
                                      : ""
                                  }
                                  <tr>
                                    <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Tuition Status:</td>
                                    <td style="padding: 6px 0;">
                                      <span style="display: inline-block; background-color: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; border-radius: 6px; padding: 2px 10px; font-size: 12px; font-weight: 700;">
                                        Seat Reserved ($0 Due Today)
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <!-- Signature & Admissions Contact Block -->
                          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 22px; margin-top: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 800; color: #047857; text-transform: uppercase; letter-spacing: 1px;">
                              Ready to get started?
                            </p>
                            <h3 style="margin: 0 0 14px; font-size: 16px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                              CONTACT ADMISSIONS
                            </h3>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.8; color: #334155;">
                              <tr>
                                <td style="width: 75px; font-weight: 700; color: #64748b;">Phone:</td>
                                <td><a href="tel:647-224-3772" style="color: #047857; font-weight: 700; text-decoration: none;">647-224-3772</a></td>
                              </tr>
                              <tr>
                                <td style="font-weight: 700; color: #64748b;">Email:</td>
                                <td><a href="mailto:torontoinfo@csnn.ca" style="color: #047857; font-weight: 700; text-decoration: none;">torontoinfo@csnn.ca</a></td>
                              </tr>
                              <tr>
                                <td style="font-weight: 700; color: #64748b;">Website:</td>
                                <td><a href="https://csnn.ca/toronto/helc/" target="_blank" style="color: #047857; font-weight: 700; text-decoration: underline;">https://csnn.ca/toronto/helc/</a></td>
                              </tr>
                            </table>
                            <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #f1f5f9;">
                              <p style="margin: 0; font-size: 13px; font-weight: 800; color: #071245; letter-spacing: 0.3px;">
                                Canadian School of Natural Nutrition
                              </p>
                              <p style="margin: 2px 0 0; font-size: 12px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 0.8px;">
                                TORONTO
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Institutional Footer -->
                      <tr>
                        <td style="border-top: 1px solid #f1f5f9; padding: 24px 28px; background-color: #fafafa; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.6;">
                          <p style="margin: 0 0 6px; font-weight: 600; color: #64748b;">
                            Canadian School of Natural Nutrition (CSNN) Toronto &amp; Octabloom Wellness
                          </p>
                          <p style="margin: 0 0 8px;">
                            Canada's leading holistic nutrition educator since 1994 · Practical Holistic Nutrition Education
                          </p>
                          <p style="margin: 0; font-size: 11px; color: #cbd5e1;">
                            This email confirms your online seat hold on octobloomwellness.com.
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
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
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8" />
              <title>New Student Lead</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 24px 12px;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                      
                      <!-- Header -->
                      <tr>
                        <td style="background: linear-gradient(135deg, #064e3b 0%, #047857 100%); padding: 24px 28px; color: #ffffff;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <span style="display: inline-block; background-color: rgba(255,255,255,0.2); border-radius: 6px; padding: 3px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">New Admission Lead</span>
                                <h2 style="margin: 8px 0 4px; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">🎓 ${candidateName}</h2>
                                <p style="margin: 0; font-size: 13px; opacity: 0.9;">Target Intake: ${cohort}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Quick Action Buttons -->
                      <tr>
                        <td style="padding: 16px 28px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding-right: 12px;">
                                <a href="mailto:${cleanEmail}" style="background-color: #047857; color: #ffffff; text-decoration: none; padding: 8px 18px; border-radius: 6px; font-size: 13px; font-weight: 600; display: inline-block;">
                                  ✉️ Reply to Candidate
                                </a>
                              </td>
                              <td>
                                <a href="tel:${cleanPhone}" style="background-color: #ffffff; color: #0f172a; text-decoration: none; padding: 8px 18px; border-radius: 6px; font-size: 13px; font-weight: 600; display: inline-block; border: 1px solid #cbd5e1;">
                                  📞 Call (${cleanPhone})
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Contact & Lead Details -->
                      <tr>
                        <td style="padding: 24px 28px 12px;">
                          <h4 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                            👤 Candidate Contact Information
                          </h4>
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; width: 150px; border-bottom: 1px solid #e2e8f0;">First Name</td>
                              <td style="padding: 10px 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${cleanFirstName || candidateName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Last Name</td>
                              <td style="padding: 10px 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${cleanLastName || "-"}</td>
                            </tr>
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
                              <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
                                <a href="tel:${cleanPhone}" style="color: #047857; font-weight: 700; text-decoration: none;">${cleanPhone}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Email Address</td>
                              <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
                                <a href="mailto:${cleanEmail}" style="color: #047857; font-weight: 700; text-decoration: none;">${cleanEmail}</a>
                              </td>
                            </tr>
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Full Name</td>
                              <td style="padding: 10px 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${candidateName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569;">Traffic Source</td>
                              <td style="padding: 10px 14px; color: #0f172a;">${formSource}</td>
                            </tr>
                          </table>

                          ${interestReason || liveScheduleAnswer || intakeTiming ? `
                          <!-- HELC Qualifier Questions -->
                          <h4 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #071245; text-transform: uppercase; letter-spacing: 0.5px;">
                            🎯 HELC Qualifier Responses
                          </h4>
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px; border: 1px solid #fde047; border-radius: 8px; overflow: hidden; margin-bottom: 24px; background-color: #fefce8;">
                            ${interestReason ? `
                            <tr style="border-bottom: 1px solid #fef08a;">
                              <td style="padding: 10px 14px; font-weight: 700; color: #854d0e; width: 175px;">Q1 · Main Interest</td>
                              <td style="padding: 10px 14px; font-weight: 700; color: #071245;">${interestReason}</td>
                            </tr>
                            ` : ""}
                            ${liveScheduleAnswer ? `
                            <tr style="border-bottom: 1px solid #fef08a;">
                              <td style="padding: 10px 14px; font-weight: 700; color: #854d0e;">Q2 · Live 6–8 PM ET</td>
                              <td style="padding: 10px 14px; font-weight: 700; color: #047857;">${liveScheduleAnswer}</td>
                            </tr>
                            ` : ""}
                            ${intakeTiming ? `
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 700; color: #854d0e;">Q3 · Start Timing</td>
                              <td style="padding: 10px 14px; font-weight: 700; color: #071245;">${intakeTiming}</td>
                            </tr>
                            ` : ""}
                          </table>
                          ` : ""}

                          <!-- Academic Details -->
                          <h4 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                            📚 Academic &amp; Program Selection
                          </h4>
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; width: 150px; border-bottom: 1px solid #e2e8f0;">Selected Intake</td>
                              <td style="padding: 10px 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${cohort}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Pathway</td>
                              <td style="padding: 10px 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${certificateType}</td>
                            </tr>
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Clinical Focus</td>
                              <td style="padding: 10px 14px; color: #047857; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                                ${sanitizedFocusAreas.length > 0 ? sanitizedFocusAreas.join(", ") : "Standard Admissions Intake"}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Background</td>
                              <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${background}</td>
                            </tr>
                            <tr style="background-color: #f8fafc;">
                              <td style="padding: 10px 14px; font-weight: 600; color: #475569;">Motivation / Note</td>
                              <td style="padding: 10px 14px; color: #0f172a; line-height: 1.5;">
                                <strong>${motivation}</strong>
                                ${message && message !== "None provided" ? `<br/><span style="color: #64748b; font-style: italic; display: block; margin-top: 4px;">"${message}"</span>` : ""}
                              </td>
                            </tr>
                          </table>

                          <div style="background-color: #f1f5f9; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #64748b; text-align: center;">
                            Registered on Octabloom Wellness · CSNN Toronto Admissions Portal
                          </div>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
        });

        if (adminEmailResult.error) {
          console.warn("[Resend Admin Notice]:", adminEmailResult.error.message);
        } else {
          resendAdminSent = true;
        }
      } catch (err) {
        console.warn("[Resend Admin Error]:", err);
      }
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
