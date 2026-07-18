import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./global-new.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Logo from "@/components/Logo";
import MotionProvider from "@/components/MotionProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADX (AdhyayanX) | The Operating System for Indian SMBs",
  description: "ADX helps Indian coaching institutes, clinics, salons, gyms, and professional services automate operations, recover lost revenue, and streamline workflows with WhatsApp automation.",
  metadataBase: new URL("https://adhyayanx.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://adhyayanx.in/#organization",
        "name": "ADX (AdhyayanX)",
        "url": "https://adhyayanx.in",
        "logo": "https://adhyayanx.in/logo.png",
        "image": "https://adhyayanx.in/og-image.jpg",
        "description": "ADX helps Indian coaching institutes, clinics, salons, gyms, and professional services automate operations, recover lost revenue, and streamline workflows with WhatsApp automation.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "telephone": "+919876543210",
        "priceRange": "₹₹₹"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://adhyayanx.in/products/institute-os/#software",
        "name": "ADX Institute OS",
        "operatingSystem": "All",
        "applicationCategory": "BusinessApplication",
        "description": "The unified operating system designed to automate coaching classes, batch management, fee collection tracking, QR attendance, and WhatsApp notifications.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <MotionProvider>
          <div className="flex-grow pt-18">{children}</div>
        </MotionProvider>
        <footer className="w-full bg-background border-t border-border py-16 px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center">
                <Logo className="h-14 w-auto" />
              </Link>
              <p className="text-sm text-secondary leading-relaxed max-w-xs">
                Building premium digital infrastructure and automation engines for growing businesses.
              </p>
            </div>
            
            <div>
              <h5 className="font-mono text-xs text-secondary uppercase tracking-widest mb-6 font-bold">Products</h5>
              <ul className="flex flex-col gap-3 text-sm text-secondary">
                <li><Link href="/products/institute-os" className="hover:text-accent transition-colors">Institute OS</Link></li>
                <li><Link href="/products/crm" className="hover:text-accent transition-colors">Business CRM</Link></li>
                <li><Link href="/products/ai-automation" className="hover:text-accent transition-colors">AI Automation</Link></li>
                <li><Link href="/products/whatsapp-automation" className="hover:text-accent transition-colors">WhatsApp Automation</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-xs text-secondary uppercase tracking-widest mb-6 font-bold">Services</h5>
              <ul className="flex flex-col gap-3 text-sm text-secondary">
                <li><Link href="/services/website-development" className="hover:text-accent transition-colors">Website Development</Link></li>
                <li><Link href="/services/seo" className="hover:text-accent transition-colors">SEO Optimization</Link></li>
                <li><Link href="/services/google-ads" className="hover:text-accent transition-colors">Google Ads</Link></li>
                <li><Link href="/services/social-media-marketing" className="hover:text-accent transition-colors">Social Media Marketing</Link></li>
                <li><Link href="/services/branding" className="hover:text-accent transition-colors">Branding & Design</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-xs text-secondary uppercase tracking-widest mb-6 font-bold">Company</h5>
              <ul className="flex flex-col gap-3 text-sm text-secondary">
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link href="/book" className="hover:text-accent transition-colors">Book Strategy Call</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-xs text-secondary">
              © {new Date().getFullYear()} ADX Digital. All rights reserved.
            </span>
            <span className="font-mono text-xs text-secondary">
              Engineered with precision.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
