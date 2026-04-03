import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import TransitionTemplate, { Heading, SubHeading } from "@/components/TransitionTemplate";
import { AboutSection } from "@/sections/AboutSection";

export const metadata: Metadata = {
  title: 'About Us | Actos - Global Networking Event',
  description: 'Learn more about Actos, the leading networking event connecting professionals worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <TransitionTemplate>
        <Heading className="text-6xl md:text-8xl font-bold">
          About Us.
        </Heading>
        <SubHeading className="text-xl text-slate-400 max-w-2xl mx-auto">
          Discover the story behind Actos and our mission to unite professionals globally through unparalleled event experiences.
        </SubHeading>
      </TransitionTemplate>
      <AboutSection />
      <Footer />
    </div>
  );
}
