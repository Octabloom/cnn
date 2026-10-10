"use client";

import React from "react";
import { Sparkles, MapPin } from "lucide-react";

interface TorontoSkylineGraphicProps {
  className?: string;
  showBadges?: boolean;
}

export function TorontoSkylineGraphic({
  className = "",
  showBadges = true,
}: TorontoSkylineGraphicProps) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none flex items-center justify-center ${className}`}
    >
      {/* Ambient background glow behind the sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#F6C915]/20 blur-3xl pointer-events-none" />

      {/* SVG Canvas */}
      <svg
        viewBox="0 0 560 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[460px] drop-shadow-xl"
      >
        <defs>
          {/* Radiant Sun Gradients */}
          <radialGradient
            id="sunRadial"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#FFF9D2" />
            <stop offset="45%" stopColor="#FBD745" />
            <stop offset="85%" stopColor="#F6C915" />
            <stop offset="100%" stopColor="#DCA808" />
          </radialGradient>

          <radialGradient
            id="sunAuraSoft"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#F6C915" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#F6C915" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F6C915" stopOpacity="0" />
          </radialGradient>

          {/* Architectural Silhouettes Gradients */}
          <linearGradient id="cnTowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E389E" />
            <stop offset="40%" stopColor="#13277A" />
            <stop offset="85%" stopColor="#0B1A5A" />
            <stop offset="100%" stopColor="#071245" />
          </linearGradient>

          <linearGradient id="skyScraper1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A348E" />
            <stop offset="60%" stopColor="#11246D" />
            <stop offset="100%" stopColor="#081442" />
          </linearGradient>

          <linearGradient id="skyScraper2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#152B7A" />
            <stop offset="50%" stopColor="#0D1D59" />
            <stop offset="100%" stopColor="#061036" />
          </linearGradient>

          <linearGradient id="skyScraper3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2543B3" />
            <stop offset="60%" stopColor="#162D82" />
            <stop offset="100%" stopColor="#09174A" />
          </linearGradient>

          <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A4BBF" />
            <stop offset="50%" stopColor="#18318A" />
            <stop offset="100%" stopColor="#0C1B54" />
          </linearGradient>

          {/* Lake Ontario Deep Waters */}
          <linearGradient id="lakeWater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A1856" />
            <stop offset="40%" stopColor="#071245" />
            <stop offset="100%" stopColor="#040924" />
          </linearGradient>

          {/* Beacon Glow */}
          <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4A4A" />
            <stop offset="60%" stopColor="#F6C915" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F6C915" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* -------------------------------------------------------------
            1. RISING SUN & GOLDEN DAWN AURA
            ------------------------------------------------------------- */}
        {/* Soft Outer Aura */}
        <circle
          cx="375"
          cy="245"
          r="190"
          fill="url(#sunAuraSoft)"
          className="animate-sun-aura"
        />

        {/* Concentric Golden Halo Rings */}
        <circle
          cx="375"
          cy="245"
          r="165"
          stroke="#F6C915"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          strokeDasharray="8 6"
        />
        <circle
          cx="375"
          cy="245"
          r="150"
          stroke="#F6C915"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Solid Vibrant Sun Disc */}
        <circle
          cx="375"
          cy="245"
          r="138"
          fill="url(#sunRadial)"
          filter="drop-shadow(0 0 35px rgba(246, 201, 21, 0.45))"
        />

        {/* -------------------------------------------------------------
            2. BACKGROUND SKYSCRAPERS (Layer 1 - Distant Downtown)
            ------------------------------------------------------------- */}
        {/* Far West Tower */}
        <rect x="180" y="270" width="36" height="130" rx="3" fill="url(#skyScraper1)" />
        {/* West High-rise */}
        <rect x="220" y="235" width="44" height="165" rx="3" fill="url(#skyScraper2)" />
        <polygon points="220,235 242,215 264,235" fill="url(#skyScraper1)" />
        {/* Mid-West Tower with Spire */}
        <rect x="270" y="210" width="48" height="190" rx="3" fill="url(#skyScraper1)" />
        <rect x="292" y="175" width="4" height="35" fill="#FFE875" />

        {/* East Distant Cluster */}
        <rect x="420" y="220" width="42" height="180" rx="3" fill="url(#skyScraper2)" />
        <rect x="466" y="250" width="38" height="150" rx="3" fill="url(#skyScraper1)" />
        <rect x="508" y="280" width="36" height="120" rx="3" fill="url(#skyScraper2)" />

        {/* -------------------------------------------------------------
            3. ROGERS CENTRE (SKYDOME)
            ------------------------------------------------------------- */}
        <path
          d="M 285 400 C 285 340, 360 340, 360 400 Z"
          fill="url(#domeGrad)"
          stroke="#FFE676"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        {/* Dome Structural Lines */}
        <path
          d="M 322 342 L 322 400"
          stroke="#FFE676"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
        <path
          d="M 302 355 C 315 350, 330 350, 343 355"
          stroke="#FFE676"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />

        {/* -------------------------------------------------------------
            4. ICONIC CN TOWER (Center Landmark)
            ------------------------------------------------------------- */}
        {/* Left Tapered Leg */}
        <polygon points="364,400 374,270 376,270 370,400" fill="url(#cnTowerGrad)" />
        {/* Right Tapered Leg */}
        <polygon points="384,400 378,270 376,270 380,400" fill="url(#cnTowerGrad)" />
        {/* Center Support Shaft */}
        <rect x="374" y="180" width="6" height="220" fill="url(#cnTowerGrad)" />
        <line x1="377" y1="180" x2="377" y2="400" stroke="#FFE676" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Lower Main Observation Deck & 360 Restaurant Pod */}
        <path
          d="M 360 215 L 366 195 L 388 195 L 394 215 Z"
          fill="url(#cnTowerGrad)"
          stroke="#FFE676"
          strokeWidth="1.2"
        />
        {/* Pod Observation Window Band (Glowing) */}
        <rect x="367" y="202" width="20" height="4" rx="1" fill="#FFE676" className="animate-window-1" />

        {/* Upper Skypod */}
        <ellipse cx="377" cy="162" rx="7" ry="5" fill="#FFE676" stroke="#071245" strokeWidth="1" />
        <rect x="375" y="166" width="4" height="28" fill="url(#cnTowerGrad)" />

        {/* Antenna Spire Needle */}
        <polygon points="376,160 378,160 377,45" fill="#FFE875" />
        <line x1="377" y1="45" x2="377" y2="35" stroke="#FFE875" strokeWidth="1.5" />

        {/* Animated CN Tower Top Beacon Light */}
        <circle
          cx="377"
          cy="35"
          r="9"
          fill="url(#beaconGlow)"
          className="animate-beacon-pulse"
        />
        <circle cx="377" cy="35" r="3.5" fill="#FF3333" filter="drop-shadow(0 0 6px #FF3333)" />

        {/* -------------------------------------------------------------
            5. FOREGROUND SKYSCRAPER TOWERS (Layer 2 - Prominent Skyline)
            ------------------------------------------------------------- */}
        {/* First Canadian Place Style (Left Tall White/Navy Highrise) */}
        <g>
          <rect x="195" y="250" width="52" height="150" rx="3" fill="url(#skyScraper3)" stroke="#FFE875" strokeWidth="0.8" strokeOpacity="0.4" />
          <polygon points="208,250 221,232 234,250" fill="url(#skyScraper1)" />
          {/* Spire */}
          <line x1="221" y1="232" x2="221" y2="215" stroke="#FFE875" strokeWidth="1.5" />
        </g>

        {/* Center-Left Modern Glass Tower */}
        <g>
          <rect x="252" y="230" width="44" height="170" rx="3" fill="url(#skyScraper2)" stroke="#FFE875" strokeWidth="0.8" strokeOpacity="0.4" />
          <polygon points="252,230 274,218 296,230" fill="#FFE875" fillOpacity="0.2" />
        </g>

        {/* Waterfront Tower (Base of CN Tower Left) */}
        <rect x="300" y="290" width="56" height="110" rx="3" fill="url(#skyScraper1)" stroke="#FFE875" strokeWidth="0.6" strokeOpacity="0.3" />

        {/* Center-Right Stepped Skyscraper */}
        <g>
          <rect x="394" y="240" width="48" height="160" rx="3" fill="url(#skyScraper3)" stroke="#FFE875" strokeWidth="0.8" strokeOpacity="0.4" />
          <rect x="404" y="215" width="28" height="25" rx="2" fill="url(#skyScraper2)" />
          <line x1="418" y1="215" x2="418" y2="198" stroke="#FFE875" strokeWidth="1.2" />
        </g>

        {/* East Financial Tower */}
        <rect x="446" y="260" width="44" height="140" rx="3" fill="url(#skyScraper1)" stroke="#FFE875" strokeWidth="0.6" strokeOpacity="0.3" />

        {/* -------------------------------------------------------------
            6. TWINKLING GOLDEN SKYSCRAPER WINDOWS
            ------------------------------------------------------------- */}
        {/* Cluster 1: West Towers */}
        <g className="animate-window-1" fill="#FFE676">
          <rect x="204" y="265" width="5" height="7" rx="1" />
          <rect x="215" y="265" width="5" height="7" rx="1" />
          <rect x="226" y="265" width="5" height="7" rx="1" />
          <rect x="237" y="265" width="5" height="7" rx="1" />

          <rect x="204" y="285" width="5" height="7" rx="1" />
          <rect x="226" y="285" width="5" height="7" rx="1" />
          <rect x="237" y="285" width="5" height="7" rx="1" />

          <rect x="215" y="305" width="5" height="7" rx="1" />
          <rect x="226" y="305" width="5" height="7" rx="1" />

          <rect x="204" y="325" width="5" height="7" rx="1" />
          <rect x="215" y="325" width="5" height="7" rx="1" />
          <rect x="237" y="325" width="5" height="7" rx="1" />

          <rect x="226" y="345" width="5" height="7" rx="1" />
          <rect x="237" y="345" width="5" height="7" rx="1" />
        </g>

        {/* Cluster 2: Center Towers */}
        <g className="animate-window-2" fill="#FFE676">
          <rect x="260" y="245" width="6" height="7" rx="1" />
          <rect x="272" y="245" width="6" height="7" rx="1" />
          <rect x="284" y="245" width="6" height="7" rx="1" />

          <rect x="260" y="265" width="6" height="7" rx="1" />
          <rect x="284" y="265" width="6" height="7" rx="1" />

          <rect x="272" y="285" width="6" height="7" rx="1" />
          <rect x="284" y="285" width="6" height="7" rx="1" />

          <rect x="260" y="315" width="6" height="7" rx="1" />
          <rect x="272" y="315" width="6" height="7" rx="1" />

          <rect x="308" y="305" width="5" height="6" rx="1" />
          <rect x="320" y="305" width="5" height="6" rx="1" />
          <rect x="332" y="305" width="5" height="6" rx="1" />
          <rect x="344" y="305" width="5" height="6" rx="1" />

          <rect x="308" y="325" width="5" height="6" rx="1" />
          <rect x="332" y="325" width="5" height="6" rx="1" />
          <rect x="344" y="325" width="5" height="6" rx="1" />
        </g>

        {/* Cluster 3: East Towers */}
        <g className="animate-window-3" fill="#FFE676">
          <rect x="404" y="255" width="6" height="7" rx="1" />
          <rect x="416" y="255" width="6" height="7" rx="1" />
          <rect x="428" y="255" width="6" height="7" rx="1" />

          <rect x="404" y="275" width="6" height="7" rx="1" />
          <rect x="428" y="275" width="6" height="7" rx="1" />

          <rect x="416" y="295" width="6" height="7" rx="1" />
          <rect x="428" y="295" width="6" height="7" rx="1" />

          <rect x="404" y="320" width="6" height="7" rx="1" />
          <rect x="416" y="320" width="6" height="7" rx="1" />

          <rect x="456" y="275" width="5" height="6" rx="1" />
          <rect x="468" y="275" width="5" height="6" rx="1" />
          <rect x="456" y="295" width="5" height="6" rx="1" />
          <rect x="480" y="295" width="5" height="6" rx="1" />
          <rect x="468" y="315" width="5" height="6" rx="1" />
        </g>

        {/* -------------------------------------------------------------
            7. LAKE ONTARIO WATER BASE & ANIMATED FLOWING RIPPLES
            ------------------------------------------------------------- */}
        {/* Solid Deep Blue Lake Base */}
        <rect x="0" y="400" width="560" height="80" fill="url(#lakeWater)" />
        <line x1="0" y1="400" x2="560" y2="400" stroke="#F6C915" strokeWidth="1.5" />

        {/* Layer 1: Flowing Gold Ripple Wave */}
        <path
          d="M -40 415 C 20 408, 60 422, 120 415 C 180 408, 220 422, 280 415 C 340 408, 380 422, 440 415 C 500 408, 540 422, 600 415"
          stroke="#F6C915"
          strokeWidth="1.8"
          strokeOpacity="0.8"
          fill="none"
          className="animate-wave-ripple"
        />

        {/* Layer 2: Reverse Cyan/White Wave Highlights */}
        <path
          d="M -20 432 C 40 426, 80 438, 140 432 C 200 426, 240 438, 300 432 C 360 426, 400 438, 460 432 C 520 426, 560 438, 620 432"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          fill="none"
          className="animate-wave-ripple-reverse"
        />

        {/* Layer 3: Lower Deep Water Wave */}
        <path
          d="M -40 450 C 20 444, 60 456, 120 450 C 180 444, 220 456, 280 450 C 340 444, 380 456, 440 450 C 500 444, 540 456, 600 450"
          stroke="#F6C915"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          fill="none"
          className="animate-wave-ripple"
        />

        {/* Layer 4: Ambient Shimmer Accents */}
        <path
          d="M 50 465 C 100 462, 140 468, 190 465 M 270 465 C 320 462, 360 468, 410 465 M 480 465 C 510 463, 530 467, 560 465"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />
      </svg>

      {/* Floating Badges for Enhanced Modern Aesthetic */}
      {showBadges && (
        <>
          {/* Top-Left Landmark Pill */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DEC0] shadow-md text-[11px] font-black text-[#13277A] animate-float-gentle">
            <MapPin className="w-3.5 h-3.5 text-[#F6C915] fill-[#F6C915]" />
            <span>TORONTO, CANADA</span>
          </div>

          {/* Bottom-Right CSNN Academic Heritage Tag */}
          <div className="absolute bottom-4 right-3 sm:bottom-5 sm:right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071245]/90 backdrop-blur-md border border-[#F6C915]/50 shadow-md text-[10px] sm:text-[11px] font-black text-[#F6C915]">
            <Sparkles className="w-3 h-3 text-[#F6C915]" />
            <span>HOME CAMPUS · EST. 1994</span>
          </div>
        </>
      )}
    </div>
  );
}
