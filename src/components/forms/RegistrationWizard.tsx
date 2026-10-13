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
  Sparkles,
  User,
  Target,
  Calendar,
  Send,
  Lock,
} from "lucide-react";

export function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
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

  const stepsList = [
    { num: 1, id: "profile", label: "Profile", subtitle: "About You", icon: User },
    { num: 2, id: "goals", label: "Goals", subtitle: "Your Aspirations", icon: Target },
    { num: 3, id: "schedule", label: "Schedule", subtitle: "Class Availability", icon: Calendar },
    { num: 4, id: "contact", label: "Contact", subtitle: "Confirmation Details", icon: Send },
  ];

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
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative p-6 sm:p-10 text-center flex flex-col items-center gap-3 sm:gap-4 animate-in fade-in zoom-in-95 duration-400">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-lg border-4 border-white animate-bounce-subtle">
          <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[3]" />
        </div>

        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
            Intake Successfully Submitted
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-[#071245] mt-2">
            Welcome to CSNN Toronto, {firstName}!
          </h3>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-lg mx-auto mt-1">
            Your seat for the Healthy Eating &amp; Lifestyle Certificate (October 28) has been provisionally reserved. An admissions advisor will connect with you via {reachMethod || "your contact method"}.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-5 h-10 rounded-full bg-slate-50 border border-slate-200 text-[#071245] font-black text-xs hover:bg-slate-100 transition-colors shadow-2xs hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-[#B87503]" />
            <span>Questions now? Call {PROGRAM_INFO.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs font-black text-[#B87503] hover:underline cursor-pointer py-1 px-3"
          >
            ← Register Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(7,18,69,0.12)] border border-slate-200/90 overflow-hidden relative">
      
      {/* Dual-Pane Layout: Left Vertical Stepper + Right Interactive Form Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[490px]">
        
        {/* ==============================================================
            LEFT SIDEBAR (Clean Segmented Vertical Stepper - NO LINE OVERLAPPING)
            ============================================================== */}
        <div className="md:col-span-4 lg:col-span-3 bg-[#071245] text-white p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
          
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#F6C915]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Progress Block */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-[#F6C915]/40 text-[#F6C915] text-[10px] font-black tracking-wider uppercase">
                <Sparkles className="w-2.5 h-2.5 text-[#F6C915]" />
                Intake Steps
              </span>
              <span className="text-[11px] font-black text-amber-300">
                {progressPct}% Done
              </span>
            </div>

            <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner">
              <div
                className="bg-gradient-to-r from-[#FFE685] via-[#F6C915] to-[#D4A017] h-full rounded-full transition-all duration-400 ease-out shadow-[0_0_8px_rgba(246,201,21,0.8)]"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Stepper Items: Fully Segmented Vertical Nodes on Desktop (Zero Overlap Line) */}
          <div className="my-3 sm:my-auto py-2 sm:py-3 relative z-10">
            <div className="grid grid-cols-4 md:grid-cols-1 gap-1.5 md:gap-0">
              {stepsList.map((step, idx) => {
                const isCurrent = currentStep === step.num;
                const isCompleted = currentStep > step.num;
                const isLast = idx === stepsList.length - 1;

                return (
                  <div key={step.num} className="flex flex-col md:w-full">
                    
                    {/* Step Row Item */}
                    <button
                      type="button"
                      onClick={() => {
                        if (isCompleted) {
                          setCurrentStep(step.num);
                          setStepErrors({});
                        }
                      }}
                      disabled={!isCompleted && !isCurrent}
                      className={`flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-1.5 md:gap-3.5 transition-all p-1 md:p-2 rounded-xl group ${
                        isCompleted
                          ? "cursor-pointer hover:bg-white/10 active:scale-95"
                          : isCurrent
                          ? "cursor-default"
                          : "cursor-not-allowed opacity-45"
                      }`}
                    >
                      {/* Opaque Solid Node Circle (Guarantees zero overlap through numbers) */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-all duration-300 relative shadow-sm ${
                          isCurrent
                            ? "bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] shadow-[0_0_15px_rgba(246,201,21,0.5)] ring-4 ring-[#F6C915]/25 scale-110"
                            : isCompleted
                            ? "bg-emerald-600 text-white group-hover:scale-105 shadow-md"
                            : "bg-[#0A1856] text-slate-300 border-2 border-white/20 shadow-inner"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 stroke-[3] animate-in zoom-in-75 duration-200" />
                        ) : (
                          <span className="font-extrabold">{step.num}</span>
                        )}
                      </div>

                      {/* Step Labels */}
                      <div className="flex flex-col overflow-hidden">
                        <span
                          className={`text-[11px] sm:text-xs font-black tracking-wide leading-tight transition-colors ${
                            isCurrent
                              ? "text-[#F6C915]"
                              : isCompleted
                              ? "text-white group-hover:text-amber-200"
                              : "text-white/60"
                          }`}
                        >
                          {step.num}. {step.label}
                        </span>
                        <span className="hidden md:inline text-[9.5px] text-white/50 font-medium leading-tight mt-0.5">
                          {step.subtitle}
                        </span>
                      </div>
                    </button>

                    {/* Dedicated Segmented Connector Line (Between Circles Only — NEVER CUTS THROUGH NUMBERS) */}
                    {!isLast && (
                      <div className="hidden md:flex items-center pl-[18px] py-0.5">
                        <div
                          className={`w-[2px] h-4 sm:h-5 rounded-full transition-all duration-300 ${
                            currentStep > step.num
                              ? "bg-gradient-to-b from-emerald-500 to-[#F6C915]"
                              : "bg-white/15"
                          }`}
                        />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Security Guarantee */}
          <div className="hidden md:flex items-center gap-2 pt-3 border-t border-white/10 text-[10.5px] text-white/75 font-semibold relative z-10">
            <Lock className="w-3.5 h-3.5 text-[#F6C915] shrink-0" />
            <span>256-Bit Encrypted · Zero Tuition Today</span>
          </div>

        </div>

        {/* ==============================================================
            RIGHT CONTENT AREA (Step Form Options & Interactive Controls)
            ============================================================== */}
        <div className="md:col-span-8 lg:col-span-9 p-4 sm:p-6 lg:p-7 flex flex-col justify-between bg-white relative">
          
          {/* Animated Step Body Container */}
          <div key={currentStep} className="animate-in fade-in slide-in-from-right-3 duration-300">
            
            {/* STEP 1: PROFILE / ABOUT YOU */}
            {currentStep === 1 && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#071245] text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>Step 1 of 4 · Profile</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-[#071245] leading-tight">
                    Which best describes you?
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                    Select the primary motivation that brought you to the Healthy Eating &amp; Lifestyle Certificate.
                  </p>
                </div>

                {/* Highly Interactive Motivation Option Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {MOTIVATION_OPTIONS.map((opt, idx) => {
                    const isSelected = motivation === opt.id;
                    const isLast = idx === MOTIVATION_OPTIONS.length - 1;

                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          setMotivation(opt.id);
                          if (stepErrors.motivation) {
                            setStepErrors((prev) => ({ ...prev, motivation: "" }));
                          }
                        }}
                        className={`p-3 sm:p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${
                          isLast ? "sm:col-span-2" : ""
                        } ${
                          isSelected
                            ? "bg-[#071245] border-[#071245] text-white shadow-md ring-2 ring-[#071245]/20 scale-[1.01]"
                            : "bg-white hover:bg-slate-50 border-slate-200 hover:border-[#071245]/40 shadow-2xs hover:shadow-xs text-slate-700 hover:-translate-y-0.5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 transition-transform ${
                              isSelected
                                ? "bg-white text-[#071245] shadow-xs scale-105"
                                : "bg-slate-100 text-[#071245] border border-slate-200 group-hover:bg-slate-200"
                            }`}
                          >
                            {opt.num}
                          </span>
                          <div>
                            <h4 className={`text-xs sm:text-[13.5px] font-black leading-tight ${isSelected ? "text-white" : "text-[#071245]"}`}>
                              {opt.title}
                            </h4>
                            <p className={`text-[10.5px] sm:text-[11.5px] mt-0.5 font-medium ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                              {opt.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <span
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 transition-all ${
                            isSelected
                              ? "border-white bg-white text-[#071245] shadow-sm"
                              : "border-slate-300 bg-white group-hover:border-slate-400"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3] animate-in zoom-in-75 duration-200" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {stepErrors.motivation && (
                  <p className="text-xs text-[#D62B2B] font-bold animate-in shake duration-200">{stepErrors.motivation}</p>
                )}
              </div>
            )}

            {/* STEP 2: GOALS / ASPIRATIONS */}
            {currentStep === 2 && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#071245] text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>Step 2 of 4 · Goals</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-[#071245] leading-tight">
                    What do you want out of it?
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                    Tailor your certificate experience and personal expectations.
                  </p>
                </div>

                {/* Focus Areas Multi-Select Chips */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                    Focus areas (pick all that interest you)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Digestion & gut health",
                      "Immunity",
                      "Stress & wellness",
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
                          className={`p-2.5 rounded-xl border font-bold text-xs flex items-center justify-between transition-all cursor-pointer active:scale-95 ${
                            isChecked
                              ? "bg-[#071245] border-[#071245] text-white shadow-xs scale-[1.01]"
                              : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300"
                          }`}
                        >
                          <span className="truncate">{area}</span>
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-1 transition-colors ${
                              isChecked ? "border-white bg-white text-[#071245]" : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {stepErrors.focusAreas && (
                    <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.focusAreas}</p>
                  )}
                </div>

                {/* Certificate Level & Nutrition Background */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                      Certificate aiming for
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { title: "Attendance", desc: "10 workshops" },
                        { title: "Achievement", desc: "Test + 4 CECs" },
                        { title: "Help decide", desc: "Advisor helps" },
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
                            className={`p-2 rounded-xl border text-left transition-all cursor-pointer active:scale-95 ${
                              isSelected
                                ? "bg-[#071245] border-[#071245] text-white shadow-xs"
                                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300"
                            }`}
                          >
                            <div className="font-black text-[11px] sm:text-xs leading-tight">{item.title}</div>
                            <div className={`text-[9.5px] mt-0.5 ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                              {item.desc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {stepErrors.certificateType && (
                      <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.certificateType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                      Nutrition background
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        "New to it",
                        "Self-study",
                        "Health / Pro",
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
                            className={`p-2 rounded-xl border text-center text-[11px] sm:text-xs font-black transition-all cursor-pointer active:scale-95 ${
                              isSelected
                                ? "bg-[#071245] border-[#071245] text-white shadow-xs"
                                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300"
                            }`}
                          >
                            {bg}
                          </button>
                        );
                      })}
                    </div>
                    {stepErrors.background && (
                      <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.background}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: SCHEDULE / AVAILABILITY */}
            {currentStep === 3 && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#071245] text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>Step 3 of 4 · Schedule</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-[#071245] leading-tight">
                    Your schedule &amp; contact preference
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                    Classes run live online, Wednesdays 6:00–8:30 pm EST.
                  </p>
                </div>

                {/* October 28 Availability */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                    Can you join us on October 28?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "Yes, I'm ready for October 28",
                      "Not sure yet, please call me",
                      "Notify me of next intake",
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
                          className={`p-2.5 rounded-xl border text-left text-xs font-black transition-all cursor-pointer active:scale-95 ${
                            isSelected
                              ? "bg-[#071245] border-[#071245] text-white shadow-xs"
                              : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {stepErrors.readyOct14 && (
                    <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.readyOct14}</p>
                  )}
                </div>

                {/* Contact Method & Referral Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                      Best way to reach you
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
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
                            className={`p-2 rounded-xl border text-center text-xs font-black transition-all cursor-pointer active:scale-95 ${
                              isSelected
                                ? "bg-[#071245] border-[#071245] text-white shadow-xs"
                                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300"
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                    {stepErrors.reachMethod && (
                      <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.reachMethod}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="wizard-referral" className="block text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      id="wizard-referral"
                      value={heardFrom}
                      onChange={(e) => setHeardFrom(e.target.value)}
                      className="w-full h-9 sm:h-10 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] shadow-2xs"
                    >
                      <option value="">Select an option...</option>
                      <option value="Google search">Google search</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Friend / family">Friend / family</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT DETAILS */}
            {currentStep === 4 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#071245] text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>Step 4 of 4 · Contact</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-[#071245] leading-tight">
                    Where should we send your confirmation?
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                    Enter your details to finalize your intake seat.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  <div>
                    <label htmlFor="wizard-fname" className="block text-[10.5px] font-black text-[#071245] mb-0.5">First name *</label>
                    <input
                      id="wizard-fname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className={`w-full h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                        stepErrors.firstName ? "border-[#D62B2B]" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="wizard-lname" className="block text-[10.5px] font-black text-[#071245] mb-0.5">Last name *</label>
                    <input
                      id="wizard-lname"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      className={`w-full h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                        stepErrors.lastName ? "border-[#D62B2B]" : ""
                      }`}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="wizard-email" className="block text-[10.5px] font-black text-[#071245] mb-0.5">Email address *</label>
                    <input
                      id="wizard-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className={`w-full h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                        stepErrors.email ? "border-[#D62B2B]" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="wizard-phone" className="block text-[10.5px] font-black text-[#071245] mb-0.5">Phone number *</label>
                    <input
                      id="wizard-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      className={`w-full h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                        stepErrors.phone ? "border-[#D62B2B]" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="wizard-city" className="block text-[10.5px] font-black text-[#071245] mb-0.5">City *</label>
                    <input
                      id="wizard-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className={`w-full h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] focus:border-[#071245] focus:ring-1 focus:ring-[#071245] shadow-2xs ${
                        stepErrors.city ? "border-[#D62B2B]" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="wizard-province" className="block text-[10.5px] font-black text-[#071245] mb-0.5">Province *</label>
                    <select
                      id="wizard-province"
                      value={provinceCountry}
                      onChange={(e) => setProvinceCountry(e.target.value)}
                      className="w-full h-9 px-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] shadow-2xs"
                    >
                      <option value="Ontario">Ontario</option>
                      <option value="Other province">Other province</option>
                      <option value="Outside Canada">Outside Canada</option>
                    </select>
                  </div>
                </div>

                {/* Optional Note */}
                <div>
                  <label htmlFor="wizard-message" className="block text-[10.5px] font-black text-[#071245] mb-0.5">
                    Optional note or question for advisor
                  </label>
                  <input
                    id="wizard-message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any special health questions or goals?"
                    className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071245] placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-start gap-2 cursor-pointer pt-0.5">
                  <input
                    type="checkbox"
                    checked={consentAgreed}
                    onChange={(e) => setConsentAgreed(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 rounded text-[#071245] focus:ring-[#071245] accent-[#071245]"
                  />
                  <span className="text-[10.5px] text-slate-500 font-semibold leading-tight">
                    I agree to be contacted by CSNN Toronto admissions regarding this program. Unsubscribe anytime.
                  </span>
                </label>

                {/* Privacy Guarantee */}
                <div className="flex items-center gap-1.5 text-slate-500 text-[10.5px] font-medium pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                  <span>Secure 256-bit encrypted transmission. Zero tuition charged today.</span>
                </div>
              </div>
            )}

          </div>

          {/* Navigation Controls Footer */}
          <div className="flex items-center justify-between gap-3 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-4 h-9 sm:h-10 rounded-full border border-slate-200 text-[#071245] hover:bg-slate-50 text-xs font-black transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-skeuo-primary animate-shimmer inline-flex items-center gap-2 px-6 sm:px-8 h-9 sm:h-10 rounded-full text-xs font-black tracking-wide cursor-pointer ml-auto shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F6C915]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (validateStep4()) {
                    setIsSubmitted(true);
                  }
                }}
                className="btn-skeuo-gold animate-shimmer inline-flex items-center gap-2 px-6 sm:px-8 h-9 sm:h-10 rounded-full text-[#071245] text-xs font-black cursor-pointer shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all border-2 border-[#FFF8B8] ml-auto"
              >
                <ShieldCheck className="w-4 h-4 text-[#071245]" />
                <span>Complete Free Registration</span>
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
