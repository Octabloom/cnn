"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  ChefHat,
  HeartHandshake,
} from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function ProgramShowcaseDualPane() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  // Auto-pause video when scrolling up or down away from this section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If user scrolls up or down away from section (less than 30% visible)
          if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.15, 0.3, 0.5],
      }
    );

    observer.observe(section);

    // Also auto-pause if user switches tabs or minimizes window
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // User explicitly clicked play: ensure full audio playback
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasEnded(false);
        })
        .catch(() => {
          // Fallback only if browser blocked unmuted autoplay policy
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    }
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
    videoRef.current.muted = false;
    setIsMuted(false);
    videoRef.current.play();
    setIsPlaying(true);
    setHasEnded(false);
  };

  return (
    <section
      ref={sectionRef}
      id="program-showcase"
      data-screen-label="04 Program Showcase Dual-Pane"
      className="pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#071245]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            SECTION HEADER: Centered title & teaser above dual pane
            ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-2.5 sm:mb-3 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>LIVE CLASSROOM PREVIEW</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#071245] tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
            Experience the Classroom Before You Enroll
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Watch how lead instructor Rasha Abu Rabi brings nutrition science to life with real-time interactive Q&amp;A, community recipe sharing, and practical kitchen habits.
          </p>
        </div>

        {/* ==============================================================
            DUAL PANE CONTAINER: Side-by-side perfectly aligned from above and below
            ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:items-stretch items-center">
          
          {/* ==============================================================
              PANE 1 (LEFT / 5 cols on lg):
              Photorealistic iPhone Mobile Device Mockup with Video
              Aligned flush at top and bottom with the right card
              ============================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-1 select-none lg:h-full">
            <div className="relative mx-auto lg:mr-0 w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] xl:max-w-[385px] lg:h-full flex flex-col">
              
              {/* 1. Ambient Device Ground Shadow */}
              <div className="absolute inset-x-8 -bottom-3 h-10 bg-slate-950/45 rounded-[100%] blur-xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071245]/20 via-[#F6C915]/15 to-[#071245]/20 rounded-[54px] blur-xl pointer-events-none" />

              {/* 2. Physical Exterior Hardware Buttons (Machined Titanium) */}
              {/* Left Edge: Action Button */}
              <div className="absolute -left-[3px] top-[100px] w-[3.5px] h-[24px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
              {/* Left Edge: Volume Up */}
              <div className="absolute -left-[3px] top-[138px] w-[3.5px] h-[48px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
              {/* Left Edge: Volume Down */}
              <div className="absolute -left-[3px] top-[198px] w-[3.5px] h-[48px] bg-gradient-to-r from-[#181B24] to-[#4A5266] rounded-l-xs border-l border-t border-b border-white/30 shadow-md z-0" />
              {/* Right Edge: Power / Siri Lock Button */}
              <div className="absolute -right-[3px] top-[155px] w-[3.5px] h-[68px] bg-gradient-to-l from-[#181B24] to-[#4A5266] rounded-r-xs border-r border-t border-b border-white/30 shadow-md z-0" />

              {/* 3. Outer Titanium Chassis Band with Specular Chamfer Highlight */}
              <div className="relative rounded-[48px] sm:rounded-[54px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#3D4556] via-[#1E2330] to-[#0D101A] shadow-[0_28px_75px_rgba(4,10,32,0.48),0_12px_28px_rgba(0,0,0,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.65),inset_0_-1.5px_2px_rgba(0,0,0,0.9)] border border-slate-600/60 z-10 lg:h-full flex flex-col">
                
                {/* Antenna Band Subtle Micro-Cuts */}
                <div className="absolute top-[75px] -left-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
                <div className="absolute bottom-[75px] -left-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
                <div className="absolute top-[75px] -right-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />
                <div className="absolute bottom-[75px] -right-[1px] w-[2px] h-[4px] bg-[#10131A] pointer-events-none" />

                {/* Inner Titanium Dark Bezel Ring */}
                <div className="rounded-[40px] sm:rounded-[46px] p-[2.5px] sm:p-[3px] bg-gradient-to-b from-[#181C26] via-[#0B0E14] to-[#181C26] shadow-inner flex-1 flex flex-col min-h-0">
                  
                  {/* OLED Screen Housing Container */}
                  <div
                    onClick={togglePlay}
                    className="relative rounded-[37px] sm:rounded-[43px] overflow-hidden bg-black flex-1 flex flex-col cursor-pointer group shadow-[inset_0_0_10px_rgba(0,0,0,0.85)] border-[2px] sm:border-[3px] border-black aspect-[9/16] lg:aspect-auto lg:h-full min-h-[460px] sm:min-h-[500px] lg:min-h-0"
                  >
                    {/* Screen Glass Photorealistic Diagonal Sheen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-40 rounded-[36px]" />
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/[0.06] to-transparent pointer-events-none z-40" />

                    {/* Precision Apple Dynamic Island */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[92px] sm:w-[104px] h-[22px] sm:h-[25px] rounded-full bg-black flex items-center justify-between px-2.5 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2)] pointer-events-none">
                      {/* Camera Lens */}
                      <div className="relative w-2.5 h-2.5 rounded-full bg-[#05070D] ring-1 ring-[#161F33] flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#1E3A8A] blur-[0.2px]" />
                        <span className="absolute top-0.5 left-0.5 w-0.5 h-0.5 rounded-full bg-white/70" />
                      </div>
                      {/* FaceID Sensor */}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111624] border border-white/10" />
                    </div>

                    {/* HTML5 Video Element (Unobstructed, zero text overlay at the top) */}
                    <video
                      ref={videoRef}
                      src="/assets/videos/program-showcase.mp4"
                      poster="/assets/frames/program-showcase-poster.jpg"
                      playsInline
                      preload="metadata"
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleEnded}
                      className="w-full h-full object-cover object-left lg:object-[0.5%_center] flex-1"
                    />

                    {/* Center Tactile Play / Pause / Replay Button Overlay */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-30 ${
                        isPlaying ? "opacity-0 hover:opacity-100 bg-black/20" : "opacity-100 bg-black/30"
                      }`}
                    >
                      <div className="relative">
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
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#FDE047] via-[#F6C915] to-[#D97706] text-[#071245] flex items-center justify-center shadow-[0_8px_30px_rgba(246,201,21,0.6),inset_0_1.5px_0_#FFF] border-2 border-white/90 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                          {hasEnded ? (
                            <RotateCcw className="w-6 h-6 stroke-[2.5]" />
                          ) : isPlaying ? (
                            <Pause className="w-6 h-6 fill-[#071245]" />
                          ) : (
                            <Play className="w-6 h-6 fill-[#071245] translate-x-0.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="absolute bottom-0 inset-x-0 px-3.5 pb-2.5 pt-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-30 flex flex-col gap-2">
                      {/* Scrub / Progress Bar */}
                      <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FDE047] to-[#F6C915] transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Bottom Status */}
                      <div className="flex items-center justify-between text-white text-xs">
                        <span className="text-[10px] font-bold text-white/90 tracking-wide">
                          Rasha Abu Rabi · R.H.N.
                        </span>
                        <span className="text-[9.5px] font-medium text-white/70">
                          Live Masterclass
                        </span>
                      </div>

                      {/* Iconic Floating iOS Home Indicator Pill */}
                      <div className="w-28 h-1 bg-white/50 rounded-full mx-auto mt-1 pointer-events-none" />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ==============================================================
              PANE 2 (RIGHT / 7 cols on lg): Ultra-Premium High-Converting UI Card
              Aligned flush at top and bottom with the phone mockup
              ============================================================== */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-2 lg:h-full">
            <div className="bg-white/95 sm:bg-white/98 backdrop-blur-xl rounded-3xl sm:rounded-[36px] p-5 sm:p-7 lg:p-8 xl:p-9 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(7,18,69,0.12),inset_0_1.5px_0_#FFFFFF] relative overflow-hidden lg:h-full flex flex-col justify-between">
              
              <div>
                {/* Top ambient decorative light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F6C915]/15 via-transparent to-transparent pointer-events-none" />

                {/* Eyebrow Pill Row */}
                <div className="flex items-center flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10.5px] sm:text-xs font-black uppercase tracking-wider border border-emerald-200/80 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Live Instructor Dialogue</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#854D0E] text-[10.5px] sm:text-xs font-black uppercase tracking-wider border border-amber-200/80 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-[#DEAB07]" />
                    <span>4 canfitpro CECs Approved</span>
                  </span>
                </div>

                {/* Section Headline */}
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#071245] leading-tight tracking-tight mb-2.5">
                  Real Engagement. Real Answers. Real Whole-Food Confidence.
                </h3>

                <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 font-medium leading-relaxed mb-5">
                  Unlike passive recorded courses, the Healthy Eating &amp; Lifestyle Certificate brings you face-to-face with an experienced holistic nutritionist. Ask specific dietary questions, dismantle confusing nutrition myths, and cultivate lifelong healthy habits.
                </p>

                {/* 4 Feature Pillars Grid (2x2 on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-5">
                  
                  {/* Pillar 01 */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#071245] flex items-center justify-center shrink-0 border border-blue-200/80 shadow-2xs">
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
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-amber-50 to-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 shadow-2xs">
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
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80 shadow-2xs">
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
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-amber-50 to-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 shadow-2xs">
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
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#071245] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-5 shadow-md border border-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#F6C915]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-white">Starts {PROGRAM_INFO.startDate}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-pulse" />
                      </div>
                      <span className="text-[10.5px] text-white/70 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#F6C915]" />
                        <span>{PROGRAM_INFO.scheduleTime}</span>
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 text-[#FFE676] border border-[#F6C915]/40 shrink-0">
                    Interactive Live Zoom
                  </span>
                </div>
              </div>

              {/* Bottom CTA Area */}
              <div className="pt-2">
                {/* High-Converting CTA & Micro-Trust Badges */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <a
                    href="#register"
                    className="btn-skeuo-gold animate-shimmer flex-1 h-11.5 sm:h-12 rounded-2xl text-[#071245] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border-2 border-[#FFF8B8]"
                  >
                    <span>Hold Your Free Seat for Oct 28</span>
                    <ArrowRight className="w-4 h-4 text-[#071245] stroke-[3]" />
                  </a>

                  <a
                    href={`tel:${PROGRAM_INFO.phoneRaw}`}
                    className="px-3.5 h-11.5 sm:h-12 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-[#071245] font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors shadow-2xs"
                    title="Call Admissions"
                  >
                    <span>Speak with an Advisor</span>
                  </a>
                </div>

                {/* Micro Trust Strip */}
                <div className="flex items-center justify-center sm:justify-start gap-3.5 text-[10.5px] text-slate-500 font-bold pt-3 flex-wrap">
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

      </div>
    </section>
  );
}
