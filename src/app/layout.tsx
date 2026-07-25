import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./global-new.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
// Trigger layout rebuild
