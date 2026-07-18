"use client";

import Link from "next/link";
import { IconArrowRight, IconShield, IconDeviceHeartMonitor } from "@tabler/icons-react";

export default function DiscoveryPage() {
  const steps = [
    {
      num: "01",
      title: "Pre-Call Setup Profile",
      desc: "Tell us about your industry vertical, monthly student/client volumes, and current software tools (e.g. Sheets, Tally, custom CRM) before the call so we can prepare.",
    },
    {
      num: "02",
      title: "Operational Walkthrough",
      desc: "We schedule a 30-minute Zoom session to watch how your staff manually performs intake, tracks follow-ups, schedules slots, and triggers bills.",
    },
    {
      num: "03",
      title: "Diagnostic Report Delivery",
      desc: "Within 48 hours of our call, you receive a complete blueprint showing exactly where manual operations are leaking hours and revenue, along with a firm implementation estimate.",
    },
  ];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Methodology
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            The Operational Discovery Process.
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            We don&apos;t sell generic software templates. We analyze your team&apos;s real-world workflows and engineer custom engines tailored to your staff.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Stages */}
        <div className="lg:col-span-6 space-y-10">
          {steps.map((item) => (
            <div key={item.num} className="border-l-2 border-border hover:border-accent pl-6 transition-all duration-300 space-y-2">
              <span className="font-mono text-[10px] text-accent tracking-widest block font-bold">
                STAGE {item.num}
              </span>
              <h3 className="text-xl font-bold text-foreground tracking-tight">{item.title}</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Column: Simulated Diagnostic Report */}
        <div className="lg:col-span-6 neumorphic-flat rounded-2xl overflow-hidden">
          <div className="bg-white px-6 py-4 border-b border-border flex justify-between items-center">
            <span className="font-mono text-xs text-secondary uppercase tracking-widest font-bold">
              Simulated Diagnostic Report
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-500/5 text-red-500 border border-red-500/10 uppercase font-bold">
              High Leakage Identified
            </span>
          </div>
          
          <div className="p-8 space-y-6">
            <h3 className="text-lg font-bold text-foreground tracking-tight">Operational Status Audit</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="neumorphic-sunken p-4 rounded-xl space-y-1">
                <span className="font-mono text-[9px] text-secondary uppercase block">Response Latency</span>
                <span className="text-base font-mono font-bold text-red-500">12 Mins (Avg)</span>
              </div>
              <div className="neumorphic-sunken p-4 rounded-xl space-y-1">
                <span className="font-mono text-[9px] text-secondary uppercase block">Lead Decay Rate</span>
                <span className="text-base font-mono font-bold text-red-500">32% leakage</span>
              </div>
            </div>

            <div className="neumorphic-sunken p-4 rounded-xl font-mono text-[11px] text-secondary space-y-2">
              <div className="text-[9px] font-bold text-foreground uppercase tracking-widest">Recommended Pipeline</div>
              <div className="flex gap-2 items-center justify-center py-2 border-b border-border/80">
                <span className="bg-white px-2 py-0.5 rounded border border-border text-[10px]">Lead Ingest</span>
                <span className="text-accent">→</span>
                <span className="bg-accent/5 border border-accent/10 text-accent px-2 py-0.5 rounded text-[10px] font-bold">API Auto-Trigger</span>
                <span className="text-accent">→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-border text-[10px]">Tally Ledger</span>
              </div>
            </div>

            <p className="text-xs text-secondary leading-relaxed">
              Replacing manual data entry with direct Google Ads API webhooks and Meta WhatsApp automation alerts will reduce counselor response delays to under 15 seconds.
            </p>

            <Link
              href="/book"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full neumorphic-button-accent"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>

      </section>

    </main>
  );
}
