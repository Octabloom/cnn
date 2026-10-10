import React from "react";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { STUDENT_TESTIMONIAL } from "@/data/programData";
import { Star, Quote, Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export function TestimonialSection() {
  const studentKeyTakeaways = [
    "Connected nutrition theory to real family grocery shopping",
    "Gained confidence preparing delicious whole-food meals",
    "Demystified confusing food trends and conflicting online diet fads",
  ];

  return (
    <section
      id="testimonial"
      data-screen-label="08 Testimonial"
      className="py-18 sm:py-24 bg-[#FBF4D8] border-b border-[#EFE1AD] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#F6C915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#13277A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Eyebrow & Prominent Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-[#8A6208] text-xs font-black tracking-widest uppercase mb-4 border border-[#E8DEC0] shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
            <span>AUTHENTIC GRADUATE REVIEW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13277A] tracking-[-0.03em] leading-tight mb-3">
            HEAR DIRECTLY FROM OUR HELC STUDENT
          </h2>

          <p className="text-sm sm:text-base text-[#5B5440] font-semibold max-w-2xl mx-auto">
            Shiva shares how 10 live workshops transformed over a decade of healthy eating knowledge into practical, everyday kitchen habits.
          </p>
        </div>

        {/* Integrated Luxury Editorial Graduate Spotlight Card */}
        <div className="rounded-[36px] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EA] to-[#FAF1D2] border-2 border-[#E8DEC0] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(19,39,122,0.1),0_1px_0_rgba(255,255,255,1)] relative overflow-hidden">
          
          {/* Subtle Top Gold Highlight */}
          <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F6C915] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Student Narrative & Verified Outcomes (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              
              {/* Rating & Verified Seal */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-[#E8DEC0]">
                <div className="flex items-center gap-1.5 text-[#F6C915]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F6C915] drop-shadow-xs" />
                  ))}
                  <span className="ml-2 text-xs font-black text-[#13277A]">5.0 / 5.0 Star Rating</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#13277A] text-[#F6C915] text-[11px] font-black shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified CSNN Graduate</span>
                </div>
              </div>

              {/* Main Pull Quote */}
              <div className="relative pl-1">
                <Quote className="w-10 h-10 text-[#F6C915]/40 absolute -top-4 -left-2 -z-0" />
                <p className="text-lg sm:text-xl lg:text-2xl text-[#13277A] font-black leading-snug relative z-10 mb-3 tracking-tight">
                  &ldquo;{STUDENT_TESTIMONIAL.quoteParagraph1}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-[#4A4230] font-semibold leading-relaxed">
                  {STUDENT_TESTIMONIAL.quoteParagraph2}
                </p>
              </div>

              {/* Verified Takeaways List */}
              <div className="p-4 rounded-2xl bg-white/90 border border-[#E8DEC0] shadow-xs space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#A8780F] block">
                  Shiva&apos;s Core Program Breakthroughs:
                </span>
                {studentKeyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#13277A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1B7A42] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Student Bio Tag */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F6C915] shadow-xs bg-white">
                  <Image
                    src={STUDENT_TESTIMONIAL.posterSrc}
                    alt={STUDENT_TESTIMONIAL.studentName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-black text-lg text-[#13277A] leading-tight">
                    {STUDENT_TESTIMONIAL.studentName}
                  </h3>
                  <p className="text-xs text-[#8A6208] font-bold">
                    {STUDENT_TESTIMONIAL.studentRole}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Video Testimonial Player (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[290px]">
                <VideoPlayer
                  src={STUDENT_TESTIMONIAL.videoSrc}
                  poster={STUDENT_TESTIMONIAL.posterSrc}
                  alt="Shiva student testimonial video CSNN Toronto"
                  aspectRatio="9/16"
                  label="Play Shiva's Review (46s)"
                />
              </div>

              <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-black text-[#8A6208]">
                <Sparkles className="w-3.5 h-3.5 text-[#F6C915]" />
                <span>46 seconds · Unrehearsed student reflection</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
