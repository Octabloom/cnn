"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Phone, Sparkles, X } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function StickyRegistrationBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show after scrolling past hero
      // Hide near footer / final registration form
      const isPastHero = scrollY > 350;
      const isNearFooter = scrollY + windowHeight > docHeight - 700;

      setIsVisible(isPastHero && !isNearFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDismissed(true);
    }, 400);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Floating registration dock"
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-5xl select-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isClosing
          ? "opacity-0 translate-y-16 scale-90 pointer-events-none"
          : "opacity-100 translate-y-0 scale-100 animate-in slide-in-from-bottom-8 duration-500"
      }`}
    >
      {/* Outer Floating Skeuomorphic Capsule */}
      <div className="relative rounded-full bg-gradient-to-r from-[#061036]/98 via-[#0D226B]/98 to-[#061036]/98 backdrop-blur-2xl px-3.5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#F6C915] shadow-[0_15px_45px_rgba(4,10,36,0.65),0_0_30px_rgba(246,201,21,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] flex items-center justify-between gap-2 sm:gap-3 group">
        
        {/* Continuous Top Specular Light Beam */}
        <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFE875] to-transparent pointer-events-none opacity-90" />

        {/* Floating Cross Button Just Above in the Right Corner */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close floating registration bar"
          className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-2.5 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#071245] hover:bg-[#0E257E] text-white flex items-center justify-center border-2 border-[#F6C915] shadow-[0_4px_14px_rgba(0,0,0,0.5),0_0_10px_rgba(246,201,21,0.4)] hover:scale-115 active:scale-90 transition-all cursor-pointer group/close"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] text-[#F6C915] group-hover/close:rotate-90 transition-transform duration-250" />
        </button>

        {/* Left Section: Live Intake Badge & Program Title */}
        <div className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm overflow-hidden">
          {/* Animated Starts Oct 28 Radar Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-b from-[#1C3A9E] to-[#0A1856] text-[#F6C915] font-black text-xs border border-[#F6C915]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.3)] whitespace-nowrap shrink-0">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C915] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#FFE676] shadow-[0_0_8px_#F6C915]" />
            </span>
            <Calendar className="w-3.5 h-3.5 text-[#F6C915]" />
            <span className="tracking-tight font-black">Starts Oct 28</span>
          </div>

          <span className="hidden md:inline text-white/30 font-bold">•</span>

          {/* Program Title with Gold Highlight */}
          <div className="hidden md:flex items-center gap-1.5 truncate">
            <span className="font-black text-white/95 tracking-tight text-xs sm:text-sm">
              Healthy Eating &amp; Lifestyle Certificate
            </span>
          </div>

          {/* 4 CECs Embossed Shiny Gold Badge */}
          <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#F6C915]/25 to-[#F6C915]/15 text-[#FFE875] text-[11px] font-black border border-[#F6C915]/50 whitespace-nowrap shadow-inner">
            <Sparkles className="w-3 h-3 text-[#F6C915] animate-pulse" />
            <span>4 CECs</span>
          </span>
        </div>

        {/* Right Section: Interactive Phone Link & 3D Gold CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto pr-1 sm:pr-2">
          {/* Phone Dial with Ringing Animation on Hover */}
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            aria-label={`Call CSNN Toronto at ${PROGRAM_INFO.phone}`}
            className="hidden xs:flex items-center gap-1.5 sm:gap-2 text-xs font-black text-white/90 hover:text-[#F6C915] transition-all px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#F6C915]/70 whitespace-nowrap shadow-xs group/phone"
          >
            <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-b from-[#1C3A9E] to-[#0A1856] flex items-center justify-center border border-[#F6C915]/50 group-hover/phone:rotate-12 group-hover/phone:scale-110 transition-transform">
              <Phone className="w-3 h-3 text-[#F6C915]" />
            </div>
            <span className="hidden sm:inline font-bold tracking-tight">{PROGRAM_INFO.phone}</span>
          </a>

          {/* High-Impact 3D Tactile Animated Gold Reserve Button */}
          <a
            href="#register"
            className="btn-skeuo-gold animate-shimmer inline-flex items-center gap-1.5 sm:gap-2 h-8.5 sm:h-9.5 px-3.5 sm:px-5 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-[0_6px_25px_rgba(246,201,21,0.6),inset_0_1px_0_#FFF,inset_0_-2px_0_rgba(168,120,15,0.7)] whitespace-nowrap hover:scale-105 active:scale-95 transition-all group/btn"
          >
            <span>Reserve your seat</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}
