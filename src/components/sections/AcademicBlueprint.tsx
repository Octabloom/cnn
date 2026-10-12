import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function AcademicBlueprint() {
  const milestones = [
    {
      phase: "PHASE 01",
      timeline: "Early Roots",
      title: "Roots in Medicine",
      desc: "Growing up inspired by her physician father, developing an early passion for medicine and clinical healing through food.",
      tag: "MEDICAL FOUNDATION",
      badgeColor: "bg-blue-50 text-[#13277A] border-blue-200",
      bulletColor: "bg-[#13277A]",
      circleBg: "from-[#1C389E] to-[#0A1856]",
      circleRing: "border-[#1C389E]",
      isTop: true,
      colIndex: 0,
    },
    {
      phase: "PHASE 02",
      timeline: "University Science",
      title: "BSc & MSc Public Health",
      desc: "Earned her Bachelor of Science in Nutrition & Food Tech, followed by a rigorous Master’s in Public Health.",
      tag: "DUAL DEGREES",
      badgeColor: "bg-indigo-50 text-[#1C389E] border-indigo-200",
      bulletColor: "bg-[#1C389E]",
      circleBg: "from-[#2A4DC7] to-[#13277A]",
      circleRing: "border-[#2A4DC7]",
      isTop: false,
      colIndex: 1,
    },
    {
      phase: "PHASE 03",
      timeline: "CSNN Diploma",
      title: "Holistic Nutritionist",
      desc: "Completed CSNN’s flagship Natural Nutrition Diploma Program to earn the registered R.H.N. clinical designation.",
      tag: "REGISTERED R.H.N.",
      badgeColor: "bg-amber-50 text-[#8A6208] border-amber-300",
      bulletColor: "bg-[#F6C915]",
      circleBg: "from-[#FFE052] to-[#D4A017] text-[#071245]",
      circleRing: "border-[#F6C915] ring-4 ring-[#F6C915]/30",
      isTop: true,
      colIndex: 2,
    },
    {
      phase: "PHASE 04",
      timeline: "Clinical Care",
      title: "Hospital & Dietetics",
      desc: "Extensive practice across hospitals, digestive clinics, and weight management centres in nutrition & dietetics.",
      tag: "CLINICAL PRACTICE",
      badgeColor: "bg-orange-50 text-[#B85000] border-orange-200",
      bulletColor: "bg-[#D4A017]",
      circleBg: "from-[#D4A017] to-[#A8780F]",
      circleRing: "border-[#D4A017]",
      isTop: false,
      colIndex: 3,
    },
    {
      phase: "PHASE 05",
      timeline: "Signature Trinity",
      title: "Living Trinity",
      desc: "Variety, Frequency & Moderation. Rejects fad diets, empowering students to become their own confident nutrition coaches.",
      tag: "THE LIVING TRINITY",
      badgeColor: "bg-emerald-50 text-[#1B7A42] border-emerald-200",
      bulletColor: "bg-[#1B7A42]",
      circleBg: "from-[#1B7A42] to-[#0E512A]",
      circleRing: "border-[#1B7A42]",
      isTop: true,
      colIndex: 4,
    },
  ];

  return (
    <section
      id="blueprint"
      data-screen-label="09 Academic Blueprint"
      className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            HORIZONTAL UNDULATING SNAKE TIMELINE (5-Stage Academic & Clinical Blueprint)
            ========================================================================= */}
        <div>
          {/* Centered Timeline Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-700 text-xs font-black tracking-widest uppercase mb-4 border border-slate-200 shadow-2xs backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B87503]" />
              <span>ACADEMIC &amp; CLINICAL BLUEPRINT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071245] tracking-tight">
              From medical roots to compounding holistic scale.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-2 max-w-xl mx-auto">
              A 5-stage timeline engineered to bridge university nutritional science with everyday kitchen hacks.
            </p>
          </div>

          {/* Desktop Undulating Snake Timeline (overflow-visible with generous headroom so cards never crop) */}
          <div className="hidden md:block w-full relative px-1 sm:px-3 overflow-visible pt-16 pb-12">
            {/* Underlying Mathematical Sine Wave SVG */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 1080 540"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="horizontalSnakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#13277A" />
                    <stop offset="25%" stopColor="#1C389E" />
                    <stop offset="50%" stopColor="#D4A017" />
                    <stop offset="75%" stopColor="#DEAB07" />
                    <stop offset="100%" stopColor="#1B7A42" />
                  </linearGradient>
                </defs>

                {/* Undulating Continuous Snake Wave Path */}
                <path
                  d="M 20,270 C 50,255 80,245 108,245 C 180,245 250,295 324,295 C 400,295 470,245 540,245 C 610,245 680,295 756,295 C 830,295 900,245 972,245 C 1000,245 1030,260 1060,270"
                  stroke="url(#horizontalSnakeGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="animate-snake-flow"
                />
              </svg>
            </div>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4 relative z-10 w-full overflow-visible">
              {milestones.map((m) => {
                return (
                  <div
                    key={m.phase}
                    className="flex flex-col items-center justify-between min-h-[540px] overflow-visible"
                  >
                    {/* TOP HALF: Card on top OR Empty space */}
                    <div className="w-full h-[235px] flex flex-col justify-end items-center overflow-visible">
                      {m.isTop ? (
                        <div className="w-full flex flex-col items-center overflow-visible">
                          {/* Top Card */}
                          <div className="w-full bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_4px_16px_rgba(7,18,69,0.05)] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                                {m.phase}
                              </span>
                              <span className="text-[10px] text-slate-500 font-bold">
                                {m.timeline}
                              </span>
                            </div>

                            <h4 className="text-xs sm:text-[13px] font-black text-[#071245] leading-snug mb-1">
                              {m.title}
                            </h4>

                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2.5">
                              {m.desc}
                            </p>

                            <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-black text-[#071245]">
                              <span className={`w-1.5 h-1.5 rounded-full ${m.bulletColor}`} />
                              <span className="tracking-wider">{m.tag}</span>
                            </div>
                          </div>

                          {/* Vertical Connector Line from Card to Circle */}
                          <div className="w-[2px] h-4 border-l-2 border-dashed border-[#071245]/30 mt-1" />
                        </div>
                      ) : null}
                    </div>

                    {/* MIDDLE: Circle Node */}
                    <div className="my-auto py-2 flex flex-col items-center justify-center">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-b ${m.circleBg} text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border-2 ${m.circleRing} transition-transform hover:scale-110`}
                      >
                        {m.colIndex + 1 < 10 ? `0${m.colIndex + 1}` : m.colIndex + 1}
                      </div>
                    </div>

                    {/* BOTTOM HALF: Card on bottom OR Empty space */}
                    <div className="w-full h-[235px] flex flex-col justify-start items-center overflow-visible">
                      {!m.isTop ? (
                        <div className="w-full flex flex-col items-center overflow-visible">
                          {/* Vertical Connector Line from Circle to Card */}
                          <div className="w-[2px] h-4 border-l-2 border-dashed border-[#071245]/30 mb-1" />

                          {/* Bottom Card */}
                          <div className="w-full bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_4px_16px_rgba(7,18,69,0.05)] hover:shadow-md transition-all duration-300 hover:translate-y-1">
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                                {m.phase}
                              </span>
                              <span className="text-[10px] text-slate-500 font-bold">
                                {m.timeline}
                              </span>
                            </div>

                            <h4 className="text-xs sm:text-[13px] font-black text-[#071245] leading-snug mb-1">
                              {m.title}
                            </h4>

                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2.5">
                              {m.desc}
                            </p>

                            <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-black text-[#071245]">
                              <span className={`w-1.5 h-1.5 rounded-full ${m.bulletColor}`} />
                              <span className="tracking-wider">{m.tag}</span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Undulating Snake Timeline (Same Wave & Nodes, Fits 100% on Mobile with Zero Horizontal Scroll) */}
          <div className="block md:hidden w-full relative px-2 sm:px-4 py-2">
            
            {/* Undulating Snake Wave SVG Spine */}
            <div className="absolute left-[26px] top-4 bottom-4 w-10 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 40 700"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="mobileSnakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#13277A" />
                    <stop offset="25%" stopColor="#1C389E" />
                    <stop offset="50%" stopColor="#D4A017" />
                    <stop offset="75%" stopColor="#DEAB07" />
                    <stop offset="100%" stopColor="#1B7A42" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20,10 C 38,75 2,140 20,210 C 38,280 2,350 20,420 C 38,490 2,560 20,630 L 20,690"
                  stroke="url(#mobileSnakeGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="animate-snake-flow"
                />
              </svg>
            </div>

            {/* 5 Milestone Cards along the Undulating Snake Wave */}
            <div className="space-y-5 relative z-10">
              {milestones.map((m) => (
                <div key={m.phase} className="flex items-start gap-3 relative">
                  
                  {/* Glowing Undulating Circle Node */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-b ${m.circleBg} text-white font-black text-xs flex items-center justify-center shadow-lg border-2 ${m.circleRing} transition-transform active:scale-95 mt-0.5`}
                    >
                      {m.colIndex + 1 < 10 ? `0${m.colIndex + 1}` : m.colIndex + 1}
                    </div>
                  </div>

                  {/* Milestone Card (Same design & tokens as desktop) */}
                  <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_rgba(7,18,69,0.05)] hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`text-[9.5px] font-black uppercase px-2.5 py-0.5 rounded-full border ${m.badgeColor}`}>
                        {m.phase}
                      </span>
                      <span className="text-[11px] text-slate-500 font-bold">
                        {m.timeline}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-[#071245] leading-snug mb-1">
                      {m.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2.5">
                      {m.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[9.5px] font-black text-[#071245]">
                      <span className={`w-1.5 h-1.5 rounded-full ${m.bulletColor}`} />
                      <span className="tracking-wider">{m.tag}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-10">
          <a
            href="#register"
            className="btn-skeuo-primary animate-shimmer inline-flex items-center gap-3 px-9 h-13 rounded-full text-sm font-black tracking-wide shadow-xl"
          >
            <span>Learn directly with Rasha · Reserve your seat</span>
            <ArrowRight className="w-4 h-4 text-[#F6C915]" />
          </a>
        </div>
      </div>
    </section>
  );
}
