import React from "react";
import { Phone, Mail, Calendar, Clock, Sparkles } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Program Announcement"
      className="bg-gradient-to-r from-[#071245] via-[#0A1856] to-[#071245] text-white text-[11px] py-1 px-4 relative z-30 border-b border-[#F6C915]/40 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5">
        {/* Schedule & Live Info */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-gradient-to-b from-[#EF3838] to-[#B91C1C] text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            LIVE ONLINE
          </span>

          <span className="inline-flex items-center gap-1 text-[#FBECB0] font-black">
            <Calendar className="w-2.5 h-2.5 text-[#F6C915]" />
            <span>Starts {PROGRAM_INFO.startDate}</span>
          </span>

          <span className="hidden sm:inline text-white/30">•</span>

          <span className="hidden sm:inline-flex items-center gap-1 text-white/90 font-medium">
            <Clock className="w-2.5 h-2.5 text-[#F6C915]" />
            <span>{PROGRAM_INFO.scheduleTime}</span>
          </span>

          <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.2 rounded-md bg-white/10 text-[#F6C915] text-[9px] font-black border border-white/15">
            <Sparkles className="w-2 h-2" />
            4 canfitpro CECs
          </span>
        </div>

        {/* Contact Links */}
        <div className="flex items-center gap-3 font-bold ml-auto shrink-0">
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            className="flex items-center gap-1 text-white/90 hover:text-[#F6C915] transition-colors focus:outline-none"
          >
            <Phone className="w-2.5 h-2.5 text-[#F6C915]" />
            <span>{PROGRAM_INFO.phone}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href={`mailto:${PROGRAM_INFO.email}`}
            className="hidden sm:flex items-center gap-1 text-white/90 hover:text-[#F6C915] transition-colors focus:outline-none"
          >
            <Mail className="w-2.5 h-2.5 text-[#F6C915]" />
            <span>{PROGRAM_INFO.email}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
