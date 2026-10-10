"use client";

import React from "react";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TorontoSkylineGraphic } from "@/components/ui/TorontoSkylineGraphic";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { CheckCircle2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-x-clip flex flex-col justify-between min-h-[calc(100vh-84px)] min-h-[calc(100dvh-84px)]"
    >
      {/* ==============================================================
          TORONTO LANDMARK SKYLINE & GOLDEN SUN:
          Mobile: Positioned right behind the hero title in the top-right (increased size)
          Desktop: Grand proportions resting directly on top of the road
          ============================================================== */}
      <div className="absolute right-[-20px] sm:right-[-10px] lg:right-auto left-auto lg:left-0 xl:left-[2%] top-0 sm:top-4 lg:top-auto lg:bottom-[84px] sm:lg:bottom-[88px] w-[400px] sm:w-[520px] md:w-[680px] lg:w-[860px] xl:w-[960px] h-[330px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[560px] pointer-events-none select-none z-0 flex items-end justify-start opacity-100 transition-all">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-2 right-0 w-[360px] h-[360px] rounded-full bg-[#F6C915]/25 blur-3xl pointer-events-none z-0 lg:hidden" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container: Grand proportions & comfortably filling the viewport window */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-5 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-end">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Bold, Grand & Impactful Hero Content
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3 sm:gap-3.5 text-left relative z-10 pb-2 lg:pb-0">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2 mb-0.5">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-[#071245] text-white text-[11px] sm:text-[13px] font-bold shadow-xl border-2 border-[#F6C915]/70 w-fit backdrop-blur-md hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Grand, Commanding & Mobile Responsive) */}
            <div className="flex flex-col gap-2 sm:gap-3 max-w-xl">
              
              {/* Holistic Nutrition Workshops */}
              <div className="flex flex-col">
                <span className="font-serif italic font-black text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Holistic Nutrition
                </span>
                <span className="font-serif italic font-black text-2xl sm:text-4xl lg:text-[42px] xl:text-[50px] text-[#071245] leading-[1.05] tracking-tight drop-shadow-sm">
                  Workshops
                </span>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-tight pt-0.5 drop-shadow-2xs">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph with Transparent Glassmorphic Backing */}
              <div className="relative rounded-2xl bg-white/25 sm:bg-white/30 backdrop-blur-md border border-white/60 p-3 sm:p-3.5 shadow-sm max-w-xl z-20">
                <div className="absolute left-0 top-2.5 bottom-2.5 w-1.5 bg-gradient-to-b from-[#F6C915] to-[#DEAB07] rounded-r-full shadow-[0_0_8px_rgba(246,201,21,0.6)]" />
                <p className="pl-2 text-xs sm:text-sm lg:text-[15px] text-[#071245] font-black leading-relaxed drop-shadow-xs">
                  Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
                </p>
              </div>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-0.5">
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/50 sm:bg-white/60 backdrop-blur-md border border-white/70 text-xs sm:text-sm font-black text-[#13277A] shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/50 sm:bg-white/60 backdrop-blur-md border border-white/70 text-xs sm:text-sm font-black text-[#13277A] shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Habits</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap text-xs sm:text-[12px] font-bold text-[#13277A] pt-0.5">
              <span className="inline-flex items-center gap-1.5 bg-white/50 sm:bg-white/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/70 shadow-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/50 sm:bg-white/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/70 shadow-xs font-black">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/50 sm:bg-white/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/70 shadow-xs font-black">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Full-Sized Official Intake Registration Form
              Comfortably positioned, full luxury padding, and beautifully aligned
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-end lg:items-end self-end">
            <div className="w-full max-w-[440px] lg:max-w-[440px] xl:max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
              <HeroRegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Running Marquee and Road Attached Directly at the Base of the Hero Window */}
      <div className="w-full shrink-0 relative z-20 mt-auto">
        {/* ==============================================================
            ONLY ONE CONTINUOUS ROAD BED: Spans 100% width directly above marquee
            With full-width radiant golden shining waves covering the whole road
            ============================================================== */}
        <div className="w-full h-[46px] sm:h-[50px] relative pointer-events-none select-none z-10 overflow-hidden">
          {/* Deep Lake Water / Highway Road Bed */}
          <div className="w-full h-full bg-gradient-to-b from-[#0A1856] via-[#071245] to-[#040924]" />
          
          {/* Top Road Curb / Yellow Line with Radiant Golden Edge Glow */}
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#F6C915] shadow-[0_0_8px_rgba(246,201,21,0.6)]" />

          {/* Highway Center Lane: Animated Continuous Flowing Golden Dashes Across Entire Road */}
          <div className="absolute top-[21px] sm:top-[23px] inset-x-0 h-[3px]">
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

        {/* Running Marquee Attached Directly at the Base of the Road */}
        <TrustMarquee />
      </div>
    </section>
  );
}
