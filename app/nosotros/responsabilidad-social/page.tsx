import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Responsabilidad Social | Lechecol ZF',
  description:
    'Lechecol ZF trabaja con Prodensa, Fundación Traspasando Fronteras y el Banco de Alimentos. Compromiso real con el campo colombiano y las comunidades vulnerables.',
};

const initiatives = [
  {
    title: 'Gestión Ambiental — Prodensa',
    icon: '🌱',
    color: 'bg-green-50 border-green-200',
    titleColor: 'text-green-800',
    description:
      'Colaboramos con Prodensa para la gestión responsable de residuos y empaques post-industriales. Nuestras prácticas incluyen uso eficiente de agua, luz y vapor en planta, entrega de empaques para correcta disposición, y siembra de árboles en el Cerro Majuy como parte de nuestro plan de reforestación.',
    points: [
      'Gestión de residuos de empaques con Prodensa',
      'Uso eficiente de agua, luz y vapor en operaciones',
      'Siembra de árboles en Cerro Majuy',
      'Reducción progresiva de huella ambiental',
    ],
  },
  {
    title: 'Apoyo Social — Traspasando Fronteras',
    icon: '🤝',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
    description:
      'Trabajamos con la Fundación Traspasando Fronteras implementando programas dirigidos a comunidades vulnerables, impulsando proyectos que mejoran la calidad de vida de quienes más lo necesitan.',
    points: [
      'Apoyo a comunidades en situación de vulnerabilidad',
      'Programas de mejoramiento de calidad de vida',
      'Alianza sostenida con la Fundación Traspasando Fronteras',
    ],
  },
  {
    title: 'Seguridad Alimentaria — Banco de Alimentos',
    icon: '🍼',
    color: 'bg-orange-50 border-orange-200',
    titleColor: 'text-orange-800',
    description:
      'Realizamos donaciones regulares de productos lácteos al Banco de Alimentos, contribuyendo directamente a la nutrición de familias en situación de vulnerabilidad.',
    points: [
      'Donaciones regulares de leche en polvo',
      'Apoyo a la nutrición infantil',
      'Contribución a la seguridad alimentaria nacional',
    ],
  },
  {
    title: 'Pequeños Productores Lecheros',
    icon: '🐄',
    color: 'bg-yellow-50 border-yellow-200',
    titleColor: 'text-yellow-800',
    description:
      'Compramos leche cruda directamente a pequeños ganaderos de Cundinamarca, ofreciendo precios justos, relaciones comerciales estables y apoyo para mejorar sus prácticas productivas.',
    points: [
      'Compra directa a pequeños ganaderos de Cundinamarca',
      'Precios justos y relaciones comerciales estables',
      'Apoyo para mejorar prácticas productivas',
      'Trazabilidad completa desde la finca',
    ],
  },
];

export default function ResponsabilidadSocialPage() {
  const whatsappHref = `${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.general}`;

  return (
    <>
      <PageHero
        eyebrow="Responsabilidad Social"
        title="Compromiso Real con el Campo y la Comunidad"
        subtitle="En Lechecol, la responsabilidad social no es un discurso — es parte de cómo operamos cada día."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Nosotros', href: '/nosotros' },
          { label: 'Responsabilidad Social' },
        ]}
        accentColor="#25D366"
      />

      {/* Initiatives */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Nuestras Iniciativas"
            subtitle="Trabajamos con pequeños productores, gestionamos responsablemente nuestros residuos y apoyamos activamente a comunidades vulnerables."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, i) => (
              <AnimatedSection key={initiative.title} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 border-2 ${initiative.color} h-full`}>
                  <div className="text-4xl mb-4">{initiative.icon}</div>
                  <h3 className={`font-serif text-2xl mb-4 ${initiative.titleColor}`}>{initiative.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{initiative.description}</p>
                  <ul className="space-y-2">
                    {initiative.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2', label: 'Fundaciones aliadas' },
              { value: '22+', label: 'Años de compromiso social' },
              { value: 'Cundinamarca', label: 'Productores locales' },
              { value: '100%', label: 'Trazabilidad de origen' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-lechecol-blue mb-2">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lechecol-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white text-3xl mb-4">Empresa con propósito</h2>
            <p className="text-white/70 mb-8">
              Al elegir Lechecol como socio, contribuye al desarrollo del campo colombiano y a comunidades vulnerables.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp text-white font-semibold hover:bg-green-500 transition-colors"
              >
                Contáctenos
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Ver Nuestra Historia
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
