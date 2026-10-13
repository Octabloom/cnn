import React from "react";
import { Sparkles, Award, CheckCircle2, ArrowRight } from "lucide-react";

export function CertificatePathways() {
  return (
    <section
      id="certificate-pathways"
      data-screen-label="04 Certificate Pathways"
      className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certificate Options Breakdown: 2 Prestigious Diploma Cards */}
        <div className="p-5 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[36px] bg-[#071245] text-white border border-[#F6C915]/50 shadow-2xl relative overflow-hidden">
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-6 sm:mb-10 relative z-10">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#F6C915] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Certificate Pathways
            </span>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mt-1">
              Choose Your Level of Recognition
            </h3>
            <p className="text-xs sm:text-base text-white/80 mt-1.5 sm:mt-2 font-medium">
              Every student who participates earns formal recognition. Fitness professionals can also complete the short test for continuing education credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-10 relative z-10">
            
            {/* Certificate 1: Attendance */}
            <div className="p-5 sm:p-8 rounded-[20px] sm:rounded-[28px] bg-white/5 flex flex-col justify-between border border-white/15 hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-white">
                      Certificate of Attendance
                    </h4>
                    <span className="text-[11px] sm:text-xs text-[#FBECB0] font-bold">Standard Pathway</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                  Awarded upon completing all 10 workshops. Ideal for personal health, family nutrition planning, and lifestyle enrichment.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#F6C915] pt-3.5 border-t border-white/10">
                <CheckCircle2 className="w-4 h-4" />
                <span>Complete all 10 live workshops</span>
              </div>
            </div>

            {/* Certificate 2: Achievement */}
            <div className="p-5 sm:p-8 rounded-[20px] sm:rounded-[28px] bg-gradient-to-br from-[#1C389E]/40 to-[#0A1856]/80 border-2 border-[#F6C915] shadow-[0_0_35px_rgba(246,201,21,0.2)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-3.5 right-3.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                4 canfitpro CECs
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-[#F6C915]">
                      Certificate of Achievement
                    </h4>
                    <span className="text-[11px] sm:text-xs text-white/80 font-bold">Professional Upgrade</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4 sm:mb-6 font-normal">
                  All 10 workshops + a short multiple-choice assessment (75%+ passing score). Approved by canfitpro for 4 Continuing Education Credits.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-white pt-3.5 border-t border-[#F6C915]/30">
                <CheckCircle2 className="w-4 h-4 text-[#F6C915]" />
                <span>All 10 workshops + short test (75%+)</span>
              </div>
            </div>

          </div>

          {/* Action CTA with Shimmer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-4 sm:pt-6 border-t border-white/15 relative z-10">
            <span className="text-xs sm:text-sm text-white/80 font-semibold text-center sm:text-left">
              Registration is open now.
            </span>
            <a
              href="#register"
              className="btn-skeuo-gold animate-shimmer w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 sm:px-9 h-12 sm:h-14 rounded-full text-xs sm:text-sm font-black tracking-wide"
            >
              <span>Save my seat for all 10</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
