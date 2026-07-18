"use client";

import { m } from "framer-motion";
import { 
  IconBinary, 
  IconRoute, 
  IconShieldLock, 
  IconChartBar 
} from "@tabler/icons-react";

export default function WhyADX() {
  const pillars = [
    {
      title: "Everything Connected",
      desc: "Forget disconnected SaaS subscriptions, messy sheets, and separate WhatsApp accounts. ADX syncs database, API messaging, and payments in one engine.",
      icon: IconRoute,
      badge: "Unified System"
    },
    {
      title: "Built Around Your Workflow",
      desc: "We do not sell generic templates or rigid software. We shadow your team, map your existing paths, and build digital infrastructure matching your operations.",
      icon: IconBinary,
      badge: "Custom-Tailored"
    },
    {
      title: "Modern Engineering",
      desc: "Engineered on production-grade infrastructure: secure PostgreSQL databases, direct WhatsApp Cloud API templates, and scalable backend applications.",
      icon: IconShieldLock,
      badge: "Secure Infrastructure"
    },
    {
      title: "Growth Focused",
      desc: "Our priority is to recover lost revenue and eliminate manual labor. We translate technology directly into client retention, conversions, and metrics.",
      icon: IconChartBar,
      badge: "Outcome Driven"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold">
            Pillars
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            Why ADX
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            We are not a standard software agency, nor do we sell off-the-shelf dashboards. We engineer custom operational infrastructure for Indian SMBs.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <m.div
                key={pillar.title}
                className="space-y-4 flex flex-col items-start neumorphic-flat p-8 rounded-2xl transition-colors duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-secondary uppercase bg-[#ebedf0] px-2.5 py-1 rounded-full border border-border/10">
                    {pillar.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
