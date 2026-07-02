"use client";

export default function Platform() {
  const capabilities = [
    {
      title: "Real-Time BI Dashboards",
      desc: "One single dashboard showing live metrics, instead of searching multiple folders and worksheets. Spot leaks instantly.",
      bullets: [
        "Interactive conversion charts tracking lead status.",
        "Technician capacity mapping with calendar integration.",
        "Stateful invoices tracking outstanding balances.",
      ],
      type: "bi",
    },
    {
      title: "WhatsApp Cloud API Sequences",
      desc: "Go beyond simple WhatsApp Business apps. We build relational database triggers communicating via the Cloud API.",
      bullets: [
        "Conditional message triggers (Confirm vs. Reschedule).",
        "Stateful automated payment reminders with 1-click Razorpay payment link.",
        "Automatic feedback collection post-service/visit.",
      ],
      type: "whatsapp",
    },
    {
      title: "Unified Database Architectures",
      desc: "Say goodbye to scattered Excel files. We build unified relational databases reconciling Tally, sheets, and CRM details.",
      bullets: [
        "SQL database architectures protecting transaction history.",
        "Auto-reconciliation matchers checking banking ledgers.",
        "CRM webhooks matching counselor logs instantly.",
      ],
      type: "database",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Product Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-vivid-royal-950 mt-2 mb-4">
            Platform Capabilities & Integrations.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            We build secure, scale-ready internal engines connecting your sales channels, client portals, and back-office databases.
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
                <h3 className="text-2xl font-bold text-vivid-royal-950 mb-4">{c.title}</h3>
                <p className="text-sm text-glaucous-800 leading-relaxed mb-6">{c.desc}</p>
                <ul className="flex flex-col gap-3">
                  {c.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs text-glaucous-800">
                      <span className="text-coffee-bean-600 font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                {c.type === "bi" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden p-6 shadow-md">
                    <div className="h-40 flex items-end gap-4 pb-4 border-b border-glaucous-200 mb-4">
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "40%" }}></div>
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "60%" }}></div>
                      <div className="flex-1 bg-coffee-bean-500 rounded-sm shadow-[0_0_10px_rgba(237,18,109,0.15)]" style={{ height: "90%" }}></div>
                      <div className="flex-1 bg-glaucous-200 rounded-sm" style={{ height: "50%" }}></div>
                    </div>
                    <span className="font-mono text-[9px] text-glaucous-600 block text-center uppercase">
                      Conversion Analytics // Week-Over-Week
                    </span>
                  </div>
                )}

                {c.type === "whatsapp" && (
                  <div className="w-full max-w-sm bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 shadow-md flex flex-col gap-3">
                    <div className="bg-glaucous-50 border border-glaucous-200 p-3 rounded text-[11px] font-mono text-center text-vivid-royal-950">
                      User registers for demo on website
                    </div>
                    <div className="text-center text-glaucous-600 text-xs font-mono">↓</div>
                    <div className="bg-coffee-bean-50 border border-coffee-bean-200 p-3 rounded text-[11px] font-mono text-center text-coffee-bean-600 font-semibold">
                      Trigger WhatsApp automated calendar link
                    </div>
                    <div className="text-center text-glaucous-600 text-xs font-mono">↓</div>
                    <div className="bg-glaucous-50 border border-glaucous-200 p-3 rounded text-[11px] font-mono text-center text-vivid-royal-950">
                      Auto-sync booking details in Tally DB
                    </div>
                  </div>
                )}

                {c.type === "database" && (
                  <div className="w-full max-w-md bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden shadow-md">
                    <table className="w-full text-left font-mono text-[10px] text-glaucous-950">
                      <thead>
                        <tr className="bg-glaucous-100 border-b border-glaucous-200">
                          <th className="p-3 text-glaucous-600">ID</th>
                          <th className="p-3 text-glaucous-600">BATCH</th>
                          <th className="p-3 text-glaucous-600">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-glaucous-200/50">
                          <td className="p-3">#4829</td>
                          <td className="p-3">IIT-Prep-A</td>
                          <td className="p-3"><span className="text-coffee-bean-600 font-bold">PAID</span></td>
                        </tr>
                        <tr className="border-b border-glaucous-200/50">
                          <td className="p-3">#4830</td>
                          <td className="p-3">Med-Prep-B</td>
                          <td className="p-3"><span className="text-glaucous-600">PENDING</span></td>
                        </tr>
                      </tbody>
                    </table>
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
