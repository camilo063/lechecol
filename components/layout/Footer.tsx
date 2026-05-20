import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

const productLinks = [
  { label: 'Rosalinda — Entera', href: '/productos/leche-entera-rosalinda' },
  { label: 'Rica Lechecol — Azucarada', href: '/productos/leche-azucarada-rica-lechecol' },
  { label: 'Lechecol — Descremada', href: '/productos/leche-descremada' },
  { label: 'La Pecosita — Mezcla', href: '/productos/mezcla-lactea-la-pecosita' },
];

const solutionLinks = [
  { label: 'Maquila & Marca Propia', href: '/soluciones/maquila-marca-propia' },
  { label: 'Abastecimiento Institucional', href: '/soluciones/abastecimiento-institucional' },
  { label: 'Formulaciones Personalizadas', href: '/soluciones/formulaciones-personalizadas' },
  { label: 'Empaque Comercial', href: '/soluciones/empaque-comercial' },
  { label: 'Logística y Continuidad', href: '/soluciones/logistica-continuidad' },
];

const companyLinks = [
  { label: 'Quiénes Somos', href: '/nosotros' },
  { label: 'Responsabilidad Social', href: '/nosotros/responsabilidad-social' },
  { label: 'Recetas', href: '/recetas' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Política de Privacidad', href: '/politica-privacidad' },
];

const certBadges = [
  { label: 'ISO 9001:2015' },
  { label: 'INVIMA' },
  { label: 'Zona Franca' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1220] overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A800]/50 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
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

      {/* Ambient left glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0066B3]/8 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-8">

        {/* Top row: Brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14 pb-14 border-b border-white/8">

          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 rounded-xl bg-[#0066B3] flex items-center justify-center font-serif font-bold text-white text-lg group-hover:bg-[#003D7A] transition-colors">
                L
              </div>
              <div>
                <span className="font-serif text-white text-xl font-bold block leading-none">Lechecol ZF</span>
                <span className="text-white/40 text-xs italic block mt-0.5">{CONTACT.slogan}</span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-7 max-w-xs">
              22 años produciendo leche en polvo para las marcas más exigentes de Colombia. Planta propia en Zona Franca Tocancipá con línea de pulverización propia desde 2025.
            </p>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              {certBadges.map((b) => (
                <span
                  key={b.label}
                  className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] font-mono uppercase tracking-wider"
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`${CONTACT.whatsappUrl}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20productos%20de%20Lechecol%20ZF`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-[#25D366] transition-colors text-sm group/wa"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-[#0066B3] transition-colors text-sm"
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {CONTACT.email}
              </a>
              <span className="flex items-start gap-2.5 text-white/35 text-sm">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {CONTACT.location}
              </span>
            </div>
          </div>

          {/* Products column */}
          <div className="lg:col-span-3">
            <h4 className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] mb-5">Productos</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F5A800]/30 group-hover/link:bg-[#F5A800] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions column */}
          <div className="lg:col-span-3">
            <h4 className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] mb-5">Soluciones B2B</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0066B3]/40 group-hover/link:bg-[#0066B3] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <h4 className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] mb-5">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/15 group-hover/link:bg-white/60 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-xs font-mono">© 2025 {CONTACT.companyName}</span>
            <span className="text-white/10 hidden md:inline">·</span>
            <span className="text-white/20 text-xs hidden md:inline">Todos los derechos reservados</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/politica-privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/sitemap.xml" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
