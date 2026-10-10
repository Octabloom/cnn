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
    <div className="bg-white/95 backdrop-blur-2xl rounded-[20px] sm:rounded-[24px] p-3.5 sm:p-4.5 lg:p-5 shadow-[0_16px_40px_-10px_rgba(19,39,122,0.16),0_1px_0_rgba(255,255,255,1)] border-2 border-[#E2D8B3] relative transition-all">
      {/* Sleek, Modern Form Header */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#13277A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1B7A42]" />
          <span>Free Seat Hold</span>
        </span>
        <span className="badge-skeuo-gold text-[10px] font-black px-2.5 py-0.5 rounded-full text-[#8A6208]">
          Limited Seats · Oct 14
        </span>
      </div>

      <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#13277A] leading-tight mb-0.5">
        Reserve your seat for October 14
      </h3>
      <p className="text-[11px] sm:text-xs text-[#5B5440] font-semibold mb-2 sm:mb-2.5">
        No payment required today. An advisor will discuss your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Motivation Dropdown */}
        <div>
          <label htmlFor="hero-motivation" className="block text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-[#0F1F5C] mb-0.5">
            What brings you to this program?
          </label>
          <div className="relative">
            <select
              id="hero-motivation"
              value={selectedMotivation}
              onChange={(e) => setSelectedMotivation(e.target.value)}
              className="w-full h-8.5 sm:h-9 pl-3 pr-8 rounded-lg bg-[#FAFAFA] hover:bg-white border border-[#E6D9A8] text-xs font-bold text-[#13277A] focus:outline-none focus:border-[#13277A] focus:ring-1 focus:ring-[#F6C915] appearance-none cursor-pointer transition-all shadow-2xs"
            >
              {MOTIVATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="py-1 text-xs font-bold text-[#0F1F5C]">
                  {opt.num} · {opt.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#A8780F] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Tactile Form Inputs */}
        <div className="space-y-1.5 sm:space-y-2">
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
              className={`w-full h-8.5 sm:h-9 px-3 rounded-lg input-skeuo text-xs font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
                errors.fullName ? "border-[#D62B2B] bg-red-50/50" : ""
              }`}
            />
            {errors.fullName && (
              <p className="mt-0.5 text-[9.5px] text-[#D62B2B] font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                className={`w-full h-8.5 sm:h-9 px-2.5 rounded-lg input-skeuo text-xs font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
                  errors.email ? "border-[#D62B2B] bg-red-50/50" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-0.5 text-[9.5px] text-[#D62B2B] font-bold flex items-center gap-1">
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
                className={`w-full h-8.5 sm:h-9 px-2.5 rounded-lg input-skeuo text-xs font-bold text-[#0F1F5C] placeholder:text-[#9A9172] ${
                  errors.phone ? "border-[#D62B2B] bg-red-50/50" : ""
                }`}
              />
              {errors.phone && (
                <p className="mt-0.5 text-[9.5px] text-[#D62B2B] font-bold flex items-center gap-1">
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
            className="w-full h-9 sm:h-9.5 rounded-lg bg-gradient-to-b from-[#1E389B] to-[#0A1856] text-white/95 font-black text-xs cursor-not-allowed opacity-90 shadow-md flex items-center justify-center gap-1.5 border border-[#2E4DBF]/50"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>Submission Paused (Staging Mode)</span>
          </button>
          <p className="mt-1 text-center text-[9.5px] text-[#5B5440] font-semibold">
            Email routing safely locked until official CSNN authorization. No fee today.
          </p>
        </div>
      </form>
    </div>
  );
}
