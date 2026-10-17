"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Sparkles, CheckCircle2, Award, Calendar, Clock } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function PreFooterCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-[#F1F5F9] to-slate-100 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Ambient Radiance */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[#071245]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Tactile Skeuomorphic Chassis (Double-layer Bezel + 3D Shadow Stack) */}
        <div className="p-[1.5px] sm:p-[2px] rounded-3xl sm:rounded-[42px] bg-gradient-to-b from-white via-slate-200/90 to-slate-300/80 shadow-[0_30px_70px_-15px_rgba(7,18,69,0.22),0_12px_28px_-6px_rgba(7,18,69,0.12),0_2px_4px_rgba(0,0,0,0.04)]">
          
          <div className="rounded-[calc(1.5rem-1.5px)] sm:rounded-[40px] bg-gradient-to-b from-white via-[#FDFEFE] to-[#F4F7FB] p-6 sm:p-12 lg:p-16 text-[#071245] shadow-[inset_0_2px_0_#FFFFFF,inset_0_0_0_1px_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(15,23,42,0.05)] relative overflow-hidden text-center">
            
            {/* Top Gloss Highlight Sheen */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
            
            {/* Skeuomorphic Top Edge Golden Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 sm:w-64 h-[3px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent rounded-full shadow-[0_1px_4px_rgba(246,201,21,0.6)]" />

            <div className="max-w-3xl mx-auto relative z-10">
              
              {/* Skeuomorphic Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7] text-[#854D0E] text-[10.5px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4 border border-[#FDE68A] shadow-[inset_0_1.5px_0_#FFFFFF,0_2px_6px_rgba(246,201,21,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#DEAB07]" />
                <span>LIMITED INTAKE · OCTOBER 28, 2026</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight mb-2.5 sm:mb-3">
                Turn Nutrition Knowledge into Everyday Wellness
              </h2>

              {/* Subheading */}
              <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-5 sm:mb-8">
                Join certified lead nutritionist Rasha Abu Rabi, MSc., R.H.N., for 10 interactive online workshops. Build your nutrition knowledge, earn your certificate, and receive 4 CanFitPro CECs.
              </p>

              {/* Tactile Skeuomorphic Schedule Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mb-6 sm:mb-9 text-[11px] sm:text-xs font-black text-[#071245]">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-[inset_0_1.5px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_2px_6px_rgba(7,18,69,0.05)]">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 text-[#B87503] flex items-center justify-center border border-amber-200/70 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span>Starts {PROGRAM_INFO.startDate}</span>
                </div>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-[inset_0_1.5px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_2px_6px_rgba(7,18,69,0.05)]">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 text-[#B87503] flex items-center justify-center border border-amber-200/70 shadow-2xs">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span>{PROGRAM_INFO.scheduleTime}</span>
                </div>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-[inset_0_1.5px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_2px_6px_rgba(7,18,69,0.05)]">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/70 shadow-2xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span>4 canfitpro CECs Approved</span>
                </div>
              </div>

              {/* Skeuomorphic Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-9">
                <a
                  href="#register"
                  className="btn-skeuo-gold animate-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 h-12 sm:h-14 rounded-full text-xs sm:text-base font-black tracking-wide shadow-[0_10px_25px_-4px_rgba(246,201,21,0.5),inset_0_1.5px_0_#FFFFFF,inset_0_-2px_0_rgba(168,120,15,0.4)] border-2 border-[#FFF8B8] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Reserve your seat now</span>
                  <ArrowRight className="w-4 h-4 text-[#071245] stroke-[3]" />
                </a>

                <a
                  href={`tel:${PROGRAM_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-8 h-12 sm:h-14 rounded-full bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F6] hover:bg-gradient-to-b hover:from-white hover:to-slate-100 border border-slate-300/80 border-t-white text-[#071245] text-xs sm:text-sm font-black transition-all shadow-[inset_0_1.5px_0_#FFFFFF,inset_0_-2px_0_rgba(15,23,42,0.06),0_6px_16px_-3px_rgba(7,18,69,0.12)] hover:scale-105 active:scale-95"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-[#B87503] border border-amber-200/70 shadow-2xs">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span>Questions? Call {PROGRAM_INFO.phone}</span>
                </a>
              </div>

              {/* Reassurance Well */}
              <div className="pt-4 sm:pt-6 border-t border-slate-200/70">
                <div className="inline-flex items-center justify-center flex-wrap gap-2.5 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/90 border border-slate-200/80 shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.03)] text-[11px] sm:text-xs text-slate-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42]" />
                    Zero prior prerequisites needed
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1B7A42]" />
                    No payment required today
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DEAB07]" />
                    Canadian School of Natural Nutrition Since 1994
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
