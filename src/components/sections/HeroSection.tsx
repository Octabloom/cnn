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
      className="w-full relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-x-clip"
    >
      {/* ==============================================================
          ONLY ONE CONTINUOUS ROAD BED: Spans 100% width directly above marquee
          With full-width radiant golden shining waves covering the whole road
          (Immediately visible above the fold on all screens)
          ============================================================== */}
      <div className="absolute inset-x-0 bottom-[30px] sm:bottom-[32px] h-[36px] sm:h-[40px] pointer-events-none select-none z-10 overflow-hidden">
        {/* Deep Lake Water / Highway Road Bed */}
        <div className="w-full h-full bg-gradient-to-b from-[#0A1856] via-[#071245] to-[#040924]" />
        
        {/* Top Road Curb / Yellow Line with Radiant Golden Edge Glow */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#F6C915] shadow-[0_0_8px_rgba(246,201,21,0.6)]" />

        {/* Highway Center Lane: Animated Continuous Flowing Golden Dashes Across Entire Road */}
        <div className="absolute top-[16px] sm:top-[18px] inset-x-0 h-[3px]">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="1.5"
              x2="100%"
              y2="1.5"
              stroke="#F6C915"
              strokeWidth="2.5"
              strokeDasharray="18 14"
              strokeOpacity="0.85"
              className="animate-road-dash-flow"
            />
          </svg>
        </div>

        {/* Road Bottom Yellow Line with Radiant Golden Glow */}
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#F6C915] shadow-[0_0_8px_rgba(246,201,21,0.6)]" />

        {/* Full-Road Luminous Shining Waves Covering 100% of the Entire Road */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFF9D2]/30 via-[#F6C915]/40 to-transparent animate-road-sweep-1" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFFFFF]/25 via-[#FFE875]/35 to-transparent animate-road-sweep-2" />
      </div>

      {/* ==============================================================
          TORONTO LANDMARK SKYLINE & GOLDEN SUN: Original Position
          Grand, impressive proportions resting directly on top of visible single road
          ============================================================== */}
      <div className="absolute left-0 lg:left-0 xl:left-[2%] bottom-[66px] sm:bottom-[72px] w-full sm:w-[620px] md:w-[720px] lg:w-[820px] xl:w-[920px] h-[280px] sm:h-[330px] md:h-[380px] lg:h-[420px] xl:h-[460px] pointer-events-none select-none z-0 flex items-end justify-start opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Perfectly balanced & immediately visible above the fold */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-1 sm:pt-2 lg:pt-2.5 pb-[46px] sm:pb-[50px] lg:pb-[54px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-end">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Bold, Grand & Impactful Hero Content
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-2 sm:gap-2.5 text-left relative z-10 pb-0.5 lg:pb-0">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2 mb-0.5">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#071245] text-white text-[10.5px] sm:text-xs font-bold shadow-md border-2 border-[#F6C915]/70 w-fit backdrop-blur-md hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack */}
            <div className="flex flex-col gap-1.5 sm:gap-2 max-w-xl">
              
              {/* Holistic Nutrition Workshops */}
              <div className="flex flex-col">
                <span className="font-serif italic font-black text-2xl sm:text-3xl lg:text-[40px] xl:text-[46px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Holistic Nutrition
                </span>
                <span className="font-serif italic font-black text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Workshops
                </span>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-tight drop-shadow-2xs">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with 100% Crisp Readability & Contrast Backing */}
              <div className="relative rounded-2xl bg-white/98 backdrop-blur-xl border-2 border-[#E5DAAF] p-3 sm:p-3.5 shadow-md max-w-xl z-20">
                <div className="absolute left-0 top-2.5 bottom-2.5 w-1.5 bg-gradient-to-b from-[#F6C915] to-[#DEAB07] rounded-r-full shadow-[0_0_8px_rgba(246,201,21,0.6)]" />
                <p className="pl-2 text-xs sm:text-[13.5px] lg:text-[14.5px] text-[#071245] font-extrabold leading-relaxed">
                  Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
                </p>
              </div>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-xs font-black text-[#13277A] shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-xs font-black text-[#13277A] shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Habits</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 flex-wrap text-[10.5px] sm:text-[11px] font-bold text-[#13277A] pt-0.5">
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#E8DEC0] shadow-2xs">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Full-Sized Official Intake Registration Form
              Comfortably positioned, full luxury padding, and beautifully aligned
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-end lg:items-end self-end">
            <div className="w-full max-w-[440px] lg:max-w-[430px] xl:max-w-[450px] mx-auto lg:mx-0 lg:ml-auto">
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
