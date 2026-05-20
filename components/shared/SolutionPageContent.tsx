import Link from 'next/link';
import type { Solution } from '@/lib/data/solutions';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import AnimatedSection from './AnimatedSection';
import PageHero from './PageHero';

type Props = {
  solution: Solution;
};

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SolutionPageContent({ solution }: Props) {
  const messageKey = solution.whatsappKey as keyof typeof WHATSAPP_MESSAGES;
  const message = WHATSAPP_MESSAGES[messageKey] ?? WHATSAPP_MESSAGES.general;
  const whatsappHref = `${CONTACT.whatsappUrl}?text=${message}`;

  return (
    <>
      <PageHero
        eyebrow="Solución B2B"
        title={solution.title}
        subtitle={solution.shortDescription}
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Soluciones', href: '/soluciones' },
          { label: solution.title },
        ]}
      />

      {/* Description + Includes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left — Description */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Descripción</span>
              </div>
              <h2 className="font-serif text-[#003D7A] text-3xl md:text-4xl leading-tight mb-6">¿Qué ofrecemos?</h2>
              <p className="text-[#636E72] text-lg leading-relaxed mb-10">{solution.description}</p>

              {/* Ideal para */}
              <div>
                <div className="text-[#003D7A] font-semibold text-sm uppercase tracking-wider mb-4">Ideal para</div>
                <div className="flex flex-wrap gap-2">
                  {solution.idealFor.map((segment) => (
                    <span
                      key={segment}
                      className="px-4 py-2 rounded-full text-sm font-medium border border-[#0066B3]/20 text-[#0066B3] bg-[#0066B3]/5 hover:bg-[#0066B3]/10 transition-colors"
                    >
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Includes */}
            <AnimatedSection className="lg:col-span-2" direction="right" delay={0.1}>
              <div className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100 sticky top-28">
                <h3 className="font-serif text-[#003D7A] text-2xl mb-6">¿Qué incluye?</h3>
                <ul className="space-y-4 mb-8">
                  {solution.includes.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066B3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-[#636E72] text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold uppercase tracking-wider text-sm hover:bg-green-400 transition-colors shadow-lg shadow-green-500/20"
                >
                  {WA_ICON}
                  Solicitar Cotización
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="relative bg-[#0B1220] py-20 overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A800]/40 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-[#0066B3]/10 blur-[80px]" />
        </div>
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Siguiente Paso</span>
              <div className="h-px w-8 bg-[#F5A800]" />
            </div>
            <h2 className="font-serif text-white text-3xl md:text-4xl mb-4">¿Listo para comenzar?</h2>
            <p className="text-white/50 mb-10 max-w-md mx-auto">
              Hablemos por WhatsApp y le respondemos en menos de 24 horas con una propuesta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold uppercase tracking-wider text-sm hover:bg-green-400 transition-colors shadow-lg shadow-green-500/25"
              >
                {WA_ICON}
                Cotizar por WhatsApp
              </a>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/70 font-medium text-sm hover:bg-white/5 hover:text-white hover:border-white/30 transition-all"
              >
                Ver Todas las Soluciones
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
