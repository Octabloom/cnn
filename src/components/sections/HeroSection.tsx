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
          Clean, unified single highway with flowing golden light beam
          (Zero red or white colored strokes)
          ============================================================== */}
      <div className="absolute inset-x-0 bottom-[38px] h-[56px] pointer-events-none select-none z-10 overflow-hidden">
        {/* Deep Lake Water / Highway Road Bed */}
        <div className="w-full h-full bg-gradient-to-b from-[#0A1856] via-[#071245] to-[#040924]" />
        
        {/* Top Road Curb / Yellow Line */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#F6C915]" />

        {/* Highway Lane Divider: Golden Dashes */}
        <div className="absolute top-[26px] inset-x-0 h-[2px] border-t-2 border-dashed border-[#F6C915]/80" />

        {/* Road Bottom Yellow Line (Directly above the moving strip) */}
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#F6C915]" />

        {/* Smooth Flowing Golden Laser Energy Beam across the entire road (No static colored strokes) */}
        <div className="absolute inset-y-0 w-72 bg-gradient-to-r from-transparent via-[#F6C915]/50 to-transparent blur-[1px] animate-smooth-beam pointer-events-none" />
      </div>

      {/* ==============================================================
          FULL BACKGROUND: Large Animated Toronto Landmark Skyline & Golden Sun
          Grand, impressive proportions resting directly on top of single road
          ============================================================== */}
      <div className="absolute left-0 lg:left-0 xl:left-[2%] bottom-[94px] w-full sm:w-[620px] md:w-[720px] lg:w-[820px] xl:w-[920px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[540px] pointer-events-none select-none z-0 flex items-end justify-start opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Spacious, majestic & perfectly balanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-6 sm:pt-8 lg:pt-10 pb-[110px] sm:pb-[120px] lg:pb-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Bold, Grand & Impactful Hero Content
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-5 text-left relative z-10 pb-2 sm:pb-4">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2.5 mb-1 sm:mb-2">
              <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#071245] text-white text-xs sm:text-[13.5px] font-bold shadow-xl border-2 border-[#F6C915]/70 w-fit backdrop-blur-md hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Grand, Commanding & Bold) */}
            <div className="flex flex-col gap-3 sm:gap-4 max-w-xl">
              
              {/* Holistic Nutrition Workshops */}
              <div className="flex flex-col">
                <span className="font-serif italic font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Holistic Nutrition
                </span>
                <span className="font-serif italic font-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Workshops
                </span>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-tight pt-1 drop-shadow-2xs">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with Crisp Readability */}
              <p className="text-base sm:text-lg lg:text-[19px] text-[#071245] font-extrabold leading-relaxed max-w-xl">
                Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
              </p>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-3 pt-1">
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
              RIGHT COLUMN (5 cols): Full-Sized Official Intake Registration Form
              Comfortably positioned, full luxury padding, and beautifully aligned
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-end lg:items-end self-end">
            <div className="w-full max-w-[440px] lg:max-w-[430px] xl:max-w-[450px] lg:ml-auto">
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
