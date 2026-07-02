"use client";

import { useState, useEffect } from "react";

export default function Book() {
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20 flex items-center justify-center">
      {/* Resilient styling overrides for client-side bundle mismatches */}
      <style>{`
        .text-ghost-white-50 { color: #09071d !important; }
        .bg-vivid-royal-950 { background-color: #ebeef9 !important; }
        .text-glaucous-200 { color: #223677 !important; }
        .bg-coffee-bean-950 { background-color: #d7def4 !important; }
        .text-coffee-bean-400 { color: #2d489f !important; }
      `}</style>

      <div className="w-full max-w-xl mx-auto px-6">
        {isSuccess && isMounted ? (
          <div className="bg-ghost-white-50 border border-coffee-bean-500 rounded-lg p-8 sm:p-12 text-center shadow-[0_0_30px_rgba(237,18,109,0.08)] backdrop-blur-sm">
            <span className="text-4xl block mb-6">✅</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: "#09071d" }}>
              Diagnostic Scheduled.
            </h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#223677" }}>
              We have received your business profile. An automated pre-visit diagnostic pipeline has been created. Check your WhatsApp (<strong>{formData.whatsapp}</strong>) for your scheduling confirmation link.
            </p>
            <div 
              className="p-4 rounded font-mono text-[10px] border" 
              style={{ backgroundColor: "#d7def4", borderColor: "#afbde9", color: "#2d489f" }}
            >
              PIPELINE ID: ADX-{(Math.random() * 100000).toFixed(0)} // STATE: QUEUED
            </div>
          </div>
        ) : (
          <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-glaucous-100 px-6 py-4 border-b border-glaucous-200 flex items-center justify-between">
              <span className="font-mono text-[9px] text-glaucous-600 uppercase tracking-widest font-bold">
                Discovery Call Registration
              </span>
              <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-coffee-bean-50 text-coffee-bean-600 border border-coffee-bean-200 uppercase font-bold">
                Operations
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 flex flex-col gap-6">
              <div>
                <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Classes Delhi"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Industry Vertical
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
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
                  <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Monthly Lead Volume
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  >
                    <option value="under-100">Under 100 leads / month</option>
                    <option value="100-500">100 to 500 leads / month</option>
                    <option value="500-2000">500 to 2000 leads / month</option>
                    <option value="above-2000">Above 2000 leads / month</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                  Primary Bottleneck
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Lead follow-up is slow, staff forgets manual ledger logs, late payments from parents."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300 resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-glaucous-750 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. founder@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-glaucous-50 border border-glaucous-200 rounded p-3 text-sm text-vivid-royal-950 placeholder:text-glaucous-600 focus:outline-none focus:border-coffee-bean-500 transition-all duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-center py-3.5 rounded text-xs font-semibold uppercase tracking-wider text-ghost-white-50 bg-coffee-bean-600 hover:bg-coffee-bean-700 disabled:bg-coffee-bean-800 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_15px_rgba(237,18,109,0.2)] mt-4 cursor-pointer"
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
