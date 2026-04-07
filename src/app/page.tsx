import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from "@/sections/HeroSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { AgendaSection } from "@/sections/AgendaSection";
import { StatsSection } from "@/sections/StatsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";
import { SectionSkeleton } from "@/components/SectionSkeleton";

const AboutSection = dynamic(() => import("@/sections/AboutSection").then(m => ({ default: m.AboutSection })), { loading: () => <SectionSkeleton /> });
const EventsSection = dynamic(() => import("@/sections/EventsSection").then(m => ({ default: m.EventsSection })), { loading: () => <SectionSkeleton /> });
const VenueSection = dynamic(() => import("@/sections/VenueSection").then(m => ({ default: m.VenueSection })), { loading: () => <SectionSkeleton /> });
const NetworxStories = dynamic(() => import("@/sections/NetworxStories").then(m => ({ default: m.NetworxStories })), { loading: () => <SectionSkeleton /> });
const SpeakersSection = dynamic(() => import("@/sections/SpeakersSection").then(m => ({ default: m.SpeakersSection })), { loading: () => <SectionSkeleton /> });

export const metadata: Metadata = {
  description: 'Join London\'s premier breakfast networking community. Connect with directors, founders, and professionals over great food in a relaxed, welcoming environment.',
  openGraph: {
    title: 'Networx London - Human Networking Over Great Breakfasts',
    description: 'Join London\'s premier breakfast networking community.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Networx London - Human Networking Over Great Breakfasts',
    description: 'Join London\'s premier breakfast networking community.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <EventsSection />
        <AgendaSection />
        <VenueSection />
        <StatsSection />
        <NetworxStories />
        <SpeakersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}
