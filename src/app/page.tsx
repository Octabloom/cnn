import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkshopCurriculum } from "@/components/sections/WorkshopCurriculum";
import { AboutProgram } from "@/components/sections/AboutProgram";
import { LearningExperience } from "@/components/sections/LearningExperience";
import { InstructorBio } from "@/components/sections/InstructorBio";
import { CertificatePathways } from "@/components/sections/CertificatePathways";
import { FinalRegistration } from "@/components/sections/FinalRegistration";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ProgramShowcaseDualPane } from "@/components/sections/ProgramShowcaseDualPane";
import { WhyCSNN } from "@/components/sections/WhyCSNN";
import { PreFooterCTA } from "@/components/sections/PreFooterCTA";
import { Footer } from "@/components/layout/Footer";
import { StickyRegistrationBar } from "@/components/layout/StickyRegistrationBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#071245]">
      {/* 01. Above-The-Fold Hero Section */}
      <div className="w-full min-h-screen min-h-[100dvh] flex flex-col relative">
        <div className="shrink-0 z-30">
          <AnnouncementBar />
          <Header />
        </div>

        {/* HeroSection: contains hero content and directly attached TrustMarquee at the bottom */}
        <HeroSection />
      </div>

      {/* Main Page Content */}
      <main className="flex-1">

        {/* 02. Ten-Workshop Curriculum (10 HOLISTIC NUTRITION WORKSHOPS - placed directly below hero) */}
        <WorkshopCurriculum />

        {/* 03. About the Certificate Program & Culinary Masterclass */}
        <AboutProgram />

        {/* 04. How You'll Learn (HOW YOU'LL LEARN) */}
        <LearningExperience />

        {/* 05. Instructor Profile (MEET YOUR INSTRUCTOR - placed just below HOW YOU'LL LEARN) */}
        <InstructorBio />

        {/* 06. Certificate Recognition Pathways (Choose Your Level of Recognition) */}
        <CertificatePathways />

        {/* 07. Official Intake 4-Step Registration Wizard (REGISTER IN 30 SECONDS) */}
        <FinalRegistration />

        {/* 08. Student Testimonials (AUTHENTIC CSNN TORONTO VOICES) */}
        <TestimonialSection />

        {/* 09. CSNN Toronto Live Online Nutrition Masterclass Showcase */}
        <ProgramShowcaseDualPane />

        {/* 10. Why CSNN Toronto & Career Pathway */}
        <WhyCSNN />

        {/* Pre-Footer Action CTA Card */}
        <PreFooterCTA />
      </main>

      {/* Global Institutional Footer */}
      <Footer />

      {/* Floating Bottom Registration Action with Dismiss Cross */}
      <StickyRegistrationBar />
    </div>
  );
}
