"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Calendar,
  Users,
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
  BookOpen,
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
      className="w-full relative py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Ambient subtle lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F6C915]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#071245]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dual-Pane Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ==============================================================
              PANE 1 (LEFT / 5 COLS): Best Image & Card with Best UI
              ============================================================== */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Subtle Outer Glow */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-[#F6C915]/20 via-transparent to-[#071245]/10 blur-xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-[32px] overflow-hidden border-2 border-slate-100 shadow-xl aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#071245] group">
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
                    <span>Live Instructor Classes</span>
                  </span>
                </div>

                {/* Top Right Campus Pill */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-[11px] font-black text-[#071245]">
                  <MapPin className="w-3.5 h-3.5 text-[#B87503]" />
                  <span>Toronto, ON</span>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 right-5 text-white">
                  <p className="text-xs sm:text-sm font-bold text-[#FEEB9A] uppercase tracking-wider">
                    Holistic Wellness
                  </p>
                  <p className="text-base sm:text-lg font-black leading-tight text-white drop-shadow-sm">
                    Learn Whole-Food Nutrition Live in Your Kitchen
                  </p>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#F6C915]" />
                <span className="text-xs sm:text-[13px] font-black text-[#071245] tracking-tight">
                  Canadian School of Natural Nutrition Toronto
                </span>
              </div>

              {/* Campus Tag */}
              <span className="px-2.5 py-1 rounded-lg bg-[#071245] text-[#F6C915] text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-2xs">
                TORONTO
              </span>

              {/* Starts Oct 28, 2026 · 10 Workshops */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] border border-[#FDE047] text-[11px] sm:text-xs font-bold text-[#854D0E]">
                <Calendar className="w-3 h-3 text-[#854D0E]" />
                <span>Starts <strong>Oct 28, 2026</strong> · 10 Workshops</span>
              </div>

            </div>

            {/* Program Name Subtitle */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-600">
              <span className="font-extrabold text-[#071245]">
                Healthy Eating &amp; Lifestyle Certificate
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-[#071245] bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 text-xs font-black">
                <Laptop className="w-3 h-3 text-[#071245]" />
                Live Online
              </span>
            </div>

            {/* Big Headline Block: 10 Holistic Nutrition Workshops */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
                <span className="font-serif italic font-black text-5xl sm:text-6xl lg:text-7xl text-[#071245] leading-none tracking-tight">
                  10
                </span>
                <span className="font-serif italic font-black text-3xl sm:text-4xl lg:text-5xl text-[#071245] leading-tight tracking-tight">
                  Holistic Nutrition Workshops
                </span>
              </div>

              {/* Core Promise: Healthy Starts Here */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#B87503] tracking-tight leading-tight">
                Healthy Starts Here.
              </h2>
            </div>

            {/* Lead Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              Every meal is a choice that energizes and transforms your vitality. Learn holistic wellness in simple way live online with Registered Holistic Nutritionist (RHN).
            </p>

            {/* Key Value Cards Grid (5 Distinct Benefit Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              
              {/* Card 1: 21 Live Online Hours */}
              <div className="bg-slate-50/70 hover:bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#071245]/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#071245] text-[#071245] group-hover:text-[#F6C915] border border-slate-200/60 shadow-2xs transition-colors flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071245] block leading-tight">
                      21 Live Online Hours
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
                      10 interactive sessions
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Practical Kitchen Hacks */}
              <div className="bg-slate-50/70 hover:bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#071245]/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#071245] text-[#071245] group-hover:text-[#F6C915] border border-slate-200/60 shadow-2xs transition-colors flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071245] block leading-tight">
                      Practical Kitchen Hacks
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
                      Real pantry &amp; meal skills
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Evenings 6:00–8:30 pm EST */}
              <div className="bg-slate-50/70 hover:bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#071245]/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#071245] text-[#071245] group-hover:text-[#F6C915] border border-slate-200/60 shadow-2xs transition-colors flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071245] block leading-tight">
                      Evenings 6:00–8:30 pm EST
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
                      Balanced for busy schedules
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: 100% Live Interactive Dialogue */}
              <div className="bg-slate-50/70 hover:bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#071245]/20 transition-all group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#071245] text-[#071245] group-hover:text-[#F6C915] border border-slate-200/60 shadow-2xs transition-colors flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071245] block leading-tight">
                      100% Live Interactive Dialogue
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
                      Direct Q&amp;A with instructor
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 5: Zero Prerequisites Required */}
              <div className="bg-slate-50/70 hover:bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#071245]/20 transition-all group sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#071245] text-[#071245] group-hover:text-[#F6C915] border border-slate-200/60 shadow-2xs transition-colors flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071245] block leading-tight">
                      Zero Prerequisites Required
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#071245] hover:bg-[#0B1A5A] text-white font-black text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Reserve Seat for October 28</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToCurriculum}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#071245] font-extrabold text-sm border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#B87503]" />
                <span>View All 10 Workshops</span>
              </button>
            </div>

            {/* Institutional Seal Footnote */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
              <span>Official Certificate awarded upon completion by the Canadian School of Natural Nutrition.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
