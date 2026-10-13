import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";

export function WhyCSNN() {
  const proofPoints = [
    { value: "1994", label: "CSNN Founded", desc: "Teaching Medicine of the Future™" },
    { value: "R.H.N.", label: "Certified Instructor", desc: "Registered Holistic Nutritionist" },
    { value: "4 CECs", label: "canfitpro Approved", desc: "Achievement Certificate" },
    { value: "100% Live", label: "Interactive Online", desc: "Real discussions & Q&A" },
  ];

  return (
    <section
      id="why-csnn"
      data-screen-label="09 Why CSNN"
      className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 relative overflow-hidden border-t border-slate-200/80 text-[#071245]"
    >
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Clean Header & Trust Strip */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 pb-5 border-b border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#071245] text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-2.5 border border-slate-200 shadow-2xs">
            <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-[#F6C915]">
              <Image src="/assets/logo.jpg" alt="CSNN" fill sizes="14px" className="object-contain" />
            </div>
            <span>WHY CSNN TORONTO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-tight">
            Canada’s pioneer in holistic nutrition education since 1994
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-3 text-xs sm:text-sm text-slate-600 font-medium">
            <span>Teaching the Medicine of the Future™ · Live online with registered faculty</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/90 border border-amber-200/90 text-xs font-bold text-[#8A5800] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B87503]" />
              <span>32 years</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#071245]" />
              <span>Accredited Faculty</span>
            </div>
          </div>
        </div>

        {/* 4 Proof Metric Cards - Clean, Light & Highly Attractive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="bg-white py-4 px-3 sm:py-5 sm:px-4 rounded-2xl flex flex-col items-center text-center border border-slate-200/90 hover:border-[#F6C915] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Gold Accent Line */}
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071245] group-hover:text-[#B87503] transition-colors leading-none mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-[13px] font-black text-[#071245] leading-tight">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium leading-tight">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Institutional Heritage Callout (Simple, Clean & Attractive without Steps Cards) */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/30 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs relative overflow-hidden max-w-4xl mx-auto mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#B87503]">
                <Sparkles className="w-3.5 h-3.5 text-[#B87503]" />
                <span>Canada’s Gold Standard in Natural Nutrition</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Founded in 1994, CSNN is Canada’s first and leading school dedicated exclusively to holistic nutrition education. Our Healthy Eating &amp; Lifestyle Certificate (HELC) offers a practical, science-informed foundation taught live online by Registered Holistic Nutritionists.
              </p>
            </div>

            <a
              href="#register"
              className="btn-skeuo-gold shrink-0 h-10 px-5 rounded-full text-xs font-black text-[#071245] inline-flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Reserve Your Seat</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3] text-[#071245]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
