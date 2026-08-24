import type { Workshop } from "@/lib/types";

// Talleres / experiencias (CONTENT.md §10, PRODUCT.md §5).
//
// Precio, condiciones y canal de reserva confirmados en el cuestionario del
// cliente: la reservación se hace presencialmente en el local.

export const workshops: Workshop[] = [
  {
    id: "experiencia-sensorial",
    slug: "experiencia-sensorial",
    name: "Experiencia Sensorial",
    purpose:
      "Un acercamiento al café desde su origen, procesos, tueste y preparación.",
    explores:
      "Gusto, aroma y sensaciones en boca mediante la comparación práctica de cafés para reconocer aromas, sabores y perfiles.",
    audience:
      "Quienes quieren descubrir el café de especialidad sin necesidad de ser expertos.",
    pricePerPerson: 250,
    minParticipants: 4,
    requiresReservation: true,
    reservationChannel: "En el local, de forma presencial",
    image: null,
  },
  {
    id: "ritual-del-cafe",
    slug: "ritual-del-cafe",
    name: "Ritual del Café",
    purpose:
      "Explorar cómo un mismo café cambia según cómo se prepara.",
    explores:
      "Cómo la molienda, la cantidad, el agua, la temperatura, el tiempo y el método transforman el resultado de una taza.",
    audience:
      "Quienes ya disfrutan el café y quieren experimentar con sus variables.",
    pricePerPerson: 250,
    minParticipants: 4,
    requiresReservation: true,
    reservationChannel: "En el local, de forma presencial",
    image: null,
  },
];
