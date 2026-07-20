"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  IconChevronDown, 
  IconChevronUp, 
  IconCheck, 
  IconArrowRight 
} from "@tabler/icons-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeatureItem {
  title: string;
  desc: string;
  badge?: string;
  details?: string[];
}

interface ProcessStep {
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface SubpageProps {
  eyebrow: string;
  title: string;
  subheading: string;
  overviewTitle: string;
  overviewDesc: string;
  overviewMetrics?: { label: string; val: string }[];
  benefits: BenefitItem[];
  features: FeatureItem[];
  process: ProcessStep[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaDesc: string;
}

export default function SubpageLayout({
  eyebrow,
  title,
  subheading,
  overviewTitle,
  overviewDesc,
  overviewMetrics = [],
  benefits,
  features,
  process,
  faq,
  ctaTitle,
  ctaDesc
}: SubpageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <main className="w-full bg-background text-foreground relative z-10 overflow-hidden selection:bg-accent/15 selection:text-accent">
      
      {/* 1. HERO */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground text-wrap-balance">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto text-wrap-pretty">
            {subheading}
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full neumorphic-button-accent"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[10px] font-bold text-accent uppercase">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {overviewTitle}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-sm sm:text-base text-secondary leading-relaxed text-wrap-pretty">
              {overviewDesc}
            </p>
            {overviewMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
                {overviewMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-mono font-bold text-secondary uppercase block">{metric.label}</span>
                    <span className="text-2xl font-black text-foreground">{metric.val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs font-bold text-accent uppercase">Value</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <m.div
                  key={benefit.title}
                  className="neumorphic-flat rounded-2xl p-6 space-y-4 hover:border-accent/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{benefit.desc}</p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs font-bold text-accent uppercase">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Core Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <m.div
                key={feature.title}
                className="neumorphic-flat rounded-2xl p-8 space-y-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">{feature.title}</h3>
                  {feature.badge && (
                    <span className="font-mono text-xs font-bold text-accent bg-accent/5 px-2 py-0.5 rounded">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-secondary leading-relaxed">{feature.desc}</p>
                {feature.details && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-border">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-secondary font-mono">
                        <IconCheck className="w-3.5 h-3.5 text-accent mr-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs font-bold text-accent uppercase">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Our Delivery Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-10 h-10 rounded-full border border-border/40 neumorphic-flat font-mono text-xs font-bold text-secondary flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground tracking-tight">{step.title}</h3>
                  <p className="text-xs text-secondary leading-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="w-full py-16 lg:py-24 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs font-bold text-accent uppercase">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="neumorphic-flat rounded-xl overflow-hidden hover:border-accent/25 transition-colors">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground tracking-tight">{item.q}</span>
                    <div className="shrink-0 text-secondary">
                      {isOpen ? <IconChevronUp className="w-4 h-4 text-accent" /> : <IconChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-secondary leading-relaxed border-t border-border">
                          {item.a}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="w-full py-20 lg:py-28 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">{ctaTitle}</h2>
          <p className="text-base text-secondary leading-relaxed max-w-xl mx-auto">{ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xs sm:max-w-md mx-auto pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full neumorphic-button-accent"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full neumorphic-button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
