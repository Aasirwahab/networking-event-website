import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { EventSchedule } from "@/sections/EventSchedule";
import { EventFramer } from "@/sections/EventFramer";

export const metadata: Metadata = {
  title: 'Our Events | London Networking Events',
  description: 'Join the next Networx London exclusive networking event. Meet startup founders, CEOs, investors, and build meaningful professional connections.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SubPageHero
        backgroundImage="/images/networx_hero_event.webp"
        eyebrow="Network with us"
        title="Discover the Events"
        subtitle="Curated events for professionals who seek connection, growth, and community — a dedicated space to refine your network and connect with others who value genuine dialogue."
        ctaText="Join An Event"
        ctaLink="#events"
        showMarquee={true}
      />
      <main className="space-y-0">
        <EventFramer />
        <EventSchedule />
      </main>
    </div>
  );
}
