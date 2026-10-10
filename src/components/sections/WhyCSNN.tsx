import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";

export function WhyCSNN() {
  const proofPoints = [
    { value: "1994", label: "CSNN Founded", desc: "Teaching Medicine of the Future™" },
    { value: "R.H.N.", label: "Certified Instructor", desc: "Registered Holistic Nutritionist" },
    { value: "4 CECs", label: "canfitpro Approved", desc: "Achievement Certificate" },
    { value: "100% Live", label: "Interactive Online", desc: "Real discussions & Q&A" },
  ];

  const pathwaySteps = [
    {
      step: "01",
      badge: "YOU ARE HERE",
      title: "Healthy Eating & Lifestyle Certificate",
      desc: "10 live interactive workshops (21 hours). Gain everyday kitchen confidence and whole-food nutrition clarity.",
      features: [
        "10 Live Interactive Evening Workshops (21 Hours)",
        "Everyday Kitchen Habits & Practical Food Swaps",
        "4 canfitpro Continuing Education Credits (CECs)",
      ],
      current: true,
      timeframe: "Starts Oct 14, 2026",
    },
    {
      step: "02",
      badge: "OPTIONAL ADVANCEMENT",
      title: "Natural Nutrition Diploma Program",
      desc: "Comprehensive accredited clinical curriculum to earn the licensed Registered Holistic Nutritionist designation.",
      features: [
        "CSNN Flagship Comprehensive Diploma",
        "Clinical Anatomy, Biochemistry & Pathology",
        "Licensed R.H.N. Professional Designation",
      ],
      current: false,
      timeframe: "Flexible Full-Time / Part-Time",
    },
    {
      step: "03",
      badge: "CAREER DESTINATION",
      title: "Professional Holistic Practice",
      desc: "Launch private clinical consultations, wellness workshops, corporate consulting, or healthy culinary coaching.",
      features: [
        "Private 1-on-1 Nutritional Client Consultations",
        "Integrative Clinic & Wellness Practice",
        "Corporate Wellness Seminars & Food Authorship",
      ],
      current: false,
      timeframe: "Lifelong Clinical Leadership",
    },
  ];

  return (
    <section
      id="why-csnn"
      data-screen-label="09 Why CSNN"
      className="py-8 sm:py-14 bg-gradient-to-b from-[#071245] via-[#0B1A5A] to-[#050D32] text-white relative overflow-hidden border-y-2 border-[#F6C915]/60 shadow-2xl"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1E389B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F6C915]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header & Trust Strip */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F6C915] text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-2 border border-[#F6C915]/40 shadow-xs backdrop-blur-md">
            <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-[#F6C915]">
              <Image src="/assets/logo.jpg" alt="CSNN" fill sizes="14px" className="object-contain" />
            </div>
            <span>WHY CSNN TORONTO</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-white tracking-[-0.03em] leading-tight">
            Canada’s pioneer in holistic nutrition education since 1994
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 text-[11px] sm:text-xs text-white/80">
            <span>Teaching the Medicine of the Future™ · Live online with licensed faculty</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-bold text-white/90">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F6C915]" />
              <span>30+ Years Heritage</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-bold text-white/90">
              <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F6C915]" />
              <span>Accredited Faculty</span>
            </div>
          </div>
        </div>

        {/* 4 Proof Metric Strip - Refined High-End Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="glass-card-dark py-2.5 px-3 sm:py-3 sm:px-3.5 rounded-xl sm:rounded-2xl flex flex-col items-center text-center border border-white/10 hover:border-[#F6C915]/60 hover:shadow-[0_8px_25px_rgba(246,201,21,0.12)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915]/30 to-transparent group-hover:via-[#F6C915] transition-all" />
              <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#F6C915] leading-none mb-1 group-hover:scale-105 transition-transform">
                {item.value}
              </span>
              <span className="text-[11px] sm:text-[13px] font-black text-white leading-tight">
                {item.label}
              </span>
              <span className="text-[9px] sm:text-[11px] text-white/60 mt-0.5 font-medium leading-tight">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Structured Educational Pathway: Non-Overlapping Interconnected Stepper Rail */}
        <div className="pt-5 sm:pt-6 border-t border-white/10 relative">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F6C915]/15 text-[#F6C915] text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-1 border border-[#F6C915]/30 shadow-xs">
                <Sparkles className="w-3 h-3 text-[#F6C915]" />
                <span>STRUCTURED EDUCATIONAL PATHWAY</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                From Kitchen Foundation to Licensed Excellence
              </h3>
              <p className="text-[11px] sm:text-xs text-white/70 mt-0.5 max-w-xl">
                A sequential educational journey from home cooking clarity to accredited clinical nutrition leadership.
              </p>
            </div>

            <a
              href="#register"
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#F6C915] hover:text-white transition-colors pb-1 shrink-0 group"
            >
              <span>Begin with Step 01 today</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 3 Interconnected Milestone Columns (Visually Connected with Flowing Animation) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 relative">
            {pathwaySteps.map((s, idx) => (
              <React.Fragment key={s.step}>
                <div
                  className={`flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 relative group overflow-visible ${
                    s.current
                      ? "bg-gradient-to-b from-[#F6C915]/[0.12] via-white/[0.05] to-transparent border-2 border-[#F6C915] shadow-[0_8px_35px_rgba(246,201,21,0.22)] ring-1 ring-[#F6C915]/50"
                      : "bg-white/[0.03] border border-white/15 hover:border-[#F6C915]/50 hover:bg-white/[0.06] shadow-lg"
                  }`}
                >
                  {/* TOP ROW: Waypoint Node & Continuous Energy Conduit */}
                  <div className="flex items-center mb-4 relative">
                    
                    {/* Left Incoming Conduit (for Card 02 and 03) */}
                    {idx > 0 && (
                      <div className="hidden md:flex items-center -ml-4 sm:-ml-5 lg:-ml-6 mr-3 w-5 sm:w-6 h-[3px] bg-gradient-to-r from-[#F6C915]/60 to-[#F6C915] relative overflow-hidden shrink-0 shadow-[0_0_8px_#F6C915]">
                        <div className="absolute inset-0 bg-white blur-[0.5px] animate-conduit-flow" />
                      </div>
                    )}

                    {/* Glowing Waypoint Node */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-all duration-300 group-hover:scale-105 z-10 ${
                        s.current
                          ? "bg-gradient-to-b from-[#FFE566] via-[#F6C915] to-[#D4A017] text-[#071245] shadow-[0_0_25px_rgba(246,201,21,0.65),inset_0_1px_1px_#FFF] ring-4 ring-[#F6C915]/30"
                          : "bg-[#0E2068] text-white/90 border border-white/20 shadow-md group-hover:border-[#F6C915]/50 group-hover:text-white"
                      }`}
                    >
                      {s.current ? (
                        <span className="relative flex items-center justify-center">
                          <span className="animate-ping absolute h-6 w-6 rounded-full bg-[#F6C915] opacity-50" />
                          <span>{s.step}</span>
                        </span>
                      ) : (
                        <span>{s.step}</span>
                      )}
                    </div>

                    {/* Right Outgoing Conduit (for Card 01 and 02) */}
                    {idx < 2 ? (
                      <div className="hidden md:flex flex-1 items-center ml-3 relative -mr-4 sm:-mr-5 lg:-mr-6">
                        <div className="w-full h-[3px] bg-white/10 rounded-full relative overflow-hidden">
                          {/* Gradient Track */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${
                              s.current
                                ? "from-[#F6C915] via-[#F6C915]/90 to-[#F6C915]"
                                : "from-[#F6C915]/80 via-white/40 to-[#F6C915]/80"
                            }`}
                          />
                          {/* Smooth Animated Traveling Energy Beam */}
                          <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] animate-beam-travel" />
                        </div>
                      </div>
                    ) : (
                      /* Destination Goal Indicator */
                      <div className="hidden md:flex items-center ml-3 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-black uppercase tracking-wider text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                        <span>CAREER GOAL</span>
                      </div>
                    )}

                    {/* Flowing Inter-Card Bridge: Spans the physical gap between cards on desktop */}
                    {idx < 2 && (
                      <div className="hidden md:flex absolute -right-7 sm:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-7 sm:w-8 lg:w-10 h-6 items-center justify-center z-30 pointer-events-none">
                        {/* Laser Conduit Tube */}
                        <div className="w-full h-[3px] bg-gradient-to-r from-[#F6C915] to-[#F6C915]/90 relative overflow-hidden shadow-[0_0_12px_#F6C915]">
                          <div className="absolute inset-0 bg-white blur-[0.5px] animate-conduit-flow" />
                        </div>
                        {/* Floating Active Pulse Waypoint Chevron */}
                        <div className="absolute -translate-x-1/2 left-1/2 w-5 h-5 rounded-full bg-[#071245] border-2 border-[#F6C915] flex items-center justify-center shadow-[0_0_14px_#F6C915] animate-chevron-flow">
                          <span className="text-[#F6C915] text-[10px] font-black leading-none">›</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Mid-Body Laser Connector (Desktop) */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-7 sm:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-7 sm:w-8 lg:w-10 h-[2px] items-center justify-center z-20 pointer-events-none">
                      <div className="w-full h-full bg-gradient-to-r from-[#F6C915]/50 via-[#F6C915] to-[#F6C915]/50 shadow-[0_0_8px_#F6C915]" />
                      <div className="absolute -left-1 w-2 h-2 rounded-full bg-[#F6C915] shadow-[0_0_6px_#F6C915]" />
                      <div className="absolute -right-1 w-2 h-2 rounded-full bg-[#F6C915] shadow-[0_0_6px_#F6C915]" />
                    </div>
                  )}

                  {/* BADGES & TIMEFRAME: Situated cleanly BELOW the top rail row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        s.current
                          ? "bg-[#F6C915] text-[#071245] shadow-sm font-black"
                          : "bg-white/10 text-white/80 border border-white/15"
                      }`}
                    >
                      {s.badge}
                    </span>
                    
                    <span
                      className={`text-[10px] font-bold ${
                        s.current ? "text-[#F6C915] font-black flex items-center gap-1" : "text-white/60"
                      }`}
                    >
                      {s.current && <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-ping" />}
                      {s.timeframe}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h4
                    className={`text-base sm:text-[17px] font-black leading-snug mb-1.5 transition-colors ${
                      s.current ? "text-white group-hover:text-[#F6C915]" : "text-white/95 group-hover:text-white"
                    }`}
                  >
                    {s.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed font-normal mb-3.5">
                    {s.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 mt-auto pt-3 border-t border-white/10 text-[11px]">
                    {s.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-white/85 font-medium leading-tight">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            s.current ? "text-[#F6C915]" : "text-white/40"
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Mobile Flowing Vertical Connector */}
                {idx < 2 && (
                  <div className="md:hidden flex flex-col items-center justify-center -my-2 relative z-20">
                    <div className="w-[3px] h-7 bg-gradient-to-b from-[#F6C915] to-[#F6C915]/50 relative overflow-hidden rounded-full shadow-[0_0_10px_#F6C915]">
                      <div className="absolute inset-x-0 h-1/2 bg-white blur-[0.5px] animate-pulse" />
                    </div>
                    <div className="w-6 h-6 -mt-1 rounded-full bg-[#071245] border-2 border-[#F6C915] flex items-center justify-center shadow-[0_0_12px_#F6C915]">
                      <span className="text-[#F6C915] text-[10px] font-black leading-none animate-bounce">↓</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Footnote Notice - Compact & Clean */}
          <div className="mt-6 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white/50">
            <p>
              *The Healthy Eating &amp; Lifestyle Certificate (HELC) is a standalone program offering 4 canfitpro CECs. To earn the full clinical R.H.N. designation, graduates may seamlessly transition to the Natural Nutrition Diploma Program.
            </p>
            <a
              href="#register"
              className="text-[#F6C915] hover:underline font-bold whitespace-nowrap shrink-0"
            >
              Reserve Step 01 Seat →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
