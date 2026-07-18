"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { 
  IconSchool, 
  IconDatabase, 
  IconBrain, 
  IconBrandWhatsapp, 
  IconArrowRight 
} from "@tabler/icons-react";

export default function ProductsGrid() {
  const products = [
    {
      title: "Institute OS",
      desc: "An all-in-one platform for student records, batches, QR attendance, and automated payment recovery.",
      icon: IconSchool,
      link: "/products/institute-os",
      accent: "hover:border-accent/30 group-hover:text-accent",
      bg: "bg-accent/5"
    },
    {
      title: "Business CRM",
      desc: "Keep track of customer pipelines from Facebook ads, store booking statuses, and manage follow-ups.",
      icon: IconDatabase,
      link: "/products/crm",
      accent: "hover:border-[#494949]/30 group-hover:text-accent",
      bg: "bg-[#494949]/5"
    },
    {
      title: "AI Automation",
      desc: "Integrate Large Language Models directly to categorize incoming leads, write responses, and summary audits.",
      icon: IconBrain,
      link: "/products/ai-automation",
      accent: "hover:border-accent/30 group-hover:text-accent",
      bg: "bg-accent/5"
    },
    {
      title: "WhatsApp Automation",
      desc: "Deliver custom API-triggered messages, invoice templates, and support menus directly on India's primary chat app.",
      icon: IconBrandWhatsapp,
      link: "/products/whatsapp-automation",
      accent: "hover:border-[#7c7a7a]/30 group-hover:text-accent",
      bg: "bg-[#7c7a7a]/5"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold">
            Product Lineup
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            Our Business Platforms
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            ADX builds connected infrastructure to replace disconnected systems. Explore our software suites designed for operational growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <m.div
                key={product.title}
                className={`group relative neumorphic-flat rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ${product.accent}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${product.bg} flex items-center justify-center text-secondary transition-colors duration-300 group-hover:text-accent`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={product.link}
                    className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
                  >
                    <span>View Platform</span>
                    <IconArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
