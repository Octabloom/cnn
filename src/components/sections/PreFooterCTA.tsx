import React from "react";
import { ArrowRight, Phone, ShieldCheck, Sparkles, CheckCircle2, Award, Calendar, Clock } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function PreFooterCTA() {
  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FBF4D8] via-[#FDF8E8] to-[#FAF2D4] relative overflow-hidden border-t border-[#EFE1AD]">
      {/* Background Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Ivory & Gold Glassmorphic Card (ZERO BLUE IN BACKGROUND) */}
        <div className="rounded-[22px] sm:rounded-[36px] bg-gradient-to-br from-[#FFFDF5] via-[#FFF9E6] to-[#FAF1D0] border-2 border-[#D4AF37] p-5 sm:p-10 lg:p-14 text-[#0F1F5C] shadow-[0_20px_50px_-10px_rgba(168,120,15,0.22),0_1px_0_rgba(255,255,255,1)] relative overflow-hidden">
          
          {/* Subtle Top Gold Highlight */}
          <div className="absolute inset-x-8 sm:inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />
          
          {/* Ambient Warm Golden Corners */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F6C915]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFE052]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            {/* Centered Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 text-[#8A6208] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4 border border-[#E8DEC0] shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
              <span>LIMITED INTAKE · OCTOBER 14, 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
              Ready to transform your health from the kitchen out?
            </h2>

            <p className="text-xs sm:text-base text-[#0F1F5C] max-w-2xl mx-auto font-medium leading-relaxed mb-5 sm:mb-7">
              Join certified lead nutritionist Rasha Abu Rabi, MSc., R.H.N. for 10 live online workshops. Earn your certificate and 4 canfitpro CECs.
            </p>

            {/* Schedule Highlights Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mb-6 sm:mb-8 text-[11px] sm:text-xs font-black text-[#13277A]">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8780F]" />
                <span>Starts {PROGRAM_INFO.startDate}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8780F]" />
                <span>{PROGRAM_INFO.scheduleTime}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-[#E8DEC0] shadow-xs">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8780F]" />
                <span>4 canfitpro CECs Approved</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
              <a
                href="#register"
                className="btn-skeuo-gold animate-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 h-12 sm:h-13 rounded-full text-xs sm:text-base font-black tracking-wide shadow-md"
              >
                <span>Reserve your seat now</span>
                <ArrowRight className="w-4 h-4 text-[#071245] stroke-[3]" />
              </a>

              <a
                href={`tel:${PROGRAM_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 h-12 sm:h-13 rounded-full bg-white hover:bg-white/80 border border-[#D4AF37] text-[#13277A] text-xs sm:text-sm font-black transition-all shadow-xs hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8780F]" />
                <span>Questions? Call {PROGRAM_INFO.phone}</span>
              </a>
            </div>

            {/* Reassurance Bullets */}
            <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 pt-4 sm:pt-5 border-t border-[#E8DEC0] text-[11px] sm:text-xs text-[#5B5440] font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A42]" />
                Zero prior prerequisites needed
              </span>
              <span className="hidden sm:inline text-[#D4A017]">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B7A42]" />
                No payment required today
              </span>
              <span className="hidden sm:inline text-[#D4A017]">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A8780F]" />
                Canadian School of Natural Nutrition Since 1994
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
