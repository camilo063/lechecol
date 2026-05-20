import type { Metadata } from 'next';
import { CONTACT } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Lechecol ZF S.A.S.',
  description: 'Política de tratamiento de datos personales de Lechecol ZF S.A.S. Conozca cómo recopilamos, usamos y protegemos su información.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidad"
        subtitle="Última actualización: Enero de 2025"
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Política de Privacidad' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-8">
              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">1. Responsable del Tratamiento</h2>
                <p>
                  <strong>{CONTACT.companyName}</strong>, identificada con NIT [pendiente], con domicilio en {CONTACT.location}, es responsable del tratamiento de los datos personales recopilados a través de este sitio web.
                </p>
                <p className="mt-2">
                  Para consultas relacionadas con el tratamiento de sus datos, puede contactarnos en: <a href={`mailto:${CONTACT.email}`} className="text-lechecol-blue hover:underline">{CONTACT.email}</a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">2. Datos que Recopilamos</h2>
                <p>Recopilamos los siguientes datos personales a través del formulario de contacto:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Nombre completo</li>
                  <li>Nombre de la empresa</li>
                  <li>Correo electrónico corporativo</li>
                  <li>Número de teléfono</li>
                  <li>Mensaje y tipo de consulta</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">3. Finalidad del Tratamiento</h2>
                <p>Sus datos personales son utilizados exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Responder a sus consultas comerciales y solicitudes de cotización</li>
                  <li>Gestionar la relación comercial con nuestros clientes y prospectos</li>
                  <li>Enviar información relevante sobre nuestros productos y servicios (con su consentimiento)</li>
                  <li>Cumplir con obligaciones legales y normativas aplicables</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">4. Base Legal</h2>
                <p>
                  El tratamiento de sus datos se realiza con base en su consentimiento expreso al enviar el formulario de contacto, y en el interés legítimo de {CONTACT.companyName} para gestionar relaciones comerciales, conforme a la Ley 1581 de 2012 de Colombia y sus decretos reglamentarios.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">5. Conservación de Datos</h2>
                <p>
                  Sus datos personales serán conservados durante el tiempo necesario para cumplir las finalidades descritas, y en cualquier caso, mientras exista una relación comercial activa o potencial, o mientras lo exija la ley.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">6. Sus Derechos</h2>
                <p>De conformidad con la Ley 1581 de 2012, usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Conocer</strong> los datos personales que tenemos sobre usted</li>
                  <li><strong>Actualizar</strong> o rectificar datos inexactos</li>
                  <li><strong>Solicitar la supresión</strong> de sus datos cuando no sean necesarios</li>
                  <li><strong>Revocar</strong> el consentimiento dado para el tratamiento</li>
                  <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio</li>
                </ul>
                <p className="mt-3">Para ejercer estos derechos, contáctenos en: <a href={`mailto:${CONTACT.email}`} className="text-lechecol-blue hover:underline">{CONTACT.email}</a></p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">7. Seguridad de la Información</h2>
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la divulgación, alteración o destrucción.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">8. Cookies</h2>
                <p>
                  Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento publicitario sin su consentimiento previo.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">9. Cambios en esta Política</h2>
                <p>
                  Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios entrarán en vigor desde su publicación en este sitio web. Le recomendamos revisar periódicamente esta página.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lechecol-navy text-2xl mb-3">10. Contacto</h2>
                <p>Para cualquier consulta relacionada con esta política o el tratamiento de sus datos:</p>
                <div className="mt-3 space-y-1">
                  <p><strong>Empresa:</strong> {CONTACT.companyName}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-lechecol-blue hover:underline">{CONTACT.email}</a></p>
                  <p><strong>Teléfono:</strong> {CONTACT.phone}</p>
                  <p><strong>Dirección:</strong> {CONTACT.location}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
