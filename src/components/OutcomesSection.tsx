export default function OutcomesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Deliverables</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Measurable outcomes. Not custom features.</h2>
        <p className="text-glaucous-800 max-w-xl">
          We measure success in saved hours and reclaimed revenue, not story points.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Increase Admissions</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Automatically follow up with inquiries within 30 seconds. Enable prospects to book batches directly. Reclaim 22% of cold leads.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Recover Missed Enquiries</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Escalation channels trigger automatically when inquiries are left unaddressed by staff for more than 10 minutes.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Reduce Manual Operations</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Eliminate human data entry between WhatsApp, Excel, and Razorpay. Automate fee updates and attendance logs.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">💰</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Improve Fee Collection</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Send stateful automated WhatsApp payment reminders with integrated 1-click Razorpay payment flows and auto-reconciliation.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Operational Visibility</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            One unified screen showing daily active enquiries, technician bookings, and outstanding payments. No guessing.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
          <div className="text-3xl mb-4">🛡️</div>
          <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Reduce Owner Dependency</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Operations run on predefined triggers. Staff follow the software, leaving the founder to focus on strategic scale.
          </p>
        </div>
      </div>
    </section>
  );
}
