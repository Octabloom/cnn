"use client";

import React from "react";
import Image from "next/image";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TorontoSkylineGraphic } from "@/components/ui/TorontoSkylineGraphic";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { PROGRAM_INFO } from "@/data/programData";
import { Sparkles, Calendar, Award, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF6DC] overflow-hidden"
    >
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#F6C915]/15 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-5 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#13277A]/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-3 sm:py-5 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Branded CSNN Toronto Canada Showcase
              Modeled after the official Toronto flyer with rich animations
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* 1. Top Explore Notice Ribbon (Deep Navy with Gold Accents) */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#071245] via-[#0E2068] to-[#071245] p-2 sm:p-2.5 px-3.5 sm:px-5 text-white shadow-md border border-[#F6C915]/30 flex items-center justify-between gap-2">
              <p className="text-[11px] sm:text-xs font-bold leading-tight">
                Explore <span className="text-[#F6C915] font-black underline decoration-[#F6C915]/50">holistic nutrition</span> through 10 live online workshops. Classes begin <span className="text-[#FFE875] font-black">October 14, 2026</span>.
              </p>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black text-[#F6C915] bg-white/10 px-2 py-0.5 rounded-full border border-white/15 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-ping" />
                Live Online
              </span>
            </div>

            {/* 2. Branded CSNN Toronto Institutional Header Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border-2 border-[#EAE0BC] shadow-[0_10px_30px_rgba(19,39,122,0.06)] flex items-center gap-3 sm:gap-4.5">
              {/* Official CSNN Emblem */}
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-md shrink-0 flex items-center justify-center">
                <Image
                  src="/assets/logo.jpg"
                  alt="Canadian School of Natural Nutrition Toronto"
                  fill
                  sizes="72px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Vertical Gold Separator */}
              <div className="w-[3px] h-12 sm:h-16 bg-gradient-to-b from-[#F6C915] via-[#DEAB07] to-[#F6C915] rounded-full shrink-0" />

              {/* Brand Typography Lockup */}
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.16em] text-[#5B5440]">
                  Canadian School of Natural Nutrition
                </span>
                <span className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#13277A] tracking-[-0.03em] leading-none my-0.5 sm:my-1">
                  TORONTO
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-[#A8780F]">
                    Healthy Eating &amp; Lifestyle Certificate
                  </span>
                  <span className="text-xs text-[#13277A]/40 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#13277A] bg-[#FAF1D0] px-2 py-0.5 rounded-md border border-[#E8DEC0]">
                    Live Online
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Core Visual Banner: "10 Holistic Nutrition Workshops · Healthy Starts Here." + Animated Toronto Skyline */}
            <div className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EA] to-[#FAF1D2] border-2 border-[#E8DEC0] shadow-[0_15px_40px_-15px_rgba(19,39,122,0.1)] p-4 sm:p-6 relative overflow-hidden">
              
              {/* Top Accent Gold Highlight */}
              <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                
                {/* Left Typography & Value Propositions (7 cols) */}
                <div className="md:col-span-7 flex flex-col gap-2.5 sm:gap-3 z-10">
                  
                  {/* Eyebrow Chip */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#8A6208] text-[10px] sm:text-[11px] font-black tracking-widest uppercase border border-[#E8DEC0] shadow-2xs w-fit">
                    <Sparkles className="w-3 h-3 text-[#F6C915]" />
                    <span>FOUNDED 1994 · CANADA&apos;S PIONEER</span>
                  </div>

                  {/* Big Number "10" + "Holistic Nutrition Workshops" */}
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

                  {/* Golden Sunshine Hero Headline */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D49B0E] tracking-tight leading-tight">
                    Healthy Starts Here.
                  </h1>

                  {/* Lead Description */}
                  <p className="text-xs sm:text-sm text-[#0F1F5C] font-semibold leading-relaxed max-w-md">
                    Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
                  </p>

                  {/* 3 Value Pillars */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {["21 Live Online Hours", "Practical Kitchen Habits", "4 canfitpro CECs"].map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/90 border border-[#E8DEC0] text-[11px] sm:text-xs font-black text-[#13277A] shadow-2xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#1B7A42] shrink-0" />
                        <span>{pill}</span>
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Animated Toronto Skyline Vector Artwork (5 cols) */}
                <div className="md:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
                    <TorontoSkylineGraphic showBadges={true} />
                  </div>
                </div>

              </div>
            </div>

            {/* 4. Quick Highlights Ribbon Underneath */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <span className="text-[10px] sm:text-xs font-black text-[#13277A] block">Starts Oct 14</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#8A6208]">Evening Live Classes</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <span className="text-[10px] sm:text-xs font-black text-[#13277A] block">21 Total Hours</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#8A6208]">Direct Faculty Q&amp;A</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <span className="text-[10px] sm:text-xs font-black text-[#13277A] block">Accredited CECs</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#8A6208]">canfitpro Approved</span>
              </div>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Official Intake Registration Form
              Preserved with all interactive validation and staging safety
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full">
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
