import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProductsGrid from '@/components/home/ProductsGrid';
import SolutionsOverview from '@/components/home/SolutionsOverview';
import BrandsCarousel from '@/components/home/BrandsCarousel';
import AboutPreview from '@/components/home/AboutPreview';
import ContactSection from '@/components/home/ContactSection';
import DiagonalDivider from '@/components/shared/DiagonalDivider';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Lechecol ZF | Leche en Polvo y Maquila Láctea en Colombia',
  description:
    'Fabricamos leche en polvo entera, descremada, azucarada y mezclas lácteas. Maquila, marca propia y abastecimiento institucional desde Zona Franca Tocancipá. +22 años de experiencia.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lechecol ZF',
  url: 'https://lechecol.com',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <HeroSection />
      <TrustBar />
      <div className="h-3 bg-lechecol-orange" aria-hidden="true" />
      <ProductsGrid />
      <DiagonalDivider fromColor="#F5A800" direction="down" />
      <SolutionsOverview />
      <BrandsCarousel />
      <AboutPreview />
      <ContactSection />
    </>
  );
}
