'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import Link from 'next/link';

const tipoConsulta = [
  'Cotización de producto',
  'Maquila y marca propia',
  'Abastecimiento institucional',
  'Formulación personalizada',
  'Otro',
];

const contactItems = [
  {
    label: 'WhatsApp',
    value: CONTACT.phone,
    href: `${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.general}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    accent: '#25D366',
  },
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    accent: '#0066B3',
  },
  {
    label: 'Ubicación',
    value: CONTACT.location,
    href: null,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    accent: '#F5A800',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', tipo: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="relative bg-[#0B1220] overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A800]/40 to-transparent" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" aria-hidden="true" />

      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0066B3]/10 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 md:py-32">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* LEFT — Info column (2/5) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] font-mono text-xs tracking-[0.25em] uppercase">Contacto</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-6">
              Hablemos de su<br />
              <span className="text-[#F5A800]">próximo proyecto</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-sm">
              Le respondemos en menos de 24 horas. Para consultas urgentes, escríbanos directamente por WhatsApp.
            </p>

            {/* Contact items */}
            <div className="space-y-6">
              {contactItems.map((item) => {
                const inner = (
                  <div className="flex items-center gap-4 group/item">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/35 text-[11px] font-mono uppercase tracking-[0.2em] mb-0.5">{item.label}</div>
                      <div className="text-white font-medium text-sm group-hover/item:text-[#F5A800] transition-colors">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <div className="text-white/35 text-[11px] font-mono uppercase tracking-[0.2em] mb-3">Horario de Atención</div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Lunes a Viernes</span>
                  <span className="text-white font-medium">7:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Sábados</span>
                  <span className="text-white font-medium">8:00 AM — 12:00 PM</span>
                </div>
              </div>
              <p className="text-white/25 text-xs mt-3 italic">WhatsApp disponible fuera de horario</p>
            </div>

            {/* WhatsApp big CTA */}
            <a
              href={`${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.cotizacion}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-3 px-6 py-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/8 hover:bg-[#25D366]/15 hover:border-[#25D366]/60 transition-all duration-200 group/wa"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover/wa:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-[#25D366] font-semibold text-sm">Cotizar por WhatsApp</div>
                <div className="text-white/40 text-xs">Respuesta inmediata</div>
              </div>
              <svg className="w-4 h-4 text-white/30 ml-auto group-hover/wa:text-[#25D366] group-hover/wa:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — Form column (3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-b-[80px] border-l-transparent border-b-[#F5A800]/10" />
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-white text-3xl mb-3">¡Mensaje enviado!</h3>
                  <p className="text-white/50 mb-8 max-w-xs mx-auto">Le responderemos en menos de 24 horas hábiles.</p>
                  <Link
                    href={`${CONTACT.whatsappUrl}?text=${WHATSAPP_MESSAGES.general}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-green-400 transition-colors"
                  >
                    También escríbanos por WhatsApp
                  </Link>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-serif text-white text-2xl md:text-3xl mb-1">Solicitar Cotización</h3>
                    <p className="text-white/35 text-sm">Todos los campos marcados con * son requeridos</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid sm:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="nombre">
                          Nombre completo *
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="input-field"
                          placeholder="Juan García"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="empresa">
                          Empresa *
                        </label>
                        <input
                          id="empresa"
                          type="text"
                          required
                          value={form.empresa}
                          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                          className="input-field"
                          placeholder="Empresa S.A.S."
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="email">
                          Email corporativo *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                          placeholder="contacto@empresa.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="telefono">
                          Teléfono *
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          required
                          value={form.telefono}
                          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                          className="input-field"
                          placeholder="+57 300 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="tipo">
                        Tipo de consulta *
                      </label>
                      <select
                        id="tipo"
                        required
                        value={form.tipo}
                        onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Seleccione una opción</option>
                        {tipoConsulta.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs font-mono uppercase tracking-[0.15em] mb-3" htmlFor="mensaje">
                        Mensaje *
                      </label>
                      <textarea
                        id="mensaje"
                        required
                        rows={4}
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        className="input-field resize-none"
                        placeholder="Cuéntenos sobre su proyecto, volúmenes aproximados y requerimientos especiales..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full py-4 rounded-xl bg-[#0066B3] text-white font-semibold tracking-wider uppercase text-sm overflow-hidden group/btn hover:bg-[#003D7A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Consulta
                              <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </>
                          )}
                        </span>
                        {/* Shimmer on hover */}
                        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
                      </button>

                      <p className="text-white/20 text-xs text-center mt-4">
                        Sus datos son confidenciales y nunca serán compartidos con terceros.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
