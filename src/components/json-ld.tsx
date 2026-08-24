// Inyecta datos estructurados JSON-LD. El contenido proviene de la capa de
// datos controlada (lib/schema.ts), no de entrada de usuario.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
