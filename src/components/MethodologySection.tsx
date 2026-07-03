export default function MethodologySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Methodology</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">The Operational Blueprint.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          Six continuous phases designed to optimize systems first, and only write code that moves numbers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">01</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Observe</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            We shadow your staff. We map every manual handoff, WhatsApp chat, and Google Sheet edit.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">02</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Understand</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            We define the bottlenecks—where staff spend hours doing copy-paste work.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">03</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Measure</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            We attach metrics. What is the current average lead response time? Where are fee collections failing?
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">04</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Improve</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            We redesign the operational flows, stripping away manual checks and unnecessary reports.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">05</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Build</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            We write custom internal software, WhatsApp automation sequences, and custom BI dashboards.
          </p>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-sm text-coffee-bean-600 font-bold">06</span>
          <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Scale</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed">
            Continuous refinement based on real business intelligence dashboards. Systems adapt as you grow.
          </p>
        </div>
      </div>
    </section>
  );
}
