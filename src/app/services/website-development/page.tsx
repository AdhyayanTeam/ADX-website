"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconBrowser, 
  IconRocket, 
  IconDatabase 
} from "@tabler/icons-react";

export default function WebsiteDevelopmentPage() {
  const benefits = [
    {
      title: "React & Next.js Ecosystem",
      desc: "We build websites using the React/Next.js framework, ensuring fast page routing, server-side rendering (RSC), and robust security.",
      icon: IconBrowser
    },
    {
      title: "Perfect Core Web Vitals",
      desc: "Slow pages lose visitors. We optimize media layers, compress bundles, and structure layout grids to achieve perfect 100/100 Google PageSpeed scores.",
      icon: IconRocket
    },
    {
      title: "Connected CMS Platforms",
      desc: "Easily update blog articles, services list, or customer reviews. We connect clean CMS engines (Sanity, Payload, or markdown files) that keep writing simple.",
      icon: IconDatabase
    }
  ];

  const features = [
    {
      title: "Next.js Architecture",
      desc: "Leverage React Server Components, static generation, and edge routing to deliver instant page rendering.",
      badge: "Architecture Module",
      details: ["React Server Components (RSC)", "Incremental Static Regeneration", "Dynamic Middleware Routing", "Optimum Asset Compression"]
    },
    {
      title: "Semantic SEO Setup",
      desc: "We embed structured data schemas, configure tag hierarchies, and index pages to maximize search engine discoverability.",
      badge: "SEO Module",
      details: ["JSON-LD Schema Schemas", "Semantic HTML5 Markup", "Automated Sitemap Engines", "Meta Tag Architectures"]
    },
    {
      title: "Tailwind CSS v4 & Motion",
      desc: "Implement responsive layouts with custom style systems, fine-tuning typography scales and subtle interactive motions.",
      badge: "Design Module",
      details: ["Tailwind CSS v4 Utilities", "Geist Sans/Mono Typography", "Framer Motion Interactive States", "Adaptive Viewports Check"]
    },
    {
      title: "Database Sync API Hooks",
      desc: "Connect your front-facing forms directly to your databases (PostgreSQL or Supabase), enabling leads sync webhooks.",
      badge: "Integrations Module",
      details: ["Supabase Database Sync", "Meta Lead API Webhooks", "Razorpay Payment Gateways", "Tally ERP Data Pipelines"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Define content structure." },
    { title: "Wireframe", desc: "Map design wireframes." },
    { title: "Develop", desc: "Write clean Next.js code." },
    { title: "Content", desc: "Populate optimized copy." },
    { title: "Audit", desc: "Validate PageSpeed metrics." },
    { title: "Launch", desc: "DNS setup & SSL deploy." }
  ];

  const faq = [
    {
      q: "Why do you use Next.js instead of WordPress or Elementor?",
      a: "WordPress sites rely on heavy plug-ins that slow down rendering speeds and create security vulnerabilities. Next.js produces clean, compiled code, giving you faster load times, better security, and perfect SEO metrics."
    },
    {
      q: "Can our marketing team update pages without writing code?",
      a: "Yes. We integrate lightweight, headless CMS engines like Sanity.io. This allows your team to edit text, upload images, and draft blogs in a simple dashboard, which updates the Next.js site instantly."
    },
    {
      q: "Do we own the website code once it is launched?",
      a: "Yes. All source code is pushed to your private GitHub repository, and deployment accounts are registered directly in your business name."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Production Web Assets"
      title="Website Development"
      subheading="Custom Next.js web applications engineered to rank on search engines, load instantly, and turn traffic into conversions."
      overviewTitle="No Builders. No Code Bloat."
      overviewDesc="We do not use page builders like Elementor or Wix that produce bloated, slow-loading DOM elements. We hand-write custom React code, structuring CSS parameters and assets directly. This guarantees fast performance and a responsive web experience."
      overviewMetrics={[
        { label: "First Contentful Paint", val: "< 0.4 Seconds" },
        { label: "Lighthouse Performance", val: "100/100" },
        { label: "Mobile Responsiveness", val: "100% Fluid" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Build a High-Performance Website"
      ctaDesc="Discuss your web requirements with our developers. We will audit your current page load speeds and outline a performance migration roadmap."
    />
  );
}
