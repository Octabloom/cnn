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
  X,
  Landmark,
} from "lucide-react";

export function WhyCSNN() {
  const metrics = [
    {
      metric: "1994",
      sublabel: "ESTABLISHED",
      title: "Canada's 1st Holistic School",
      desc: "32 years of clinical academic leadership and recognized excellence.",
      icon: Landmark,
    },
    {
      metric: "100% Live",
      sublabel: "REAL-TIME",
      title: "Interactive Online Classes",
      desc: "Live Zoom video classrooms with dedicated real-time discussions & Q&A.",
      icon: Video,
    },
    {
      metric: "R.H.N.",
      sublabel: "FACULTY",
      title: "Registered Instructors",
      desc: "Taught exclusively by practicing Registered Holistic Nutritionists.",
      icon: GraduationCap,
    },
    {
      metric: "4 CECs",
      sublabel: "CREDENTIAL",
      title: "canfitpro Pre-Approved",
      desc: "Official Certificate of Completion & seamless diploma transfer credit.",
      icon: Award,
    },
  ];

  const institutionalPillars = [
    {
      badge: "CLINICAL FOUNDATION",
      title: "Evidence-Informed Holistic Science",
      description:
        "Unlike superficial online meal-plan tutorials, CSNN curricula bridge cellular biochemistry, digestive physiology, and whole-food therapeutics so you master the true science of how nutrition heals.",
      icon: BookOpenCheck,
      points: [
        "Cellular biochemistry & microbiome diversity without marketing dogma",
        "Scientific literacy to critically evaluate emerging health studies",
        "Root-cause symptomatology and practical whole-food meal formulation",
      ],
    },
    {
      badge: "LIVE MENTORSHIP",
      title: "Real Teachers, Small Cohorts, Real Discussion",
      description:
        "Never study alone in passive pre-recorded video silos. Every CSNN Toronto session is held live with Registered Holistic Nutritionists who actively address your individual questions in real-time.",
      icon: Users2,
      points: [
        "Live Q&A and personalized instructor feedback in every session",
        "Small cohort atmosphere with passionate, supportive peers",
        "Guided hands-on kitchen experiments and real whole-food pantry audits",
      ],
    },
    {
      badge: "ACCREDITED ADVANCEMENT",
      title: "canfitpro CECs & Seamless Diploma Pathway",
      description:
        "Earn 4 Continuing Education Credits (CECs) immediately upon completion, plus full tuition credit applicable toward CSNN’s flagship Natural Nutrition Diploma program.",
      icon: Award,
      points: [
        "Official CSNN Certificate of Completion upon finishing",
        "4 pre-approved canfitpro Continuing Education Credits",
        "100% tuition credit transferable into the full R.H.N. Diploma",
      ],
    },
  ];

  return (
    <section
      id="why-csnn"
      data-screen-label="09 Why CSNN"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 relative overflow-hidden border-t border-slate-200/80 text-[#071245]"
    >
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            SECTION HEADER: Trust Badges & Institutional Authority
            ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#071245] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200 shadow-2xs">
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
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between relative group hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#B87503] bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      {pillar.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#071245] text-[#F6C915] flex items-center justify-center shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-black text-[#071245] leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
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
            <div className="lg:col-span-7 space-y-3">
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
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100">
                How CSNN Toronto Compares
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-black text-[#071245]">100% Live Video Classrooms:</span>{" "}
                    <span className="text-slate-600 font-medium">Real-time discussions and Q&amp;A vs. static videos.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-black text-[#071245]">Registered Faculty (R.H.N.):</span>{" "}
                    <span className="text-slate-600 font-medium">Active clinicians vs. anonymous course creators.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-black text-[#071245]">Academic &amp; CEC Credibility:</span>{" "}
                    <span className="text-slate-600 font-medium">4 canfitpro CECs + Diploma transfer credit.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
