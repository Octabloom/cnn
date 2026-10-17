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
      className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>10 HOLISTIC NUTRITION WORKSHOPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-[1.05]">
            Your Journey to Better Health Starts Here
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Learn the core principles of natural nutrition step by step, from understanding how nutrients support your body at the cellular level to applying healthy habits in your everyday kitchen.
          </p>

          {/* Centered Schedule Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-black text-[#071245] shadow-2xs">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
              <span>Starts {PROGRAM_INFO.startDate}</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-black text-[#071245] shadow-2xs">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
              <span>{PROGRAM_INFO.scheduleTime}</span>
            </div>
          </div>
        </div>

        {/* 4 Initial Workshops (Expandable to 10) Grid with Rich Photography - Compact Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-7 mb-6 sm:mb-10">
          {displayedWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="bg-gradient-to-b from-white via-[#FCFDFE] to-[#F1F5F9] p-3 sm:p-6 rounded-xl sm:rounded-[28px] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-slate-200/90 hover:border-slate-300 relative overflow-hidden shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_1px_3px_rgba(0,0,0,0.03),0_8px_20px_-4px_rgba(7,18,69,0.06)] hover:shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_20px_36px_-6px_rgba(7,18,69,0.12)]"
            >
              <div>
                {/* Workshop Photo with Gradient Overlay & Badges - Compact Height on Mobile */}
                <div className="relative h-28 sm:h-56 w-full rounded-lg sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-5 border border-slate-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] bg-slate-100">
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
                  <div className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 right-2 sm:right-3.5 flex items-center justify-between">
                    <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-b from-[#0F236B] to-[#040924] text-[#F6C915] font-black text-[10px] sm:text-xs flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_6px_rgba(0,0,0,0.25)] border border-[#F6C915]/50">
                      {ws.number}
                    </span>
                    {ws.highlight && (
                      <span className="text-[9px] sm:text-[11px] font-black text-[#071245] bg-white/95 backdrop-blur-md px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-[inset_0_1px_0_#FFFFFF,0_2px_6px_rgba(0,0,0,0.12)] border border-slate-200">
                        {ws.highlight}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3.5 right-2 sm:right-3.5 flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold text-white/95">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F6C915]" />
                    <span>Live Interactive Workshop</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-sm sm:text-2xl font-black text-[#071245] mb-1 sm:mb-2.5 group-hover:text-[#B87503] transition-colors leading-tight">
                  {ws.title}
                </h3>
                <p className="text-[11px] sm:text-base text-slate-600 font-medium leading-normal sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {ws.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-200/70 flex items-center justify-between text-[10px] sm:text-xs font-bold text-slate-500">
                <span>Live Sessions</span>
                <span className="text-[#071245] font-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Included in Certificate →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="btn-skeuo-gold inline-flex items-center gap-2 px-5 sm:px-8 h-10 sm:h-14 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-md hover:shadow-lg transition-all"
            aria-expanded={showAll}
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#071245]" />
            <span>
              {showAll ? "Show Less Workshops" : `View All 10 Workshops (6 More)`}
            </span>
            {showAll ? (
              <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>
          <span className="text-[10px] sm:text-xs font-bold text-slate-500">
            Showing {displayedWorkshops.length} of {WORKSHOPS.length} comprehensive modules
          </span>
        </div>

      </div>
    </section>
  );
}
