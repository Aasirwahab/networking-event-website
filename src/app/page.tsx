import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { EventsSection } from "@/sections/EventsSection";
import { StatsSection } from "@/sections/StatsSection";
import { SponsorsSection } from "@/sections/SponsorsSection";
import { SpeakersSection } from "@/sections/SpeakersSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
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
