"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLockupProps {
  variant?: "header" | "footer";
  className?: string;
}

export function BrandLockup({ variant = "header", className = "" }: BrandLockupProps) {
  if (variant === "footer") {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4">
          {/* Authentic CSNN Toronto Seal */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 sm:p-1.5 border-2 border-[#F6C915] shadow-lg shrink-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/graphics/logo.png"
                alt="CSNN Toronto Seal"
                fill
                sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Golden Vertical Divider Bar */}
          <div className="w-[1.5px] sm:w-[2px] h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-[#F6C915]/20 via-[#F6C915] to-[#F6C915]/20 shrink-0 rounded-full" />

          {/* Typography Lockup: Octobloom with powered by CSNN Toronto */}
          <div className="flex flex-col justify-center leading-none select-none">
            <span className="text-lg sm:text-xl lg:text-[22px] font-black text-white tracking-wider leading-tight">
              OCTOBLOOM
            </span>
            <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#F6C915] lowercase leading-tight">
                powered by
              </span>
              <span className="text-xs sm:text-sm font-black text-sky-200 tracking-wide uppercase leading-tight">
                CSNN Toronto
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[10.5px] text-white/60 font-medium leading-tight mt-0.5 sm:mt-1">
              Canadian School of Natural Nutrition · Est. 1994
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Header (Clean, mobile-responsive, no star logo, no "live" text, perfectly proportioned logo badge)
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 sm:gap-3.5 lg:gap-4 focus:outline-none shrink-0 py-0.5 select-none ${className}`}
      aria-label="Octobloom - powered by CSNN Toronto"
    >
      {/* Official CSNN Toronto Logo Badge (Perfect Dimensions) */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 sm:p-1.5 border border-slate-200/90 shadow-2xs group-hover:scale-105 group-hover:border-[#F6C915] transition-all duration-300 shrink-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/graphics/logo.png"
            alt="CSNN Toronto - Canadian School of Natural Nutrition"
            fill
            sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Golden Vertical Divider Bar */}
      <div className="w-[1.5px] sm:w-[2px] h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-[#F6C915]/20 via-[#F6C915] to-[#F6C915]/20 shrink-0 rounded-full" />

      {/* Clean Typography: OCTOBLOOM + simple powered by CSNN Toronto below */}
      <div className="flex flex-col justify-center leading-none select-none">
        {/* Brand Name */}
        <span className="text-base sm:text-lg lg:text-[22px] font-black tracking-wider text-[#071245] group-hover:text-[#0B1A5A] transition-colors leading-tight">
          OCTOBLOOM
        </span>

        {/* Simple "powered by CSNN Toronto" placed cleanly down below */}
        <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
          <span className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-[#DEAB07] lowercase leading-tight">
            powered by
          </span>
          <span className="text-[11px] sm:text-xs lg:text-[13.5px] font-black text-[#071245] uppercase tracking-wide leading-tight">
            CSNN Toronto
          </span>
        </div>

        {/* Subtitle */}
        <span className="hidden sm:block text-[9px] lg:text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5 sm:mt-1">
          Canadian School of Natural Nutrition
        </span>
      </div>
    </Link>
  );
}
