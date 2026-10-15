"use client";

import React, { useState } from "react";
import { MOTIVATION_OPTIONS, PROGRAM_INFO } from "@/data/programData";
import { isValidEmail, isValidPhone, isValidName } from "@/lib/validation";
import { submitLeadToAdmin } from "@/lib/leadSubmission";
import { ShieldCheck, AlertCircle, ChevronDown, ArrowRight, Lock, Check, Phone, RotateCcw, Loader2 } from "lucide-react";

export function HeroRegistrationForm() {
  const [selectedMotivation, setSelectedMotivation] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ motivation?: string; fullName?: string; email?: string; phone?: string }>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [celebrationPops, setCelebrationPops] = useState(0);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (validate()) {
      setIsSubmitting(true);
      await submitLeadToAdmin({
        formSource: "Hero Fast Registration",
        fullName,
        email,
        phone,
        motivation: selectedMotivation,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/95 sm:bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white shadow-[inset_0_1.5px_0_#FFFFFF,0_15px_40px_-10px_rgba(7,18,69,0.18)] relative text-left flex flex-col gap-3.5 animate-in fade-in zoom-in-95 duration-300">
        {/* Scoped Keyframes for Guaranteed 3D Bouncing Animation & Floor Shadow */}
        <style>{`
          @keyframes realBallBounceHero {
            0%, 100% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
            30% {
              transform: translateY(-20px);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            55% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
            72% {
              transform: translateY(-8px);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            86% {
              transform: translateY(0);
            }
          }
          @keyframes ballShadowPulseHero {
            0%, 100% {
              transform: scale(1);
              opacity: 0.65;
            }
            30% {
              transform: scale(0.45);
              opacity: 0.15;
            }
            55% {
              transform: scale(1);
              opacity: 0.65;
            }
            72% {
              transform: scale(0.75);
              opacity: 0.35;
            }
            86% {
              transform: scale(1);
              opacity: 0.65;
            }
          }
          .bouncing-ball-hero {
            animation: realBallBounceHero 1.35s infinite !important;
            transform-origin: bottom center !important;
            will-change: transform !important;
          }
          .bouncing-shadow-hero {
            animation: ballShadowPulseHero 1.35s infinite !important;
            transform-origin: center center !important;
            will-change: transform, opacity !important;
          }
        `}</style>

        {/* Real 3D Shiny Sphere Checkmark Icon with Realistic Bouncing Animation & Ground Shadow - Centered */}
        <div className="flex flex-col items-center text-center pb-2.5 border-b border-slate-200/80 pt-3">
          <div className="relative shrink-0 flex flex-col items-center select-none mb-2">
            <div
              className="bouncing-ball-hero relative flex items-center justify-center cursor-pointer group"
              onClick={() => setCelebrationPops((prev) => prev + 1)}
              title="Click for celebration sparkle!"
            >
              {/* Soft Ambient Radial Glow */}
              <div className="absolute -inset-3 rounded-full bg-emerald-500/30 blur-lg pointer-events-none group-hover:bg-emerald-500/45 transition-colors" />

              {/* True 3D Shiny Sphere */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105 group-active:scale-95 shadow-[0_14px_30px_-5px_rgba(22,163,74,0.65),inset_-6px_-8px_16px_rgba(3,44,22,0.9),inset_2.5px_2.5px_6px_rgba(255,255,255,0.7)]"
                style={{
                  background:
                    "radial-gradient(circle at 35% 28%, #86EFAC 0%, #22C55E 30%, #16A34A 58%, #15803D 78%, #064E3B 92%, #022C1A 100%)",
                }}
              >
                {/* Specular Spotlight Glint Dots (Pure 3D sphere glint, NO flat lines) */}
                <div className="absolute top-2 left-2.5 sm:top-2.5 sm:left-3 w-3 h-2 sm:w-3.5 sm:h-2.5 rounded-[100%] bg-white/90 blur-[0.4px] -rotate-15 pointer-events-none" />
                <div className="absolute top-1.5 left-2 sm:top-2 sm:left-2.5 w-1.5 h-1 rounded-full bg-white blur-[0.2px] pointer-events-none" />

                {/* Internal 3D Check Icon with Soft Embossed Drop Shadow */}
                <Check className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[3.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)] relative z-10 transition-transform duration-200 group-hover:scale-110" />
              </div>

              {/* Interactive Celebration Feedback Floating Badge on Click */}
              {celebrationPops > 0 && (
                <span className="absolute -top-3 px-2 py-0.5 rounded-full bg-[#F6C915] text-[#071245] font-black text-[9px] shadow-md animate-in zoom-in-50 fade-in duration-200 pointer-events-none whitespace-nowrap">
                  Verified ✨ +{celebrationPops}
                </span>
              )}
            </div>

            {/* Synchronized Realistic Ground Floor Shadow underneath the ball */}
            <div className="bouncing-shadow-hero w-10 sm:w-12 h-2 rounded-[100%] bg-emerald-950/40 blur-[2px] pointer-events-none -mt-0.5" />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-[#071245] leading-tight">
              Congratulations{fullName ? `, ${fullName}` : ""}!
            </h3>
            <p className="text-[11px] sm:text-xs text-[#071245] font-bold mt-0.5">
              Your seat for October 28 is officially reserved.
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 space-y-2 text-xs shadow-2xs">
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-slate-200/60">
            <span className="text-slate-500 font-bold">Program:</span>
            <span className="text-[#071245] font-black">Healthy Eating &amp; Lifestyle</span>
          </div>
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-slate-200/60">
            <span className="text-slate-500 font-bold">Intake Date:</span>
            <span className="text-[#071245] font-black">Oct 28, 2026 · 6:00 pm EST</span>
          </div>
          <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-slate-200/60">
            <span className="text-slate-500 font-bold">Confirmation Email:</span>
            <span className="text-[#071245] font-black truncate max-w-[190px]">{email}</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-500 font-bold">Advisor Phone:</span>
            <span className="text-[#071245] font-black">{phone}</span>
          </div>
        </div>

        {/* What Happens Next Roadmap */}
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#A8780F] block mb-2">
            What Happens Next (Within 24 Hours):
          </span>
          <div className="space-y-1.5 text-[11px] text-[#071245] font-bold">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/20 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">1</span>
              <span>Admissions Director verifies your schedule details</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/20 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">2</span>
              <span>You receive your complete 10-workshop welcome kit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1B7A42]/20 text-[#1B7A42] flex items-center justify-center text-[10px] shrink-0 font-black">3</span>
              <span>100% Risk-Free: Zero tuition due until class starts</span>
            </div>
          </div>
        </div>

        {/* Action Button & Status Bar */}
        <div className="pt-1 space-y-2 border-t border-slate-200/80">
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            className="btn-skeuo-gold animate-shimmer w-full h-10 sm:h-11 rounded-xl text-[#071245] font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-[0.99] transition-all border-2 border-[#FFF8B8]"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#071245]" />
            <span>Questions now? Call {PROGRAM_INFO.phone}</span>
          </a>

          <div className="flex items-center justify-between text-xs pt-0.5">
            <span className="text-[10px] font-extrabold text-[#1B7A42] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A42] animate-pulse" />
              <span>Status: Priority Hold Active</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setAttemptedSubmit(false);
              }}
              className="inline-flex items-center gap-1 text-[11px] font-black text-[#071245] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-[#071245]" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 sm:bg-white/92 backdrop-blur-xl rounded-xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-7 border border-white shadow-[inset_0_1.5px_0_#FFFFFF,0_15px_40px_-10px_rgba(7,18,69,0.18)] relative transition-all text-left">
      {/* Sleek, Modern Form Header */}
      <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-2.5">
        <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-200/80 shadow-2xs">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-700" />
          <span>Free Seat Hold</span>
        </span>
        <span className="text-[9.5px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[#8A6208] bg-amber-50 border border-amber-200/80 flex items-center gap-1.5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEAB07] animate-pulse" />
          <span>Limited Seats · Oct 28</span>
        </span>
      </div>

      <h3 className="text-base sm:text-2xl font-black text-[#071245] leading-tight mb-0.5 sm:mb-1">
        Reserve your seat for October 28
      </h3>
      <p className="text-[11px] sm:text-[13px] text-slate-600 font-semibold mb-2.5 sm:mb-3">
        No payment required today. An advisor will discuss your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
        {/* Motivation Dropdown */}
        <div>
          <label htmlFor="hero-motivation" className="block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#071245] mb-1">
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
              className={`w-full h-10 sm:h-11 pl-3.5 pr-9 rounded-xl bg-white border border-slate-200 hover:border-slate-300 focus:border-[#071245] text-xs sm:text-sm font-bold text-[#071245] focus:outline-none focus:ring-1 focus:ring-[#071245]/20 appearance-none cursor-pointer transition-all shadow-2xs ${
                errors.motivation ? "border-[#D62B2B] bg-red-50" : ""
              }`}
            >
              <option value="" className="text-slate-400">Select what brings you to this program...</option>
              {MOTIVATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="py-1 text-xs font-bold text-[#071245]">
                  {opt.num} · {opt.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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
              className={`w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 focus:border-[#071245] text-xs sm:text-sm font-bold text-[#071245] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#071245]/20 transition-all shadow-2xs ${
                errors.fullName ? "border-[#D62B2B] bg-red-50" : ""
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
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 focus:border-[#071245] text-xs sm:text-sm font-bold text-[#071245] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#071245]/20 transition-all shadow-2xs ${
                  errors.email ? "border-[#D62B2B] bg-red-50" : ""
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
                className={`w-full h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 focus:border-[#071245] text-xs sm:text-sm font-bold text-[#071245] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#071245]/20 transition-all shadow-2xs ${
                  errors.phone ? "border-[#D62B2B] bg-red-50" : ""
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
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold shadow-2xs">
          <Lock className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
          <span>Official CSNN Admissions Portal · 256-Bit SSL Encrypted</span>
        </div>

        {/* High-Converting Radiant Action Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-skeuo-gold w-full h-11.5 sm:h-12.5 rounded-xl sm:rounded-2xl text-[#071245] font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer border-2 border-[#FFF8B8] group disabled:opacity-75 disabled:cursor-wait"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 text-[#071245] animate-spin" />
                <span>Holding Your Seat...</span>
              </>
            ) : (
              <>
                <span>Hold My Free Seat Now</span>
                <ArrowRight className="w-4.5 h-4.5 text-[#071245] group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-slate-600 font-bold pt-2 flex-wrap text-center">
            <span className="inline-flex items-center gap-1 text-[#1B7A42]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Risk-Free Hold</span>
            </span>
            <span className="text-slate-300">•</span>
            <span>Zero Tuition Due Today</span>
          </div>
        </div>
      </form>
    </div>
  );
}
