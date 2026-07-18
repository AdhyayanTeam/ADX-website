"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconBrain, 
  IconRoute, 
  IconCpu 
} from "@tabler/icons-react";

export default function AiAutomationPage() {
  const benefits = [
    {
      title: "Automated Inquiry Triage",
      desc: "Automatically reads incoming customer queries from WhatsApp or forms, tags their intent (e.g. fee dispute, new course, support), and routes to the correct team.",
      icon: IconBrain
    },
    {
      title: "Cognitive Data Parsing",
      desc: "Extracts key attributes (e.g. phone numbers, names, batch preferences, payment dates) from unstructured paragraphs and writes them directly to database columns.",
      icon: IconRoute
    },
    {
      title: "Counselor Assistance",
      desc: "Auto-generates high-intent follow-up draft responses, giving your counselor or salesperson a 1-click reply template tailored to the customer's query.",
      icon: IconCpu
    }
  ];

  const features = [
    {
      title: "Intent Classification Pipeline",
      desc: "Process incoming text using natural language models to identify customer interest, query urgency, and appropriate routing flags.",
      badge: "Classification Module",
      details: ["Customer Intent Tagging", "Priority Score Algorithms", "Language Identification", "Automatic Staff Assignments"]
    },
    {
      title: "Call & Query Summarizer",
      desc: "Transcribe counselor call logs, parse core customer requirements, highlight objections, and output a concise, queryable summary.",
      badge: "Analytics Module",
      details: ["Objection Flags", "Counselor Compliance Check", "Action Item Extraction", "Database Search Indexing"]
    },
    {
      title: "Autonomous WhatsApp Agents",
      desc: "Set up sandboxed WhatsApp agents that handle routine administrative FAQs (e.g. class schedules, center maps, booking times) after hours.",
      badge: "Agentic Module",
      details: ["FAQ Auto-Answers", "Interactive Button Options", "Human-Agent Handover Hooks", "Conversation Log Audits"]
    },
    {
      title: "Structured Data Converters",
      desc: "Convert PDFs, email receipts, and chat logs into clean JSON data, updating student profiles and financial records automatically.",
      badge: "Data Module",
      details: ["Unstructured Text Extraction", "Database Sync Triggers", "Error Boundary Logs", "Audit Trail Creation"]
    }
  ];

  const process = [
    { title: "Audit", desc: "Map manual text/data entry tasks." },
    { title: "Model Select", desc: "Select OpenAI/Claude pipelines." },
    { title: "Integrate", desc: "Embed in CRM & WhatsApp endpoints." },
    { title: "Fine-tune", desc: "Input system guidelines & examples." },
    { title: "Testing", desc: "Test classification accuracy." },
    { title: "Monitor", desc: "Continuous performance audits." }
  ];

  const faq = [
    {
      q: "How do you prevent the AI from hallucinating or sharing incorrect details?",
      a: "We implement Retrieval-Augmented Generation (RAG) and strict semantic guards. The system is restricted to referencing your verified database (e.g., pricing sheets, maps, FAQs) and is configured to fallback to a staff transfer if confidence scores drop below 85%."
    },
    {
      q: "Is our business data secure and kept confidential by these models?",
      a: "Yes. We configure direct enterprise API lines with OpenAI or Anthropic. Under these terms, your inputs are never used to train public models, and all logs are stored in your secure Supabase/AWS instances."
    },
    {
      q: "What are the ongoing API running fees for AI tools?",
      a: "We optimize model selection (using smaller, faster models like GPT-4o-mini for routing and larger models like Claude 3.5 Sonnet for deep summaries). Average API operating costs for typical SMB volumes remain under ₹1,500 per month."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Cognitive Operations"
      title="AI Operations Automation"
      subheading="Integrate cognitive AI pipelines directly into your databases, CRM tables, and WhatsApp chats to eliminate manual sorting."
      overviewTitle="Intelligence Mapped to Code"
      overviewDesc="Instead of forcing your staff to manually parse registration forms and classify student emails, our AI pipelines read, categorize, and update your database columns automatically. We build custom prompts and system boundaries designed for your business operations."
      overviewMetrics={[
        { label: "Lead parsing accuracy", val: "95% accuracy" },
        { label: "Data entry labor cuts", val: "-80%" },
        { label: "Average processing time", val: "1.2 Seconds" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Deploy AI in Your Daily Pipeline"
      ctaDesc="Connect with our AI systems architects to schedule a workflow audit. We will identify repetitive text sorting tasks and outline an automation roadmap."
    />
  );
}
