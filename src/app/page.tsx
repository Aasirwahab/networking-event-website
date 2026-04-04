import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { Footer } from "@/sections/Footer";

// Lightweight sections (no framer-motion or only ScrollReveal)
import { AgendaSection } from "@/sections/AgendaSection";
import { StatsSection } from "@/sections/StatsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";

// Heavy sections with framer-motion parallax/animations — lazy loaded
const AboutSection = dynamic(() => import("@/sections/AboutSection").then(m => ({ default: m.AboutSection })), { ssr: true });
const EventsSection = dynamic(() => import("@/sections/EventsSection").then(m => ({ default: m.EventsSection })), { ssr: true });
const VenueSection = dynamic(() => import("@/sections/VenueSection").then(m => ({ default: m.VenueSection })), { ssr: true });
const SponsorsSection = dynamic(() => import("@/sections/SponsorsSection").then(m => ({ default: m.SponsorsSection })), { ssr: true });
const SpeakersSection = dynamic(() => import("@/sections/SpeakersSection").then(m => ({ default: m.SpeakersSection })), { ssr: true });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <EventsSection />
        <AgendaSection />
        <VenueSection />
        <StatsSection />
        <SponsorsSection />
        <SpeakersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
