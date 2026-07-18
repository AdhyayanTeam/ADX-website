"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconSearch, 
  IconDatabase, 
  IconTrendingUp 
} from "@tabler/icons-react";

export default function GoogleAdsPage() {
  const benefits = [
    {
      title: "High-Intent Keyword Targeting",
      desc: "We bid on search terms that show direct buyer intent (e.g. 'NEET coaching near me', 'best dentist in Delhi'), avoiding wasted clicks on generic words.",
      icon: IconSearch
    },
    {
      title: "Tag Tracker Integrations",
      desc: "We configure Google Tag Manager webhooks to audit precisely which clicks turn into database leads, optimizing bidding algorithms for high conversions.",
      icon: IconDatabase
    },
    {
      title: "Cost-Per-Lead (CPL) Cuts",
      desc: "By applying negative keyword parameters and tuning demographics, we focus your budget on active leads, lowering cost-per-acquisition metrics.",
      icon: IconTrendingUp
    }
  ];

  const features = [
    {
      title: "Keyword Bid Optimization",
      desc: "Structure campaigns into tight, relevant ad groups. Bid on exact search matches to keep click costs low.",
      badge: "Campaign Module",
      details: ["Phrase & Exact Keyword Match", "Competitor Bidding Tactics", "Negative Keyword Exclusions", "Localized Geotargeting Filters"]
    },
    {
      title: "GTM Conversion Setup",
      desc: "Configure analytics trackers to monitor lead capture, phone call clicks, and WhatsApp button selections.",
      badge: "Tracking Module",
      details: ["Google Tag Manager Sync", "Dynamic Event Trackers", "Custom Conversion Goals", "Lead Source Attribution"]
    },
    {
      title: "Conversion Copywriting",
      desc: "We draft headlines and description copy that align with search intent, raising your quality score on Google.",
      badge: "Creative Module",
      details: ["High-CTR Copywriting", "Dynamic Ad Headers", "Promotion Extensions Setup", "A/B Testing Experiments"]
    },
    {
      title: "CRM Connection Hooks",
      desc: "Connect lead capture forms directly to your CRM database, triggering automated WhatsApp counselor notifications.",
      badge: "Integration Module",
      details: ["Immediate API Ingestion", "WhatsApp Counselor Alerts", "UTM Data Logging", "Counselor Allocation Rules"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Evaluate existing ad spend." },
    { title: "Keyword", desc: "Select high-intent search terms." },
    { title: "Copy", desc: "Draft high-CTR descriptions." },
    { title: "Track", desc: "Install GTM conversion tags." },
    { title: "Launch", desc: "Deploy search ads live." },
    { title: "Optimize", desc: "Refine bids & negative keywords." }
  ];

  const faq = [
    {
      q: "What ad budget should we start with?",
      a: "We recommend starting with a daily testing budget of ₹1,000 to ₹2,000 to audit initial click-through rates (CTR) and CPL values. We scale the budget systematically once conversion metrics demonstrate a positive return on investment."
    },
    {
      q: "How do you prevent useless or spam clicks?",
      a: "We compile comprehensive negative keyword lists (e.g. excluding terms like 'free', 'jobs', 'salary') and restrict geographic targeting parameters to the specific service areas of your business."
    },
    {
      q: "Does ADX integrate ads with our internal databases?",
      a: "Yes. Inquiries submitted on ad landing pages are routed directly to your custom CRM, enabling immediate counselor allocation and automated WhatsApp receipts."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Performance Search Marketing"
      title="Google Ads (PPC)"
      subheading="Generate high-converting lead pipelines. We build targeted search campaigns, optimize CPL metrics, and maximize ROAS milestones."
      overviewTitle="Paid Search Built for ROI"
      overviewDesc="Many agencies bid on broad terms and ignore conversion drop-offs, wasting ad budget. We design precise ad pipelines. We identify search terms showing direct buyer intent, write compelling copy, set up conversion trackers, and connect pipelines directly to your CRM, ensuring leads get follow-ups within minutes."
      overviewMetrics={[
        { label: "Average Campaign ROAS", val: "+300% target" },
        { label: "Cost-Per-Lead Cuts", val: "-30% average" },
        { label: "Lead Ingestion Delay", val: "< 5 Seconds" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Accelerate Paid Lead Pipelines"
      ctaDesc="Connect with our performance marketing developers to schedule a campaign review. We will audit your current keywords and outline an ad optimization blueprint."
    />
  );
}
