"use client";

import { m } from "framer-motion";
import { 
  IconStack, 
  IconDeviceLaptop, 
  IconCpu, 
  IconTrendingUp,
  IconArrowUpRight
} from "@tabler/icons-react";
import Link from "next/link";

export default function WhatWeBuild() {
  const cards = [
    {
      num: "01",
      title: "Business Platforms",
      desc: "Custom operational software engineered around your specific business processes and workflows.",
      icon: IconStack,
      tag: "Products",
      link: "/products",
      details: ["Centralized SQL Databases", "Multi-Agent Support", "Role-Based Access"],
      color: "hover:border-accent/30"
    },
    {
      num: "02",
      title: "Modern Websites",
      desc: "Beautiful, hand-crafted web experiences that load instantly and rank on search engines.",
      icon: IconDeviceLaptop,
      tag: "Modern Websites",
      link: "/services/website-development",
      details: ["Next.js & React 19", "Perfect Core Web Vitals", "Structured SEO Data"],
      color: "hover:border-accent/30"
    },
    {
      num: "03",
      title: "AI Automation",
      desc: "Eliminate repetitive tasks by embedding artificial intelligence directly into your daily pipelines.",
      icon: IconCpu,
      tag: "AI Automation",
      link: "/products/ai-automation",
      details: ["Triage & Categorization", "Automatic Summaries", "Intelligent Reminders"],
      color: "hover:border-[#494949]/30"
    },
    {
      num: "04",
      title: "Digital Growth",
      desc: "Performance marketing, localized SEO, and search ads that drive measurable revenue growth.",
      icon: IconTrendingUp,
      tag: "Digital Growth",
      link: "/services/seo",
      details: ["Google Search Ads", "Local SEO Optimization", "Funnel Conversion Audit"],
      color: "hover:border-[#7c7a7a]/30"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
              What We Build
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            We replace manual workflows with secure digital infrastructure. No disconnected vendors, no generic templates.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <m.div
                key={card.title}
                className={`relative neumorphic-flat rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ${card.color} group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Top of Card */}
                <div className="space-y-6">
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-secondary font-bold">
                      [ {card.num} ]
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold px-2 py-0.5 bg-accent/5 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-border/40 flex items-center justify-center text-foreground group-hover:text-accent transition-colors duration-300">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom of Card */}
                <div className="mt-8 pt-6 border-t border-border space-y-4">
                  {/* Nested Details List */}
                  <ul className="space-y-2">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex items-center text-xs sm:text-sm font-mono text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <Link
                    href={card.link}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 group/link"
                  >
                    <span>Learn more</span>
                    <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
