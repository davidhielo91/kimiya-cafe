# DESIGN.md — Kimiya Café

**Nombre oficial de marca:** `Kimiya Café`. Cuando el nombre aparezca escrito como texto en la interfaz o piezas digitales, respetar exactamente esta forma.

## 1. Objetivo visual

Construir una experiencia web que se sienta como Kimiya: moderna, experimental, cercana, urbana y artesanal, evitando tanto la estética genérica de plantilla como una apariencia excesivamente técnica o pretenciosa.

La web debe sentirse como una cafetería real y una experiencia sensorial, no como un producto SaaS.

## 2. Principios

1. **Fotografía primero.** El producto, el espacio, el café y las personas deben sostener la identidad.
2. **Curiosidad.** La composición puede introducir pequeños contrastes y descubrimientos.
3. **Cercanía.** Lenguaje accesible, cálido y sin elitismo.
4. **Editorial + urbano.** Combinar claridad moderna con detalles artesanales y acentos urbanos.
5. **Jerarquía intencional.** No todo debe tener el mismo peso visual.
6. **Naranja como acento.** No convertir toda la interfaz en naranja.
7. **Respirar.** Espacio en blanco suficiente y secciones con ritmo.
8. **Mobile first.** La experiencia principal debe funcionar impecablemente en teléfono.

## 3. Paleta aprobada

- Naranja: `#FC4C02` — energía y curiosidad.
- Negro: `#111111` — carácter y sofisticación.
- Blanco: `#FFFFFF` — claridad.
- Gris: `#808080` — dimensión urbana.

### Uso recomendado

- negro/blanco como base dominante;
- naranja para CTA, highlights, indicadores, líneas, etiquetas y microinteracciones;
- gris para secundarios y superficies discretas;
- evitar fondos naranjas extensos salvo secciones puntuales justificadas.

## 4. Tipografía de marca

### Be Vietnam

Tipografía principal. Funciones:

- navegación;
- cuerpo;
- UI;
- títulos funcionales;
- información educativa.

### Times New Roman

Tipografía secundaria editorial/artesanal. Usar de forma selectiva para:

- palabras clave;
- citas;
- frases de marca;
- acentos editoriales;
- titulares especiales.

### Avalon Alt

Tipografía de acento urbano. Uso muy limitado:

- detalles de marca;
- etiquetas;
- elementos decorativos;
- piezas especiales.

No usar como tipografía de lectura larga.

### Implementación

Antes de producción verificar licencias y disponibilidad web de las fuentes de marca. No compartir ni redistribuir archivos de fuente sin permiso/licencia.

Si una fuente propietaria no puede servirse legalmente, definir fallback coherente sin alterar la identidad.

## 5. Dirección fotográfica

Priorizar fotografías reales de:

- fachada;
- interior;
- barra;
- espresso;
- filtrados;
- cold brew;
- café en grano;
- métodos;
- talleres;
- manos preparando café;
- comunidad/actividad cuando exista material apropiado.

Evitar stock si existen activos reales.

## 6. Componentes de dominio

Crear componentes que representen el negocio, no solo primitives genéricos:

- `CoffeeCard`;
- `CoffeeOriginCard`;
- `ProducerStory`;
- `BrewMethodCard`;
- `SensoryProfile`;
- `WorkshopCard`;
- `MenuSection`;
- `PromotionCard`;
- `LocationCard`;
- `VisitInfo`;
- `ColdBrewFeature`.

shadcn/ui puede usarse como infraestructura, no como identidad visual final.

## 7. Homepage — dirección sugerida

Orden inicial sugerido:

1. Header.
2. Hero.
3. Qué es Kimiya.
4. Cold Brew / bebida destacada.
5. Cafés que estamos preparando / café en grano.
6. Métodos de extracción.
7. Talleres y experiencias.
8. Productor a taza / origen.
9. Comunidad / promociones si visualmente funciona.
10. Visítanos.
11. Footer.

El diseño debe validarse primero en homepage antes de replicar patrones en páginas interiores.

## 8. Hero

Debe comunicar inmediatamente:

- café de especialidad;
- Morelia;
- descubrimiento/experiencia;
- visita física.

CTA principal sugerido: `Cómo llegar`.

CTA secundario posible: `Ver menú`.

No saturar el hero con muchos botones.

## 9. Ubicación / visita

`/ubicacion` debe resolver dudas reales antes de visitar.

Sección sugerida “Antes de visitarnos”:

- Wi‑Fi;
- pet friendly;
- laptop bienvenida;
- conexiones eléctricas;
- para llevar;
- sin estacionamiento propio;
- reservaciones solo para eventos;
- horarios;
- cómo llegar.

## 10. Talleres

Diseño más experiencial que académico.

Cada taller debe incluir:

- nombre;
- propósito;
- qué se explora;
- para quién es;
- duración si se confirma;
- precio: $250 MXN por persona;
- condición: reservación anticipada y mínimo 4 participantes;
- canal exacto para reservar: `TODO_CLIENT`.

No presentar los talleres como “curso profesional de barista”.

## 11. Café en grano

La página debe sentirse comercial y editorial a la vez.

Cada café puede mostrar cuando exista dato:

- nombre;
- origen;
- productor;
- tostador;
- proceso;
- perfil;
- presentación;
- precio;
- molienda;
- disponibilidad.

El modelo debe soportar rotación futura sin cambiar el layout.

## 12. Animación

Motion solo cuando aporte:

- aparición suave de contenido;
- desplazamiento editorial;
- microinteracciones;
- transición de cards o filtros;
- detalles de método/origen.

Evitar animaciones constantes, scroll-jacking y efectos que perjudiquen rendimiento.

Respetar `prefers-reduced-motion`.

## 13. Accesibilidad

- contraste WCAG;
- foco visible;
- navegación por teclado;
- alt útil;
- labels correctos;
- touch targets adecuados;
- semántica HTML;
- no depender únicamente de color;
- tipografía legible.

## 14. Responsive

Diseñar primero 360–430 px.

Evitar que la versión móvil sea solo una versión apilada sin intención.

Menú, CTA de visita y contenido local deben quedar fáciles de acceder con una mano.

## 15. Cosas a evitar

- apariencia SaaS;
- gradients decorativos genéricos;
- exceso de tarjetas idénticas;
- iconografía innecesaria;
- naranja dominante en toda la página;
- tipografía de acento en párrafos largos;
- contenido centrado en “somos expertos”;
- copy pretencioso;
- stock fotográfico cuando haya imágenes reales;
- animaciones pesadas.

## 16. Estado de activos para diseño

El cliente ya marcó como disponibles:

- logotipo en buena calidad;
- menú vigente con precios;
- fotografías del local;
- material de talleres y experiencias.

Estos activos aún deben centralizarse físicamente para incorporarlos al proyecto.

Pendientes o no confirmados como disponibles:

- fotografías de productos y bebidas;
- videos;
- piezas promocionales existentes.

### Desarrollo mientras llegan las fotografías

El desarrollo local **no se detiene**. Se permiten placeholders neutrales o imágenes generadas con IA para validar composición, jerarquía, responsive y componentes.

Para la versión pública se priorizan fotografías reales de Kimiya Café. Si se utiliza IA como apoyo por falta de algún recurso, no debe representar como real una característica inexistente del local, bebida, taller o persona. Los assets deben poder sustituirse sin modificar la estructura de los componentes.
