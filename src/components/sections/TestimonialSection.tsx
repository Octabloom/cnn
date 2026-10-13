"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Award,
  BookOpen,
  GraduationCap,
  User,
  ArrowRight,
} from "lucide-react";
import {
  DIPLOMA_TESTIMONIALS,
  HELC_TESTIMONIALS,
} from "@/data/testimonialData";

export function TestimonialSection() {
  const [activeCategory, setActiveCategory] = useState<"diploma" | "helc">("diploma");
  const [selectedId, setSelectedId] = useState<string>("dip-1");

  const activeList =
    activeCategory === "diploma" ? DIPLOMA_TESTIMONIALS : HELC_TESTIMONIALS;

  const currentTestimonial =
    activeList.find((item) => item.id === selectedId) || activeList[0];

  const currentIndex = activeList.findIndex((item) => item.id === currentTestimonial.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % activeList.length;
    setSelectedId(activeList[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    setSelectedId(activeList[prevIndex].id);
  };

  const handleCategoryChange = (category: "diploma" | "helc") => {
    setActiveCategory(category);
    if (category === "diploma") setSelectedId(DIPLOMA_TESTIMONIALS[0].id);
    if (category === "helc") setSelectedId(HELC_TESTIMONIALS[0].id);
  };

  return (
    <section
      id="testimonial"
      data-screen-label="08 Testimonial"
      className="py-8 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Compact for Single Scroll Visibility */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 text-slate-700 text-[11px] sm:text-xs font-black tracking-widest uppercase mb-2 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B87503]" />
            <span>AUTHENTIC CSNN TORONTO VOICES</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#071245] tracking-tight leading-tight">
            Real Student Experiences &amp; Transformations
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
            Authentic reflections from CSNN Toronto students and graduates.
          </p>

          {/* 2 Institutional Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3.5 sm:mt-4">
            <button
              type="button"
              onClick={() => handleCategoryChange("diploma")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border cursor-pointer ${
                activeCategory === "diploma"
                  ? "bg-[#071245] text-white border-[#071245] shadow-sm scale-[1.02]"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white"
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeCategory === "diploma" ? "text-[#F6C915]" : "text-[#071245]"}`} />
              <span>Testimonials Diploma program</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${activeCategory === "diploma" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>
                {DIPLOMA_TESTIMONIALS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("helc")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border cursor-pointer ${
                activeCategory === "helc"
                  ? "bg-[#071245] text-white border-[#071245] shadow-sm scale-[1.02]"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white"
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeCategory === "helc" ? "text-[#F6C915]" : "text-[#071245]"}`} />
              <span>Healthy Eating &amp; Certificate Testimonials</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${activeCategory === "helc" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>
                {HELC_TESTIMONIALS.length}
              </span>
            </button>
          </div>
        </div>

        {/* Single Scroll Visibility: Compact Editorial Testimonial Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-6 lg:p-7 shadow-[0_10px_35px_-10px_rgba(7,18,69,0.07)] relative">
          
          {/* Top Bar: Rating, Verified Seal, and Prev/Next Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-2.5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-[#F6C915]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F6C915] drop-shadow-2xs"
                />
              ))}
              <span className="ml-1 text-xs font-black text-[#071245]">
                5.0 Star Verified Feedback
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-500">
                {currentIndex + 1} of {activeList.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-[#071245] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="w-8 h-8 rounded-lg bg-[#071245] hover:bg-[#03091F] text-[#F6C915] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Content Box */}
          <div className="py-3 sm:py-4">
            {currentTestimonial.headline && (
              <h3 className="text-sm sm:text-base lg:text-lg font-black text-[#071245] mb-2 leading-snug">
                {currentTestimonial.headline}
              </h3>
            )}

            <div className="relative pl-1">
              <Quote className="w-7 h-7 sm:w-9 sm:h-9 text-[#F6C915]/25 absolute -top-1 -left-1 -z-0" />
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 font-medium leading-relaxed relative z-10 italic">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </div>

            {currentTestimonial.highlightChip && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200/60 text-[10.5px] font-black text-[#854D0E]">
                <Award className="w-3 h-3 text-[#B87503]" />
                <span>{currentTestimonial.highlightChip}</span>
              </div>
            )}
          </div>

          {/* Student Profile Row: Strictly Black Profile Icon & Verified Name */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              {/* Solid Black Profile Avatar Icon (No dummy images, only black profile icon) */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shrink-0 border border-slate-800 shadow-sm">
                <User className="w-5 h-5 text-white" />
              </div>

              <div>
                <h4 className="font-black text-xs sm:text-sm text-[#071245] leading-tight flex items-center gap-1.5">
                  <span>{currentTestimonial.name}</span>
                  <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/50">
                    Verified
                  </span>
                </h4>
                <p className="text-[11px] text-[#B87503] font-bold mt-0.5">
                  {currentTestimonial.role}
                </p>
                <p className="text-[10px] text-slate-500 font-semibold">
                  {currentTestimonial.program} · CSNN Toronto
                </p>
              </div>
            </div>

            <a
              href="#register"
              className="btn-skeuo-gold inline-flex items-center gap-1.5 px-4 h-8.5 rounded-full text-[11px] font-black shadow-2xs hover:scale-105 transition-transform"
            >
              <span>Join next cohort</span>
              <ArrowRight className="w-3 h-3 stroke-[3]" />
            </a>
          </div>

          {/* Quick-Jump Student Pills in this category */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1.5">
              Select review:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {activeList.map((item, index) => {
                const isSelected = item.id === currentTestimonial.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-[#071245] text-white border-[#071245] font-black shadow-2xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white"
                    }`}
                  >
                    {/* Mini black profile dot */}
                    <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center text-[8px]">
                      <User className="w-2.5 h-2.5 text-white" />
                    </span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
