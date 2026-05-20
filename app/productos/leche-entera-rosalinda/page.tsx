import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data/products';
import ProductDetailPage from '@/components/products/ProductDetailPage';

const slug = 'leche-entera-rosalinda';

export const metadata: Metadata = {
  title: 'Leche en Polvo Entera Rosalinda | Vitaminas A y D — Lechecol ZF',
  description:
    'Leche en polvo entera Rosalinda: proteínas de alto valor biológico, calcio y vitaminas A y D. Ideal para PAE, Fuerzas Militares, cadenas y HORECA. Disponible desde 27g hasta 25kg.',
};

export default function LecheEnteraRosalindaPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
