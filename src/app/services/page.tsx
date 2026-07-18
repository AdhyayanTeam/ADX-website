"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { 
  IconBrowser, 
  IconSearch, 
  IconAd, 
  IconShare, 
  IconCompass, 
  IconArrowRight,
  IconCircleCheck
} from "@tabler/icons-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      eyebrow: "Production Web Assets",
      desc: "Fast, secure, and fully responsive web systems built with React and Next.js. Engineered with clean semantics, structured SEO tags, and perfect Core Web Vitals.",
      icon: IconBrowser,
      link: "/services/website-development",
      features: ["Next.js & React 19 structure", "Tailwind CSS v4 layouts", "Framer Motion animations", "Dynamic CMS integration"],
      color: "border-blue-500/10 hover:border-blue-500/30 group-hover:text-blue-500",
      bg: "bg-blue-500/5"
    },
    {
      title: "SEO Optimization",
      eyebrow: "Organic Search Authority",
      desc: "Get your business indexed on top of search results. We write JSON-LD schemas, configure local Google Maps citations, optimize speeds, and conduct keyword audits.",
      icon: IconSearch,
      link: "/services/seo",
      features: ["Structured data schemas", "Local map listing sync", "Google PageSpeed audits", "Strategic search tags"],
      color: "border-indigo-500/10 hover:border-indigo-500/30 group-hover:text-indigo-500",
      bg: "bg-indigo-500/5"
    },
    {
      title: "Google Ads (PPC)",
      eyebrow: "Performance Search Marketing",
      desc: "Scale lead flow and conversions. We draft high-impact ad copy, optimize bid adjustments, configure tag trackers, and maximize your ROAS milestones.",
      icon: IconAd,
      link: "/services/google-ads",
      features: ["Campaign funnel audits", "Keyword bid tuning", "Conversion tracking sync", "Demographic target scripts"],
      color: "border-purple-500/10 hover:border-purple-500/30 group-hover:text-purple-500",
      bg: "bg-purple-500/5"
    },
    {
      title: "Social Media Marketing",
      eyebrow: "Brand Engagement & Ads",
      desc: "Build authority across primary social channels. We design creative templates, script story hooks, set up Facebook pixel syncs, and manage visual ad campaigns.",
      icon: IconShare,
      link: "/services/social-media-marketing",
      features: ["Content hook scripts", "Meta pixel setup", "Visual layout templates", "Targeted audience segments"],
      color: "border-emerald-500/10 hover:border-emerald-500/30 group-hover:text-emerald-500",
      bg: "bg-emerald-500/5"
    },
    {
      title: "Branding & Visual System",
      eyebrow: "Identity & Typography Systems",
      desc: "Establish credibility with a premium corporate look. We design vector logo assets, select custom display typography pairings, and build cohesive branding kits.",
      icon: IconCompass,
      link: "/services/branding",
      features: ["Logo system design", "Typography hierarchy maps", "Premium palette guides", "Cohesive brand assets"],
      color: "border-rose-500/10 hover:border-rose-500/30 group-hover:text-rose-500",
      bg: "bg-rose-500/5"
    }
  ];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Execution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Our Digital Services
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Professional digital design, marketing, and development services backed by solid engineering principles. We translate technology into outcome metrics.
          </p>
        </div>
      </section>

      {/* Services Grid list */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                className={`group bg-white border border-border rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-all duration-300 ${service.color}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
              >
                <div className="space-y-5">
                  {/* Top info */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl ${service.bg} flex items-center justify-center text-secondary group-hover:text-accent transition-colors duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider block">{service.eyebrow}</span>
                      <h2 className="text-base font-bold tracking-tight text-foreground">{service.title}</h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-secondary leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullets list */}
                  <ul className="space-y-1.5 pt-4 border-t border-border">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[10px] text-secondary font-mono">
                        <IconCircleCheck className="w-3.5 h-3.5 text-accent mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer link */}
                <div className="mt-8 pt-4 border-t border-border flex justify-end">
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all"
                  >
                    <span>View Service</span>
                    <IconArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </m.div>
            );
          })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Need end-to-end technical oversight?</h2>
        <p className="text-sm text-secondary leading-relaxed max-w-lg mx-auto">
          We offer complete product design and engineering services under standard fractional CTO packages, giving your business professional tech oversight.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-foreground text-white hover:bg-[#222] active:scale-[0.98] transition-all"
        >
          Schedule Operational Review
        </Link>
      </section>

    </main>
  );
}
