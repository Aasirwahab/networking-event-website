import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { SpeakerSpotlight } from "@/sections/SpeakerSpotlight";
import { SpeakerNomination } from "@/sections/SpeakerNomination";

export const metadata: Metadata = {
  title: 'Our Community | Networx London',
  description: 'Meet the diverse mix of professionals who make Networx London a welcoming space for genuine connection.',
};

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <TransitionTemplate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Heading className="text-5xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-none mb-8">
            OUR <br />
            <span className="text-primary italic font-light">COMMUNITY.</span>
          </Heading>
          <SubHeading className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Meet the diverse mix of directors, founders, entrepreneurs, and professionals who make our breakfasts genuinely special.
          </SubHeading>
        </div>
      </TransitionTemplate>
      
      <main className="space-y-0">
        <SpeakerSpotlight />
        <SpeakerNomination />
      </main>

      <Footer />
    </div>
  );
}
