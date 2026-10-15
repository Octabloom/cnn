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
}

const DESTINATION_EMAIL = "adminoctobloom@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`;

export async function POST(request: Request) {
  try {
    const body: RegistrationSubmission = await request.json();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const candidateName =
      body.fullName?.trim() ||
      `${body.firstName || ""} ${body.lastName || ""}`.trim() ||
      "Prospective Student";

    // FormSubmit payload
    const formSubmitPayload = {
      _subject: `🎓 New Student Lead: ${candidateName} (October 28 Intake)`,
      _template: "table",
      _replyto: body.email,
      _captcha: "false",
      _autoresponse: `Thank you for your interest in the Clinical Holistic Nutrition Program! We have received your registration for the October 28, 2026 cohort. An admissions advisor from Octabloom will be in touch shortly with curriculum details and your live mentorship schedule.`,
      "Candidate Full Name": candidateName,
      "Email Address": body.email,
      "Phone Number": body.phone,
      "Program Interest / Motivation": body.motivation || "Clinical Holistic Nutrition Program",
      "Target Cohort": "October 28, 2026 · Evenings 6:00–8:30 pm EST (Live Online)",
      "Admissions Portal Source": body.formSource || "Website Registration",
      "Clinical Focus Areas":
        body.focusAreas && body.focusAreas.length > 0
          ? body.focusAreas.join(", ")
          : "Standard Admissions Intake",
      "Academic / Career Background": body.background || "General Applicant",
      "Location / Region": body.provinceCountry || "Not Specified",
      "Tuition Status": "Free Seat Hold (Zero Tuition Due Today)",
      "Submission Timestamp":
        new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "medium",
          timeZone: "America/New_York",
        }) + " (EST)",
    };

    // Forward to FormSubmit from the server
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://octabloom.com/",
        Origin: "https://octabloom.com",
      },
      body: JSON.stringify(formSubmitPayload),
    });

    const result = await response.json().catch(() => ({}));

    if (
      response.ok &&
      (result.success === true || result.success === "true" || result.status === "success")
    ) {
      return NextResponse.json({
        success: true,
        message: "Lead successfully submitted and routed to adminoctobloom@gmail.com",
      });
    }

    return NextResponse.json({
      success: true,
      message: result.message || "Lead received.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing the request." },
      { status: 500 }
    );
  }
}
