import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { VisionSection } from "@/sections/VisionSection";
import { TeamSection } from "@/sections/TeamSection";
import { HistorySection } from "@/sections/HistorySection";
import { FAQSection } from "@/sections/FAQSection";

export const metadata: Metadata = {
  title: 'Our Philosophy',
  description: 'Discover the story behind Networx London and our mission to foster human-centric, relaxed networking.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/networx_story_mayfair.png"
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
