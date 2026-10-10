"use client";

import React, { useState } from "react";
import {
  Star,
  CheckCircle2,
  Heart,
  Wifi,
  ChevronLeft,
  Phone,
  Video,
  Play,
  Pause,
  Mic,
  Send,
  Plus,
  ShieldCheck,
  Sparkles,
  Award,
  Volume2,
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  // Find active testimonial
  const current =
    ALL_TESTIMONIALS.find((item) => item.id === selectedId) || ALL_TESTIMONIALS[0];

  const currentIndex = ALL_TESTIMONIALS.findIndex((item) => item.id === current.id);
  const nextItem = ALL_TESTIMONIALS[(currentIndex + 1) % ALL_TESTIMONIALS.length];

  const isLiked = likedList[current.id];

  const handleLike = () => {
    setLikedList((prev) => ({ ...prev, [current.id]: !prev[current.id] }));
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
  };

  const handleToggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none py-2">
      {/* Ambient Lighting Behind Chassis */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#13277A]/25 via-[#F6C915]/20 to-[#071245]/25 rounded-[58px] blur-2xl pointer-events-none" />

      {/* Titanium Hardware Chassis with Real Bezel & Glass Reflection */}
      <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#33353A] via-[#1E2024] to-[#121316] shadow-[0_25px_60px_-15px_rgba(19,39,122,0.45),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)] border-2 border-[#45474E]/70">
        
        {/* Left Side Hardware Buttons (Mute / Volume) */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-7 bg-[#3A3C42] rounded-l-md" />
        <div className="absolute -left-[5px] top-35 w-[3px] h-11 bg-[#3A3C42] rounded-l-md" />
        <div className="absolute -left-[5px] top-49 w-[3px] h-11 bg-[#3A3C42] rounded-l-md" />
        
        {/* Right Side Power Button */}
        <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-[#3A3C42] rounded-r-md" />

        {/* Inner Phone Screen (Sleek Apple iOS Style) */}
        <div className="relative rounded-[40px] bg-[#0F172A] overflow-hidden flex flex-col h-[600px] sm:h-[630px] border border-white/10 shadow-inner text-white">
          
          {/* 1. REALISTIC IOS STATUS BAR */}
          <div className="pt-2 px-6 flex items-center justify-between z-30 shrink-0 text-white/90">
            {/* Clock */}
            <span className="text-[12px] font-bold tracking-tight">9:41</span>
            
            {/* Dynamic Island Capsule */}
            <div className="w-26 h-[20px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm border border-white/5 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-[#13277A]/80 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-400" />
              </div>
              {isPlayingAudio ? (
                <div className="flex items-center gap-0.5">
                  <span className="w-0.5 h-2 bg-[#F6C915] rounded-full animate-audio-bar-1" />
                  <span className="w-0.5 h-2.5 bg-[#F6C915] rounded-full animate-audio-bar-2" />
                  <span className="w-0.5 h-1.5 bg-[#F6C915] rounded-full animate-audio-bar-3" />
                </div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-[#F6C915]/80 animate-pulse" />
              )}
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-[9px] font-extrabold tracking-tighter">5G</span>
              <Wifi className="w-3 h-3 text-white/90" />
              {/* Battery Indicator */}
              <div className="w-4.5 h-2.5 border border-white/90 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-[#10B981] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* 2. REAL MESSAGES APP HEADER (Clean & Minimalist) */}
          <div className="px-3.5 pt-2 pb-2.5 border-b border-white/10 bg-[#1E293B]/80 backdrop-blur-md shrink-0 z-20 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onSelectTestimonial(ALL_TESTIMONIALS[(currentIndex - 1 + ALL_TESTIMONIALS.length) % ALL_TESTIMONIALS.length].id)}
              className="flex items-center gap-0.5 text-blue-400 text-xs font-bold hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* Student Community Chat Avatar & Status */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white tracking-tight">
                  CSNN Student Chat
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#F6C915]" />
              </div>
              <div className="flex items-center gap-1 text-[9.5px] text-emerald-400 font-bold leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Active Cohort · 100% Verified</span>
              </div>
            </div>

            {/* Header Action Icons */}
            <div className="flex items-center gap-2.5 text-blue-400">
              <Video className="w-4 h-4" />
              <Phone className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3. CLEAN MESSAGING FEED AREA */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 relative">
            
            {/* Date Separator Pill */}
            <div className="flex justify-center">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9.5px] font-bold text-white/60">
                Today · Live Online Intake
              </span>
            </div>

            {/* Compact Welcome Bubble */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F6C915] text-[#071245] font-black text-[9px] flex items-center justify-center shrink-0">
                CS
              </div>
              <div className="p-2.5 rounded-2xl rounded-tl-xs bg-white/10 border border-white/10 text-[11px] text-white/90 leading-snug max-w-[85%]">
                <span className="text-[#F6C915] font-black text-[10px] block mb-0.5">CSNN Toronto Faculty:</span>
                Welcome to the Healthy Eating &amp; Lifestyle Certificate discussion! Here are verified student reflections.
              </div>
            </div>

            {/* ACTIVE TESTIMONIAL SPEECH BUBBLE (Hero Message in the Chat) */}
            <div className="flex items-start gap-2 pt-1 transition-all">
              <div
                className={`w-7 h-7 rounded-full ${current.avatarBg} text-white font-black text-[10px] flex items-center justify-center shrink-0 shadow-sm border border-white/20`}
              >
                {current.avatarText}
              </div>

              <div className="flex-1 relative">
                {/* Heart Burst Particle Animation */}
                {showHeartBurst && (
                  <div className="absolute -top-3 right-4 z-40 pointer-events-none animate-heart-pop text-rose-500 font-black text-lg">
                    ❤️
                  </div>
                )}

                {/* Main Speech Bubble */}
                <div className="rounded-2xl rounded-tl-xs bg-[#1E293B] border border-white/15 p-3.5 shadow-lg text-left relative">
                  
                  {/* Bubble Header: Name + Stars */}
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-white leading-tight">
                        {current.name}
                      </span>
                      <CheckCircle2 className="w-3 h-3 text-[#F6C915]" />
                    </div>

                    <div className="flex items-center text-[#F6C915]">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[#F6C915]" />
                      ))}
                    </div>
                  </div>

                  {/* Program / Role Subtitle */}
                  <div className="text-[9.5px] text-[#F6C915] font-bold mb-2">
                    {current.role}
                  </div>

                  {/* Headline if present */}
                  {current.headline && (
                    <div className="text-[11.5px] font-black text-white leading-snug mb-1.5">
                      &ldquo;{current.headline}&rdquo;
                    </div>
                  )}

                  {/* The Authentic Quote Text */}
                  <p className="text-[11px] text-white/90 leading-relaxed font-normal">
                    {current.quote}
                  </p>

                  {/* Core Takeaway Pill */}
                  {current.highlightChip && (
                    <div className="mt-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0F172A] border border-[#F6C915]/30 text-[9px] font-bold text-[#FCD34D]">
                      <Award className="w-2.5 h-2.5 text-[#F6C915]" />
                      <span>{current.highlightChip}</span>
                    </div>
                  )}

                  {/* Message Timestamp & Interactive Reaction Bar */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                    <span className="text-[9px]">Delivered · Read ✓✓</span>
                    
                    {/* Interactive Animated Like Button */}
                    <button
                      type="button"
                      onClick={handleLike}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full transition-all border ${
                        isLiked
                          ? "bg-rose-500/20 text-rose-400 border-rose-500/40 font-bold scale-105"
                          : "bg-white/5 hover:bg-white/10 text-white/70 border-white/10"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 transition-transform ${
                          isLiked ? "fill-rose-400 text-rose-400 animate-heart-pop" : ""
                        }`}
                      />
                      <span>{current.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>

                {/* INTERACTIVE VOICE NOTE MEMO (Realistic iMessage Audio Bubble) */}
                <div className="mt-2 p-2.5 rounded-2xl rounded-tl-xs bg-[#1E293B]/80 border border-white/10 flex items-center gap-2.5 text-white">
                  <button
                    type="button"
                    onClick={handleToggleAudio}
                    className="w-7 h-7 rounded-full bg-[#F6C915] text-[#071245] flex items-center justify-center shrink-0 shadow-sm hover:scale-105 transition-transform"
                    aria-label={isPlayingAudio ? "Pause Audio Reflection" : "Play Audio Reflection"}
                  >
                    {isPlayingAudio ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1 flex flex-col justify-center">
                    {/* Pulsing Audio Waveform Bars */}
                    <div className="flex items-center gap-1 h-3.5">
                      {[3, 6, 11, 7, 14, 9, 13, 8, 12, 10, 6, 12, 8, 4, 9, 13, 7].map(
                        (h, idx) => (
                          <span
                            key={idx}
                            className={`w-0.5 rounded-full transition-all ${
                              isPlayingAudio
                                ? "bg-[#F6C915] animate-audio-bar-2"
                                : "bg-white/40"
                            }`}
                            style={{
                              height: `${h}px`,
                              animationDelay: `${idx * 0.08}s`,
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[8.5px] text-white/50 mt-0.5">
                      <span className="font-bold text-[#F6C915]">
                        {isPlayingAudio ? "Playing 0:18" : "0:42"}
                      </span>
                      <span>Verified Audio Note</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Next Student Preview Bubble (Tap to Advance) */}
            <div
              onClick={() => onSelectTestimonial(nextItem.id)}
              className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10.5px] text-white/70 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-[#F6C915] font-black uppercase">Next Student:</span>
                <span className="font-bold text-white">{nextItem.name}</span>
              </div>
              <span className="text-blue-400 font-bold text-[10px]">Tap to read →</span>
            </div>

          </div>

          {/* 4. REALISTIC IMESSAGE INPUT BAR */}
          <div className="px-3 py-2 border-t border-white/10 bg-[#1E293B]/90 backdrop-blur-md shrink-0 flex items-center gap-2">
            <button
              type="button"
              className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>

            <div className="flex-1 bg-white/10 rounded-full px-3 py-1 flex items-center justify-between text-white/40 text-[11px]">
              <span>Message CSNN Students...</span>
              <Mic className="w-3 h-3 text-white/60" />
            </div>

            <button
              type="button"
              onClick={() => onSelectTestimonial(nextItem.id)}
              className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-xs"
            >
              <Send className="w-3 h-3" />
            </button>
          </div>

          {/* 5. IOS HOME INDICATOR BAR */}
          <div className="pt-1 pb-2 bg-[#1E293B] flex justify-center shrink-0">
            <div className="w-28 h-1 bg-white/40 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
