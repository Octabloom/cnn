import React from "react";
import Image from "next/image";
import { INSTRUCTOR } from "@/data/programData";
import { Sparkles } from "lucide-react";

export function InstructorBio() {
  return (
    <section
      id="instructor"
      data-screen-label="07 Instructor"
      className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6C915]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#071245]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B87503] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 border border-slate-200 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>MEET YOUR INSTRUCTOR</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-[1.05]">
            Rasha Abu Rabi, BSc., MSc., R.H.N.
          </h2>

          <p className="mt-2.5 text-base sm:text-xl font-black text-[#B87503]">
            Lead Instructor &amp; Registered Holistic Nutritionist
          </p>

          <p className="mt-1.5 text-xs sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Scientist, public health specialist, and certified CSNN nutritionist guiding you through 10 interactive live workshops.
          </p>
        </div>

        {/* Instructor Skeuomorphic Profile Plaque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-5 sm:p-8 lg:p-10 rounded-[22px] sm:rounded-[32px] bg-gradient-to-b from-white via-[#FCFDFE] to-[#F8FAFC] border border-slate-200/90 shadow-[inset_0_2px_0_#FFFFFF,inset_0_-2px_0_rgba(15,23,42,0.03),0_15px_40px_-10px_rgba(7,18,69,0.08)]">
          {/* Portrait (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[210px] sm:max-w-[280px] aspect-[4/5] rounded-2xl sm:rounded-[28px] overflow-hidden shadow-[0_12px_28px_-6px_rgba(7,18,69,0.25),inset_0_1px_1px_rgba(255,255,255,0.8)] border-4 border-white bg-[#071245] group">
              <Image
                src="/assets/rasha-portrait.jpg"
                alt="Rasha Abu Rabi, Lead Instructor at CSNN Toronto"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071245]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#F6C915] block">
                  Lead Instructor
                </span>
                <span className="text-base sm:text-xl font-black block leading-tight">
                  Rasha Abu Rabi
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-bold">
                  BSc., MSc., R.H.N.
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Credentials (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3.5 sm:gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-[#071245] text-[#F6C915] text-[11px] sm:text-xs font-black w-fit shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.15)]">
              <Sparkles className="w-3 h-3" />
              <span>Evidence-Informed Practical Guidance</span>
            </div>

            <h3 className="text-base sm:text-xl lg:text-2xl font-black text-[#071245] leading-snug">
              &ldquo;I do not believe in good and bad food, but in sustainable, healthy daily practices.&rdquo;
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Rasha combines medical roots, rigorous public health research, and holistic clinical nutrition to empower you with tools you can use in your kitchen right away. Her focus spans digestive wellness, microbiome balance, and lifestyle harmony.
            </p>

            {/* Credential Badges Row */}
            <div className="pt-1.5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {INSTRUCTOR.credentials.map((cred) => (
                <div
                  key={cred}
                  className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-white to-[#F1F5F9] border border-slate-200/90 text-center text-[10px] sm:text-[11px] font-black text-[#071245] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-white hover:-translate-y-0.5 transition-all"
                >
                  {cred}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
