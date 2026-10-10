"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Shield, X, MapPin, Sparkles } from "lucide-react";
import { PROGRAM_INFO } from "@/data/programData";

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-[#071245] to-[#03091F] text-white pt-10 sm:pt-12 pb-24 lg:pb-14 border-t-4 border-[#F6C915] relative z-20 shadow-2xl">
      {/* Top golden ambient glow sweep */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFE685] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-full overflow-hidden bg-white p-1 border-2 border-[#F6C915] shadow-lg">
                <Image
                  src="/assets/logo.jpg"
                  alt="CSNN Toronto Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white block">
                  CSNN Toronto
                </span>
                <span className="text-xs text-[#F6C915] font-black tracking-wide block">
                  Canadian School of Natural Nutrition
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-normal">
              Teaching the Medicine of the Future™ since 1994. Providing Canada&apos;s leading natural nutrition education and holistic wellness certification.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-[#FBECB0] font-semibold pt-1">
              <MapPin className="w-4 h-4 text-[#F6C915] shrink-0" />
              <span>Toronto, Ontario, Canada · Serving Students Worldwide</span>
            </div>
          </div>

          {/* Program Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#F6C915] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              This Program
            </span>
            <h4 className="text-lg font-black text-white">
              {PROGRAM_INFO.programName}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-normal">
              With Rasha Abu Rabi, BSc., MSc., R.H.N. · 10 live online workshops · 21 hours interactive learning · Starting {PROGRAM_INFO.startDate}.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-black px-3 py-1 rounded-full bg-white/10 text-[#FBECB0] border border-[#F6C915]/30 shadow-sm">
                Approved by canfitpro for 4 CECs
              </span>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <span className="text-xs font-black uppercase tracking-widest text-[#F6C915]">
              Contact &amp; Inquiries
            </span>
            <a
              href={`tel:${PROGRAM_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 text-sm text-white hover:text-[#F6C915] font-black transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <Phone className="w-3.5 h-3.5 text-[#F6C915]" />
              </div>
              <span>{PROGRAM_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${PROGRAM_INFO.email}`}
              className="flex items-center gap-2.5 text-sm text-white hover:text-[#F6C915] font-black transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <Mail className="w-3.5 h-3.5 text-[#F6C915]" />
              </div>
              <span>{PROGRAM_INFO.email}</span>
            </a>
            <p className="text-xs text-white/50 mt-1 font-medium">
              Advisors available Monday to Friday during business hours EST.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-semibold">
          <p>© 2026 CSNN Toronto. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#F6C915] transition-colors cursor-pointer underline text-xs font-bold"
            >
              Privacy Policy &amp; Terms
            </button>
            <a
              href="#about"
              className="hover:text-white transition-colors font-bold"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>

      {/* Privacy Policy Frosted Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card-light text-[#0F1F5C] rounded-[36px] max-w-lg w-full p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border-2 border-white">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(false)}
              aria-label="Close Privacy Policy"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#A8780F] font-black text-sm mb-2">
              <Shield className="w-5 h-5 text-[#F6C915]" />
              <span>Privacy &amp; Data Protection</span>
            </div>

            <h3 className="text-2xl font-black text-[#13277A] mb-4">
              CSNN Toronto Privacy Statement
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#5B5440] leading-relaxed font-medium">
              <p>
                The Canadian School of Natural Nutrition (CSNN) Toronto respects your personal privacy. Any information submitted regarding the Healthy Eating &amp; Lifestyle Certificate is strictly used for course registration inquiries, advisement, and administrative enrollment communication.
              </p>
              <p>
                <strong>Notice regarding this website:</strong> In staging prototype mode, form submissions remain disabled and no personal contact details are recorded, transmitted, or stored on external servers without prior administrative configuration.
              </p>
              <p>
                We do not sell, rent, or share personal contact data with third-party marketers. You may unsubscribe or request removal from program correspondence at any time by contacting{" "}
                <a href={`mailto:${PROGRAM_INFO.email}`} className="text-[#13277A] font-black underline">
                  {PROGRAM_INFO.email}
                </a>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/80 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="btn-skeuo-primary px-7 h-11 rounded-full text-white font-black text-xs"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
