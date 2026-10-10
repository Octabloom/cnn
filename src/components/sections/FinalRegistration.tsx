import React from "react";
import { RegistrationWizard } from "@/components/forms/RegistrationWizard";
import { Phone, Mail, Sparkles } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function FinalRegistration() {
  return (
    <section
      id="register"
      data-screen-label="10 Form 3 Intake"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#FDF8E8] via-[#FAF3D8] to-[#F7EBB8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-b from-[#1C389E] to-[#0A1856] text-[#F6C915] text-xs font-black tracking-widest uppercase mb-4 shadow-[0_4px_16px_rgba(19,39,122,0.3)] border border-[#F6C915]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REGISTER IN 30 SECONDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-[1.05]">
            Join us today at CSNN Toronto
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#0F1F5C] font-black">
            4 quick steps. An admissions advisor confirms your seat and next steps.
          </p>

          {/* Contact Questions Helper */}
          <div className="flex items-center justify-center flex-wrap gap-3 mt-4 text-xs font-bold text-[#8A6208]">
            <span className="font-extrabold text-[#5B5440]">Questions?</span>
            <a
              href={`tel:${PROGRAM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card-light text-[#13277A] hover:text-[#0B1A5A] transition-transform hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8780F]" />
              <span>{PROGRAM_INFO.phone}</span>
            </a>
            <span className="text-[#A8780F]/40">•</span>
            <a
              href={`mailto:${PROGRAM_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card-light text-[#13277A] hover:text-[#0B1A5A] transition-transform hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5 text-[#A8780F]" />
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
