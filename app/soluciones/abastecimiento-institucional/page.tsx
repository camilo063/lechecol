import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/data/solutions';
import SolutionDetailPage from '@/components/solutions/SolutionDetailPage';

const slug = 'abastecimiento-institucional';

export const metadata: Metadata = {
  title: 'Abastecimiento Institucional de Leche en Polvo | PAE, HORECA — Lechecol ZF',
  description:
    'Suministro programado de leche en polvo con cobertura nacional. Para PAE, Fuerzas Militares, comedores escolares, hoteles, cafeterías y panaderías industriales.',
};

export default function AbastecimientoInstitucionalPage() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
