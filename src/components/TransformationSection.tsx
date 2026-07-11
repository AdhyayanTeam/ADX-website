"use client";

import { useRef, useEffect } from "react";
import { m } from "framer-motion";

interface BentoCardProps {
  title: string;
  beforeText: string;
  afterText: string;
  className?: string;
}

const BentoCard = ({ title, beforeText, afterText, className = "" }: BentoCardProps) => (
  <div className={`flex flex-col justify-between bg-white border border-glaucous-200/60 rounded-2xl p-6 shadow-sm hover:border-coffee-bean-300 hover:shadow-md transition-all duration-300 group ${className}`}>
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-xl font-bold text-vivid-royal-950 tracking-tight mb-4">{title}</h3>
        
        <div className="space-y-4">
          {/* Before ADX */}
          <div className="p-4 bg-red-50/40 border border-red-100 rounded-xl min-h-[100px] flex flex-col justify-between">
            <span className="inline-block text-[9px] font-mono font-bold tracking-wider text-red-500 bg-red-100/50 border border-red-200/40 px-2 py-0.5 rounded-full mb-2 uppercase w-fit">
              Before ADX
            </span>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-medium">
              {beforeText}
            </p>
          </div>
          
          {/* Connector Line */}
          <div className="flex justify-center text-glaucous-300 font-bold leading-none -my-2">
            ↓
          </div>
          
          {/* With ADX */}
          <div className="p-4 bg-coffee-bean-50/40 border border-coffee-bean-100 rounded-xl min-h-[100px] flex flex-col justify-between">
            <span className="inline-block text-[9px] font-mono font-bold tracking-wider text-coffee-bean-600 bg-coffee-bean-100/50 border border-coffee-bean-200/40 px-2 py-0.5 rounded-full mb-2 uppercase w-fit">
              With ADX
            </span>
            <p className="text-xs sm:text-sm text-vivid-royal-950 leading-relaxed font-semibold">
              {afterText}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function TransformationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let autoplayTimer = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const scrollAmount = container.clientWidth * 0.85 + 16;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3500);

    const pauseAutoplay = () => {
      clearInterval(autoplayTimer);
    };

    container.addEventListener("touchstart", pauseAutoplay, { passive: true });
    container.addEventListener("mousedown", pauseAutoplay);

    return () => {
      clearInterval(autoplayTimer);
      container.removeEventListener("touchstart", pauseAutoplay);
      container.removeEventListener("mousedown", pauseAutoplay);
    };
  }, []);

  const cardData = [
    {
      title: "Support Automation",
      beforeText: "Staff answer the same questions every day.",
      afterText: "Every answer is written down and easy to find."
    },
    {
      title: "Conversation Tracking",
      beforeText: "Customer conversations live in personal WhatsApp chats.",
      afterText: "Every enquiry is tracked from the first message."
    },
    {
      title: "Operations Delegation",
      beforeText: "The owner becomes the backup for everything.",
      afterText: "Follow-ups happen automatically. Nobody needs to chase."
    },
    {
      title: "Payment Visibility",
      beforeText: "Payments are tracked in spreadsheets.",
      afterText: "Payment status is visible in one place."
    },
    {
      title: "Progress Oversight",
      beforeText: "Reports take hours to put together.",
      afterText: "Progress is visible without asking anyone."
    }
  ];

  return (
    <section className="w-full bg-ghost-white-50 border-t border-b border-glaucous-200/80 py-24 lg:py-36 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-vivid-royal-950 tracking-tight leading-tight text-wrap-balance">
            Before and after ADX
          </h2>
          <p className="text-base sm:text-lg text-glaucous-800 max-w-xl mx-auto leading-relaxed text-wrap-pretty mt-4">
            Real differences. No percentages. No made-up numbers.
          </p>
        </div>

        {/* Desktop Grid Layout (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5 }}
            className="col-span-6 flex"
          >
            <BentoCard 
              title={cardData[0].title}
              beforeText={cardData[0].beforeText}
              afterText={cardData[0].afterText}
              className="w-full"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 flex"
          >
            <BentoCard 
              title={cardData[1].title}
              beforeText={cardData[1].beforeText}
              afterText={cardData[1].afterText}
              className="w-full"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-4 flex"
          >
            <BentoCard 
              title={cardData[2].title}
              beforeText={cardData[2].beforeText}
              afterText={cardData[2].afterText}
              className="w-full"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 flex"
          >
            <BentoCard 
              title={cardData[3].title}
              beforeText={cardData[3].beforeText}
              afterText={cardData[3].afterText}
              className="w-full"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-4 flex"
          >
            <BentoCard 
              title={cardData[4].title}
              beforeText={cardData[4].beforeText}
              afterText={cardData[4].afterText}
              className="w-full"
            />
          </m.div>
        </div>

        {/* Mobile Autoplay Slider Layout (Hidden on Desktop) */}
        <div className="md:hidden px-6 -mx-6">
          <style dangerouslySetInnerHTML={{__html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />
          
          <div 
            ref={scrollRef}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4"
          >
            {cardData.map((card, index) => (
              <BentoCard 
                key={index}
                title={card.title}
                beforeText={card.beforeText}
                afterText={card.afterText}
                className="snap-center shrink-0 w-[85vw] max-w-[320px]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
