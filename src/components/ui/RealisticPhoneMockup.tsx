"use client";

import React, { useState } from "react";
import {
  Star,
  CheckCircle2,
  Heart,
  Wifi,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Award,
  User,
  Quote,
} from "lucide-react";
import {
  TestimonialItem,
  ALL_TESTIMONIALS,
  HELC_TESTIMONIALS,
  QUICK_STUDENT_REVIEWS,
} from "@/data/testimonialData";

interface RealisticPhoneMockupProps {
  selectedId: string;
  onSelectTestimonial: (id: string) => void;
}

export function RealisticPhoneMockup({
  selectedId,
  onSelectTestimonial,
}: RealisticPhoneMockupProps) {
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  // Find active testimonial
  const current =
    ALL_TESTIMONIALS.find((item) => item.id === selectedId) || HELC_TESTIMONIALS[0];

  // Active category list
  const activeList =
    current.category === "quick" ? QUICK_STUDENT_REVIEWS : HELC_TESTIMONIALS;

  const currentIndex = activeList.findIndex((item) => item.id === current.id);
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % activeList.length;
    onSelectTestimonial(activeList[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + activeList.length) % activeList.length;
    onSelectTestimonial(activeList[prevIdx].id);
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[365px] select-none py-2">
      {/* Ambient Lighting Behind Chassis */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#071245]/20 via-[#F6C915]/15 to-[#071245]/15 rounded-[58px] blur-2xl pointer-events-none" />

      {/* Titanium Hardware Chassis with Sleek Metallic Finish */}
      <div className="relative rounded-[50px] p-[9px] bg-gradient-to-b from-[#2D3037] via-[#1E2026] to-[#141519] shadow-[0_25px_60px_-15px_rgba(7,18,69,0.28),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)] border-2 border-[#41444D]/70">
        
        {/* Left Side Hardware Buttons (Mute / Volume) */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-7 bg-[#34373F] rounded-l-md" />
        <div className="absolute -left-[5px] top-35 w-[3px] h-11 bg-[#34373F] rounded-l-md" />
        <div className="absolute -left-[5px] top-49 w-[3px] h-11 bg-[#34373F] rounded-l-md" />
        
        {/* Right Side Power Button */}
        <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-[#34373F] rounded-r-md" />

        {/* Inner Phone Screen (Clean, Bright Apple iOS Light Theme) */}
        <div className="relative rounded-[42px] bg-slate-50 overflow-hidden flex flex-col h-[610px] sm:h-[635px] border border-slate-200/90 shadow-inner text-slate-800">
          
          {/* 1. REALISTIC IOS STATUS BAR */}
          <div className="pt-2.5 px-6 flex items-center justify-between z-30 shrink-0 text-slate-800">
            {/* Clock */}
            <span className="text-[12px] font-bold tracking-tight">9:41</span>
            
            {/* Dynamic Island Capsule */}
            <div className="w-24 h-[19px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm border border-black/10">
              <div className="w-2 h-2 rounded-full bg-slate-900 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-[9px] font-extrabold tracking-tighter text-slate-700">5G</span>
              <Wifi className="w-3 h-3 text-slate-700" />
              {/* Battery Indicator */}
              <div className="w-4.5 h-2.5 border border-slate-700 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-500 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* 2. CLEAN APP HEADER */}
          <div className="px-4 pt-2 pb-2.5 bg-white border-b border-slate-200/90 shrink-0 z-20 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#071245] text-[#F6C915] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-black text-[#071245] leading-tight">
                    Student Reviews
                  </h3>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-500 leading-tight">
                  <div className="flex items-center text-[#F6C915]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 fill-[#F6C915]" />
                    ))}
                  </div>
                  <span>5.0 (100% Verified)</span>
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-black text-[#071245] px-1">
                {activeIndex + 1}/{activeList.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="w-6 h-6 rounded-lg bg-[#071245] text-white hover:bg-[#071245]/90 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. SIMPLE, ATTRACTIVE REVIEW CARDS FEED */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 relative">
            
            {/* Top helper text */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5 text-[10.5px] font-black text-[#071245]">
                <Sparkles className="w-3 h-3 text-[#B87503]" />
                <span>Verified Reflections</span>
              </div>
              <span className="text-[9.5px] font-bold text-slate-500">
                Tap card to spotlight
              </span>
            </div>

            {/* List of Simple & Attractive Cards with Male / Female Profiles */}
            {activeList.map((item) => {
              const isSelected = item.id === current.id;
              const liked = likedList[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectTestimonial(item.id)}
                  className={`rounded-2xl p-4 transition-all cursor-pointer relative text-left border ${
                    isSelected
                      ? "bg-white border-[#071245] shadow-[0_10px_25px_-5px_rgba(7,18,69,0.12)] ring-2 ring-[#071245]/15 scale-[1.01]"
                      : "bg-white/90 border-slate-200/90 shadow-2xs hover:bg-white hover:border-slate-300 opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Active Indicator Chip */}
                  {isSelected && (
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#071245] text-[#F6C915] text-[9.5px] font-black shadow-xs">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Spotlight</span>
                    </div>
                  )}

                  {/* Header: Male/Female Profile Portrait + Student Info + Stars */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Realistic Profile Photo with Verified Badge */}
                    <div className="relative shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs ring-1 ring-slate-200"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#071245] shadow-2xs">
                          <User className="w-5 h-5 text-[#071245]" />
                        </div>
                      )}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center shadow-2xs">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="flex-1 min-w-0 pr-14">
                      <h4 className="text-xs font-black text-[#071245] truncate flex items-center gap-1">
                        <span>{item.name}</span>
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                          Verified
                        </span>
                      </h4>
                      <p className="text-[10px] font-medium text-slate-500 truncate mt-0.5">
                        {item.role}
                      </p>
                      
                      {/* 5-Star Golden Rating */}
                      <div className="flex items-center gap-1 mt-1 text-[#F6C915]">
                        <div className="flex items-center">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-[#F6C915]" />
                          ))}
                        </div>
                        <span className="text-[9.5px] font-black text-[#071245] ml-0.5">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Headline if available */}
                  {item.headline && (
                    <h5 className="text-[12px] font-black text-[#071245] leading-snug mb-1.5">
                      &ldquo;{item.headline}&rdquo;
                    </h5>
                  )}

                  {/* Quote Body */}
                  <div className="relative">
                    <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal mb-3 line-clamp-4">
                      {item.quote}
                    </p>
                  </div>

                  {/* Highlight Chip if available */}
                  {item.highlightChip && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50/80 border border-amber-200/60 text-[9.5px] font-bold text-[#8A5600] mb-3">
                      <Award className="w-3 h-3 text-[#B87503]" />
                      <span>{item.highlightChip}</span>
                    </div>
                  )}

                  {/* Card Footer: Badge & Like Interaction */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="text-[9.5px] font-bold text-slate-500 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{item.badge}</span>
                    </span>

                    {/* Interactive Like Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleLike(item.id, e)}
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full transition-all border ${
                        liked
                          ? "bg-rose-50 text-rose-600 border-rose-200 font-bold scale-105"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
                      />
                      <span>{item.likes + (liked ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              );
            })}

          </div>

          {/* 4. CLEAN FOOTER BAR */}
          <div className="px-4 py-2 bg-white border-t border-slate-200/90 shrink-0 flex items-center justify-between text-[10px] text-slate-500">
            <span className="font-bold text-[#071245] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Student Feedback
            </span>
            <span className="font-bold text-[#B87503]">CSNN Toronto</span>
          </div>

          {/* 5. IOS HOME INDICATOR BAR */}
          <div className="pt-1 pb-2 bg-white flex justify-center shrink-0">
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
