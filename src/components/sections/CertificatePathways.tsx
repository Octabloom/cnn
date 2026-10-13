import React from "react";
import { Sparkles, Award, CheckCircle2, ArrowRight, Check } from "lucide-react";

export function CertificatePathways() {
  return (
    <section
      id="certificate-pathways"
      data-screen-label="04 Certificate Pathways"
      className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Certificate Options Breakdown: 2 Prestigious Skeuomorphic Diploma Cards */}
        <div className="p-5 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[36px] bg-gradient-to-b from-[#09154C] via-[#071245] to-[#040A28] text-white border border-[#F6C915]/60 shadow-[inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.6),0_25px_60px_-15px_rgba(7,18,69,0.5)] relative overflow-hidden">
          
          {/* Ambient Gold Radial Corner Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Specular Top Edge Line */}
          <div className="absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

          <div className="max-w-3xl mb-6 sm:mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F6C915] border border-[#F6C915]/30 text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certificate Pathways</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Choose Your Level of Recognition
            </h3>
            <p className="text-xs sm:text-base text-white/85 mt-1.5 sm:mt-2 font-medium">
              Every student who participates earns formal recognition. Fitness professionals can also complete the short test for continuing education credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-10 relative z-10">
            
            {/* Certificate 1: Attendance (Skeuomorphic Frosted Acrylic Plaque) */}
            <div className="p-5 sm:p-8 rounded-[22px] sm:rounded-[30px] bg-gradient-to-b from-white/10 via-white/[0.05] to-white/[0.02] flex flex-col justify-between border border-white/20 hover:border-white/40 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.3),inset_0_-1.5px_0_rgba(0,0,0,0.5),0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                  {/* 3D Gold Medal Plaque */}
                  <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-md group-hover:scale-105 transition-transform">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[14px] bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),inset_0_-1.5px_1px_rgba(160,110,10,0.6)]">
                      <Award className="w-6 h-6 drop-shadow-xs" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight drop-shadow-xs">
                      Certificate of Attendance
                    </h4>
                    <span className="text-[11px] sm:text-xs text-[#FBECB0] font-bold">Standard Pathway</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                  Awarded upon completing all 10 workshops. Ideal for personal health, family nutrition planning, and lifestyle enrichment.
                </p>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-black text-[#F6C915] pt-3.5 border-t border-white/10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 text-[#071245] flex items-center justify-center shadow-[inset_0_1px_0_#FFFFFF,0_2px_4px_rgba(0,0,0,0.3)]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Complete all 10 live workshops</span>
              </div>
            </div>

            {/* Certificate 2: Achievement (24K Gold Crown Skeuomorphic Plaque) */}
            <div className="p-5 sm:p-8 rounded-[22px] sm:rounded-[30px] bg-gradient-to-br from-[#1C389E]/60 via-[#0C1B58]/90 to-[#040924] border-2 border-[#F6C915] shadow-[inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.7),0_0_40px_rgba(246,201,21,0.25),0_15px_35px_rgba(0,0,0,0.45)] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              
              {/* CEC Badge with 3D Specular Gold Foil */}
              <div className="absolute top-3.5 right-3.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] text-[#071245] px-3 py-1 rounded-full shadow-[inset_0_1px_0_#FFFFFF,0_2px_8px_rgba(0,0,0,0.3)]">
                4 canfitpro CECs
              </div>

              <div>
                <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                  {/* 3D Gold Medal Plaque */}
                  <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-md group-hover:scale-105 transition-transform">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[14px] bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),inset_0_-1.5px_1px_rgba(160,110,10,0.6)]">
                      <Award className="w-6 h-6 drop-shadow-xs" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-2xl font-black text-[#F6C915] tracking-tight drop-shadow-xs">
                      Certificate of Achievement
                    </h4>
                    <span className="text-[11px] sm:text-xs text-white/90 font-bold">Professional Upgrade</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4 sm:mb-6 font-normal">
                  All 10 workshops + a short multiple-choice assessment (75%+ passing score). Approved by canfitpro for 4 Continuing Education Credits.
                </p>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-black text-white pt-3.5 border-t border-[#F6C915]/30">
                <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#FFEAA0] to-[#DEAB07] text-[#071245] flex items-center justify-center shadow-[inset_0_1px_0_#FFFFFF,0_2px_4px_rgba(0,0,0,0.3)]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
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
