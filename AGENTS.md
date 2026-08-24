# AGENTS.md — Kimiya Café

## 1. Propósito

Estas reglas son obligatorias para cualquier agente, modelo o desarrollador que trabaje en el repositorio de Kimiya Café.

Antes de modificar código, leer:

1. `PRODUCT.md`;
2. `SEO.md`;
3. `CONTENT.md`;
4. `DESIGN.md`;
5. `DEPLOYMENT.md`.

## 2. Regla principal

**Nombre oficial de marca: `Kimiya Café`.** Usar exactamente esta forma en contenido público, metadata, schema y documentación; omitir acentos solo en identificadores técnicos que lo exijan, como dominios, URLs, slugs o nombres de repositorio.

**No inventar información de Kimiya Café.**

Si un dato está ausente, ambiguo, marcado como `TODO_CLIENT`, `null`, pendiente o no confirmado:

- no inferirlo;
- no completarlo con una aproximación;
- no publicarlo como verdadero;
- mantener un estado provisional interno;
- solicitar/esperar confirmación antes de producción.

## 3. Fuente de verdad

- Datos comerciales/operativos: cuestionario aprobado y `CONTENT.md`.
- Objetivos/alcance: `PRODUCT.md`.
- Keywords/rutas/SEO: `SEO.md`.
- Sistema visual/UX: `DESIGN.md`.
- Infraestructura/deploy: `DEPLOYMENT.md`.

Si existe contradicción, no improvisar. Señalarla y resolverla en la documentación antes de implementar.

## 4. Arquitectura pública de fase 1

Rutas permitidas inicialmente:

- `/`;
- `/menu`;
- `/cafe-en-grano`;
- `/talleres`;
- `/metodos`;
- `/nosotros`;
- `/ubicacion`.

No crear sin aprobación:

- `/cafe-de-especialidad`;
- `/cafes`;
- `/productores`;
- páginas por colonia;
- páginas por bebida;
- blog masivo.

## 5. Stack

- Next.js 16 App Router;
- TypeScript;
- Node 24 LTS;
- pnpm;
- Tailwind CSS;
- shadcn/ui como infraestructura;
- Motion solo cuando aporte;
- Docker;
- Coolify;
- Cloudflare.

## 6. Reglas de Next.js

- Server Components por defecto.
- Client Components solo cuando exista interacción real.
- `next/image` para imágenes cuando corresponda.
- metadata usando APIs de Next.js.
- rutas accesibles y semánticas.
- evitar fetch innecesario en cliente.
- minimizar JavaScript enviado al navegador.
- no añadir librerías sin justificación clara.

## 7. Contenido desacoplado

No hardcodear contenido comercial dentro de JSX cuando pueda vivir en modelos/archivos de contenido.

Fase 1:

```text
src/content/*
  ↓
modelos tipados
  ↓
componentes
```

Futuro opcional:

```text
CMS/panel/API/DB
  ↓
misma capa de acceso/modelos
  ↓
mismos componentes
```

Usar IDs/slugs estables.

## 8. Preparación para futuro panel

El sitio debe permitir sustituir archivos estáticos por una fuente de datos administrable sin rehacer componentes.

No crear panel, login ni base de datos en fase 1 salvo instrucción explícita posterior.

## 9. SEO

Seguir estrictamente `SEO.md`.

Obligatorio:

- una intención principal por URL;
- evitar canibalización;
- metadata única;
- canonical;
- sitemap;
- robots;
- schema;
- NAP consistente;
- buen enlazado interno;
- headings semánticos;
- alt útil;
- Core Web Vitals.

No hacer keyword stuffing.

## 10. Diseño

Seguir `DESIGN.md`.

Reglas clave:

- no apariencia SaaS;
- fotografía real como protagonista;
- naranja como acento;
- negro/blanco como base;
- Be Vietnam como principal;
- Times New Roman como contraste editorial;
- Avalon Alt solo como acento si la licencia/uso web lo permite;
- mobile first;
- accesibilidad;
- animación sutil.

## 10.1 Imágenes provisionales y generadas

- Las fotografías reales de Kimiya Café tienen prioridad para producción.
- Durante desarrollo local se permiten placeholders neutrales o imágenes generadas con IA para validar composición y layout.
- Una imagen generada no debe presentarse como fotografía documental del local, de un producto específico, de un taller real o de una persona real.
- Si se usa IA como apoyo final porque falta un activo, debe revisarse manualmente y no puede introducir hechos visuales falsos sobre el negocio.
- Mantener la referencia de imagen desacoplada del componente para poder sustituir el asset sin rehacer UI.

## 10.2 Datos internos que nunca deben renderizarse

Datos de estrategia interna como márgenes, ticket promedio, costos de infraestructura, presupuestos, accesos o decisiones operativas no deben exponerse en la interfaz pública, metadata, schema ni contenido indexable.

## 11. Accesibilidad

Mantener WCAG como criterio de diseño.

- navegación teclado;
- foco visible;
- contraste;
- labels;
- semántica;
- touch targets;
- reduced motion;
- alt descriptivo.

## 12. Rendimiento

- optimizar imágenes;
- cargar fonts de manera responsable;
- limitar dependencias;
- lazy-load cuando sea apropiado;
- evitar componentes cliente innecesarios;
- vigilar LCP, CLS, INP.

## 13. Datos sensibles

- no incluir contraseñas;
- no incluir secretos;
- no subir `.env` real;
- usar variables de entorno de Coolify;
- previews sin secretos de producción cuando no los necesiten.

## 14. QA obligatorio

Antes de considerar una tarea completa ejecutar:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Si algo falla, la tarea no está terminada.

## 15. Git

- `main` = producción;
- trabajar en `feature/*` o `fix/*`;
- Pull Request;
- CI;
- preview;
- review;
- merge.

No crear `develop` salvo decisión posterior documentada.

## 16. Roles sugeridos de modelos

- Sol: arquitectura, UX, decisiones complejas, revisión final.
- Terra: implementación, SEO técnico, componentes.
- Luna: tareas pequeñas, repetitivas, refactors y documentación simple.

Regla:

**Sol decide y revisa. Terra construye. Luna resuelve tareas pequeñas.**

## 17. TODO_CLIENT actuales

No deben bloquear infraestructura ni prototipo, pero sí producción de secciones dependientes:

- horario del sábado;
- capacidad aproximada;
- horarios de menor afluencia;
- canal exacto para reservar talleres;
- temporadas/eventos importantes;
- fotografías de productos y bebidas;
- videos disponibles;
- promociones o piezas gráficas existentes.

## 18. No hacer en fase 1

- panel de administración;
- autenticación;
- base de datos sin necesidad;
- ecommerce;
- pagos online;
- microservicios;
- Vercel Pro;
- CMS;
- complejidad arquitectónica sin beneficio.

## 19. Regla de finalización

Una implementación solo se considera terminada cuando:

- respeta PRODUCT;
- respeta SEO;
- respeta CONTENT;
- respeta DESIGN;
- pasa CI;
- no inventa datos;
- funciona en móvil;
- es accesible;
- no introduce deuda técnica innecesaria.
