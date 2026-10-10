"use client";

import React, { useState } from "react";
import {
  Star,
  CheckCircle2,
  Heart,
  MessageCircle,
  Share2,
  Wifi,
  Battery,
  Sparkles,
  Play,
  Volume2,
  ShieldCheck,
  Award,
} from "lucide-react";
import { TestimonialItem, ALL_TESTIMONIALS } from "@/data/testimonialData";

interface RealisticPhoneMockupProps {
  selectedId: string;
  onSelectTestimonial: (id: string) => void;
}

export function RealisticPhoneMockup({
  selectedId,
  onSelectTestimonial,
}: RealisticPhoneMockupProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "helc" | "graduate" | "quick">("all");
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredList = ALL_TESTIMONIALS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none py-2">
      {/* Ambient Phone Shadow & Backlight Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#13277A]/20 via-[#F6C915]/15 to-[#071245]/20 rounded-[58px] blur-2xl pointer-events-none" />

      {/* Realistic Titanium Hardware Chassis */}
      <div className="relative rounded-[50px] p-[10px] sm:p-3 bg-gradient-to-b from-[#2F3136] via-[#1E2024] to-[#121316] shadow-[0_25px_60px_-15px_rgba(19,39,122,0.45),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.3)] border-2 border-[#45474E]/60">
        
        {/* Left Side Volume / Mute Buttons */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-[#3A3C42] rounded-l-md" />
        <div className="absolute -left-[5px] top-36 w-[3px] h-11 bg-[#3A3C42] rounded-l-md" />
        <div className="absolute -left-[5px] top-50 w-[3px] h-11 bg-[#3A3C42] rounded-l-md" />
        
        {/* Right Side Power Button */}
        <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-[#3A3C42] rounded-r-md" />

        {/* Inner Screen Bezel */}
        <div className="relative rounded-[40px] bg-[#0A1024] overflow-hidden flex flex-col h-[600px] sm:h-[640px] border border-white/10 shadow-inner">
          
          {/* Top Notch / Dynamic Island */}
          <div className="pt-2 px-6 flex items-center justify-between z-20 shrink-0 text-white/90">
            {/* Status Bar Clock */}
            <span className="text-[11px] font-bold tracking-tight">9:41</span>
            
            {/* Dynamic Island Capsule */}
            <div className="w-24 h-[18px] bg-black rounded-full flex items-center justify-between px-2 shadow-xs border border-white/5">
              <div className="w-2 h-2 rounded-full bg-[#13277A]/60" />
              <div className="w-2 h-2 rounded-full bg-[#F6C915]/80 animate-pulse" />
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-[9px] font-extrabold tracking-tighter">5G</span>
              <Wifi className="w-3 h-3 text-white/90" />
              <div className="w-4 h-2.5 border border-white/90 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-[#10B981] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header: CSNN Toronto Live Community */}
          <div className="px-3.5 pt-2.5 pb-2 border-b border-white/10 bg-[#071245]/90 backdrop-blur-md shrink-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F6C915] text-[#071245] font-black text-xs flex items-center justify-center shadow-xs">
                  CS
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-white leading-tight">
                      CSNN Toronto
                    </span>
                    <ShieldCheck className="w-3 h-3 text-[#F6C915]" />
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Student Reviews · 100% Verified</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge Tag */}
              <div className="px-2 py-0.5 rounded-full bg-[#F6C915]/15 border border-[#F6C915]/30 text-[#F6C915] text-[9.5px] font-black">
                HELC &amp; Alumni
              </div>
            </div>

            {/* Mobile In-App Filter Pills */}
            <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pb-0.5">
              {[
                { id: "all", label: "✨ All Reviews" },
                { id: "helc", label: "🌿 HELC Workshop" },
                { id: "graduate", label: "🎓 Graduates" },
                { id: "quick", label: "💬 Fast Notes" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${
                    activeFilter === tab.id
                      ? "bg-[#F6C915] text-[#071245] shadow-xs font-black"
                      : "bg-white/10 text-white/70 hover:bg-white/15"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Scrollable Feed */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scroll-smooth">
            
            {/* Live Online Pinned Spotlight Bubble */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#13277A] to-[#1E3A8A] border border-[#F6C915]/30 shadow-md text-white">
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-[#F6C915]">
                  <Sparkles className="w-3 h-3" />
                  Live Online Interactive
                </span>
                <span className="text-[9px] text-white/60">Toronto, ON</span>
              </div>
              <p className="text-[11px] text-white/95 leading-relaxed font-medium">
                &ldquo;Even with young toddlers at home, I was able to balance my schedule... I never felt so closely connected to people online.&rdquo;
              </p>
              <div className="mt-1.5 flex items-center justify-between text-[9.5px] text-white/70">
                <span className="font-bold text-[#F6C915]">— Ciara M., R.H.N.</span>
                <span>⭐ 5.0 Rating</span>
              </div>
            </div>

            {/* Testimonials List Cards */}
            {filteredList.map((item) => {
              const isSelected = selectedId === item.id;
              const isLiked = likedIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectTestimonial(item.id)}
                  className={`p-3 rounded-2xl transition-all cursor-pointer border text-left ${
                    isSelected
                      ? "bg-white/15 border-[#F6C915] shadow-lg scale-[1.01]"
                      : "bg-white/7 hover:bg-white/10 border-white/10"
                  }`}
                >
                  {/* Top Row: Avatar + Info */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full ${item.avatarBg} text-white text-[10px] font-black flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        {item.avatarText}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[11.5px] font-black text-white leading-tight">
                            {item.name}
                          </span>
                          <CheckCircle2 className="w-3 h-3 text-[#F6C915] shrink-0" />
                        </div>
                        <span className="text-[9px] text-white/60 leading-tight">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center text-[#F6C915] shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[#F6C915]" />
                      ))}
                    </div>
                  </div>

                  {/* Program Tag / Headline */}
                  {item.headline && (
                    <p className="text-[11px] font-bold text-[#F6C915] mb-1 leading-snug">
                      {item.headline}
                    </p>
                  )}

                  {/* Testimonial Quote */}
                  <p className="text-[11px] text-white/85 leading-relaxed line-clamp-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Highlights Pill if available */}
                  {item.highlightChip && (
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#13277A]/80 border border-[#F6C915]/20 text-[9px] font-bold text-[#FCD34D]">
                      <Award className="w-2.5 h-2.5 text-[#F6C915]" />
                      <span>{item.highlightChip}</span>
                    </div>
                  )}

                  {/* Interaction Footer Bar */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                    <span className="text-[9px]">{item.timeAgo}</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`inline-flex items-center gap-1 transition-colors ${
                          isLiked ? "text-rose-400 font-bold" : "hover:text-white"
                        }`}
                      >
                        <Heart
                          className={`w-3 h-3 ${isLiked ? "fill-rose-400" : ""}`}
                        />
                        <span>{item.likes + (isLiked ? 1 : 0)}</span>
                      </button>
                      <span className="hover:text-white inline-flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>Reply</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Audio Voice-Note Mockup Strip */}
            <div className="p-3 rounded-2xl bg-[#13277A]/70 border border-[#F6C915]/30 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-[#F6C915]">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Student Audio Reflections</span>
                </div>
                <span className="text-[9px] text-white/50">CSNN Faculty Q&amp;A</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 p-2 rounded-xl">
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-[#F6C915] text-[#071245] flex items-center justify-center shrink-0 shadow-xs"
                >
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </button>
                {/* Waveform bars */}
                <div className="flex-1 flex items-center gap-0.5 h-4">
                  {[4, 8, 12, 6, 14, 16, 8, 12, 10, 15, 7, 13, 11, 6, 9, 14, 8].map(
                    (h, idx) => (
                      <span
                        key={idx}
                        className="w-1 bg-[#F6C915]/70 rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>
                <span className="text-[9px] font-bold text-white/70">0:45</span>
              </div>
            </div>

          </div>

          {/* Bottom App Navigation Bar */}
          <div className="px-4 py-2 border-t border-white/10 bg-[#071245]/95 shrink-0 flex items-center justify-around text-white/60 text-[10px] font-bold">
            <span className="text-[#F6C915] flex flex-col items-center">
              <span>Reviews</span>
              <span className="w-1 h-1 bg-[#F6C915] rounded-full mt-0.5" />
            </span>
            <span className="hover:text-white">HELC (10)</span>
            <span className="hover:text-white">Faculty</span>
            <span className="hover:text-white">Alumni</span>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="pt-1 pb-2 bg-[#071245] flex justify-center shrink-0">
            <div className="w-28 h-1 bg-white/40 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
