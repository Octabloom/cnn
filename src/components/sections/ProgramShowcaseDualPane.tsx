"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Calendar,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
  BookOpen,
  Star,
  MapPin,
  Laptop
} from "lucide-react";

export function ProgramShowcaseDualPane() {
  const scrollToForm = () => {
    const el = document.getElementById("form-1");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById("curriculum");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="program-showcase"
      data-screen-label="01.5 Dual Pane Program Showcase"
      className="w-full relative py-8 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FDF6DC] via-[#FFFDF9] to-[#FAF1D0] border-b border-[#E8DEC0]/80 overflow-hidden"
    >
      {/* Ambient Atmospheric Sun & Azure Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F6C915]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#13277A]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dual-Pane Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ==============================================================
              PANE 1 (LEFT / 5 COLS): Best Image & Card with Best UI
              ============================================================== */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Luxury Outer Glow & Angled Halo */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-[#F6C915]/30 via-transparent to-[#13277A]/15 blur-xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-[32px] overflow-hidden border-2 border-white/90 shadow-2xl aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#071245] group">
                <Image
                  src="/images/csnn-showcase.jpg"
                  alt="CSNN Toronto Live Online Nutrition Masterclass Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Gentle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071245]/90 via-[#071245]/20 to-transparent" />

                {/* Top Floating Live Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071245]/90 backdrop-blur-md border border-[#F6C915]/60 shadow-lg text-[11px] sm:text-xs font-black text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-ping" />
                  <span className="flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-[#F6C915]" />
                    <span>Live Interactive Studio</span>
                  </span>
                </div>

                {/* Top Right Campus Pill */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DEC0] shadow-md text-[11px] font-black text-[#13277A]">
                  <MapPin className="w-3.5 h-3.5 text-[#C4880B]" />
                  <span>Toronto, ON</span>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-20 left-4 right-4 text-white sm:bottom-24">
                  <p className="text-xs sm:text-sm font-bold text-[#FEEB9A] uppercase tracking-wider">
                    Interactive Culinary Science
                  </p>
                  <p className="text-base sm:text-lg font-black leading-tight text-white drop-shadow-sm">
                    Learn Whole-Food Nutrition Live in Your Kitchen
                  </p>
                </div>
              </div>

              {/* Floating Luxury Accreditation & Brand Card (Best UI) */}
              <div className="relative -mt-16 sm:-mt-20 mx-3 sm:mx-6 bg-white/98 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-[#E8DEC0] shadow-2xl transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center gap-3.5">
                  
                  {/* Official CSNN Emblem */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-md shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/logo.jpg"
                      alt="CSNN Toronto Logo"
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>

                  {/* Brand Credentials */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#A8780F]">
                        CSNN TORONTO CAMPUS
                      </span>
                      <span className="text-[10px] font-bold text-[#13277A] bg-[#FAF1D0] px-2 py-0.5 rounded-full border border-[#E8DEC0]">
                        Est. 1994
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-[#13277A] truncate">
                      Canada&apos;s Leading Holistic Nutrition School
                    </h4>
                    
                    {/* Star Rating & Verified Graduates */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-[#F6C915]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F6C915]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-black text-[#071245]">5.0</span>
                      <span className="text-[11px] text-[#5B5440] font-medium truncate">
                        (12,000+ Alumni Across Canada)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-cred strip */}
                <div className="mt-3 pt-3 border-t border-[#F0E6C5] flex items-center justify-between text-[11px] font-bold text-[#13277A]">
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#C4880B]" />
                    <span>4 canfitpro CECs Approved</span>
                  </span>
                  <span className="text-[#A8780F] font-black">
                    Zero Prerequisites
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ==============================================================
              PANE 2 (RIGHT / 7 COLS): Pristine Text Positioning & Hierarchy
              ============================================================== */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5 text-left">
            
            {/* Top Eyebrow Badge Lockup */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Canadian School of Natural Nutrition Toronto */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DEC0] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#F6C915]" />
                <span className="text-xs sm:text-[13px] font-black text-[#13277A] tracking-tight">
                  Canadian School of Natural Nutrition Toronto
                </span>
              </div>

              {/* Campus Tag */}
              <span className="px-2.5 py-1 rounded-lg bg-[#071245] text-[#F6C915] text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-2xs">
                TORONTO
              </span>

              {/* Starts Oct 14, 2026 · 10 Workshops */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF4CE] border border-[#F6C915] text-[11px] sm:text-xs font-bold text-[#A8780F]">
                <Calendar className="w-3 h-3 text-[#A8780F]" />
                <span>Starts <strong>Oct 14, 2026</strong> · 10 Workshops</span>
              </div>

            </div>

            {/* Program Name Subtitle */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#A8780F]">
              <span className="font-extrabold text-[#13277A]">
                Healthy Eating &amp; Lifestyle Certificate
              </span>
              <span className="text-[#13277A]/40">•</span>
              <span className="inline-flex items-center gap-1 text-[#13277A] bg-white px-2 py-0.5 rounded-md border border-[#E8DEC0] text-xs font-black">
                <Laptop className="w-3 h-3 text-[#13277A]" />
                Live Online
              </span>
            </div>

            {/* Big Headline Block: 10 Holistic Nutrition Workshops */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
                <span className="font-serif italic font-black text-5xl sm:text-6xl lg:text-7xl text-[#13277A] leading-none tracking-tight">
                  10
                </span>
                <span className="font-serif italic font-black text-3xl sm:text-4xl lg:text-5xl text-[#13277A] leading-tight tracking-tight">
                  Holistic Nutrition Workshops
                </span>
              </div>

              {/* Core Promise: Healthy Starts Here */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C4880B] tracking-tight leading-tight">
                Healthy Starts Here.
              </h2>
            </div>

            {/* Lead Narrative Paragraph */}
            <p className="text-base sm:text-lg text-[#071245] font-semibold leading-relaxed max-w-2xl">
              Every meal is a choice that energizes and transforms your vitality. Learn practical whole-food science live online with licensed CSNN faculty.
            </p>

            {/* Key Value Cards Grid (5 Distinct Benefit Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              
              {/* Card 1: 21 Live Online Hours */}
              <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8DEC0] shadow-xs hover:border-[#F6C915] hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1D0] group-hover:bg-[#F6C915] transition-colors flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#13277A]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#13277A] block leading-tight">
                      21 Live Online Hours
                    </span>
                    <span className="text-[11px] text-[#5B5440] font-medium leading-tight">
                      10 interactive sessions
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Practical Kitchen Habits */}
              <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8DEC0] shadow-xs hover:border-[#F6C915] hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1D0] group-hover:bg-[#F6C915] transition-colors flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-[#13277A]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#13277A] block leading-tight">
                      Practical Kitchen Habits
                    </span>
                    <span className="text-[11px] text-[#5B5440] font-medium leading-tight">
                      Real pantry &amp; meal skills
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Evenings 6:00–8:00 pm EST */}
              <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8DEC0] shadow-xs hover:border-[#F6C915] hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1D0] group-hover:bg-[#F6C915] transition-colors flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#13277A]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#13277A] block leading-tight">
                      Evenings 6:00–8:00 pm EST
                    </span>
                    <span className="text-[11px] text-[#5B5440] font-medium leading-tight">
                      Balanced for busy schedules
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: 100% Live Interactive Dialogue */}
              <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8DEC0] shadow-xs hover:border-[#F6C915] hover:shadow-md transition-all group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1D0] group-hover:bg-[#F6C915] transition-colors flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#13277A]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#13277A] block leading-tight">
                      100% Live Interactive Dialogue
                    </span>
                    <span className="text-[11px] text-[#5B5440] font-medium leading-tight">
                      Direct Q&amp;A with instructor
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 5: Zero Prerequisites Required */}
              <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8DEC0] shadow-xs hover:border-[#F6C915] hover:shadow-md transition-all group sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1D0] group-hover:bg-[#F6C915] transition-colors flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#13277A]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#13277A] block leading-tight">
                      Zero Prerequisites Required
                    </span>
                    <span className="text-[11px] text-[#5B5440] font-medium leading-tight">
                      Open to anyone passionate about wellness
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA & Syllabus Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#13277A] hover:bg-[#071245] text-white font-black text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Reserve Seat for October 14</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToCurriculum}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF1D0] text-[#13277A] font-extrabold text-sm border border-[#E8DEC0] shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#C4880B]" />
                <span>View All 10 Workshops</span>
              </button>
            </div>

            {/* Institutional Seal Footnote */}
            <div className="flex items-center gap-2 text-xs text-[#5B5440] pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
              <span>Official Certificate awarded upon completion by the Canadian School of Natural Nutrition.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
