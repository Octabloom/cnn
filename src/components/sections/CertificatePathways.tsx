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
        <div className="p-3.5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[36px] bg-gradient-to-b from-[#09154C] via-[#071245] to-[#040A28] text-white border border-white/15 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-2px_0_rgba(0,0,0,0.6),0_25px_60px_-15px_rgba(7,18,69,0.5)] relative overflow-hidden">
          
          {/* Ambient Gold Radial Corner Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-4 sm:mb-8 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-[#F6C915] border border-white/15 text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] mb-1.5 sm:mb-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Certificate Pathways</span>
            </div>
            <h3 className="text-lg sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight">
              Get Recognised for Your Learning
            </h3>
            <p className="text-xs sm:text-base text-white/85 mt-1 sm:mt-2 font-medium leading-relaxed">
              All students receive formal recognition for their participation. A brief exam is available to fitness professionals that will allow them to earn continuing education credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8 relative z-10">
            
            {/* Certificate 1: Attendance (Skeuomorphic Frosted Acrylic Plaque - Compact Mobile) */}
            <div className="p-3.5 sm:p-7 rounded-xl sm:rounded-[28px] bg-gradient-to-b from-white/10 via-white/[0.05] to-white/[0.02] flex flex-col justify-between border border-white/20 hover:border-white/40 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.3),inset_0_-1.5px_0_rgba(0,0,0,0.5),0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-4">
                  {/* 3D Gold Medal Plaque */}
                  <div className="p-[1.5px] sm:p-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-xs shrink-0">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                      <Award className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow-xs" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-xl lg:text-2xl font-black text-white tracking-tight drop-shadow-xs leading-tight">
                      Certificate of Attendance
                    </h4>
                    <span className="text-[10px] sm:text-xs text-[#FBECB0] font-bold block mt-0.5">Your Learning Recognition</span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-sm text-white/80 leading-normal sm:leading-relaxed mb-3 sm:mb-5 font-normal">
                  Get a certificate when completing all 10 workshops and build practical knowledge to help support healthier habits at home and in daily life.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-black text-[#F6C915] pt-2.5 sm:pt-3.5 border-t border-white/10">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 text-[#071245] flex items-center justify-center shadow-[inset_0_1px_0_#FFFFFF,0_2px_4px_rgba(0,0,0,0.3)] shrink-0">
                  <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                </div>
                <span>Complete all 10 live workshops</span>
              </div>
            </div>

            {/* Certificate 2: Achievement (24K Gold Crown Skeuomorphic Plaque - No Mobile Overlap) */}
            <div className="p-3.5 sm:p-7 rounded-xl sm:rounded-[28px] bg-gradient-to-br from-[#1C389E]/60 via-[#0C1B58]/90 to-[#040924] border border-white/25 shadow-[inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.7),0_15px_35px_rgba(0,0,0,0.45)] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              
              <div>
                {/* Header Row with Icon, Title, and Responsive Badge */}
                <div className="flex items-start justify-between gap-2 mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    {/* 3D Gold Medal Plaque */}
                    <div className="p-[1.5px] sm:p-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] shadow-xs shrink-0">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-gradient-to-b from-[#FFE46B] to-[#DEAB07] text-[#071245] flex items-center justify-center font-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                        <Award className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow-xs" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-xl lg:text-2xl font-black text-[#F6C915] tracking-tight drop-shadow-xs leading-tight">
                        Certificate of Achievement
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-[10px] sm:text-xs text-white/90 font-bold">Advance Your Professional Learning</span>
                        <span className="text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider bg-gradient-to-b from-[#FFEAA0] via-[#F6C915] to-[#B87503] text-[#071245] px-2 py-0.5 rounded-full shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.3)] shrink-0">
                          4 canfitpro CECs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-sm text-white/90 leading-normal sm:leading-relaxed mb-3 sm:mb-5 font-normal">
                  Expand learning by attending all 10 workshops and achieving a passing grade on a multiple-choice exam of 75%.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-black text-white pt-2.5 sm:pt-3.5 border-t border-[#F6C915]/30">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-[#FFEAA0] to-[#DEAB07] text-[#071245] flex items-center justify-center shadow-[inset_0_1px_0_#FFFFFF,0_2px_4px_rgba(0,0,0,0.3)] shrink-0">
                  <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                </div>
                <span>Complete all 10 workshops + pass the assessment (75%+)</span>
              </div>
            </div>

          </div>

          {/* Action CTA with Shimmer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 sm:pt-6 border-t border-white/15 relative z-10">
            <span className="text-[11px] sm:text-sm text-white/80 font-semibold text-center sm:text-left">
              Registration is open now.
            </span>
            <a
              href="#register"
              className="btn-skeuo-gold animate-shimmer w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 sm:px-9 h-11 sm:h-14 rounded-full text-xs sm:text-sm font-black tracking-wide"
            >
              <span>Save my seat for all 10</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
