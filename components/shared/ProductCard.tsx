import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/data/products';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-surface overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.brand} — ${product.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wide"
          style={{ backgroundColor: product.color }}
        >
          {product.brand}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lechecol-navy text-xl mb-2">{product.name}</h3>
        <p className="text-muted text-sm leading-relaxed flex-1">{product.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-lechecol-blue font-semibold text-sm group-hover:gap-2 transition-all">
          Ver producto
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
