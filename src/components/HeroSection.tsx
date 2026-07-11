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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleScroll();
    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="relative w-full bg-glaucous-50 overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 flex flex-col items-center justify-center min-h-[100dvh] lg:min-h-screen">
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

      {/* Main Hero content wrapper (centered text area) */}
      <div className="w-full max-w-4xl mx-auto text-center z-[10] relative flex flex-col items-center justify-center flex-grow mb-12 lg:mb-20">
        {!isMobile && (
          <div 
            id="hero-logo-placeholder" 
            className={`transition-all duration-600 ease-out ${
              isScrolled 
                ? "h-0 w-0 mb-0 opacity-0 pointer-events-none" 
                : "h-16 w-36 sm:h-20 sm:w-48 lg:h-24 lg:w-56 mb-6 opacity-100"
            }`}
          />
        )}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-vivid-royal-950 drop-shadow-sm leading-tight max-w-4xl relative z-[10] mb-6">
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

      {/* Reasons list integrated directly inside the Hero section (Desktop: side-by-side grid, Mobile: horizontal scroll) */}
      <div 
        className="w-full max-w-7xl mx-auto flex lg:grid overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-6 text-left pb-4 lg:pb-0 scrollbar-none lg:grid-cols-3 z-[10] relative mt-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reasons.map((item, idx) => (
          <div
            key={item.title}
            className="min-w-[85vw] sm:min-w-[50vw] lg:min-w-0 snap-center flex flex-col items-start p-6 rounded-xl bg-white/40 backdrop-blur-md border border-white/20 hover:bg-white/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group"
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
  );
}
