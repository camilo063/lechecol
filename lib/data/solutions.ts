export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  idealFor: string[];
  whatsappKey: string;
  icon: string;
};

export const solutions: Solution[] = [
  {
    slug: 'maquila-marca-propia',
    title: 'Maquila & Marca Propia',
    shortDescription: 'Llevamos su marca del concepto al anaquel',
    description: 'Convertimos su concepto en producto terminado. Con más de 20 marcas maquiladas para cadenas como Makro, Alkosto, Coopratiendas, Supermercados Unidos, MUA y Zapatoca, tenemos la experiencia y capacidad para llevar su marca al mercado.',
    includes: [
      'Formulación y desarrollo de leche entera, descremada, azucarada y mezclas lácteas',
      'Presentaciones flexibles: desde porciones individuales hasta formato industrial',
      'Diseño de empaque y asesoría en etiquetado normativo',
      'Control de calidad y trazabilidad completa en todo el proceso',
      'Lotes de prueba antes de producción en escala',
    ],
    idealFor: ['Cadenas de retail', 'Hard discount', 'Marcas propias', 'Distribuidores con marca'],
    whatsappKey: 'maquila',
    icon: 'factory',
  },
  {
    slug: 'abastecimiento-institucional',
    title: 'Abastecimiento Institucional',
    shortDescription: 'Suministro programado, cobertura nacional',
    description: 'Comedores escolares, hoteles, cafeterías, panaderías industriales y programas de alimentación necesitan un proveedor que cumpla en calidad, cantidad y puntualidad. Eso es exactamente lo que hacemos.',
    includes: [
      'Entrega programada con cobertura nacional',
      'Inventario garantizado y reposición oportuna',
      'Estabilidad en sabor, rendimiento y disolución lote a lote',
      'Soporte técnico para estandarizar recetas y optimizar costos',
    ],
    idealFor: ['PAE', 'Fuerzas Militares', 'HORECA', 'Comedores industriales', 'Cafeterías'],
    whatsappKey: 'institucional',
    icon: 'building',
  },
  {
    slug: 'formulaciones-personalizadas',
    title: 'Formulaciones Personalizadas',
    shortDescription: 'Perfiles nutricionales a su medida',
    description: 'Si necesita ajustar grasa, azúcares, proteínas o agregar fortificación específica, nuestro equipo técnico desarrolla la formulación a su medida.',
    includes: [
      'Ajuste de perfil nutricional según aplicación final',
      'Opciones de fortificación con vitaminas y minerales',
      'Mezcla con otros ingredientes lácteos según requerimiento',
      'Pruebas piloto y escalamiento a producción',
      'Documentación técnica completa',
    ],
    idealFor: ['Industria alimentaria', 'Laboratorios nutricionales', 'Marcas especializadas', 'Exportación'],
    whatsappKey: 'formulaciones',
    icon: 'flask',
  },
  {
    slug: 'empaque-comercial',
    title: 'Empaque & Presentación Comercial',
    shortDescription: 'Su marca, lista para competir',
    description: 'Desde la selección del gramaje hasta el diseño del empaque, asesoramos en cada decisión para que su producto llegue al canal correcto con la presentación correcta.',
    includes: [
      'Diseño de presentaciones y gramajes por canal de distribución',
      'Asesoría en etiquetado nutricional y cumplimiento normativo INVIMA',
      'Corridas de prueba antes de producción masiva',
      'Múltiples formatos: bolsa, saco kraft, ristra',
    ],
    idealFor: ['Nuevas marcas', 'Rebranding', 'Expansión de portafolio', 'Exportación'],
    whatsappKey: 'empaque',
    icon: 'package',
  },
  {
    slug: 'logistica-continuidad',
    title: 'Logística & Continuidad Operativa',
    shortDescription: 'Llegamos a tiempo, siempre',
    description: 'Planificamos con usted para que nunca le falte producto. Integramos nuestro calendario de producción con sus ciclos de compra para garantizar continuidad operativa.',
    includes: [
      'Plan de abastecimiento basado en demanda proyectada',
      'Integración con sus procesos de compras y distribución',
      'Soporte postventa y atención a requerimientos especiales',
      'Cobertura nacional desde Zona Franca Tocancipá',
    ],
    idealFor: ['Mayoristas', 'Distribuidores nacionales', 'Programas de alimentación', 'Grandes superficies'],
    whatsappKey: 'logistica',
    icon: 'truck',
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
