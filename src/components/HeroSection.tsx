import { useState, useEffect } from "react";
import Link from "next/link";
import { MeshGradient } from "@paper-design/shaders-react";

const reasons = [
  {
    title: "We spend time in your business first",
    desc: "We don't recommend anything until we understand how your business actually runs.",
  },
  {
    title: "Built around your team",
    desc: "We don't ask your staff to learn new habits. We build around the way your business already works.",
  },
  {
    title: "Start with what hurts most",
    desc: "We find your biggest problem and build a working solution in 14 days.",
  },
];

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative w-full bg-glaucous-50 overflow-hidden py-20 lg:py-32 flex items-center justify-center min-h-[85dvh]">
        <div className="absolute inset-0 z-0">
          <MeshGradient
            style={{ height: "100%", width: "100%" }}
            distortion={0.8}
            swirl={0.1}
            offsetX={0}
            offsetY={0}
            scale={1}
            rotation={0}
            speed={1}
            colors={["#e8eddf", "#f5f5f5", "#cfdbd5", "#f5cb5c"]}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 text-center z-[10] relative flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-vivid-royal-950 drop-shadow-sm leading-tight max-w-4xl relative z-[10] mb-6">
              <span 
                id="hero-logo-placeholder" 
                className={`inline-block align-middle transition-all duration-600 ease-out ${
                  isScrolled 
                    ? "w-0 h-0 mr-0 opacity-0 pointer-events-none" 
                    : "h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mr-4 lg:mr-6 opacity-100"
                }`}
              />
              Scale your business operations{" "}
              <span className="text-coffee-bean-600">
                by replacing manual memory with systems.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-glaucous-800 mb-8 max-w-2xl drop-shadow-sm leading-relaxed">
              Follow-ups get missed and customer details get lost. ADX builds simple systems so your business runs smoothly as it grows.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                data-track-cta="hero"
                className="px-6 py-3.5 text-base font-bold rounded-lg bg-coffee-bean-400 bg-gradient-to-b from-white/35 via-white/5 to-black/20 text-coffee-bean-950 border-t border-t-white/50 border-x border-x-coffee-bean-500/60 border-b-[4px] border-b-coffee-bean-700 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.45),inset_0_-1.5px_0_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-800 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/platform"
                data-track-cta="hero"
                className="px-6 py-3.5 text-base font-bold rounded-lg bg-glaucous-50 bg-gradient-to-b from-white/80 via-white/10 to-glaucous-200/40 text-glaucous-950 border-t border-t-white border-x border-x-glaucous-300/80 border-b-[4px] border-b-glaucous-400 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.2)] hover:brightness-105 hover:border-b-glaucous-500 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-100 ease-out select-none"
              >
                See What We Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white border-b border-glaucous-200/80 py-16 px-6 relative z-10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {reasons.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col items-start p-5 rounded-xl bg-glaucous-50/20 border border-glaucous-100 hover:bg-glaucous-50/40 hover:border-glaucous-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 group"
            >
              <span className="text-base font-mono font-bold text-coffee-bean-600 mb-2.5 tracking-wider block">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-vivid-royal-950 mb-2 leading-snug group-hover:text-coffee-bean-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-base text-glaucous-800 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
