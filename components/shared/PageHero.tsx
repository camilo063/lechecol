import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  accentColor?: string;
};

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs, accentColor = '#F5A800' }: Props) {
  return (
    <section className="relative bg-[#0B1220] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
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

      {/* Ambient glow */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0066B3]/15 blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
        aria-hidden="true"
      />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <AnimatedSection>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-white/35 text-xs font-mono mb-8" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white/70 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/60">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }} />
              <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: accentColor }}>
                {eyebrow}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)] leading-tight max-w-4xl mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
