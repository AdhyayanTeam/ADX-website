"use client";

import Link from "next/link";

export default function Industries() {
  const verticals = [
    {
      id: "ind-coaching-block",
      title: "Coaching & Test Prep Institutes",
      tagline: "BATCH SCHEDULING, INQUIRY INTAKE, AND STATEFUL FEE LIFE CYCLES",
      description:
        "Manage parent communication, batch allocations, automated fee payment alerts, and Razorpay settlements dynamically, avoiding Excel tracking delays.",
      bottlenecks: [
        { title: "Manual Fee Chase", desc: "Staff calling parents for fees, causing administrative friction." },
        { title: "Lead Decay", desc: "Student inquiry details remain inside individual counselor WhatsApp threads." },
        { title: "Mismatched Batches", desc: "Tracking batch size capacities manually, leading to crowded rooms." },
      ],
      solutions: [
        { title: "1-Click Checkout", desc: "Automated WhatsApp payment alerts with Razorpay payment link." },
        { title: "Centralized Lead DB", desc: "Webhook catches inquiry details and routes to central CRM dashboard." },
        { title: "Dynamic Capacity Blocks", desc: "Registration locks automatically once batch size limit is met." },
      ],
    },
    {
      id: "ind-healthcare-block",
      title: "Clinics & Healthcare Practices",
      tagline: "PATIENT SLOT CONFIRMATIONS, PRE-VISIT TRIAGE, AND RECALL SYSTEMS",
      description:
        "Enable patient self-booking via WhatsApp, automate pre-visit triage question collections, and trigger automated chronic patient recalls to optimize practitioner calendars.",
      bottlenecks: [
        { title: "Phone Slot Booking", desc: "Receptionist spends hours on the phone scheduling appointments." },
        { title: "High No-Show Rates", desc: "Patients forget appointments; staff fails to call and confirm." },
        { title: "Zero Patient Recalls", desc: "Chronic patients don't follow up for routine reviews." },
      ],
      solutions: [
        { title: "WhatsApp Scheduling", desc: "Patient reviews live slots on WhatsApp and selects appointment." },
        { title: "Automated Confirmations", desc: "System sends 2-hour pre-visit confirmations with quick buttons." },
        { title: "Recall Triggers", desc: "System schedules checkup recall message exactly 6 months post-visit." },
      ],
    },
    {
      id: "ind-salon-block",
      title: "Salons, Spas & Wellness Centres",
      tagline: "TECHNICIAN ALLOCATIONS, EMPTY WEEKDAY SLOTS, AND CUSTOMER LIFECYCLE RECALLS",
      description:
        "Maximize table/chair utilization. Direct custom promotional slots to off-peak weekdays, and ensure customers return exactly 28 days later with automated reminders.",
      bottlenecks: [
        { title: "Off-Peak Idle Time", desc: "Technicians sit idle during weekdays while weekends are overbooked." },
        { title: "Single-Visit Drop-Off", desc: "Customers get a haircut or facial and never return." },
        { title: "Technician Tracking", desc: "Hard to track tips, service duration, and commission details." },
      ],
      solutions: [
        { title: "Dynamic Weekday Promos", desc: "Send automated discount offers for empty Tuesday/Wednesday slots." },
        { title: "Smart Recall Triggers", desc: "System targets customers with hair/nail reminders after 28 days." },
        { title: "Technician Dashboard", desc: "Digital logs track technician assignments and customer ratings." },
      ],
    },
    {
      id: "ind-gym-block",
      title: "Gyms & Fitness Studios",
      tagline: "MEMBERSHIP EXPIRIES, INTRUSION ALERTS, AND BATCH BOOKINGS",
      description:
        "Automate gym check-ins, class allocations, and membership renewal loops to prevent attendance abuse and secure recurring revenues.",
      bottlenecks: [
        { title: "Expired Entry Abuse", desc: "Lapsed members check in because front desk doesn't check database." },
        { title: "Lapsed Membership Leakage", desc: "Memberships expire silently without staff calling to renew." },
        { title: "Crowded Batches", desc: "Popular workout sessions get overcrowded; no capacity control." },
      ],
      solutions: [
        { title: "Scanner Integration", desc: "Check-in scanner checks status and sounds alert if membership is expired." },
        { title: "Renewal Reminders", desc: "WhatsApp reminder sent 7 days before expiry with Razorpay renewal link." },
        { title: "Class Reservations", desc: "Members reserve session slots on WhatsApp before entering." },
      ],
    },
    {
      id: "ind-professional-block",
      title: "Professional & SME Services",
      tagline: "MILESTONE TRACKING, INVOICING RECONCILIATIONS, AND CLIENT APPROVALS",
      description:
        "Manage project status, trigger client milestone sign-offs, and automate billing collection and ledger entry without back-and-forth emails.",
      bottlenecks: [
        { title: "Delayed Approvals", desc: "Deliverables sit pending reviews, stalling cash flow and timeline." },
        { title: "Manual GST Invoicing", desc: "Finance manually creates invoices in Tally for every client payment." },
        { title: "Project Handoff Delays", desc: "Client details remain inside salespeople's email chains." },
      ],
      solutions: [
        { title: "1-Click Approvals", desc: "System alerts client on WhatsApp; client approves with one tap." },
        { title: "Automated Reconciliation", desc: "System auto-generates invoice and matches ledger on payment." },
        { title: "CRM Handoff Triggers", desc: "Deals won on CRM trigger system setup and invite links instantly." },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Deep Dives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-vivid-royal-950 mt-2 mb-4">
            Operations by Industry vertical.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            We don't build generic apps. We solve industry-specific operational leaks.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {verticals.map((v, index) => (
            <div
              key={v.id}
              id={v.id}
              className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start py-12 ${
                index !== verticals.length - 1 ? "border-b border-glaucous-200" : ""
              }`}
            >
              <div>
                <span className="font-mono text-[10px] text-coffee-bean-600 font-bold tracking-widest block mb-2 uppercase">
                  {v.tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-vivid-royal-950 mb-4">
                  {v.title}
                </h2>
                <p className="text-sm text-glaucous-800 leading-relaxed mb-8 max-w-xl">
                  {v.description}
                </p>

                <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 max-w-xl">
                  <h4 className="font-mono text-xs text-glaucous-600 uppercase tracking-widest mb-4">
                    The Pain Points
                  </h4>
                  <div className="flex flex-col gap-4">
                    {v.bottlenecks.map((b, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span className="text-scarlet-fire-600 text-xs font-bold mt-1">✕</span>
                        <div>
                          <h5 className="text-sm font-semibold text-vivid-royal-950">{b.title}</h5>
                          <p className="text-xs text-glaucous-700 mt-0.5">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg p-8 shadow-md">
                <span className="font-mono text-[9px] text-coffee-bean-600 font-bold tracking-widest block mb-6 uppercase">
                  ADX Custom Solution Engine
                </span>
                <div className="flex flex-col gap-6">
                  {v.solutions.map((s, idx) => (
                    <div key={idx} className="border-l-2 border-coffee-bean-500 pl-4">
                      <h4 className="text-sm font-bold text-vivid-royal-950">{s.title}</h4>
                      <p className="text-xs text-glaucous-800 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-glaucous-200">
                  <Link
                    href={`/book?vertical=${v.title}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-coffee-bean-600 hover:text-coffee-bean-700 transition-all duration-300"
                  >
                    Discuss {v.title} Operations <span className="font-sans">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
