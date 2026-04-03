import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Contact Us | Actos',
  description: 'Get in touch with the Actos team for support, partnerships, and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Us" 
          description="Have questions? Our team is here to help you with ticketing, sponsorship opportunities, or any event inquiries."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Contact form and information coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
