import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import JsonLd from '@/components/seo/JsonLd';

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lechecol ZF | Leche en Polvo y Maquila Láctea en Colombia',
  description:
    'Fabricamos leche en polvo entera, descremada, azucarada y mezclas lácteas. Maquila, marca propia y abastecimiento institucional desde Zona Franca Tocancipá. +22 años de experiencia.',
  metadataBase: new URL('https://lechecol.com'),
  openGraph: {
    siteName: 'Lechecol ZF',
    locale: 'es_CO',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lechecol ZF S.A.S.',
  url: 'https://lechecol.com',
  logo: 'https://lechecol.com/images/logo/lechecol-zf-logo.png',
  foundingDate: '2003',
  description:
    'Empresa colombiana fabricante de leche en polvo y mezclas lácteas desde 2003. Planta propia en Zona Franca Tocancipá con línea de pulverización.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tocancipá',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-314-356-9431',
    contactType: 'sales',
    availableLanguage: 'Spanish',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
