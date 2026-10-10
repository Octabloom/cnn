import React from "react";
import { BookOpen, Clock, Award, ShieldCheck, Users } from "lucide-react";

export function TrustRibbon() {
  const stats = [
    {
      icon: BookOpen,
      value: "10",
      label: "Live Online Workshops",
      detail: "Interactive curriculum",
    },
    {
      icon: Clock,
      value: "21",
      label: "Hours of Learning",
      detail: "Real-time with instructor",
    },
    {
      icon: Award,
      value: "4 CECs",
      label: "canfitpro Approved",
      detail: "Achievement pathway",
    },
    {
      icon: ShieldCheck,
      value: "1994",
      label: "CSNN Founded",
      detail: "Medicine of the Future™",
    },
    {
      icon: Users,
      value: "Zero",
      label: "Prior Experience Needed",
      detail: "Open to all wellness lovers",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#071245] via-[#0B1A5A] to-[#071245] text-white py-12 px-4 sm:px-6 lg:px-8 border-y-2 border-[#F6C915]/60 relative shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,201,21,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass-card-dark p-5 sm:p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:border-[#F6C915] group ${
                  i === stats.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                {/* 3D Skeuomorphic Icon Medallion */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-b from-[#1C389E] to-[#071245] text-[#F6C915] flex items-center justify-center mb-3.5 shadow-[0_6px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border border-[#F6C915]/40 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                </div>

                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl font-black text-[#F6C915] tracking-tight leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(246,201,21,0.4)]">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="text-sm font-extrabold text-white leading-snug">
                  {stat.label}
                </div>

                {/* Detail */}
                <div className="text-xs text-white/60 font-semibold mt-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
