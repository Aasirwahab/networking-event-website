import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
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
      <SubPageHero
        backgroundImage="/images/hero-bg.jpg"
        title={<>GET IN <br /><span className="text-primary italic font-light">TOUCH.</span></>}
        subtitle="Whether you want to attend an event, partner with us, or just learn more — we'd love to hear from you."
      />
      <main>
        <ContactForm />
      </main>
    </div>
  );
}
