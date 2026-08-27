"use client";

import { useEffect } from "react";

// Mejoras progresivas de la página inmersiva. Sin JS (o con reduced-motion) la
// página se ve completa y estática: aquí solo se añade la barra de progreso de
// scroll y el reveal-on-scroll.
//
// El reveal se activa marcando el root (#exp-root) con [data-animate]; el CSS
// del módulo hace el resto. No se toca nada si el usuario prefiere menos
// movimiento.

export function ExperienceEnhancements({
  progressClassName,
}: {
  progressClassName: string;
}) {
  useEffect(() => {
    const root = document.getElementById("exp-root");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // ---- barra de progreso de scroll ----
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---- reveal on scroll (solo si se permite movimiento) ----
    let io: IntersectionObserver | undefined;
    if (root && !reduceMotion) {
      root.setAttribute("data-animate", "");
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-in", "");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      );
      root.querySelectorAll("[data-reveal]").forEach((el) => io?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      root?.removeAttribute("data-animate");
    };
  }, []);

  return (
    <div className={progressClassName} data-progress aria-hidden="true" />
  );
}
