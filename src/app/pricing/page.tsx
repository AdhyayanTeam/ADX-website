"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconReceipt, 
  IconShield, 
  IconTrendingUp 
} from "@tabler/icons-react";

export default function PricingPage() {
  const benefits = [
    {
      title: "Zero License Fees",
      desc: "Never pay recurring per-student or per-staff monthly subscription fees. We build your platform, hand over the system, and your license cost remains zero.",
      icon: IconReceipt
    },
    {
      title: "Full Code Ownership",
      desc: "All database structures, frontend code, and backend services are deployed on your cloud hosting accounts. You have 100% legal ownership of your technology.",
      icon: IconShield
    },
    {
      title: "Direct Utility Cost",
      desc: "Your only ongoing expenses are direct, utility-based server hosting costs (e.g. Supabase, AWS) and Meta conversation credits, which are billed to you directly.",
      icon: IconTrendingUp
    }
  ];

  const features = [
    {
      title: "14-Day Pilot MVP",
      desc: "Get immediately operational. We build and deploy a live prototype addressing your single biggest bottleneck (e.g. automated WhatsApp billing reminders).",
      badge: "Fast Launch",
      details: ["Core Database Setup", "Meta WhatsApp API Sync", "Razorpay Link Hook", "Operational Training"]
    },
    {
      title: "Full custom system development",
      desc: "A complete overhaul of your digital infrastructure, engineering central databases, roles access logs, Tally synchronizers, and analytics dashboards.",
      badge: "Complete System",
      details: ["PostgreSQL Database", "Role-Based Access (RBAC)", "Tally ERP Integrations", "Analytics Reporting Panel"]
    }
  ];

  const process = [
    { title: "Discover", desc: "Operations audit." },
    { title: "Strategy", desc: "Database layout mapping." },
    { title: "Design", desc: "Dashboard wireframing." },
    { title: "Build", desc: "Engineering & API sync." },
    { title: "Launch", desc: "Staff training & deploy." },
    { title: "Support", desc: "Optimization reviews." }
  ];

  const faq = [
    {
      q: "Why do you charge a development fee instead of monthly SaaS subscriptions?",
      a: "Off-the-shelf software charges you per user, penalizing your business as it grows. We believe you should own your tools. By charging a one-time development fee, we build a platform tailored to your exact workflows. You own the code and run it on your own server, keeping your software license costs zero."
    },
    {
      q: "What are the ongoing costs after the system is deployed?",
      a: "Once we hand over the system, there are no ongoing licensing fees from ADX. Your only recurring expenses are direct cloud hosting charges (e.g., Supabase, AWS, which typically cost under ₹2,000/month for SMB scales) and Meta API credits for WhatsApp templates (billed directly by Meta based on conversation counts)."
    },
    {
      q: "How does payment milestone scheduling work?",
      a: "We schedule project payments across clear milestones: 30% on initial signup, 40% on delivery of the 14-Day Pilot prototype, and 30% upon final API validation, deployment, and codebase handover."
    },
    {
      q: "Do you offer post-launch maintenance or retainer plans?",
      a: "Yes. Every project includes 30 days of comprehensive support. Beyond that, we offer optional monthly engineering retainer packages to help manage new workflow additions, template updates, and server updates."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Pricing Model"
      title="Transparent, Value-Driven Pricing"
      subheading="No recurring subscription traps. Pay for professional software engineering and own your digital tools completely."
      overviewTitle="The License-Free Architecture"
      overviewDesc="We build modern software infrastructure that you own. Instead of licensing generic dashboards from external vendors, we shadow your team, write custom code, and deploy it onto your own cloud accounts. This removes per-user SaaS license fees entirely."
      overviewMetrics={[
        { label: "Per-User SaaS Fees", val: "₹0" },
        { label: "Codebase Ownership", val: "100%" },
        { label: "Pilot Deployment", val: "14 Days" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Ready to Eliminate License Subscriptions?"
      ctaDesc="Schedule a 30-minute diagnostic session with our engineers. We will analyze your operations, identify leaks, and deliver a custom blueprint."
    />
  );
}
