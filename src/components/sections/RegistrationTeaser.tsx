"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS } from "@/data/programData";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import { submitLeadToAdmin } from "@/lib/leadSubmission";
import { ShieldCheck, AlertCircle, ArrowRight, Sparkles, Check, Loader2, RotateCcw } from "lucide-react";

export function RegistrationTeaser() {
  const [selectedOpt, setSelectedOpt] = useState<string>("health-energy");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});
  const [attempted, setAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { fullName?: string; email?: string; phone?: string } = {};
    if (!isValidName(fullName)) {
      errs.fullName = "Please enter your full name.";
    }
    if (!isValidEmail(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!isValidPhone(phone)) {
      errs.phone = "Please enter a valid phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    if (validate()) {
      setIsSubmitting(true);
      const matchedOpt = MOTIVATION_OPTIONS.find((o) => o.id === selectedOpt);
      await submitLeadToAdmin({
        formSource: "Mid-Page Pathway Form",
        fullName,
        email,
        phone,
        motivation: matchedOpt?.title || selectedOpt,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="form-2"
      data-screen-label="04 Form 2"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#071245] via-[#0B1A5A] to-[#071245] text-white relative overflow-hidden border-y-4 border-[#F6C915]/70 shadow-2xl"
    >
      {/* Dynamic Background auroras */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#1E389B]/40 rounded-full blur-3xl opacity-60 -z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F6C915]/15 rounded-full blur-3xl opacity-50 -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-[#F6C915] text-xs font-black tracking-widest uppercase mb-4 border border-[#F6C915]/40 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REGISTER IN 30 SECONDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-[1.05]">
            Which one sounds like you?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 font-medium">
            Pick one, add your details, and we&apos;ll match you with the right certificate pathway.
          </p>
        </div>

        {/* 5 Motivation Cards Grid with 3D Skeuomorphic Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {MOTIVATION_OPTIONS.map((opt) => {
            const isSelected = selectedOpt === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setSelectedOpt(opt.id)}
                className={`p-6 sm:p-7 rounded-[28px] text-left transition-all duration-300 cursor-pointer flex flex-col justify-between border-2 relative overflow-hidden group ${
                  isSelected
                    ? "bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-[#3861FB] shadow-[0_0_35px_rgba(56,97,251,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] scale-[1.02]"
                    : "glass-card-dark border-white/15 hover:border-white/40 hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span
                    className={`text-xs font-black tracking-widest px-3 py-1 rounded-xl shadow-sm ${
                      isSelected
                        ? "bg-white text-[#0A1856] shadow-[0_2px_8px_rgba(56,97,251,0.5)]"
                        : "bg-white/10 text-white/80 border border-white/15"
                    }`}
                  >
                    {opt.num}
                  </span>
                  
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-[#3861FB] bg-[#3861FB] text-white shadow-[0_0_10px_rgba(56,97,251,0.8)]"
                        : "border-white/30 bg-transparent"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug group-hover:text-blue-200 transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {opt.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Compact Form Container with Frosted Glassmorphism */}
        <div className="max-w-4xl mx-auto glass-card-dark rounded-[36px] p-7 sm:p-12 shadow-2xl border-2 border-white/20">
          {isSubmitted ? (
            <div className="text-center py-6 px-4 flex flex-col items-center gap-5 animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1B7A42] to-[#25A25A] flex items-center justify-center text-white shadow-xl shadow-[#1B7A42]/40 border-2 border-white/40">
                <Check className="w-9 h-9 stroke-[3]" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B7A42]/30 text-[#86efac] text-xs font-black tracking-wider uppercase mb-2 border border-[#1B7A42]/50">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SEAT HOLD CONFIRMED · ZERO TUITION DUE TODAY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Congratulations, {fullName.split(" ")[0] || "Candidate"}!
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-medium">
                  Your seat for the <strong className="text-[#F6C915]">October 28, 2026</strong> intake has been reserved. Admissions notice has been dispatched to admissions and your confirmation has been routed.
                </p>
              </div>

              <div className="w-full max-w-md bg-white/10 rounded-2xl p-4 border border-white/15 text-left text-xs space-y-1.5 text-white/90">
                <div className="flex justify-between">
                  <span className="text-white/60">Candidate:</span>
                  <span className="font-bold text-white">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Email:</span>
                  <span className="font-bold text-white">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Phone:</span>
                  <span className="font-bold text-white">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Admissions Desk:</span>
                  <span className="font-bold text-[#F6C915]">adminoctobloom@gmail.com</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setAttempted(false);
                  setFullName("");
                  setEmail("");
                  setPhone("");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all cursor-pointer border border-white/20 mt-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Register Another Seat</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="sec-name" className="sr-only">Full Name</label>
                  <input
                    id="sec-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (attempted) validate();
                    }}
                    placeholder="Full name"
                    className={`w-full h-14 px-5 rounded-2xl bg-white text-[#0F1F5C] placeholder:text-[#9A9172] text-sm font-bold border-2 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ${
                      errors.fullName ? "border-[#D62B2B]" : "border-transparent focus:border-[#F6C915]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-[#FBECB0] flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D62B2B]" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="sec-email" className="sr-only">Email Address</label>
                  <input
                    id="sec-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (attempted) validate();
                    }}
                    placeholder="Email"
                    className={`w-full h-14 px-5 rounded-2xl bg-white text-[#0F1F5C] placeholder:text-[#9A9172] text-sm font-bold border-2 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ${
                      errors.email ? "border-[#D62B2B]" : "border-transparent focus:border-[#F6C915]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#FBECB0] flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D62B2B]" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="sec-phone" className="sr-only">Phone Number</label>
                  <input
                    id="sec-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (attempted) validate();
                    }}
                    placeholder="Phone"
                    className={`w-full h-14 px-5 rounded-2xl bg-white text-[#0F1F5C] placeholder:text-[#9A9172] text-sm font-bold border-2 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ${
                      errors.phone ? "border-[#D62B2B]" : "border-transparent focus:border-[#F6C915]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-[#FBECB0] flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D62B2B]" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Official Privacy Guarantee */}
              <div className="bg-white/10 rounded-2xl p-4 border border-[#F6C915]/30 text-white/90 text-xs flex items-start gap-3 backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-[#F6C915] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F6C915]">Official Admissions Guarantee:</strong> Real-time seat hold for the October 28, 2026 intake. Zero upfront tuition required today.
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-white/70 font-semibold">
                  Starts October 28, 2026 · Evenings 6:00–8:30 pm EST · Live Online
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-skeuo-gold animate-shimmer w-full sm:w-auto h-14 px-9 rounded-full text-[#071245] font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 transition-all disabled:opacity-75 disabled:cursor-wait"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 text-[#071245] animate-spin" />
                      <span>Holding Seat...</span>
                    </>
                  ) : (
                    <>
                      <span>Hold My Seat for Oct 28</span>
                      <ArrowRight className="w-4 h-4 text-[#071245]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
