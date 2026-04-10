import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { FAQSection } from "@/sections/FAQSection";

export const metadata: Metadata = {
  title: 'FAQ | Networx London - Networking Events',
  description: 'Frequently asked questions about Networx London networking events.',
  openGraph: {
    title: 'FAQ | Networx London',
    description: 'Frequently asked questions about Networx London networking events.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Networx London',
    description: 'Frequently asked questions about Networx London networking events.',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/london/6.png"
        title={<>FREQUENTLY <br /><span className="text-primary italic font-light">ASKED.</span></>}
        subtitle="Find answers to common questions about our events, membership, venues, and everything else you need to know."
      />
      <main>
        <FAQSection />
      </main>
    </div>
  );
}
