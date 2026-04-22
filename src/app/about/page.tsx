import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SubPageHero } from "@/components/SubPageHero";
import { VisionSection } from "@/sections/VisionSection";
import { SectionSkeleton } from "@/components/SectionSkeleton";

const TeamSection = dynamic(() => import("@/sections/TeamSection").then(m => ({ default: m.TeamSection })), { loading: () => <SectionSkeleton /> });
const HistorySection = dynamic(() => import("@/sections/HistorySection").then(m => ({ default: m.HistorySection })), { loading: () => <SectionSkeleton /> });
const FAQSection = dynamic(() => import("@/sections/FAQSection").then(m => ({ default: m.FAQSection })), { loading: () => <SectionSkeleton /> });

export const metadata: Metadata = {
  title: 'Our Philosophy',
  description: 'Discover the story behind Networx London and our mission to foster human-centric, relaxed networking.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SubPageHero
        backgroundImage="/images/networx_story_mayfair.webp"
        eyebrow="Network with us"
        title="Discover the Community"
        subtitle="Networx London makes networking human, relaxed, and genuinely enjoyable. We focus on fostering meaningful conversations over formal pitches — a dedicated space to connect with others who value authentic professional relationships."
        ctaText="Join A Networking Event"
        ctaLink="/events"
        showMarquee={true}
      />
      <main className="space-y-0">
        <VisionSection />
        <TeamSection />
        <HistorySection />
        <FAQSection />
      </main>
    </div>
  );
}
