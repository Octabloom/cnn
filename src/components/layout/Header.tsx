"use client";

import React, { useState } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

import { BrandLockup } from "@/components/ui/BrandLockup";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About HELC", href: "#about" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Instructor", href: "#instructor" },
    { label: "Testimonial", href: "#testimonial" },
    { label: "Why CSNN Toronto", href: "#why-csnn" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-xs transition-all">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 min-h-[72px] sm:min-h-[80px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Co-Branded Lockup: Octobloom Powered by CSNN */}
        <BrandLockup variant="header" />

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-0.5 text-xs font-black text-[#071245]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1 rounded-lg hover:bg-slate-100 hover:text-[#071245] transition-all relative group"
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
            className="flex items-center gap-1.5 text-xs font-black text-[#071245] hover:text-[#0B1A5A] transition-all py-1 px-2.5 rounded-lg hover:bg-slate-100 border border-transparent hover:border-slate-200"
            title="Call CSNN Toronto Admissions"
          >
            <div className="w-5 h-5 rounded-md bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shadow-2xs">
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
          className="lg:hidden p-1.5 rounded-lg text-[#071245] bg-white border border-slate-200 shadow-2xs hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 py-4 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1.5 text-xs font-bold text-[#071245]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B87503]" />
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={`tel:${PROGRAM_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-black text-[#071245] p-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B87503]" />
                <span>Call {PROGRAM_INFO.phone}</span>
              </a>
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-skeuo-gold w-full text-center py-2.5 rounded-full text-xs font-black"
              >
                Register for Oct 28
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
