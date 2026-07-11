"use client";

import React, { useState } from "react";
import { m } from "framer-motion";

const stages = [
  {
    num: "STAGE 01",
    title: "New enquiry",
    desc: "A customer sends a message. Nobody replies for hours. By evening, they've already chosen someone else."
  },
  {
    num: "STAGE 02",
    title: "Follow-up",
    desc: "Someone writes the enquiry in a personal chat. Later, another staff member needs that information. They can't find it."
  },
  {
    num: "STAGE 03",
    title: "Booking",
    desc: "A customer wants to book. The person who manages the schedule is busy. The customer waits. Then they forget to call back."
  },
  {
    num: "STAGE 04",
    title: "Payment",
    desc: "A payment was due last week. Nobody sent a reminder. The customer didn't notice. The money doesn't come in."
  }
];

export default function LeakageSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="w-full bg-white border-y border-glaucous-200/80 py-16 lg:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vivid-royal-100/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto text-center mb-12 lg:mb-20 relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 font-heading tracking-tight leading-tight">
          Where does your business lose customers?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-glaucous-800 max-w-2xl mx-auto font-sans leading-relaxed">
          Every forgotten follow-up, every unanswered message, every late payment: small misses add up.
        </p>
      </m.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        
        {/* Mobile/Tablet: Active Stage Selection (Hidden on Desktop) */}
        <div className="lg:hidden w-full flex flex-col items-center gap-6">
          <div className="flex justify-center gap-2.5 w-full">
            {stages.map((stage, idx) => (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`px-3 py-1.5 font-mono text-sm font-bold rounded-lg border transition-all duration-300 ${
                  activeStage === idx
                    ? "bg-vivid-royal-600 border-vivid-royal-600 text-ghost-white-50 shadow-[0_4px_12px_rgba(66,47,208,0.2)] scale-105"
                    : "bg-ghost-white-50 border-glaucous-200 text-glaucous-700 hover:border-glaucous-300"
                }`}
              >
                {stage.num.split(" ")[1]}
              </button>
            ))}
          </div>

          <div className="w-full min-h-[160px] p-6 border border-glaucous-200/80 bg-glaucous-50/40 rounded-xl relative overflow-hidden transition-all duration-500 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="font-mono text-xs font-bold text-coffee-bean-600 bg-coffee-bean-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              {stages[activeStage].num}
            </span>
            <h3 className="text-xl font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2">
              {stages[activeStage].title}
            </h3>
            <p className="text-base text-glaucous-800 leading-relaxed font-sans">
              {stages[activeStage].desc}
            </p>
          </div>
        </div>

        {/* Desktop Left Side: Stages 1 and 2 (Hidden on Mobile) */}
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-3 space-y-8"
        >
          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-base font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 01
            </span>
            <h3 className="text-2xl font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              New enquiry
            </h3>
            <p className="text-base text-glaucous-800 leading-relaxed font-sans">
              A customer sends a message. Nobody replies for hours. By evening, they&apos;ve already chosen someone else.
            </p>
          </div>

          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-base font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 02
            </span>
            <h3 className="text-2xl font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Follow-up
            </h3>
            <p className="text-base text-glaucous-800 leading-relaxed font-sans">
              Someone writes the enquiry in a personal chat. Later, another staff member needs that information. They can&apos;t find it.
            </p>
          </div>
        </m.div>

        {/* Video Showcase (Always Visible) */}
        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center w-full px-2 sm:px-4"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-glaucous-200/80 shadow-[0_20px_50px_rgba(66,47,208,0.06),0_0_30px_rgba(66,47,208,0.02)] bg-neutral-950">
            <video
              src="/leakagesection.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </m.div>

        {/* Desktop Right Side: Stages 3 and 4 (Hidden on Mobile) */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-3 space-y-8"
        >
          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-base font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 03
            </span>
            <h3 className="text-2xl font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Booking
            </h3>
            <p className="text-base text-glaucous-800 leading-relaxed font-sans">
              A customer wants to book. The person who manages the schedule is busy. The customer waits. Then they forget to call back.
            </p>
          </div>

          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-base font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 04
            </span>
            <h3 className="text-2xl font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Payment
            </h3>
            <p className="text-base text-glaucous-800 leading-relaxed font-sans">
              A payment was due last week. Nobody sent a reminder. The customer didn&apos;t notice. The money doesn&apos;t come in.
            </p>
          </div>
        </m.div>

      </div>
    </section>
  );
}
