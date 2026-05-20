'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '22+', label: 'Años de experiencia', sub: 'Desde 2003' },
  { value: '4', label: 'Líneas de producto', sub: 'Certificadas INVIMA' },
  { value: '20+', label: 'Marcas maquiladas', sub: 'Makro, MUA, Zapatoca…' },
  { value: 'ZF', label: 'Zona Franca', sub: 'Tocancipá, Cundinamarca' },
  { value: '100%', label: 'Cobertura nacional', sub: 'Logística propia' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5A800] via-[#0066B3] to-[#F5A800]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="group flex flex-col items-center text-center py-8 px-4 hover:bg-[#F7F8FA] transition-colors duration-200"
            >
              <span className="font-serif text-[2.6rem] leading-none font-bold text-[#0066B3] mb-1 group-hover:text-[#003D7A] transition-colors">
                {stat.value}
              </span>
              <span className="text-[#2D3436] text-sm font-semibold mb-0.5">{stat.label}</span>
              <span className="text-[#636E72] text-xs">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
