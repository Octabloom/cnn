import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award } from "lucide-react";

export function AboutProgram() {
  return (
    <section
      id="about"
      data-screen-label="02 What is HELC"
      className="py-8 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FDF8E8] via-[#FAF3D8] to-[#FDF8E8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#13277A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Eyebrow & Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 text-[#8A6208] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4 border border-[#EFE1AD] shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>PRACTICAL HOLISTIC NUTRITION EDUCATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-[1.08] sm:leading-[1.05]">
            What is the Healthy Eating &amp; Lifestyle Certificate?
          </h2>

          <div className="text-lg sm:text-2xl font-black mt-1.5 sm:mt-2">
            <span className="gold-foil-text">Real knowledge. Real results.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Trust Culinary Masterclass Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/4.5] sm:aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(19,39,122,0.18)] border-2 border-[#D4AF37]/50 group bg-[#0A1856]">
              {/* Premium Image */}
              <Image
                src="/images/nutrition-masterclass.jpg"
                alt="Holistic nutrition culinary masterclass fresh whole foods"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071245]/90 via-[#071245]/20 to-black/25 pointer-events-none" />

              {/* Top Trust Badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#13277A] text-[11px] font-black shadow-md border border-[#F6C915]/40 backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A8780F]" />
                  <span>CSNN Toronto Certified</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#13277A]/80 text-[#F6C915] text-[10px] font-black border border-[#F6C915]/30 backdrop-blur-md">
                  <span>Since 1994</span>
                </div>
              </div>

              {/* Bottom Institutional Card */}
              <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-card-dark border border-white/20 text-white backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-[#F6C915] mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>EVIDENCE-BASED WHOLE FOOD EDUCATION</span>
                </div>
                <p className="text-[11px] text-white/90 font-medium leading-relaxed">
                  Learn directly with lead nutritionist Rasha Abu Rabi, BSc., MSc., R.H.N. in interactive, live virtual sessions.
                </p>
                <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-bold text-white/80">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#F6C915]" />
                    Real-time Q&amp;A
                  </span>
                  <span>4 canfitpro CECs Approved</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs font-extrabold text-[#8A6208]">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
              <span>Interactive holistic nutrition masterclass series</span>
            </div>
          </div>

          {/* Right Column: Program Concept & Outcomes (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            <p className="text-sm sm:text-base lg:text-lg text-[#0F1F5C] leading-relaxed font-medium">
              The Healthy Eating &amp; Lifestyle Certificate (HELC) covers the core foundational
              pillars of natural nutrition and healthy living. Taught by certified experts, you will
              explore digestion, gut microbiome balance, whole-food energy, and sustainable lifestyle practices.
            </p>

            {/* 3 Metric Podiums (3-col compact row on both mobile and desktop) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
              <div className="glass-card-light p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-transform duration-200">
                <span className="text-2xl sm:text-4xl font-black text-[#13277A] drop-shadow-sm">10</span>
                <span className="text-xs sm:text-sm font-black text-[#0F1F5C] mt-0.5 sm:mt-1">Workshops</span>
                <span className="hidden sm:block text-xs text-[#5B5440] font-semibold">Practical curriculum</span>
              </div>

              <div className="glass-card-light p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-transform duration-200">
                <span className="text-2xl sm:text-4xl font-black text-[#13277A] drop-shadow-sm">21</span>
                <span className="text-xs sm:text-sm font-black text-[#0F1F5C] mt-0.5 sm:mt-1">Hours Live</span>
                <span className="hidden sm:block text-xs text-[#5B5440] font-semibold">Real-time coaching</span>
              </div>

              <div className="glass-card-light p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-transform duration-200">
                <span className="text-2xl sm:text-4xl font-black text-[#13277A] drop-shadow-sm">4</span>
                <span className="text-xs sm:text-sm font-black text-[#0F1F5C] mt-0.5 sm:mt-1">CECs</span>
                <span className="hidden sm:block text-xs text-[#5B5440] font-semibold">canfitpro approved</span>
              </div>
            </div>

            {/* Tactile 3D Action Button */}
            <div className="pt-2 sm:pt-3">
              <a
                href="#register"
                className="btn-skeuo-primary animate-shimmer inline-flex items-center gap-2.5 px-6 sm:px-9 h-11 sm:h-14 rounded-full text-xs sm:text-base font-black tracking-wide"
              >
                <span>Reserve your seat now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6C915]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
