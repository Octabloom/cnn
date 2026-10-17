"use client";

import React from "react";
import Image from "next/image";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { CheckCircle2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 relative bg-sky-50 overflow-x-clip flex flex-col justify-between min-h-[calc(100vh-84px)] min-h-[calc(100dvh-84px)]"
    >
      {/* ==============================================================
          TORONTO LANDMARK SKYLINE BACKDROP:
          Iconic CN Tower, Rogers Centre & Lake Ontario Waterfront
          ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/toronto-hero-skyline.jpg"
          alt="Toronto Landmark Skyline CN Tower Waterfront"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        {/* Soft atmospheric gradient for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container: Perfectly balanced & vertically centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Bold, Grand & Impactful Hero Content
              Spacious vertical rhythm — Zero overlapping elements
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5 sm:gap-4 text-left relative z-10 pb-3 lg:pb-0">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2 mb-1">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#071245] text-white text-[11px] sm:text-[13px] font-bold border-2 border-[#F6C915]/80 w-fit shadow-xs hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 28, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Clean, Elevated & Crisp Typography) */}
            <div className="flex flex-col gap-2.5 max-w-xl">
              
              {/* Holistic Nutrition Workshops */}
              <div className="flex flex-col">
                <span className="font-serif italic font-black text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#071245] leading-[1.08] tracking-tight">
                  Holistic Nutrition
                </span>
                <span className="font-serif italic font-black text-2xl sm:text-4xl lg:text-[42px] xl:text-[50px] text-[#071245] leading-[1.08] tracking-tight">
                  Workshops
                </span>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-snug mt-1 mb-1">
                Better Nutrition Begins with Understanding
              </h1>

              {/* Lead Paragraph Card: Elegant Frosted Backing for 100% Legibility */}
              <div className="relative rounded-2xl bg-white/80 sm:bg-white/85 backdrop-blur-md border border-white/90 p-4 sm:p-5 max-w-xl z-20 shadow-[0_8px_30px_rgba(7,18,69,0.06)]">
                <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-[#F6C915] to-[#DEAB07] rounded-r-full" />
                <p className="pl-3 text-xs sm:text-sm lg:text-[15px] text-[#071245] font-bold leading-relaxed">
                  Discover the value of nourishing your body with informed food choices. Attend live online workshops with a Registered Holistic Nutritionist (R.H.N.) to develop nutrition knowledge and practice wellness strategies.
                </p>
              </div>

              {/* Benefit Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/80 sm:bg-white/85 backdrop-blur-md border border-white/90 text-xs sm:text-sm font-black text-[#071245] shadow-2xs hover:bg-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/80 sm:bg-white/85 backdrop-blur-md border border-white/90 text-xs sm:text-sm font-black text-[#071245] shadow-2xs hover:bg-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Hacks</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap text-xs sm:text-[12px] font-bold text-[#071245] pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white/80 sm:bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/90 shadow-2xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>Evenings 6:00–8:30 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 sm:bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/90 shadow-2xs font-black">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 sm:bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/90 shadow-2xs font-black">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Full-Sized Official Intake Registration Form
              Clean, elegant frosted glass card with maximum legibility
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-center lg:items-end">
            <div className="w-full max-w-[440px] lg:max-w-[440px] xl:max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
              <HeroRegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Running Marquee Attached Directly at the Base of the Hero Window */}
      <div className="w-full shrink-0 relative z-20 mt-auto">
        <TrustMarquee />
      </div>
    </section>
  );
}
