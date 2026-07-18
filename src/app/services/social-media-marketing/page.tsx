"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconShare, 
  IconCompass, 
  IconDatabase 
} from "@tabler/icons-react";

export default function SocialMediaMarketingPage() {
  const benefits = [
    {
      title: "Targeted Meta Lead Ads",
      desc: "Reach specific demographics on Facebook and Instagram. We build instant forms that capture user details with minimal friction.",
      icon: IconShare
    },
    {
      title: "Cohesive Visual Guidelines",
      desc: "Establish a consistent brand presence. We design visual presets and color palettes that make your brand stand out in social feeds.",
      icon: IconCompass
    },
    {
      title: "Meta Pixel Integrations",
      desc: "Track user behavior. We configure Meta Pixels and conversion APIs to optimize ad delivery for actions that matter to your business.",
      icon: IconDatabase
    }
  ];

  const features = [
    {
      title: "Meta Lead Form Integration",
      desc: "Connect social campaigns directly to your database. Leads sync in real time for immediate counselor follow-up.",
      badge: "Campaign Module",
      details: ["Instant Lead Forms", "Real-time Webhook Sync", "UTM Parameter Logging", "Double Ingestion Filters"]
    },
    {
      title: "Visual Asset Design",
      desc: "Create eye-catching social graphics. We define grid layouts, font configurations, and asset guidelines.",
      badge: "Design Module",
      details: ["Social Media Visual Kits", "High-Engagement Visual Templates", "Brand Font Hierarchies", "Unified Color Palettes"]
    },
    {
      title: "Creative Copy & Hooks",
      desc: "Write ad headlines and description copy that get clicks. We target audience pain points to increase conversion rates.",
      badge: "Creative Module",
      details: ["High-CTR Hook Writing", "Direct Response Ad Copy", "Engaging Story Scripts", "A/B Testing Experiments"]
    },
    {
      title: "Conversion API Setup",
      desc: "Configure server-side conversion trackers to bypass ad-blockers, ensuring accurate attribution logs.",
      badge: "Tracking Module",
      details: ["Meta Conversion API Sync", "Server-Side Event Trackers", "Custom Conversion Goals", "Audience Retargeting Segments"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Evaluate existing campaigns." },
    { title: "Strategy", desc: "Map target audiences." },
    { title: "Design", desc: "Create ad graphic guidelines." },
    { title: "Integrate", desc: "Install pixels & APIs." },
    { title: "Launch", desc: "Deploy social campaigns live." },
    { title: "Tune", desc: "A/B test creatives & copy." }
  ];

  const faq = [
    {
      q: "How do you optimize social media ad spend?",
      a: "We perform multi-variant A/B tests on ad hooks, copy, and creatives. We monitor cost-per-lead and route budget to top-performing ad sets, keeping acquisition costs low."
    },
    {
      q: "What is the Meta Conversion API and why is it needed?",
      a: "Standard browser pixels are often blocked by iOS restrictions and ad-blockers. The Meta Conversion API connects your database directly to Meta's servers, ensuring all lead events are tracked accurately."
    },
    {
      q: "Do you create video reels and posts for our organic channels?",
      a: "Our core focus is performance marketing (paid ads) and establishing visual guidelines. While we do not manage daily organic postings, we provide templates and script hooks to help your team publish content."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Brand Engagement & Ads"
      title="Social Media Marketing"
      subheading="Build consistent brand authority and generate leads across Facebook and Instagram channels."
      overviewTitle="Paid Social Focused on Conversions"
      overviewDesc="Many social campaigns generate likes but fail to deliver leads. We focus on conversion-driven ad campaigns. We build custom visual guidelines, write engaging ad copy, configure conversion trackers, and route incoming leads directly to your sales pipeline."
      overviewMetrics={[
        { label: "Meta Ad Impressions", val: "+200% average" },
        { label: "Lead Ingestion Delay", val: "< 3 Seconds" },
        { label: "Creative A/B Variants", val: "4 per Ad Set" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Accelerate Inbound Lead Pipelines"
      ctaDesc="Connect with our social media marketing developers to schedule a campaign review. We will audit your current creatives and outline an ad optimization blueprint."
    />
  );
}
