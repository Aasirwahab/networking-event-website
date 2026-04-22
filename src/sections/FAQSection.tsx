'use client';

import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-slate-100">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-7 text-left group"
        >
          <span className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-primary transition-colors pr-8">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
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
              <p className="text-text-secondary text-base leading-relaxed pb-7 max-w-3xl">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollReveal>
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 text-slate-900 leading-[1.1]">
            Everything You{' '}<br />
            <span className="text-primary italic">Need to Know.</span>
          </h2>
        </ScrollReveal>

        <div>
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
    </section>
  );
}
