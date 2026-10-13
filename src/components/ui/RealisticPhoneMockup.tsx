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
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[365px] select-none py-2">
      {/* Ambient Lighting Behind Chassis */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#071245]/20 via-[#F6C915]/15 to-[#071245]/15 rounded-[58px] blur-2xl pointer-events-none" />

      {/* Titanium Hardware Chassis */}
      <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#2E3344] via-[#1A1F2C] to-[#0D101A] shadow-[0_30px_70px_rgba(7,18,69,0.25),0_10px_25px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] border border-slate-700/60">
        
        {/* Screen Bezel */}
        <div className="relative rounded-[42px] overflow-hidden bg-slate-50 border-4 border-black flex flex-col h-[580px] shadow-inner">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="bg-[#071245] px-6 pt-3 pb-2 flex items-center justify-between text-white shrink-0 z-30">
            <span className="text-[12px] font-black tracking-tight">9:41</span>
            
            {/* Dynamic Island Capsule */}
            <div className="w-24 h-5 rounded-full bg-black flex items-center justify-center gap-2 px-2 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1A1F2C] border border-white/10" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            </div>

            <div className="flex items-center gap-1.5 text-white/90">
              <Wifi className="w-3.5 h-3.5" />
              <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
                <div className="w-full h-full bg-[#F6C915] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-[#071245] px-4 pb-3.5 pt-1 text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#F6C915]">
                <ShieldCheck className="w-3 h-3 text-[#F6C915]" />
                <span>CSNN Toronto Voices</span>
              </div>
              <h4 className="text-xs font-black tracking-tight text-white leading-tight">
                Authentic Student Feed
              </h4>
            </div>

            <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
                className="text-white/80 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-black text-[#F6C915] px-1">
                {activeIndex + 1}/{activeList.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next"
                className="text-white/80 hover:text-white transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Review Cards Feed */}
          <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 relative">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-[#071245]">
                <Sparkles className="w-3 h-3 text-[#B87503]" />
                <span>Verified Reviews</span>
              </div>
              <span className="text-[9px] font-bold text-slate-500">
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
                  className={`rounded-xl p-3 transition-all cursor-pointer relative text-left border ${
                    isSelected
                      ? "bg-white border-[#071245] shadow-md ring-2 ring-[#071245]/15"
                      : "bg-white/90 border-slate-200 shadow-2xs hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 border border-slate-700 shadow-xs">
                        <User className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-black text-[#071245] leading-tight flex items-center gap-1">
                          <span>{item.name}</span>
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 inline" />
                        </div>
                        <div className="text-[9px] font-bold text-[#B87503] leading-tight">
                          {item.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-[#F6C915]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[#F6C915]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-700 font-medium leading-relaxed italic line-clamp-3">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100">
                    <span className="text-[9px] font-bold text-slate-500">
                      {item.program}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleLike(item.id, e)}
                      className="flex items-center gap-1 text-[9.5px] font-bold text-slate-500 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          liked ? "text-red-500 fill-red-500" : "text-slate-400"
                        }`}
                      />
                      <span>Helpful</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Dock */}
          <div className="bg-white p-2.5 border-t border-slate-200 shrink-0 text-center">
            <a
              href="#register"
              className="btn-skeuo-gold w-full py-2 rounded-xl text-xs font-black text-[#071245] flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Reserve Your Seat</span>
              <Award className="w-3.5 h-3.5 text-[#071245]" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
