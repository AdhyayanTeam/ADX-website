"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import TechLogos from "@/components/home/TechLogos";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import ProductsGrid from "@/components/home/ProductsGrid";
import ServicesBento from "@/components/home/ServicesBento";
import WebsiteShowcase from "@/components/home/WebsiteShowcase";
import AutomationShowcase from "@/components/home/AutomationShowcase";
import WhyADX from "@/components/home/WhyADX";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import HomeFaq from "@/components/home/HomeFaq";
import CTASection from "@/components/home/CTASection";
import SectionTracker from "@/components/SectionTracker";
import { usePageAnalytics } from "@/lib/usePageAnalytics";

export default function Home() {
  usePageAnalytics("/");

  useEffect(() => {
    // Disable native browser scroll restoration on refresh and scroll to the top
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-accent/15 selection:text-accent">
      <div className="relative">
        <SectionTracker id="hero" />
        <Hero />
      </div>
      
      <div className="relative">
        <SectionTracker id="tech-logos" />
        <TechLogos />
      </div>

      <div className="relative">
        <SectionTracker id="what-we-build" />
        <WhatWeBuild />
      </div>

      <div className="relative">
        <SectionTracker id="featured-product" />
        <FeaturedProduct />
      </div>

      <div className="relative">
        <SectionTracker id="products-grid" />
        <ProductsGrid />
      </div>

      <div className="relative">
        <SectionTracker id="services-bento" />
        <ServicesBento />
      </div>

      <div className="relative">
        <SectionTracker id="website-showcase" />
        <WebsiteShowcase />
      </div>

      <div className="relative">
        <SectionTracker id="automation-showcase" />
        <AutomationShowcase />
      </div>

      <div className="relative">
        <SectionTracker id="why-adx" />
        <WhyADX />
      </div>

      <div className="relative">
        <SectionTracker id="process-timeline" />
        <ProcessTimeline />
      </div>

      <div className="relative">
        <SectionTracker id="faq" />
        <HomeFaq />
      </div>

      <div className="relative">
        <SectionTracker id="cta" />
        <CTASection />
      </div>
    </main>
  );
}
