import React from "react";
import { RegistrationWizard } from "@/components/forms/RegistrationWizard";
import { Phone, Mail, Sparkles } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function FinalRegistration() {
  return (
    <section
      id="register"
      data-screen-label="10 Form 3 Intake"
      className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#071245] text-[#F6C915] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4 shadow-sm border border-[#F6C915]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REGISTER IN 30 SECONDS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071245] tracking-[-0.03em] leading-[1.05]">
            Join us today at CSNN Toronto
          </h2>

          <p className="mt-2 text-xs sm:text-base text-slate-600 font-semibold">
            4 quick steps. An admissions advisor confirms your seat and next steps.
          </p>

          {/* Contact Questions Helper */}
          <div className="flex items-center justify-center flex-wrap gap-3 mt-4 text-xs font-semibold text-slate-500">
            <span className="font-bold text-slate-700">Questions?</span>
            <a
              href={`tel:${PROGRAM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#071245] transition-all hover:scale-105 shadow-2xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87503]" />
              <span>{PROGRAM_INFO.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`mailto:${PROGRAM_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#071245] transition-all hover:scale-105 shadow-2xs font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-[#B87503]" />
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
