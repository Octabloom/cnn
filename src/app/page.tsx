import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutProgram } from "@/components/sections/AboutProgram";
import { LearningOutcomes } from "@/components/sections/LearningOutcomes";
import { LearningExperience } from "@/components/sections/LearningExperience";
import { WorkshopCurriculum } from "@/components/sections/WorkshopCurriculum";
import { InstructorBio } from "@/components/sections/InstructorBio";
import { FinalRegistration } from "@/components/sections/FinalRegistration";
import { AcademicBlueprint } from "@/components/sections/AcademicBlueprint";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WhyCSNN } from "@/components/sections/WhyCSNN";
import { PreFooterCTA } from "@/components/sections/PreFooterCTA";
import { Footer } from "@/components/layout/Footer";
import { StickyRegistrationBar } from "@/components/layout/StickyRegistrationBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF6DC] text-[#0F1F5C]">
      {/* 01. Above-The-Fold Single Window Viewport (100% viewport fit on desktop, zero gap) */}
      <div className="min-h-screen flex flex-col justify-between relative">
        <div className="shrink-0 z-30">
          <AnnouncementBar />
          <Header />
        </div>

        {/* HeroSection: contains hero content and directly attached TrustMarquee at the bottom */}
        <HeroSection />
      </div>

      {/* Main Page Content */}
      <main className="flex-1">

        {/* 02. What is the Certificate (Culinary Masterclass & Outcomes) */}
        <AboutProgram />

        {/* 03. What You'll Learn (Core Nutrition Foundations - INTERACTIVE CURRICULUM EXPLORER) */}
        <LearningOutcomes />

        {/* 04. How You'll Learn (Live Interactive Experience) */}
        <LearningExperience />

        {/* 05. Ten-Workshop Curriculum & Certificate Levels */}
        <WorkshopCurriculum />

        {/* 06. Instructor Profile (Rasha Abu Rabi - MEET YOUR INSTRUCTOR) */}
        <InstructorBio />

        {/* 07. Official Intake 4-Step Registration Wizard (REGISTER IN 30 SECONDS) */}
        <FinalRegistration />

        {/* 08. Academic & Clinical Blueprint (5-Stage Snake Flow Timeline - ACADEMIC & CLINICAL BLUEPRINT) */}
        <AcademicBlueprint />

        {/* 09. Student Testimonial & Video (Shiva) */}
        <TestimonialSection />

        {/* 09. Why CSNN Toronto & Career Pathway */}
        <WhyCSNN />

        {/* Pre-Footer Action CTA Card */}
        <PreFooterCTA />
      </main>

      {/* Global Institutional Footer */}
      <Footer />

      {/* Floating Bottom Registration Action */}
      <StickyRegistrationBar />
    </div>
  );
}
