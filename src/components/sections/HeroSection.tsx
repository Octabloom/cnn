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
          Significantly larger, anchored to bottom right of left hero area
          ============================================================== */}
      <div className="absolute right-0 lg:right-[30%] xl:right-[33%] bottom-0 w-full sm:w-[620px] md:w-[720px] lg:w-[840px] xl:w-[960px] h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[640px] pointer-events-none select-none z-0 flex items-end justify-end opacity-55 sm:opacity-80 lg:opacity-100 transition-opacity">
        <TorontoSkylineGraphic showBadges={false} className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Sun Auroras */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-5 left-0 w-[450px] h-[450px] rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-3 sm:py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Sleek Brand Card + Unboxed Hero Text
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5 sm:gap-4 text-left relative z-10">
            
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

            {/* Hero Text Stack (Directly on canvas - NOT in a card) */}
            <div className="flex flex-col gap-2.5 sm:gap-3 max-w-xl">
              
              {/* 10 Holistic Nutrition Workshops */}
              <div className="flex items-baseline gap-2.5 sm:gap-3.5">
                <span className="font-serif italic font-black text-6xl sm:text-7xl lg:text-[76px] text-[#13277A] leading-none tracking-tight drop-shadow-xs">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic font-black text-2xl sm:text-3xl lg:text-[34px] text-[#13277A] leading-tight tracking-tight">
                    Holistic Nutrition
                  </span>
                  <span className="font-serif italic font-black text-xl sm:text-2xl lg:text-[28px] text-[#13277A] leading-tight tracking-tight">
                    Workshops
                  </span>
                </div>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#D49B0E] tracking-tight leading-tight">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#0F1F5C] font-semibold leading-relaxed max-w-lg">
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
