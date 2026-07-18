"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconSearch, 
  IconCompass, 
  IconBrowser 
} from "@tabler/icons-react";

export default function SeoPage() {
  const benefits = [
    {
      title: "Structured Schema Markup",
      desc: "We write programmatic JSON-LD data schemas directly into your headers, helping Google crawlers index products, reviews, and FAQ sections.",
      icon: IconSearch
    },
    {
      title: "Local Map Optimization",
      desc: "Target regional searches. We optimize your Google Business Profile, structure localized map citations, and streamline coordinates to rank for local keywords.",
      icon: IconCompass
    },
    {
      title: "Speed & Web Vital Audits",
      desc: "Google ranks fast sites. We optimize Core Web Vitals (LCP, CLS, FID) to ensure your page loading parameters align with search requirements.",
      icon: IconBrowser
    }
  ];

  const features = [
    {
      title: "JSON-LD Structured Schemas",
      desc: "Implement structured data models to generate Google rich snippets, stars, FAQs, and price cards in search results.",
      badge: "Schema Module",
      details: ["LocalBusiness Schema", "SoftwareApplication Schema", "FAQ Snippet Markup", "Breadcrumb Data Indexing"]
    },
    {
      title: "Local Maps Citations",
      desc: "Establish regional search authority. We audit physical maps, coordinate business details, and target localized keywords.",
      badge: "Local SEO Module",
      details: ["Google Profile Verification", "NAP Directory Citations", "Review Keyword Optimizations", "Location Coordinates Sync"]
    },
    {
      title: "Technical Site Indexing",
      desc: "Identify crawling errors, configure secure robots.txt rules, establish canonical links, and optimize site structures.",
      badge: "Crawling Module",
      details: ["XML Sitemap Configuration", "Canonical Link Mapping", "Robots.txt Tuning", "404 Redirect Audits"]
    },
    {
      title: "Keyword & Competitor Maps",
      desc: "Target high-intent search keywords. We audit competitor search rankings and map structural content strategies.",
      badge: "Strategy Module",
      details: ["High-Intent Keyword Maps", "Competitor Search Audits", "Content Gap Analysis", "Rank Tracking Sync"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Scan current search indexes." },
    { title: "Research", desc: "Map high-intent keywords." },
    { title: "Schema", desc: "Write JSON-LD schemas." },
    { title: "Optimize", desc: "Update page metadata." },
    { title: "Maps", desc: "Sync Google Profile citations." },
    { title: "Report", desc: "Track keyword rank changes." }
  ];

  const faq = [
    {
      q: "How long does it take to rank on Google's first page?",
      a: "SEO is a long-term strategy. While technical site indexing and local Google Maps optimizations show visible keyword improvements in 2 to 4 weeks, ranking for highly competitive terms typically takes 3 to 6 months of consistent authority development."
    },
    {
      q: "What is Schema markup and why does it matter?",
      a: "Schema markup is code structured in JSON-LD format that tells search engines exactly what your content represents (e.g. product price, local business hours, review stars). This allows Google to display your pages with descriptive 'rich snippets', increasing organic click rates."
    },
    {
      q: "Do you guarantee first-place rankings?",
      a: "No ethical agency guarantees absolute first-place rankings, as Google's algorithm changes constantly. We focus on structured search engine parameters: lightning-fast speeds, validated markup, semantic code, and localized authority, which consistently drive page traffic growth."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Organic Search Authority"
      title="Search Engine Optimization"
      subheading="Establish search authority for high-intent keywords, driving localized organic customer traffic straight to your website."
      overviewTitle="No Keyword Stuffing. Pure Engineering."
      overviewDesc="Many agencies write low-quality, keyword-stuffed copy that fails to rank. We approach SEO technically. We verify sitemaps, inject structured JSON-LD schemas, configure canonical tags, optimize mobile viewports, and audit location coordinates to establish real search authority."
      overviewMetrics={[
        { label: "Organic Traffic Growth", val: "+150% average" },
        { label: "Core Web Vitals Pass", val: "100% Passed" },
        { label: "Local Map Rankings", val: "Top 3 Map Pack" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Accelerate Organic Traffic Growth"
      ctaDesc="Connect with our SEO developers to schedule a search audit. We will analyze your search indexes and design a custom sitemap and schema blueprint."
    />
  );
}
