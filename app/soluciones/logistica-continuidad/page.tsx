import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/data/solutions';
import SolutionDetailPage from '@/components/solutions/SolutionDetailPage';

const slug = 'logistica-continuidad';

export const metadata: Metadata = {
  title: 'Logística & Continuidad Operativa de Suministro Lácteo — Lechecol ZF',
  description:
    'Plan de abastecimiento continuo desde Zona Franca Tocancipá. Integración con sus ciclos de compra, cobertura nacional y soporte para mayoristas y distribuidores.',
};

export default function LogisticaContinuidadPage() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
