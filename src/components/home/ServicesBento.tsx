"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { 
  IconBrowser, 
  IconSearch, 
  IconAd, 
  IconCompass, 
  IconRocket, 
  IconLayout,
  IconShare,
  IconArrowUpRight
} from "@tabler/icons-react";

export default function ServicesBento() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
            Execution
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            Our Digital Services
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Professional digital execution backed by solid engineering. We design, deploy, and optimize your business assets to drive measurable outcomes.
          </p>
        </div>

        {/* Bento Grid (3 Columns on Desktop, asymmetrically spanned) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Website Development (2 cols span) */}
          <m.div
            className="md:col-span-2 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between overflow-hidden min-h-[300px] relative group hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-md space-y-4 z-10">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconBrowser className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Website Development</h3>
              <p className="text-sm text-secondary leading-relaxed">
                We engineer lightning-fast websites using React and Next.js. Production-grade code, server-side rendering, and responsive frameworks built for security and scalability.
              </p>
            </div>
            
            {/* Visual preview block */}
            <div className="absolute right-0 bottom-0 w-80 h-36 neumorphic-sunken rounded-tl-xl p-4 hidden sm:block translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-secondary mb-3 border-b border-border pb-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span>Next.js Page Router Engine</span>
              </div>
              <div className="space-y-1.5 font-mono text-[9px] text-secondary">
                <p className="text-accent">const App = () =&gt; &#123;</p>
                <p className="pl-3">return &lt;div className=&quot;font-sans&quot;&gt;Build&lt;/div&gt;;</p>
                <p className="text-accent">&#125;;</p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border/60 z-10">
              <Link href="/services/website-development" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Web Development</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 2. SEO (1 col span) */}
          <m.div
            className="md:col-span-1 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconSearch className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">SEO Optimization</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Rank on top for high-intent keywords. Structured schema markup, search authority development, and localized Google Maps listing optimizations.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <Link href="/services/seo" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore SEO</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 3. Google Ads (1 col span) */}
          <m.div
            className="md:col-span-1 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconAd className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Google Ads</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Generate high-converting lead pipelines. We optimize search campaigns, target demographics, and maximize ROAS to scale inbound client volumes.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <Link href="/services/google-ads" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Google Ads</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 4. Branding (1 col span) */}
          <m.div
            className="md:col-span-1 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconCompass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Branding</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Establish authority and trust. We design sleek logos, style palettes, type systems, and visual guidelines that align with premium markets.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <Link href="/services/branding" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Branding</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 5. Landing Pages (1 col span) */}
          <m.div
            className="md:col-span-1 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconLayout className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Landing Pages</h3>
              <p className="text-sm text-secondary leading-relaxed">
                High-performance landing pages optimized for maximum sign-ups. Built with clear hierarchy, crisp value proposals, and tactile CTA states.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <Link href="/services/website-development" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Landing Pages</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 6. Performance Optimization (2 cols span) */}
          <m.div
            className="md:col-span-2 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between overflow-hidden min-h-[300px] relative group hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="max-w-md space-y-4 z-10">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconRocket className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Performance Optimization</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Slow page loads bleed conversions. We overhaul assets, compress media layers, optimize bundle footprints, and fine-tune databases to achieve perfect 100/100 Lighthouse score ratings.
              </p>
            </div>
            
            {/* Visual Speed Dial */}
            <div className="absolute right-8 bottom-4 w-48 h-32 neumorphic-sunken rounded-xl p-4 flex flex-col justify-between items-center group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-1.5 text-[9px] font-mono text-green-600 font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Performance Pass</span>
              </div>
              <span className="text-4xl font-black text-green-600 tracking-tighter">100/100</span>
              <span className="text-[9px] font-mono text-secondary">LCP: 0.8s | FID: 12ms</span>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border/60 z-10">
              <Link href="/services/website-development" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Performance Engine</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

          {/* 7. Social Media Marketing (1 col span) */}
          <m.div
            className="md:col-span-1 neumorphic-flat rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="space-y-4">
              <div className="w-9 h-9 rounded-xl bg-accent/5 text-accent flex items-center justify-center">
                <IconShare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Social Marketing</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Connect and engage. We build data-driven social presence strategies, construct ad creatives, and script hooks to maximize visual reach.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <Link href="/services/social-media-marketing" className="inline-flex items-center text-xs font-semibold text-accent group/link">
                <span>Explore Social Marketing</span>
                <IconArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </m.div>

        </div>

      </div>
    </section>
  );
}
