import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { EventSchedule } from "@/sections/EventSchedule";
import { TicketTiers } from "@/sections/TicketTiers";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: 'Our Events | Networx London',
  description: 'Join the next Networx London breakfast summit or evening mixer. Meaningful conversations for the elite.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <TransitionTemplate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Heading className="text-5xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-none mb-8">
            ELITE <br />
            <span className="text-primary italic font-light">EVENTS.</span>
          </Heading>
          <SubHeading className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Reserved for the visionary builders of London. Join our monthly summits and evening mixers designed for genuine connection.
          </SubHeading>
        </div>
      </TransitionTemplate>
      
      <main className="space-y-0">
        <EventSchedule />
        <TicketTiers />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
