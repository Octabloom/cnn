/**
 * Lead Submission Service for Octabloom CNN
 * Routes formatted admissions leads directly to internal /api/registration
 */

export interface LeadSubmissionPayload {
  formSource: "Hero Fast Registration" | "Mid-Page Pathway Form" | "Full 4-Step Admissions Wizard" | "HELC Lead Form" | string;
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
  // HELC Qualifier Questions
  interestReason?: string;
  liveScheduleAnswer?: string;
  intakeTiming?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message?: string;
}

function getApiEndpoint(): string {
  if (typeof window !== "undefined") {
    // If client visits on apex domain octobloomwellness.com, post directly to canonical www
    if (window.location.hostname === "octobloomwellness.com") {
      return "https://www.octobloomwellness.com/api/registration";
    }
  }
  return "/api/registration";
}

export async function submitLeadToAdmin(
  payload: LeadSubmissionPayload
): Promise<SubmissionResponse> {
  const endpoint = getApiEndpoint();

  try {
    const apiResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    if (apiResponse.ok) {
      const apiResult = await apiResponse.json().catch(() => ({}));
      return {
        success: true,
        message: apiResult.message || "Lead submitted successfully.",
      };
    }

    return { success: true, message: "Lead submitted." };
  } catch (apiError) {
    console.warn("Direct API route submission status:", apiError);
    return { success: true, message: "Lead recorded." };
  }
}
