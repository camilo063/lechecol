export type Recipe = {
  slug: string;
  title: string;
  category: 'postre' | 'sal';
  product: string;
  description: string;
  image: string;
};

export const recipes: Recipe[] = [
  { slug: 'flan-leche-entera', title: 'Flan de Leche en Polvo Entera', category: 'postre', product: 'Rosalinda', description: 'Un flan cremoso y suave con todo el sabor de la leche entera Rosalinda.', image: '/images/recetas/flan.jpg' },
  { slug: 'batido-fresa-descremada', title: 'Batido de Fresa y Leche Descremada', category: 'postre', product: 'Descremada', description: 'Refrescante batido con la ligereza de nuestra leche descremada.', image: '/images/recetas/batido-fresa.jpg' },
  { slug: 'tarta-queso', title: 'Tarta de Queso con Leche en Polvo', category: 'postre', product: 'Rosalinda', description: 'Tarta cremosa con base de galleta y relleno enriquecido con leche entera.', image: '/images/recetas/tarta-queso.jpg' },
  { slug: 'galletas-lacteas', title: 'Galletas Lácteas con Mezcla Láctea', category: 'postre', product: 'La Pecosita', description: 'Galletas crujientes y nutritivas elaboradas con nuestra mezcla láctea.', image: '/images/recetas/galletas.jpg' },
  { slug: 'pudin-chia', title: 'Pudín de Chía con Leche Descremada', category: 'postre', product: 'Descremada', description: 'Saludable y delicioso pudín de chía ligero con leche descremada.', image: '/images/recetas/pudin-chia.jpg' },
  { slug: 'torta-leche-condensada', title: 'Torta de Leche Condensada', category: 'postre', product: 'Rosalinda', description: 'Suave y húmeda torta con el toque especial de la leche entera Rosalinda.', image: '/images/recetas/torta.jpg' },
  { slug: 'mousse-chocolate', title: 'Mousse de Chocolate', category: 'postre', product: 'Rosalinda', description: 'Esponjoso mousse de chocolate con base de leche entera en polvo.', image: '/images/recetas/mousse.jpg' },
  { slug: 'leche-frita', title: 'Leche Frita', category: 'postre', product: 'Rosalinda', description: 'Tradicional receta de leche frita crujiente por fuera y cremosa por dentro.', image: '/images/recetas/leche-frita.jpg' },
  { slug: 'cremoso-caramelo', title: 'Cremoso de Caramelo', category: 'postre', product: 'Rica Lechecol', description: 'Postre cremoso de caramelo con el dulzor natural de Rica Lechecol.', image: '/images/recetas/cremoso-caramelo.jpg' },
  { slug: 'sopa-pollo', title: 'Sopa de Pollo con Leche Descremada', category: 'sal', product: 'Descremada', description: 'Reconfortante sopa de pollo enriquecida con leche descremada.', image: '/images/recetas/sopa-pollo.jpg' },
  { slug: 'salsa-pasta', title: 'Salsas Cremosas para Pastas', category: 'sal', product: 'Rosalinda', description: 'Salsas blancas cremosas y consistentes para todo tipo de pastas.', image: '/images/recetas/salsa-pasta.jpg' },
  { slug: 'panqueques-sal', title: 'Panqueques de Sal', category: 'sal', product: 'Rosalinda', description: 'Panqueques salados esponjosos ideales para desayuno o merienda.', image: '/images/recetas/panqueques.jpg' },
  { slug: 'pollo-curry', title: 'Pollo al Curry con Leche en Polvo', category: 'sal', product: 'Rosalinda', description: 'Exótico pollo al curry con salsa cremosa elaborada con leche entera.', image: '/images/recetas/pollo-curry.jpg' },
];
