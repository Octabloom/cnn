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
      className="w-full flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-x-clip"
    >
      {/* ==============================================================
          ONLY ONE CONTINUOUS ROAD BED: Spans 100% width directly above marquee
          With animated highway headlights & taillights cruising smoothly
          ============================================================== */}
      <div className="absolute inset-x-0 bottom-[38px] h-[52px] pointer-events-none select-none z-10 overflow-hidden">
        {/* Deep Lake Water / Highway Road Bed */}
        <div className="w-full h-full bg-gradient-to-b from-[#0A1856] via-[#071245] to-[#040924]" />
        
        {/* Top Road Curb / Yellow Line */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#F6C915]" />

        {/* Upper Highway Lane (Eastbound): Golden Dashes */}
        <div className="absolute top-[16px] inset-x-0 h-[2px] border-t-2 border-dashed border-[#F6C915]/90" />

        {/* Lower Road Lane (Westbound): Dashed Light Gold */}
        <div className="absolute top-[32px] inset-x-0 h-[1.5px] border-t-[1.5px] border-dashed border-[#FFE676]/70" />

        {/* Road Last Yellow Line in the Bottom (Directly above the moving strip) */}
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#F6C915]" />

        {/* Lane 1 (Eastbound Traffic): Bright White & Golden Headlights */}
        <div className="absolute top-[14px] left-0 w-10 h-[3px] bg-white rounded-full shadow-[0_0_10px_#FFF,0_0_16px_#FFE875] animate-traffic-east-1" />
        <div className="absolute top-[14px] left-0 w-14 h-[3px] bg-[#FFF9D2] rounded-full shadow-[0_0_12px_#FFE875] animate-traffic-east-2" />
        <div className="absolute top-[14px] left-0 w-8 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_#FFF] animate-traffic-east-3" />

        {/* Lane 2 (Westbound Traffic): Sleek Ruby-Red Taillights */}
        <div className="absolute top-[30px] left-0 w-10 h-[2.5px] bg-[#FF3333] rounded-full shadow-[0_0_8px_#FF2222,0_0_14px_#FF0000] animate-traffic-west-1" />
        <div className="absolute top-[30px] left-0 w-12 h-[2.5px] bg-[#FF4444] rounded-full shadow-[0_0_10px_#FF2222] animate-traffic-west-2" />
        <div className="absolute top-[30px] left-0 w-8 h-[2px] bg-[#FF2222] rounded-full shadow-[0_0_7px_#FF0000] animate-traffic-west-3" />
      </div>

      {/* ==============================================================
          FULL BACKGROUND: Animated Toronto Landmark Skyline & Golden Sun
          Positioned on the LEFT (opposite side of the form)
          Rests seamlessly on top of the single road curb with zero haze
          ============================================================== */}
      <div className="absolute left-0 lg:left-0 xl:left-[2%] bottom-[90px] w-full sm:w-[500px] md:w-[580px] lg:w-[640px] xl:w-[700px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] pointer-events-none select-none z-0 flex items-end justify-start opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-16 left-0 w-[380px] h-[380px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Perfectly balanced & fits cleanly without bottom cropping */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-2 sm:pt-3 lg:pt-4 pb-[60px] flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center flex-1">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Small but Impactful Hero Text Stack
              Crisp typography, commanding hierarchy & space-efficient layout
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center gap-2.5 sm:gap-3 text-left relative z-10 py-1 sm:py-2">
            
            {/* Top Live Intake Status Pill (Elevated, Compact & Sleek) */}
            <div className="flex items-center gap-2 mb-0.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071245] text-white text-[11px] sm:text-xs font-bold shadow-md border border-[#F6C915]/70 w-fit backdrop-blur-md hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Small, Compact & Ultra-Impactful) */}
            <div className="flex flex-col gap-2 sm:gap-2.5 max-w-lg">
              
              {/* 10 Holistic Nutrition Workshops */}
              <div className="flex items-baseline gap-2.5 sm:gap-3">
                <span className="font-serif italic font-black text-5xl sm:text-6xl lg:text-[68px] text-[#071245] leading-none tracking-tight drop-shadow-xs">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic font-black text-xl sm:text-2xl lg:text-[28px] text-[#071245] leading-[1.08] tracking-tight">
                    Holistic Nutrition
                  </span>
                  <span className="font-serif italic font-black text-lg sm:text-xl lg:text-[22px] text-[#071245] leading-[1.08] tracking-tight">
                    Workshops
                  </span>
                </div>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-snug drop-shadow-2xs">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with Crisp Readability */}
              <p className="text-xs sm:text-[13.5px] lg:text-[14.5px] text-[#071245] font-extrabold leading-relaxed max-w-lg">
                Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
              </p>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-xs font-black text-[#13277A] shadow-2xs hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E8DEC0] text-xs font-black text-[#13277A] shadow-2xs hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Habits</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-[11px] font-bold text-[#13277A] pt-0.5">
              <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E8DEC0] shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E8DEC0] shadow-2xs">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E8DEC0] shadow-2xs">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Official Intake Registration Form
              Positioned slightly to the right, compact & comfortably above road
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-center lg:items-end self-center">
            <div className="w-full max-w-[410px] lg:max-w-[400px] xl:max-w-[410px] lg:ml-auto">
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
