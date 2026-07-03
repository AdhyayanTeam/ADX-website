"use client";

import HeroSection from "@/components/HeroSection";
import LeakageSection from "@/components/LeakageSection";
import MethodologySection from "@/components/MethodologySection";
import OutcomesSection from "@/components/OutcomesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 selection:bg-coffee-bean-200 selection:text-coffee-bean-900 pt-16">
      <HeroSection />
      <LeakageSection />
      <MethodologySection />
      <OutcomesSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <FaqSection />
    </main>
  );
}
