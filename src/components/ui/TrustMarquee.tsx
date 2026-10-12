import React from "react";
import { ShieldCheck, Award, Video, Clock, GraduationCap, Calendar } from "lucide-react";

export function TrustMarquee() {
  const shortTrustItems = [
    {
      icon: ShieldCheck,
      text: "CSNN Toronto · Founded 1994",
    },
    {
      icon: Award,
      text: "4 canfitpro CECs Approved",
    },
    {
      icon: Video,
      text: "10 Live Online Workshops",
    },
    {
      icon: Clock,
      text: "21 Hours Interactive Learning",
    },
    {
      icon: GraduationCap,
      text: "Lead Instructor Rasha Abu Rabi, MSc., R.H.N.",
    },
    {
      icon: Calendar,
      text: "Intake Starts October 28, 2026",
    },
  ];

  // Repeat for continuous seamless horizontal flow
  const marqueeList = [...shortTrustItems, ...shortTrustItems, ...shortTrustItems];

  return (
    <div
      aria-label="Institutional trust highlights"
      className="relative overflow-hidden bg-white/95 backdrop-blur-md py-2 sm:py-2.5 border-y border-slate-200/80 shadow-2xs shrink-0 select-none"
    >
      {/* Soft White Fade Masks on Left & Right */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      {/* Clean, Simple & Short Continuous Flow Track */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-10 leading-none">
        {marqueeList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.text}-${idx}`}
              className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#071245] whitespace-nowrap"
            >
              <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200/80 shrink-0 shadow-2xs">
                <Icon className="w-3 h-3 text-[#B87503]" />
              </div>
              <span>{item.text}</span>
              <span className="text-amber-400 text-xs font-black mx-2 select-none">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
