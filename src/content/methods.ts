import type { BrewMethod } from "@/lib/types";

// Métodos de extracción del Brew Bar (CONTENT.md §8, SEO.md §10).
//
// Descripciones TRANSCRITAS del cuestionario del cliente (P10). No se inventan:
// AeroPress se confirma como método disponible (P16) pero el cliente no entregó
// descripción, por lo que se deja sin texto en lugar de fabricarlo.

export const methods: BrewMethod[] = [
  {
    id: "switch",
    slug: "switch",
    name: "Switch",
    description: "Filtrado preparado con el café de la casa.",
    image: null,
  },
  {
    id: "v60",
    slug: "v60",
    name: "V60",
    description:
      "Filtrado manual que permite explorar con claridad los aromas y sabores del café.",
    image: null,
  },
  {
    id: "kalita",
    slug: "kalita",
    name: "Kalita",
    description:
      "Filtrado de extracción uniforme, con una taza equilibrada y limpia.",
    image: null,
  },
  {
    id: "origami",
    slug: "origami",
    name: "Origami",
    description:
      "Filtrado versátil que permite experimentar con diferentes perfiles de extracción.",
    image: null,
  },
  {
    id: "sifon-japones",
    slug: "sifon-japones",
    name: "Sifón Japonés",
    description:
      "Método de vacío que combina precisión y espectáculo para obtener una taza aromática y limpia.",
    image: null,
  },
  {
    id: "prensa-francesa",
    slug: "prensa-francesa",
    name: "Prensa Francesa",
    description:
      "Café de inmersión con mayor cuerpo y una sensación más intensa en boca.",
    image: null,
  },
  {
    id: "chemex",
    slug: "chemex",
    name: "Chemex",
    description:
      "Filtrado de cuerpo ligero y taza limpia, ideal para compartir.",
    image: null,
  },
  {
    id: "flash-brew",
    slug: "flash-brew",
    name: "Flash Brew",
    description:
      "Café filtrado directamente sobre hielo para conservar sus aromas y ofrecer una bebida fresca.",
    image: null,
  },
  {
    id: "cold-brew",
    slug: "cold-brew",
    name: "Cold Brew",
    description:
      "Café extraído en frío durante varias horas, refrescante y con un alto contenido de cafeína.",
    image: null,
  },
  {
    // Confirmado como disponible (cuestionario P16); sin descripción del cliente.
    id: "aeropress",
    slug: "aeropress",
    name: "AeroPress",
    description: "",
    image: null,
  },
];
