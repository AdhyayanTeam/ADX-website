export default function TransformationSection() {
  const pairs = [
    {
      before: "Staff answer the same questions every day.",
      after: "Every answer is written down and easy to find.",
    },
    {
      before: "Customer conversations live in personal WhatsApp chats.",
      after: "Every enquiry is tracked from the first message.",
    },
    {
      before: "The owner becomes the backup for everything.",
      after: "Follow-ups happen automatically. Nobody needs to chase.",
    },
    {
      before: "Payments are tracked in spreadsheets.",
      after: "Payment status is visible in one place.",
    },
    {
      before: "Reports take hours to put together.",
      after: "Progress is visible without asking anyone.",
    },
  ];

  return (
    <section className="w-full bg-ghost-white-50 border-y border-glaucous-200/80 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-2">
            How ADX Helps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4 font-heading tracking-tight">
            Before & After ADX
          </h2>
          <p className="text-sm sm:text-base text-glaucous-800 max-w-xl mx-auto font-sans leading-relaxed">
            Real differences. No percentages. No made-up numbers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pairs.map((pair, idx) => (
            <div
              key={idx}
              className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 bg-white border border-glaucous-200 rounded-lg overflow-hidden"
            >
              <div className="p-5 bg-scarlet-fire-50/30 border-b md:border-b-0 md:border-r border-scarlet-fire-200/40">
                <span className="font-mono text-[9px] text-scarlet-fire-600 uppercase tracking-widest font-bold block mb-2">
                  Before ADX
                </span>
                <p className="text-sm text-glaucous-900 leading-relaxed">
                  {pair.before}
                </p>
              </div>
              <div className="p-5 bg-coffee-bean-50/30">
                <span className="font-mono text-[9px] text-coffee-bean-600 uppercase tracking-widest font-bold block mb-2">
                  With ADX
                </span>
                <p className="text-sm text-vivid-royal-950 leading-relaxed font-medium">
                  {pair.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
