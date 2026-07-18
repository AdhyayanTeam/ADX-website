"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { 
  IconCheck, 
  IconArrowRight, 
  IconCircleCheck, 
  IconShieldCheck, 
  IconHeart 
} from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Our Manifesto
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            We build systems that make good work repeatable.
          </h1>
          <div className="text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed space-y-4">
            <p>Most businesses do not struggle because they lack software.</p>
            <p>They struggle because important work depends on staff remembering what needs to happen next.</p>
            <p className="font-bold text-foreground">As the business grows, that becomes harder every day.</p>
          </div>
        </div>
      </section>

      {/* Narrative grid sections */}
      <section className="max-w-6xl mx-auto px-6 mt-16 lg:mt-24 space-y-20 lg:space-y-32">
        
        {/* 1. What We Kept Seeing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Observation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              What We Kept Seeing
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              Over the years, we shadowed businesses that already owned all the software tools they were told they needed.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold block">
                They already had
              </span>
              <ul className="space-y-2.5">
                {["Company websites", "Billing systems", "Customer CRMs", "WhatsApp Business accounts"].map((item) => (
                  <li key={item} className="flex items-center text-xs text-secondary font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
              <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-bold block">
                Yet daily leaks remained
              </span>
              <ul className="space-y-2.5">
                {[
                  "Searching old WhatsApp threads for invoice details.",
                  "Writing student appointments in local notebooks.",
                  "Tracking fee payments on un-synchronized Excel sheets.",
                  "Owner answering every query — nobody else knew the specs."
                ].map((item) => (
                  <li key={item} className="flex items-start text-xs text-secondary">
                    <span className="text-red-500 mr-2 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Why ADX Exists Card */}
        <div className="bg-white border border-border rounded-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Why ADX Exists
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                We believe businesses should not become harder to run as they scale. Adding more customers should not result in operational confusion.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-[#FAFAFA] border border-border rounded-xl p-6 space-y-3 text-sm text-secondary leading-relaxed">
              <p className="font-bold text-foreground">Our job is simple.</p>
              <p>We shadow how work actually happens inside your business, identifying where information gets lost and where people depend on memory.</p>
              <p>Then we build software that removes those bottlenecks, keeping your operations connected and license-free.</p>
            </div>
          </div>
        </div>

        {/* 3. Meet the Founders */}
        <div className="space-y-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block text-center">
            Leadership
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mrigesh */}
            <div className="bg-white border border-border rounded-2xl p-8 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-accent/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center font-mono text-xs font-bold">
                MD
              </div>
              <h3 className="text-xl font-bold text-foreground">Mrigesh Deshpande</h3>
              <span className="font-mono text-[9px] text-secondary uppercase block">Founder</span>
              <div className="text-xs sm:text-sm text-secondary leading-relaxed space-y-3 pt-4 border-t border-border">
                <p>Before starting ADX, I spent time building custom software for companies across different verticals.</p>
                <p>What surprised me wasn&apos;t that businesses needed more technology. It was that even after buying technology, everyday work still depended on manual memory, spreadsheets, and un-synced chat threads.</p>
                <p>Today, every ADX project starts the same way — with operational diagnostics and shadowing before writing code.</p>
              </div>
            </div>

            {/* Chakresh */}
            <div className="bg-white border border-border rounded-2xl p-8 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-accent/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center font-mono text-xs font-bold">
                CC
              </div>
              <h3 className="text-xl font-bold text-foreground">Chakresh Chakshu</h3>
              <span className="font-mono text-[9px] text-secondary uppercase block">Co-Founder</span>
              <div className="text-xs sm:text-sm text-secondary leading-relaxed space-y-3 pt-4 border-t border-border">
                <p>Before co-founding ADX, I spent years building products and scaling engineering teams at Amazon and early-stage startups.</p>
                <p>I&apos;ve seen companies spend lakhs on software that staff on the ground never actually use. The sales team buys a CRM, the accounting team buys an ERP, and operations build separate spreadsheets. None of them sync.</p>
                <p>We built ADX to close this gap — integrating platforms, payments, and messaging into one unified codebase.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Bottom CTA Callout */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
          Our Goal
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Less memory. More systems.</h2>
        <p className="text-sm text-secondary leading-relaxed max-w-lg mx-auto">
          We want your business to be less dependent on manual coordination. If your team can focus on client outcomes instead of chasing data, we&apos;ve succeeded.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,82,255,0.15)]"
        >
          Book Operational Audit
        </Link>
      </section>

    </main>
  );
}
