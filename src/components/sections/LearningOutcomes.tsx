"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  HeartPulse,
  Utensils,
  Shield,
  ChefHat,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
} from "lucide-react";

interface CurriculumPillar {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  workshops: string[];
  beforeStruggle: string;
  afterMastery: string;
  keySkills: string[];
  kitchenExperiment: string;
}

export function LearningOutcomes() {
  const [activePillarId, setActivePillarId] = useState<string>("gut");

  const pillars: CurriculumPillar[] = [
    {
      id: "gut",
      number: "01",
      title: "Digestion & Microbiome Science",
      category: "FOUNDATION",
      icon: HeartPulse,
      image: "/images/ws-01-gut.jpg",
      workshops: ["Workshop 01: Proper Digestion & Gut Health", "Workshop 06: Natural Cleansing & Detox"],
      beforeStruggle: "Enduring chronic bloating, acid reflux, or guessing which expensive probiotics actually work.",
      afterMastery: "A deep clinical understanding of stomach acid, digestive enzymes, prebiotic fibers, and gut bacteria diversity.",
      keySkills: [
        "GI tract anatomy from stomach enzymes to colonic flora",
        "Prebiotic fibers vs. live probiotic food sources",
        "Home fermentation mechanics (kombucha, kefir, sauerkraut)",
        "Supporting natural liver detoxification pathways gently",
      ],
      kitchenExperiment: "Audit common gut-irritating thickeners in your fridge and assemble an enzyme-rich whole-food meal bowl.",
    },
    {
      id: "macros",
      number: "02",
      title: "Cellular Energy & Macronutrients",
      category: "METABOLISM",
      icon: Utensils,
      image: "/images/ws-02-carbs.jpg",
      workshops: ["Workshop 02: Good Carbs vs. Bad Carbs", "Workshop 03: Protein Essentials", "Workshop 04: Demystifying Fats"],
      beforeStruggle: "Afternoon 3 PM energy crashes, fear of fats, and falling for marketing labels that hide refined sugars.",
      afterMastery: "Steady cellular energy all day by pairing complex carbohydrates, quality bioavailable proteins, and anti-inflammatory lipids.",
      keySkills: [
        "Decoding hidden sugars, glycemic load & fiber buffering",
        "Plant vs. animal protein bioavailability and complete amino acids",
        "Omega-3 vs. Omega-6 balance and safe cooking smoke points",
        "Building metabolic flexibility without restrictive calorie counting",
      ],
      kitchenExperiment: "Perform a cooking oil audit: replace inflammatory refined seed oils with cold-pressed olive or avocado oils.",
    },
    {
      id: "immunity",
      number: "03",
      title: "Immunity & Rainbow Phytonutrients",
      category: "CELLULAR DEFENSE",
      icon: Shield,
      image: "/images/ws-08-immunity.jpg",
      workshops: ["Workshop 05: Vitamins & Minerals", "Workshop 07: Eating the Rainbow", "Workshop 08: Immunity with Whole Foods"],
      beforeStruggle: "Catching seasonal colds, relying on synthetic multivitamin pills, and eating dull monochrome meals.",
      afterMastery: "Harnessing the biochemical synergy of plant color pigments, antioxidant networks, and immune-supportive micronutrients.",
      keySkills: [
        "Phytonutrients: carotenoids, polyphenols, anthocyanins",
        "Zinc, Vitamin C, D, and immune system activation",
        "Anti-inflammatory spice blending (turmeric, ginger, garlic)",
        "Building a natural whole-food defense system year-round",
      ],
      kitchenExperiment: "Craft a vibrant 5-color whole-food rainbow lunch plate packed with diverse cellular antioxidants.",
    },
    {
      id: "kitchen",
      number: "04",
      title: "Whole-Food Kitchen & Mindset",
      category: "PRACTICAL MASTERY",
      icon: ChefHat,
      image: "/images/ws-09-kitchen.jpg",
      workshops: ["Workshop 09: Whole Foods Kitchen 101", "Workshop 10: Stress, Mindset & Nutrition"],
      beforeStruggle: "Overwhelmed when grocery shopping, wasting money on spoilage, and emotional eating under chronic work stress.",
      afterMastery: "A streamlined pantry system, fast 20-minute batch prep, and mindful stress-management eating routines.",
      keySkills: [
        "Pantry organization, bulk purchasing & budget-friendly meal prep",
        "Evaluating cookware safety (non-stick vs. stainless vs. cast iron)",
        "How chronic cortisol shuts down digestion and triggers cravings",
        "Sustainable mindset habits to become your own nutrition coach",
      ],
      kitchenExperiment: "Restructure your pantry with clear glass jars and create an emergency 15-minute whole-food dinner template.",
    },
  ];

  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];
  const ActiveIcon = activePillar.icon;

  return (
    <section
      id="curriculum-overview"
      data-screen-label="03 What you'll learn"
      className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>INTERACTIVE CURRICULUM EXPLORER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
            What You&apos;ll Learn Inside 10 Live Workshops
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Click across the 4 core learning pillars below to explore how academic nutritional science translates directly into everyday kitchen confidence.
          </p>
        </div>

        {/* 4 Interactive Domain Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 mb-6 sm:mb-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? "bg-white text-[#071245] border-[#071245] shadow-md ring-2 ring-[#071245]/15 -translate-y-0.5"
                    : "bg-slate-50/80 hover:bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#071245] text-[#F6C915]" : "bg-white text-[#071245] border border-slate-200 shadow-2xs"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#FEF9C3] text-[#854D0E]" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    Pillar {pillar.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-[11px] sm:text-sm leading-tight text-[#071245] line-clamp-2">
                    {pillar.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#B87503] block mt-0.5">
                    {pillar.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Showcase Card */}
        <div className="rounded-[22px] sm:rounded-[36px] bg-slate-50/80 border border-slate-200/90 p-4 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden transition-all duration-500">
          
          {/* Top Gold Accent */}
          <div className="absolute inset-x-8 sm:inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Curriculum Breakdown & Before/After (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-[#071245] text-[#F6C915] text-[11px] sm:text-xs font-black flex items-center gap-1.5 shadow-2xs">
                  <ActiveIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>PILLAR {activePillar.number} · {activePillar.category}</span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#B87503]">
                  {activePillar.workshops.length} Live Workshops
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#071245] tracking-tight leading-tight">
                  {activePillar.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {activePillar.workshops.map((ws, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#071245] bg-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#B87503]" />
                      {ws}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before vs After Transformation Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* Before */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50/80 border border-red-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black text-[#B91C1C] mb-1">
                    <XCircle className="w-3.5 h-3.5 text-[#B91C1C] shrink-0" />
                    <span>Before This Module:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-red-950 font-medium leading-relaxed">
                    {activePillar.beforeStruggle}
                  </p>
                </div>

                {/* After HELC */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black text-[#15803D] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                    <span>After HELC Mastery:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-emerald-950 font-bold leading-relaxed">
                    {activePillar.afterMastery}
                  </p>
                </div>
              </div>

              {/* Key Practical Skills Learned */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  Core Skills You Gain:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {activePillar.keySkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#071245]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* In Your Kitchen Tonight Action Box */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#071245] text-[#F6C915] flex items-center justify-center shrink-0 shadow-2xs">
                  <ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F6C915]" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#B87503] block">
                    In Your Kitchen Tonight:
                  </span>
                  <p className="text-[11px] sm:text-xs font-black text-[#071245] leading-relaxed">
                    {activePillar.kitchenExperiment}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Showcase & Outcome Snapshot (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative h-48 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-white group">
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Floating Badge on Photo */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 text-[#071245] text-[10px] sm:text-xs font-black shadow-md backdrop-blur-md mb-1">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F6C915]" />
                    <span>Hands-on Clinical Application</span>
                  </span>
                  <p className="text-white text-[11px] sm:text-xs font-bold drop-shadow-md">
                    Bridging evidence-based theory with delicious culinary practice.
                  </p>
                </div>
              </div>

              {/* Enrollment Trigger */}
              <div className="w-full mt-3 sm:mt-4 flex items-center justify-between gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B87503]" />
                  <span className="text-[11px] sm:text-xs font-black text-[#071245]">4 canfitpro CECs Approved</span>
                </div>
                <a
                  href="#register"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-[#B87503] hover:text-[#071245] transition-colors"
                >
                  <span>Register for Oct 28</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 4-Item Program Summary Matrix */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/90 text-center shadow-2xs">
            <span className="text-base sm:text-lg font-black text-[#071245] block">10 Workshops</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Comprehensive Scope</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/90 text-center shadow-2xs">
            <span className="text-base sm:text-lg font-black text-[#071245] block">21 Total Hours</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Live Interactive</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/90 text-center shadow-2xs">
            <span className="text-base sm:text-lg font-black text-[#071245] block">4 canfitpro CECs</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Accredited CECs</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/90 text-center shadow-2xs">
            <span className="text-base sm:text-lg font-black text-[#071245] block">Since 1994</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Canada&apos;s Nutrition Pioneer</span>
          </div>
        </div>

      </div>
    </section>
  );
}
