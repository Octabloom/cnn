import React from "react";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { HeroRegistrationForm } from "@/components/forms/HeroRegistrationForm";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { PROGRAM_INFO } from "@/data/programData";
import { ShieldCheck, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      data-screen-label="01 Hero + Form 1"
      className="w-full flex-1 flex flex-col justify-between relative"
    >
      {/* Toronto Skyline Background with Atmospheric Wash */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/toronto-skyline.jpg"
          alt="Toronto Skyline featuring CN Tower"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.14] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8E8]/94 via-[#FAF2D4]/88 to-[#F7EBB8]/96" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-[#F6C915]/10" />
      </div>

      {/* Dynamic Luxury Ambient Mesh Auroras */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#F6C915]/20 to-transparent blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-2 left-5 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#13277A]/10 to-transparent blur-3xl pointer-events-none z-[1]" />

      {/* Main Hero Grid: Bold, Grand & Generously Sized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-2 sm:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* Column 1: Narrative & Program Credibility (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-3 sm:gap-3.5 text-left">
            {/* Live Online Badge + Toronto Landmark Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-[#E8DEC0] shadow-xs w-fit backdrop-blur-md">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-b from-[#EF3838] to-[#B91C1C] text-white text-[10px] sm:text-xs font-black tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  LIVE ONLINE
                </span>
                <span className="text-xs sm:text-[13px] font-black text-[#0F1F5C] tracking-tight">
                  10 workshops · 21 hours · expert-led
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-[#E8DEC0] text-xs font-black text-[#8A6208] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#A8780F]" />
                <span>Toronto Campus &amp; Online</span>
              </div>
            </div>

            {/* Main Headline (Bold, Commanding & Large) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[50px] 2xl:text-[54px] font-black text-[#13277A] tracking-[-0.035em] leading-[1.09] sm:leading-[1.07]">
              What if your wellness started in your kitchen?
            </h1>

            {/* Program Name Subheading with Liquid Gold Foil */}
            <div className="text-base sm:text-lg lg:text-xl font-black tracking-tight">
              <span className="gold-foil-text">
                {PROGRAM_INFO.programName}
              </span>
            </div>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-base lg:text-[16.5px] text-[#0F1F5C] leading-relaxed font-medium max-w-xl">
              Every meal is a choice that energises and transforms your life. Learn practical nutrition live online with Rasha Abu Rabi, BSc., MSc., R.H.N. No prior experience needed.
            </p>

            {/* 3 Tactile Benefit Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
              {["Practical Nutrition", "Healthy Habits", "Wellness Strategies"].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-xl bg-white/95 border border-[#E8DEC0] shadow-xs text-xs sm:text-[13px] font-black text-[#0F1F5C] cursor-default"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-[#FFE052] to-[#D4A017] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Institutional Certification Medallion */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#13277A] via-[#0E2068] to-[#0B1A5A] text-white shadow-md border border-[#F6C915]/30 w-fit">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-0.5 overflow-hidden shrink-0 border border-[#F6C915]">
                <Image
                  src="/assets/logo.jpg"
                  alt="CSNN Toronto"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#F6C915] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Certificate Issued By
                </span>
                <span className="text-xs sm:text-sm font-black text-white leading-tight">
                  CSNN Toronto · Teaching since 1994
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Video Presentation (3 cols - Cinema Phone Showcase) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center justify-center relative py-1 lg:py-0">
            <div className="w-full max-w-[210px] sm:max-w-[240px] lg:max-w-[260px] xl:max-w-[275px]">
              <VideoPlayer
                src="/assets/videos/video-636.mp4"
                poster="/assets/frames/v636-0.4.jpg"
                alt="CSNN Healthy Eating & Lifestyle Certificate Course Introduction Video"
                aspectRatio="9/16"
                label="Watch Video Overview"
              />
            </div>

            {/* Instructor Badge */}
            <div className="mt-2.5 flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl glass-card-light border border-[#E8DEC0] shadow-xs">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-b from-[#1E389B] to-[#0A1856] text-[#F6C915] font-black text-[9px] flex items-center justify-center shrink-0 border border-[#F6C915]/40 shadow-xs">
                RHN
              </span>
              <div className="flex flex-col">
                <span className="font-black text-xs sm:text-[13px] text-[#0F1F5C] leading-none">
                  Rasha Abu Rabi
                </span>
                <span className="text-[10px] font-bold text-[#8A6208] mt-0.5">
                  BSc., MSc., R.H.N.
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Registration Card (4 cols - Substantial Luxury Card) */}
          <div id="form-1" className="lg:col-span-4 xl:col-span-4 w-full">
            <HeroRegistrationForm />
          </div>

        </div>
      </div>

      {/* Running Strip Directly Attached to Bottom of Hero Section */}
      <div className="w-full shrink-0 relative z-20">
        <TrustMarquee />
      </div>
    </section>
  );
}
