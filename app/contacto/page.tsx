import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contacto | Solicite Cotización — Lechecol ZF',
  description:
    'Contáctenos para cotizaciones de leche en polvo, maquila o abastecimiento institucional. WhatsApp: +57 314 356 9431. Respuesta en menos de 24 horas.',
};

const localBizSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lechecol ZF S.A.S.',
  description: 'Fabricante de leche en polvo y maquila láctea en Colombia.',
  url: 'https://lechecol.com',
  telephone: '+57-314-356-9431',
  email: 'contactenos@lechecol.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tocancipá',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={localBizSchema} />
      <ContactSection />
    </>
  );
}
