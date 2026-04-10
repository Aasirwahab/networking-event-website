import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { ChangelogSection } from "@/sections/ChangelogSection";

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Track the latest updates and improvements to the Networx London platform and events.',
  openGraph: {
    title: 'Changelog',
    description: 'Track the latest updates and improvements to the Networx London platform and events.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog',
    description: 'Track the latest updates and improvements to the Networx London platform and events.',
  },
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/london/3.png"
        title={<>CHANGE<br /><span className="text-primary italic font-light">LOG.</span></>}
        subtitle="Stay informed about the newest features, enhancements, and updates to the Networx London platform."
      />
      <main>
        <ChangelogSection />
      </main>
    </div>
  );
}
