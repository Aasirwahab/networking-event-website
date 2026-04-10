import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { EventSchedule } from "@/sections/EventSchedule";

export const metadata: Metadata = {
  title: 'Our Events | London Networking Events',
  description: 'Join the next Networx London exclusive networking event. Meet startup founders, CEOs, investors, and build meaningful professional connections.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/networx_hero_event.png"
        title={<>OUR <br /><span className="text-primary italic font-light">EVENTS.</span></>}
        subtitle="Join the premier networking events for professionals in London. We focus on real conversations, actionable growth, and forging highly valuable connections."
      />
      <main className="space-y-0">
        <EventSchedule />
      </main>
    </div>
  );
}
