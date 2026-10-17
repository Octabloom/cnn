"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  Video as VideoIcon,
  MessageCircle,
  ChefHat,
  HeartHandshake,
} from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function ProgramShowcaseDualPane() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasEnded(false);
      }).catch(() => {
        // Fallback if browser blocks unmuted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        }
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 28;
    setProgress((current / duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    setHasEnded(false);
  };

  return (
    <section
      id="program-showcase"
      data-screen-label="04 Program Showcase Dual-Pane"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#071245]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            SECTION HEADER: Centered Eyebrow & Punchy Headline
            ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-amber-200/80 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>LIVE MASTERCLASS PREVIEW · DUAL PANE SHOWCASE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#071245] tracking-[-0.03em] leading-tight mb-3">
            Experience the Classroom Before You Enroll
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Meet Lead Instructor Rasha Abu Rabi as she outlines what awaits you in CSNN Toronto&apos;s Healthy Eating &amp; Lifestyle Certificate.
          </p>
        </div>

        {/* ==============================================================
            DUAL PANE SHOWCASE: Video on One Side, Luxury UI Card on Other
            ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ==============================================================
              PANE 1 (LEFT / 5 cols on lg): 9:16 Portrait Video Player Frame
              ============================================================== */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Outer Ambient Glow & Soft Physical Ground Shadow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#071245]/20 via-[#F6C915]/25 to-[#071245]/15 rounded-[44px] blur-xl opacity-80 pointer-events-none" />
              <div className="absolute inset-x-8 -bottom-4 h-10 bg-slate-950/40 rounded-[100%] blur-xl pointer-events-none" />

              {/* Luxury Device-Grade Chamfered Frame */}
              <div className="relative rounded-[36px] sm:rounded-[42px] p-2 sm:p-2.5 bg-gradient-to-b from-[#333D52] via-[#151B2B] to-[#0A0E1A] shadow-[0_25px_60px_-15px_rgba(7,18,69,0.45),inset_0_1.5px_1.5px_rgba(255,255,255,0.4)] border border-slate-700/60 z-10 select-none">
                
                {/* Inner Video Housing */}
                <div
                  onClick={togglePlay}
                  className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden bg-black aspect-[9/16] cursor-pointer group shadow-inner"
                >
                  {/* HTML5 Native Video Element */}
                  <video
                    ref={videoRef}
                    src="/assets/videos/program-showcase.mp4"
                    poster="/assets/frames/program-showcase-poster.jpg"
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Floating Glass Badge: Live Session Indicator */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071245]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-black border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span>Live Preview</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#071245] text-[10px] font-black shadow-md border border-slate-200">
                      <span>0:28</span>
                    </span>
                  </div>

                  {/* Center Tactile Play / Pause / Replay Button Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 ${
                      isPlaying ? "opacity-0 hover:opacity-100 bg-black/25" : "opacity-100 bg-black/35"
                    }`}
                  >
                    <div className="relative">
                      {/* Radiating pulse ring when paused */}
                      {!isPlaying && !hasEnded && (
                        <div className="absolute -inset-3 rounded-full bg-[#F6C915]/30 animate-ping pointer-events-none" />
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (hasEnded) {
                            handleReplay(e);
                          } else {
                            togglePlay();
                          }
                        }}
                        aria-label={hasEnded ? "Replay video" : isPlaying ? "Pause video" : "Play video"}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-[#FDE047] via-[#F6C915] to-[#D97706] text-[#071245] flex items-center justify-center shadow-[0_8px_30px_rgba(246,201,21,0.6),inset_0_1.5px_0_#FFF] border-2 border-white/90 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      >
                        {hasEnded ? (
                          <RotateCcw className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                        ) : isPlaying ? (
                          <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-[#071245]" />
                        ) : (
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#071245] translate-x-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Controls Bar (Glassmorphic) */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col gap-2">
                    
                    {/* Scrub / Progress Bar */}
                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FDE047] to-[#F6C915] transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Bottom Metadata & Audio Toggle */}
                    <div className="flex items-center justify-between text-white text-xs pt-0.5">
                      <div className="flex items-center gap-1.5 truncate pr-2">
                        <VideoIcon className="w-3.5 h-3.5 text-[#F6C915] shrink-0" />
                        <span className="text-[11px] font-bold text-white/90 truncate">
                          Rasha Abu Rabi, MSc., R.H.N.
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                        className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer shrink-0 border border-white/30 shadow-xs"
                      >
                        {isMuted ? (
                          <VolumeX className="w-3.5 h-3.5 text-red-300" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-[#F6C915]" />
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              PANE 2 (RIGHT / 7 cols on lg): Ultra-Premium High-Converting UI Card
              ============================================================== */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-2">
            <div className="bg-white/95 sm:bg-white/98 backdrop-blur-xl rounded-3xl sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(7,18,69,0.14),inset_0_1.5px_0_#FFFFFF] relative overflow-hidden">
              
              {/* Top ambient decorative glint */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F6C915]/15 via-transparent to-transparent pointer-events-none" />

              {/* Badge Bar: Interactive Class Format + CECs Recognition */}
              <div className="flex items-center flex-wrap gap-2 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10.5px] sm:text-xs font-black uppercase tracking-wider border border-emerald-200/80 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Live Instructor Dialogue</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#854D0E] text-[10.5px] sm:text-xs font-black uppercase tracking-wider border border-amber-200/80 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-[#DEAB07]" />
                  <span>4 canfitpro CECs Approved</span>
                </span>
              </div>

              {/* Bold Section Headline */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#071245] leading-tight tracking-tight mb-3">
                Real Engagement. Real Answers. Real Whole-Food Confidence.
              </h3>

              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 font-medium leading-relaxed mb-6">
                Unlike passive recorded courses, the Healthy Eating &amp; Lifestyle Certificate brings you face-to-face with an experienced holistic nutritionist. Ask specific dietary questions, dismantle confusing nutrition myths, and cultivate lifelong healthy habits.
              </p>

              {/* 4 Feature Pillars Grid (2x2 on sm+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                
                {/* Pillar 01 */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#071245] flex items-center justify-center shrink-0 border border-blue-200/80 shadow-2xs">
                    <MessageCircle className="w-4 h-4 text-[#071245]" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                      Live Q&amp;A Every Session
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                      Direct access to your instructor for customized dietary clarity.
                    </p>
                  </div>
                </div>

                {/* Pillar 02 */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-amber-50 to-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 shadow-2xs">
                    <ChefHat className="w-4 h-4 text-[#B87503]" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                      Kitchen-Ready Action Hacks
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                      Pantry prep, clean label reading, and cost-effective whole food cooking.
                    </p>
                  </div>
                </div>

                {/* Pillar 03 */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80 shadow-2xs">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                      Supportive Learning Cohort
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                      Share recipes, exchange ideas, and build community with peers.
                    </p>
                  </div>
                </div>

                {/* Pillar 04 */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-amber-50 to-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 shadow-2xs">
                    <Award className="w-4 h-4 text-[#B87503]" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                      canfitpro Accredited
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                      Earn 4 Continuing Education Credits toward professional renewal.
                    </p>
                  </div>
                </div>

              </div>

              {/* Schedule & Live Status Bar */}
              <div className="p-3 sm:p-4 rounded-2xl bg-[#071245] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 shadow-md border border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                    <Calendar className="w-4 h-4 text-[#F6C915]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-white">Starts {PROGRAM_INFO.startDate}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-pulse" />
                    </div>
                    <span className="text-[11px] text-white/70 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F6C915]" />
                      <span>{PROGRAM_INFO.scheduleTime}</span>
                    </span>
                  </div>
                </div>

                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-[#FFE676] border border-[#F6C915]/40 shrink-0">
                  Interactive Live Zoom
                </span>
              </div>

              {/* High-Converting CTA & Micro-Trust Badges */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#register"
                  className="btn-skeuo-gold animate-shimmer flex-1 h-12 sm:h-13 rounded-2xl text-[#071245] font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border-2 border-[#FFF8B8]"
                >
                  <span>Hold Your Free Seat for Oct 28</span>
                  <ArrowRight className="w-4 h-4 text-[#071245] stroke-[3]" />
                </a>

                <a
                  href={`tel:${PROGRAM_INFO.phoneRaw}`}
                  className="px-4 h-12 sm:h-13 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-[#071245] font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors shadow-2xs"
                  title="Call Admissions"
                >
                  <span>Speak with an Advisor</span>
                </a>
              </div>

              {/* Micro Trust Strip */}
              <div className="flex items-center justify-center sm:justify-start gap-4 text-[11px] text-slate-500 font-bold pt-3.5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Risk-Free Seat Hold</span>
                </span>
                <span className="text-slate-300">•</span>
                <span>Zero Tuition Due Today</span>
                <span className="text-slate-300">•</span>
                <span>10 Workshops</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
