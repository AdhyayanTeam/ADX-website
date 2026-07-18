"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { 
  IconSchool, 
  IconDatabase, 
  IconBrain, 
  IconBrandWhatsapp, 
  IconArrowRight,
  IconCircleCheck
} from "@tabler/icons-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Institute OS",
      eyebrow: "Education Platform",
      desc: "Our flagship operating system built to automate coaching classes and academies. Tracks batches, fee installments, attendance, and student inquiry pipelines.",
      icon: IconSchool,
      link: "/products/institute-os",
      features: ["WhatsApp automated fee receipts", "Central batch allocations", "QR code check-in logs", "Parent & student portal"],
      color: "border-blue-500/10 hover:border-blue-500/30 group-hover:text-blue-500",
      bg: "bg-blue-500/5"
    },
    {
      title: "Business CRM",
      eyebrow: "Lead & Pipeline Management",
      desc: "A custom lead allocation and sales funnel tracker designed around your business. Captures inbound leads from ads, assigns tasks, and tracks follow-up metrics.",
      icon: IconDatabase,
      link: "/products/crm",
      features: ["Meta Ads lead integration", "Automatic counselor allocation", "Milestone conversion funnels", "Activity logging database"],
      color: "border-indigo-500/10 hover:border-indigo-500/30 group-hover:text-indigo-500",
      bg: "bg-indigo-500/5"
    },
    {
      title: "AI Automation Engine",
      eyebrow: "Artificial Intelligence Integration",
      desc: "Embed cognitive AI into your daily operations. Automatically triage incoming lead inquiries, generate summaries, and trigger alerts for hot pipeline items.",
      icon: IconBrain,
      link: "/products/ai-automation",
      features: ["Cognitive lead classification", "Auto email & chat drafts", "Dynamic pipeline alerts", "Intelligent data parsing"],
      color: "border-purple-500/10 hover:border-purple-500/30 group-hover:text-purple-500",
      bg: "bg-purple-500/5"
    },
    {
      title: "WhatsApp Automation Suite",
      eyebrow: "Meta Cloud API Messaging",
      desc: "Build automated chat experiences directly via the official WhatsApp Cloud API. Send payment links, appointment slot bookings, and receipts automatically.",
      icon: IconBrandWhatsapp,
      link: "/products/whatsapp-automation",
      features: ["Razorpay installment alerts", "Custom template message approvals", "Multi-agent support console", "Verified business API integration"],
      color: "border-emerald-500/10 hover:border-emerald-500/30 group-hover:text-emerald-500",
      bg: "bg-emerald-500/5"
    }
  ];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Platforms
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Our Business Products
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Custom operational platforms designed to solve specific bottlenecks. We build solid, integrated, and license-free digital systems for growing SMBs.
          </p>
        </div>
      </section>

      {/* Products Grid list */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <m.div
                key={product.title}
                className={`group bg-white border border-border rounded-2xl p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-all duration-300 ${product.color}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
              >
                <div className="space-y-6">
                  {/* Top info */}
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-11 h-11 rounded-xl ${product.bg} flex items-center justify-center text-secondary group-hover:text-accent transition-colors duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider block">{product.eyebrow}</span>
                      <h2 className="text-xl font-bold tracking-tight text-foreground">{product.title}</h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-secondary leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Bullets list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-border">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs text-secondary font-mono">
                        <IconCircleCheck className="w-4 h-4 text-accent mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer link */}
                <div className="mt-8 pt-6 border-t border-border flex justify-end">
                  <Link
                    href={product.link}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all"
                  >
                    <span>Explore Product</span>
                    <IconArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </m.div>
            );
          })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Need a custom feature set or specific platform?</h2>
        <p className="text-sm text-secondary leading-relaxed max-w-lg mx-auto">
          We engineer tailor-made solutions mapped directly around your existing operations. We analyze your requirements and deliver diagnostic blueprints.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-foreground text-white hover:bg-[#222] active:scale-[0.98] transition-all"
        >
          Book Operational Diagnostic
        </Link>
      </section>

    </main>
  );
}
