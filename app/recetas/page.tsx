import type { Metadata } from 'next';
import Link from 'next/link';
import { recipes } from '@/lib/data/recipes';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Recetas con Leche en Polvo | Ideas para Cocina Profesional y del Hogar — Lechecol ZF',
  description:
    'Descubra recetas con leche en polvo: postres, batidos, salsas y más. Preparaciones fáciles con productos Lechecol para cocina profesional y doméstica.',
};

const postres = recipes.filter((r) => r.category === 'postre');
const sal = recipes.filter((r) => r.category === 'sal');

export default function RecetasPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspiración Culinaria"
        title="Recetas con Nuestros Productos"
        subtitle="Ideas para sacar el máximo provecho a la leche en polvo en cocina profesional y doméstica."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Recetas' },
        ]}
        accentColor="#F5A800"
      />

      {/* Postres */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="Postres y Bebidas" subtitle="9 recetas dulces con leche en polvo." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postres.map((recipe, i) => (
              <AnimatedSection key={recipe.slug} delay={i * 0.07}>
                <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-lechecol-orange/20 to-lechecol-blue/20 flex items-center justify-center">
                    {/* TODO: Reemplazar con imagen real de la receta */}
                    <span className="text-4xl">🍮</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-lechecol-orange/10 text-lechecol-orange text-xs font-semibold">
                        {recipe.product}
                      </span>
                    </div>
                    <h3 className="font-serif text-lechecol-navy text-lg mb-2">{recipe.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{recipe.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sal */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="Recetas de Sal" subtitle="4 preparaciones saladas con leche en polvo." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sal.map((recipe, i) => (
              <AnimatedSection key={recipe.slug} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-lechecol-navy/10 to-lechecol-blue/10 flex items-center justify-center">
                    {/* TODO: Reemplazar con imagen real */}
                    <span className="text-4xl">🍲</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-lechecol-blue/10 text-lechecol-blue text-xs font-semibold">
                        {recipe.product}
                      </span>
                    </div>
                    <h3 className="font-serif text-lechecol-navy text-lg mb-2">{recipe.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{recipe.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-16 bg-lechecol-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white text-3xl mb-4">¿Eres productor o distribuidor?</h2>
            <p className="text-white/70 mb-8">
              Conozca nuestras soluciones para HORECA, cadenas y operaciones industriales.
            </p>
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lechecol-orange text-white font-semibold hover:bg-orange-500 transition-colors"
            >
              Ver Soluciones B2B
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
