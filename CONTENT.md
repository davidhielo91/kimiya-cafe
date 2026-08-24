# CONTENT.md — Kimiya Café

## 1. Fuente de verdad

Los datos comerciales y operativos deben provenir del cuestionario aprobado del negocio y de decisiones registradas en Notion.

No inventar información.

Cuando falte un dato usar `TODO_CLIENT` o `null`.

## 2. Nombre y posicionamiento

Nombre público oficial: **Kimiya Café**.

Posicionamiento:

> Kimiya Café — café de especialidad en Morelia para descubrir, aprender y experimentar.

Frase de marca:

> Kimiya: café para descubrir, comunidad para compartir y experiencias para vivir.

## 3. Historia / narrativa base

Kimiya nace de la curiosidad por entender el café más allá de una bebida cotidiana: su origen, procesos, aromas, sabores, tueste y preparación.

La marca busca acercar el café de especialidad a más personas de manera accesible, honesta y entretenida.

Principios narrativos:

- no necesitas ser experto para disfrutar buen café;
- descubrir sin pretensión;
- aprender experimentando;
- curiosidad antes que tecnicismo;
- respeto por el café, origen y productor;
- comunidad y experiencias compartidas.

## 4. Estadísticas externas — NO PUBLICAR SIN FUENTE

El cuestionario contiene cifras sobre consumo de café en México:

- 68%;
- 97%;
- 90%;
- 29%;
- promedio aproximado de 5 tazas por semana.

Estas cifras no deben pasar al sitio hasta verificar una fuente actual y confiable.

## 5. Valores de marca

- Curiosidad.
- Cercanía y cero pretensión.
- Bienestar y estilo de vida activo.
- Comunidad y conexión.
- Respeto por el café y su origen.

## 6. Menú — estructura de contenido

No escribir el menú directamente dentro de componentes JSX.

Modelo sugerido:

```ts
type MenuItem = {
  id: string
  slug?: string
  name: string
  description: string
  category: string
  price?: number | null
  available?: boolean
  featured?: boolean
  image?: string | null
  tags?: string[]
}
```

### Categorías

- Espresso Bar — calientes.
- Espresso Bar — frías.
- Brew Bar.
- Cold Brew.
- Talleres / experiencias.
- Alimentos.
- Café en grano.

### Precios

El cliente confirmó que existe un menú actual con precios. Los valores deben incorporarse desde ese material antes de publicar `/menu`.

No publicar precios inferidos ni completar precios que no hayan sido transcritos desde el menú vigente.

## 7. Café en grano

Contenido confirmado:

- selección rotativa;
- distintos orígenes, variedades y procesos;
- procesos lavado, honey, natural y experimentales según disponibilidad;
- presentación habitual 250 g;
- rango aproximado de $150–$500 MXN según café;
- molienda según método;
- mezcla de espresso de casa también disponible en 1 kg, precio pendiente.

### Tostadores / casas registradas

- Sibarita;
- Café Cortés;
- Umbral;
- Chabela de Mis Amores;
- Mutante Tostadores;
- Pólvora Fábrica de Cafés Especiales.

### Productores registrados

- Cruz José Argüello Enríquez — La Concordia, Chiapas;
- Jesús Carlos Cadena Valdivia — Veracruz;
- Emmanuel Rincón Vázquez — Veracruz;
- Felipe Hernández — Compostela, Nayarit;
- Fermín Temoxtle — Puebla;
- Belén Arias — Puebla;
- Efraín García López — Oaxaca.

La disponibilidad es rotativa. No afirmar que todos están disponibles simultáneamente.

Frecuencia: no existe una temporada fija; el negocio tiene la intención de incorporar nuevas opciones aproximadamente cada mes. No prometer una rotación mensual exacta si no está confirmada para un periodo específico.

## 8. Métodos

Métodos confirmados o incluidos en menú:

- V60;
- Chemex;
- Kalita;
- AeroPress;
- sifón japonés;
- Switch;
- espresso;
- Origami;
- prensa francesa;
- flash brew;
- cold brew.

Cuando exista discrepancia entre “métodos confirmados” y menú actual, priorizar el menú vigente entregado por el cliente antes de publicación.

## 9. Cold Brew

Dar protagonismo editorial y visual.

Variantes registradas:

- clásico;
- tonic;
- naranja;
- jamaica;
- vainilla;
- avellana;
- Boost Cold Brew.

Es un producto prioritario, de buen margen y con señal de búsqueda relevante.

## 10. Talleres

### Experiencia Sensorial

Introducción al café desde origen, variedades, procesos, tueste y preparación. Explora gusto, aroma y sensaciones en boca mediante comparación práctica de cafés.

Precio: $250 MXN por persona.

Condiciones: reservación anticipada y mínimo de 4 participantes.

Canal exacto de reserva: presencialmente en el local.

### Ritual del Café

Explora cómo un mismo café cambia al modificar molienda, cantidad, agua, temperatura, tiempo y método de preparación.

Precio: $250 MXN por persona.

Condiciones: reservación anticipada y mínimo de 4 participantes.

Canal exacto de reserva: presencialmente en el local.

## 11. Promociones

### KILÓMETROS

1 km recorrido equivale a 1% de descuento durante las siguientes 24 horas.

### Lealtad

6 visitas registradas → 7.ª visita con bebida gratis.

### Cumpleaños

Bebida de regalo presentando identificación oficial que compruebe la fecha.

## 12. Operación / ubicación

Dirección:

Blvd. García de León 1201-A, Chapultepec Oriente, CP 58260, Morelia, Michoacán.

Teléfono:

4436971306

Horario:

- lunes: 08:00–20:00;
- martes: 08:00–20:00;
- miércoles: 08:00–20:00;
- jueves: 08:00–20:00;
- viernes: 08:00–20:00;
- sábado: `TODO_CLIENT`;
- domingo: 08:00–17:00.

Atributos:

- para llevar: sí;
- delivery: no actualmente;
- efectivo: sí;
- transferencia: sí;
- tarjeta: sí;
- pet friendly: sí, con correa;
- Wi‑Fi: sí;
- laptop: bienvenida;
- conexiones eléctricas: sí;
- estacionamiento propio: no;
- reservaciones: solo eventos especiales;
- cuatro mesas;
- barra con cinco bancos;
- capacidad sentada total: 20 personas.

## 13. Audiencia

Público prioritario:

- 20–40 años principalmente;
- profesionales;
- parejas y grupos de amigos;
- personas interesadas en café de especialidad;
- personas que desean descubrirlo por primera vez;
- comunidad activa: runners, ciclistas, patinadores, senderistas;
- personas interesadas en bienestar, experiencias, naturaleza, comida y aprendizaje.

## 14. Competencia reportada por el cliente

- Extraído;
- Arguende;
- Cafelito;
- Café Europa.

No usar esta lista como ranking objetivo; es la percepción del cliente.

## 15. Materiales visuales

El cliente marcó como disponibles:

- logotipo en buena calidad;
- menú actual con precios;
- fotografías del local;
- material de talleres y experiencias.

Aún pendientes / no confirmados como disponibles:

- fotografías de productos y bebidas;
- videos;
- promociones o piezas gráficas existentes.

Los activos marcados como disponibles por el cliente todavía deben centralizarse físicamente en Drive/proyecto antes de cerrar el diseño final y publicar.

### Política de imágenes

- Priorizar archivos originales del dispositivo/cámara y fotografías reales de Kimiya Café.
- Evitar descargar desde redes sociales o reenviar por mensajería cuando existe el archivo original.
- Durante desarrollo local se permiten placeholders o imágenes generadas con IA para avanzar sin bloquear layouts.
- La IA puede apoyar cuando falte un recurso, pero no debe inventar visualmente características del local, productos, talleres o personas y presentarlas como hechos reales.
- Sustituir fácilmente assets provisionales por fotografías reales mediante referencias desacopladas del componente.

### Clasificación de publicación

**Nunca público:** márgenes, ticket promedio, presupuestos, costos técnicos, accesos, estrategia interna y otros datos administrativos.

**Verificar antes de publicar:** estadísticas externas sobre consumo de café, condiciones promocionales ambiguas y afirmaciones fuertes como contenido de cafeína cuando no exista respaldo.

## 16. Datos del cliente — estado

Confirmados (cuestionario Notion, 24 ago 2026): capacidad 20 personas; reserva de talleres presencial en el local; fundación 2026; fechas clave (aniversario 20 mayo, Día Internacional del Café 1 octubre); Instagram y ficha de Google Business (CID).

Pendientes esenciales (no inventar):

- horario del sábado;
- precios individuales del menú;
- aclaración de horarios de menor afluencia;
- fotografías de productos y bebidas;
- videos y piezas gráficas promocionales.
