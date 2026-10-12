"use client";

import React from "react";
import Image from "next/image";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { CheckCircle2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 relative bg-sky-50 overflow-x-clip flex flex-col justify-between min-h-[calc(100vh-84px)] min-h-[calc(100dvh-84px)]"
    >
      {/* ==============================================================
          TORONTO LANDMARK SKYLINE BACKDROP (Super Clear, Flipped Photo):
          Iconic CN Tower, Rogers Centre & Lake Ontario Waterfront
          Zero overlays, zero fog, 100% crystal clear natural clarity
          ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/toronto-hero-skyline.jpg"
          alt="Toronto Landmark Skyline CN Tower Waterfront"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </div>

      {/* Main Hero Container: Grand proportions & comfortably filling the viewport window */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-5 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-end">
          
          {/* ==============================================================
              LEFT COLUMN (7 cols): Bold, Grand & Impactful Hero Content
              ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3 sm:gap-3.5 text-left relative z-10 pb-2 lg:pb-0">
            
            {/* Top Live Intake Status Pill */}
            <div className="flex items-center gap-2 mb-0.5">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-[#071245] text-white text-[11px] sm:text-[13px] font-bold border-2 border-[#F6C915]/70 w-fit backdrop-blur-md shadow-none hover:scale-[1.02] transition-transform">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#F6C915]"></span>
                </span>
                <span>Live Online Intake Starts <strong className="text-[#F6C915]">Oct 28, 2026</strong> · 10 Workshops</span>
              </div>
            </div>

            {/* Hero Text Stack (Grand, Commanding & Mobile Responsive) */}
            <div className="flex flex-col gap-2 sm:gap-3 max-w-xl">
              
              {/* Holistic Nutrition Workshops */}
              <div className="flex flex-col">
                <span className="font-serif italic font-black text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#071245] leading-[1.05] tracking-tight">
                  Holistic Nutrition
                </span>
                <span className="font-serif italic font-black text-2xl sm:text-4xl lg:text-[42px] xl:text-[50px] text-[#071245] leading-[1.05] tracking-tight">
                  Workshops
                </span>
              </div>

              {/* Sunshine Golden Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-black text-[#B87503] sm:text-[#C4880B] tracking-tight leading-tight pt-0.5">
                Healthy Starts Here.
              </h1>

              {/* Lead Paragraph: Ultra-Transparent so artwork is completely visible */}
              <div className="relative rounded-2xl bg-white/10 sm:bg-white/15 backdrop-blur-[2px] border border-white/40 p-2.5 sm:p-3.5 max-w-xl z-20 shadow-none">
                <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-[#F6C915] to-[#DEAB07] rounded-r-full" />
                <p className="pl-2.5 text-xs sm:text-sm lg:text-[15px] text-[#071245] font-black leading-relaxed">
                  Every meal is a choice that energizes and transforms your vitality. Learn holistic wellness in simple way live online with Registered Holistic Nutritionist (RHN).
                </p>
              </div>

              {/* Benefit Chips: Semi-Transparent Glass */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-0.5">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-white/15 sm:bg-white/25 backdrop-blur-[2px] border border-white/50 text-xs sm:text-sm font-black text-[#071245] shadow-none hover:bg-white/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>21 Live Online Hours</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-white/15 sm:bg-white/25 backdrop-blur-[2px] border border-white/50 text-xs sm:text-sm font-black text-[#071245] shadow-none hover:bg-white/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                  <span>Practical Kitchen Hacks</span>
                </span>
              </div>

            </div>

            {/* Quick Micro-Highlight Strip */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap text-xs sm:text-[12px] font-bold text-[#071245] pt-0.5">
              <span className="inline-flex items-center gap-1.5 bg-white/15 sm:bg-white/25 backdrop-blur-[2px] px-2.5 py-1 rounded-lg border border-white/50 shadow-none font-black">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>Evenings 6:00–8:30 pm EST</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 sm:bg-white/25 backdrop-blur-[2px] px-2.5 py-1 rounded-lg border border-white/50 shadow-none font-black">
                <span>100% Live Interactive Dialogue</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 sm:bg-white/25 backdrop-blur-[2px] px-2.5 py-1 rounded-lg border border-white/50 shadow-none font-black">
                <span>Zero Prerequisites Required</span>
              </span>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN (5 cols): Full-Sized Official Intake Registration Form
              Transparent glass, zero shadow, clear view to the skyline backdrop
              ============================================================== */}
          <div id="form-1" className="lg:col-span-5 xl:col-span-5 w-full relative z-20 flex flex-col justify-end lg:items-end self-end">
            <div className="w-full max-w-[440px] lg:max-w-[440px] xl:max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
              <HeroRegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Running Marquee Attached Directly at the Base of the Hero Window (No Road Animation) */}
      <div className="w-full shrink-0 relative z-20 mt-auto">
        <TrustMarquee />
      </div>
    </section>
  );
}
