"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconReceipt, 
  IconUsers, 
  IconClock 
} from "@tabler/icons-react";

export default function InstituteOsPage() {
  const benefits = [
    {
      title: "Automated Fee Collections",
      desc: "Automatically triggers personalized WhatsApp payment reminders with custom Razorpay links, recovering outstanding fees without staff intervention.",
      icon: IconReceipt
    },
    {
      title: "QR Code Attendance Logs",
      desc: "Students check in using unique QR codes at the reception. The system logs attendance and automatically texts absent notifications to parents.",
      icon: IconClock
    },
    {
      title: "End-to-End Inquiry CRM",
      desc: "Capture leads directly from Google and Facebook ads. Automatically allocate leads to counselors based on target batches and track conversion funnels.",
      icon: IconUsers
    }
  ];

  const features = [
    {
      title: "Fee Management Engine",
      desc: "Set custom installments per batch, trigger automated bills, send WhatsApp payment alerts, and sync transactions directly with your ledger.",
      badge: "Finance Module",
      details: ["Automated Installments", "Razorpay Webhook Integration", "PDF Invoice Generation", "Outstanding Ageing Reports"]
    },
    {
      title: "Student Admissions CRM",
      desc: "Stop losing ad leads. Consolidate lead channels, log call follow-ups, schedule counseling tasks, and assign batches in a unified interface.",
      badge: "Sales Module",
      details: ["Facebook Ads API Sync", "Automated Counselor Assigns", "Conversion Rate Audits", "Pipeline Stage Analytics"]
    },
    {
      title: "QR Attendance & Alerts",
      desc: "Streamline check-ins at physical centers. Student QR scans update records and automatically text parents if a student misses a batch.",
      badge: "Operations Module",
      details: ["Dynamic QR Code Generation", "Instant Parent Text Alerts", "Faculty Attendance Sheets", "Batch Strength Metrics"]
    },
    {
      title: "Parent & Student Portal",
      desc: "Give parents transparent access to fee ledger statuses, course progression tracking, exam performance charts, and schedule timetables.",
      badge: "Portal Module",
      details: ["Online Fee Receipts", "Exam Performance Tracking", "Faculty Lecture Notes", "Central Circular Announcements"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Reviewing spreadsheets." },
    { title: "Architect", desc: "Batch & fee structures." },
    { title: "Build", desc: "Sync CRM & databases." },
    { title: "Pilot", desc: "14-day WhatsApp launch." },
    { title: "Handover", desc: "Portal access & training." },
    { title: "Optimize", desc: "Ongoing feature updates." }
  ];

  const faq = [
    {
      q: "Can ADX Institute OS sync with our Tally Prime ERP?",
      a: "Yes. We build custom synchronization scripts that export fee collections and batch registrations directly into Tally Prime formats, maintaining audit accuracy."
    },
    {
      q: "Do we have to buy individual student and parent portal licenses?",
      a: "No. You pay a one-time development fee to set up the platform. Once deployed, you can host infinite student, parent, and faculty accounts without per-user subscription fees."
    },
    {
      q: "What WhatsApp limits does Meta enforce on automated templates?",
      a: "Meta initiates numbers on Tier 1 (1,000 unique recipients per 24 hours). As template response and delivery rates remain high, Meta automatically upgrades your limit to Tier 2 (10,000) and Tier 3 (100,000)."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Education Platform"
      title="ADX Institute OS"
      subheading="The unified operating system engineered to automate coaching institutes, prep academies, and physical test centers."
      overviewTitle="Backend Operations Simplified"
      overviewDesc="ADX Institute OS replaces disconnected spreadsheets, separate receipt generators, and manual WhatsApp typing. We construct a central database that synchronizes admissions, batch rosters, fee installment tracking, and parent notification streams."
      overviewMetrics={[
        { label: "Fee Recovery Rate", val: "+84% average" },
        { label: "Staff Time Saved", val: "15 Hours/week" },
        { label: "Licensing Costs", val: "₹0" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Automate Your Academy Operations"
      ctaDesc="Speak with our engineers to schedule an operational diagnostics review. We will map your fee structures and draft a custom database blueprint."
    />
  );
}
