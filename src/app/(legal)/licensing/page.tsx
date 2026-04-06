import { Metadata } from 'next';
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Licensing',
  description: 'Information regarding licensing, copyrights, and intellectual property for Networx London content.',
  openGraph: {
    title: 'Licensing',
    description: 'Information regarding licensing, copyrights, and intellectual property for Networx London content.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Licensing',
    description: 'Information regarding licensing, copyrights, and intellectual property for Networx London content.',
  },
};

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PageHeader 
          title="Licensing" 
          description="A comprehensive guide to the licensing terms and copyright policies covering Networx London resources and content."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Licensing information coming soon.</p>
        </section>
      </main>
    </div>
  );
}
