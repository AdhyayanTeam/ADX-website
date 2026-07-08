import React from "react";

export default function LeakageSection() {
  return (
    <section className="w-full bg-white border-y border-glaucous-200/80 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vivid-royal-100/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block">
          Where It Goes Wrong
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4 font-heading tracking-tight">
          Where does your business lose customers?
        </h2>
        <p className="text-sm sm:text-base text-glaucous-800 max-w-2xl mx-auto font-sans leading-relaxed">
          Every forgotten follow-up, every unanswered message, every late payment — small misses add up.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        <div className="lg:col-span-2 space-y-10 lg:space-y-12">
          <div className="relative group p-4 hover:bg-glaucous-50/50 transition-all duration-300 rounded-xl">
            <span className="font-mono text-[10px] font-bold text-glaucous-500 tracking-wider block mb-1">STAGE 01</span>
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-extrabold text-vivid-royal-950 font-heading tracking-tight">New Enquiry</h3>
            </div>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A customer sends a message. Nobody replies for hours. By evening, they&apos;ve already chosen someone else.
            </p>
          </div>

          <div className="relative group p-4 hover:bg-scarlet-fire-50/10 transition-all duration-300 rounded-xl">
            <span className="font-mono text-[10px] font-bold text-glaucous-500 tracking-wider block mb-1">STAGE 02</span>
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-extrabold text-vivid-royal-950 font-heading tracking-tight">Follow-up</h3>
            </div>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              Someone writes the enquiry in a personal chat. Later, another staff member needs that information. They can&apos;t find it.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex justify-center w-full px-2 sm:px-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-glaucous-200/80 shadow-[0_20px_50px_rgba(66,47,208,0.08),0_0_30px_rgba(66,47,208,0.03)] bg-neutral-950">
            <video
              src="/leakagesection.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-10 lg:space-y-12">
          <div className="relative group p-4 hover:bg-scarlet-fire-50/10 transition-all duration-300 rounded-xl">
            <span className="font-mono text-[10px] font-bold text-glaucous-500 tracking-wider block mb-1">STAGE 03</span>
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-extrabold text-vivid-royal-950 font-heading tracking-tight">Booking</h3>
            </div>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A customer wants to book. The person who manages the schedule is busy. The customer waits. Then they forget to call back.
            </p>
          </div>

          <div className="relative group p-4 hover:bg-scarlet-fire-50/10 transition-all duration-300 rounded-xl">
            <span className="font-mono text-[10px] font-bold text-glaucous-500 tracking-wider block mb-1">STAGE 04</span>
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-extrabold text-vivid-royal-950 font-heading tracking-tight">Payment</h3>
            </div>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A payment was due last week. Nobody sent a reminder. The customer didn&apos;t notice. The money doesn&apos;t come in.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
