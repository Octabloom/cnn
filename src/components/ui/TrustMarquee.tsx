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
      text: "Intake Starts October 14, 2026",
    },
  ];

  // Repeat for continuous seamless horizontal flow
  const marqueeList = [...shortTrustItems, ...shortTrustItems, ...shortTrustItems];

  return (
    <div
      aria-label="Institutional trust highlights"
      className="relative overflow-hidden bg-gradient-to-r from-[#FAF2D4] via-white to-[#FAF2D4] py-2 sm:py-2.5 border-y border-[#E8DEC0] shadow-xs shrink-0 select-none"
    >
      {/* Soft Cream Fade Masks on Left & Right */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF2D4] via-[#FAF2D4]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF2D4] via-[#FAF2D4]/90 to-transparent z-10 pointer-events-none" />

      {/* Clean, Simple & Short Continuous Flow Track */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-10 leading-none">
        {marqueeList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.text}-${idx}`}
              className="flex items-center gap-2 text-xs sm:text-[13px] font-black text-[#13277A] whitespace-nowrap"
            >
              <div className="w-5 h-5 rounded-full bg-[#FBECB0] flex items-center justify-center text-[#A8780F] border border-[#E6D9A8] shrink-0 shadow-xs">
                <Icon className="w-3 h-3" />
              </div>
              <span>{item.text}</span>
              <span className="text-[#D4A017] text-xs font-black mx-2 select-none">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
