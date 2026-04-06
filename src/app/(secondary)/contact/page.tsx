import { Metadata } from 'next';
import { ContactForm } from "@/sections/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us',
    description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main>
        <ContactForm />
      </main>
    </div>
  );
}
