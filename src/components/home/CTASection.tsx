"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { Highlighter } from "@/registry/magicui/highlighter";

export default function CTASection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 overflow-hidden">
      {/* Subtle Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EFEFEF_1px,transparent_1px),linear-gradient(to_bottom,#EFEFEF_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main CTA Card */}
        <m.div 
          className="bg-white border border-border rounded-2xl p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
              Get Started
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground leading-[1.2] pb-1">
              Ready to Build Your Next <Highlighter action="underline" strokeWidth={3}>Digital Solution?</Highlighter>
            </h2>
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              Partner with ADX to automate manual workflows, synchronize your databases, establish WhatsApp triggers, and scale customer pipelines. Let&apos;s map your system requirements.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-sm mx-auto pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:translate-y-[1px] active:scale-[0.98] transition-all duration-150 shadow-[0_4px_12px_rgba(0,82,255,0.15)] group"
            >
              <span>Book Strategy Call</span>
              <IconArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white text-foreground border border-border hover:bg-muted active:translate-y-[1px] active:scale-[0.98] transition-all duration-150"
            >
              Contact Us
            </Link>
          </div>

        </m.div>

      </div>
    </section>
  );
}
