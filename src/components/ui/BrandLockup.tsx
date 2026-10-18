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
      <Link
        href="/"
        className={`flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink-0 py-0.5 select-none ${className}`}
        aria-label="CSNN Toronto - Canadian School of Natural Nutrition"
      >
        {/* Authentic CSNN Toronto Seal */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-lg shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-full">
            <Image
              src="/graphics/logo.jpg"
              alt="CSNN Toronto Seal"
              fill
              sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Golden Vertical Divider Bar */}
        <div className="w-[2px] h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-[#F6C915]/30 via-[#F6C915] to-[#F6C915]/30 shrink-0 rounded-full" />

        {/* Canadian School of Natural Nutrition, Toronto Lockup */}
        <div className="flex flex-col justify-center">
          <span className="text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] font-black uppercase tracking-[0.14em] text-white/90 leading-tight">
            CANADIAN SCHOOL OF
          </span>
          <span className="text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] font-black uppercase tracking-[0.14em] text-white/90 leading-tight">
            NATURAL NUTRITION
          </span>
          <span className="text-xl sm:text-2xl font-black text-white tracking-wider leading-none mt-0.5 group-hover:text-[#F6C915] transition-colors">
            TORONTO
          </span>
          <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#FBECB0] leading-tight mt-0.5 block">
            Healthy Eating &amp; Lifestyle Certificate <span className="text-white font-bold">· Live Online</span>
          </span>
        </div>
      </Link>
    );
  }

  // Variant: Header
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none shrink-0 py-0.5 select-none ${className}`}
      aria-label="CSNN Toronto - Canadian School of Natural Nutrition"
    >
      {/* Official CSNN Toronto Logo Badge */}
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 transition-transform group-hover:scale-105 duration-300">
        <Image
          src="/graphics/logo.jpg"
          alt="CSNN Toronto - Canadian School of Natural Nutrition"
          fill
          sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
          className="object-contain"
          priority
        />
      </div>

      {/* Golden Vertical Divider Bar */}
      <div className="w-[2px] h-11 sm:h-14 lg:h-16 bg-[#F6C915] shrink-0 rounded-full" />

      {/* Canadian School of Natural Nutrition, Toronto Lockup */}
      <div className="flex flex-col justify-center">
        <span className="text-[8.5px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.14em] text-[#071245] leading-tight">
          CANADIAN SCHOOL OF
        </span>
        <span className="text-[8.5px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.14em] text-[#071245] leading-tight">
          NATURAL NUTRITION
        </span>
        <span className="text-xl sm:text-2xl lg:text-[29px] font-black text-[#071245] tracking-wider leading-none mt-0.5 group-hover:text-[#0B1A5A] transition-colors">
          TORONTO
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] lg:text-[11px] font-semibold text-slate-500 leading-tight mt-0.5 block">
          Healthy Eating &amp; Lifestyle Certificate <span className="text-[#071245] font-black">· Live Online</span>
        </span>
      </div>
    </Link>
  );
}
