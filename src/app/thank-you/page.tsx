"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Check,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PROGRAM_INFO } from "@/data/programData";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name") || "";
  const firstName = rawName.trim();
  const [celebrationPops, setCelebrationPops] = useState(0);

  return (
    <div className="w-full max-w-[500px] mx-auto text-left animate-in zoom-in-95 duration-200" id="thankyou-card">
      {/* Scoped Keyframes for Guaranteed 3D Bouncing Animation & Floor Shadow */}
      <style>{`
        @keyframes realBallBounceHero {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          30% {
            transform: translateY(-16px);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          55% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          72% {
            transform: translateY(-6px);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          86% {
            transform: translateY(0);
          }
        }
        @keyframes ballShadowPulseHero {
          0%, 100% {
            transform: scale(1);
            opacity: 0.65;
          }
          30% {
            transform: scale(0.45);
            opacity: 0.15;
          }
          55% {
            transform: scale(1);
            opacity: 0.65;
          }
          72% {
            transform: scale(0.75);
            opacity: 0.35;
          }
          86% {
            transform: scale(1);
            opacity: 0.65;
          }
        }
        .bouncing-ball-hero {
          animation: realBallBounceHero 1.35s infinite !important;
          transform-origin: bottom center !important;
          will-change: transform !important;
        }
        .bouncing-shadow-hero {
          animation: ballShadowPulseHero 1.35s infinite !important;
          transform-origin: center center !important;
          will-change: transform, opacity !important;
        }
      `}</style>

      {/* 207roofers Elevated Clean White Card - Minimalist & Exact 500px Form Size */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.38)] border border-slate-100 overflow-hidden flex flex-col justify-between transition-all">
        
        {/* Card Body with Clean Minimalist Spacing */}
        <div className="p-5 sm:p-6 space-y-3.5">
          
          {/* Header Info Pill & Verification */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-[#854D0E] text-[10px] font-black uppercase tracking-wider border border-[#F6C915]/60 shadow-2xs">
              <Sparkles className="w-2.5 h-2.5 text-[#DEAB07]" />
              CSNN Toronto · Oct 28 Cohort
            </span>

            <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ✓ Reserved
            </span>
          </div>

          {/* Real 3D Shiny Sphere Checkmark Icon with Realistic Bouncing Animation & Ground Shadow */}
          <div className="flex flex-col items-center text-center pt-1 pb-1">
            <div className="relative shrink-0 flex flex-col items-center select-none mb-1.5">
              <div
                className="bouncing-ball-hero relative flex items-center justify-center cursor-pointer group"
                onClick={() => setCelebrationPops((prev) => prev + 1)}
                title="Click for celebration sparkle!"
              >
                {/* Soft Ambient Radial Glow */}
                <div className="absolute -inset-3 rounded-full bg-emerald-500/30 blur-lg pointer-events-none group-hover:bg-emerald-500/45 transition-colors" />

                {/* True 3D Shiny Sphere */}
                <div
                  className="w-13 h-13 sm:w-15 sm:h-15 rounded-full flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105 group-active:scale-95 shadow-[0_14px_30px_-5px_rgba(22,163,74,0.65),inset_-6px_-8px_16px_rgba(3,44,22,0.9),inset_2.5px_2.5px_6px_rgba(255,255,255,0.7)]"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 28%, #86EFAC 0%, #22C55E 30%, #16A34A 58%, #15803D 78%, #064E3B 92%, #022C1A 100%)",
                  }}
                >
                  {/* Specular Spotlight Glint Dots */}
                  <div className="absolute top-2 left-2.5 sm:top-2.5 sm:left-3 w-3 h-2 sm:w-3.5 sm:h-2.5 rounded-[100%] bg-white/90 blur-[0.4px] -rotate-15 pointer-events-none" />
                  <div className="absolute top-1.5 left-2 sm:top-2 sm:left-2.5 w-1.5 h-1 rounded-full bg-white blur-[0.2px] pointer-events-none" />

                  {/* Internal 3D Check Icon */}
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[3.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)] relative z-10 transition-transform duration-200 group-hover:scale-110" />
                </div>

                {/* Interactive Celebration Feedback Floating Badge on Click */}
                {celebrationPops > 0 && (
                  <span className="absolute -top-3 px-2 py-0.5 rounded-full bg-[#F6C915] text-[#071245] font-black text-[9px] shadow-md animate-in zoom-in-50 fade-in duration-200 pointer-events-none whitespace-nowrap">
                    Verified ✨ +{celebrationPops}
                  </span>
                )}
              </div>

              {/* Synchronized Realistic Ground Floor Shadow underneath the ball */}
              <div className="bouncing-shadow-hero w-9 sm:w-11 h-1.5 rounded-[100%] bg-emerald-950/40 blur-[2px] pointer-events-none -mt-0.5" />
            </div>

            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-black text-[#071245] leading-tight">
                Thank You{firstName ? `, ${firstName}` : ""}!
              </h2>
              <p className="text-[12px] text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                Your qualification details have been delivered to the admissions team at <strong className="text-[#071245]">adminoctobloom@gmail.com</strong>.
              </p>
            </div>
          </div>

          {/* Minimalist Confirmation Highlights */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 space-y-1.5">
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-500">Program:</span>
              <span className="text-[#071245] font-black">Healthy Eating &amp; Lifestyle Certificate</span>
            </div>
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-500">Cohort Start:</span>
              <span className="text-[#071245]">October 28, 2026 (Live Online · 6–8 PM EST)</span>
            </div>
            <div className="flex items-center justify-between font-bold pt-1 border-t border-slate-200/60 text-emerald-700">
              <span>Tuition Status:</span>
              <span className="font-black">Free Seat Hold · Zero Due Today</span>
            </div>
          </div>

          {/* Minimalist Subtle Direct Contact Strip (Clean, Not Bulky) */}
          <div className="pt-0.5 text-center">
            <p className="text-[11px] text-slate-500 font-medium">
              An admissions advisor will contact you within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-3 pt-1 text-[11px] font-bold text-slate-700">
              <a
                href={`tel:${PROGRAM_INFO.phoneRaw}`}
                className="hover:text-[#071245] hover:underline flex items-center gap-1 transition-colors"
              >
                <Phone className="w-3 h-3 text-[#DEAB07]" />
                <span>{PROGRAM_INFO.phone}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`https://wa.me/1${PROGRAM_INFO.phoneRaw}?text=Hi%20CSNN%20Toronto,%20I%20just%20submitted%20my%20HELC%20form%20for%20the%20October%202026%20cohort.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp Advisor →</span>
              </a>
            </div>
          </div>

          {/* Trust Security Strip */}
          <div className="flex items-center justify-center gap-2 pt-0.5 text-[9.5px] text-slate-400 font-bold">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>CSNN Toronto Verified · 100% Confidential</span>
          </div>

        </div>

        {/* 207roofers Style Bottom Navigation Bar */}
        <div className="w-full grid grid-cols-2">
          <Link
            href="/HELC"
            className="py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HELC</span>
          </Link>

          <Link
            href="/#curriculum"
            className="py-3.5 bg-gradient-to-r from-[#0070f3] to-[#005cd6] hover:from-[#0060df] hover:to-[#004fba] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <span>WORKSHOPS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex flex-col relative text-[#071245] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/helc-bg-luxury.jpg')" }}
    >
      {/* Light subtle translucent overlay */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-0" />

      {/* 01. Clean Header */}
      <div className="shrink-0 z-30 sticky top-0 relative shadow-xs">
        <Header />
      </div>

      {/* 02. Centered Thank You Card with Zero Scroll Fit */}
      <main className="flex-1 relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] min-h-[calc(100dvh-80px)] py-4 sm:py-6 px-4">
        <Suspense fallback={<div className="text-white font-bold">Loading...</div>}>
          <ThankYouContent />
        </Suspense>
      </main>

      {/* 03. Full Clean Footer Below Initial Viewport */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
