"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  IconArrowRight, 
  IconCheck, 
  IconBrandWhatsapp, 
  IconSend, 
  IconChartBar, 
  IconUsers, 
  IconReceipt, 
  IconCalendar,
  IconShield,
  IconDeviceAnalytics
} from "@tabler/icons-react";

export default function FeaturedProduct() {
  const [activeTab, setActiveTab] = useState<"crm" | "fees" | "whatsapp">("fees");
  const [whatsappLogs, setWhatsappLogs] = useState<Array<{ id: number; student: string; amount: string; status: "pending" | "sent" | "paid" }>>([
    { id: 1, student: "Kabir Sharma", amount: "₹18,500", status: "pending" },
    { id: 2, student: "Ananya Patel", amount: "₹24,000", status: "sent" },
    { id: 3, student: "Rohan Malhotra", amount: "₹12,500", status: "paid" },
    { id: 4, student: "Sanjana Roy", amount: "₹16,000", status: "pending" }
  ]);

  // WhatsApp auto-sender simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setWhatsappLogs(prev => {
        const next = [...prev];
        const pendingIdx = next.findIndex(log => log.status === "pending");
        if (pendingIdx !== -1) {
          next[pendingIdx] = { ...next[pendingIdx], status: "sent" };
        } else {
          // Reset after all sent
          return [
            { id: 1, student: "Kabir Sharma", amount: "₹18,500", status: "pending" },
            { id: 2, student: "Ananya Patel", amount: "₹24,000", status: "sent" },
            { id: 3, student: "Rohan Malhotra", amount: "₹12,500", status: "paid" },
            { id: 4, student: "Sanjana Roy", amount: "₹16,000", status: "pending" }
          ];
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    { label: "Student CRM", desc: "Automate leads from Ads to batch allocation." },
    { label: "Fee Management", desc: "Razorpay loops and auto installment alerts." },
    { label: "WhatsApp Engine", desc: "Direct templates, reports and status alerts." },
    { label: "Faculty Portal", desc: "Lecture logs, notes upload, schedule tracks." },
    { label: "HRMS & Attendance", desc: "QR code check-ins and staff salary sheets." },
    { label: "Parent & CMS", desc: "Unified study portals and transparent access." }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
            Flagship Platform
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            ADX Institute OS
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            The complete operating system for modern educational organizations. We run the backend operations so your teaching team can focus on outcomes.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Modules list & CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Grid of Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-2 text-foreground font-semibold text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{m.label}</span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed pl-3.5">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/products/institute-os"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full neumorphic-button-accent group"
              >
                <span>Explore Institute OS</span>
                <IconArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Premium Interactive Dashboard Mockup */}
          <div className="lg:col-span-7 neumorphic-flat p-6 rounded-2xl overflow-hidden relative">
            
            {/* Mock Header Controls */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5d73]" />
                <span className="w-3 h-3 rounded-full bg-[#7c7a7a]" />
                <span className="w-3 h-3 rounded-full bg-[#494949]" />
                <span className="text-xs font-mono font-semibold text-secondary ml-2">ADX_INSTITUTE_OS v1.0.4</span>
              </div>
              <div className="flex space-x-1.5 bg-[#0d0d0d] border border-border/40 rounded-full p-0.5">
                {(["fees", "whatsapp", "crm"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all uppercase ${
                      activeTab === tab 
                        ? "bg-accent text-white" 
                        : "text-secondary hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Viewport */}
            <div className="min-h-[260px] relative">
              <AnimatePresence mode="wait">
                
                {/* 1. FEES TAB */}
                {activeTab === "fees" && (
                  <m.div
                    key="fees"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {/* Metrics Box */}
                    <div className="neumorphic-sunken p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-secondary">Outstanding Recovers</span>
                        <IconReceipt className="w-4 h-4 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-3xl font-black text-foreground">₹4,82,500</span>
                        <p className="text-xs text-green-600 font-semibold flex items-center">
                          <span className="w-1 h-1 rounded-full bg-green-600 mr-1" />
                          84% collection efficiency this month
                        </p>
                      </div>
                      <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-secondary">
                        <span>Due in 7 Days:</span>
                        <span className="font-bold text-foreground">₹1,18,000</span>
                      </div>
                    </div>

                    {/* Pending installments list */}
                    <div className="neumorphic-sunken p-4 space-y-3">
                      <span className="text-xs font-mono font-bold uppercase text-secondary block mb-1">Fee Reminders Queue</span>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs pb-2 border-b border-border">
                          <div>
                            <p className="font-bold text-foreground">Aarav Sen</p>
                            <span className="text-xs font-mono text-secondary">NEET Dropout Batch</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">₹20,000</p>
                            <span className="text-xs font-mono text-accent font-bold bg-accent/5 px-1.5 py-0.5 rounded-full">Overdue</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <p className="font-bold text-foreground">Meera Joshi</p>
                            <span className="text-xs font-mono text-secondary">IIT-JEE Batch A</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">₹15,000</p>
                            <span className="text-xs font-mono text-[#7c7a7a] font-bold bg-[#7c7a7a]/5 px-1.5 py-0.5 rounded-full">Due Today</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                )}

                {/* 2. WHATSAPP TAB */}
                {activeTab === "whatsapp" && (
                  <m.div
                    key="whatsapp"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="neumorphic-sunken p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-accent">
                          <IconBrandWhatsapp className="w-5 h-5 text-accent" />
                          <span className="text-sm font-mono font-bold uppercase text-foreground">Live Delivery Stream</span>
                        </div>
                        <span className="text-xs font-mono text-secondary bg-[#0d0d0d] border border-border/40 px-2 py-0.5 rounded-full">Automated Engine</span>
                      </div>
                      
                      <div className="space-y-3">
                        {whatsappLogs.map(log => (
                          <div key={log.id} className="flex justify-between items-center text-xs pb-2 border-b border-border last:border-0 last:pb-0">
                            <div className="flex items-center space-x-2.5">
                              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                              <div>
                                <span className="font-bold text-foreground">{log.student}</span>
                                <span className="text-secondary text-xs ml-2">Fee installment link generated</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-foreground font-semibold">{log.amount}</span>
                              {log.status === "pending" && <span className="text-xs font-mono text-[#7c7a7a] bg-[#7c7a7a]/5 px-1.5 rounded">Queued</span>}
                              {log.status === "sent" && <span className="text-xs font-mono text-[#494949] bg-[#494949]/5 px-1.5 rounded font-bold">Sent</span>}
                              {log.status === "paid" && <span className="text-xs font-mono text-accent bg-accent/5 px-1.5 rounded font-bold flex items-center"><IconCheck className="w-2.5 h-2.5 mr-0.5" />Paid</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </m.div>
                )}

                {/* 3. CRM TAB */}
                {activeTab === "crm" && (
                  <m.div
                    key="crm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {/* Conversion Stats */}
                    <div className="neumorphic-sunken p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-secondary">Lead Pipeline</span>
                        <IconUsers className="w-4 h-4 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-3xl font-black text-foreground">84 Leads</span>
                        <p className="text-xs text-accent font-semibold">
                          +22% increase in registrations this week
                        </p>
                      </div>
                      <div className="pt-2 border-t border-border flex justify-between text-xs font-mono text-secondary">
                        <span>Ad Intake Speed:</span>
                        <span className="font-bold text-foreground">12 Seconds</span>
                      </div>
                    </div>

                    {/* Source Breakdown */}
                    <div className="neumorphic-sunken p-4 space-y-3">
                      <span className="text-xs font-mono font-bold uppercase text-secondary block mb-1">Source Breakdown</span>
                      <div className="space-y-2">
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between font-mono">
                            <span>Google Ads:</span>
                            <span className="font-bold">45%</span>
                          </div>
                          <div className="w-full bg-[#0d0d0d] border border-border/40 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-accent h-full w-[45%]" />
                          </div>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between font-mono">
                            <span>Instagram Leadgen:</span>
                            <span className="font-bold">38%</span>
                          </div>
                          <div className="w-full bg-[#0d0d0d] border border-border/40 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#494949] h-full w-[38%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Visual Security Overlay */}
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-secondary">
              <span className="flex items-center"><IconShield className="w-3.5 h-3.5 mr-1 text-accent" />AES-256 Cloud Encryption</span>
              <span className="flex items-center"><IconDeviceAnalytics className="w-3.5 h-3.5 mr-1 text-[#494949]" />Live Database Sync</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
