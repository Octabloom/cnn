"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  Lock,
  Loader2,
  Sparkles,
  Laptop,
  Clock,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { submitLeadToAdmin } from "@/lib/leadSubmission";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";

interface QualifierAnswers {
  q1: string;
  q2: string;
  q3: string;
}

interface ContactData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export function HelcQualifierCard() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [answers, setAnswers] = useState<QualifierAnswers>({
    q1: "",
    q2: "",
    q3: "",
  });

  const [contact, setContact] = useState<ContactData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [contactErrors, setContactErrors] = useState<{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Question 1 Options
  const q1Options = [
    "Improving my own health and eating",
    "Healthier choices for my family",
    "Exploring further study in holistic nutrition",
    "Looking for free resources",
  ];

  // Question 2 Options
  const q2Options = [
    "Yes",
    "Most evenings",
    "Not at this time",
  ];

  // Question 3 Options
  const q3Options = [
    "This intake",
    "Next intake",
    "Just exploring",
  ];

  const validateContact = () => {
    const errors: { firstName?: string; lastName?: string; phone?: string; email?: string } = {};
    if (!isValidName(contact.firstName)) {
      errors.firstName = "Please enter your first name";
    }
    if (!isValidName(contact.lastName)) {
      errors.lastName = "Please enter your last name";
    }
    if (!isValidEmail(contact.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!isValidPhone(contact.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;

    setIsSubmitting(true);

    try {
      await submitLeadToAdmin({
        formSource: "HELC Lead Form",
        fullName: `${contact.firstName} ${contact.lastName}`.trim(),
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        motivation: answers.q1 || "Healthy Eating & Lifestyle Certificate",
        readyOctober14: "October 28, 2026 Intake (Evenings 6–8 PM EST)",
        certificateType: "Healthy Eating & Lifestyle Certificate (HELC)",
        interestReason: answers.q1,
        liveScheduleAnswer: answers.q2,
        intakeTiming: answers.q3,
      });
      // Direct, guaranteed browser redirect to the dedicated thank you page URL
      window.location.href = `/thank-you?name=${encodeURIComponent(contact.firstName)}`;
    } catch {
      window.location.href = `/thank-you?name=${encodeURIComponent(contact.firstName)}`;
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto text-left" id="qualifier-card">
      {/* 207roofers Elevated Clean White Card (No Header Color Strip) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.38)] border border-slate-100 overflow-hidden flex flex-col justify-between transition-all">
        
        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3.5">
          
          {/* Header Info (Visible on Question Steps 1 to 4) */}
          {currentStep <= 4 && (
            <div className="space-y-2 pb-2.5 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-[#854D0E] text-[10px] font-black uppercase tracking-wider border border-[#F6C915]/60 shadow-2xs">
                  <Sparkles className="w-2.5 h-2.5 text-[#DEAB07]" />
                  CSNN Toronto · Oct 28 Cohort
                </span>
                
                {/* Step Dots Indicator */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4].map((stepNum) => (
                    <div
                      key={stepNum}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        stepNum === currentStep
                          ? "w-5 bg-[#071245]"
                          : stepNum < currentStep
                          ? "w-2 bg-[#DEAB07]"
                          : "w-2 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-base sm:text-lg font-black text-[#071245] tracking-tight leading-snug">
                  Healthy Eating &amp; Lifestyle Certificate
                </h2>
                <p className="text-[11.5px] sm:text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                  Interested in learning practical nutrition and healthy eating? Join CSNN Toronto’s 10-workshop certificate program starting October 28, 2026.
                </p>
              </div>

              {/* Minimalist Micro Badges */}
              <div className="flex flex-wrap gap-1 text-[9.5px] sm:text-[10px] font-bold text-slate-700">
                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#071245] flex items-center gap-1">
                  <Laptop className="w-2.5 h-2.5 text-blue-600" /> Live online
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#071245] flex items-center gap-1">
                  <BookOpen className="w-2.5 h-2.5 text-amber-600" /> 10 workshops | 21 hours
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#071245] flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-indigo-600" /> Evenings, 6–8 PM EST
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#071245]">
                  🌱 No prior experience required
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#071245] flex items-center gap-1">
                  <GraduationCap className="w-2.5 h-2.5 text-purple-600" /> Certificate options
                </span>
              </div>

              {/* Subheading Callout */}
              <p className="text-[10.5px] sm:text-[11px] text-slate-700 font-medium bg-[#FEF9C3]/60 p-2 rounded-lg border border-[#F6C915]/60 leading-snug">
                If you&apos;re interested in joining the October 2026 cohort, complete the form below and our team will contact you with program and registration details.
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 1: QUESTION 1 */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <h3 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                1 · What interests you most about HELC?
              </h3>

              <div className="space-y-1.5">
                {q1Options.map((opt) => {
                  const isSelected = answers.q1 === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, q1: opt }))}
                      className={`w-full px-3 py-2 sm:py-2.5 rounded-xl border text-left transition-all duration-150 flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] text-white border-[#071245] shadow-xs"
                          : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {/* Radio Circle */}
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "border-[#F6C915] bg-[#F6C915]" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#071245]" />}
                      </div>

                      <span className={`text-[11.5px] sm:text-xs font-bold flex-1 ${isSelected ? "text-white" : "text-slate-800"}`}>
                        {opt}
                      </span>

                      {isSelected && <Check className="w-3.5 h-3.5 text-[#F6C915] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-slate-400 font-bold">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  CSNN Toronto Verified · 100% Confidential
                </span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: QUESTION 2 */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <h3 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                2 · Can you join live online classes, 6–8 PM ET?
              </h3>

              <div className="space-y-1.5">
                {q2Options.map((opt) => {
                  const isSelected = answers.q2 === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, q2: opt }))}
                      className={`w-full px-3 py-2.5 rounded-xl border text-left transition-all duration-150 flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] text-white border-[#071245] shadow-xs"
                          : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "border-[#F6C915] bg-[#F6C915]" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#071245]" />}
                      </div>

                      <span className={`text-[11.5px] sm:text-xs font-bold flex-1 ${isSelected ? "text-white" : "text-slate-800"}`}>
                        {opt}
                      </span>

                      {isSelected && <Check className="w-3.5 h-3.5 text-[#F6C915] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-slate-400 font-bold">
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  Recorded replays provided if you ever miss a session
                </span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: QUESTION 3 */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <h3 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                3 · HELC is a paid certificate program. When would you like to start?
              </h3>

              <div className="space-y-1.5">
                {q3Options.map((opt) => {
                  const isSelected = answers.q3 === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, q3: opt }))}
                      className={`w-full px-3 py-2.5 rounded-xl border text-left transition-all duration-150 flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] text-white border-[#071245] shadow-xs"
                          : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "border-[#F6C915] bg-[#F6C915]" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#071245]" />}
                      </div>

                      <span className={`text-[11.5px] sm:text-xs font-bold flex-1 ${isSelected ? "text-white" : "text-slate-800"}`}>
                        {opt}
                      </span>

                      {isSelected && <Check className="w-3.5 h-3.5 text-[#F6C915] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-slate-400 font-bold">
                <span className="flex items-center gap-1 text-emerald-600">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Free seat hold · Zero tuition due today
                </span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: CONTACT INFORMATION */}
          {/* ========================================================================= */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmit} id="helc-contact-form" className="space-y-2.5 animate-in fade-in duration-150">
              <h3 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                Where should our team send your registration details?
              </h3>

              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="card-fn" className="block text-[10px] font-black uppercase text-slate-600 mb-0.5">
                      First Name *
                    </label>
                    <input
                      id="card-fn"
                      type="text"
                      placeholder="First Name"
                      value={contact.firstName}
                      onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                      className={`w-full px-2.5 py-1.5 sm:py-2 rounded-lg border text-xs font-medium bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        contactErrors.firstName ? "border-red-500 ring-1 ring-red-200" : "border-slate-200 focus:border-[#071245]"
                      }`}
                    />
                    {contactErrors.firstName && (
                      <p className="text-[9px] text-red-500 font-bold mt-0.5">{contactErrors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="card-ln" className="block text-[10px] font-black uppercase text-slate-600 mb-0.5">
                      Last Name *
                    </label>
                    <input
                      id="card-ln"
                      type="text"
                      placeholder="Last Name"
                      value={contact.lastName}
                      onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                      className={`w-full px-2.5 py-1.5 sm:py-2 rounded-lg border text-xs font-medium bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        contactErrors.lastName ? "border-red-500 ring-1 ring-red-200" : "border-slate-200 focus:border-[#071245]"
                      }`}
                    />
                    {contactErrors.lastName && (
                      <p className="text-[9px] text-red-500 font-bold mt-0.5">{contactErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="card-phone" className="block text-[10px] font-black uppercase text-slate-600 mb-0.5">
                    Phone *
                  </label>
                  <input
                    id="card-phone"
                    type="tel"
                    placeholder="(647) 555-0199"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className={`w-full px-2.5 py-1.5 sm:py-2 rounded-lg border text-xs font-medium bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      contactErrors.phone ? "border-red-500 ring-1 ring-red-200" : "border-slate-200 focus:border-[#071245]"
                    }`}
                  />
                  {contactErrors.phone && (
                    <p className="text-[9px] text-red-500 font-bold mt-0.5">{contactErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="card-email" className="block text-[10px] font-black uppercase text-slate-600 mb-0.5">
                    Email *
                  </label>
                  <input
                    id="card-email"
                    type="email"
                    placeholder="name@email.com"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className={`w-full px-2.5 py-1.5 sm:py-2 rounded-lg border text-xs font-medium bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      contactErrors.email ? "border-red-500 ring-1 ring-red-200" : "border-slate-200 focus:border-[#071245]"
                    }`}
                  />
                  {contactErrors.email && (
                    <p className="text-[9px] text-red-500 font-bold mt-0.5">{contactErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Submitted directly to Octobloom admin email. No spam.</span>
              </div>
            </form>
          )}

        </div>

        {/* 207roofers Style Anchor Bottom Bar: NEXT → / SUBMIT → */}
        <div className="w-full">
            {currentStep === 1 && (
              <button
                type="button"
                disabled={!answers.q1}
                onClick={() => setCurrentStep(2)}
                className={`w-full py-3.5 bg-gradient-to-r from-[#0070f3] to-[#005cd6] hover:from-[#0060df] hover:to-[#004fba] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                  !answers.q1 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>BACK</span>
                </button>
                <button
                  type="button"
                  disabled={!answers.q2}
                  onClick={() => setCurrentStep(3)}
                  className={`col-span-2 py-3.5 bg-gradient-to-r from-[#0070f3] to-[#005cd6] hover:from-[#0060df] hover:to-[#004fba] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                    !answers.q2 ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid grid-cols-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>BACK</span>
                </button>
                <button
                  type="button"
                  disabled={!answers.q3}
                  onClick={() => setCurrentStep(4)}
                  className={`col-span-2 py-3.5 bg-gradient-to-r from-[#0070f3] to-[#005cd6] hover:from-[#0060df] hover:to-[#004fba] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                    !answers.q3 ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {currentStep === 4 && (
              <div className="grid grid-cols-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>BACK</span>
                </button>
                <button
                  type="submit"
                  form="helc-contact-form"
                  disabled={isSubmitting}
                  className="col-span-2 py-3.5 bg-gradient-to-r from-[#0070f3] to-[#005cd6] hover:from-[#0060df] hover:to-[#004fba] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

      </div>
    </div>
  );
}
