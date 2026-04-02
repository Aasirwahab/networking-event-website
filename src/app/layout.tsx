import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Actos - Innovating Event Experiences for Global Connections",
  description:
    "Actos is a leading global event management company dedicated to delivering exceptional events, from intimate gatherings to grand conferences.",
  openGraph: {
    title: "Actos - Innovating Event Experiences for Global Connections",
    description:
      "Actos is a leading global event management company dedicated to delivering exceptional events.",
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
      <body>{children}</body>
    </html>
  );
}
