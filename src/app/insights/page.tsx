"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function InsightsPage() {
  const articles = [
    {
      date: "JULY 2026",
      readTime: "5 MIN READ",
      title: "The 15-Minute Rule: How Delayed Follow-ups Kill B2C Conversion Rates.",
      desc: "An analysis of lead intake delays in coaching academies and healthcare clinics, detailing how response speed determines conversion success.",
    },
    {
      date: "JUNE 2026",
      readTime: "7 MIN READ",
      title: "Stateful Reminders vs. Static Spams: Reclaiming 30% Missed Payments.",
      desc: "Why static payment reminders fail. How stateful, conversational scripts combined with Razorpay webhooks reconcile ledgers automatically.",
    },
    {
      date: "MAY 2026",
      readTime: "6 MIN READ",
      title: "Why CRM Customization Fails: Designing Software Around Human Routines.",
      desc: "Most staff bypass CRMs because of bloated data requirements. We detail how to design simple, high-adoption interfaces for team compliance.",
    },
  ];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Library
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            ADX Essays & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Data-driven analyses of administrative leaks, conversion bottlenecks, and database architectures in growing businesses.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-white border border-border p-8 rounded-2xl flex flex-col justify-between hover:border-accent/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-secondary tracking-wider block uppercase">
                  {art.date} // {art.readTime}
                </span>
                <h3 className="text-lg font-bold text-foreground leading-snug tracking-tight">{art.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{art.desc}</p>
              </div>
              <div className="pt-8 border-t border-border mt-8">
                <Link
                  href="/book"
                  className="text-xs font-semibold text-accent hover:text-brand-blue-dark transition-all duration-300 inline-flex items-center gap-1.5"
                >
                  Discuss operational bottlenecks <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
