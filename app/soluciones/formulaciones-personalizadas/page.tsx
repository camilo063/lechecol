import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/data/solutions';
import SolutionDetailPage from '@/components/solutions/SolutionDetailPage';

const slug = 'formulaciones-personalizadas';

export const metadata: Metadata = {
  title: 'Formulaciones Personalizadas de Leche en Polvo — Lechecol ZF',
  description:
    'Desarrollo de formulaciones lácteas a medida: ajuste de grasa, azúcares, proteínas y fortificación específica. Para industria alimentaria, laboratorios nutricionales y exportación.',
};

export default function FormulacionesPersonalizadasPage() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
