import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech } from "next/font/google";
import "./global-new.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Logo from "@/components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${shareTech.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-glaucous-50 text-vivid-royal-950">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <footer className="w-full bg-ghost-white-50 border-t border-glaucous-200/80 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-start gap-3">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo className="h-24 w-auto text-vivid-royal-950" />
                <span className="font-mono text-[24px] text-glaucous-600 border-l border-glaucous-200 pl-2.5">AdhyayanX</span>
              </Link>
              <p className="text-xs text-glaucous-700 leading-relaxed max-w-xs">
                Building the future operating system for Indian SMBs. Operational automation, custom databases, and WhatsApp engines.
              </p>
            </div>
            
            <div>
              <h5 className="font-mono text-[10px] text-glaucous-600 uppercase tracking-widest mb-4">Verticals</h5>
              <ul className="flex flex-col gap-2.5 text-xs text-glaucous-700">
                <li><Link href="/industries#ind-coaching-block" className="hover:text-coffee-bean-600 transition-colors">Coaching Institutes</Link></li>
                <li><Link href="/industries#ind-healthcare-block" className="hover:text-coffee-bean-600 transition-colors">Clinics & Practices</Link></li>
                <li><Link href="/industries#ind-salon-block" className="hover:text-coffee-bean-600 transition-colors">Salons & Spas</Link></li>
                <li><Link href="/industries#ind-gym-block" className="hover:text-coffee-bean-600 transition-colors">Gyms & Studios</Link></li>
                <li><Link href="/industries#ind-professional-block" className="hover:text-coffee-bean-600 transition-colors">Professional Services</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[10px] text-glaucous-600 uppercase tracking-widest mb-4">Platform</h5>
              <ul className="flex flex-col gap-2.5 text-xs text-glaucous-700">
                <li><Link href="/platform" className="hover:text-coffee-bean-600 transition-colors">Capabilities</Link></li>
                <li><Link href="/discovery" className="hover:text-coffee-bean-600 transition-colors">Discovery Process</Link></li>
                <li><Link href="/book" className="hover:text-coffee-bean-600 transition-colors">Book Diagnostic Call</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[10px] text-glaucous-600 uppercase tracking-widest mb-4">Company</h5>
              <ul className="flex flex-col gap-2.5 text-xs text-glaucous-700">
                <li><Link href="/about" className="hover:text-coffee-bean-600 transition-colors">Manifesto</Link></li>
                <li><Link href="/insights" className="hover:text-coffee-bean-600 transition-colors">Insights & Case Studies</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-glaucous-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-[9px] text-glaucous-500">
              © {new Date().getFullYear()} ADX (AdhyayanX). All rights reserved.
            </span>
            <span className="font-mono text-[9px] text-glaucous-500">
              Operations-first software engineering.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
