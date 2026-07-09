export default function About() {
  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-vivid-royal-100/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-glaucous-300/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="border-b border-glaucous-200 pb-16 mb-20">
          <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            About ADX
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-vivid-royal-950 mt-3 mb-8 max-w-4xl tracking-tight leading-tight">
            We build systems that make good work repeatable.
          </h1>
          <div className="text-lg sm:text-xl text-glaucous-800 max-w-2xl leading-relaxed space-y-3">
            <p>Most businesses don&apos;t struggle because they lack software.</p>
            <p>They struggle because important work depends on people remembering what needs to happen next.</p>
            <p>A customer calls. Someone remembers the answer.</p>
            <p>A payment is due. Someone promises to follow up.</p>
            <p>A patient needs to come back. Someone says they&apos;ll call next week.</p>
            <p>The work gets done — but only because the right person happened to remember.</p>
            <p className="font-semibold text-vivid-royal-950">As the business grows, that becomes harder every day.</p>
          </div>
        </div>

        <div className="flex flex-col gap-24">

          {/* What We Kept Seeing */}
          <section>
            <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-6">
              What We Kept Seeing
            </span>
            <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed mb-10 max-w-2xl">
              Over the years, we worked with businesses that already had the tools they were told they needed.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 border border-glaucous-200 rounded-xl p-8">
                <span className="font-mono text-sm text-glaucous-600 uppercase tracking-widest font-bold block mb-4">
                  They already had
                </span>
                <ul className="flex flex-col gap-3">
                  {["Websites", "Billing software", "CRMs", "WhatsApp Business"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-glaucous-800">
                      <span className="w-5 h-5 rounded-full bg-coffee-bean-100 flex items-center justify-center text-xs text-coffee-bean-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-scarlet-fire-50/40 border border-scarlet-fire-200/50 rounded-xl p-8">
                <span className="font-mono text-sm text-scarlet-fire-600 uppercase tracking-widest font-bold block mb-4">
                  Yet every day looked the same
                </span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Staff searched old WhatsApp conversations for customer details.",
                    "Appointments were written in notebooks.",
                    "Payments were tracked in spreadsheets.",
                    "Questions always ended up with the owner — nobody else knew the answer.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-base text-glaucous-800">
                      <span className="text-scarlet-fire-500 font-bold mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 max-w-2xl">
              <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed">
                The software wasn&apos;t missing.
              </p>
              <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed">
                The connection between the work and the software was.
              </p>
              <p className="text-lg sm:text-xl font-bold text-vivid-royal-950 mt-4">
                That observation became the foundation of ADX.
              </p>
            </div>
          </section>

          {/* Why ADX Exists */}
          <section className="bg-vivid-royal-950/5 border border-vivid-royal-200/50 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-bean-200/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <span className="text-sm font-mono font-bold tracking-widest text-vivid-royal-600 uppercase block mb-6">
                Why ADX Exists
              </span>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-lg sm:text-xl text-glaucous-900 leading-relaxed space-y-4">
                  <p>We believe businesses shouldn&apos;t become harder to run as they grow.</p>
                  <p>Adding more customers shouldn&apos;t mean more confusion.</p>
                  <p>Hiring more staff shouldn&apos;t mean more interruptions.</p>
                  <p>Opening another branch shouldn&apos;t mean the owner has to work even harder.</p>
                </div>
                <div className="bg-white/60 border border-glaucous-200 rounded-xl p-6 space-y-4 text-lg sm:text-xl text-glaucous-900 leading-relaxed">
                  <p className="font-bold text-vivid-royal-950">Our job is simple.</p>
                  <p>We study how work actually happens inside your business.</p>
                  <p>We find where information gets lost, where work slows down, and where people depend on memory instead of systems.</p>
                  <p>Then we build software that removes those problems without changing how your team naturally works.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Believe */}
          <section>
            <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-6">
              What We Believe
            </span>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Observe before building.",
                  desc: "We don't recommend software until we understand how your business works.",
                },
                {
                  title: "Software should fit people — not the other way around.",
                  desc: "Your team shouldn't have to learn complicated systems just to do everyday work.",
                },
                {
                  title: "Good work should be repeatable.",
                  desc: "Customers should receive the same experience no matter who answers the phone.",
                },
                {
                  title: "Simple systems beat complicated software.",
                  desc: "The best software quietly supports your business instead of getting in its way.",
                },
                {
                  title: "Technology should reduce effort, not create more of it.",
                  desc: "If a system makes everyday work harder, it has failed.",
                  wide: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`bg-white border border-glaucous-200 rounded-xl p-6 shadow-[0_2px_8px_rgba(66,47,208,0.04)] hover:shadow-[0_4px_16px_rgba(66,47,208,0.08)] hover:border-coffee-bean-300/60 transition-all duration-300 ${
                    item.wide ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-coffee-bean-100 flex items-center justify-center text-base text-coffee-bean-600 font-bold mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-vivid-royal-950 mb-2">{item.title}</h3>
                  <p className="text-base text-glaucous-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How We Work */}
          <section>
            <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-6">
              How We Work
            </span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: "01", text: "We begin by observing how your team works every day." },
                { step: "02", text: "We identify where work slows down, where information gets lost, and where people repeat tasks." },
                { step: "03", text: "Only then do we design and build a system around your business." },
                { step: "04", text: "No unnecessary features. No software for the sake of software. Just practical solutions." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-glaucous-200 rounded-xl p-6">
                  <span className="font-mono text-sm font-bold text-glaucous-500 tracking-wider block mb-3">
                    STEP {item.step}
                  </span>
                  <p className="text-base text-glaucous-900 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-white border border-glaucous-200 rounded-2xl p-8 sm:p-10 shadow-[0_2px_12px_rgba(66,47,208,0.04)]">
              <div className="w-12 h-12 rounded-full bg-coffee-bean-100 border border-coffee-bean-200 flex items-center justify-center text-coffee-bean-600 font-bold text-base mb-5">
                MD
              </div>
              <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
                Meet the Founder
              </span>
              <div className="text-lg sm:text-xl text-glaucous-900 leading-relaxed space-y-3">
                <p className="text-2xl font-bold text-vivid-royal-950">Hi, I&apos;m <strong>Mrigesh Deshpande</strong>.</p>
                <p>Before starting ADX, I spent time building software for businesses across different industries.</p>
                <p>What surprised me wasn&apos;t that businesses needed more technology.</p>
                <p>It was that even after buying technology, everyday work still depended on memory, spreadsheets, and endless WhatsApp conversations.</p>
                <p>That changed the way I think about software.</p>
                <p>Today, every ADX project starts the same way — with observation before implementation.</p>
                <p className="font-semibold text-vivid-royal-950">Because the best software isn&apos;t the one with the most features. It&apos;s the one that quietly helps people do their work better every single day.</p>
              </div>
            </section>
 
            <section className="bg-white border border-glaucous-200 rounded-2xl p-8 sm:p-10 shadow-[0_2px_12px_rgba(66,47,208,0.04)]">
              <div className="w-12 h-12 rounded-full bg-vivid-royal-100 border border-vivid-royal-200 flex items-center justify-center text-vivid-royal-600 font-bold text-base mb-5">
                CC
              </div>
              <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
                Meet the Co-Founder
              </span>
              <div className="text-lg sm:text-xl text-glaucous-900 leading-relaxed space-y-3">
                <p className="text-2xl font-bold text-vivid-royal-950">Hi, I&apos;m <strong>Chakresh Chakshu</strong>.</p>
                <p>Before ADX, I spent years building products and teams at companies like Amazon and early-stage startups.</p>
                <p>I&apos;ve seen companies spend crores on software that nobody on the ground actually uses. The sales team buys a CRM. The finance team buys an ERP. The operations team builds their own spreadsheet.</p>
                <p>None of them talk to each other. The work still runs on WhatsApp and phone calls.</p>
                <p>That pattern kept showing up everywhere — whether it was a 5-person clinic or a 500-person company.</p>
                <p>That&apos;s why I joined Mrigesh to build ADX.</p>
                <p>Not to sell more software. To finally close the gap between the tools businesses own and the work their team actually does every day.</p>
                <p className="font-semibold text-vivid-royal-950">If your team still depends on memory and WhatsApp to get work done, we want to fix that.</p>
              </div>
            </section>
          </div>

          {/* Our Goal */}
          <section className="relative text-center py-16 px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-glaucous-100/30 to-transparent rounded-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-6">
                Our Goal
              </span>
              <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed mb-4">
                We don&apos;t want businesses to become dependent on ADX.
              </p>
              <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed mb-4">
                We want them to become less dependent on memory, interruptions, and manual work.
              </p>
              <p className="text-lg sm:text-xl text-glaucous-900 leading-relaxed mb-8">
                If your team can focus on serving customers instead of chasing information, we&apos;ve done our job.
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-vivid-royal-950">
                That&apos;s why ADX exists.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
