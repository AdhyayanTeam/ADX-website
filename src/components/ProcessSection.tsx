export default function ProcessSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Execution</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Our Process.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          From diagnostic audit to continuous operations tuning. We build fast, iterate, and deploy stably.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 relative before:absolute before:top-8 before:left-0 before:w-full before:h-[1px] before:bg-glaucous-200 before:hidden md:before:block">
        {[
          { step: "1", title: "Discovery", desc: "30-minute review. We map your current software stack and main administrative bottlenecks." },
          { step: "2", title: "Operational Audit", desc: "Deep-dive review of staff routines, spreadsheet layouts, and lead response pipelines." },
          { step: "3", title: "14-Day Pilot", desc: "We deploy a simple working prototype targeting your single most critical operational leak." },
          { step: "4", title: "Full Build", desc: "Custom build of your unified platform, database architecture, and team onboarding support." },
          { step: "5", title: "Continuous Tuning", desc: "Monthly operational review calls. We adjust automation triggers based on live dashboard feedback." },
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-start md:items-center text-left md:text-center">
            <div className="w-12 h-12 rounded-full bg-ghost-white-50 border border-glaucous-200 text-vivid-royal-950 hover:border-coffee-bean-500 hover:text-coffee-bean-600 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(66,47,208,0.05)] transition-all duration-300 z-10 mb-6">
              {item.step}
            </div>
            <h3 className="text-md font-bold text-vivid-royal-950 mb-2">{item.title}</h3>
            <p className="text-xs text-glaucous-800 leading-relaxed md:max-w-[180px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
