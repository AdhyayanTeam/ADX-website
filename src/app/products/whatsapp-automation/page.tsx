"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconBrandWhatsapp, 
  IconReceipt, 
  IconUsers 
} from "@tabler/icons-react";

export default function WhatsappAutomationPage() {
  const benefits = [
    {
      title: "Official Meta API Integration",
      desc: "Connect directly to Meta's developer servers. We handle business verification, template registration, and API keys, ensuring zero ban risks.",
      icon: IconBrandWhatsapp
    },
    {
      title: "Transactional Alerts Hook",
      desc: "Trigger notifications automatically based on database events (e.g. payment success receipts, batch slot schedules, QR attendance records).",
      icon: IconReceipt
    },
    {
      title: "Shared Multi-Agent Inbox",
      desc: "Provide your team a unified interface to read and reply to WhatsApp threads from one central business number, logging counselor assignments.",
      icon: IconUsers
    }
  ];

  const features = [
    {
      title: "API Trigger Messaging Engine",
      desc: "Sync database webhooks with WhatsApp alerts. Instantly message students when fees are paid, schedules change, or alerts trigger.",
      badge: "Messaging Module",
      details: ["Database Webhook Hooks", "Razorpay Webhook Sync", "Personalized Variable Injection", "Send Queue Logs"]
    },
    {
      title: "Meta Template Approval Console",
      desc: "Register and audit custom template messages with Meta. We format templates, monitor rejection reasons, and ensure compliance guidelines.",
      badge: "Verification Module",
      details: ["Template Text Drafting", "Interactive Button Headers", "Meta Category Allocation", "Quality Score Indicators"]
    },
    {
      title: "Shared Inbox & Console",
      desc: "Equip your customer support and counseling team with a shared inbox. Assign leads to counselors and track conversation durations.",
      badge: "Console Module",
      details: ["Team Member Routing", "Counselor Chat Assignments", "Pre-Saved Quick Replies", "Detailed Thread Logs"]
    },
    {
      title: "Interactive Button Menus",
      desc: "Design quick-reply buttons and lists. Allow users to confirm appointments, download schedules, or select query categories instantly.",
      badge: "UX Module",
      details: ["Quick-Reply Buttons", "List Selection Panels", "Auto-Flow Menus", "Interactive Chat Cards"]
    }
  ];

  const process = [
    { title: "Meta Setup", desc: "Configure developer accounts." },
    { title: "Verification", desc: "Approve business profile." },
    { title: "Template draft", desc: "Draft template messages." },
    { title: "Integration", desc: "Sync backend API lines." },
    { title: "Dashboard", desc: "Configure inbox controls." },
    { title: "Deploy", desc: "Deploy triggers live." }
  ];

  const faq = [
    {
      q: "Does Meta charge for WhatsApp Business API messages?",
      a: "Yes. Meta charges based on 24-hour conversation sessions. Business-Initiated conversations (like payment reminders) typically cost ~₹0.75 per session, and User-Initiated utility conversations cost ~₹0.29 per session in India."
    },
    {
      q: "How does the template approval process work?",
      a: "All proactive notifications must be submitted to Meta for validation (to prevent spam). We format and submit these templates for you; Meta typically validates template drafts in under 15 minutes."
    },
    {
      q: "Can we use our existing mobile number for the official API?",
      a: "Yes. However, you must first delete any existing consumer or business WhatsApp accounts associated with that number. We recommend registering a dedicated corporate virtual number to ensure seamless database API calls."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Meta Cloud API"
      title="WhatsApp Automation Suite"
      subheading="Build secure, API-triggered notifications and shared support boxes directly via the official WhatsApp Business API."
      overviewTitle="No More Spammer Extensions"
      overviewDesc="Using unofficial Chrome extension tools to blast messages often results in your phone number getting permanently banned by Meta. We connect your database directly to the official Meta Cloud API, enabling secure, automated reminders that keep your phone number verified and safe."
      overviewMetrics={[
        { label: "Message Delivery Rate", val: "99.8%" },
        { label: "Meta Ban Risk", val: "0% Official" },
        { label: "Approved Templates", val: "< 15 Mins" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Automate Your Customer Chats"
      ctaDesc="Connect with our developers to review your WhatsApp requirements. We will register your Meta developer account and design an automated message roadmap."
    />
  );
}
