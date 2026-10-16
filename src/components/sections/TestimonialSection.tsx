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
import { RealisticPhoneMockup } from "@/components/ui/RealisticPhoneMockup";

export function TestimonialSection() {
  const [selectedId, setSelectedId] = useState<string>(HELC_TESTIMONIALS[0].id);

  const activeList = HELC_TESTIMONIALS;

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

  return (
    <section
      id="testimonial"
      data-screen-label="08 Testimonial"
      className="py-8 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 text-slate-700 text-[11px] sm:text-xs font-black tracking-widest uppercase mb-2 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B87503]" />
            <span>AUTHENTIC CSNN TORONTO VOICES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-tight leading-tight">
            Real Student Experiences &amp; Transformations
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600 font-medium">
            Authentic reflections from CSNN Toronto Healthy Eating &amp; Lifestyle Certificate graduates.
          </p>

          {/* Institutional Category Badge */}
          <div className="flex items-center justify-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#071245] text-white border border-[#071245] shadow-sm">
              <BookOpen className="w-4 h-4 text-[#F6C915]" />
              <span>Healthy Eating &amp; Lifestyle Certificate Testimonials</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-white/20 text-white">
                {HELC_TESTIMONIALS.length}
              </span>
            </div>
          </div>
        </div>

        {/* Dual-Pane Layout: Left Spotlight Card + Right Realistic Smartphone Structure Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ==============================================================
              LEFT PANE (7 cols): Editorial Review Spotlight Card (Pixel-Perfect Aligned)
              ============================================================== */}
          <div className="lg:col-span-7 flex flex-col h-full">
            
            <div className="bg-gradient-to-b from-white via-[#FCFDFE] to-[#F8FAFC] rounded-xl sm:rounded-3xl border border-slate-200/90 p-3.5 sm:p-7 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-2px_0_rgba(15,23,42,0.03),0_10px_35px_-10px_rgba(7,18,69,0.08)] relative min-h-[410px] lg:h-[642px] flex flex-col justify-between">
              
              <div>
                {/* Top Bar: Rating, Verified Seal, and Prev/Next Navigation */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 sm:pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-[#F6C915]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F6C915] drop-shadow-2xs"
                      />
                    ))}
                    <span className="ml-1 text-[11px] sm:text-xs font-black text-[#071245]">
                      5.0 Star Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">
                      {currentIndex + 1} of {activeList.length}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-[#071245] transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#071245] hover:bg-[#03091F] text-[#F6C915] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Testimonial Headline & Quote with locked min-heights */}
                <div className="py-2.5 sm:py-4 flex flex-col justify-start">
                  <div className="min-h-[34px] sm:min-h-[50px] flex items-center mb-1">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-black text-[#071245] leading-snug">
                      {currentTestimonial.headline || "Transformative Natural Nutrition Experience"}
                    </h3>
                  </div>

                  <div className="relative pl-1 min-h-[125px] sm:min-h-[175px]">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#F6C915]/20 absolute -top-1 -left-1 -z-0 pointer-events-none" />
                    <p className="text-[11px] sm:text-sm lg:text-[14.5px] text-slate-700 font-medium leading-normal sm:leading-relaxed relative z-10 italic line-clamp-5 sm:line-clamp-7">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="min-h-[24px] sm:min-h-[28px] mt-1.5 sm:mt-2.5 flex items-center">
                    {currentTestimonial.highlightChip ? (
                      <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200/60 text-[10px] sm:text-[11px] font-black text-[#854D0E]">
                        <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B87503]" />
                        <span>{currentTestimonial.highlightChip}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200/60 text-[10px] sm:text-[11px] font-black text-slate-600">
                        <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                        <span>Verified Student Feedback</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                {/* Student Profile Row: Solid Black Profile Avatar Icon (No dummy images) */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 border border-slate-800 shadow-sm">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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
                    className="btn-skeuo-gold inline-flex items-center gap-1.5 px-4 h-9 rounded-full text-xs font-black shadow-2xs hover:scale-105 transition-transform"
                  >
                    <span>Reserve your seat</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </a>
                </div>

                {/* Quick-Jump Student Pills in this category */}
                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                      Browse Reviews in this Category:
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {activeList.length} reviews
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                    {activeList.map((item) => {
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

          </div>

          {/* ==============================================================
              RIGHT PANE (5 cols): Realistic Smartphone Structure Mockup (Aligned)
              ============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start">
            
            {/* Smartphone Real-Like Mockup */}
            <RealisticPhoneMockup
              selectedId={selectedId}
              onSelectTestimonial={(id) => setSelectedId(id)}
            />

          </div>

        </div>

      </div>
    </section>
  );
}
