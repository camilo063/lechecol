import type { Metadata } from 'next';

const BASE_URL = 'https://lechecol.com';
const SITE_NAME = 'Lechecol ZF';

export function buildMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '' ? `${SITE_NAME} | Leche en Polvo y Maquila Láctea en Colombia` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
