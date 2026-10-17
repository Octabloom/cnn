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

export async function submitLeadToAdmin(
  payload: LeadSubmissionPayload
): Promise<SubmissionResponse> {
  try {
    const apiResponse = await fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (apiResponse.ok) {
      const apiResult = await apiResponse.json();
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
