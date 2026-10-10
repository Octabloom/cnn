"use client";

import React from "react";
import Image from "next/image";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TorontoSkylineGraphic } from "@/components/ui/TorontoSkylineGraphic";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { CheckCircle2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-hidden"
    >
      {/* ==============================================================
          FULL BACKGROUND: Animated Toronto Landmark Skyline & Golden Sun
          Positioned between text and form with road strictly at bottom base
          ============================================================== */}
      <div className="absolute right-0 lg:right-[8%] xl:right-[10%] bottom-0 w-full sm:w-[600px] md:w-[700px] lg:w-[780px] xl:w-[860px] h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] xl:h-[600px] pointer-events-none select-none z-0 flex items-end justify-end opacity-60 sm:opacity-85 lg:opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-5 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Aligned with bottom road line above moving strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-2 sm:pt-3 lg:pt-4 pb-0 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end flex-1">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Sleek Brand Card + Unboxed Hero Text
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5 sm:gap-4 text-left relative z-10 pb-3 sm:pb-5">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071245] text-white text-[11px] sm:text-xs font-bold shadow-xs border border-[#F6C915]/40 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#F6C915] animate-ping" />
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Directly on canvas - Clear & 100% Visible) */}
            <div className="flex flex-col gap-2.5 sm:gap-3 max-w-xl">
              
              {/* 10 Holistic Nutrition Workshops */}
              <div className="flex items-baseline gap-2.5 sm:gap-3.5">
                <span className="font-serif italic font-black text-6xl sm:text-7xl lg:text-[76px] text-[#13277A] leading-none tracking-tight drop-shadow-xs">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic font-black text-2xl sm:text-3xl lg:text-[34px] text-[#13277A] leading-tight tracking-tight drop-shadow-2xs">
                    Holistic Nutrition
                  </span>
                  <span className="font-serif italic font-black text-xl sm:text-2xl lg:text-[28px] text-[#13277A] leading-tight tracking-tight drop-shadow-2xs">
                    Workshops
                  </span>
                </div>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#C4880B] tracking-tight leading-tight [text-shadow:0_1px_2px_rgba(255,255,255,0.95)]">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with Crisp Readability Glow */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#071245] font-bold leading-relaxed max-w-lg [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(253,248,232,0.9)]">
                Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
              </p>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E8DEC0] text-xs sm:text-[13px] font-black text-[#13277A] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E8DEC0] text-xs sm:text-[13px] font-black text-[#13277A] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Habits</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-[10px] sm:text-[11px] font-bold text-[#13277A] pt-0.5">
              <span className="inline-flex items-center gap-1 bg-white/85 px-2.5 py-1 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/85 px-2.5 py-1 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/85 px-2.5 py-1 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Official Intake Registration Form
              Positioned slightly to the right & aligned with bottom road line
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-10 flex flex-col justify-end lg:items-end self-end pb-0 sm:pb-0.5">
            <div className="w-full max-w-[430px] lg:max-w-[420px] xl:max-w-[430px] lg:ml-auto">
              <HeroRegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Running Marquee Attached Directly at the Base of the Hero */}
      <div className="w-full shrink-0 relative z-20">
        <TrustMarquee />
      </div>
    </section>
  );
}
