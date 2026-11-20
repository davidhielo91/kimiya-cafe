// Galería "El espacio" de /nosotros (AGENTS.md §7: contenido desacoplado).
//
// FOTOGRAFÍAS REALES de Kimiya Café (nov 2026), distintas de las que ya se usan
// en otras secciones. Sin personas reconocibles. El `alt` describe solo lo que
// se ve; no inventa ingredientes ni orígenes. `width`/`height` son las
// dimensiones reales del archivo para reservar espacio y evitar CLS.

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const gallery: GalleryPhoto[] = [
  {
    id: "barra-espresso-mural",
    src: "/images/galeria/barra-espresso-mural-grafiti.webp",
    alt: "Barra de Kimiya Café con la máquina de espresso, tazas de vidrio y el mural de grafiti «Kimiya».",
    caption: "La barra y el mural con nuestro nombre.",
    width: 961,
    height: 1280,
  },
  {
    id: "frascos-etiquetas",
    src: "/images/galeria/frascos-cafe-en-grano-etiquetas-kimiya.webp",
    alt: "Tres frascos de café en grano con las distintas etiquetas de Kimiya, junto a un gotero Origami.",
    caption: "Café en grano con nuestras etiquetas.",
    width: 1280,
    height: 961,
  },
  {
    id: "brownie-mesa",
    src: "/images/galeria/brownie-red-velvet-mesa.webp",
    alt: "Brownie Red Velvet y una taza de café sobre una de las mesas de madera de Kimiya Café.",
    caption: "Brownie Red Velvet en una de nuestras mesas.",
    width: 1280,
    height: 961,
  },
  {
    id: "taza-barra",
    src: "/images/galeria/taza-cafe-filtrado-barra.webp",
    alt: "Taza de vidrio con café filtrado sobre una mesa, con la barra de Kimiya Café desenfocada al fondo.",
    caption: "Café filtrado en taza de vidrio.",
    width: 961,
    height: 1280,
  },
  {
    id: "granos-macro",
    src: "/images/galeria/granos-cafe-tostado-macro.webp",
    alt: "Granos de café tostado vistos de cerca dentro de una bandeja oscura.",
    caption: "Café tostado, visto de cerca.",
    width: 1280,
    height: 961,
  },
  {
    id: "frasco-kimiya-brewing",
    src: "/images/galeria/frasco-kimiya-brewing.webp",
    alt: "Frasco de vidrio con café en grano y la etiqueta ilustrada Kimiya Brewing.",
    caption: "Kimiya Brewing.",
    width: 961,
    height: 1280,
  },
  {
    id: "servicio-jarra",
    src: "/images/galeria/servicio-cafe-filtrado-jarra.webp",
    alt: "Café filtrado servido en jarra de vidrio y taza, junto a un frasco de Kimiya Café y un sifón al fondo.",
    caption: "Filtrado servido en jarra y taza de vidrio.",
    width: 1280,
    height: 961,
  },
  {
    id: "brownie-detalle",
    src: "/images/galeria/brownie-red-velvet-detalle.webp",
    alt: "Detalle de un Brownie Red Velvet con vetas blancas.",
    caption: "Brownie Red Velvet, en detalle.",
    width: 1280,
    height: 961,
  },
];
