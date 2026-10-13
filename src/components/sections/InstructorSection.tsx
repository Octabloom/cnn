import React from "react";
import Image from "next/image";
import { INSTRUCTOR } from "@/data/programData";
import { Sparkles, ArrowRight } from "lucide-react";

export function InstructorSection() {
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
      id="instructor"
      data-screen-label="07 Instructor"
      className="py-18 sm:py-24 bg-gradient-to-b from-[#FDF8E8] via-[#FAF2D4] to-[#FDF8E8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#13277A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-[#8A6208] text-xs font-black tracking-widest uppercase mb-4 border border-[#EFE1AD] shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>MEET YOUR INSTRUCTOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-[1.05]">
            Rasha Abu Rabi, BSc., MSc., R.H.N.
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-black text-[#A8780F]">
            Lead Instructor &amp; Registered Holistic Nutritionist
          </p>

          <p className="mt-2 text-sm sm:text-base text-[#5B5440] font-semibold max-w-xl mx-auto">
            Scientist, public health specialist, and certified CSNN nutritionist guiding you through 10 interactive live workshops.
          </p>
        </div>

        {/* Instructor Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 p-7 sm:p-10 rounded-[32px] glass-card-light border-2 border-white/90 shadow-[0_20px_50px_-15px_rgba(19,39,122,0.08)]">
          {/* Portrait (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-[#071245] group">
              <Image
                src="/assets/rasha-portrait.jpg"
                alt="Rasha Abu Rabi, Lead Instructor at CSNN Toronto"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071245]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F6C915] block">
                  Lead Instructor
                </span>
                <span className="text-xl font-black block">
                  Rasha Abu Rabi
                </span>
                <span className="text-xs text-white/80 font-bold">
                  BSc., MSc., R.H.N.
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Credentials (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#13277A] text-[#F6C915] text-xs font-black w-fit shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>Evidence-Informed Practical Guidance</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#13277A] leading-snug">
              &ldquo;I do not believe in good and bad food, but in sustainable, healthy daily practices.&rdquo;
            </h3>

            <p className="text-sm text-[#0F1F5C] leading-relaxed font-medium">
              Rasha combines medical roots, rigorous public health research, and holistic clinical nutrition to empower you with tools you can use in your kitchen right away. Her focus spans digestive wellness, microbiome balance, and lifestyle harmony.
            </p>

            {/* Credential Badges Row */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {INSTRUCTOR.credentials.map((cred) => (
                <div
                  key={cred}
                  className="p-2.5 rounded-xl bg-white/90 border border-[#E8DFC2] text-center text-[11px] font-black text-[#13277A] shadow-xs flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {cred}
                </div>
              ))}
            </div>

            {/* CTA Button Row */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <a
                href="#register"
                className="btn-skeuo-gold animate-shimmer inline-flex items-center justify-center gap-2 px-5 sm:px-7 h-10 sm:h-11 rounded-full text-xs sm:text-sm font-black text-[#071245] shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Learn with Rasha · Reserve Your Seat</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
              </a>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 text-center sm:text-left">
                Live Interactive Zoom Classes · 21 Hours
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL UNDULATING SNAKE TIMELINE (Like MarketingCopilot 5-Stage Blueprint)
            ========================================================================= */}
        <div className="mt-14 mb-8">
          
          {/* Centered Timeline Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-black tracking-widest uppercase text-[#A8780F] flex items-center justify-center gap-1.5 mb-1.5">
              <Sparkles className="w-3 h-3 text-[#F6C915]" />
              ACADEMIC &amp; CLINICAL BLUEPRINT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#13277A] tracking-tight">
              From medical roots to compounding holistic scale.
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5440] font-semibold mt-1">
              A 5-stage timeline engineered to bridge university nutritional science with everyday kitchen hacks.
            </p>
          </div>

          {/* Timeline Wrapper (No scrollbars, 100% responsive width) */}
          <div className="w-full relative px-1 sm:px-3">
            
            {/* Underlying Mathematical Sine Wave SVG */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 1080 440"
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
                  d="M 20,235 C 50,220 80,210 108,210 C 180,210 250,260 324,260 C 400,260 470,210 540,210 C 610,210 680,260 756,260 C 830,260 900,210 972,210 C 1000,210 1030,225 1060,235"
                  stroke="url(#horizontalSnakeGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="animate-snake-flow"
                />
              </svg>
            </div>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4 relative z-10 w-full">
                {milestones.map((m) => {
                  return (
                    <div
                      key={m.phase}
                      className="flex flex-col items-center justify-between min-h-[440px]"
                    >
                      {/* TOP HALF: Card on top OR Empty space */}
                      <div className="w-full h-[185px] flex flex-col justify-end items-center">
                        {m.isTop ? (
                          <div className="w-full flex flex-col items-center">
                            {/* Top Card */}
                            <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E8DFC2] shadow-[0_6px_18px_rgba(19,39,122,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center justify-between gap-1 mb-2">
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                                  {m.phase}
                                </span>
                                <span className="text-[10px] text-[#5B5440] font-bold">
                                  {m.timeline}
                                </span>
                              </div>

                              <h4 className="text-xs sm:text-[13px] font-black text-[#13277A] leading-snug mb-1">
                                {m.title}
                              </h4>

                              <p className="text-[11px] text-[#5B5440] font-medium leading-relaxed mb-2.5">
                                {m.desc}
                              </p>

                              <div className="pt-2 border-t border-[#F0E6CC] flex items-center gap-1.5 text-[9px] font-black text-[#13277A]">
                                <span className={`w-1.5 h-1.5 rounded-full ${m.bulletColor}`} />
                                <span className="tracking-wider">{m.tag}</span>
                              </div>
                            </div>

                            {/* Vertical Connector Line from Card to Circle */}
                            <div className="w-[2px] h-6 border-l-2 border-dashed border-[#13277A]/40 mt-1" />
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
                      <div className="w-full h-[185px] flex flex-col justify-start items-center">
                        {!m.isTop ? (
                          <div className="w-full flex flex-col items-center">
                            {/* Vertical Connector Line from Circle to Card */}
                            <div className="w-[2px] h-6 border-l-2 border-dashed border-[#13277A]/40 mb-1" />

                            {/* Bottom Card */}
                            <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E8DFC2] shadow-[0_6px_18px_rgba(19,39,122,0.06)] hover:shadow-lg transition-all duration-300 hover:translate-y-1">
                              <div className="flex items-center justify-between gap-1 mb-2">
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                                  {m.phase}
                                </span>
                                <span className="text-[10px] text-[#5B5440] font-bold">
                                  {m.timeline}
                                </span>
                              </div>

                              <h4 className="text-xs sm:text-[13px] font-black text-[#13277A] leading-snug mb-1">
                                {m.title}
                              </h4>

                              <p className="text-[11px] text-[#5B5440] font-medium leading-relaxed mb-2.5">
                                {m.desc}
                              </p>

                              <div className="pt-2 border-t border-[#F0E6CC] flex items-center gap-1.5 text-[9px] font-black text-[#13277A]">
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
          </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
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
