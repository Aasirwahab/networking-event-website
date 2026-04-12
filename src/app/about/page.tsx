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
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/networx_story_mayfair.webp"
        title={<>HUMAN <br /><span className="text-primary italic font-light">NETWORKING.</span></>}
        subtitle="Networx London makes networking human, relaxed, and genuinely enjoyable. We focus on fostering meaningful conversations over formal pitches."
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
