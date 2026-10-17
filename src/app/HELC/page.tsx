import React from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HelcQualifierCard } from "@/components/forms/HelcQualifierCard";

export const metadata: Metadata = {
  title: "Healthy Eating & Lifestyle Certificate (HELC) · CSNN Toronto",
  description:
    "Join CSNN Toronto’s 10-workshop Healthy Eating & Lifestyle Certificate starting October 28, 2026. Live online, evenings 6–8 PM EST. No prior experience required.",
  alternates: {
    canonical: "https://octobloomwellness.com/HELC",
  },
  openGraph: {
    title: "Healthy Eating & Lifestyle Certificate (HELC) · CSNN Toronto",
    description:
      "Join CSNN Toronto’s 10-workshop certificate program starting October 28, 2026. Live online, evenings 6–8 PM EST. No prior experience required.",
    url: "https://octobloomwellness.com/HELC",
    siteName: "Octabloom Wellness · CSNN Toronto",
    type: "website",
  },
};

export default function HelcPage() {
  return (
    <div
      className="min-h-screen flex flex-col relative text-[#071245] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/helc-bg-luxury.jpg')" }}
    >
      {/* Light subtle translucent overlay to enhance text contrast while keeping the lush sun-drenched kitchen vivid */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-0" />

      {/* 01. Clean Header (No dark announcement color strip) */}
      <div className="shrink-0 z-30 sticky top-0 relative shadow-xs">
        <Header />
      </div>

      {/* 02. Single Hero View: Centered Card with Zero Scroll Fit and No Footer Peek */}
      <main className="flex-1 relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] min-h-[calc(100dvh-80px)] py-4 sm:py-6 px-4">
        <div className="w-full max-w-[500px] mx-auto my-auto">
          <HelcQualifierCard />
        </div>
      </main>

      {/* 03. Only Footer at the Bottom */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
