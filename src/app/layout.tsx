import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { LenisProvider } from "@/contexts/LenisContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Networx London - Human Networking Over Great Breakfasts",
    template: "%s | Networx London",
  },
  description:
    "Networx London makes networking human, relaxed, and genuinely enjoyable. Join a diverse mix of directors, CEOs, entrepreneurs, founders, and professionals.",
  openGraph: {
    title: "Networx London - Human Networking Over Great Breakfasts",
    description:
      "Networx London makes networking human, relaxed, and genuinely enjoyable.",
    type: "website",
    siteName: "Networx London",
  },
  twitter: {
    card: "summary_large_image",
    title: "Networx London - Human Networking Over Great Breakfasts",
    description:
      "Networx London makes networking human, relaxed, and genuinely enjoyable.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Networx London",
  description:
    "Networx London makes networking human, relaxed, and genuinely enjoyable.",
  url: "https://networxlondon.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    postalCode: "SW15 3SR",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <TransitionProvider>
            <Navbar />
            <div id="main-content">
              {children}
            </div>
            <Footer />
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
