"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS } from "@/data/programData";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import { ShieldCheck, AlertCircle, ChevronDown, ArrowRight, CheckCircle2, Sparkles, Lock, Check } from "lucide-react";

export function HeroRegistrationForm() {
  const [selectedMotivation, setSelectedMotivation] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ motivation?: string; fullName?: string; email?: string; phone?: string }>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { motivation?: string; fullName?: string; email?: string; phone?: string } = {};
    if (!selectedMotivation) {
      newErrors.motivation = "Please select what brings you to this program.";
    }
    if (!isValidName(fullName)) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!isValidPhone(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(19,39,122,0.22),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E2D8B3] relative text-left flex flex-col gap-3.5 animate-in fade-in zoom-in-95 duration-300">
        {/* Top ambient highlight */}
        <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

        {/* Simple & Clean Smooth Bouncing Checkmark Icon (No Golden Surround) */}
        <div className="flex items-center gap-3.5 pb-2.5 border-b border-[#E8DEC0]">
          <div className="relative shrink-0">
            <div className="animate-smooth-bounce relative flex items-center justify-center select-none">
              {/* Soft Ambient Emerald Glow */}
              <div className="absolute -inset-1.5 rounded-full bg-emerald-400/25 blur-md pointer-events-none" />
              {/* Clean, Simple Emerald Circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#22C55E] to-[#15803D] flex items-center justify-center relative shadow-[0_8px_20px_-4px_rgba(21,128,61,0.45)] border-3 border-white">
                <div className="absolute top-0.5 inset-x-1.5 h-4 rounded-t-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                <Check className="w-6 h-6 text-white stroke-[3.5] drop-shadow-sm relative z-10" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-[#071245] leading-tight">
              Congratulations{fullName ? `, ${fullName}` : ""}!
            </h3>
            <p className="text-[11px] sm:text-xs text-[#5B5440] font-bold mt-0.5">
              Your seat for October 14 is officially reserved.
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-[#FFFDF5] to-[#FAF1D0] rounded-2xl p-3.5 border border-[#E8DEC0] space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-[#E8DEC0]/70">
            <span className="text-[#5B5440] font-bold">Program:</span>
            <span className="text-[#13277A] font-black">Healthy Eating &amp; Lifestyle</span>
          </div>
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-[#E8DEC0]/70">
            <span className="text-[#5B5440] font-bold">Intake Date:</span>
            <span className="text-[#13277A] font-black">Oct 14, 2026 · 6:00 pm EST</span>
          </div>
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-[#E8DEC0]/70">
            <span className="text-[#5B5440] font-bold">Confirmation Email:</span>
            <span className="text-[#13277A] font-black">{email}</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#5B5440] font-bold">Advisor Phone:</span>
            <span className="text-[#13277A] font-black">{phone}</span>
          </div>
        </div>

        {/* What Happens Next Roadmap */}
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#A8780F] block mb-2">
            What Happens Next (Within 24 Hours):
          </span>
          <div className="space-y-1.5 text-[11px] text-[#0F1F5C] font-bold">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/15 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">1</span>
              <span>Admissions Director verifies your schedule details</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/15 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">2</span>
              <span>You receive your complete 10-workshop welcome kit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/15 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">3</span>
              <span>100% Risk-Free: Zero tuition due until class starts</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="pt-1 flex items-center justify-between border-t border-[#E8DEC0]">
          <span className="text-[10px] font-extrabold text-[#1B7A42]">
            ✓ Status: Priority Hold Active
          </span>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setAttemptedSubmit(false);
            }}
            className="text-[11px] font-black text-[#13277A] hover:underline cursor-pointer"
          >
            ← Edit Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-6.5 shadow-[0_25px_60px_-15px_rgba(19,39,122,0.22),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E5DAAF] relative transition-all">
      {/* Top golden ambient line */}
      <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

      {/* Sleek, Modern Form Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Free Seat Hold</span>
        </span>
        <span className="badge-skeuo-gold text-[10px] sm:text-xs font-black px-3 py-1 rounded-full text-[#8A6208] flex items-center gap-1.5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEAB07] animate-pulse" />
          <span>Limited Seats · Oct 14</span>
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-[#071245] leading-tight mb-1">
        Reserve your seat for October 14
      </h3>
      <p className="text-xs sm:text-[13px] text-[#5B5440] font-semibold mb-3">
        No payment required today. An advisor will discuss your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        {/* Motivation Dropdown */}
        <div>
          <label htmlFor="hero-motivation" className="block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#0F1F5C] mb-1">
            What brings you to this program?
          </label>
          <div className="relative">
            <select
              id="hero-motivation"
              value={selectedMotivation}
              onChange={(e) => {
                setSelectedMotivation(e.target.value);
                if (attemptedSubmit) validate();
              }}
              className={`w-full h-10 sm:h-11 pl-3.5 pr-9 rounded-xl bg-white hover:bg-[#FAF8F0] border-1.5 border-[#E2D8B3] text-xs sm:text-sm font-bold text-[#13277A] focus:outline-none focus:border-[#13277A] focus:ring-2 focus:ring-[#F6C915]/50 appearance-none cursor-pointer transition-all shadow-xs ${
                errors.motivation ? "border-[#D62B2B] bg-red-50/40" : ""
              }`}
            >
              <option value="">Select what brings you to this program...</option>
              {MOTIVATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="py-1 text-xs font-bold text-[#0F1F5C]">
                  {opt.num} · {opt.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#A8780F] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.motivation && (
            <p className="mt-1 text-[10px] text-[#D62B2B] font-bold flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.motivation}
            </p>
          )}
        </div>

        {/* Tactile Form Inputs */}
        <div className="space-y-2.5">
          <div>
            <label htmlFor="hero-name" className="sr-only">Full Name</label>
            <input
              id="hero-name"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (attemptedSubmit) validate();
              }}
              placeholder="Your Full Name"
              className={`w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-white border-1.5 border-[#E2D8B3] text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] focus:border-[#13277A] focus:ring-2 focus:ring-[#F6C915]/50 transition-all shadow-xs ${
                errors.fullName ? "border-[#D62B2B] bg-red-50/50" : ""
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[10px] text-[#D62B2B] font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            <div>
              <label htmlFor="hero-email" className="sr-only">Email Address</label>
              <input
                id="hero-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (attemptedSubmit) validate();
                }}
                placeholder="Email Address"
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-white border-1.5 border-[#E2D8B3] text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] focus:border-[#13277A] focus:ring-2 focus:ring-[#F6C915]/50 transition-all shadow-xs ${
                  errors.email ? "border-[#D62B2B] bg-red-50/50" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[10px] text-[#D62B2B] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
              <input
                id="hero-phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (attemptedSubmit) validate();
                }}
                placeholder="Phone Number"
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-white border-1.5 border-[#E2D8B3] text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] focus:border-[#13277A] focus:ring-2 focus:ring-[#F6C915]/50 transition-all shadow-xs ${
                  errors.phone ? "border-[#D62B2B] bg-red-50/50" : ""
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-[10px] text-[#D62B2B] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Official Privacy Guarantee */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF6E8] border border-[#E8DEC0] text-[#5B5440] text-[11px] font-semibold shadow-2xs">
          <Lock className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
          <span>Official CSNN Admissions Portal · 256-Bit SSL Encrypted</span>
        </div>

        {/* High-Converting Radiant Action Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="btn-skeuo-gold animate-shimmer w-full h-11.5 sm:h-12.5 rounded-xl sm:rounded-2xl text-[#071245] font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_12px_28px_rgba(246,201,21,0.5)] hover:shadow-[0_16px_36px_rgba(246,201,21,0.65)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-2 border-[#FFF8B8] group"
          >
            <span>Hold My Free Seat Now</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#071245] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Guarantees */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-[#5B5440] font-bold pt-2 flex-wrap text-center">
            <span className="inline-flex items-center gap-1 text-[#1B7A42]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Risk-Free Hold</span>
            </span>
            <span className="text-[#A8780F]/40">•</span>
            <span>Zero Tuition Due Today</span>
            <span className="text-[#A8780F]/40">•</span>
            <span>CSNN Faculty Review</span>
          </div>
        </div>
      </form>
    </div>
  );
}
