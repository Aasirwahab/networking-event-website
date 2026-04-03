import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { SpeakersSection } from "@/sections/SpeakersSection";

export const metadata: Metadata = {
  title: 'Our Speakers | Actos - Global Networking Event',
  description: 'Meet the industry leaders, visionaries, and innovators speaking at Actos.',
};

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <TransitionTemplate>
        <Heading className="text-6xl md:text-8xl font-bold">
          The Speakers.
        </Heading>
        <SubHeading className="text-xl text-slate-400 max-w-2xl mx-auto">
          Meet the industry leaders, visionaries, and innovators who are actively shaping the future of global industries.
        </SubHeading>
      </TransitionTemplate>
      <SpeakersSection />
      <Footer />
    </div>
  );
}
