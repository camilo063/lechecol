import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data/products';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ProductsGrid() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32 relative overflow-hidden">
      {/* Background number watermark */}
      <div className="absolute right-0 top-0 font-serif text-[20rem] leading-none text-[#0066B3]/[0.03] select-none pointer-events-none" aria-hidden="true">
        4
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header — left-aligned with accent */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#F5A800]" />
            <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Portafolio</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#003D7A] leading-tight mb-4">
            Nuestros Productos
          </h2>
          <p className="text-[#636E72] text-lg max-w-xl leading-relaxed">
            Desde porciones individuales de 27g hasta bultos de 25kg — para retail, HORECA, PAE e industria.
          </p>
        </AnimatedSection>

        {/* Products grid — 2 + 2 with featured first */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <AnimatedSection key={product.slug} delay={i * 0.1}>
              <Link
                href={`/productos/${product.slug}`}
                className="group relative flex flex-col md:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0066B3]/20"
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: product.color }}
                  aria-hidden="true"
                />

                {/* Product image */}
                <div
                  className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: product.color + '10' }}
                >
                  <Image
                    src={product.image}
                    alt={`${product.brand} — ${product.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-white text-xs font-bold uppercase tracking-wide"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.brand}
                    </span>
                  </div>
                  <h3 className="font-serif text-[#003D7A] text-xl mb-2 leading-tight">{product.name}</h3>
                  <p className="text-[#636E72] text-sm leading-relaxed mb-4 flex-1">{product.shortDescription}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {product.segments.slice(0, 3).map((seg) => (
                        <span key={seg} className="px-2 py-0.5 bg-[#F7F8FA] text-[#636E72] text-xs rounded-full border border-gray-200">
                          {seg}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[#0066B3] font-semibold text-sm group-hover:gap-2 transition-all whitespace-nowrap ml-3">
                      Ver más
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-10 text-center" delay={0.4}>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-[#0066B3] font-semibold hover:text-[#003D7A] transition-colors group"
          >
            Ver catálogo completo con fichas técnicas
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
