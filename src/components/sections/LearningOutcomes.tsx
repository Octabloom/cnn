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
      className="py-18 sm:py-24 bg-[#FDF6DC] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#13277A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-[#8A6208] text-xs font-black tracking-widest uppercase mb-4 border border-[#E8DEC0] shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>INTERACTIVE CURRICULUM EXPLORER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-tight mb-3">
            What You&apos;ll Learn Inside 10 Live Workshops
          </h2>

          <p className="text-sm sm:text-base text-[#5B5440] font-semibold max-w-2xl mx-auto">
            Click across the 4 core learning pillars below to explore how academic nutritional science translates directly into everyday kitchen confidence.
          </p>
        </div>

        {/* 4 Interactive Domain Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? "bg-white text-[#13277A] border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.25)] ring-2 ring-[#F6C915]/60 -translate-y-1"
                    : "bg-white/60 hover:bg-white text-[#5B5440] border-[#E8DEC0] hover:border-[#D4AF37]/50 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#13277A] text-[#F6C915]" : "bg-[#FAF1D0] text-[#8A6208]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#F6C915]/20 text-[#8A6208]" : "bg-black/5 text-[#8A6208]"
                    }`}
                  >
                    Pillar {pillar.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-xs sm:text-sm leading-tight text-[#13277A]">
                    {pillar.title}
                  </h3>
                  <span className="text-[10px] font-bold text-[#8A6208] block mt-0.5">
                    {pillar.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Showcase Card */}
        <div className="rounded-[36px] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EA] to-[#FAF1D2] border-2 border-[#E8DEC0] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(19,39,122,0.1),0_1px_0_rgba(255,255,255,1)] relative overflow-hidden transition-all duration-500">
          
          {/* Top Gold Accent */}
          <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Curriculum Breakdown & Before/After (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#13277A] text-[#F6C915] text-xs font-black flex items-center gap-1.5 shadow-xs">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>PILLAR {activePillar.number} · {activePillar.category}</span>
                </span>
                <span className="text-xs font-black text-[#8A6208]">
                  {activePillar.workshops.length} Live Workshops
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13277A] tracking-tight leading-tight">
                  {activePillar.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {activePillar.workshops.map((ws, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F1F5C] bg-white/90 px-2.5 py-1 rounded-lg border border-[#E8DEC0] shadow-2xs"
                    >
                      <BookOpen className="w-3 h-3 text-[#A8780F]" />
                      {ws}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before vs After Transformation Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Before */}
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#B91C1C] mb-1.5">
                    <XCircle className="w-4 h-4 text-[#B91C1C] shrink-0" />
                    <span>Before This Module:</span>
                  </div>
                  <p className="text-xs text-[#7F1D1D] font-medium leading-relaxed">
                    {activePillar.beforeStruggle}
                  </p>
                </div>

                {/* After HELC */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#15803D] mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>After HELC Mastery:</span>
                  </div>
                  <p className="text-xs text-[#14532D] font-bold leading-relaxed">
                    {activePillar.afterMastery}
                  </p>
                </div>
              </div>

              {/* Key Practical Skills Learned */}
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#A8780F] block">
                  Core Skills You Gain:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePillar.keySkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-bold text-[#13277A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* In Your Kitchen Tonight Action Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-white via-[#FFFDF5] to-white border-2 border-[#D4AF37] shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#13277A] to-[#0A1856] text-[#F6C915] flex items-center justify-center shrink-0 shadow-xs">
                  <ChefHat className="w-4 h-4 text-[#F6C915]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#A8780F] block">
                    In Your Kitchen Tonight:
                  </span>
                  <p className="text-xs font-black text-[#13277A] leading-relaxed">
                    {activePillar.kitchenExperiment}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Showcase & Outcome Snapshot (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white group">
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#13277A] text-xs font-black shadow-md backdrop-blur-md mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                    <span>Hands-on Clinical Application</span>
                  </span>
                  <p className="text-white text-xs font-bold drop-shadow-md">
                    Bridging evidence-based theory with delicious culinary practice.
                  </p>
                </div>
              </div>

              {/* Enrollment Trigger */}
              <div className="w-full mt-4 flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#A8780F]" />
                  <span className="text-xs font-black text-[#13277A]">4 canfitpro CECs Approved</span>
                </div>
                <a
                  href="#register"
                  className="inline-flex items-center gap-1 text-xs font-black text-[#A8780F] hover:text-[#13277A] transition-colors"
                >
                  <span>Register for Oct 14</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 4-Item Program Summary Matrix */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DEC0] text-center shadow-xs">
            <span className="text-lg font-black text-[#13277A] block">10 Workshops</span>
            <span className="text-[11px] font-bold text-[#8A6208]">Comprehensive Holistic Scope</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DEC0] text-center shadow-xs">
            <span className="text-lg font-black text-[#13277A] block">21 Total Hours</span>
            <span className="text-[11px] font-bold text-[#8A6208]">Live Interactive Dialogue</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DEC0] text-center shadow-xs">
            <span className="text-lg font-black text-[#13277A] block">4 canfitpro CECs</span>
            <span className="text-[11px] font-bold text-[#8A6208]">Accredited Continuing Ed</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DEC0] text-center shadow-xs">
            <span className="text-lg font-black text-[#13277A] block">Since 1994</span>
            <span className="text-[11px] font-bold text-[#8A6208]">Canada&apos;s Nutrition Pioneer</span>
          </div>
        </div>

      </div>
    </section>
  );
}
