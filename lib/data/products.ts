export type Presentation = {
  format: string;
  weight: string;
  packaging: string;
  barcode: string;
};

export type Benefit = {
  icon: string;
  title: string;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  image: string;
  segments: string[];
  presentations: Presentation[];
  benefits: Benefit[];
  color: string;
};

export const products: Product[] = [
  {
    slug: 'leche-entera-rosalinda',
    name: 'Leche en Polvo Entera',
    brand: 'Rosalinda',
    color: '#0066B3',
    shortDescription: 'Rica en proteínas, calcio y vitaminas A y D. Nuestra marca insignia con más de dos décadas en el mercado.',
    description: 'Nuestra marca insignia desde 2004. Rosalinda es leche en polvo entera fortificada con vitaminas A y D, producida bajo los más altos estándares de calidad en nuestra planta de Zona Franca Tocancipá. Con proteínas de alto valor biológico, calcio biodisponible y excelente solubilidad, Rosalinda es la elección de confianza para programas de alimentación escolar (PAE), Fuerzas Militares, cadenas de supermercados, tiendas de barrio y operaciones HORECA en todo el territorio nacional.',
    image: '/images/productos/rosalinda-lineup.jpg',
    segments: ['PAE', 'Industria', 'Fuerzas Militares', 'Cadenas', 'Superetes', 'Hard Discount'],
    presentations: [
      { format: 'Ristra x12', weight: '27g', packaging: '300 uds/caja', barcode: '7707192455887' },
      { format: 'Bolsa', weight: '200g', packaging: '60 uds/caja', barcode: '7707192458048' },
      { format: 'Bolsa', weight: '380g', packaging: '30 uds/caja', barcode: '7707192458017' },
      { format: 'Bolsa', weight: '800g', packaging: '20 uds/caja', barcode: '7707192458093' },
      { format: 'Bolsa', weight: '900g', packaging: '20 uds/caja', barcode: '7707192452558' },
      { format: 'Bulto', weight: '25kg', packaging: '1 bulto', barcode: '7707192458116' },
    ],
    benefits: [
      { icon: 'protein', title: 'Proteínas Esenciales', text: 'Fundamentales para el crecimiento y reparación de tejidos.' },
      { icon: 'calcium', title: 'Alto Contenido de Calcio', text: 'Desarrollo y mantenimiento de huesos y dientes fuertes.' },
      { icon: 'vitamins', title: 'Vitaminas A y D', text: 'Mejoran absorción del calcio y promueven salud visual.' },
    ],
  },
  {
    slug: 'leche-azucarada-rica-lechecol',
    name: 'Leche en Polvo Entera Azucarada',
    brand: 'Rica Lechecol',
    color: '#F5A800',
    shortDescription: 'Nutrición y sabor en un solo producto. Fortificada con vitaminas A y D.',
    description: 'Rica Lechecol combina la calidad nutricional de la leche entera con el toque de dulzor que el consumidor colombiano prefiere. Fortificada con vitaminas A y D, ofrece un perfil completo en proteínas y calcio con excelente rendimiento por porción. Diseñada para satisfacer la demanda de sectores mayoristas, HORECA y programas institucionales que buscan un producto listo para consumo directo sin necesidad de azúcar adicional.',
    image: '/images/productos/rica-lechecol-900g.jpg',
    segments: ['Mayoristas', 'HORECA', 'Cafeterías', 'Programas de alimentación', 'Tiendas'],
    presentations: [
      { format: 'Ristra x10', weight: '65g', packaging: '200 uds/caja', barcode: '7707192451049' },
      { format: 'Bolsa', weight: '200g', packaging: '60 uds/caja', barcode: '7707192455054' },
      { format: 'Bolsa', weight: '380g', packaging: '30 uds/caja', barcode: '7707192454927' },
      { format: 'Bolsa', weight: '900g', packaging: '20 uds/caja', barcode: '7707192457362' },
      { format: 'Bolsa', weight: '5kg', packaging: '5 uds/bulto', barcode: '7707192453517' },
      { format: 'Bulto', weight: '25kg', packaging: '1 bulto', barcode: '7707192453500' },
    ],
    benefits: [
      { icon: 'taste', title: 'Sabor Natural', text: 'Balance perfecto entre dulzor y nutrición sin azúcar adicional.' },
      { icon: 'calcium', title: 'Calcio y Proteínas', text: 'Perfil nutricional completo para cada porción.' },
      { icon: 'vitamins', title: 'Vitaminas A y D', text: 'Nutrición fortificada para toda la familia.' },
    ],
  },
  {
    slug: 'leche-descremada',
    name: 'Leche en Polvo Descremada',
    brand: 'Lechecol',
    color: '#003D7A',
    shortDescription: 'Baja en grasa, alta en nutrición. Ideal para formulaciones industriales.',
    description: 'Nuestra leche descremada conserva toda la riqueza nutricional — calcio, proteínas y vitaminas esenciales — con contenido reducido de grasa. Alta solubilidad, sabor neutro y excelente rendimiento la hacen ideal para formulaciones industriales, productos horneados y operaciones que requieren un perfil lácteo ligero. Su relación costo-rendimiento optimizada permite operar con márgenes competitivos en distribución de grandes volúmenes.',
    image: '/images/productos/lechecol-descremada-400g.jpg',
    segments: ['Industria alimentaria', 'Panaderías', 'Formulaciones', 'Distribución mayorista'],
    presentations: [
      { format: 'Bolsa', weight: '400g', packaging: 'Consultar', barcode: '' },
    ],
    benefits: [
      { icon: 'light', title: 'Baja en Grasa', text: 'Reducción de grasa sin sacrificar propiedades nutricionales.' },
      { icon: 'calcium', title: 'Rica en Calcio', text: 'Mantiene el perfil de calcio de la leche entera.' },
      { icon: 'versatile', title: 'Alta Solubilidad', text: 'Rendimiento optimizado en todo tipo de preparaciones.' },
    ],
  },
  {
    slug: 'mezcla-lactea-la-pecosita',
    name: 'Mezcla Láctea en Polvo',
    brand: 'La Pecosita',
    color: '#E85D04',
    shortDescription: 'Versatilidad y valor para mercados sensibles al precio sin sacrificar calidad.',
    description: 'La Pecosita es nuestra mezcla láctea fortificada con vitaminas A y D, diseñada para ofrecer un producto nutritivo y accesible. Con calcio, fósforo y magnesio en su perfil nutricional, es la opción preferida para mercados que buscan precio competitivo sin comprometer calidad. Versatilidad en su aplicación: desde bebidas directas hasta ingrediente industrial para batidos, productos horneados y otras preparaciones lácteas.',
    image: '/images/productos/la-pecosita-retail.jpg',
    segments: ['Hard discount', 'Superetes', 'Tiendas de barrio', 'Programas sociales', 'Distribuidores'],
    presentations: [
      { format: 'Bolsa', weight: '380g', packaging: '30 uds/caja', barcode: '7707192455009' },
      { format: 'Bolsa', weight: '800g', packaging: '20 uds/caja', barcode: '7707192457201' },
      { format: 'Bolsa', weight: '1kg', packaging: '25 uds/bulto', barcode: '7707192454965' },
      { format: 'Bolsa', weight: '5kg', packaging: '5 uds/bulto', barcode: '7707192454958' },
      { format: 'Bulto', weight: '25kg', packaging: '1 bulto', barcode: '7707192456013' },
    ],
    benefits: [
      { icon: 'nutrients', title: 'Nutrientes Esenciales', text: 'Calcio, fósforo y magnesio en cada porción.' },
      { icon: 'vitamins', title: 'Vitaminas A y D', text: 'Fortificación que marca la diferencia nutricional.' },
      { icon: 'value', title: 'Precio Competitivo', text: 'Máximo valor para mercados sensibles al precio.' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
