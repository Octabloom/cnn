"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS } from "@/data/programData";
import { StagingNotice } from "@/components/forms/StagingNotice";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import { ShieldCheck, AlertCircle, ChevronDown, ArrowRight, CheckCircle2, Sparkles, Lock } from "lucide-react";

export function HeroRegistrationForm() {
  const [selectedMotivation, setSelectedMotivation] = useState<string>("health-energy");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; phone?: string } = {};
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
      <div className="bg-white/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(19,39,122,0.22),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E2D8B3] relative text-center flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
            Seat Hold Confirmed
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#13277A] leading-tight">
            Thank you, {fullName}!
          </h3>
          <p className="text-xs sm:text-sm text-[#5B5440] font-semibold mt-1 max-w-sm">
            Your seat for the October 14 intake has been provisionally reserved. A CSNN Toronto admissions advisor will review your schedule details shortly.
          </p>
        </div>
        <div className="w-full bg-[#FAF3D8] rounded-xl p-3 border border-[#E8DEC0] text-xs font-bold text-[#8A6208]">
          <span>Contact scheduled to: <strong>{email}</strong></span>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setAttemptedSubmit(false);
          }}
          className="text-xs font-black text-[#13277A] hover:underline cursor-pointer pt-1"
        >
          ← Edit Reservation Details
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_25px_60px_-15px_rgba(19,39,122,0.22),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E5DAAF] relative transition-all">
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
      <p className="text-xs sm:text-[13px] text-[#5B5440] font-semibold mb-3 sm:mb-3.5">
        No payment required today. An advisor will discuss your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Motivation Dropdown */}
        <div>
          <label htmlFor="hero-motivation" className="block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#0F1F5C] mb-1">
            What brings you to this program?
          </label>
          <div className="relative">
            <select
              id="hero-motivation"
              value={selectedMotivation}
              onChange={(e) => setSelectedMotivation(e.target.value)}
              className="w-full h-10 sm:h-11 pl-3.5 pr-9 sm:pl-4 sm:pr-10 rounded-xl bg-white hover:bg-[#FAF8F0] border-1.5 border-[#E2D8B3] text-xs sm:text-sm font-bold text-[#13277A] focus:outline-none focus:border-[#13277A] focus:ring-2 focus:ring-[#F6C915]/50 appearance-none cursor-pointer transition-all shadow-xs"
            >
              {MOTIVATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="py-1 text-xs font-bold text-[#0F1F5C]">
                  {opt.num} · {opt.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#A8780F] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
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

        {/* Staging Notice */}
        <StagingNotice compact />

        {/* High-Converting Radiant Action Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="btn-skeuo-gold animate-shimmer w-full h-12 sm:h-13 rounded-xl sm:rounded-2xl text-[#071245] font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_12px_28px_rgba(246,201,21,0.5)] hover:shadow-[0_16px_36px_rgba(246,201,21,0.65)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-2 border-[#FFF8B8] group"
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
