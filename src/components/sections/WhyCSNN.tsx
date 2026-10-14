import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Award,
  Video,
  CheckCircle2,
  BookOpenCheck,
  Users2,
  Check,
  Landmark,
  BadgeCheck,
} from "lucide-react";

export function WhyCSNN() {
  const metrics = [
    {
      metric: "1994",
      sublabel: "ESTABLISHED",
      title: "Canada's 1st Holistic School",
      desc: "32 years of clinical academic leadership and recognized excellence.",
      icon: Landmark,
      badge: "32-Year Legacy",
    },
    {
      metric: "100% Live",
      sublabel: "REAL-TIME",
      title: "Interactive Online Classes",
      desc: "Live Zoom video classrooms with real-time discussions & direct Q&A.",
      icon: Video,
      badge: "Zero Recorded Silos",
    },
    {
      metric: "R.H.N.",
      sublabel: "FACULTY",
      title: "Registered Instructors",
      desc: "Taught exclusively by practicing Registered Holistic Nutritionists.",
      icon: GraduationCap,
      badge: "Clinical Clinicians",
    },
    {
      metric: "4 CECs",
      sublabel: "CREDENTIAL",
      title: "canfitpro Pre-Approved",
      desc: "Official Certificate of Completion & seamless diploma transfer credit.",
      icon: Award,
      badge: "canfitpro Approved",
    },
  ];

  const institutionalPillars = [
    {
      badge: "CLINICAL SCIENCE",
      tag: "BIOCHEMISTRY & GI TRACT",
      title: "Evidence-Informed Holistic Science",
      subtitle: "Beyond superficial social media trends & dietary fads",
      description:
        "CSNN curricula bridge cellular biochemistry, digestive physiology, and whole-food therapeutics so you master the true science of how nutrition heals from the stomach to the microbiome.",
      icon: BookOpenCheck,
      stat: "21 Live Hours",
      statLabel: "Academic Scope",
      points: [
        "Cellular biochemistry & microbiome diversity without marketing dogma",
        "Scientific literacy to critically evaluate emerging nutritional studies",
        "Root-cause symptomatology and practical whole-food meal formulation",
      ],
    },
    {
      badge: "LIVE MENTORSHIP",
      tag: "REAL-TIME ON ZOOM",
      title: "Small Cohorts, Real Faculty, Real Discussion",
      subtitle: "Collaborative learning alongside passionate peers",
      description:
        "Never study alone in passive pre-recorded video libraries. Every CSNN Toronto session is held live with Registered Holistic Nutritionists who actively address your personal dietary questions in real-time.",
      icon: Users2,
      stat: "Live Q&A",
      statLabel: "Every Session",
      points: [
        "Real-time personalized instructor feedback during every lecture",
        "Intimate cohort atmosphere with supportive, dedicated classmates",
        "Hands-on kitchen experiments and real whole-food pantry audits",
      ],
    },
    {
      badge: "ACCREDITED ADVANCEMENT",
      tag: "RECOGNIZED CREDENTIALS",
      title: "canfitpro CECs & Seamless Diploma Pathway",
      subtitle: "Official Certificate + transferrable tuition credit",
      description:
        "Earn 4 Continuing Education Credits (CECs) pre-approved by canfitpro, with full tuition credit applicable towards CSNN’s flagship Natural Nutrition Diploma program.",
      icon: Award,
      stat: "4 CECs",
      statLabel: "canfitpro Pre-Approved",
      points: [
        "Official CSNN Certificate of Completion upon finishing",
        "4 pre-approved canfitpro Continuing Education Credits",
        "100% tuition credit transferable into the full R.H.N. Diploma",
      ],
    },
  ];

  const trustedHighlights = [
    "Learn through 100% live online classes and real-time discussions.",
    "Get guidance from practicing Registered Holistic Nutritionists (R.H.N.s).",
    "Earn 4 pre-approved Canfitpro CECs.",
    "Research transfer options for diplomas.",
    "Study at an established Canadian institution since 1994.",
  ];

  return (
    <section
      id="why-csnn"
      data-screen-label="09 Why CSNN"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 relative overflow-hidden border-t border-slate-200/80 text-[#071245]"
    >
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            SECTION HEADER: Trust Badges & Institutional Authority
            ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white text-[#071245] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200/90 shadow-[inset_0_1px_0_#FFFFFF,0_2px_4px_rgba(0,0,0,0.04)]">
            <div className="relative w-4 h-4 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-[#F6C915]">
              <Image src="/graphics/logo.jpg" alt="CSNN" fill sizes="16px" className="object-contain" />
            </div>
            <span>WHY CSNN TORONTO · 32 YEARS OF EXCELLENCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight mb-3">
            Building a Legacy in Holistic Nutrition Since 1994
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto mb-4">
            Explore CSNN’s long-standing commitment to holistic nutrition education, with knowledgeable instructors, comprehensive learning, and a community that supports your wellness journey.
          </p>

          {/* Quick Credibility Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-b from-amber-50 to-amber-100/70 border border-amber-300/80 text-[#8A5800] font-black shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.05)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B87503]" />
              <span>32 years of academic leadership (1994–2026)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 text-slate-700 font-black shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.04)]">
              <GraduationCap className="w-3.5 h-3.5 text-[#071245]" />
              <span>Registered R.H.N. Faculty</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-[#071245] font-black shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.04)]">
              <Award className="w-3.5 h-3.5 text-[#B87503]" />
              <span>canfitpro Approved (4 CECs)</span>
            </div>
          </div>
        </div>

        {/* ==============================================================
            4 SKEUOMORPHIC METRIC SHIELDS (3D Glass-Metallic Plaques - Compact Mobile)
            ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 mb-6 sm:mb-14">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-white via-[#FCFDFE] to-[#F1F5F9] rounded-xl sm:rounded-3xl p-2.5 sm:p-6 border border-slate-200/90 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_1px_3px_rgba(0,0,0,0.03),0_8px_18px_-4px_rgba(7,18,69,0.06)] hover:shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_20px_36px_-6px_rgba(7,18,69,0.12)] hover:border-slate-300 hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
                  <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-[#B87503] bg-gradient-to-b from-amber-50 to-amber-100/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-300/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_1px_0_#FFFFFF]">
                    {item.sublabel}
                  </span>
                  
                  {/* 3D Shiny Metallic Coin Medal */}
                  <div className="p-[1px] sm:p-[1.5px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-[9px] sm:rounded-[14px] bg-gradient-to-b from-[#0F236B] to-[#040924] text-[#F6C915] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.45)]">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 drop-shadow-2xs" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-black text-[#071245] group-hover:text-[#B87503] transition-colors leading-none tracking-tight mb-1 sm:mb-1.5 drop-shadow-[0_1px_0_#FFFFFF]">
                    {item.metric}
                  </div>
                  <h3 className="text-[11px] sm:text-sm font-black text-[#071245] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-normal sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#8A5800] bg-gradient-to-b from-amber-50 to-amber-100/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-amber-200/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04),0_1px_0_#FFFFFF]">
                    {item.badge}
                  </span>
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_4px_rgba(16,185,129,0.35)] shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            3 CURATED INSTITUTIONAL PILLARS (3D Skeuomorphic Feature Cards - Compact Mobile)
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-14">
          {institutionalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-white via-[#FCFDFE] to-[#F1F5F9] rounded-xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200/90 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_1px_3px_rgba(0,0,0,0.03),0_10px_24px_-5px_rgba(7,18,69,0.07)] flex flex-col justify-between relative group hover:border-slate-300 hover:shadow-[inset_0_2px_0_#FFFFFF,inset_0_-1.5px_0_rgba(15,23,42,0.04),0_22px_42px_-8px_rgba(7,18,69,0.13)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & 3D Medal Coin */}
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider text-[#B87503] bg-gradient-to-b from-amber-50 to-amber-100/70 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-300/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_1px_0_#FFFFFF]">
                      {pillar.badge}
                    </span>

                    {/* 3D Gold / Navy Coin Icon */}
                    <div className="p-[1.5px] sm:p-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-xs group-hover:scale-105 transition-transform shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[14px] bg-gradient-to-b from-[#0F236B] to-[#040924] text-[#F6C915] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.45)]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-2xs" />
                      </div>
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5 sm:mb-1">
                    {pillar.tag}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm sm:text-lg font-black text-[#071245] leading-snug mb-0.5 sm:mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-bold text-[#B87503] mb-1.5 sm:mb-2.5">
                    {pillar.subtitle}
                  </p>

                  <p className="text-[11px] sm:text-[13px] text-slate-600 font-medium leading-normal sm:leading-relaxed mb-3 sm:mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points Checklist + Stat Highlight */}
                <div className="space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-4 border-t border-slate-200/80">
                  <div className="flex items-center justify-between pb-1 sm:pb-1.5 text-xs">
                    <span className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-wide">Key Standard</span>
                    <span className="inline-flex items-center gap-1 font-black text-[#071245] bg-gradient-to-b from-slate-50 to-slate-100 px-2 sm:px-2.5 py-0.5 rounded-md border border-slate-200 text-[10px] sm:text-[11px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_1px_0_#FFFFFF]">
                      <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1B7A42]" />
                      {pillar.stat}
                    </span>
                  </div>

                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[10.5px] sm:text-xs font-bold text-[#071245]">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_4px_rgba(16,185,129,0.35)]">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            INSTITUTIONAL TRUST COMPARISON BANNER (Luxury Skeuomorphic Plaque - Compact Mobile)
            ============================================================== */}
        <div className="bg-gradient-to-br from-white via-slate-50/95 to-amber-50/30 rounded-xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 lg:p-10 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-2px_0_rgba(15,23,42,0.04),0_1px_4px_rgba(0,0,0,0.03),0_14px_40px_-8px_rgba(7,18,69,0.08)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">
            
            {/* Left: Canadian Heritage Mission (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full bg-white text-[#B87503] text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-slate-200 shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.04)]">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F6C915]" />
                <span>The CSNN Toronto Distinction</span>
              </div>

              <h3 className="text-lg sm:text-3xl font-black text-[#071245] tracking-tight leading-tight">
                A Trusted Name in Holistic Nutrition Education Since 1994
              </h3>

              <p className="text-[11px] sm:text-sm text-slate-600 font-medium leading-normal sm:leading-relaxed">
                CSNN Toronto makes nutrition education come alive with live academic mentorship from Registered Holistic Nutritionists. You can ask questions, get direct feedback, build your scientific knowledge, and gain a respected credential recognized by every province in Canada, rather than just watching pre-recorded videos.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href="#register"
                  className="btn-skeuo-gold h-10 sm:h-11 px-5 sm:px-6 rounded-full text-xs font-black text-[#071245] inline-flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Reserve Your Seat · Limited Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                </a>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">
                  🍁 Official Canadian Educational Institution
                </span>
              </div>
            </div>

            {/* Right: Quick Advantage Matrix Box (5 cols) - 3D Inset Debossed Plaque */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-[#F8FAFC] rounded-xl sm:rounded-2xl border border-slate-200/90 p-3 sm:p-6 shadow-[inset_0_2px_4px_rgba(15,23,42,0.05),0_1px_0_#FFFFFF] space-y-2 sm:space-y-3">
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 pb-1.5 sm:pb-2 border-b border-slate-200/70 flex items-center justify-between">
                <span>The CSNN Toronto Standard</span>
                <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-700 bg-gradient-to-b from-emerald-50 to-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-300/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04),0_1px_0_#FFFFFF]">
                  5 Core Pillars
                </span>
              </div>

              <div className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs">
                {trustedHighlights.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#0F236B] to-[#040924] text-[#F6C915] text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_4px_rgba(7,18,69,0.2)] border border-[#F6C915]/40">
                      {i + 1}
                    </div>
                    <span className="font-bold text-[#071245] leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
