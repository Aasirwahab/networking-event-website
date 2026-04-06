import { Metadata } from 'next';
import { PageHeader } from "@/components/PageHeader";

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
    <div className="min-h-screen bg-white">
      <main>
        <PageHeader 
          title="Changelog" 
          description="Stay informed about the newest features, enhancements, and organizational updates for Networx London."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Changelog content will be updated soon.</p>
        </section>
      </main>
    </div>
  );
}
