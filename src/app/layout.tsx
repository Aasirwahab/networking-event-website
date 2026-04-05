import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { LenisProvider } from "@/contexts/LenisContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Networx London - Human Networking Over Great Breakfasts",
  description:
    "Networx London makes networking human, relaxed, and genuinely enjoyable. Join a diverse mix of directors, CEOs, entrepreneurs, founders, and professionals.",
  openGraph: {
    title: "Networx London - Human Networking Over Great Breakfasts",
    description:
      "Networx London makes networking human, relaxed, and genuinely enjoyable.",
    type: "website",
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
        <LenisProvider>
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
