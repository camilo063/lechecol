import type { Metadata } from 'next';
import Link from 'next/link';
import { timeline } from '@/lib/data/timeline';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import PageHero from '@/components/shared/PageHero';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Lechecol ZF — 22 Años Produciendo Calidad Láctea',
  description:
    'Empresa familiar colombiana especializada en producción de leche en polvo. Planta propia en Zona Franca Tocancipá con línea de pulverización. Historia, misión y valores.',
};

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Origen Controlado',
    text: 'Recogemos leche cruda directamente de productores locales. Controlamos calidad desde la finca hasta el empaque.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Capacidad Industrial',
    text: 'Planta en Zona Franca Tocancipá con mezcladoras industriales, empacadoras de alta capacidad y línea de pulverización propia.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Flexibilidad Operativa',
    text: 'Desde porciones individuales de 27g hasta bultos de 25kg. Formulaciones estándar o personalizadas. Su marca o la nuestra.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Compromiso Social',
    text: 'Impulsamos el desarrollo económico de pequeños ganaderos. Colaboramos con Prodensa, Traspasando Fronteras y el Banco de Alimentos.',
  },
];

export default function NosotrosPage() {
  const whatsappHref = `${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.general}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lechecol ZF S.A.S.',
    foundingDate: '2003',
    founders: [
      { '@type': 'Person', name: 'Juan Camacho' },
      { '@type': 'Person', name: 'Claudia López' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tocancipá',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO',
    },
    description: 'Empresa familiar colombiana especializada en producción, maquila y comercialización de leche en polvo y mezclas lácteas.',
  };

  return (
    <>
      <JsonLd data={orgSchema} />

      <PageHero
        eyebrow="Desde 2003"
        title="Transformando Leche Colombiana en Calidad de Exportación"
        subtitle="22 años de experiencia, planta propia en Zona Franca Tocancipá y línea de pulverización de última generación."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Nosotros' },
        ]}
      />

      {/* Quiénes Somos */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-lechecol-orange font-semibold text-sm uppercase tracking-widest mb-4 block">Nuestra Empresa</span>
              <h2 className="font-serif text-3xl md:text-4xl text-lechecol-navy leading-tight mb-6">
                Quiénes Somos
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Lechecol ZF S.A.S. es una empresa familiar colombiana especializada en la producción, maquila y comercialización de leche en polvo y mezclas lácteas. Con más de 22 años de trayectoria, operamos desde nuestra planta en la Zona Franca de Tocancipá, equipada con tecnología de pulverización de última generación.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Nuestra propuesta es directa: ofrecemos leche en polvo de la más alta calidad a precio justo, con la flexibilidad y atención personalizada que solo una empresa familiar puede dar, respaldada por la capacidad productiva de una operación industrial moderna.
              </p>
              <p className="text-muted leading-relaxed">
                Trabajamos directamente con pequeños productores lecheros de Cundinamarca, transformando leche cruda en productos terminados bajo procesos controlados, trazables y sostenibles.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="rounded-2xl overflow-hidden bg-surface p-8">
                {/* TODO: Reemplazar con foto real del equipo o planta */}
                <div className="aspect-square bg-gradient-to-br from-lechecol-blue/20 to-lechecol-navy/30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-lechecol-navy text-7xl font-bold">22</div>
                    <div className="text-lechecol-blue font-semibold text-xl mt-2">Años de Experiencia</div>
                    <div className="text-muted text-sm mt-1">2003 — 2025</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="Nuestros Pilares" subtitle="Los valores que guían cada decisión en Lechecol." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-xl bg-lechecol-blue/10 text-lechecol-blue flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-lechecol-navy text-xl mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="Nuestra Historia" subtitle="22 años de crecimiento, innovación y compromiso con Colombia." />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-lechecol-blue/20 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.08}>
                  <div className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className={`bg-surface rounded-2xl p-6 shadow-sm ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-lechecol-orange text-white text-sm font-bold mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-lechecol-navy text-xl mb-2">{item.title}</h3>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-lechecol-blue border-4 border-white shadow-md hidden md:block" />
                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-lechecol-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="Misión & Visión" light />
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 h-full">
                <div className="w-12 h-12 rounded-full bg-lechecol-orange flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
                <h3 className="font-serif text-white text-2xl mb-4">Misión</h3>
                <p className="text-white/70 leading-relaxed">
                  Aportar al mercado productos lácteos de la mejor calidad a precio justo, contribuyendo a un futuro sostenible y siendo socialmente responsables con las comunidades que nos rodean.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 h-full">
                <div className="w-12 h-12 rounded-full bg-lechecol-blue flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-white text-2xl mb-4">Visión</h3>
                <p className="text-white/70 leading-relaxed">
                  Ser reconocidos en Colombia y Latinoamérica como el socio estratégico de referencia en leche en polvo y maquila láctea, por la calidad consistente de nuestros productos, la confiabilidad de nuestro servicio y nuestro compromiso con el desarrollo del campo colombiano.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RSE Link */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-lechecol-navy mb-4">Compromiso con la Comunidad</h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Nuestra responsabilidad social es parte de cómo operamos cada día. Conozca nuestros programas con Prodensa, Traspasando Fronteras y el Banco de Alimentos.
            </p>
            <Link
              href="/nosotros/responsabilidad-social"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lechecol-blue text-white font-semibold hover:bg-lechecol-navy transition-colors"
            >
              Ver Responsabilidad Social
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-lechecol-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white text-3xl md:text-4xl mb-4">¿Listo para ser parte de nuestra historia?</h2>
            <p className="text-white/70 mb-8">Hablemos sobre cómo Lechecol puede ser su socio lácteo estratégico.</p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp text-white font-semibold uppercase tracking-wider hover:bg-green-500 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
