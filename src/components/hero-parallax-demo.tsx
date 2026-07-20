"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Business Platforms",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Centralized SQL Databases",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Multi-Agent Support",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Role-Based Access Control",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Modern Websites",
    link: "/services/website-development",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Next.js & React 19",
    link: "/services/website-development",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Perfect Core Web Vitals",
    link: "/services/website-development",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Structured SEO Data",
    link: "/services/seo",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "AI Automation Pipelines",
    link: "/products/ai-automation",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Triage & Categorization",
    link: "/products/ai-automation",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Automatic Summaries",
    link: "/products/ai-automation",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Intelligent Reminders",
    link: "/products/ai-automation",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Digital Growth & Marketing",
    link: "/services/google-ads",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Google Search Ads",
    link: "/services/google-ads",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "Funnel Conversion Audit",
    link: "/services/social-media-marketing",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
