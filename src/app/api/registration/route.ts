import { NextResponse } from "next/server";

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

    // 9. Forward to FormSubmit with timeout guard
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(FORMSUBMIT_URL, {
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

    const text = await response.text();
    let result: Record<string, unknown> = {};
    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text.slice(0, 150) };
    }

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      result,
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
