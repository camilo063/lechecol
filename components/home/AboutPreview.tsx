import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

const milestones = [
  { year: '2003', label: 'Fundación', desc: 'Bogotá norte' },
  { year: '2017', label: 'Zona Franca', desc: 'Tocancipá' },
  { year: '2025', label: 'Pulverización', desc: 'Propia' },
];

const pillars = [
  { value: '+22', label: 'Años' },
  { value: '+20', label: 'Marcas' },
  { value: 'ZF', label: 'Planta' },
  { value: '100%', label: 'Nacional' },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left visual block */}
          <AnimatedSection className="lg:col-span-5" direction="left">
            <div className="relative">
              {/* Main dark card */}
              <div className="relative bg-[#0B1220] rounded-2xl overflow-hidden aspect-[3/4] max-w-sm">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                  aria-hidden="true"
                />
                {/* Glow */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0066B3]/20 to-transparent" aria-hidden="true" />

                {/* TODO: Reemplazar con foto real de la planta */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="font-serif text-[5rem] leading-none text-white/10 select-none mb-2">ZF</div>
                  <div className="text-[#F5A800] font-mono text-xs tracking-[0.2em] uppercase mb-3">Zona Franca Tocancipá</div>
                  <div className="font-serif text-white text-3xl leading-tight">Planta propia<br />desde 2017</div>
                </div>

                {/* Orange corner accent */}
                <div className="absolute bottom-0 right-0">
                  <div className="w-20 h-20 bg-[#F5A800]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} aria-hidden="true" />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {pillars.map((p) => (
                    <div key={p.label} className="text-center">
                      <div className="font-serif text-2xl font-bold text-[#0066B3] leading-none">{p.value}</div>
                      <div className="text-[#636E72] text-xs mt-0.5">{p.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right content */}
          <AnimatedSection className="lg:col-span-7" direction="right" delay={0.15}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#F5A800]" />
              <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Nuestra Historia</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#003D7A] leading-tight mb-6">
              Una empresa familiar<br />con capacidad industrial
            </h2>

            <p className="text-[#636E72] text-lg leading-relaxed mb-4">
              En 2003 nació Lechecol con una visión clara: producir leche en polvo de alta calidad a precio justo. Lo que comenzó en una pequeña bodega al norte de Bogotá es hoy una operación industrial en Zona Franca Tocancipá con línea de pulverización propia.
            </p>
            <p className="text-[#636E72] leading-relaxed mb-10">
              Trabajamos directamente con pequeños productores lecheros de Cundinamarca, controlamos el proceso desde la leche cruda hasta el empaque final, y entregamos con la puntualidad que su operación exige.
            </p>

            {/* Timeline */}
            <div className="relative mb-10">
              {/* Connecting line */}
              <div className="absolute top-5 left-5 right-5 h-px bg-[#F5A800]/30 hidden md:block" aria-hidden="true" />
              <div className="grid grid-cols-3 gap-4 relative">
                {milestones.map((m) => (
                  <div key={m.year} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#0066B3] text-white flex items-center justify-center text-xs font-bold mx-auto mb-2 relative z-10 shadow-md">
                      {m.year.slice(2)}
                    </div>
                    <div className="font-bold text-[#003D7A] text-sm">{m.year}</div>
                    <div className="text-[#0066B3] text-xs font-semibold">{m.label}</div>
                    <div className="text-[#636E72] text-xs">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#003D7A] text-white font-semibold rounded-full hover:bg-[#0066B3] transition-colors group text-sm uppercase tracking-wide"
            >
              Conocer Nuestra Historia
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
