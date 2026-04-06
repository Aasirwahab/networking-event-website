import { Metadata } from 'next';
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { VisionSection } from "@/sections/VisionSection";
import { TeamSection } from "@/sections/TeamSection";
import { HistorySection } from "@/sections/HistorySection";

export const metadata: Metadata = {
  title: 'Our Philosophy',
  description: 'Discover the story behind Networx London and our mission to foster human-centric, relaxed networking.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <TransitionTemplate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Heading className="text-5xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-none mb-8">
            HUMAN <br />
            <span className="text-primary italic font-light">NETWORKING.</span>
          </Heading>
          <SubHeading className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Networx London makes networking human, relaxed, and genuinely enjoyable. We focus on fostering meaningful conversations over formal pitches.
          </SubHeading>
        </div>
      </TransitionTemplate>
      
      <main className="space-y-0">
        <VisionSection />
        <TeamSection />
        <HistorySection />
      </main>
    </div>
  );
}
