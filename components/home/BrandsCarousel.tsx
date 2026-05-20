import AnimatedSection from '@/components/shared/AnimatedSection';
import Link from 'next/link';

const brandNames = [
  { name: 'Makro / Aro', category: 'Grandes Superficies' },
  { name: 'Alkosto', category: 'Grandes Superficies' },
  { name: 'Coopratiendas', category: 'Cooperativas' },
  { name: 'Supermercados Unidos', category: 'Cadenas Regionales' },
  { name: 'MUA', category: 'Hard Discount' },
  { name: 'Zapatoca', category: 'Cadenas Regionales' },
  { name: 'Mercacentro', category: 'Distribución' },
  { name: 'Supercundi', category: 'Cooperativas' },
];

const doubled = [...brandNames, ...brandNames];

export default function BrandsCarousel() {
  return (
    <section className="bg-[#0B1220] py-24 md:py-28 relative overflow-hidden">
      {/* Top diagonal edge */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }} aria-hidden="true" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-14 pt-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-[#F5A800]" />
                <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Prueba Social</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Producimos para las marcas<br />
                <span className="text-[#F5A800]">que Colombia conoce</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="font-serif text-6xl text-white/10 leading-none font-bold">20+</div>
              <div className="text-white/40 text-sm font-mono uppercase tracking-widest">Marcas maquiladas</div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scrolling brand strip */}
      <div className="relative overflow-hidden py-4">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1220] to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1220] to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div className="flex animate-scroll-left gap-4 w-max">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 bg-white/5 border border-white/8 rounded-xl px-7 py-4 flex flex-col gap-1 hover:bg-white/10 hover:border-[#F5A800]/30 transition-all duration-200"
            >
              {/* TODO: Reemplazar con imagen real del empaque */}
              <span className="text-white font-semibold text-sm whitespace-nowrap">{brand.name}</span>
              <span className="text-white/35 text-xs font-mono uppercase tracking-wide">{brand.category}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-12 flex items-center justify-between">
        <p className="text-white/30 text-sm font-mono">
          Makro · Alkosto · Coopratiendas · MUA · Zapatoca · Mercacentro · Supercundi · y más
        </p>
        <Link
          href="/soluciones/maquila-marca-propia"
          className="text-[#F5A800] text-sm font-semibold hover:text-white transition-colors flex items-center gap-1 group whitespace-nowrap"
        >
          Maquile con nosotros
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
