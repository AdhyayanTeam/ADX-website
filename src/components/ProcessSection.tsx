export default function ProcessSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Process</span>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 tracking-tight leading-tight">How we work with you.</h2>
        <p className="text-glaucous-800 text-lg max-w-2xl mx-auto">
          From the first conversation to a system your team uses every day.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 relative before:absolute before:top-8 before:left-0 before:w-full before:h-[1px] before:bg-glaucous-200 before:hidden md:before:block">
        {[
          { step: "1", title: "Discovery", desc: "A 30-minute call. We learn about your business, your team, and what's causing the most trouble." },
          { step: "2", title: "Audit", desc: "We watch how your team works. We find where work gets stuck and where things get missed." },
          { step: "3", title: "14-Day Pilot", desc: "We build a simple solution for your biggest problem. Your team starts using it within two weeks." },
          { step: "4", title: "Full Build", desc: "We build the complete system — WhatsApp flows, databases, payment integration, and team dashboards." },
          { step: "5", title: "Continuous Tuning", desc: "Every month, we review what's working and what can be better. The system keeps improving." },
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-start md:items-center text-left md:text-center">
            <div className="w-12 h-12 rounded-full bg-ghost-white-50 border border-glaucous-200 text-vivid-royal-950 hover:border-coffee-bean-500 hover:text-coffee-bean-600 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(66,47,208,0.05)] transition-all duration-300 z-10 mb-6">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">{item.title}</h3>
            <p className="text-base text-glaucous-800 leading-relaxed md:max-w-[200px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
