"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What exactly does ADX do? Are you a website agency?",
      cat: "Automation",
      a: "No, ADX is a Digital Growth & Automation company. We do not just design pretty pages. We engineer the internal digital infrastructure for your business. This includes connecting front-facing websites to central SQL databases, establishing automated WhatsApp communication loops, deploying AI assistants for lead classification, and integrating accounting systems like Tally."
    },
    {
      q: "How is ADX different from buying an off-the-shelf CRM like HubSpot or Zoho?",
      cat: "Automation",
      a: "Off-the-shelf CRM platforms are built to be rigid and generic, forcing your staff to change their daily routines to fit the software. They also lock you into expensive monthly subscriptions. ADX builds custom business platforms directly around your specific operations and workflows. You pay once for development and own your code and database completely, with zero per-user subscription fees."
    },
    {
      q: "What is ADX Institute OS and who is it for?",
      cat: "Products",
      a: "ADX Institute OS is our flagship operating system built specifically for coaching institutes and test prep academies in India. It consolidates student inquiries, fee installments, QR check-in attendance, study materials, and faculty lecture schedules into one unified panel. It automates fee reminder alerts and links via WhatsApp, recovering outstanding payments without staff manual intervention."
    },
    {
      q: "Do you integrate with our existing tools like Tally Prime, Razorpay, or Google Sheets?",
      cat: "Integration",
      a: "Yes. We specialize in building reliable integration pipelines. We connect your custom CRM to Tally Prime (for ledger updates and GST billing), Razorpay or PayU (for instant payment links), and Google Sheets (for quick data exports or imports), keeping your systems synchronized in real time."
    },
    {
      q: "How does the WhatsApp automation work? Do we need our own WhatsApp Business API?",
      cat: "WhatsApp",
      a: "We set up and integrate the official Meta WhatsApp Cloud API directly for your business number. This ensures you do not get banned for sending automated messages (unlike unofficial browser extensions). You pay Meta directly for conversation credits, and we manage the template approval process and build the message trigger logic."
    },
    {
      q: "Who owns the database, server hosting, and website code?",
      cat: "Hosting",
      a: "You do. Everything we build is deployed directly onto your own cloud accounts (such as AWS, Supabase, or Vercel). We set up the infrastructure for you, transfer full ownership, and hand over the complete repository files upon launch. You are never locked into ADX."
    },
    {
      q: "How long does a typical custom operational build take?",
      cat: "Timeline",
      a: "We believe in rapid value delivery. We typically deploy a functional 'Pilot Version' of your primary bottleneck (e.g., WhatsApp lead intake or fee reminders) in just 14 days. The full-scale system, including deep integrations and custom dashboards, is fully finalized in 4 to 8 weeks depending on complexity."
    },
    {
      q: "How do your pricing models work? Are there recurring licensing fees?",
      cat: "Pricing",
      a: "We operate on a project-based development fee. You pay for the design, engineering, and deployment of your system in milestones. Once launched, there are no recurring licensing fees from ADX. Your only ongoing expenses are direct, third-party cloud hosting costs (e.g., Supabase or AWS) and Meta conversation credits, which are billed to you directly."
    },
    {
      q: "How secure is our student/patient data with ADX systems?",
      cat: "Security",
      a: "Security is built in. All data resides in encrypted PostgreSQL databases hosted on your cloud account. We implement role-based access control (RBAC), meaning your receptionists, tutors, and accounting staff only see the columns and data they need to perform their duties. We also sign a Non-Disclosure Agreement (NDA) before viewing your data."
    },
    {
      q: "Do you provide support and feature updates after deployment?",
      cat: "Support",
      a: "Yes. Every launch includes 30 days of comprehensive post-deployment support to troubleshoot bugs and train your team. After that, we offer optional monthly engineering retainer packages to handle database tuning, new workflow additions, and routine template approvals."
    },
    {
      q: "What is your SEO development process for websites?",
      cat: "SEO",
      a: "Every website we build is SEO-first. We hand-write semantic HTML, program JSON-LD structured data schemas, optimize media assets for Google PageSpeed parameters, and design responsive viewports. We focus on search engine parameters, ensuring your site achieves perfect Core Web Vitals (LCP < 1.0s, FID < 20ms) to rank organically."
    },
    {
      q: "Do you help manage Google Search and Meta Ads campaigns?",
      cat: "Marketing",
      a: "Yes, as part of our Digital Growth services. We handle account setup, target high-intent search keywords, write conversion copy, set up conversion trackers, and audit lead drop-offs. We connect your ads directly to your custom intake CRM, eliminating lag between ad clicks and follow-ups."
    },
    {
      q: "How does the WhatsApp payment recovery work with Razorpay?",
      cat: "WhatsApp",
      a: "When a payment installment is due, our backend automatically generates a unique Razorpay link, checks the customer's WhatsApp status, and sends a template reminder. Once payment is completed, Razorpay triggers a webhook, updating your database, logging the transaction, sending a WhatsApp receipt, and updating your staff dashboard in seconds."
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold">
            Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-secondary leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our business platforms, pricing, timelines, integrations, and data ownership.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="neumorphic-flat rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/25"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="space-y-1 pr-4">
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                      {faq.cat}
                    </span>
                    <span className="text-base font-bold text-foreground tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 text-secondary">
                    {isOpen ? <IconChevronUp className="w-4 h-4 text-accent" /> : <IconChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-secondary leading-relaxed border-t border-border">
                        {faq.a}
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
  );
}
