"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS } from "@/data/programData";
import { StagingNotice } from "@/components/forms/StagingNotice";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import { ShieldCheck, AlertCircle, ChevronDown } from "lucide-react";

export function HeroRegistrationForm() {
  const [selectedMotivation, setSelectedMotivation] = useState<string>("health-energy");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

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
    validate();
  };

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 lg:p-7 shadow-[0_20px_50px_-10px_rgba(19,39,122,0.18),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E2D8B3] relative transition-all">
      {/* Sleek, Modern Form Header */}
      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#13277A]">
          <ShieldCheck className="w-4 h-4 text-[#1B7A42]" />
          <span>Free Seat Hold</span>
        </span>
        <span className="badge-skeuo-gold text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 rounded-full text-[#8A6208]">
          Limited Seats · Oct 14
        </span>
      </div>

      <h3 className="text-lg sm:text-2xl font-black text-[#13277A] leading-tight mb-0.5 sm:mb-1">
        Reserve your seat for October 14
      </h3>
      <p className="text-xs sm:text-[13px] text-[#5B5440] font-semibold mb-2.5 sm:mb-3.5">
        No payment required today. An advisor will discuss your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
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
              className="w-full h-10 sm:h-11 pl-3.5 pr-9 sm:pl-4 sm:pr-10 rounded-xl bg-[#FAFAFA] hover:bg-white border border-[#E6D9A8] text-xs sm:text-sm font-bold text-[#13277A] focus:outline-none focus:border-[#13277A] focus:ring-1 focus:ring-[#F6C915] appearance-none cursor-pointer transition-all shadow-2xs"
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
        <div className="space-y-2 sm:space-y-2.5">
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
              className={`w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
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
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
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
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl input-skeuo text-xs sm:text-sm font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
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

        {/* Action Button */}
        <div className="pt-0.5">
          <button
            type="submit"
            disabled
            className="w-full h-10 sm:h-12 rounded-xl bg-gradient-to-b from-[#1E389B] to-[#0A1856] text-white/95 font-black text-xs sm:text-sm cursor-not-allowed opacity-90 shadow-md flex items-center justify-center gap-2 border border-[#2E4DBF]/50"
          >
            <ShieldCheck className="w-4 h-4 text-[#F6C915]" />
            <span>Submission Paused (Staging Mode)</span>
          </button>
          <p className="mt-1.5 text-center text-[10px] text-[#5B5440] font-semibold">
            Email routing safely locked until official CSNN authorization. No fee today.
          </p>
        </div>
      </form>
    </div>
  );
}
