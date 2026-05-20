import Link from 'next/link';
import { solutions } from '@/lib/data/solutions';
import AnimatedSection from '@/components/shared/AnimatedSection';

const solutionIcons: Record<string, string> = {
  factory: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  building: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
  flask: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01.75 1.684c0 1.24-1.008 2.25-2.25 2.25H5.7A2.25 2.25 0 013.45 16.684 2.25 2.25 0 014.2 15m15.6 0l-1.2-1.2M4.2 15l1.2-1.2',
  package: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  truck: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
};

export default function SolutionsOverview() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#0066B3]/20 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 bg-[#F5A800]" />
              <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Soluciones B2B</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#003D7A] leading-tight">
              No solo vendemos producto.<br />
              <span className="text-[#0066B3]">Somos su socio operativo.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <p className="text-[#636E72] text-lg leading-relaxed">
              Diseñamos, formulamos, envasamos y entregamos soluciones lácteas completas. Desde la leche cruda hasta su góndola.
            </p>
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 mt-6 text-[#0066B3] font-semibold group hover:text-[#003D7A] transition-colors"
            >
              Ver todas las soluciones
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Solutions — horizontal list with bold numbers */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {solutions.map((solution, i) => (
            <AnimatedSection key={solution.slug} delay={i * 0.07}>
              <Link
                href={`/soluciones/${solution.slug}`}
                className="group relative flex flex-col p-6 bg-white hover:bg-[#003D7A] transition-all duration-300 border-r last:border-r-0 border-gray-100 hover:border-[#003D7A] h-full min-h-[220px]"
              >
                {/* Number */}
                <span className="font-mono text-4xl font-bold text-[#0066B3]/15 group-hover:text-white/10 leading-none mb-4 transition-colors">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#0066B3]/10 group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-[#0066B3] group-hover:text-[#F5A800] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={solutionIcons[solution.icon]} />
                  </svg>
                </div>

                <h3 className="font-serif text-[#003D7A] group-hover:text-white text-base leading-snug mb-2 transition-colors flex-1">
                  {solution.title}
                </h3>
                <p className="text-[#636E72] group-hover:text-white/60 text-xs leading-relaxed transition-colors line-clamp-2">
                  {solution.shortDescription}
                </p>

                {/* Arrow */}
                <svg className="w-4 h-4 mt-4 text-[#0066B3] group-hover:text-[#F5A800] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>

                {/* Bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5A800] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
