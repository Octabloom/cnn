"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS } from "@/data/programData";
import { StagingNotice } from "@/components/forms/StagingNotice";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [motivation, setMotivation] = useState<string>("health-energy");
  const [focusAreas, setFocusAreas] = useState<string[]>([
    "Digestion & gut health",
    "Energy & weight",
  ]);
  const [certificateType, setCertificateType] = useState<string>("Attendance");
  const [background, setBackground] = useState<string>("New to nutrition");
  const [readyOct14, setReadyOct14] = useState<string>("Yes, I'm ready for October 14");
  const [reachMethod, setReachMethod] = useState<string>("Email");
  const [heardFrom, setHeardFrom] = useState<string>("Google search");

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
        setStepErrors({ motivation: "Please select an option to continue." });
        return;
      }
      setStepErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (focusAreas.length === 0) {
        setStepErrors({ focusAreas: "Please select at least one focus area." });
        return;
      }
      setStepErrors({});
      setCurrentStep(3);
    } else if (currentStep === 3) {
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
      <div className="glass-card-light rounded-[22px] sm:rounded-[36px] shadow-[0_30px_80px_rgba(19,39,122,0.15)] border-2 border-white/90 overflow-hidden relative p-6 sm:p-10 text-center flex flex-col items-center gap-4 sm:gap-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-3 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-lg">
          <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>
        
        <div className="max-w-md mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Official Seat Hold Confirmed
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#13277A] leading-tight">
            Welcome, {firstName || "Friend"}!
          </h3>
          <p className="text-xs sm:text-sm text-[#5B5440] font-semibold mt-2 leading-relaxed">
            Your intake profile for the <strong>October 14, 2026</strong> Healthy Eating &amp; Lifestyle Certificate has been recorded. A CSNN Toronto admissions advisor will reach out to you within 24 hours.
          </p>
        </div>

        <div className="w-full max-w-md bg-[#FAF3D8] rounded-2xl p-4 border border-[#E8DEC0] text-xs font-bold text-[#8A6208] space-y-1.5 text-left">
          <div className="flex justify-between items-center pb-1.5 border-b border-[#E8DEC0]/80">
            <span className="text-[#5B5440]">Applicant:</span>
            <span className="text-[#13277A] font-black">{firstName} {lastName}</span>
          </div>
          <div className="flex justify-between items-center pb-1.5 border-b border-[#E8DEC0]/80">
            <span className="text-[#5B5440]">Confirmation sent to:</span>
            <span className="text-[#13277A] font-black">{email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#5B5440]">Status:</span>
            <span className="text-emerald-700 font-black">Zero Tuition Due Today · Confirmed</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          className="text-xs sm:text-sm font-black text-[#13277A] hover:underline cursor-pointer pt-2"
        >
          ← Edit Reservation or Register Another Student
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card-light rounded-[22px] sm:rounded-[36px] shadow-[0_30px_80px_rgba(19,39,122,0.15)] border-2 border-white/90 overflow-hidden relative">
      
      {/* Top Liquid Amber Progress Header */}
      <div className="bg-gradient-to-r from-[#071245] via-[#0B1A5A] to-[#071245] text-white p-4 sm:p-7 sm:p-9 relative border-b border-[#F6C915]/30">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-5">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border border-[#FFF0A8]">
              {currentStep}
            </span>
            <span className="text-xs sm:text-base font-black uppercase tracking-wider text-[#FBECB0]">
              Step {currentStep} of 4 —{" "}
              {currentStep === 1 && "About You"}
              {currentStep === 2 && "Your Goals"}
              {currentStep === 3 && "Your Schedule"}
              {currentStep === 4 && "Contact Details"}
            </span>
          </div>
          <span className="badge-skeuo-gold text-[10px] sm:text-xs font-black px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[#8A6208]">
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
              <h3 className="text-xl sm:text-3xl font-black text-[#13277A] mb-1 sm:mb-1.5 leading-tight">
                Which best describes you?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5440] font-semibold">
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
                        ? "bg-gradient-to-r from-[#FFFBEA] to-[#FFF4C7] border-[#F6C915] shadow-[0_4px_16px_rgba(246,201,21,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] scale-[1.01]"
                        : "bg-white/80 hover:bg-white border-[#EAE0B7] hover:border-[#D8C78B] shadow-sm text-[#5B5440]"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-sm ${
                          isSelected
                            ? "bg-gradient-to-b from-[#1C389E] to-[#0A1856] text-[#F6C915] border border-[#F6C915]/50 shadow-[0_2px_8px_rgba(19,39,122,0.3)]"
                            : "bg-gradient-to-b from-white to-[#F0E6BD] text-[#8A6208] border border-[#E5D79E]"
                        }`}
                      >
                        {opt.num}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-base font-black text-[#0F1F5C] leading-snug">
                          {opt.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#5B5440] mt-0.5 font-medium">
                          {opt.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <span
                      className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#13277A] bg-[#13277A] text-[#F6C915] shadow-sm"
                          : "border-[#D8C78B] bg-white/60"
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
              <h3 className="text-xl sm:text-3xl font-black text-[#13277A] mb-1 sm:mb-1.5 leading-tight">
                What do you want out of it?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5440] font-semibold">
                Tailor your certificate experience and expectations.
              </p>
            </div>

            {/* Focus Areas (Multi-select) */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-2 sm:mb-3">
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
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border font-extrabold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "bg-gradient-to-r from-[#FFFBEA] to-[#FFF4C7] border-[#F6C915] text-[#13277A] shadow-[0_2px_10px_rgba(246,201,21,0.2)]"
                          : "bg-white/80 border-[#EFE1AD] text-[#5B5440] hover:border-[#D8C78B]"
                      }`}
                    >
                      <span>{area}</span>
                      <span
                        className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                          isChecked ? "border-[#13277A] bg-[#13277A] text-[#F6C915]" : "border-[#EFE1AD] bg-white"
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
              <label className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-2 sm:mb-3">
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
                      onClick={() => setCertificateType(item.title)}
                      className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-[#F6C915] text-white shadow-[0_6px_20px_rgba(19,39,122,0.3)] scale-[1.01]"
                          : "bg-white/80 border-[#EFE1AD] text-[#5B5440] hover:border-[#D8C78B]"
                      }`}
                    >
                      <div className="font-black text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</div>
                      <div className={`text-[11px] sm:text-xs ${isSelected ? "text-[#FBECB0]" : "text-[#5B5440]"}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nutrition Background */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-2 sm:mb-3">
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
                      onClick={() => setBackground(bg)}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-center text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-[#F6C915] text-white shadow-md"
                          : "bg-white/80 border-[#EFE1AD] text-[#5B5440] hover:border-[#D8C78B]"
                      }`}
                    >
                      {bg}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: YOUR SCHEDULE */}
        {currentStep === 3 && (
          <div className="space-y-5 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#13277A] mb-1 sm:mb-1.5 leading-tight">
                Your schedule &amp; contact preference
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5440] font-semibold">
                Classes run live online, evenings 6:00–8:00 pm EST.
              </p>
            </div>

            {/* October 14 Availability */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-2 sm:mb-3">
                Can you join us on October 14?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                {[
                  "Yes, I'm ready for October 14",
                  "Not sure yet, please call me",
                  "Notify me of the next intake",
                ].map((opt) => {
                  const isSelected = readyOct14 === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setReadyOct14(opt)}
                      className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-[#F6C915] text-white shadow-md scale-[1.01]"
                          : "bg-white/80 border-[#EFE1AD] text-[#5B5440] hover:border-[#D8C78B]"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Best way to reach you */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-2 sm:mb-3">
                Best way to reach you
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
                {["Phone", "Email", "Text"].map((method) => {
                  const isSelected = reachMethod === method;
                  return (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setReachMethod(method)}
                      className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-center text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-[#F6C915] text-white shadow-md"
                          : "bg-white/80 border-[#EFE1AD] text-[#5B5440] hover:border-[#D8C78B]"
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="wizard-referral" className="block text-xs font-black uppercase tracking-wider text-[#13277A] mb-1.5 sm:mb-2">
                How did you hear about us?
              </label>
              <select
                id="wizard-referral"
                value={heardFrom}
                onChange={(e) => setHeardFrom(e.target.value)}
                className="w-full h-11 sm:h-14 px-4 sm:px-5 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] focus:border-[#13277A]"
              >
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
              <h3 className="text-xl sm:text-3xl font-black text-[#13277A] mb-1 sm:mb-1.5 leading-tight">
                Where should we send your confirmation?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5440] font-semibold">
                Enter your details to finalize your intake profile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="wizard-fname" className="block text-xs font-black text-[#13277A] mb-1">First name *</label>
                <input
                  id="wizard-fname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] ${
                    stepErrors.firstName ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.firstName && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-lname" className="block text-xs font-black text-[#13277A] mb-1">Last name *</label>
                <input
                  id="wizard-lname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] ${
                    stepErrors.lastName ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.lastName && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.lastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-email" className="block text-xs font-black text-[#13277A] mb-1">Email address *</label>
                <input
                  id="wizard-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] ${
                    stepErrors.email ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.email && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-phone" className="block text-xs font-black text-[#13277A] mb-1">Phone number *</label>
                <input
                  id="wizard-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] ${
                    stepErrors.phone ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.phone && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-city" className="block text-xs font-black text-[#13277A] mb-1">City *</label>
                <input
                  id="wizard-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className={`w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] ${
                    stepErrors.city ? "border-[#D62B2B]" : ""
                  }`}
                />
                {stepErrors.city && (
                  <p className="mt-1 text-xs text-[#D62B2B] font-bold">{stepErrors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="wizard-province" className="block text-xs font-black text-[#13277A] mb-1">Province / Country *</label>
                <select
                  id="wizard-province"
                  value={provinceCountry}
                  onChange={(e) => setProvinceCountry(e.target.value)}
                  className="w-full h-10 sm:h-13 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C]"
                >
                  <option value="Ontario">Ontario</option>
                  <option value="Other province">Other province</option>
                  <option value="Outside Canada">Outside Canada</option>
                </select>
              </div>
            </div>

            {/* Optional note */}
            <div>
              <label htmlFor="wizard-message" className="block text-xs font-black text-[#13277A] mb-1">
                Optional note or question for your advisor
              </label>
              <textarea
                id="wizard-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Any special questions or dietary areas you want covered?"
                className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172]"
              />
            </div>

            {/* Consent Checkbox */}
            <label className="flex items-start gap-2.5 sm:gap-3.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={consentAgreed}
                onChange={(e) => setConsentAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#13277A] focus:ring-[#13277A] accent-[#13277A]"
              />
              <span className="text-[11px] sm:text-xs text-[#5B5440] font-semibold leading-relaxed">
                I agree to be contacted by CSNN Toronto about this program and related educational updates. I can unsubscribe anytime.
              </span>
            </label>
            {stepErrors.consent && (
              <p className="text-xs text-[#D62B2B] font-bold">{stepErrors.consent}</p>
            )}

            {/* Staging Notice */}
            <StagingNotice />
          </div>
        )}

        {/* Wizard Navigation Footer with Shimmer Buttons */}
        <div className="flex items-center justify-between gap-3 pt-5 sm:pt-8 border-t border-[#EFE1AD]">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 h-11 sm:h-13 rounded-full border-2 border-[#EFE1AD] text-[#13277A] hover:bg-white text-xs sm:text-sm font-black transition-colors cursor-pointer shadow-sm"
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
