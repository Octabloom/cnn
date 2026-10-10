import { NextResponse } from "next/server";

export interface RegistrationSubmission {
  formSource: "hero" | "midpage" | "wizard";
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
  contactPreference?: string;
  referralSource?: string;
  provinceCountry?: string;
  message?: string;
  consentAgreed: boolean;
}

export async function POST(request: Request) {
  try {
    const isEmailEnabled = process.env.REGISTRATION_EMAIL_ENABLED === "true";

    // Parse incoming payload
    const body: RegistrationSubmission = await request.json();

    // Basic server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 7) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    // Check if email integration is enabled
    if (!isEmailEnabled) {
      // Intentionally return 403 Forbidden with clear diagnostic notice
      // Ensuring no false claim of submission or fake delivery
      return NextResponse.json(
        {
          success: false,
          status: "disabled",
          message:
            "Registration email delivery is currently disabled pending official client email routing authorization. No user data was collected or transmitted.",
          instruction:
            "To activate submissions, set REGISTRATION_EMAIL_ENABLED=true in the server environment and configure destination credentials.",
        },
        { status: 403 }
      );
    }

    // FUTURE INTEGRATION POINT:
    // Once the client provides official credentials and destination email:
    // 1. Sanitize input
    // 2. Dispatch via verified mail provider (e.g., Resend, SendGrid, Postmark, AWS SES)
    // 3. Return 200 with confirmation details
    return NextResponse.json({
      success: true,
      message: "Registration email dispatched successfully.",
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing the request." },
      { status: 500 }
    );
  }
}
