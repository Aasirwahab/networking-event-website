import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { ContactForm } from "@/sections/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us | Networx London',
  description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
