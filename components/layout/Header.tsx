'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';

const navLinks = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    href: '/nosotros',
    children: [
      { label: 'Quiénes Somos', href: '/nosotros' },
      { label: 'Responsabilidad Social', href: '/nosotros/responsabilidad-social' },
    ],
  },
  {
    label: 'Productos',
    href: '/productos',
    children: [
      { label: 'Rosalinda — Leche Entera', href: '/productos/leche-entera-rosalinda' },
      { label: 'Rica Lechecol — Azucarada', href: '/productos/leche-azucarada-rica-lechecol' },
      { label: 'Lechecol — Descremada', href: '/productos/leche-descremada' },
      { label: 'La Pecosita — Mezcla Láctea', href: '/productos/mezcla-lactea-la-pecosita' },
    ],
  },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Recetas', href: '/recetas' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappHref = `${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.cotizacion}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80 py-2'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Top orange accent line when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5A800] via-[#0066B3] to-[#F5A800]" />
        )}

        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group" aria-label="Lechecol ZF — Inicio">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-base transition-colors ${
              scrolled ? 'bg-[#0066B3] text-white' : 'bg-white/15 text-white border border-white/20'
            }`}>
              L
            </div>
            <div>
              <span className={`font-serif text-lg font-bold block leading-none transition-colors ${
                scrolled ? 'text-[#003D7A]' : 'text-white'
              }`}>
                Lechecol ZF
              </span>
              <span className={`text-[10px] italic block leading-none mt-0.5 font-mono transition-colors ${
                scrolled ? 'text-[#636E72]' : 'text-white/50'
              }`}>
                Calidad que alimenta tu vida
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    scrolled
                      ? 'text-[#2D3436] hover:text-[#0066B3] hover:bg-[#F7F8FA]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className={`w-3 h-3 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && openDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 ring-1 ring-black/5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#2D3436] hover:text-[#0066B3] hover:bg-[#F7F8FA] transition-colors group/child"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#F5A800]/40 group-hover/child:bg-[#F5A800] transition-colors flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                scrolled
                  ? 'bg-[#25D366] text-white hover:bg-green-400 shadow-sm'
                  : 'bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#2D3436] hover:bg-[#F7F8FA]' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#0B1220] shadow-2xl flex flex-col border-l border-white/8">
            {/* Drawer header */}
            <div className="p-6 border-b border-white/8 flex items-center justify-between">
              <div>
                <span className="font-serif text-white text-lg font-bold block leading-none">Lechecol ZF</span>
                <span className="text-white/35 text-[10px] italic mt-0.5 block font-mono">Calidad que alimenta tu vida</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white/50 hover:text-white p-1 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-white/70 font-medium hover:text-white hover:bg-white/5 transition-all text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.children && (
                      <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-0.5 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 rounded-lg text-xs text-white/40 hover:text-white/80 hover:bg-white/5 transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-4 border-t border-white/8">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold uppercase tracking-wide hover:bg-green-400 transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
