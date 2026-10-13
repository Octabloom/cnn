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
  Compass,
  FileCheck,
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

  const comparisons = [
    {
      feature: "Classroom Experience",
      csnn: "100% Live Video with real-time faculty discussions",
      other: "Pre-recorded, static video libraries with no interaction",
    },
    {
      feature: "Instructor Credentials",
      csnn: "Practicing Registered Holistic Nutritionists (R.H.N.)",
      other: "Anonymous course creators or unverified influencers",
    },
    {
      feature: "Continuing Education",
      csnn: "Pre-approved for 4 canfitpro CECs + Diploma transfer",
      other: "Unaccredited certificates with zero transfer value",
    },
    {
      feature: "Academic Heritage",
      csnn: "32 years of Canadian institutional trust (Est. 1994)",
      other: "Generic startup platforms without clinical grounding",
    },
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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white text-[#071245] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200/90 shadow-2xs">
            <div className="relative w-4 h-4 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-[#F6C915]">
              <Image src="/assets/logo.jpg" alt="CSNN" fill sizes="16px" className="object-contain" />
            </div>
            <span>WHY CSNN TORONTO · 32 YEARS OF EXCELLENCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C915] animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight mb-3">
            Canada’s Gold Standard in Natural Nutrition Education
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto mb-4">
            Founded in 1994, CSNN is Canada’s first and largest institution dedicated exclusively to holistic nutrition. Explore the clinical standards, faculty excellence, and student community that set us apart.
          </p>

          {/* Quick Credibility Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#8A5800] font-black shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B87503]" />
              <span>32 years of academic leadership (1994–2026)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#071245]" />
              <span>Registered R.H.N. Faculty</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#071245] font-black shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#B87503]" />
              <span>canfitpro Approved (4 CECs)</span>
            </div>
          </div>
        </div>

        {/* ==============================================================
            4 SKEUOMORPHIC METRIC SHIELDS (Tactile, Crisp & Glowing)
            ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-14">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md hover:border-[#F6C915] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top Gold Accent Foil */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#B87503] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    {item.sublabel}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#071245] group-hover:bg-[#071245] group-hover:text-[#F6C915] transition-colors shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071245] group-hover:text-[#B87503] transition-colors leading-none tracking-tight mb-1.5">
                    {item.metric}
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#071245] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#8A5800] bg-amber-50/70 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            3 CURATED INSTITUTIONAL PILLARS (Elite Educational Feature Grid)
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {institutionalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between relative group hover:border-[#F6C915]/80 hover:shadow-md transition-all"
              >
                <div>
                  {/* Top Badge & Metric Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#B87503] bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      {pillar.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#071245] text-[#F6C915] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    {pillar.tag}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-black text-[#071245] leading-snug mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-bold text-[#B87503] mb-2.5">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points Checklist + Stat Highlight */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between pb-1.5 text-xs">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-wide">Key Standard</span>
                    <span className="inline-flex items-center gap-1 font-black text-[#071245] bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/80 text-[11px]">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#1B7A42]" />
                      {pillar.stat}
                    </span>
                  </div>

                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] sm:text-xs font-bold text-[#071245]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0 mt-0.5" />
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            INSTITUTIONAL TRUST COMPARISON BANNER (Rich Light Aesthetics)
            ============================================================== */}
        <div className="bg-gradient-to-br from-white via-slate-50/90 to-amber-50/30 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Canadian Heritage Mission (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#B87503] text-[11px] font-black uppercase tracking-wider border border-slate-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>The CSNN Toronto Distinction</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-[#071245] tracking-tight leading-tight">
                Teaching the Medicine of the Future™ Since 1994
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                While short automated online courses provide pre-recorded videos without instructor guidance, CSNN Toronto provides live academic mentorship with practicing Registered Holistic Nutritionists. You gain clinical scientific depth, direct live feedback, and a respected credential recognized across Canada.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#register"
                  className="btn-skeuo-gold h-11 px-6 rounded-full text-xs font-black text-[#071245] inline-flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Reserve Your Seat · Limited Cohort</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
                <span className="text-[11px] font-bold text-slate-500">
                  🍁 Official Canadian Educational Institution
                </span>
              </div>
            </div>

            {/* Right: Quick Advantage Matrix Box (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>How CSNN Toronto Compares</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">Verified Standard</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {comparisons.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-black text-[#071245]">{c.feature}:</span>{" "}
                      <span className="text-slate-600 font-medium">{c.csnn}</span>
                    </div>
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
