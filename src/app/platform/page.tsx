"use client";

export default function Platform() {
  const capabilities = [
    {
      title: "Customer Memory",
      desc: "Every conversation, payment, appointment, and follow-up stays connected. Nobody has to search five places to find what they need.",
      bullets: [
        "Every customer has one complete record. Past conversations, payments, and appointments are all in one place.",
        "Any staff member can pick up where another left off. No context gets lost between shifts or people.",
        "New team members see customer history instantly. No more spending weeks learning who's who.",
      ],
      type: "memory",
    },
    {
      title: "Communication",
      desc: "Every enquiry gets a response. Every reminder reaches the customer. Every update reaches the right staff member.",
      bullets: [
        "Customers can message, book, and confirm appointments on WhatsApp — no phone calls needed.",
        "Reminders are sent automatically before every appointment. Customers confirm or reschedule with one tap.",
        "After every visit, a follow-up message goes out automatically. No one has to remember to send it.",
      ],
      type: "communication",
    },
    {
      title: "Workflow",
      desc: "Tasks move forward without someone remembering them. When one step is done, the next one starts automatically.",
      bullets: [
        "When a customer confirms, the calendar updates. When they reschedule, staff are notified instantly.",
        "When work is complete, the next person is alerted. Nothing waits for someone to check a status.",
        "Nothing depends on a single person remembering what happens next. The system handles the sequence.",
      ],
      type: "workflow",
    },
    {
      title: "Payments",
      desc: "Know who has paid. Know who hasn't. Send reminders automatically. No more awkward phone calls asking for money.",
      bullets: [
        "Payment reminders are sent automatically on WhatsApp. Customers tap and pay in one click.",
        "Payments in your bank account match what's in the system. No manual reconciliation needed.",
        "Outstanding balances are visible in one place. You see who owes what without asking finance.",
      ],
      type: "payments",
    },
    {
      title: "Analytics",
      desc: "Understand what's happening before problems become expensive. See trends without building reports.",
      bullets: [
        "See how many enquiries came in today and how many replied.",
        "Know who's free, who's busy, and where work is getting stuck.",
        "See unpaid invoices before they become a problem.",
      ],
      type: "analytics",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-vivid-royal-950 mt-2 mb-4">
            Everything your business needs to run smoothly — in one place.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            We connect the parts of your business that currently work separately. From the first customer message to the final payment, everything stays connected.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {capabilities.map((c, index) => (
            <div
              key={c.title}
              className={`grid lg:grid-cols-[1fr_1fr] gap-16 items-center py-12 ${
                index !== capabilities.length - 1 ? "border-b border-glaucous-200" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="font-mono text-[10px] text-coffee-bean-600 font-bold tracking-widest block mb-2 uppercase">
                  Capability 0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-vivid-royal-950 mb-4">{c.title}</h3>
                <p className="text-sm text-glaucous-800 leading-relaxed mb-6">{c.desc}</p>
                <ul className="flex flex-col gap-3">
                  {c.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs text-glaucous-800">
                      <span className="text-coffee-bean-600 font-bold mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                {c.type === "analytics" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden p-6 shadow-md">
                    <div className="h-40 flex items-end gap-4 pb-4 border-b border-glaucous-200 mb-4">
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "40%" }}></div>
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "60%" }}></div>
                      <div className="flex-1 bg-coffee-bean-500 rounded-sm shadow-[0_0_10px_rgba(237,18,109,0.15)]" style={{ height: "90%" }}></div>
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "50%" }}></div>
                    </div>
                    <span className="font-mono text-[9px] text-glaucous-600 block text-center uppercase">
                      Enquiries // This Week
                    </span>
                  </div>
                )}

                {c.type === "communication" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 shadow-md flex flex-col gap-2">
                    <div className="bg-glaucous-50 border border-glaucous-200 p-2.5 rounded text-[10px] font-mono text-center text-vivid-royal-950 leading-snug">
                      Customer sends a message
                    </div>
                    <div className="text-center text-glaucous-400 text-xs font-mono">↓</div>
                    <div className="bg-coffee-bean-50 border border-coffee-bean-200 p-2.5 rounded text-[10px] font-mono text-center text-coffee-bean-600 font-semibold leading-snug">
                      Gets available times. Books instantly.
                    </div>
                    <div className="text-center text-glaucous-400 text-xs font-mono">↓</div>
                    <div className="bg-glaucous-50 border border-glaucous-200 p-2.5 rounded text-[10px] font-mono text-center text-vivid-royal-950 leading-snug">
                      Receives reminder. Shows up on time.
                    </div>
                    <div className="text-center text-glaucous-400 text-xs font-mono">↓</div>
                    <div className="bg-coffee-bean-50 border border-coffee-bean-200 p-2.5 rounded text-[10px] font-mono text-center text-coffee-bean-600 font-semibold leading-snug">
                      Pays. Gets a follow-up.
                    </div>
                  </div>
                )}

                {c.type === "memory" && (
                  <div className="w-full max-w-md bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden shadow-md">
                    <table className="w-full text-left font-mono text-[10px] text-glaucous-950">
                      <thead>
                        <tr className="bg-glaucous-100 border-b border-glaucous-200">
                          <th className="p-3 text-glaucous-600">PATIENT</th>
                          <th className="p-3 text-glaucous-600">LAST VISIT</th>
                          <th className="p-3 text-glaucous-600">BALANCE</th>
                          <th className="p-3 text-glaucous-600">NEXT VISIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-glaucous-200/50">
                          <td className="p-3">R Sharma</td>
                          <td className="p-3">12 Jun</td>
                          <td className="p-3"><span className="text-scarlet-fire-600 font-bold">₹2,500</span></td>
                          <td className="p-3">10 Jul</td>
                        </tr>
                        <tr className="border-b border-glaucous-200/50">
                          <td className="p-3">A Patel</td>
                          <td className="p-3">28 May</td>
                          <td className="p-3"><span className="text-glaucous-600">PAID</span></td>
                          <td className="p-3">15 Aug</td>
                        </tr>
                        <tr>
                          <td className="p-3">S Khan</td>
                          <td className="p-3">05 Jun</td>
                          <td className="p-3"><span className="text-scarlet-fire-600 font-bold">₹1,800</span></td>
                          <td className="p-3">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {c.type === "workflow" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Enquiry received", done: true },
                        { label: "Appointment booked", done: true },
                        { label: "Service completed", done: true },
                        { label: "Payment collected", done: false },
                        { label: "Follow-up sent", done: false },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold font-mono ${
                            step.done
                              ? "bg-coffee-bean-100 text-coffee-bean-600 border border-coffee-bean-300"
                              : "bg-glaucous-100 text-glaucous-500 border border-glaucous-300"
                          }`}>
                            {step.done ? "✓" : (i + 1)}
                          </div>
                          <span className={`text-xs font-mono ${step.done ? "text-glaucous-950" : "text-glaucous-500"}`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {c.type === "payments" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 shadow-md">
                    <div className="flex justify-between mb-4 pb-4 border-b border-glaucous-200">
                      <div>
                        <span className="font-mono text-[9px] text-glaucous-600 uppercase block">Collected today</span>
                        <span className="text-xl font-bold text-vivid-royal-950">₹12,500</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-scarlet-fire-600 uppercase block">Pending</span>
                        <span className="text-xl font-bold text-scarlet-fire-600">₹3,200</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-glaucous-900">R Sharma</span>
                        <span className="text-scarlet-fire-600">₹2,500</span>
                        <span className="text-glaucous-500">Due 15 Jul</span>
                      </div>
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-glaucous-900">S Iyer</span>
                        <span className="text-scarlet-fire-600">₹700</span>
                        <span className="text-scarlet-fire-600">Overdue</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
