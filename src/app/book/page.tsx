"use client";

import { useState } from "react";
import { track } from "@/lib/track";
import { usePageAnalytics } from "@/lib/usePageAnalytics";
import { IconCheck, IconShield, IconAlertCircle } from "@tabler/icons-react";

export default function BookPage() {
  usePageAnalytics("/book");

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "coaching",
    volume: "100-500",
    bottleneck: "",
    whatsapp: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.whatsapp || !formData.email || !formData.bottleneck) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Lead submission failed:", err);
        setError("Something went wrong. Please try again or reach out on WhatsApp.");
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      setLeadId(data.id);
      setIsSuccess(true);
      track("form_complete", "/book", { lead_id: data.id });
    } catch (err) {
      console.error("Network error:", err);
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Diagnostics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Schedule a Free Operational Audit
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Audit your manual workflows and communication bottlenecks. Schedule a 30-minute diagnostic session with the ADX engineering team.
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <section className="max-w-3xl mx-auto px-6 mt-16 lg:mt-24">
        {isSuccess ? (
          <div className="bg-white border border-border rounded-2xl p-8 sm:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <IconCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Profile Received</h2>
            <p className="text-sm text-secondary leading-relaxed max-w-md mx-auto">
              We have recorded your details. An operations architect will review your profile and reach out via WhatsApp at <strong>{formData.whatsapp}</strong> within 4 hours to arrange your diagnostic slot.
            </p>
            <p className="text-xs text-secondary font-mono">
              Reference ID: ADX-{leadId}
            </p>
          </div>
        ) : (
          <div className="neumorphic-flat rounded-2xl overflow-hidden">
            <div className="bg-[#FAFAFA] px-6 py-4 border-b border-border flex items-center justify-between">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-bold">
                Operational Intake Form
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent/5 text-accent border border-accent/15 uppercase font-bold">
                14-Day Pilot Eligible
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              
              {error && (
                <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-500 rounded-xl text-xs flex items-center">
                  <IconAlertCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-xs font-mono font-bold uppercase text-secondary">
                  Company / Institute Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  placeholder="e.g. Acme Prep Classes Delhi"
                  value={formData.companyName}
                  onChange={(e) => {
                    if (!hasStarted) {
                      setHasStarted(true);
                      track("form_start", "/book");
                    }
                    setFormData({ ...formData, companyName: e.target.value });
                  }}
                  className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                />
              </div>

              {/* Grid 2-cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Industry */}
                <div className="space-y-2">
                  <label htmlFor="industry" className="block text-xs font-mono font-bold uppercase text-secondary">
                    Industry Vertical
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                  >
                    <option value="coaching">Coaching Institutes</option>
                    <option value="healthcare">Clinics & Healthcare</option>
                    <option value="salon">Salons & Spas</option>
                    <option value="gym">Gyms & Fitness</option>
                    <option value="professional">Professional Services</option>
                    <option value="other">Other SMB</option>
                  </select>
                </div>

                {/* Lead Volume */}
                <div className="space-y-2">
                  <label htmlFor="volume" className="block text-xs font-mono font-bold uppercase text-secondary">
                    Monthly Lead Volume
                  </label>
                  <select
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                  >
                    <option value="under-100">Under 100 leads / month</option>
                    <option value="100-500">100 to 500 leads / month</option>
                    <option value="500-2000">500 to 2000 leads / month</option>
                    <option value="above-2000">Above 2000 leads / month</option>
                  </select>
                </div>
              </div>

              {/* Primary Bottleneck */}
              <div className="space-y-2">
                <label htmlFor="bottleneck" className="block text-xs font-mono font-bold uppercase text-secondary">
                  Describe Your Primary Bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  required
                  rows={3}
                  placeholder="e.g. Counselors take 4 hours to contact Facebook leads, staff forgets manual billing sheets, late parent payments."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground resize-none"
                />
              </div>

              {/* Contact info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-xs font-mono font-bold uppercase text-secondary">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase text-secondary">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. founder@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full neumorphic-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-foreground"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full neumorphic-button-accent disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Registering business details..." : "Initiate Operational Diagnostic"}
              </button>

              {/* Trust disclaimer */}
              <div className="flex items-center justify-center space-x-2 text-[11px] text-secondary pt-2">
                <IconShield className="w-4 h-4 text-accent shrink-0" />
                <span>We sign a strict NDA before inspecting databases or CRM structures.</span>
              </div>

            </form>
          </div>
        )}
      </section>

    </main>
  );
}
