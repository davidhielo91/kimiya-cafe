# DEPLOYMENT.md — Kimiya Café

**Marca pública:** `Kimiya Café`. Los identificadores técnicos (`kimiyacafe.com.mx`, `kimiyacafe.com`, repositorio y slugs) permanecen sin acentos por compatibilidad técnica.

## 1. Arquitectura de despliegue

```text
Usuario
  ↓
Cloudflare
  ↓
kimiyacafe.com.mx
  ↓
Coolify / reverse proxy
  ↓
Docker
  ↓
Next.js 16
```

## 2. Stack de producción

- Next.js 16 App Router;
- TypeScript;
- Node.js 24 LTS;
- pnpm;
- Tailwind CSS;
- shadcn/ui como base;
- Dockerfile propio;
- VPS compartido;
- Coolify;
- Cloudflare;
- GitHub privado.

## 3. Dominios

### Principal

`kimiyacafe.com.mx`

### Defensivo

`kimiyacafe.com` → redirección permanente al `.com.mx`.

Antes de compra revisar precio de renovación, impuestos y registrador.

## 4. Git / ramas

- `main`: producción, protegida;
- `feature/*`: nuevas funcionalidades;
- `fix/*`: correcciones.

No crear `develop` inicialmente.

Flujo:

```text
feature/*
  ↓
Pull Request
  ↓
CI + Preview
  ↓
Review
  ↓
Merge
  ↓
main
  ↓
Coolify auto deploy
  ↓
Producción
```

## 5. CI mínimo

Cada PR debe pasar:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Más adelante:

- E2E;
- Lighthouse;
- enlaces;
- accesibilidad.

No hacer merge con build, TypeScript o tests fallando.

## 6. Docker

Usar `output: 'standalone'`.

Objetivos:

- multi-stage;
- imagen de producción mínima;
- usuario no root;
- puerto 3000;
- health check;
- dependencias mínimas.

## 7. Coolify

Conectar mediante GitHub App.

Producción:

`main` → `kimiyacafe.com.mx`

Preview sugerido:

`<pr>.preview.kimiyacafe.com.mx`

Cloudflare:

`*.preview.kimiyacafe.com.mx`

No mantener previews innecesarios activos por consumo de VPS.

## 8. Cloudflare

Usar para:

- DNS;
- proxy;
- SSL/TLS;
- protección básica;
- caché de assets donde corresponda.

No aplicar caché agresiva a HTML sin validar headers de Next.js.

## 9. Variables de entorno

Reglas:

- secretos solo en Coolify;
- nunca subir `.env` con credenciales;
- previews sin secretos de producción salvo necesidad explícita;
- documentar variables requeridas sin incluir valores secretos.

## 10. Seguridad

- `main` protegida;
- Dependabot o equivalente;
- dependencias mínimas;
- headers de seguridad;
- health checks;
- backups de VPS/Coolify;
- Cloudflare frente al origen;
- no exponer paneles administrativos innecesariamente.

## 11. SEO técnico antes de producción

Validar:

- metadata;
- canonical;
- sitemap;
- robots;
- Open Graph;
- schema;
- NAP;
- horario completo;
- nombre público exacto;
- alt de imágenes;
- redirecciones;
- 404;
- enlaces internos;
- propiedad y sitemap verificados en Google Search Console.

## 12. QA pre-lanzamiento

- responsive móvil/tablet/desktop;
- navegación por teclado;
- contraste;
- Lighthouse;
- Core Web Vitals;
- imágenes optimizadas;
- errores de consola;
- formularios si existen;
- enlaces externos;
- mapa/ubicación;
- teléfono;
- cómo llegar;
- contenido pendiente eliminado o marcado apropiadamente.

No publicar placeholders `TODO_CLIENT` como texto visible.

## 13. Analítica y Search Console

Google Search Console es requisito gratuito de lanzamiento para verificar indexación, sitemap, cobertura y consultas orgánicas.

Implementar además una solución ligera de analítica y medir:

- tráfico orgánico;
- visitas a menú;
- talleres;
- café en grano;
- clics en cómo llegar;
- clics de contacto/teléfono.

No cargar scripts publicitarios sin estrategia de campañas.

## 14. Rollback

El despliegue debe poder revertirse a una versión anterior estable desde Git/Coolify.

Antes de cambios críticos:

- verificar backup;
- confirmar commit/tag de versión estable;
- probar preview.

## 15. Futuro CMS/panel

No se despliega en fase 1.

Si se incorpora:

- será área administrativa separada;
- requerirá autenticación;
- deberá respetar el mismo modelo de contenido;
- el frontend público no debe rehacerse;
- reevaluar base de datos, almacenamiento y backups en esa fase.
