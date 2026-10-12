"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS, PROGRAM_INFO } from "@/data/programData";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Phone,
} from "lucide-react";

export function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State (Clean, unselected defaults)
  const [motivation, setMotivation] = useState<string>("");
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  const [certificateType, setCertificateType] = useState<string>("");
  const [background, setBackground] = useState<string>("");
  const [readyOct14, setReadyOct14] = useState<string>("");
  const [reachMethod, setReachMethod] = useState<string>("");
  const [heardFrom, setHeardFrom] = useState<string>("");

  // Contact Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [provinceCountry, setProvinceCountry] = useState("Ontario");
  const [message, setMessage] = useState("");
  const [consentAgreed, setConsentAgreed] = useState(true);

  // Validation Errors
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  // Toggle multi-select focus area
  const toggleFocusArea = (area: string) => {
    if (focusAreas.includes(area)) {
      setFocusAreas(focusAreas.filter((item) => item !== area));
    } else {
      setFocusAreas([...focusAreas, area]);
    }
  };

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (!isValidName(firstName)) errs.firstName = "First name is required.";
    if (!isValidName(lastName)) errs.lastName = "Last name is required.";
    if (!isValidEmail(email)) errs.email = "Please provide a valid email.";
    if (!isValidPhone(phone)) errs.phone = "Please provide a valid phone number.";
    if (!isValidName(city)) errs.city = "City is required.";
    if (!consentAgreed) errs.consent = "You must agree to contact terms.";
    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!motivation) {
        setStepErrors({ motivation: "Please select an option that best describes you to continue." });
        return;
      }
      setStepErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const errs: Record<string, string> = {};
      if (focusAreas.length === 0) {
        errs.focusAreas = "Please select at least one focus area.";
      }
      if (!certificateType) {
        errs.certificateType = "Please select the certificate type you are aiming for.";
      }
      if (!background) {
        errs.background = "Please select your nutrition background.";
      }
      if (Object.keys(errs).length > 0) {
        setStepErrors(errs);
        return;
      }
      setStepErrors({});
      setCurrentStep(3);
    } else if (currentStep === 3) {
      const errs: Record<string, string> = {};
      if (!readyOct14) {
        errs.readyOct14 = "Please confirm your availability for October 28.";
      }
      if (!reachMethod) {
        errs.reachMethod = "Please select your preferred contact method.";
      }
      if (Object.keys(errs).length > 0) {
        setStepErrors(errs);
        return;
      }
      setStepErrors({});
      setCurrentStep(4);
    }
  };

  const handlePrev = () => {
    setStepErrors({});
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const progressPct = currentStep * 25;

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-[24px] sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(7,18,69,0.12)] border border-slate-200 overflow-hidden relative p-6 sm:p-10 text-center flex flex-col items-center gap-4 sm:gap-5 animate-in fade-in zoom-in-95 duration-400">
        {/* Simple & Clean Smooth Bouncing Checkmark Icon (No Golden Surround) */}
        <div className="relative pt-1 pb-1">
          <div className="animate-smooth-bounce relative flex items-center justify-center select-none">
            {/* Soft Ambient Emerald Glow */}
            <div className="absolute -inset-2 rounded-full bg-emerald-400/25 blur-lg pointer-events-none" />

            {/* Clean, Simple Emerald Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#22C55E] to-[#15803D] flex items-center justify-center relative shadow-[0_10px_25px_-5px_rgba(21,128,61,0.45),0_4px_10px_rgba(0,0,0,0.1)] border-4 border-white">
              {/* Subtle gentle curved glass highlight at top */}
              <div className="absolute top-0.5 inset-x-2 h-5 sm:h-6 rounded-t-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              {/* Clean White Checkmark */}
              <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[3.5] drop-shadow-sm relative z-10" />
            </div>
          </div>
        </div>

        {/* Clean, Clear & Compact Header: No Clutter */}
        <div className="max-w-xl mx-auto text-center space-y-1">
          <h3 className="text-2xl sm:text-3xl font-black text-[#071245] tracking-tight">
            Congratulations{firstName ? `, ${firstName}` : ""}!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-bold">
            Your seat for October 28 is officially reserved.
          </p>
        </div>

        {/* Customized Student Intake Summary Card */}
        <div className="w-full max-w-2xl bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-2xs text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-black uppercase tracking-wider text-[#B87503]">
              Your Registration Profile
            </span>
            <span className="text-xs font-black text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
              Seat Hold Guaranteed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Applicant Name:</span>
              <span className="text-[#071245] font-black text-sm">{firstName} {lastName}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Primary Email:</span>
              <span className="text-[#071245] font-black text-sm">{email}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Phone &amp; Preference:</span>
              <span className="text-[#071245] font-black text-sm">{phone} ({reachMethod})</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Location:</span>
              <span className="text-[#071245] font-black text-sm">{city}, {provinceCountry}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Certificate Goal:</span>
              <span className="text-[#071245] font-black text-sm">{certificateType || "Attendance"} Certificate</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[11px]">Live Schedule:</span>
              <span className="text-[#071245] font-black text-sm">Wednesdays 6:00–8:30 pm EST</span>
            </div>
          </div>

          {/* Focus Areas Chips */}
          {focusAreas.length > 0 && (
            <div className="pt-2 border-t border-slate-200">
              <span className="text-slate-500 font-bold block text-[11px] mb-1.5">
                Selected Nutritional Focus Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg bg-[#071245] text-white font-black text-[11px] shadow-2xs border border-[#071245]"
                  >
                    ✓ {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3 Clear Next Steps */}
        <div className="w-full max-w-2xl bg-white rounded-2xl p-5 border border-slate-200 text-left shadow-2xs">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#071245] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F6C915]" />
            What Happens Next — Simple 3-Step Onboarding:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#071245] text-white flex items-center justify-center font-black text-[10px] mb-1.5">1</span>
              <p className="font-black text-[#071245] mb-0.5">Advising Welcome</p>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Your admissions advisor will connect within 24 hours via {reachMethod} to review syllabus details.
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#071245] text-white flex items-center justify-center font-black text-[10px] mb-1.5">2</span>
              <p className="font-black text-[#071245] mb-0.5">Course Pack &amp; Guide</p>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                You will receive your student guide, weekly recipes, and recommended whole-food grocery list.
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#071245] text-white flex items-center justify-center font-black text-[10px] mb-1.5">3</span>
              <p className="font-black text-[#071245] mb-0.5">Live Zoom Access</p>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Live interactive link delivered before the first session on October 28 at 6:00 pm EST.
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-white border border-slate-200 text-[#071245] font-black text-xs hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#B87503]" />
            <span>Have questions now? Call {PROGRAM_INFO.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs font-black text-[#B87503] hover:underline cursor-pointer py-2 px-4"
          >
            ← Register Another Household Member or Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(7,18,69,0.1)] border border-slate-200/90 overflow-hidden relative">
      
      {/* Top Liquid Amber Progress Header */}
      <div className="bg-[#071245] text-white p-4 sm:p-7 sm:p-9 relative border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-5">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border border-[#FFF0A8]">
              {currentStep}
            </span>
            <span className="text-xs sm:text-base font-black uppercase tracking-wider text-white">
              Step {currentStep} of 4 —{" "}
              {currentStep === 1 && "About You"}
              {currentStep === 2 && "Your Goals"}
              {currentStep === 3 && "Your Schedule"}
              {currentStep === 4 && "Contact Details"}
            </span>
          </div>
          <span className="bg-white/10 text-amber-300 border border-amber-300/30 text-[10px] sm:text-xs font-black px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full">
            {progressPct}% Completed
          </span>
        </div>

        {/* Tactile Progress Bar */}
        <div className="w-full bg-white/15 h-2 sm:h-3 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner">
          <div
            className="bg-gradient-to-r from-[#FFE685] via-[#F6C915] to-[#D4A017] h-full rounded-full transition-all duration-400 ease-out shadow-[0_0_12px_rgba(246,201,21,0.8)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Steps Navigation Labels */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2 mt-2.5 sm:mt-4 text-[10px] sm:text-xs font-extrabold text-white/50">
          <span className={currentStep >= 1 ? "text-[#F6C915]" : ""}>1. Profile</span>
          <span className={currentStep >= 2 ? "text-[#F6C915]" : ""}>2. Goals</span>
          <span className={currentStep >= 3 ? "text-[#F6C915]" : ""}>3. Schedule</span>
          <span className={currentStep >= 4 ? "text-[#F6C915]" : ""}>4. Contact</span>
        </div>
      </div>

      {/* Step Body */}
      <div className="p-4 sm:p-8 sm:p-12">
        
        {/* STEP 1: ABOUT YOU */}
        {currentStep === 1 && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#071245] mb-1 sm:mb-1.5 leading-tight">
                Which best describes you?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                Select the primary motivation that brought you to the Healthy Eating &amp; Lifestyle Certificate.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {MOTIVATION_OPTIONS.map((opt) => {
                const isSelected = motivation === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setMotivation(opt.id)}
                    className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 text-left cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                        : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs ${
                          isSelected
                            ? "bg-white text-[#071245] border border-white"
                            : "bg-slate-100 text-[#071245] border border-slate-200"
                        }`}
                      >
                        {opt.num}
                      </span>
                      <div>
                        <h4 className={`text-xs sm:text-base font-black leading-snug ${isSelected ? "text-white" : "text-[#071245]"}`}>
                          {opt.title}
                        </h4>
                        <p className={`text-[11px] sm:text-xs mt-0.5 font-medium ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                          {opt.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <span
                      className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-white bg-white text-[#071245] shadow-xs"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
            {stepErrors.motivation && (
              <p className="text-xs text-[#D62B2B] font-bold">{stepErrors.motivation}</p>
            )}
          </div>
        )}

        {/* STEP 2: YOUR GOALS */}
        {currentStep === 2 && (
          <div className="space-y-5 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#071245] mb-1 sm:mb-1.5 leading-tight">
                What do you want out of it?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                Tailor your certificate experience and expectations.
              </p>
            </div>

            {/* Focus Areas (Multi-select) */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-2 sm:mb-3">
                Focus areas (pick all that interest you)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {[
                  "Digestion & gut health",
                  "Immunity",
                  "Stress & mental wellness",
                  "Energy & weight",
                  "Family meals",
                  "Career in nutrition",
                ].map((area) => {
                  const isChecked = focusAreas.includes(area);
                  return (
                    <button
                      type="button"
                      key={area}
                      onClick={() => toggleFocusArea(area)}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border font-bold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      <span>{area}</span>
                      <span
                        className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                          isChecked ? "border-white bg-white text-[#071245]" : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
              {stepErrors.focusAreas && (
                <p className="mt-1.5 text-xs text-[#D62B2B] font-bold">{stepErrors.focusAreas}</p>
              )}
            </div>

            {/* Certificate Aiming For */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-2 sm:mb-3">
                Certificate you&apos;re aiming for
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                {[
                  {
                    title: "Attendance",
                    desc: "Complete all 10 workshops",
                  },
                  {
                    title: "Achievement",
                    desc: "+ short test · 4 CECs",
                  },
                  {
                    title: "Help me decide",
                    desc: "An advisor will guide you",
                  },
                ].map((item) => {
                  const isSelected = certificateType === item.title;
                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => {
                        setCertificateType(item.title);
                        if (stepErrors.certificateType) {
                          setStepErrors((prev) => ({ ...prev, certificateType: "" }));
                        }
                      }}
                      className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      <div className="font-black text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</div>
                      <div className={`text-[11px] sm:text-xs ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
              {stepErrors.certificateType && (
                <p className="mt-1.5 text-xs text-[#D62B2B] font-bold">{stepErrors.certificateType}</p>
              )}
            </div>

            {/* Nutrition Background */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-2 sm:mb-3">
                Your nutrition background
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5">
                {[
                  "New to nutrition",
                  "Some self-study",
                  "Health / fitness professional",
                ].map((bg) => {
                  const isSelected = background === bg;
                  return (
                    <button
                      type="button"
                      key={bg}
                      onClick={() => {
                        setBackground(bg);
                        if (stepErrors.background) {
                          setStepErrors((prev) => ({ ...prev, background: "" }));
                        }
                      }}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      {bg}
                    </button>
                  );
                })}
              </div>
              {stepErrors.background && (
                <p className="mt-1.5 text-xs text-[#D62B2B] font-bold">{stepErrors.background}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: YOUR SCHEDULE */}
        {currentStep === 3 && (
          <div className="space-y-5 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#071245] mb-1 sm:mb-1.5 leading-tight">
                Your schedule &amp; contact preference
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                Classes run live online, evenings 6:00–8:30 pm EST.
              </p>
            </div>

            {/* October 28 Availability */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-2 sm:mb-3">
                Can you join us on October 28?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                {[
                  "Yes, I'm ready for October 28",
                  "Not sure yet, please call me",
                  "Notify me of the next intake",
                ].map((opt) => {
                  const isSelected = readyOct14 === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => {
                        setReadyOct14(opt);
                        if (stepErrors.readyOct14) {
                          setStepErrors((prev) => ({ ...prev, readyOct14: "" }));
                        }
                      }}
                      className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border text-left text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {stepErrors.readyOct14 && (
                <p className="mt-1.5 text-xs text-[#D62B2B] font-bold">{stepErrors.readyOct14}</p>
              )}
            </div>

            {/* Best way to reach you */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-2 sm:mb-3">
                Best way to reach you
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
                {["Phone", "Email", "Text"].map((method) => {
                  const isSelected = reachMethod === method;
                  return (
                    <button
                      type="button"
                      key={method}
                      onClick={() => {
                        setReachMethod(method);
                        if (stepErrors.reachMethod) {
                          setStepErrors((prev) => ({ ...prev, reachMethod: "" }));
                        }
                      }}
                      className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-center text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#071245] border-[#071245] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
              {stepErrors.reachMethod && (
                <p className="mt-1.5 text-xs text-[#D62B2B] font-bold">{stepErrors.reachMethod}</p>
              )}
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="wizard-referral" className="block text-xs font-black uppercase tracking-wider text-[#071245] mb-1.5 sm:mb-2">
                How did you hear about us?
              </label>
              <select
                id="wizard-referral"
                value={heardFrom}
                onChange={(e) => setHeardFrom(e.target.value)}
                className="w-full h-11 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] shadow-2xs"
              >
                <option value="">Select how you heard about CSNN...</option>
                <option value="Google search">Google search</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Friend / family">Friend / family</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT DETAILS */}
        {currentStep === 4 && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#071245] mb-1 sm:mb-1.5 leading-tight">
                Where should we send your confirmation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                Enter your details to finalize your intake profile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="wizard-fname" className="block text-xs font-black text-[#071245] mb-1">First name *</label>
                <input
                  id="wizard-fname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                    stepErrors.firstName ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.firstName && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-lname" className="block text-xs font-black text-[#071245] mb-1">Last name *</label>
                <input
                  id="wizard-lname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                    stepErrors.lastName ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.lastName && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.lastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-email" className="block text-xs font-black text-[#071245] mb-1">Email address *</label>
                <input
                  id="wizard-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                    stepErrors.email ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.email && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-phone" className="block text-xs font-black text-[#071245] mb-1">Phone number *</label>
                <input
                  id="wizard-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                    stepErrors.phone ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.phone && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-city" className="block text-xs font-black text-[#071245] mb-1">City *</label>
                <input
                  id="wizard-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                    stepErrors.city ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.city && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-province" className="block text-xs font-black text-[#071245] mb-1">Province / Country *</label>
                <select
                  id="wizard-province"
                  value={provinceCountry}
                  onChange={(e) => setProvinceCountry(e.target.value)}
                  className="w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] shadow-2xs"
                >
                  <option value="Ontario">Ontario</option>
                  <option value="Other province">Other province</option>
                  <option value="Outside Canada">Outside Canada</option>
                </select>
              </div>
            </div>

            {/* Optional note */}
            <div>
              <label htmlFor="wizard-message" className="block text-xs font-black text-[#071245] mb-1">
                Optional note or question for your advisor
              </label>
              <textarea
                id="wizard-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Any special questions or dietary areas you want covered?"
                className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#071245] placeholder:text-slate-400 shadow-2xs focus:border-[#071245]"
              />
            </div>

            {/* Consent Checkbox */}
            <label className="flex items-start gap-2.5 sm:gap-3.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={consentAgreed}
                onChange={(e) => setConsentAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#071245] focus:ring-[#071245] accent-[#071245]"
              />
              <span className="text-[11px] sm:text-xs text-slate-600 font-semibold leading-relaxed">
                I agree to be contacted by CSNN Toronto about this program and related educational updates. I can unsubscribe anytime.
              </span>
            </label>
            {/* Official Admissions Security Guarantee */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-slate-600 text-xs leading-relaxed shadow-2xs">
              <div className="flex items-center gap-2 text-[#071245] font-black text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1B7A42]" />
                <span>Official CSNN Toronto Admissions Privacy Guarantee</span>
              </div>
              <p>
                Your application is transmitted directly and securely to the CSNN Toronto admissions office via 256-bit TLS encryption. Zero tuition is due today, and your seat will be provisionally reserved immediately.
              </p>
            </div>
          </div>
        )}

        {/* Wizard Navigation Footer with Shimmer Buttons */}
        <div className="flex items-center justify-between gap-3 pt-5 sm:pt-8 border-t border-slate-200">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 h-11 sm:h-13 rounded-full border border-slate-200 text-[#071245] hover:bg-slate-50 text-xs sm:text-sm font-black transition-colors cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-skeuo-primary animate-shimmer inline-flex items-center gap-2 px-6 sm:px-9 h-11 sm:h-13 rounded-full text-xs sm:text-sm font-black tracking-wide cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F6C915]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (validateStep4()) {
                  setIsSubmitted(true);
                }
              }}
              className="btn-skeuo-gold animate-shimmer inline-flex items-center gap-2 px-6 sm:px-10 h-11 sm:h-13 rounded-full text-[#071245] text-xs sm:text-sm font-black cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 transition-all border-2 border-[#FFF8B8]"
            >
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#071245]" />
              <span>Complete Free Registration</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
