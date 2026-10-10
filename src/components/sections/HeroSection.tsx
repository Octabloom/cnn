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
          ONLY ONE CONTINUOUS ROAD BED: Spans 100% width at base of Hero
          With animated highway headlights & taillights cruising smoothly
          ============================================================== */}
      <div className="absolute inset-x-0 bottom-0 h-[76px] pointer-events-none select-none z-0 overflow-hidden">
        {/* Deep Lake Water / Highway Road Bed */}
        <div className="w-full h-full bg-gradient-to-b from-[#0A1856] via-[#071245] to-[#040924]" />
        
        {/* Top Road Curb / Yellow Line */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#F6C915]" />

        {/* Upper Highway Lane (Eastbound): Golden Dashes */}
        <div className="absolute top-[22px] inset-x-0 h-[2.5px] border-t-[2.5px] border-dashed border-[#F6C915]/90" />

        {/* Lower Road Lane (Westbound): Dashed Light Gold */}
        <div className="absolute top-[44px] inset-x-0 h-[2px] border-t-2 border-dashed border-[#FFE676]/70" />

        {/* Road Last Yellow Line in the Bottom (Aligns directly with form bottom & marquee top) */}
        <div className="absolute bottom-[4px] inset-x-0 h-[3.5px] bg-[#F6C915]" />

        {/* Lane 1 (Eastbound Traffic): Bright White & Golden Headlights */}
        <div className="absolute top-[19px] left-0 w-12 h-[3.5px] bg-white rounded-full shadow-[0_0_12px_#FFF,0_0_20px_#FFE875] animate-traffic-east-1" />
        <div className="absolute top-[19px] left-0 w-16 h-[3.5px] bg-[#FFF9D2] rounded-full shadow-[0_0_14px_#FFE875] animate-traffic-east-2" />
        <div className="absolute top-[19px] left-0 w-10 h-[3px] bg-white rounded-full shadow-[0_0_10px_#FFF] animate-traffic-east-3" />

        {/* Lane 2 (Westbound Traffic): Sleek Ruby-Red Taillights */}
        <div className="absolute top-[42px] left-0 w-12 h-[3px] bg-[#FF3333] rounded-full shadow-[0_0_10px_#FF2222,0_0_16px_#FF0000] animate-traffic-west-1" />
        <div className="absolute top-[42px] left-0 w-14 h-[3px] bg-[#FF4444] rounded-full shadow-[0_0_12px_#FF2222] animate-traffic-west-2" />
        <div className="absolute top-[42px] left-0 w-9 h-[2.5px] bg-[#FF2222] rounded-full shadow-[0_0_8px_#FF0000] animate-traffic-west-3" />
      </div>

      {/* ==============================================================
          FULL BACKGROUND: Animated Toronto Landmark Skyline & Golden Sun
          Positioned on the LEFT (opposite side of the form)
          Rests seamlessly on top of the single road curb with zero haze
          ============================================================== */}
      <div className="absolute left-0 lg:left-0 xl:left-[2%] bottom-[74px] w-full sm:w-[600px] md:w-[700px] lg:w-[780px] xl:w-[860px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px] pointer-events-none select-none z-0 flex items-end justify-start opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-5 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Aligned with bottom road line above moving strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 sm:pt-6 lg:pt-8 pb-0 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch flex-1">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Elevated, High-Aesthetic Hero Text (100% Clear & Vivid)
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center gap-4 sm:gap-5 text-left relative z-10 pt-2 lg:pt-4 pb-6 sm:pb-10 lg:pb-14">
            
            {/* Top Live Intake Status Pill (Elevated Higher with Richer Styling) */}
            <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#071245] text-white text-xs sm:text-[13.5px] font-bold shadow-xl border-2 border-[#F6C915]/70 w-fit backdrop-blur-md hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Directly on canvas - Bigger, Bolder & 100% Crystal Clear) */}
            <div className="flex flex-col gap-3 sm:gap-4 max-w-xl">
              
              {/* 10 Holistic Nutrition Workshops */}
              <div className="flex items-baseline gap-3 sm:gap-4">
                <span className="font-serif italic font-black text-7xl sm:text-8xl lg:text-[96px] xl:text-[108px] text-[#071245] leading-none tracking-tight drop-shadow-sm">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic font-black text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-[#071245] leading-[1.05] tracking-tight">
                    Holistic Nutrition
                  </span>
                  <span className="font-serif italic font-black text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-[#071245] leading-[1.05] tracking-tight">
                    Workshops
                  </span>
                </div>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-tight pt-1 drop-shadow-2xs">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with Crisp Readability */}
              <p className="text-base sm:text-lg lg:text-[20px] text-[#071245] font-extrabold leading-relaxed max-w-xl">
                Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
              </p>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-3 pt-1.5">
                <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-sm sm:text-[15px] font-black text-[#13277A] shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-sm sm:text-[15px] font-black text-[#13277A] shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Habits</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap text-xs sm:text-[13px] font-bold text-[#13277A] pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E8DEC0] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E8DEC0] shadow-xs">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E8DEC0] shadow-xs">
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
