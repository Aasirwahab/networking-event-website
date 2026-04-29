import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { LenisProvider } from "@/contexts/LenisContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "London Networking Events | Professional Founders & Startups | Networx London",
    template: "%s | Networx London",
  },
  description:
    "Networx London hosts premier networking events for professional founders, startups, CEOs, and investors. Build valuable connections and scale your business in a relaxed environment.",
  keywords: ["London networking events", "Startup networking London", "Founder networking events London", "Professional networks London", "Investor networking events", "Tech startup events London", "Business networking London SW15"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "London Networking Events | Professional Founders & Startups | Networx London",
    description:
      "Join a diverse mix of directors, CEOs, entrepreneurs, founders, startups, and investors to spark valuable connections.",
    type: "website",
    siteName: "Networx London",
    url: SITE_URL,
    locale: 'en_GB',
  },
  twitter: {
    card: "summary_large_image",
    title: "London Networking Events | Professional Founders & Startups",
    description:
      "Join a diverse mix of directors, CEOs, entrepreneurs, founders, startups, and investors to spark valuable connections.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Networx London",
  description:
    "Networx London makes networking human, relaxed, and genuinely enjoyable. Events bring together a diverse mix of company directors, CEOs, entrepreneurs, founders, startups, small business owners, investors, and working professionals to spark valuable connections.",
  url: SITE_URL,
  founder: {
    "@type": "Organization",
    name: "Networx London Network"
  },
  foundingDate: "2025",
  industry: "Events Services",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
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
            <div id="main-content" className="relative">
              {children}
            </div>
            <Footer />
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
