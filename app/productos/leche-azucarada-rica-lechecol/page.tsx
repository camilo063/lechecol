import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data/products';
import ProductDetailPage from '@/components/products/ProductDetailPage';

const slug = 'leche-azucarada-rica-lechecol';

export const metadata: Metadata = {
  title: 'Leche en Polvo Entera Azucarada Rica Lechecol | Vitaminas A y D — Lechecol ZF',
  description:
    'Rica Lechecol: leche en polvo entera azucarada con vitaminas A y D. Lista para consumo directo, ideal para mayoristas, HORECA, cafeterías y programas de alimentación.',
};

export default function LecheAzucaradaRicaLechecolPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
