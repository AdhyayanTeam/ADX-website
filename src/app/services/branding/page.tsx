"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { 
  IconCompass, 
  IconBrowser, 
  IconShield 
} from "@tabler/icons-react";

export default function BrandingPage() {
  const benefits = [
    {
      title: "Custom Font & Type Selection",
      desc: "We avoid default fonts. We select modern display typefaces and pairing fonts (e.g. Geist, Satoshi, Cabinet Grotesk) that give your brand a premium feel.",
      icon: IconCompass
    },
    {
      title: "Harmonious HSL Color Systems",
      desc: "We build tailored color palettes with high-contrast rules, ensuring all text elements meet accessibility standards while maintaining brand styling.",
      icon: IconBrowser
    },
    {
      title: "Scalable Vector Logo Systems",
      desc: "We design clean, minimal vector logos and sub-marks in SVG formats, ensuring your visual identity scales perfectly from mobile screens to physical signs.",
      icon: IconShield
    }
  ];

  const features = [
    {
      title: "Logo Systems Design",
      desc: "Create simple, memorable logo systems that communicate your brand values clearly across print and digital media.",
      badge: "Identity Module",
      details: ["Primary Logo layouts", "Sleek Sub-mark Icons", "Scalable SVG Assets", "Light/Dark Variant Maps"]
    },
    {
      title: "Typography Hierarchies",
      desc: "Establish typography guidelines for display headers, subtext, and body copy, ensuring clear visual readability.",
      badge: "Typography Module",
      details: ["Display Font Pairings", "Body Type Hierarchy", "Letter-Spacing Calibration", "Responsive Size Guides"]
    },
    {
      title: "Brand Asset Books",
      desc: "We compile all asset guidelines, color rules, and layout parameters into a central PDF document for your team.",
      badge: "Guidelines Module",
      details: ["HSL Color Palette Code", "Typography Spec Sheets", "Image Style Guidelines", "Logo Space Rules"]
    },
    {
      title: "UI Design Integration",
      desc: "Translate your new brand identity directly into UI elements, structuring consistent button shapes and input borders.",
      badge: "Design Module",
      details: ["Button Corner Radii Rules", "Border Thickness Specs", "Interactive Focus States", "Component Shadow Scales"]
    }
  ];

  const process = [
    { title: "shadow", desc: "Audit competitor styles." },
    { title: "Moodboard", desc: "Define creative direction." },
    { title: "Logo", desc: "Draft vector logo choices." },
    { title: "Typography", desc: "Map display font pairings." },
    { title: "Colors", desc: "Calibrate accessible HSL values." },
    { title: "Handover", desc: "Deliver brand guideline book." }
  ];

  const faq = [
    {
      q: "How many design revisions are included?",
      a: "Our branding process includes 3 comprehensive rounds of feedback. We present moodboards first to align on style direction, followed by logo drafts and typography pairings."
    },
    {
      q: "Who handles font licensing for display typography?",
      a: "We prioritize using open-source, high-quality fonts (e.g. Geist, Satoshi, Inter) that require no ongoing license fees. If a project requires a commercial display font, we help your team secure the licenses directly."
    },
    {
      q: "What file formats do you deliver?",
      a: "We deliver all assets in industry-standard formats, including fully editable vector SVGs, high-resolution PNGs, print-ready PDFs, and interactive design files (Figma)."
    }
  ];

  return (
    <SubpageLayout
      eyebrow="Identity & Typography"
      title="Branding & Visual Identity"
      subheading="Establish visual credibility with a premium corporate identity. We design logos, select typography pairings, and build visual systems."
      overviewTitle="Identity Built for Modern Markets"
      overviewDesc="Many businesses use generic templates and low-quality graphics that fail to establish trust. We build custom visual identities. We select display typography, define accessible color palettes, create vector logos, and compile cohesive design guidelines."
      overviewMetrics={[
        { label: "Vector Formats", val: "100% SVG Scalable" },
        { label: "Accessibility Contrast", val: "WCAG AA Passed" },
        { label: "Font Pairings", val: "Custom Calibrated" }
      ]}
      benefits={benefits}
      features={features}
      process={process}
      faq={faq}
      ctaTitle="Refresh Your Brand Identity"
      ctaDesc="Connect with our brand designers to schedule a style audit. We will review your current visual assets and outline a brand migration roadmap."
    />
  );
}
