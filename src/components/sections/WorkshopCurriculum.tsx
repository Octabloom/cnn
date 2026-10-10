"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WORKSHOPS, PROGRAM_INFO } from "@/data/programData";
import { BookOpen, Calendar, Clock, Award, CheckCircle2, ArrowRight, Sparkles, ChevronDown, ChevronUp, Layers } from "lucide-react";

export function WorkshopCurriculum() {
  const [showAll, setShowAll] = useState(false);
  const displayedWorkshops = showAll ? WORKSHOPS : WORKSHOPS.slice(0, 4);

  return (
    <section
      id="curriculum"
      data-screen-label="06 Workshops"
      className="py-8 sm:py-12 lg:py-14 bg-[#FBF4D8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#13277A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-[#8A6208] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-[#EFE1AD] shadow-sm backdrop-blur-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>10 HOLISTIC NUTRITION WORKSHOPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-[1.05]">
            Healthy starts here
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#5B5440] font-semibold max-w-2xl mx-auto">
            A comprehensive curriculum designed to take you step-by-step through the core
            principles of natural nutrition, from cellular fuel to daily kitchen routines.
          </p>

          {/* Centered Schedule Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl glass-card-light text-[11px] sm:text-xs font-black text-[#13277A] shadow-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8780F]" />
              <span>Starts {PROGRAM_INFO.startDate}</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl glass-card-light text-[11px] sm:text-xs font-black text-[#13277A] shadow-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8780F]" />
              <span>{PROGRAM_INFO.scheduleTime}</span>
            </div>
          </div>
        </div>

        {/* 4 Initial Workshops (Expandable to 10) Grid with Rich Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 mb-8 sm:mb-10">
          {displayedWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="glass-card-light p-4 sm:p-6 rounded-[22px] sm:rounded-[28px] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group hover:border-[#D4AF37] relative overflow-hidden shadow-[0_8px_24px_rgba(19,39,122,0.05)] hover:shadow-[0_16px_36px_rgba(19,39,122,0.12)]"
            >
              <div>
                {/* Workshop Photo with Gradient Overlay & Badges */}
                <div className="relative h-40 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-[#EAE0BC] shadow-inner bg-[#EAE0BC]">
                  <Image
                    src={ws.image}
                    alt={ws.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Darkening gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-b from-[#1C389E] to-[#0A1856] text-[#F6C915] font-black text-xs flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(19,39,122,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border border-[#F6C915]/40">
                      {ws.number}
                    </span>
                    {ws.highlight && (
                      <span className="text-[10px] sm:text-[11px] font-black text-[#13277A] bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-md border border-[#F6C915]/50">
                        {ws.highlight}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-white/95">
                    <Sparkles className="w-3 h-3 text-[#F6C915]" />
                    <span>Live Interactive Workshop</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-2xl font-black text-[#13277A] mb-1.5 sm:mb-2.5 group-hover:text-[#A8780F] transition-colors leading-tight">
                  {ws.title}
                </h3>
                <p className="text-xs sm:text-base text-[#5B5440] font-medium leading-relaxed">
                  {ws.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#EAE0BC]/80 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#8A6208]">
                <span>2-Hour Live Online Module</span>
                <span className="text-[#13277A] font-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Included in Certificate →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-16">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="btn-skeuo-gold inline-flex items-center gap-2.5 px-6 sm:px-8 h-12 sm:h-14 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-md hover:shadow-lg transition-all"
            aria-expanded={showAll}
          >
            <Layers className="w-4 h-4 text-[#13277A]" />
            <span>
              {showAll ? "Show Less Workshops" : `View All 10 Workshops (6 More)`}
            </span>
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <span className="text-[11px] sm:text-xs font-bold text-[#8A6208]">
            Showing {displayedWorkshops.length} of {WORKSHOPS.length} comprehensive modules
          </span>
        </div>

        {/* Certificate Options Breakdown: 2 Prestigious Diploma Cards */}
        <div className="p-5 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[36px] bg-gradient-to-br from-[#0B1A5A] via-[#071245] to-[#050D32] text-white border-2 border-[#F6C915] shadow-2xl relative overflow-hidden">
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-6 sm:mb-10 relative z-10">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#F6C915] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Certificate Pathways
            </span>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mt-1">
              Choose Your Level of Recognition
            </h3>
            <p className="text-xs sm:text-base text-white/80 mt-1.5 sm:mt-2 font-medium">
              Every student who participates earns formal recognition. Fitness professionals can also complete the short test for continuing education credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-10 relative z-10">
            
            {/* Certificate 1: Attendance */}
            <div className="p-5 sm:p-8 rounded-[20px] sm:rounded-[28px] glass-card-dark flex flex-col justify-between border border-white/20 hover:border-white/40 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-white">
                      Certificate of Attendance
                    </h4>
                    <span className="text-[11px] sm:text-xs text-[#FBECB0] font-bold">Standard Pathway</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                  Awarded upon completing all 10 workshops. Ideal for personal health, family nutrition planning, and lifestyle enrichment.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#F6C915] pt-3.5 border-t border-white/10">
                <CheckCircle2 className="w-4 h-4" />
                <span>Complete all 10 live workshops</span>
              </div>
            </div>

            {/* Certificate 2: Achievement */}
            <div className="p-5 sm:p-8 rounded-[20px] sm:rounded-[28px] bg-gradient-to-br from-[#1C389E] to-[#0A1856] border-2 border-[#F6C915] shadow-[0_0_35px_rgba(246,201,21,0.25)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-3.5 right-3.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                4 canfitpro CECs
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-[#F6C915]">
                      Certificate of Achievement
                    </h4>
                    <span className="text-[11px] sm:text-xs text-white/80 font-bold">Professional Upgrade</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4 sm:mb-6 font-normal">
                  All 10 workshops + a short multiple-choice assessment (75%+ passing score). Approved by canfitpro for 4 Continuing Education Credits.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-white pt-3.5 border-t border-[#F6C915]/30">
                <CheckCircle2 className="w-4 h-4 text-[#F6C915]" />
                <span>All 10 workshops + short test (75%+)</span>
              </div>
            </div>

          </div>

          {/* Action CTA with Shimmer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-4 sm:pt-6 border-t border-white/15 relative z-10">
            <span className="text-xs sm:text-sm text-white/80 font-semibold text-center sm:text-left">
              Registration opens for the October 14, 2026 intake.
            </span>
            <a
              href="#register"
              className="btn-skeuo-gold animate-shimmer w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 sm:px-9 h-12 sm:h-14 rounded-full text-xs sm:text-sm font-black tracking-wide"
            >
              <span>Save my seat for all 10</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
