"use client";

import React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { Highlighter } from "@/registry/magicui/highlighter";

export default function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [6, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-350, 50]),
    springConfig
  );

  const firstRow = products.slice(0, 5);

  return (
    <div
      ref={ref}
      className="h-[135vh] py-12 lg:py-16 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-zinc-950"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-20 pointer-events-auto"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-12 pb-4 md:pt-16 md:pb-6 px-6 w-full left-0 top-0 z-30 pointer-events-auto">
      <div className="max-w-3xl flex flex-col items-center text-center space-y-6 pt-6 mx-auto">
        {/* Eyebrow tag */}
        <span className="font-mono text-xs uppercase tracking-widest text-accent border border-accent/20 font-bold px-3 py-1 bg-accent/5 rounded-full">
          Digital Growth & Automation
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.15] text-white text-wrap-balance pb-1">
          Build & <Highlighter action="underline" strokeWidth={4}>Automate</Highlighter>.<br />
          Grow Your Business.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto text-wrap-pretty">
          We help growing businesses build modern websites, automate operations with AI, streamline workflows through custom business systems, and accelerate growth with data-driven digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link
            href="#products"
            className="px-6 py-3 text-sm font-semibold rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors text-center inline-flex items-center justify-center group"
          >
            <span>Explore Products</span>
            <IconArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/book"
            className="px-6 py-3 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-center"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: typeof products[0];
  translate: MotionValue<number>;
}) => {
  return (
    <Link href={product.link} className="block select-none">
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -12,
        }}
        key={product.title}
        className="group/product h-[34rem] w-[30rem] relative shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-colors duration-300 cursor-pointer bg-zinc-900"
      >
        {/* Background Image */}
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105 brightness-[0.55] contrast-[1.1] saturate-[0.8]"
          alt={product.title}
        />
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-10 transition-colors duration-300 group-hover/product:bg-black/15" />

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 text-white">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/15 rounded-full border border-accent/20 w-fit block">
              {product.tag}
            </span>
            <h3 className="text-3xl font-black text-white tracking-tight leading-tight pt-1">
              {product.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export const products = [
  {
    num: "01",
    title: "Business Platforms",
    desc: "Custom operational software engineered around your specific business processes and workflows.",
    tag: "Platforms",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/moonbeam.png",
    details: ["Centralized SQL Databases", "Multi-Agent Support", "Role-Based Access"]
  },
  {
    num: "02",
    title: "Modern Websites",
    desc: "Beautiful, hand-crafted web experiences that load instantly and rank on search engines.",
    tag: "Websites",
    link: "/services/website-development",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cursor.png",
    details: ["Next.js & React 19", "Perfect Core Web Vitals", "Structured SEO Data"]
  },
  {
    num: "03",
    title: "AI Automation",
    desc: "Eliminate repetitive tasks by embedding artificial intelligence directly into your daily pipelines.",
    tag: "AI & ML",
    link: "/products/ai-automation",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/rogue.png",
    details: ["Triage & Categorization", "Automatic Summaries", "Intelligent Reminders"]
  },
  {
    num: "04",
    title: "Digital Growth",
    desc: "Performance marketing, localized SEO, and search ads that drive measurable revenue growth.",
    tag: "Marketing",
    link: "/services/seo",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editorially.png",
    details: ["Google Search Ads", "Local SEO Optimization", "Funnel Conversion Audit"]
  },
  {
    num: "05",
    title: "Custom SQL Databases",
    desc: "Secure, structured PostgreSQL databases built to consolidate your operational data.",
    tag: "Database",
    link: "/products/crm",
    thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editrix.png",
    details: ["PostgreSQL Engine", "Real-Time Sync", "Automatic Backups"]
  }
];
