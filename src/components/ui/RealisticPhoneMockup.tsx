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
  ArrowRight,
} from "lucide-react";
import {
  ALL_TESTIMONIALS,
  DIPLOMA_TESTIMONIALS,
  HELC_TESTIMONIALS,
  TestimonialItem,
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
    ALL_TESTIMONIALS.find((item) => item.id === selectedId) || DIPLOMA_TESTIMONIALS[0];

  // Active category list
  const activeList: TestimonialItem[] =
    current.category === "diploma" ? DIPLOMA_TESTIMONIALS : HELC_TESTIMONIALS;

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
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px] select-none pt-0 pb-3">
      
      {/* 1. Realistic Ambient Device Ground Shadow (Simulates physical phone on desk) */}
      <div className="absolute inset-x-6 -bottom-3 h-12 bg-slate-950/45 rounded-[100%] blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#071245]/25 via-[#F6C915]/15 to-[#071245]/20 rounded-[64px] blur-2xl pointer-events-none" />

      {/* 2. Physical Exterior Hardware Buttons (Machined Titanium) */}
      {/* Left Edge: Action Button */}
      <div className="absolute -left-[3.5px] top-[115px] w-[4px] h-[26px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
      {/* Left Edge: Volume Up */}
      <div className="absolute -left-[3.5px] top-[155px] w-[4px] h-[52px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
      {/* Left Edge: Volume Down */}
      <div className="absolute -left-[3.5px] top-[220px] w-[4px] h-[52px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
      {/* Right Edge: Power / Lock Button */}
      <div className="absolute -right-[3.5px] top-[175px] w-[4px] h-[76px] bg-gradient-to-l from-[#181B24] to-[#4A5266] rounded-r-xs border-r border-t border-b border-white/30 shadow-md z-0" />

      {/* 3. Outer Titanium Chassis Band with Specular Chamfer Highlight */}
      <div className="relative rounded-[54px] p-[10px] bg-gradient-to-b from-[#3D4556] via-[#1E2330] to-[#0D101A] shadow-[0_32px_85px_rgba(4,10,32,0.48),0_12px_28px_rgba(0,0,0,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.65),inset_0_-1.5px_2px_rgba(0,0,0,0.9)] border border-slate-600/60 z-10">
        
        {/* Antenna Band Subtle Micro-Cuts */}
        <div className="absolute top-[80px] -left-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
        <div className="absolute bottom-[80px] -left-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
        <div className="absolute top-[80px] -right-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
        <div className="absolute bottom-[80px] -right-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />

        {/* Inner Titanium Dark Bezel Ring */}
        <div className="rounded-[46px] p-[3px] bg-gradient-to-b from-[#181C26] via-[#0B0E14] to-[#181C26] shadow-inner">
          
          {/* OLED Display Container (Bezel) */}
          <div className="relative rounded-[43px] overflow-hidden bg-slate-100 flex flex-col h-[610px] shadow-[inset_0_0_10px_rgba(0,0,0,0.85)] border-[3px] border-black">
            
            {/* Screen Glass Photorealistic Diagonal Sheen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-40 rounded-[40px]" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/[0.08] to-transparent pointer-events-none z-40" />

            {/* ==============================================================
                TOP STATUS BAR & APPLE DYNAMIC ISLAND (Clean & Minimal)
                ============================================================== */}
            <div className="bg-[#071245] px-6 pt-3 pb-2.5 flex items-center justify-between text-white shrink-0 relative z-30 shadow-xs">
              
              {/* Authentic iOS Time */}
              <span className="text-[12.5px] font-bold tracking-tight pl-1 font-mono">9:41</span>
              
              {/* Precision Apple Dynamic Island */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[105px] h-[26px] rounded-full bg-black flex items-center justify-between px-3 shadow-[0_2px_8px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                {/* Camera Lens with Multi-Coating Optical Reflection */}
                <div className="relative w-3 h-3 rounded-full bg-[#05070D] ring-1 ring-[#161F33] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] blur-[0.2px]" />
                  <span className="absolute top-0.5 left-0.5 w-0.5 h-0.5 rounded-full bg-white/70" />
                </div>
                
                {/* FaceID / Ambient Sensor Dot */}
                <span className="w-2 h-2 rounded-full bg-[#111624] border border-white/10" />
              </div>

              {/* Status Bar Icons: Cellular Bars + 5G + Wi-Fi + Real Battery Capsule */}
              <div className="flex items-center gap-2 text-white/95 pr-1">
                {/* 4 Cellular Signal Bars */}
                <div className="flex items-end gap-0.5 h-2.5">
                  <span className="w-[2.5px] h-1 bg-white rounded-2xs" />
                  <span className="w-[2.5px] h-1.5 bg-white rounded-2xs" />
                  <span className="w-[2.5px] h-2 bg-white rounded-2xs" />
                  <span className="w-[2.5px] h-2.5 bg-white rounded-2xs" />
                </div>
                <span className="text-[10px] font-black tracking-tighter">5G</span>
                <Wifi className="w-3 h-3 text-white" />
                {/* iOS Battery Capsule */}
                <div className="flex items-center">
                  <div className="w-[22px] h-[11px] rounded-[3.5px] border border-white/80 p-[1.5px] flex items-center">
                    <div className="w-full h-full bg-emerald-400 rounded-[2px]" />
                  </div>
                  <div className="w-[1.5px] h-[4px] bg-white/70 rounded-r-xs" />
                </div>
              </div>
            </div>

            {/* ==============================================================
                NATIVE APP NAVIGATION BAR
                ============================================================== */}
            <div className="bg-[#071245] px-4 pb-3 pt-1 text-white flex items-center justify-between border-b border-white/10 shrink-0 relative z-20">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#F6C915]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F6C915]" />
                  <span className="tracking-wide uppercase">CSNN Toronto Alumni</span>
                </div>
                <h4 className="text-xs font-black tracking-tight text-white leading-tight">
                  Authentic Student Feed
                </h4>
              </div>

              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15 shadow-2xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-black text-[#F6C915] px-1 font-mono">
                  {activeIndex + 1}/{activeList.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ==============================================================
                REVIEW CARDS FEED (Clean, Simple & Attractive)
                ============================================================== */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 relative z-10">
              
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5 text-[10.5px] font-black text-[#071245]">
                  <Sparkles className="w-3 h-3 text-[#B87503]" />
                  <span>Verified Graduate Reviews</span>
                </div>
                <span className="text-[9px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-full">
                  Tap card to view
                </span>
              </div>

              {activeList.map((item: TestimonialItem) => {
                const isSelected = item.id === current.id;
                const liked = likedList[item.id];

                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectTestimonial(item.id)}
                    className={`rounded-2xl p-3.5 transition-all cursor-pointer relative text-left border ${
                      isSelected
                        ? "bg-white border-[#071245] shadow-[0_8px_20px_rgba(7,18,69,0.12)] ring-2 ring-[#071245]/20 scale-[1.01]"
                        : "bg-white/95 border-slate-200 shadow-2xs hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    {/* Top Row: Student Profile Avatar, Name, Role & 5 Stars */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#071245] text-white flex items-center justify-center shrink-0 border border-slate-700 shadow-xs relative">
                          <User className="w-4 h-4 text-white" />
                          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white flex items-center justify-center">
                            <CheckCircle2 className="w-2 h-2 text-white stroke-[3]" />
                          </span>
                        </div>
                        <div>
                          <h5 className="text-[12px] font-black text-[#071245] leading-tight">
                            {item.name}
                          </h5>
                          <p className="text-[9.5px] font-bold text-[#B87503] leading-tight mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* 5 Shiny Gold Stars */}
                      <div className="flex items-center text-[#F6C915] shrink-0 pt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-[#F6C915]" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-[11px] text-slate-700 font-medium leading-relaxed italic line-clamp-3">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Bottom Row: Program Pill Badge & Helpful Heart Like */}
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md truncate max-w-[200px]">
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{item.program}</span>
                      </span>

                      <button
                        type="button"
                        onClick={(e) => handleLike(item.id, e)}
                        className="inline-flex items-center gap-1 text-[9.5px] font-bold text-slate-500 hover:text-red-500 transition-colors cursor-pointer pl-2 shrink-0 group/like"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform group-hover/like:scale-110 ${
                            liked
                              ? "text-red-500 fill-red-500 animate-heart-pop"
                              : "text-slate-400"
                          }`}
                        />
                        <span>{liked ? "Liked!" : "Helpful"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ==============================================================
                BOTTOM ACTION DOCK & FLOATING IOS HOME INDICATOR
                ============================================================== */}
            <div className="bg-white/95 backdrop-blur-md px-3 pt-2.5 pb-2 border-t border-slate-200/90 shrink-0 text-center relative z-20">
              <a
                href="#register"
                className="btn-skeuo-gold w-full h-9 rounded-xl text-xs font-black text-[#071245] flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-98 transition-transform"
              >
                <span>Reserve Your Seat Today</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3] text-[#071245]" />
              </a>

              {/* Iconic Floating iOS Home Indicator Pill */}
              <div className="w-32 h-1 bg-slate-900/40 rounded-full mx-auto mt-2.5 mb-0.5 pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
