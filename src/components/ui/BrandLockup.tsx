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
        <div className="flex items-center gap-3 sm:gap-3.5">
          {/* Authentic CSNN Toronto Seal (No Star Logo) */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-lg shrink-0">
            <Image
              src="/graphics/logo.jpg"
              alt="CSNN Toronto Seal"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>

          {/* Golden Vertical Divider Bar */}
          <div className="w-[1.5px] h-10 sm:h-12 bg-gradient-to-b from-[#F6C915]/30 via-[#F6C915] to-[#F6C915]/30 shrink-0 rounded-full" />

          {/* Typography Lockup: Octobloom with simple powered by CSNN Toronto down below */}
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-lg sm:text-xl font-black text-white tracking-wider">
              OCTOBLOOM
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-medium text-white/70">
                powered by
              </span>
              <span className="text-xs sm:text-sm font-black text-[#F6C915] tracking-wide">
                CSNN Toronto
              </span>
            </div>
            <span className="text-[10px] text-white/50 font-medium mt-0.5">
              Canadian School of Natural Nutrition · Est. 1994
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Header (Clean, mobile-responsive, no star logo, no "live" text, simple powered by down the CSNN)
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none shrink-0 py-0.5 select-none ${className}`}
      aria-label="Octobloom - powered by CSNN Toronto"
    >
      {/* Official CSNN Toronto Logo Only (Star logo deleted) */}
      <div className="relative w-11 h-11 sm:w-13 sm:h-13 lg:w-15 lg:h-15 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-0.5 sm:p-1 border border-slate-200/90 shadow-2xs group-hover:scale-105 group-hover:border-[#F6C915] transition-all duration-300 shrink-0">
        <Image
          src="/graphics/logo.jpg"
          alt="CSNN Toronto - Canadian School of Natural Nutrition"
          fill
          sizes="(max-width: 640px) 44px, (max-width: 1024px) 52px, 60px"
          className="object-contain"
          priority
        />
      </div>

      {/* Golden Vertical Divider Bar */}
      <div className="w-[1.5px] sm:w-[2px] h-9 sm:h-11 lg:h-13 bg-gradient-to-b from-transparent via-[#F6C915] to-transparent shrink-0 rounded-full" />

      {/* Clean Typography: OCTOBLOOM + simple powered by CSNN Toronto below (no "live" text) */}
      <div className="flex flex-col justify-center leading-none">
        {/* Brand Name */}
        <span className="text-base sm:text-lg lg:text-[22px] font-black tracking-wider text-[#071245] group-hover:text-[#0B1A5A] transition-colors leading-tight">
          OCTOBLOOM
        </span>

        {/* Simple "powered by CSNN Toronto" placed cleanly down below */}
        <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
          <span className="text-[9.5px] sm:text-[11px] lg:text-xs font-semibold text-slate-500 lowercase leading-tight">
            powered by
          </span>
          <span className="text-[10.5px] sm:text-xs lg:text-[13px] font-black text-[#B87503] uppercase tracking-wide leading-tight">
            CSNN Toronto
          </span>
        </div>

        {/* Subtitle (No "live" text) */}
        <span className="hidden sm:block text-[8.5px] lg:text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
          Canadian School of Natural Nutrition
        </span>
      </div>
    </Link>
  );
}
