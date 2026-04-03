import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'FAQ | Actos',
  description: 'Frequently asked questions about Actos networking events.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Frequently Asked Questions" 
          description="Find answers to common questions about ticketing, venue details, schedules, and more."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">FAQ content is coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
