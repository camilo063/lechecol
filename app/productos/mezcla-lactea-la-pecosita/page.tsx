import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data/products';
import ProductDetailPage from '@/components/products/ProductDetailPage';

const slug = 'mezcla-lactea-la-pecosita';

export const metadata: Metadata = {
  title: 'Mezcla Láctea en Polvo La Pecosita | Nutritiva y Accesible — Lechecol ZF',
  description:
    'La Pecosita: mezcla láctea en polvo con vitaminas A y D, calcio, fósforo y magnesio. Precio competitivo para hard discount, superetes, programas sociales y distribuidores.',
};

export default function MezclaLacteaLaPecositaPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
