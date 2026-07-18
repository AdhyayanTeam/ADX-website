"use client";

import Link from "next/link";
import { 
  IconCheck, 
  IconUsers, 
  IconCalendar, 
  IconReceipt, 
  IconBolt, 
  IconShield, 
  IconChevronRight 
} from "@tabler/icons-react";

export default function PlatformPage() {
  const capabilities = [
    {
      title: "Central Customer Memory",
      desc: "Every conversation, payment receipt, appointment schedule, and follow-up log stays connected in a secure SQL database. No more searching through personal devices.",
      bullets: [
        "Consolidated single-view records. Past invoices, WhatsApp texts, and course enrollments are in one place.",
        "Any staff member can pick up where another left off. No context gets lost between shifts or counselor transfers.",
        "Onboard new staff instantly. Visual client files make learning customer context simple."
      ],
      type: "memory",
    },
    {
      title: "Omnichannel Communications",
      desc: "Ensure every customer inquiry is recorded and answered. Auto-confirm bookings and deliver reminders with Meta API templates.",
      bullets: [
        "Self-service booking. Clients view real-time available slots and secure bookings via a WhatsApp menu.",
        "Proactive reminders. Automated templates prompt clients to confirm or reschedule appointments in 1 tap.",
        "Automated checkout receipts. The database triggers PDF invoices to the client's chat upon payment."
      ],
      type: "communication",
    },
    {
      title: "Connected Task Workflows",
      desc: "Guide tasks to completion systematically. Let databases manage actions so work moves forward without manual coordination.",
      bullets: [
        "Sync schedules. WhatsApp bookings update provider calendars and notify reception instantly.",
        "Triggered handovers. Completing a task alerts the next department automatically (e.g. sales to onboarding).",
        "Memory-independent sequences. The custom database manages task assignments and due dates."
      ],
      type: "workflow",
    },
    {
      title: "Automated Collections",
      desc: "Track active receivables transparently. Send payment reminders automatically, reconciliation of ledgers happens immediately.",
      bullets: [
        "1-Click UPI & Card payments. Instantly trigger WhatsApp payment alerts with custom Razorpay links.",
        "Direct webhook reconciliation. Completed transactions update student ledger balances without manual audits.",
        "Ageing summaries. Monitor outstanding fees, installment plans, and transaction receipts in one central dashboard."
      ],
      type: "payments",
    },
    {
      title: "Real-time Metrics & Insights",
      desc: "Monitor operational bottlenecks and team efficiency metrics before they impact profitability. No spreadsheets needed.",
      bullets: [
        "Inbound analytics. Compare daily incoming inquiries against response latency metrics.",
        "Team loads. Track counselor conversion performance, follow-up speeds, and task backlogs.",
        "Revenue audits. Monitor billing collections, pending dues, and client churn flags."
      ],
      type: "analytics",
    },
  ];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Our Engine
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Everything your business needs — in one place.
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            We connect the segments of your business that currently run in silos. From ad lead ingestion to Tally reconciling, everything stays unified.
          </p>
        </div>
      </section>

      {/* Main capabilities checklist */}
      <section className="max-w-6xl mx-auto px-6 mt-16 lg:mt-24 space-y-16">
        {capabilities.map((c, index) => (
          <div
            key={c.title}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 ${
              index !== capabilities.length - 1 ? "border-b border-border" : ""
            }`}
          >
            {/* Description */}
            <div className={`lg:col-span-6 space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">
                Capability 0{index + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{c.title}</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">{c.desc}</p>
              
              <ul className="space-y-2.5 pt-4 border-t border-border">
                {c.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start text-xs text-secondary leading-relaxed">
                    <span className="text-accent mr-2 font-bold font-mono">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated Live UI Preview */}
            <div className="lg:col-span-6 flex justify-center">
              
              {c.type === "analytics" && (
                <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-mono text-[10px] font-bold text-foreground">Inquiries Trend</span>
                    <span className="font-mono text-[9px] text-accent bg-accent/5 px-2 py-0.5 rounded">WEEKLY REPORT</span>
                  </div>
                  <div className="h-32 flex items-end gap-3 pb-2 border-b border-border">
                    <div className="flex-1 bg-border rounded-t-lg" style={{ height: "40%" }}></div>
                    <div className="flex-1 bg-border rounded-t-lg" style={{ height: "60%" }}></div>
                    <div className="flex-1 bg-accent rounded-t-lg shadow-[0_4px_12px_rgba(0,82,255,0.15)]" style={{ height: "90%" }}></div>
                    <div className="flex-1 bg-border rounded-t-lg" style={{ height: "50%" }}></div>
                  </div>
                  <span className="font-mono text-[9px] text-secondary block text-center uppercase">
                    Inbound Lead Sync Velocity
                  </span>
                </div>
              )}

              {c.type === "communication" && (
                <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col gap-2 font-mono text-xs">
                  <div className="bg-[#FAFAFA] border border-border p-3 rounded-lg text-secondary text-center">
                    Lead form filled on Facebook
                  </div>
                  <div className="text-center text-accent font-bold">↓</div>
                  <div className="bg-accent/5 border border-accent/15 p-3 rounded-lg text-accent text-center font-bold">
                    WhatsApp auto-replies with slots
                  </div>
                  <div className="text-center text-accent font-bold">↓</div>
                  <div className="bg-[#FAFAFA] border border-border p-3 rounded-lg text-secondary text-center">
                    Client books & pays via Razorpay
                  </div>
                </div>
              )}

              {c.type === "memory" && (
                <div className="w-full max-w-md bg-white border border-border rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.01)] font-mono text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#FAFAFA] border-b border-border">
                        <th className="p-3 text-secondary text-[10px] font-bold uppercase">Customer</th>
                        <th className="p-3 text-secondary text-[10px] font-bold uppercase">Last Activity</th>
                        <th className="p-3 text-secondary text-[10px] font-bold uppercase">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-foreground font-bold">R. Sharma</td>
                        <td className="p-3 text-secondary">Fee Installment</td>
                        <td className="p-3 text-red-500 font-bold">₹2,500 due</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-foreground font-bold">A. Patel</td>
                        <td className="p-3 text-secondary">QR Check-in</td>
                        <td className="p-3 text-emerald-600 font-bold">Paid</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-foreground font-bold">S. Khan</td>
                        <td className="p-3 text-secondary">WhatsApp booking</td>
                        <td className="p-3 text-red-500 font-bold">₹1,800 due</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {c.type === "workflow" && (
                <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-bold text-foreground">Automation Flow</span>
                    <span className="text-[9px] text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">ACTIVE</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "1. Lead captured from Ads", done: true },
                      { label: "2. WhatsApp booking menu sent", done: true },
                      { label: "3. Slot confirmed in doctor database", done: true },
                      { label: "4. Razorpay checkout generated", done: false },
                      { label: "5. Invoice pushed to client chat", done: false },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold border ${
                          step.done 
                            ? "bg-accent/5 text-accent border-accent/20" 
                            : "bg-[#FAFAFA] text-secondary border-border"
                        }`}>
                          {step.done ? "✓" : i + 1}
                        </span>
                        <span className={step.done ? "text-foreground font-bold" : "text-secondary"}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {c.type === "payments" && (
                <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <div>
                      <span className="text-[9px] text-secondary uppercase block">Today Collected</span>
                      <span className="text-lg font-bold text-foreground">₹12,500</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-red-500 uppercase block">Pending</span>
                      <span className="text-lg font-bold text-red-500">₹3,200</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-secondary">
                      <span>R. Sharma</span>
                      <span className="text-red-500">₹2,500 (Overdue)</span>
                    </div>
                    <div className="flex justify-between text-secondary">
                      <span>S. Iyer</span>
                      <span className="text-red-500">₹700 (Overdue)</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
          Ecosystem Build
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Get a Custom Systems Blueprint</h2>
        <p className="text-sm text-secondary leading-relaxed max-w-lg mx-auto">
          Connect your workflows, payments, messaging, and databases without ongoing user license fees. Speak with our systems team today.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,82,255,0.15)]"
        >
          Schedule Operational Audit
        </Link>
      </section>

    </main>
  );
}
