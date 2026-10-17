"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLockupProps {
  variant?: "header" | "footer";
  className?: string;
}

/**
 * Modern 8-Petal Geometric Bloom Icon representing Octobloom:
 * 8 symmetrical holistic petals radiating vitality, health, and harmony.
 */
export function OctobloomIcon({
  className = "w-8 h-8",
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  const gradientId = theme === "light" ? "octo-grad-light" : "octo-grad-dark";
  const glowId = theme === "light" ? "octo-glow-light" : "octo-glow-dark";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Light theme gradient: rich royal navy transitioning to warm sunshine gold */}
        <linearGradient id="octo-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071245" />
          <stop offset="60%" stopColor="#0B1A5A" />
          <stop offset="100%" stopColor="#B87503" />
        </linearGradient>

        {/* Dark theme gradient: luminous gold & amber */}
        <linearGradient id="octo-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF280" />
          <stop offset="50%" stopColor="#F6C915" />
          <stop offset="100%" stopColor="#DEAB07" />
        </linearGradient>

        <linearGradient id="center-grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#F6C915" />
        </linearGradient>

        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="2.5"
            floodColor={theme === "light" ? "#B87503" : "#F6C915"}
            floodOpacity={theme === "light" ? "0.2" : "0.5"}
          />
        </filter>
      </defs>

      {/* Outer subtle halo ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      {/* 8 Geometric Petals radiating symmetrically at 0, 45, 90, 135, 180, 225, 270, 315 deg */}
      <g filter={`url(#${glowId})`}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
          <path
            key={angle}
            d="M 50 14 C 55 28 61 38 50 48 C 39 38 45 28 50 14 Z"
            fill={`url(#${gradientId})`}
            transform={`rotate(${angle} 50 50)`}
            opacity={idx % 2 === 0 ? "0.95" : "0.78"}
          />
        ))}

        {/* Secondary inner layered bloom tier for rich depth */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="32"
            rx="3.5"
            ry="9"
            fill="url(#center-grad-gold)"
            transform={`rotate(${angle} 50 50)`}
            opacity="0.9"
          />
        ))}

        {/* Central Core representing Vitality & Wellness Nucleus */}
        <circle cx="50" cy="50" r="8.5" fill={`url(#${gradientId})`} />
        <circle cx="50" cy="50" r="5" fill="url(#center-grad-gold)" />
        <circle cx="48" cy="48" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </g>
    </svg>
  );
}

export function BrandLockup({ variant = "header", className = "" }: BrandLockupProps) {
  if (variant === "footer") {
    return (
      <div className={`flex flex-col gap-3.5 ${className}`}>
        {/* Co-Branded Dual Emblem Header in Footer */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Octobloom Bloom Mark */}
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 p-2 flex items-center justify-center shadow-lg backdrop-blur-md shrink-0">
            <OctobloomIcon theme="dark" className="w-full h-full drop-shadow-md" />
          </div>

          {/* Golden Divider Bar */}
          <div className="w-[1.5px] h-9 sm:h-12 bg-gradient-to-b from-[#F6C915]/20 via-[#F6C915] to-[#F6C915]/20 shrink-0 rounded-full" />

          {/* CSNN Official Toronto Crest */}
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-lg shrink-0">
            <Image
              src="/graphics/logo.jpg"
              alt="CSNN Toronto Seal"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>

          {/* Typography Stack */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl font-black text-white tracking-wider">
                OCTOBLOOM
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#F6C915]/20 text-[#FBECB0] border border-[#F6C915]/40 shadow-xs">
                WELLNESS
              </span>
            </div>

            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-white/60">
                POWERED BY
              </span>
              <span className="text-xs sm:text-[13px] font-black text-[#F6C915] tracking-wide">
                CSNN TORONTO
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[10px] text-white/50 font-medium">
              Canadian School of Natural Nutrition · Est. 1994
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Header (White/Light backdrop with crisp contrast and fluid mobile responsiveness)
  return (
    <Link
      href="/"
      className={`group flex items-center gap-1.5 sm:gap-3 focus:outline-none shrink-0 py-0.5 select-none ${className}`}
      aria-label="Octobloom powered by CSNN Toronto - Home"
    >
      {/* Logos Cluster: Octobloom Icon + CSNN Seal */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        {/* Octobloom Bloom Icon Emblem */}
        <div className="relative w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-amber-50/50 to-white border border-amber-200/80 p-1 sm:p-1.5 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-amber-300 transition-all duration-300">
          <OctobloomIcon theme="light" className="w-full h-full" />
        </div>

        {/* Refined Center partnership connector on larger screens */}
        <span className="hidden sm:inline-block text-[#B87503] font-black text-[10px] sm:text-xs">
          ×
        </span>

        {/* CSNN Official Toronto Crest */}
        <div className="relative w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-0.5 sm:p-1 border border-slate-200/90 shadow-2xs group-hover:scale-105 group-hover:border-[#F6C915] transition-all duration-300">
          <Image
            src="/graphics/logo.jpg"
            alt="CSNN Toronto - Canadian School of Natural Nutrition"
            fill
            sizes="(max-width: 640px) 32px, (max-width: 1024px) 44px, 48px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Golden Vertical Divider Bar */}
      <div className="w-[1.5px] sm:w-[2px] h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-transparent via-[#F6C915] to-transparent shrink-0 rounded-full" />

      {/* Typography Lockup: Octobloom Powered by CSNN Toronto */}
      <div className="flex flex-col justify-center leading-none">
        {/* Top Row: OCTOBLOOM Brand Name + Wellness Pill */}
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] sm:text-base lg:text-[20px] font-black tracking-tight text-[#071245] group-hover:text-[#0B1A5A] transition-colors leading-tight">
            OCTOBLOOM
          </span>
          <span className="text-[7.5px] sm:text-[9px] font-black uppercase tracking-wider px-1 sm:px-1.5 py-0.5 rounded bg-amber-100/70 text-[#854D0E] border border-amber-300/60 leading-none">
            WELLNESS
          </span>
        </div>

        {/* Middle Row: "POWERED BY CSNN TORONTO" */}
        <div className="flex items-center gap-1 mt-0.5 sm:mt-1 flex-wrap">
          <span className="text-[7px] sm:text-[8.5px] lg:text-[9.5px] font-black uppercase tracking-[0.12em] text-slate-500 leading-tight">
            POWERED BY
          </span>
          <span className="text-[7.5px] sm:text-[9px] lg:text-[10.5px] font-black tracking-wider text-[#B87503] uppercase leading-tight">
            CSNN TORONTO
          </span>
        </div>

        {/* Bottom Row: Program Subtitle (Healthy Eating & Lifestyle Certificate) */}
        <span className="hidden sm:block text-[8.5px] lg:text-[10px] font-semibold text-slate-500 leading-tight mt-0.5 truncate max-w-[280px] lg:max-w-none">
          Canadian School of Natural Nutrition <span className="text-[#071245] font-black">· Live Online</span>
        </span>
      </div>
    </Link>
  );
}
