"use client";

import HeroSection from "@/components/HeroSection";
import LeakageSection from "@/components/LeakageSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhatWeObservedSection from "@/components/WhatWeObservedSection";
import MethodologySection from "@/components/MethodologySection";
import TransformationSection from "@/components/TransformationSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import SectionTracker from "@/components/SectionTracker";
import { usePageAnalytics } from "@/lib/usePageAnalytics";

export default function Home() {
  usePageAnalytics("/");

  return (
    <main className="relative min-h-screen bg-glaucous-50 text-vivid-royal-950 selection:bg-coffee-bean-200 selection:text-coffee-bean-900 pt-16">
      <div className="relative">
        <SectionTracker id="hero" />
        <HeroSection />
      </div>
      <div className="relative">
        <SectionTracker id="leakage" />
        <LeakageSection />
      </div>
      <div className="relative">
        <SectionTracker id="industries" />
        <IndustriesSection />
      </div>
      <div className="relative">
        <SectionTracker id="observation" />
        <WhatWeObservedSection />
      </div>
      <div className="relative">
        <SectionTracker id="methodology" />
        <MethodologySection />
      </div>
      <div className="relative">
        <SectionTracker id="transformation" />
        <TransformationSection />
      </div>
      <div className="relative">
        <SectionTracker id="process" />
        <ProcessSection />
      </div>
      <div className="relative">
        <SectionTracker id="faq" />
        <FaqSection />
      </div>
    </main>
  );
}
