"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Sparkles, CheckCircle2, Award, Calendar, Clock } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function PreFooterCTA() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Skeuomorphic Card with Subtle Blue Shade */}
        <div className="rounded-2xl sm:rounded-[32px] bg-gradient-to-b from-white via-[#F4F8FD] to-[#E8F1FB] border border-[#BFDBFE]/80 border-t-white p-4 sm:p-8 lg:p-10 text-[#071245] shadow-[inset_0_2px_0_#FFFFFF,inset_0_0_0_1px_rgba(255,255,255,0.85),inset_0_-2px_0_rgba(7,18,69,0.04),0_15px_35px_-8px_rgba(7,18,69,0.12),0_4px_12px_-2px_rgba(7,18,69,0.06)] relative overflow-hidden text-center">
          
          {/* Top Gloss Highlight Sheen */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/90 via-white/30 to-transparent pointer-events-none" />

          {/* Skeuomorphic Top Edge Golden Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent rounded-full shadow-[0_1px_3px_rgba(246,201,21,0.5)]" />

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Skeuomorphic Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-b from-amber-50 to-amber-100/90 text-[#854D0E] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-2.5 sm:mb-3 border border-amber-300/80 shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(246,201,21,0.15)]">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
              <span>LIMITED INTAKE · OCTOBER 28, 2026</span>
            </div>

            {/* Headline (Compact as earlier) */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#071245] tracking-tight leading-tight mb-2 sm:mb-2.5">
              Turn Nutrition Knowledge into Everyday Wellness
            </h2>

            {/* Subheading (Compact as earlier) */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-4 sm:mb-6">
              Join certified lead nutritionist Rasha Abu Rabi, MSc., R.H.N., for 10 interactive online workshops. Build your nutrition knowledge, earn your certificate, and receive 4 CanFitPro CECs.
            </p>

            {/* Schedule Highlights Strip */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 text-[10px] sm:text-xs font-black text-[#071245]">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/95 border border-blue-200/70 shadow-2xs">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
                <span>Starts {PROGRAM_INFO.startDate}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/95 border border-blue-200/70 shadow-2xs">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
                <span>{PROGRAM_INFO.scheduleTime}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/95 border border-blue-200/70 shadow-2xs">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
                <span>4 canfitpro CECs Approved</span>
              </div>
            </div>

            {/* Dual CTAs (Compact size) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
              <a
                href="#register"
                className="btn-skeuo-gold animate-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 h-10 sm:h-12 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-md"
              >
                <span>Reserve your seat now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#071245] stroke-[3]" />
              </a>

              <a
                href={`tel:${PROGRAM_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-10 sm:h-12 rounded-full bg-white hover:bg-slate-50 border border-blue-200/80 text-[#071245] text-xs sm:text-sm font-black transition-all shadow-2xs hover:scale-105"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
                <span>Questions? Call {PROGRAM_INFO.phone}</span>
              </a>
            </div>

            {/* Reassurance Bullets (Clean single strip as earlier) */}
            <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 pt-3.5 sm:pt-4 border-t border-blue-200/60 text-[10.5px] sm:text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42]" />
                Zero prior prerequisites needed
              </span>
              <span className="hidden sm:inline text-blue-300">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B7A42]" />
                No payment required today
              </span>
              <span className="hidden sm:inline text-blue-300">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B87503]" />
                Canadian School of Natural Nutrition Since 1994
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
