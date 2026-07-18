"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { 
  IconShield, 
  IconMail, 
  IconPhone, 
  IconClock, 
  IconCheck,
  IconAlertCircle
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    bottleneck: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.businessName || !formState.whatsapp || !formState.bottleneck) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Contact Our Team
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Discuss your system needs with an engineer. No sales calls, no pushy pitches. We diagnose operations first.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Trust signals & Contact details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Operational Inquiries</h2>
            <p className="text-sm text-secondary leading-relaxed">
              We shadow your processes to solve bottlenecks. Let us review your workflows and provide recommendations.
            </p>
          </div>

          {/* Quick contact tags */}
          <div className="space-y-4 pt-6 border-t border-border">
            <div className="flex items-center space-x-3 text-secondary text-sm">
              <IconMail className="w-5 h-5 text-accent" />
              <span>build@adx.digital</span>
            </div>
            <div className="flex items-center space-x-3 text-secondary text-sm">
              <IconPhone className="w-5 h-5 text-accent" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-secondary text-sm">
              <IconClock className="w-5 h-5 text-accent" />
              <span>Average response time: &lt; 4 Hours</span>
            </div>
          </div>

          {/* Trust assurances */}
          <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
            <div className="flex items-center space-x-2 text-accent">
              <IconShield className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase text-foreground">NDA & Data Compliance</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              We sign Non-Disclosure Agreements (NDAs) prior to accessing any business system or audit database. Your student, client, and financial data is 100% confidential.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 neumorphic-flat p-8 rounded-2xl">
          {submitted ? (
            <m.div 
              className="text-center py-12 space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                <IconCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Inquiry Received</h3>
              <p className="text-sm text-secondary leading-relaxed max-w-sm mx-auto">
                Thank you for your inquiry. An operations engineer will review your profile and reach out via WhatsApp within 4 hours to arrange an audit session.
              </p>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-500 rounded-xl text-xs flex items-center">
                  <IconAlertCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                    placeholder="e.g. Kabir Sharma"
                    required
                  />
                </div>
                {/* Business Name */}
                <div className="space-y-2">
                  <label htmlFor="business" className="block text-xs font-mono font-bold uppercase text-secondary">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={formState.businessName}
                    onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                    placeholder="e.g. Gravity Classes"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="block text-xs font-mono font-bold uppercase text-secondary">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  value={formState.whatsapp}
                  onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
                  className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                  placeholder="e.g. +91 98765 43210"
                  required
                />
              </div>

              {/* Primary Operational Bottleneck */}
              <div className="space-y-2">
                <label htmlFor="bottleneck" className="block text-xs font-mono font-bold uppercase text-secondary">
                  Primary Operational Bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  rows={4}
                  value={formState.bottleneck}
                  onChange={(e) => setFormState({ ...formState, bottleneck: e.target.value })}
                  className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground resize-none"
                  placeholder="Describe your manual task load (e.g. tracking fees on Excel, manually sending reminders, delayed lead allocation)."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full neumorphic-button-accent"
              >
                Submit Inquiry
              </button>
              
            </form>
          )}
        </div>

      </section>

    </main>
  );
}
