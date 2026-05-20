import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/data/solutions';
import SolutionDetailPage from '@/components/solutions/SolutionDetailPage';

const slug = 'maquila-marca-propia';

export const metadata: Metadata = {
  title: 'Maquila & Marca Propia en Leche en Polvo — Lechecol ZF',
  description:
    'Convertimos su concepto en producto terminado. Maquila de leche en polvo para cadenas como Makro, Alkosto, Coopratiendas y más. Formulación, empaque, etiquetado y control de calidad.',
};

export default function MaquilaMarcaPropiaPage() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
