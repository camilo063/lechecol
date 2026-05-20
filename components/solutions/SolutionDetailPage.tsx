'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { Solution } from '@/lib/data/solutions';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';

/* ── Solution icons ── */
const SolutionIcon = ({ icon, className = '' }: { icon: string; className?: string }) => {
  const icons: Record<string, ReactElement> = {
    factory: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    building: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    flask: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01.45 1.318 2.251 2.251 0 01-2.25 2.25H5.55a2.251 2.251 0 01-1.8-3.568l1.304-1.305M5 14.5l1.304-1.305M14.25 3.104L5.55 14.5M5 14.5h14" />
      </svg>
    ),
    package: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    truck: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  };

  return icons[icon] ?? icons['factory'];
};

/* ── Main component ── */
type Props = { solution: Solution };

export default function SolutionDetailPage({ solution }: Props) {
  const message = WHATSAPP_MESSAGES[solution.whatsappKey as keyof typeof WHATSAPP_MESSAGES];
  const whatsappUrl = `https://wa.me/573143569431?text=${message}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-lechecol-navy pt-16 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lechecol-orange blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-lechecol-blue blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <AnimatedSection className="mb-10">
            <nav className="flex items-center gap-2 text-sm text-white/50 font-sans flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/soluciones" className="hover:text-white transition-colors">Soluciones</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">{solution.title}</span>
            </nav>
          </AnimatedSection>

          <div className="max-w-3xl">
            <AnimatedSection direction="left">
              {/* Accent bar */}
              <div className="w-12 h-1.5 bg-lechecol-orange rounded-full mb-6" aria-hidden="true" />

              {/* Icon */}
              <div className="w-16 h-16 bg-lechecol-blue/30 rounded-2xl flex items-center justify-center mb-6">
                <SolutionIcon icon={solution.icon} className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4">
                {solution.title}
              </h1>
              <p className="text-lechecol-orange font-sans font-semibold text-lg mb-6">
                {solution.shortDescription}
              </p>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp hover:bg-green-500 text-white font-sans font-semibold uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto">
            <p className="text-body text-lg leading-relaxed">{solution.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Qué incluye" centered={false} />
            <div className="space-y-4">
              {solution.includes.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-body text-base leading-relaxed">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal para */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="Ideal Para" />
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {solution.idealFor.map((segment) => (
                <span
                  key={segment}
                  className="px-5 py-2.5 rounded-full font-sans font-semibold text-sm bg-lechecol-navy text-white"
                >
                  {segment}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lechecol-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              ¿Le interesa esta solución?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Escríbanos por WhatsApp y le preparamos una propuesta personalizada.
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp hover:bg-green-500 text-white font-sans font-semibold uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablar por WhatsApp
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
