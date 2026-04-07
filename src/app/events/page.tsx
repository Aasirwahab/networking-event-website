import { Metadata } from 'next';
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { EventSchedule } from "@/sections/EventSchedule";
import { TicketTiers } from "@/sections/TicketTiers";

export const metadata: Metadata = {
  title: 'Our Events | London Networking Events',
  description: 'Join the next Networx London exclusive networking event. Meet startup founders, CEOs, investors, and build meaningful professional connections.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <TransitionTemplate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Heading className="text-5xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-none mb-8">
            OUR <br />
            <span className="text-primary italic font-light">EVENTS.</span>
          </Heading>
          <SubHeading className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Join the premier networking events for professionals in London. We focus on real conversations, actionable growth, and forging highly valuable connections.
          </SubHeading>
        </div>
      </TransitionTemplate>
      
      <main className="space-y-0">
        <EventSchedule />
        <TicketTiers />
      </main>

    </div>
  );
}
