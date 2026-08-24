import type { ReactNode } from "react";

// Contenedor de ancho máximo consistente. Mobile first (DESIGN.md §14).

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</div>
  );
}
