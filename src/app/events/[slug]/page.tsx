import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, MapPin, Clock, Check, Users } from 'lucide-react';
import { events } from '@/data/content';

type Params = { slug: string };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: 'Event Not Found' };
  return {
    title: `${event.title} | Networx London`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: event.image ? [event.image] : undefined,
    },
  };
}

export default async function EventDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const others = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            All events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-primary rounded-full text-[10px] font-bold uppercase text-white tracking-widest">
              {event.category}
            </span>
            <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-bold uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              {event.date}
            </div>
            <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-bold uppercase tracking-widest">
              <MapPin className="w-3 h-3" />
              {event.location}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-4xl">
            {event.title}
          </h1>

          {event.description && (
            <p className="mt-6 text-white/70 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              {event.description}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24">
          <div className="space-y-16 max-w-2xl">
            {event.longDescription && (
              <div>
                <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-5 underline underline-offset-8">
                  About the event
                </span>
                <p className="text-text-secondary text-lg lg:text-xl font-light leading-relaxed">
                  {event.longDescription}
                </p>
              </div>
            )}

            {event.highlights && event.highlights.length > 0 && (
              <div>
                <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-5 underline underline-offset-8">
                  What to expect
                </span>
                <ul className="space-y-4">
                  {event.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.whoFor && event.whoFor.length > 0 && (
              <div>
                <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-5 underline underline-offset-8">
                  Who it&apos;s for
                </span>
                <ul className="space-y-3">
                  {event.whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[340px] lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8">
              <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-5 underline underline-offset-8">
                Evening flow
              </span>
              {event.schedule && event.schedule.length > 0 ? (
                <ul className="space-y-5 mb-8">
                  {event.schedule.map((row) => (
                    <li key={row.time} className="flex items-start gap-4">
                      <span className="text-slate-900 text-sm font-semibold tabular-nums w-20 flex-shrink-0">
                        {row.time}
                      </span>
                      <span className="text-text-secondary text-sm font-light leading-relaxed">
                        {row.label}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-text-secondary text-sm font-light leading-relaxed mb-8">
                  Schedule will be shared with attendees after registration.
                </p>
              )}

              <Link
                href="/contact"
                className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)]"
              >
                Request a seat
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <p className="text-text-muted text-[11px] font-light leading-relaxed mt-4 text-center">
                Seats are reviewed individually. We&apos;ll reply within 48 hours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other events */}
      {others.length > 0 && (
        <section className="py-20 lg:py-28 bg-bg-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
                Other <span className="text-primary italic">gatherings</span>
              </h2>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-slate-900 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/events/${other.slug}`}
                  className="group block rounded-3xl bg-white border border-slate-100 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                  {other.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3 block">
                      {other.category}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight mb-2">
                      {other.title}
                    </h3>
                    <p className="text-text-secondary text-sm font-light leading-relaxed line-clamp-2">
                      {other.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
