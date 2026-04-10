'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please select your interest'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be under 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfoItems = [
  { icon: MapPin, label: 'Headquarters', value: 'London SW15 3SR, United Kingdom' },
  { icon: Mail, label: 'Email', value: 'hello@networxlondon.com' },
  { icon: Phone, label: 'Phone', value: '+44 20 7946 0958' },
  { icon: Clock, label: 'Office Hours', value: 'Mon\u2013Fri, 08:00 \u2013 18:00 GMT' },
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeout on unmount to prevent setState on unmounted component
  useEffect(() => {
    return () => {
      if (statusTimerRef.current !== null) clearTimeout(statusTimerRef.current);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      reset();
      statusTimerRef.current = setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      statusTimerRef.current = setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputClasses = (fieldName: keyof ContactFormData) =>
    `w-full bg-white/[0.03] border rounded-2xl py-4 px-6 text-white text-sm focus:outline-none transition-colors ${
      errors[fieldName]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-white/10 focus:border-primary'
    }`;

  return (
    <section className="flex items-center py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <ScrollReveal>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
              LET&apos;S <br />
              <span className="text-white/20">CONNECT.</span>
            </h1>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-16 max-w-md">
              Whether you want to attend an event, partner with us, or just learn more — we&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              {contactInfoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 md:p-14 space-y-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Alexander"
                  aria-required="true"
                  {...{ 'aria-invalid': errors.firstName ? 'true' : 'false' }}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  className={inputClasses('firstName')}
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-red-400 text-xs ml-2" role="alert">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Sterling"
                  aria-required="true"
                  {...{ 'aria-invalid': errors.lastName ? 'true' : 'false' }}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  className={inputClasses('lastName')}
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-red-400 text-xs ml-2" role="alert">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="alex@example.com"
                aria-required="true"
                {...{ 'aria-invalid': errors.email ? 'true' : 'false' }}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClasses('email')}
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs ml-2" role="alert">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Interest</label>
              <select
                id="interest"
                aria-required="true"
                {...{ 'aria-invalid': errors.interest ? 'true' : 'false' }}
                aria-describedby={errors.interest ? 'interest-error' : undefined}
                className={`${inputClasses('interest')} ${!errors.interest ? 'text-white/50' : ''} appearance-none`}
                {...register('interest')}
              >
                <option value="">Select your interest</option>
                <option value="attend">Attend an Event</option>
                <option value="partner">Partnership Inquiry</option>
                <option value="membership">Membership Info</option>
                <option value="other">Other</option>
              </select>
              {errors.interest && (
                <p id="interest-error" className="text-red-400 text-xs ml-2" role="alert">{errors.interest.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about yourself..."
                aria-required="true"
                {...{ 'aria-invalid': errors.message ? 'true' : 'false' }}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${inputClasses('message')} resize-none`}
                {...register('message')}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-xs ml-2" role="alert">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading' || submitStatus === 'success'}
              className="w-full group bg-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white hover:text-primary text-white disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white"
            >
              {submitStatus === 'loading' && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              )}
              {submitStatus === 'success' && (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </>
              )}
              {submitStatus === 'error' && (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Failed — Try Again
                </>
              )}
              {submitStatus === 'idle' && (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
