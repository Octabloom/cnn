"use client";

import React from "react";
import Image from "next/image";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TorontoSkylineGraphic } from "@/components/ui/TorontoSkylineGraphic";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-hidden"
    >
      {/* ==============================================================
          BACKGROUND: Animated Toronto Landmark Skyline & Sun
          Positioned in the background behind the typography and form
          ============================================================== */}
      <div className="absolute right-0 lg:right-[32%] xl:right-[35%] bottom-0 w-full sm:w-[540px] md:w-[600px] lg:w-[660px] xl:w-[740px] h-[340px] sm:h-[420px] lg:h-[490px] pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end opacity-45 sm:opacity-75 lg:opacity-95 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full object-bottom" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-5 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-3 sm:py-5 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Unboxed Typography + Preserved Brand Card
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5 sm:gap-4.5 text-left relative z-10">
            
            {/* Top Explore Notice Ribbon */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#071245] via-[#0E2068] to-[#071245] text-white shadow-sm border border-[#F6C915]/30 w-fit backdrop-blur-md">
              <p className="text-[11px] sm:text-xs font-bold leading-tight">
                Explore <span className="text-[#F6C915] font-black underline decoration-[#F6C915]/50">holistic nutrition</span> through 10 live online workshops. Classes begin <span className="text-[#FFE875] font-black">October 14, 2026</span>.
              </p>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black text-[#F6C915] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-ping" />
                Live Online
              </span>
            </div>

            {/* Preserved Official CSNN Toronto Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border-2 border-[#EAE0BC] shadow-[0_10px_30px_rgba(19,39,122,0.06)] flex items-center gap-3 sm:gap-4.5 w-fit max-w-full">
              {/* Official CSNN Emblem */}
              <div className="relative w-13 h-13 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-md shrink-0 flex items-center justify-center">
                <Image
                  src="/assets/logo.jpg"
                  alt="Canadian School of Natural Nutrition Toronto"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Vertical Gold Separator */}
              <div className="w-[3px] h-11 sm:h-14 bg-gradient-to-b from-[#F6C915] via-[#DEAB07] to-[#F6C915] rounded-full shrink-0" />

              {/* Brand Typography Lockup */}
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] text-[#5B5440]">
                  Canadian School of Natural Nutrition
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13277A] tracking-[-0.03em] leading-none my-0.5 sm:my-1">
                  TORONTO
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-[#A8780F]">
                    Healthy Eating &amp; Lifestyle Certificate
                  </span>
                  <span className="text-xs text-[#13277A]/40">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#13277A] bg-[#FAF1D0] px-2 py-0.5 rounded-md border border-[#E8DEC0]">
                    Live Online
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline & Display Typography (UNBOXED - Direct on Hero with High Contrast) */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pt-1">
              
              {/* "10 Holistic Nutrition Workshops" */}
              <div className="flex items-baseline gap-2.5 sm:gap-3.5">
                <span className="font-serif italic font-black text-5xl sm:text-6xl lg:text-7xl text-[#13277A] leading-none tracking-tight drop-shadow-xs">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic font-black text-xl sm:text-2xl lg:text-3xl text-[#13277A] leading-tight tracking-tight">
                    Holistic Nutrition
                  </span>
                  <span className="font-serif italic font-black text-lg sm:text-xl lg:text-2xl text-[#13277A] leading-tight tracking-tight">
                    Workshops
                  </span>
                </div>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#D49B0E] tracking-tight leading-tight">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-xs sm:text-base text-[#0F1F5C] font-semibold leading-relaxed max-w-xl">
                Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty. No prior prerequisites needed.
              </p>

              {/* 3 Quick Benefit Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {["21 Live Online Hours", "Practical Kitchen Habits", "4 canfitpro CECs Approved"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 border border-[#E8DEC0] text-xs sm:text-[13px] font-black text-[#13277A] shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

              {/* Quick Schedule Highlights Strip */}
              <div className="flex items-center gap-2 sm:gap-3 pt-1 flex-wrap">
                <div className="px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs text-[11px] font-bold text-[#13277A]">
                  <span className="font-black text-[#8A6208]">Intake:</span> Starts Oct 14, 2026
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs text-[11px] font-bold text-[#13277A]">
                  <span className="font-black text-[#8A6208]">Schedule:</span> Evenings 6:00–8:00 pm EST
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs text-[11px] font-bold text-[#13277A]">
                  <span className="font-black text-[#8A6208]">Format:</span> 100% Live Interactive
                </div>
              </div>

            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Official Intake Registration Form
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-10">
            <HeroRegistrationForm />
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
