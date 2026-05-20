'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useCallback } from 'react';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';

const stats = [
  { value: '22+', label: 'Años' },
  { value: '20+', label: 'Marcas' },
  { value: 'ZF', label: 'Zona Franca' },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const whatsappHref = `${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.cotizacion}`;

  // React no actualiza `muted` reactivamente en <video> — manipulamos el DOM directamente
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0B1220]">

      {/* ─── Grain texture ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      {/* ─── Parallax background ───────────────────────────────────────── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0D1B2E] to-[#081018]" />
        {/* Blue industrial glow — top left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#0066B3]/12 blur-[130px]" />
        {/* Orange accent glow — center right */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[600px] rounded-full bg-[#F5A800]/6 blur-[100px]" />
        {/* Horizontal scan lines — industrial feel */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${10 + i * 12}%` }} />
          ))}
        </div>
      </motion.div>

      {/* ─── Left orange accent bar ────────────────────────────────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F5A800 30%, #F5A800 70%, transparent)' }}
        aria-hidden="true"
      />

      {/* ─── Main grid ─────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 min-h-screen grid lg:grid-cols-12 items-center gap-0 lg:gap-12"
        style={{ opacity: contentOpacity }}
      >

        {/* ══ LEFT — Copy (7 cols) ══════════════════════════════════════ */}
        <div className="lg:col-span-7 pt-32 pb-16 lg:pt-0 lg:pb-0">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-[#F5A800]" />
            <span className="text-[#F5A800] font-mono text-[11px] tracking-[0.28em] uppercase">
              Zona Franca Tocancipá · Pulverización propia 2025
            </span>
          </motion.div>

          {/* Headline — 3 line-reveal */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[0.9] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)' }}
            >
              La planta que produce
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[0.9] tracking-tight text-[#F5A800]"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)' }}
            >
              para las marcas
            </motion.div>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[0.9] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)' }}
            >
              que más exigen.
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px max-w-md bg-gradient-to-r from-[#F5A800]/70 to-transparent origin-left mb-8"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-white/50 text-base md:text-lg max-w-md leading-relaxed mb-10"
          >
            22 años fabricando, maquilando y envasando para las marcas más exigentes del mercado. Planta propia en Zona Franca, control total, entrega puntual.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-white font-semibold uppercase tracking-wider text-sm rounded-full hover:bg-[#1ebe5c] transition-all duration-200 shadow-[0_0_36px_rgba(37,211,102,0.3)] hover:shadow-[0_0_56px_rgba(37,211,102,0.45)]"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Cotización
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/65 font-medium uppercase tracking-wider text-sm rounded-full hover:border-white/35 hover:text-white transition-all duration-200"
            >
              Ver Soluciones
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center gap-8 border-t border-white/8 pt-7"
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`${i < stats.length - 1 ? 'pr-8 border-r border-white/8' : ''}`}>
                <div className="font-serif text-[#F5A800] text-3xl leading-none mb-1">{s.value}</div>
                <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.18em]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT — Video frame (5 cols, desktop only) ══════════════════ */}
        <motion.div
          className="lg:col-span-5 hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative w-full max-w-[440px]"
            style={{ y: videoY }}
          >
            {/* Corner brackets — top right (orange) */}
            <div className="absolute -top-4 -right-4 z-10 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 right-0 w-10 h-[2px] bg-[#F5A800]" />
              <div className="absolute top-0 right-0 w-[2px] h-10 bg-[#F5A800]" />
            </div>
            {/* Corner brackets — bottom left (blue) */}
            <div className="absolute -bottom-4 -left-4 z-10 pointer-events-none" aria-hidden="true">
              <div className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#0066B3]" />
              <div className="absolute bottom-0 left-0 w-[2px] h-10 bg-[#0066B3]" />
            </div>

            {/* Outer glow */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(245,168,0,0.10) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Video container */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10"
              style={{
                transform: 'perspective(1000px) rotateY(-4deg) rotateX(1.5deg)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Aspect ratio: 4/3 works for landscape plant videos */}
              <div className="aspect-[4/3]">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/hero/planta-poster.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/planta-lechecol.webm" type="video/webm" />
                  <source src="/videos/planta-lechecol.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Vignette overlay — top */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B1220]/50 to-transparent pointer-events-none" />

              {/* Vignette overlay — bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1220]/90 to-transparent pointer-events-none" />

              {/* ● Planta badge — top left */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-white/70 text-[10px] font-mono uppercase tracking-[0.2em]">Planta</span>
              </div>

              {/* Mute / Unmute button — top right */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
                className="absolute top-3.5 right-3.5 group/mute flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 hover:bg-black/70 hover:border-white/35 transition-all duration-200 cursor-pointer"
              >
                {isMuted ? (
                  /* Speaker muted icon */
                  <svg className="w-3.5 h-3.5 text-white/50 group-hover/mute:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  /* Speaker on icon */
                  <svg className="w-3.5 h-3.5 text-[#F5A800] group-hover/mute:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
                <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 group-hover/mute:text-white/70 transition-colors">
                  {isMuted ? 'Sound' : 'Mute'}
                </span>
              </button>

              {/* Bottom label */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-white/70 text-xs font-medium leading-none mb-0.5">Zona Franca Tocancipá</div>
                  <div className="text-white/30 text-[10px] font-mono">Cundinamarca, Colombia</div>
                </div>
                <div className="text-[#F5A800]/60 text-[10px] font-mono font-bold">2025</div>
              </div>

              {/* Scanline effect overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating spec tag below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-4 flex items-center justify-between px-1"
            >
              <span className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">ISO 9001:2015 · INVIMA</span>
              <span className="text-white/20 text-[10px] font-mono">Pulverización propia</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ─── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
        <span className="text-white/20 text-[9px] font-mono tracking-[0.25em] uppercase">Scroll</span>
      </motion.div>

    </section>
  );
}
