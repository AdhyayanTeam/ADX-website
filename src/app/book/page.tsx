"use client";

import { useState } from "react";
import { track } from "@/lib/track";
import { usePageAnalytics } from "@/lib/usePageAnalytics";

export default function Book() {
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
  const [hasStarted, setHasStarted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        alert("Something went wrong. Please try again or reach out on WhatsApp.");
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      setLeadId(data.id);
      setIsSuccess(true);
      track("form_complete", "/book", { lead_id: data.id });
    } catch (err) {
      console.error("Network error:", err);
      alert("Could not reach the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-6">
        {isSuccess ? (
          <div className="bg-ghost-white-50 border border-coffee-bean-500 rounded-lg p-8 sm:p-12 text-center shadow-lg">
            <span className="text-4xl block mb-6">✅</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-vivid-royal-950">
              Profile Received.
            </h1>
            <p className="text-sm text-glaucous-800 leading-relaxed mb-6">
              We have your details. We&apos;ll reach out on{" "}
              <strong>{formData.whatsapp}</strong> within 24 hours to schedule
              the discovery call.
            </p>
            <p className="text-xs text-glaucous-600 font-mono">
              Reference: ADX-{leadId}
            </p>
          </div>
        ) : (
          <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-glaucous-100 px-6 py-4 border-b border-glaucous-200 flex items-center justify-between">
              <span className="font-mono text-base text-glaucous-600 uppercase tracking-widest font-bold">
                Discovery Call Registration
              </span>
              <span className="font-mono text-base px-2 py-0.5 rounded bg-coffee-bean-50 text-coffee-bean-600 border border-coffee-bean-200 uppercase font-bold">
                Operations
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 flex flex-col gap-6">
              <div>
                <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Classes Delhi"
                  value={formData.companyName}
                  onChange={(e) => {
                    if (!hasStarted) {
                      setHasStarted(true);
                      track("form_start", "/book");
                    }
                    setFormData({ ...formData, companyName: e.target.value });
                  }}
                  className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Industry Vertical
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  >
                    <option value="coaching">Coaching Institutes</option>
                    <option value="healthcare">Clinics & Healthcare</option>
                    <option value="salon">Salons & Spas</option>
                    <option value="gym">Gyms & Fitness</option>
                    <option value="professional">Professional Services</option>
                    <option value="other">Other SMB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Monthly Lead Volume
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  >
                    <option value="under-100">Under 100 leads / month</option>
                    <option value="100-500">100 to 500 leads / month</option>
                    <option value="500-2000">500 to 2000 leads / month</option>
                    <option value="above-2000">Above 2000 leads / month</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                  Primary Bottleneck
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Lead follow-up is slow, staff forgets manual ledger logs, late payments from parents."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300 resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-base font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. founder@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-base text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                data-track-cta="book"
                disabled={isSubmitting}
                className="w-full text-center py-3.5 rounded text-base font-semibold uppercase tracking-wider text-ghost-white-50 bg-coffee-bean-600 hover:bg-coffee-bean-700 disabled:bg-coffee-bean-800 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_15px_rgba(237,18,109,0.2)] mt-4 cursor-pointer"
              >
                {isSubmitting ? "Submitting business profile..." : "Initiate Operational Diagnostic"}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
