import React from "react";
import { RegistrationWizard } from "@/components/forms/RegistrationWizard";
import { Phone, Mail, Sparkles } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function FinalRegistration() {
  return (
    <section
      id="register"
      data-screen-label="10 Form 3 Intake"
      className="py-5 sm:py-8 lg:py-10 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Streamlined for Single Scroll Visibility */}
        <div className="text-center mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071245] text-[#F6C915] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1.5 shadow-xs border border-[#F6C915]/40 backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            <span>REGISTER IN 30 SECONDS</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#071245] tracking-tight leading-tight">
            Join us today at CSNN Toronto
          </h2>

          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mt-1.5 text-[11px] sm:text-xs text-slate-500 font-semibold">
            <span>4 quick steps · Admissions advisor confirms your seat</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href={`tel:${PROGRAM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 text-[#071245] font-bold hover:text-[#B87503] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B87503]" />
              <span>{PROGRAM_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href={`mailto:${PROGRAM_INFO.email}`}
              className="inline-flex items-center gap-1 text-[#071245] font-bold hover:text-[#B87503] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#B87503]" />
              <span>{PROGRAM_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Wizard Form Component */}
        <RegistrationWizard />

      </div>
    </section>
  );
}
