'use client';

import type { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, products } from '@/lib/data/products';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';

/* ── Benefit icons ── */
const BenefitIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, ReactElement> = {
    protein: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    calcium: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    vitamins: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    taste: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    light: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    versatile: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    nutrients: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
    value: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <span className="text-lechecol-blue">
      {icons[icon] ?? icons['protein']}
    </span>
  );
};

/* ── Main component ── */
type Props = { product: Product };

export default function ProductDetailPage({ product }: Props) {
  const relatedProducts = products.filter((p) => p.slug !== product.slug);

  const whatsappUrl = `https://wa.me/573143569431?text=Hola%2C%20me%20interesa%20cotizar%20${encodeURIComponent(
    product.name + ' ' + product.brand
  )}%20de%20Lechecol%20ZF`;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1220] pt-28 pb-0 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          aria-hidden="true"
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
          aria-hidden="true"
        />
        {/* Ambient glow with product color */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ backgroundColor: product.color }}
          aria-hidden="true"
        />
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F5A800] to-transparent pointer-events-none" aria-hidden="true" />
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <AnimatedSection className="mb-8">
            <nav className="flex items-center gap-2 text-xs text-white/35 font-mono flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
              <span className="text-white/15" aria-hidden="true">/</span>
              <Link href="/productos" className="hover:text-white/60 transition-colors">Productos</Link>
              <span className="text-white/15" aria-hidden="true">/</span>
              <span className="text-white/60">{product.name}</span>
            </nav>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16">
            {/* Left: text */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#F5A800]" />
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                  style={{ color: product.color, backgroundColor: `${product.color}20` }}
                >
                  {product.brand}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,3.5rem)] font-serif text-white leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
                {product.shortDescription}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-green-400 text-white font-semibold uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20 text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar Este Producto
              </a>
            </AnimatedSection>

            {/* Right: image */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative h-72 md:h-96 lg:h-[420px]">
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.brand}`}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-body text-lg leading-relaxed">{product.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <SectionTitle title="Beneficios Clave" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {product.benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-lechecol-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <BenefitIcon icon={benefit.icon} />
                  </div>
                  <h3 className="text-lechecol-navy font-serif text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Presentaciones Disponibles"
            subtitle="Formatos pensados para cada canal y volumen de compra."
          />
          <AnimatedSection className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <table className="w-full min-w-[540px] text-sm font-sans">
              <thead>
                <tr className="bg-lechecol-navy text-white">
                  <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider text-xs">Presentación</th>
                  <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider text-xs">Contenido</th>
                  <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider text-xs">Embalaje</th>
                  <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider text-xs">Código de barras</th>
                </tr>
              </thead>
              <tbody>
                {product.presentations.map((p, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}
                  >
                    <td className="px-6 py-4 text-body font-medium">{p.format}</td>
                    <td className="px-6 py-4 text-body">{p.weight}</td>
                    <td className="px-6 py-4 text-body">{p.packaging}</td>
                    <td className="px-6 py-4 text-muted font-mono text-xs">{p.barcode || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </div>
      </section>

      {/* Segments */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="Ideal Para" />
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {product.segments.map((segment) => (
                <span
                  key={segment}
                  className="px-5 py-2.5 rounded-full font-sans font-semibold text-sm text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {segment}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Otros Productos"
            subtitle="Explore el resto de nuestro portafolio lácteo."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedProducts.map((related, i) => (
              <AnimatedSection key={related.slug} delay={i * 0.1}>
                <Link
                  href={`/productos/${related.slug}`}
                  className="group flex flex-col bg-surface rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 h-full"
                >
                  <div className="relative h-44 overflow-hidden bg-white">
                    <Image
                      src={related.image}
                      alt={`${related.name} ${related.brand}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ backgroundColor: related.color }}
                    >
                      {related.brand}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lechecol-navy font-serif text-base mb-2 leading-snug">{related.name}</h3>
                    <p className="text-muted text-xs leading-relaxed flex-1 mb-3">{related.shortDescription}</p>
                    <span className="text-lechecol-blue font-sans font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                      Ver producto
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA Banner */}
      <section className="bg-lechecol-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              ¿Necesita una cotización?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Háblenos por WhatsApp y nuestro equipo comercial le responde de inmediato.
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
              Cotizar por WhatsApp
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
