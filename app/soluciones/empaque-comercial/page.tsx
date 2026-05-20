import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/data/solutions';
import SolutionDetailPage from '@/components/solutions/SolutionDetailPage';

const slug = 'empaque-comercial';

export const metadata: Metadata = {
  title: 'Empaque & Presentación Comercial de Leche en Polvo — Lechecol ZF',
  description:
    'Diseño de presentaciones y gramajes para cada canal. Etiquetado nutricional INVIMA, corridas de prueba y múltiples formatos: bolsa, saco kraft y ristra.',
};

export default function EmpaqueComercialPage() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
