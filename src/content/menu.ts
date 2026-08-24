import type { MenuItem } from "@/lib/types";

// Menú de Kimiya Café (CONTENT.md §6). Bebidas, descripciones y categorías
// transcritas del cuestionario aprobado del cliente.
//
// Los PRECIOS están en `null` a propósito: el cuestionario confirma que existe
// un menú vigente con precios, pero esos valores todavía no se han transcrito
// desde ese material. No inferir precios (AGENTS.md §2, CONTENT.md §6).

export const menu: MenuItem[] = [
  // --- Espresso Bar · calientes ---
  m("espresso", "Espresso", "espresso-bar-caliente", "Café concentrado preparado a presión, intenso y aromático."),
  m("ristretto", "Ristretto", "espresso-bar-caliente", "Espresso más corto (30 ml), concentrado y de cuerpo intenso."),
  m("lungo", "Lungo", "espresso-bar-caliente", "Espresso extraído con más agua (90 ml), más largo y ligero."),
  m("americano", "Americano", "espresso-bar-caliente", "Espresso diluido con agua caliente, suave y de mayor volumen."),
  m("espresso-macchiato", "Espresso Macchiato", "espresso-bar-caliente", "Espresso con un toque de leche espumada que suaviza su intensidad."),
  m("cortado", "Cortado", "espresso-bar-caliente", "Espresso con una pequeña cantidad de leche que equilibra su intensidad."),
  m("flat-white", "Flat White", "espresso-bar-caliente", "Espresso con leche texturizada, cremoso y con sabor marcado a café."),
  m("cappuccino", "Cappuccino", "espresso-bar-caliente", "Espresso con leche texturizada y una capa de espuma cremosa."),
  m("latte", "Latte", "espresso-bar-caliente", "Espresso con más leche texturizada, suave y cremoso."),
  m("latte-avellana", "Latte de avellana", "espresso-bar-caliente", "Latte con un toque de avellana: dulce, cremoso y aromático."),
  m("mocha", "Mocha", "espresso-bar-caliente", "Espresso, leche y chocolate obscuro: dulce, intenso y achocolatado."),
  m("mocha-blanco", "Mocha blanco", "espresso-bar-caliente", "Espresso, leche y chocolate blanco: dulce, intenso y achocolatado."),
  m("dirty-chai", "Dirty Chai", "espresso-bar-caliente", "Chai especiado con espresso y leche: especias, dulzor y café."),

  // --- Espresso Bar · frías ---
  m("long-black", "Long Black", "espresso-bar-frio", "Espresso sobre agua fría y hielo, refrescante y de sabor intenso."),
  m("aerocano", "Aerocano", "espresso-bar-frio", "Espresso con agua fría y hielo, aireado para una textura cremosa."),
  m("espresso-tonic", "Espresso Tonic", "espresso-bar-frio", "Espresso sobre agua tónica y hielo: refrescante, cítrico y ligeramente amargo."),
  m("espresso-tonic-naranja", "Espresso Tonic Naranja", "espresso-bar-frio", "Espresso, tónica, jugo de naranja y hielo: cítrico y refrescante."),
  m("espresso-tonic-limon", "Espresso Tonic Limón", "espresso-bar-frio", "Espresso, tónica, jugo de limón y hielo: cítrico y refrescante."),
  m("espresso-sunrise", "Espresso Sunrise", "espresso-bar-frio", "Espresso con una preparación frutal y hielo: fresco y de contraste."),
  m("frappuccino", "Frappuccino", "espresso-bar-frio", "Bebida fría y cremosa de café con hielo y textura espesa."),
  m("frappe-chocolate", "Frappé de chocolate", "espresso-bar-frio", "Leche, chocolate (obscuro o blanco) y hielo: cremoso y espumoso."),
  m("frappe-chai", "Frappé de Chai", "espresso-bar-frio", "Leche, chai especiado y hielo: cremoso y espumoso."),
  m("frappe-matcha", "Frappé de Matcha", "espresso-bar-frio", "Leche, matcha y hielo: cremoso y espumoso."),
  m("experimental-frio", "Experimental", "espresso-bar-frio", "Preparación de temporada para explorar nuevas combinaciones."),

  // --- Cold Brew (producto prioritario, protagonismo editorial) ---
  m("cold-brew-clasico", "Cold Brew Clásico", "cold-brew", "Café extraído en frío durante varias horas, refrescante y con alto contenido de cafeína.", { featured: true }),
  m("cold-brew-tonic", "Cold Brew Tonic", "cold-brew", "Cold brew y tónica para una bebida fresca y vibrante."),
  m("cold-brew-naranja", "Cold Brew Naranja", "cold-brew", "Cold brew, jugo de naranja y hielo: cítrico y equilibrado."),
  m("cold-brew-jamaica", "Cold Brew Jamaica", "cold-brew", "Cold brew, jamaica y hielo: floral y ligeramente ácido."),
  m("cold-brew-vainilla", "Cold Brew Vainilla", "cold-brew", "Cold brew, leche, vainilla y hielo: cremoso y suave."),
  m("cold-brew-avellana", "Cold Brew Avellana", "cold-brew", "Cold brew, leche, avellana y hielo: cremoso y suave."),
  m("boost-cold-brew", "Boost Cold Brew", "cold-brew", "Cold brew + boost: refrescante y cargado de cafeína.", { featured: true }),

  // --- Alimentos (sujetos a disponibilidad) ---
  m("brownie-chocolate", "Brownie de chocolate", "alimentos", "Servido frío o caliente y bañado con chocolate líquido. Intenso y de textura irresistible."),
  m("brownie-red-velvet", "Brownie Red Velvet", "alimentos", "Servido frío: suave, dulce y con notas de cacao."),
  m("galletas-chocolate", "Galletas de chocolate", "alimentos", "Tipo brownie, con topping a elegir: Oreo, Nutella, mazapán o Biscoff."),
];

/** Helper para declarar ítems con los defaults del modelo. */
function m(
  id: string,
  name: string,
  category: MenuItem["category"],
  description: string,
  overrides: Partial<MenuItem> = {},
): MenuItem {
  return {
    id,
    name,
    description,
    category,
    price: null,
    available: true,
    featured: false,
    image: null,
    tags: [],
    ...overrides,
  };
}

export function menuByCategory(category: MenuItem["category"]): MenuItem[] {
  return menu.filter((item) => item.category === category);
}
