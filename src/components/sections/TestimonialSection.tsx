"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Award,
  GraduationCap,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import {
  ALL_TESTIMONIALS,
  HELC_TESTIMONIALS,
  GRADUATE_TESTIMONIALS,
  QUICK_STUDENT_REVIEWS,
  TestimonialItem,
} from "@/data/testimonialData";
import { RealisticPhoneMockup } from "@/components/ui/RealisticPhoneMockup";

export function TestimonialSection() {
  const [activeCategory, setActiveCategory] = useState<"helc" | "graduate" | "quick">("helc");
  const [selectedId, setSelectedId] = useState<string>("helc-1");

  // Get active list based on category
  const activeList =
    activeCategory === "helc"
      ? HELC_TESTIMONIALS
      : activeCategory === "graduate"
      ? GRADUATE_TESTIMONIALS
      : QUICK_STUDENT_REVIEWS;

  // Current testimonial
  const currentTestimonial =
    ALL_TESTIMONIALS.find((item) => item.id === selectedId) || activeList[0];

  const currentIndex = activeList.findIndex((item) => item.id === currentTestimonial.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % activeList.length;
    setSelectedId(activeList[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    setSelectedId(activeList[prevIndex].id);
  };

  const handleCategoryChange = (category: "helc" | "graduate" | "quick") => {
    setActiveCategory(category);
    if (category === "helc") setSelectedId(HELC_TESTIMONIALS[0].id);
    if (category === "graduate") setSelectedId(GRADUATE_TESTIMONIALS[0].id);
    if (category === "quick") setSelectedId(QUICK_STUDENT_REVIEWS[0].id);
  };

  return (
    <section
      id="testimonial"
      data-screen-label="08 Testimonial"
      className="py-8 sm:py-12 lg:py-14 bg-[#FBF4D8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F6C915]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#13277A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 text-[#8A6208] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-[#E8DEC0] shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>AUTHENTIC CSNN TORONTO VOICES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
            Real Student Experiences &amp; Transformations
          </h2>

          <p className="text-xs sm:text-base text-[#5B5440] font-semibold max-w-2xl mx-auto">
            From live online Healthy Eating &amp; Lifestyle Certificate workshops to practicing holistic graduates — read how CSNN Toronto empowers real kitchen confidence and lasting vitality.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => handleCategoryChange("helc")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-xs border ${
                activeCategory === "helc"
                  ? "bg-[#13277A] text-white border-[#3861FB] shadow-md scale-[1.02]"
                  : "bg-white/90 text-[#13277A] border-[#E8DEC0] hover:bg-white"
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeCategory === "helc" ? "text-blue-200" : "text-[#13277A]"}`} />
              <span>Healthy Eating &amp; Lifestyle (HELC)</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${activeCategory === "helc" ? "bg-white text-[#13277A]" : "bg-[#13277A]/10 text-[#13277A]"}`}>
                {HELC_TESTIMONIALS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("graduate")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-xs border ${
                activeCategory === "graduate"
                  ? "bg-[#13277A] text-white border-[#3861FB] shadow-md scale-[1.02]"
                  : "bg-white/90 text-[#13277A] border-[#E8DEC0] hover:bg-white"
              }`}
            >
              <GraduationCap className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeCategory === "graduate" ? "text-blue-200" : "text-[#13277A]"}`} />
              <span>Graduate Alumni Journeys</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${activeCategory === "graduate" ? "bg-white text-[#13277A]" : "bg-[#13277A]/10 text-[#13277A]"}`}>
                {GRADUATE_TESTIMONIALS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("quick")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-xs border ${
                activeCategory === "quick"
                  ? "bg-[#13277A] text-white border-[#3861FB] shadow-md scale-[1.02]"
                  : "bg-white/90 text-[#13277A] border-[#E8DEC0] hover:bg-white"
              }`}
            >
              <MessageSquare className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeCategory === "quick" ? "text-blue-200" : "text-[#13277A]"}`} />
              <span>Student Reflections</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${activeCategory === "quick" ? "bg-white text-[#13277A]" : "bg-[#13277A]/10 text-[#13277A]"}`}>
                {QUICK_STUDENT_REVIEWS.length}
              </span>
            </button>
          </div>
        </div>

        {/* ==============================================================
            DUAL PANE SHOWCASE:
            Left: Interactive Editorial Review Spotlight Card
            Right: Realistic Smartphone Mockup Feed
            ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ------------------------------------------------------------
              LEFT PANE (7 cols): Editorial Spotlight Card
              ------------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Main Interactive Card */}
            <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EA] to-[#FAF1D2] border-2 border-[#E8DEC0] p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(19,39,122,0.12),0_1px_0_rgba(255,255,255,1)] relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute inset-x-8 sm:inset-x-12 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent" />

              {/* Card Header: Rating & Verified Seal */}
              <div className="flex items-center justify-between flex-wrap gap-2.5 pb-4 border-b border-[#E8DEC0]">
                <div className="flex items-center gap-1.5 text-[#F6C915]">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F6C915] drop-shadow-xs"
                    />
                  ))}
                  <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm font-black text-[#13277A]">
                    5.0 / 5.0 Star Verified
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13277A] text-[#F6C915] text-[10.5px] sm:text-xs font-black shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{currentTestimonial.badge}</span>
                </div>
              </div>

              {/* Headline if available */}
              {currentTestimonial.headline && (
                <div className="pt-4">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#A8780F] block mb-1">
                    Spotlight Insight:
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-[#13277A] tracking-tight leading-snug">
                    {currentTestimonial.headline}
                  </h3>
                </div>
              )}

              {/* Main Pull Quote Text */}
              <div className="relative pt-3 pb-2 pl-2">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#F6C915]/30 absolute -top-1 -left-2 -z-0" />
                <p className="text-sm sm:text-base lg:text-[17px] text-[#2F291E] font-medium leading-relaxed relative z-10 italic">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
              </div>

              {/* Highlight Pill if present */}
              {currentTestimonial.highlightChip && (
                <div className="mt-2 mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 border border-[#E8DEC0] shadow-xs text-xs font-black text-[#13277A]">
                  <Award className="w-3.5 h-3.5 text-[#F6C915]" />
                  <span>Core Takeaway: {currentTestimonial.highlightChip}</span>
                </div>
              )}

              {/* Student Bio Row + Controls */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#E8DEC0]">
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full ${currentTestimonial.avatarBg} text-white font-black text-sm sm:text-base flex items-center justify-center shadow-md border-2 border-white`}
                  >
                    {currentTestimonial.avatarText}
                  </div>
                  <div>
                    <h4 className="font-black text-base sm:text-lg text-[#13277A] leading-tight flex items-center gap-1.5">
                      <span>{currentTestimonial.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#1B7A42]" />
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#8A6208] font-bold">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#5B5440] font-semibold">
                      {currentTestimonial.program} · CSNN Toronto
                    </p>
                  </div>
                </div>

                {/* Next / Previous Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#E8DEC0] shadow-xs hover:bg-[#FAF1D2] flex items-center justify-center text-[#13277A] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-black text-[#13277A] px-1">
                    {currentIndex + 1} / {activeList.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#13277A] text-[#F6C915] shadow-xs hover:bg-[#071245] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

            {/* Quick-Jump Student Pills in this Category */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-black uppercase text-[#8A6208] tracking-wider shrink-0">
                Browse Students:
              </span>
              {activeList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                    selectedId === item.id
                      ? "bg-[#13277A] text-white border-[#3861FB] font-black shadow-xs scale-105"
                      : "bg-white/80 text-[#13277A] border-[#E8DEC0] hover:bg-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center">
              <div className="p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs">
                <span className="text-base sm:text-lg font-black text-[#13277A] block leading-tight">
                  98%
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8A6208]">
                  Student Satisfaction
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs">
                <span className="text-base sm:text-lg font-black text-[#13277A] block leading-tight">
                  30+ Yrs
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8A6208]">
                  Toronto Pioneer (1994)
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs">
                <span className="text-base sm:text-lg font-black text-[#13277A] block leading-tight">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8A6208]">
                  Live Online Interactive
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-2xs">
                <span className="text-base sm:text-lg font-black text-[#13277A] block leading-tight">
                  4 CECs
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8A6208]">
                  canfitpro Approved
                </span>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------
              RIGHT PANE (5 cols): Realistic Smartphone Structure Mockup
              ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Header label above phone */}
            <div className="mb-2 text-center">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#13277A] inline-flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-[#E8DEC0] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                Live Student Community Hub
              </span>
            </div>

            {/* Smartphone Real-Like Mockup */}
            <RealisticPhoneMockup
              selectedId={selectedId}
              onSelectTestimonial={(id) => setSelectedId(id)}
            />

            {/* Micro Helper Note below phone */}
            <p className="text-[11px] text-[#8A6208] font-bold mt-2 text-center">
              👆 Tap any review inside the phone or use the categories above to explore authentic student feedback.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
