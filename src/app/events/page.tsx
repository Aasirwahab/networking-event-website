import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { EventsSection } from "@/sections/EventsSection";

export const metadata: Metadata = {
  title: 'Our Events | Actos - Global Networking Event',
  description: 'Explore the exciting lineup of events, workshops, and networking sessions at Actos.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <TransitionTemplate>
        <Heading className="text-6xl md:text-8xl font-bold">
          The Events.
        </Heading>
        <SubHeading className="text-xl text-slate-400 max-w-2xl mx-auto">
          Immerse yourself in workshops, keynote sessions, and exclusive networking moments that will redefine your perspective.
        </SubHeading>
      </TransitionTemplate>
      <EventsSection />
      <Footer />
    </div>
  );
}
