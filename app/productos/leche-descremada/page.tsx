import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data/products';
import ProductDetailPage from '@/components/products/ProductDetailPage';

const slug = 'leche-descremada';

export const metadata: Metadata = {
  title: 'Leche en Polvo Descremada Lechecol | Alta Solubilidad — Lechecol ZF',
  description:
    'Leche en polvo descremada Lechecol: baja en grasa, alta en calcio y proteínas. Alta solubilidad ideal para formulaciones industriales, panaderías y distribución mayorista.',
};

export default function LecheDescremadaPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
