// Enlace "Saltar al contenido" (WCAG 2.4.1 Evitar bloques). Es el primer
// elemento enfocable de la página: oculto visualmente hasta recibir foco con
// Tab, y entonces aparece arriba a la izquierda sobre el contenido.

export const MAIN_CONTENT_ID = "contenido";

export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
    >
      Saltar al contenido
    </a>
  );
}
