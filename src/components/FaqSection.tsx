import { useState } from "react";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Why not just use regular WhatsApp Business?",
      a: "Regular WhatsApp Business has no conditional logic, database integrations, or automated custom API routes. We build full relational databases, custom backends, and logical triggers that communicate through the WhatsApp Cloud API. This allows automated payments, custom routing, and instant status updates that basic business apps cannot handle.",
    },
    {
      q: "Why custom systems instead of an ERP or CRM?",
      a: "Off-the-shelf CRMs require your team to adapt their natural workflow to match the software. This leads to poor adoption and incomplete data. We build software to match your optimized business process. Your team uses familiar interfaces, while the backend organizes everything smoothly, yielding 100% staff compliance.",
    },
    {
      q: "How long does implementation take?",
      a: "A pilot program addressing your main operational bottleneck is deployed within 14 days. Full custom systems, including unified databases, automated alerts, and staff dashboards, take 4 to 8 weeks to build and launch.",
    },
    {
      q: "Do we need to hire tech staff to manage this?",
      a: "No. We build, host, monitor, and scale the infrastructure. Your staff uses clean, web-based control interfaces and automated WhatsApp channels. We act as your fractional Chief Technology and Operations Officer.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">FAQ</span>
        <h2 className="text-3xl font-extrabold text-vivid-royal-950 mt-2">Answering hard objections.</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqData.map((item, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div key={idx} className="bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => setActiveFaq(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center text-vivid-royal-950 hover:text-coffee-bean-600 transition-all duration-300 font-semibold cursor-pointer"
              >
                <span>{item.q}</span>
                <span className={`text-xl font-mono transition-transform duration-300 ${isOpen ? "rotate-45 text-coffee-bean-600" : ""}`}>+</span>
              </button>
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{ maxHeight: isOpen ? "200px" : "0px" }}
              >
                <p className="px-6 pb-6 text-sm text-glaucous-800 leading-relaxed border-t border-glaucous-200/40 pt-4">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
