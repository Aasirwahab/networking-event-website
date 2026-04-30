'use client';

import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'What is Networx London?',
    answer: 'Networx London is a premium networking community for professionals, founders, CEOs, and investors in London. We host curated events designed to foster genuine, meaningful connections in a relaxed and welcoming environment.',
  },
  {
    question: 'Who typically attends your events?',
    answer: 'Our events attract a diverse mix of startup founders, C-suite executives, investors, creative professionals, and industry leaders from across London. Everyone who attends shares a commitment to building authentic professional relationships.',
  },
  {
    question: 'Where are the events held?',
    answer: 'We host events at carefully selected venues across London, including premium locations in Mayfair, The Shard, and other iconic spots. Each venue is chosen to create the right atmosphere for productive networking.',
  },
  {
    question: 'How much does it cost to attend?',
    answer: 'Single event access starts at £25. We also offer monthly memberships at £20/month and annual passes at £180/year for the best value. Visit our Events page for full pricing details and current availability.',
  },
  {
    question: 'What should I expect at an event?',
    answer: 'Each event follows a structured but relaxed flow: arrival and welcome drinks, strategic networking, guided roundtable discussions, partnership-building time, and a closing with next steps. The entire experience is designed to be enjoyable, not transactional.',
  },
  {
    question: 'Is there a dress code?',
    answer: 'We recommend smart casual to business casual attire. Our events are professional but relaxed — we want you to feel comfortable while making a great impression.',
  },
  {
    question: 'How can I become a speaker or partner?',
    answer: 'We\'re always looking for inspiring speakers and strategic partners. Reach out through our Contact page with details about your expertise and how you\'d like to contribute to the Networx London community.',
  },
  {
    question: 'Can I bring a guest?',
    answer: 'Yes! We encourage you to bring colleagues or friends who would benefit from our community. Each guest will need their own ticket, which can be purchased on our Events page.',
  },
];

const FAQItem = memo(function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.04}>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.55)',
          borderColor: isOpen ? 'rgba(37,99,235,0.25)' : 'rgba(241,245,249,1)',
        }}
        className={`rounded-2xl border ${isOpen ? 'shadow-xl shadow-primary/5' : 'shadow-sm shadow-slate-200/50'} transition-shadow duration-300 overflow-hidden`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left group"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <span className={`flex-shrink-0 text-xs font-bold tracking-widest tabular-nums ${isOpen ? 'text-primary' : 'text-text-muted'} transition-colors`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`text-base md:text-lg font-medium ${isOpen ? 'text-primary' : 'text-slate-900 group-hover:text-primary'} transition-colors pr-4`}>
              {question}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? 'rgb(37,99,235)' : 'rgb(248,250,252)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
          >
            <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-text-muted'} transition-colors`} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 pl-[60px] md:pl-[72px]">
                <div className="border-l-2 border-primary/30 pl-5">
                  <p className="text-text-secondary text-base leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
});

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden bg-bg-gray scroll-mt-24 content-auto">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-100/30 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky side panel */}
          <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-8 lg:-mt-4">
            <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-slate-900 leading-[1.05]">
              Everything You{' '}<br />
              <span className="text-primary italic">Need to Know.</span>
            </h2>
            <p className="text-text-secondary text-base font-light leading-relaxed mb-8 max-w-sm">
              Quick answers to the most common questions about our events, membership, and community.
            </p>

            {/* Help card */}
            <div className="hidden lg:block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-200/50">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircleQuestion className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-slate-900 font-semibold text-base mb-1.5">Still have questions?</h4>
              <p className="text-text-secondary text-sm font-light leading-relaxed mb-4">
                Our team usually replies within a few hours.
              </p>
              <a
                href="mailto:hello@networxlondon.com"
                className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.15em] hover:gap-3 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact us
              </a>
            </div>
          </ScrollReveal>

          {/* FAQ items */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
