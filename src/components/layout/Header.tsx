"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About HELC", href: "#about" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Instructor", href: "#instructor" },
    { label: "Testimonial", href: "#testimonial" },
    { label: "Why CSNN", href: "#why-csnn" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FDF6DC]/90 backdrop-blur-2xl border-b border-[#EAE0BC] shadow-[0_2px_15px_rgba(19,39,122,0.04)] transition-all">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between gap-3">
        {/* Logo and Brand Title */}
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white p-0.5 border-2 border-[#F6C915] shadow-xs shrink-0 transition-transform group-hover:scale-105 duration-300">
            <Image
              src="/assets/logo.jpg"
              alt="CSNN Toronto Logo"
              fill
              sizes="40px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="border-l-2 border-[#F6C915] pl-2.5">
            <span className="block text-xs sm:text-sm font-black text-[#13277A] leading-tight group-hover:text-[#0B1A5A] transition-colors">
              {PROGRAM_INFO.programName}
            </span>
            <span className="block text-[9px] sm:text-[10px] font-extrabold text-[#A8780F]">
              CSNN Toronto · Teaching since 1994
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-0.5 text-xs font-black text-[#13277A]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1 rounded-lg hover:bg-white/70 hover:text-[#0B1A5A] transition-all relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-[#F6C915] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* Actions (Phone & CTA) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a
            href={`tel:${PROGRAM_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-black text-[#13277A] hover:text-[#0B1A5A] transition-all py-1 px-2.5 rounded-lg hover:bg-white/60 border border-transparent hover:border-[#EFE1AD]"
            title="Call CSNN Toronto Admissions"
          >
            <div className="w-5 h-5 rounded-md bg-[#FBECB0] flex items-center justify-center text-[#A8780F] shadow-inner">
              <Phone className="w-2.5 h-2.5" />
            </div>
            <span>{PROGRAM_INFO.phone}</span>
          </a>

          <a
            href="#register"
            className="btn-skeuo-primary animate-shimmer inline-flex items-center justify-center gap-1.5 h-9 px-4 sm:px-5 rounded-full text-xs font-black tracking-wide shadow-sm"
          >
            <span>Register now</span>
            <ArrowRight className="w-3 h-3 text-[#F6C915]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-1.5 rounded-lg text-[#13277A] bg-white/70 border border-[#EFE1AD] shadow-xs hover:bg-[#FBECB0] transition-colors focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDF6DC]/98 backdrop-blur-2xl border-b border-[#EFE1AD] px-4 py-4 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1.5 text-xs font-bold text-[#13277A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/60 border border-transparent hover:border-[#EFE1AD] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8780F]" />
              </a>
            ))}
            <div className="pt-2 border-t border-[#EFE1AD] flex flex-col gap-2">
              <a
                href={`tel:${PROGRAM_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-black text-[#13277A] p-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8780F]" />
                <span>Call {PROGRAM_INFO.phone}</span>
              </a>
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-skeuo-gold w-full text-center py-2.5 rounded-full text-xs font-black"
              >
                Register for Oct 14
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
