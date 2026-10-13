import React from "react";
import { Sparkles, Video, Users, Globe, ChefHat, CheckCircle2, ArrowRight, Calendar, Clock, Award } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function LearningExperience() {
  const steps = [
    {
      num: "01",
      badge: "LIVE INTERACTION",
      title: "Live with Your Instructor",
      desc: "Ask Rasha questions live in every session. Real interactive discussions, never boring pre-recorded videos.",
      takeaway: "Real-time Q&A in every single workshop",
      icon: Video,
    },
    {
      num: "02",
      badge: "SUPPORTIVE COHORT",
      title: "Learn with Fellow Students",
      desc: "Discuss meals, swap healthy recipes, and build lasting wellness habits alongside an inspiring peer community.",
      takeaway: "Collaborative discussions & recipe sharing",
      icon: Users,
    },
    {
      num: "03",
      badge: "100% ONLINE",
      title: "Join from Anywhere in the World",
      desc: "Toronto, across Canada, or worldwide. Evening classes (6:00–8:30 pm EST) fit easily into your normal workday routine.",
      takeaway: "Learn comfortably from home with zero commute",
      icon: Globe,
    },
    {
      num: "04",
      badge: "PRACTICAL SKILLS",
      title: "Use It in Your Kitchen Tonight",
      desc: "Decode food labels, organize your pantry, and prepare delicious whole-food meals for your family the very next day.",
      takeaway: "Real grocery shopping & cooking confidence",
      icon: ChefHat,
    },
  ];

  return (
    <section
      id="how-it-works"
      data-screen-label="05 How you'll learn"
      className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple & Clean Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-2.5 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>HOW YOU&apos;LL LEARN</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
            Simple, Live, and Built for Real Life
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            10 interactive evening workshops designed for deep understanding, personal attention, and immediate everyday habits.
          </p>
        </div>

        {/* 4 Clean, Scannable Skeuomorphic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#FCFDFE] to-[#F1F5F9] border border-slate-200/90 hover:border-slate-300 p-4 sm:p-6 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_1px_3px_rgba(0,0,0,0.03),0_10px_24px_-4px_rgba(7,18,69,0.07)] hover:shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_20px_36px_-6px_rgba(7,18,69,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Icon & Step Number */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <div className="p-[1.5px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-[0_2px_6px_rgba(184,117,3,0.3),inset_0_1px_0_#FFFFFF] group-hover:scale-105 transition-transform">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] sm:rounded-[14px] bg-gradient-to-b from-[#0F236B] to-[#040924] text-[#F6C915] flex items-center justify-center shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-1.5px_1px_rgba(0,0,0,0.7)]">
                        <Icon className="w-5 h-5 text-[#F6C915] drop-shadow-2xs" />
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-black text-[#854D0E] bg-[#FEF9C3] px-2.5 py-0.5 sm:py-1 rounded-full border border-[#FDE047] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_1px_0_#FFFFFF]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-black text-[#071245] leading-snug mb-1.5 sm:mb-2 group-hover:text-[#B87503] transition-colors">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3 sm:mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Clear Takeaway */}
                <div className="pt-3 border-t border-slate-200/80 flex items-start gap-2 text-xs font-bold text-[#071245]">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B7A42] shrink-0 mt-0.5" />
                  <span>{item.takeaway}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean, Simple Summary Ribbon */}
        <div className="rounded-xl sm:rounded-2xl bg-gradient-to-b from-white via-[#FCFDFE] to-[#F8FAFC] border border-slate-200/90 p-3.5 sm:p-5 shadow-[inset_0_1.5px_0_#FFFFFF,0_4px_12px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#071245]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
              <span>Starts {PROGRAM_INFO.startDate}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
              <span>{PROGRAM_INFO.scheduleTime}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
              <span>4 canfitpro CECs Approved</span>
            </div>
          </div>

          <a
            href="#register"
            className="btn-skeuo-gold animate-shimmer w-full sm:w-auto justify-center shrink-0 px-5 h-9.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform"
          >
            <span>Reserve your seat</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
