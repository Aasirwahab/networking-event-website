import { Metadata } from 'next';
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'FAQ | Networx London - Networking Events',
  description: 'Frequently asked questions about Networx London networking events.',
  openGraph: {
    title: 'FAQ | Networx London',
    description: 'Frequently asked questions about Networx London networking events.',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Networx London',
    description: 'Frequently asked questions about Networx London networking events.',
  }
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PageHeader 
          title="Frequently Asked Questions" 
          description="Find answers to common questions about ticketing, venue details, schedules, and more."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">FAQ content is coming soon.</p>
        </section>
      </main>
    </div>
  );
}
