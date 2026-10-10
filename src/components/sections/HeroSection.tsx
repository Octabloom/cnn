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
      {/* Soft Ambient Warm Auroras */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#F6C915]/15 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-5 left-5 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#13277A]/8 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-2 sm:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Sleek Brand Card + Text & Toronto Graphic
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3 sm:gap-3.5 text-left relative z-10">
            
            {/* Top Brand Lockup Row (Sleek, Compact & Proportional) */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              
              {/* Compact CSNN Toronto Brand Card */}
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl border border-[#EAE0BC] shadow-xs w-fit">
                {/* Official CSNN Emblem */}
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white p-0.5 border border-[#F6C915] shadow-2xs shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Canadian School of Natural Nutrition Toronto"
                    fill
                    sizes="36px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Vertical Gold Accent */}
                <div className="w-[2px] h-7 sm:h-8 bg-[#F6C915] rounded-full shrink-0" />

                {/* Typography Stack */}
                <div className="flex flex-col">
                  <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-[0.14em] text-[#5B5440] leading-none">
                    Canadian School of Natural Nutrition
                  </span>
                  <span className="text-base sm:text-xl font-black text-[#13277A] tracking-[-0.02em] leading-tight my-0.5">
                    TORONTO
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9.5px] sm:text-[11px] font-bold text-[#A8780F] leading-none">
                      Healthy Eating &amp; Lifestyle Certificate
                    </span>
                    <span className="text-[9px] text-[#13277A]/40">•</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#13277A] bg-[#FAF1D0] px-1.5 py-0.2 rounded border border-[#E8DEC0]">
                      Live Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Slim Live Intake Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071245] text-white text-[10px] sm:text-[11px] font-bold shadow-xs border border-[#F6C915]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-ping" />
                <span>Starts <strong className="text-[#F6C915]">Oct 14, 2026</strong> · 10 Workshops</span>
              </div>

            </div>

            {/* Main Showcase: Side-by-Side Typography & Animated Toronto Skyline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-center bg-gradient-to-br from-white/60 via-white/40 to-transparent p-3 sm:p-4 rounded-3xl border border-[#EAE0BC]/80 backdrop-blur-xs">
              
              {/* Left Sub-Column: High-Impact Typography (7 cols) */}
              <div className="md:col-span-7 flex flex-col gap-2 sm:gap-2.5">
                
                {/* 10 Holistic Nutrition Workshops */}
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="font-serif italic font-black text-5xl sm:text-6xl text-[#13277A] leading-none tracking-tight drop-shadow-xs">
                    10
                  </span>
                  <div className="flex flex-col">
                    <span className="font-serif italic font-black text-xl sm:text-2xl text-[#13277A] leading-tight tracking-tight">
                      Holistic Nutrition
                    </span>
                    <span className="font-serif italic font-black text-lg sm:text-xl text-[#13277A] leading-tight tracking-tight">
                      Workshops
                    </span>
                  </div>
                </div>

                {/* Sunshine Golden Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#D49B0E] tracking-tight leading-tight">
                  Healthy Starts Here.
                </h1>

                {/* Lead Description */}
                <p className="text-xs sm:text-[13px] text-[#0F1F5C] font-semibold leading-relaxed max-w-sm">
                  Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
                </p>

                {/* 3 Quick Benefit Chips */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {["21 Live Online Hours", "Practical Kitchen Habits", "4 canfitpro CECs"].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/95 border border-[#E8DEC0] text-[10px] sm:text-[11px] font-black text-[#13277A] shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#1B7A42] shrink-0" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Sub-Column: Fully Visible Animated Toronto Landmark Artwork (5 cols) */}
              <div className="md:col-span-5 flex items-center justify-center relative">
                <div className="w-full max-w-[240px] sm:max-w-[270px] md:max-w-none">
                  <TorontoSkylineGraphic showBadges={true} />
                </div>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-[10px] sm:text-[11px] font-bold text-[#13277A]">
              <span className="inline-flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg border border-[#E8DEC0]">
                <Sparkles className="w-3 h-3 text-[#F6C915]" />
                <span>Evenings 6:00–8:00 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg border border-[#E8DEC0]">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg border border-[#E8DEC0]">
                <span>Zero Prerequisites Required</span>
              </span>
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
