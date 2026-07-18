"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconRoute, 
  IconUsers, 
  IconTrendingUp 
} from "@tabler/icons-react";

export default function CrmPage() {
  const benefits = [
    {
      title: "Instant Lead Synchronizer",
      desc: "Connects directly to your Meta Lead Forms and Google Search Ads. Lead details populate in your central dashboard in under 5 seconds.",
      icon: IconRoute
    },
    {
      title: "Intelligent Lead Allocator",
      desc: "Distributes incoming inquiries automatically to counselors or sales executives based on custom round-robin or batch load schedules.",
      icon: IconUsers
    },
    {
      title: "Visual Pipeline Analytics",
      desc: "Track conversion milestones in real time. Know exactly where leads drop off (e.g. initial call, price pitch, or follow-up phase).",
      icon: IconTrendingUp
    }
  ];

  const features = [
    {
      title: "Ad Network API Integrations",
      desc: "Captures lead data instantly from Facebook Forms, Instagram ads, Google Search extensions, and custom web inquiry structures.",
      badge: "Inbound Module",
      details: ["Real-time Webhook Sync", "Lead Source Attribution", "Double Ingestion Filters", "UTM Tracking Sync"]
    },
    {
      title: "Sales Allocation Console",
      desc: "Distribute tasks fairly. The system tracks counselor schedules, logs allocation speeds, and triggers automated follow-up reminders.",
      badge: "Allocation Module",
      details: ["Round-Robin Distribution", "Counselor Load Balancer", "WhatsApp Follow-up Alerts", "Manual Lead Reassigns"]
    },
    {
      title: "Call Log Database",
      desc: "Track client communication history. Store phone logs, record conversation feedback, and schedule call dates.",
      badge: "Activity Module",
      details: ["Call Duration Triggers", "Counselor Feedback Logs", "Scheduled Follow-up Dates", "One-Click Dialer Sync"]
    },
    {
      title: "Conversion Reports & Audits",
      desc: "Analyze counselor sales metrics. Identify best-performing channels, conversion rates, cost-per-lead (CPL), and conversion pipelines.",
      badge: "Analytics Module",
      details: ["Source-Wise Conversion Rates", "Counselor Performance Metrics", "Average Follow-Up Speeds", "Monthly Enrollment Trends"]
    }
  ];

  const process = [
    { title: "Shadowing", desc: "Audit manual lead paths." },
    { title: "Schema Map", desc: "Define pipeline stages." },
    { title: "Engineering", desc: "Write database & sync APIs." },
    { title: "Integrate", desc: "Connect Meta/Google Ads." },
    { title: "Onboarding", desc: "Counselor training." },
    { title: "Tuning", desc: "Optimize lead allocation." }
  ];

  const faq = [
    {
      q: "Can we add custom data fields to our lead records?",
      a: "Yes. Since we build a custom database specifically for your business, we can configure infinite custom fields (e.g. academic scores, previous institute history, targeted batches) without restriction."
    },
    {
      q: "Does this sync with Android call-tracking applications?",
      a: "Yes. We can integrate call-tracking webhooks from Android applications, logging counselor talk-times and follow-up outcomes directly into each lead profile."
    },
    {
      q: "What happens if our counselors are offline or out-of-office?",
      a: "The system includes an allocation toggle. Counselors can check out, and the system automatically reroutes active leads to available online personnel, keeping response times low."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Sales Pipeline"
      title="Business CRM Engine"
      subheading="A custom sales CRM and lead allocation database built to capture, distribute, and track customer conversions instantly."
      overviewTitle="No More Leaked Leads"
      overviewDesc="Many SMBs lose up to 30% of their ad leads because of slow counselor follow-ups and unorganized Excel tracking. We build a streamlined CRM dashboard that captures leads from your ads, triggers automated WhatsApp notifications, and monitors counselor follow-ups in seconds."
      overviewMetrics={[
        { label: "Lead Ingestion speed", val: "< 5 Seconds" },
        { label: "Follow-up speed increase", val: "+40%" },
        { label: "Lead leaks eliminated", val: "100%" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Streamline Your Sales Pipeline"
      ctaDesc="Speak with our systems team to schedule a diagnostic session. We will audit your current lead channels and design a custom CRM blueprint."
    />
  );
}
