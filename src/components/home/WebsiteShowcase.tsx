"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconCircleCheck, 
  IconDeviceAnalytics,
  IconClock,
  IconSearch,
  IconDevices,
  IconHeart
} from "@tabler/icons-react";

export default function WebsiteShowcase() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const slides = [
    {
      title: "Coaching Academy Platform",
      category: "Education & Enrollment",
      features: ["NEET/JEE admissions pipeline", "Integrated batch scheduler", "Real-time fee payment statuses"],
      metrics: {
        seo: "100/100",
        speed: "0.4s FCP",
        mobile: "Fully Fluid"
      },
      tags: ["SEO", "Performance", "CMS"],
      mockup: (
        <div className="w-full h-full bg-[#FAFAFA] p-4 flex flex-col justify-between font-sans">
          <div className="flex justify-between items-center border-b border-border pb-2.5">
            <span className="text-[10px] font-bold text-foreground font-mono">GRAVITY_CLASSES</span>
            <div className="flex space-x-2 text-[8px] text-secondary font-mono">
              <span>Courses</span>
              <span>Batches</span>
              <span>Admissions</span>
            </div>
          </div>
          <div className="my-auto space-y-2 max-w-[200px]">
            <span className="text-[8px] font-mono text-accent uppercase tracking-wider font-bold">New Batch Admission Open</span>
            <h4 className="text-sm font-black text-foreground leading-tight tracking-tight">IIT-JEE 2027 Dropper Batch</h4>
            <p className="text-[9px] text-secondary leading-relaxed">Enroll now and recover batch schedules instantly via WhatsApp.</p>
            <div className="h-6 w-24 bg-accent rounded-full flex items-center justify-center text-white text-[8px] font-semibold">Apply for Batch</div>
          </div>
          <div className="flex justify-between items-center text-[7px] font-mono text-secondary pt-2 border-t border-border">
            <span>⚡ Powered by ADX OS</span>
            <span>Fee collection active</span>
          </div>
        </div>
      )
    },
    {
      title: "Vikas Dental & Maxillofacial Centre",
      category: "Healthcare & Booking",
      features: ["WhatsApp triage menu integrations", "Live dentist availability track", "Zero-friction clinic scheduling"],
      metrics: {
        seo: "99/100",
        speed: "0.6s LCP",
        mobile: "100% Responsive"
      },
      tags: ["Responsive", "Modern Motion", "SEO"],
      mockup: (
        <div className="w-full h-full bg-white p-4 flex flex-col justify-between font-sans">
          <div className="flex justify-between items-center border-b border-border pb-2.5">
            <span className="text-[10px] font-bold text-foreground font-mono">VIKAS_DENTAL</span>
            <span className="text-[8px] font-semibold bg-emerald-500/5 text-emerald-600 px-2 py-0.5 rounded-full font-mono">Clinic Open</span>
          </div>
          <div className="my-auto space-y-2 max-w-[220px]">
            <h4 className="text-sm font-black text-foreground leading-tight tracking-tight">Restore Your Perfect Smile.</h4>
            <p className="text-[9px] text-secondary leading-relaxed">Schedule dental consultations online or trigger booking confirmation through WhatsApp.</p>
            <div className="flex space-x-2">
              <div className="h-6 px-3 bg-foreground rounded-full flex items-center justify-center text-white text-[8px] font-semibold">Book Appt</div>
              <div className="h-6 px-3 border border-border rounded-full flex items-center justify-center text-foreground text-[8px] font-semibold">Our Doctors</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[7px] font-mono text-secondary pt-2 border-t border-border">
            <span>Verified Practitioner</span>
            <span>Emergency Support</span>
          </div>
        </div>
      )
    },
    {
      title: "Solomon Luxury Spa & Salon",
      category: "Premium Consumer & Recall",
      features: ["Weekday automation discounts", "Technician commission database", "30-day customer recall engine"],
      metrics: {
        seo: "100/100",
        speed: "0.3s FCP",
        mobile: "Touch Optimised"
      },
      tags: ["CMS", "Performance", "Responsive"],
      mockup: (
        <div className="w-full h-full bg-[#111111] p-4 flex flex-col justify-between text-white font-sans">
          <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
            <span className="text-[10px] font-mono font-bold tracking-widest">SOLOMON_SPA</span>
            <span className="text-[7px] text-white/50 font-mono">Mumbai</span>
          </div>
          <div className="my-auto text-center space-y-3 py-2">
            <span className="text-[8px] font-mono tracking-widest text-white/40 uppercase">Sensory Wellness Rituals</span>
            <h4 className="text-base font-medium tracking-wide">Experience Organic Rejuvenation</h4>
            <div className="w-20 h-[1px] bg-white/20 mx-auto" />
            <div className="h-6 w-24 border border-white/30 hover:border-white rounded-full flex items-center justify-center text-white text-[8px] font-mono tracking-wider mx-auto">RESERVE SLOT</div>
          </div>
          <div className="flex justify-between items-center text-[7px] font-mono text-white/40 pt-2 border-t border-white/10">
            <span>Est. 2018</span>
            <span>Weekday -20% active</span>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIdx];

  return (
    <section className="w-full py-20 lg:py-32 bg-[#FAFAFA] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
              Premium Website Designs
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            We build fast, secure, and SEO-optimized web experiences designed to increase conversions. Examine our design builds.
          </p>
        </div>

        {/* Carousel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Spec Details */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            {/* Slide Index / Navigation */}
            <div className="flex items-center space-x-6">
              <span className="font-mono text-sm font-bold text-secondary">
                [ 0{currentIdx + 1} / 0{slides.length} ]
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Spec Content Card */}
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                  {currentSlide.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                  {currentSlide.title}
                </h3>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-3">
                {currentSlide.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-secondary">
                    <IconCircleCheck className="w-5 h-5 text-accent mr-2.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Performance Metrics strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase block">SEO Rank</span>
                  <span className="text-sm font-extrabold text-foreground flex items-center">
                    <IconSearch className="w-3.5 h-3.5 text-accent mr-1" />
                    {currentSlide.metrics.seo}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase block">Load Speed</span>
                  <span className="text-sm font-extrabold text-foreground flex items-center">
                    <IconClock className="w-3.5 h-3.5 text-accent mr-1" />
                    {currentSlide.metrics.speed}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase block">Responsiveness</span>
                  <span className="text-sm font-extrabold text-foreground flex items-center">
                    <IconDevices className="w-3.5 h-3.5 text-accent mr-1" />
                    {currentSlide.metrics.mobile}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags indicators */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentSlide.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-bold text-secondary bg-white border border-border px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Browser Mockup Display */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="w-full bg-white border border-border rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#FAFAFA] border-b border-border">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="w-48 sm:w-64 h-5 bg-white border border-border rounded-full flex items-center justify-center text-[9px] font-mono text-secondary">
                  https://adhyayanx.in/case-studies/0{currentIdx + 1}
                </div>
                <div className="w-3" />
              </div>

              {/* Browser Viewport with Sliding Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  <m.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    {currentSlide.mockup}
                  </m.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
