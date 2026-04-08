import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from "@/sections/HeroSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { AgendaSection } from "@/sections/AgendaSection";
import { StatsSection } from "@/sections/StatsSection";
import { CTASection } from "@/sections/CTASection";
import { SectionSkeleton } from "@/components/SectionSkeleton";

const AboutSection = dynamic(() => import("@/sections/AboutSection").then(m => ({ default: m.AboutSection })), { loading: () => <SectionSkeleton /> });
const EventsSection = dynamic(() => import("@/sections/EventsSection").then(m => ({ default: m.EventsSection })), { loading: () => <SectionSkeleton /> });
const NetworxStories = dynamic(() => import("@/sections/NetworxStories").then(m => ({ default: m.NetworxStories })), { loading: () => <SectionSkeleton /> });
const SpeakersSection = dynamic(() => import("@/sections/SpeakersSection").then(m => ({ default: m.SpeakersSection })), { loading: () => <SectionSkeleton /> });

export const metadata: Metadata = {
  description: 'Join London\'s premier networking community. Connect with directors, startup founders, CEOs, and investors for meaningful relationship building.',
  openGraph: {
    title: 'London Networking Events | Professional Founders & Startups',
    description: 'Join London\'s premier professional networking gathering.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London Networking Events | Professional Founders & Startups',
    description: 'Join London\'s premier professional networking gathering.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <main className="relative">
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <AgendaSection />
        <EventsSection />
        <StatsSection />
        <NetworxStories />
        <SpeakersSection />
        <CTASection />
      </main>
    </div>
  );
}
