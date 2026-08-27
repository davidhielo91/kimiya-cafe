import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { courseJsonLd, faqJsonLd, type FaqItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { workshops } from "@/content/workshops";
import { formatPrice } from "@/lib/format";
import {
  experienciaSensorial as c,
  expImages,
} from "@/content/experiencia-sensorial";
import { ExperienceEnhancements } from "./enhancements";
import styles from "./experiencia-sensorial.module.css";

const PATH = "/talleres/experiencia-sensorial";

export const metadata: Metadata = {
  title: "Experiencia Sensorial · Taller de cata de café en Morelia",
  description:
    "Taller de cata para descubrir el café desde su origen, procesos, tueste y percepción. Aprende a reconocer aromas y sabores en Kimiya Café, Morelia. $250 MXN por persona, grupos desde 4.",
  alternates: { canonical: PATH },
};

// Taller de referencia (precio, mínimo, canal) desde la fuente de datos.
const workshop = workshops.find((w) => w.slug === "experiencia-sensorial")!;

const faqs: FaqItem[] = [
  {
    q: "¿Necesito saber de café para tomar el taller?",
    a: "No. La Experiencia Sensorial está pensada para descubrir y aprender sin necesidad de ser experto: basta con curiosidad.",
  },
  {
    q: "¿Cuánto cuesta la Experiencia Sensorial?",
    a: `${formatPrice(workshop.pricePerPerson)} MXN por persona.`,
  },
  {
    q: "¿Cuántas personas se necesitan?",
    a: `Un mínimo de ${workshop.minParticipants} participantes.`,
  },
  {
    q: "¿Cómo reservo?",
    a: "La reservación se hace directamente en el local, de forma anticipada.",
  },
  {
    q: "¿Qué haremos durante el taller?",
    a: "Un recorrido por el origen, el proceso y el tueste del café; un análisis de los cinco gustos básicos; y una cata comparativa (cupping) para nombrar aromas y sabores con la rueda de sabores.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Talleres",
      item: `${siteConfig.url}/talleres`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: workshop.name,
      item: `${siteConfig.url}${PATH}`,
    },
  ],
};

export default function ExperienciaSensorialPage() {
  const a = siteConfig.address;

  return (
    <div id="exp-root" className={styles.page}>
      <JsonLd data={courseJsonLd(workshop, PATH)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd} />

      <ExperienceEnhancements progressClassName={styles.progress} />

      {/* HERO */}
      <header className={styles.hero}>
        <Image
          src={expImages.hero.src}
          alt={expImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className={styles.bgimg}
        />
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <p className={styles.eyebrow} data-reveal>
            {c.hero.eyebrow}
          </p>
          <h1 className={`${styles.heroTitle} ${styles.d1}`} data-reveal>
            <span className={styles.line}>
              <span className={styles.s}>{c.hero.titleTop}</span>
            </span>
            <span className={styles.line}>
              <span className={styles.k}>{c.hero.titleBottom}</span>
            </span>
          </h1>
          <p
            className={`${styles.lead} ${styles.heroLead} ${styles.d2}`}
            data-reveal
          >
            {c.hero.lead}
          </p>
          <div className={`${styles.heroActions} ${styles.d3}`} data-reveal>
            <a href="#reservar" className={`${styles.btn} ${styles.btnPrimary}`}>
              Reservar mi lugar
            </a>
            <a href="#programa" className={`${styles.btn} ${styles.btnGhost}`}>
              Ver el programa
            </a>
          </div>
          <div className={`${styles.heroMeta} ${styles.d4}`} data-reveal>
            {c.hero.meta.map((m) => (
              <span key={m.strong}>
                <b>{m.strong}</b> {m.rest}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.bar} />
          Desliza
        </div>
      </header>

      {/* HOOK */}
      <section className={styles.hook}>
        <div className={styles.wrap}>
          <p className={styles.big} data-reveal>
            {c.hook.question} <em>{c.hook.questionEmphasis}</em>
          </p>
          <p className={`${styles.hookSub} ${styles.d1}`} data-reveal>
            {c.hook.sub}
          </p>
          <p className={`${styles.hookBody} ${styles.d2}`} data-reveal>
            {c.hook.body}
          </p>
          <div className={styles.stats}>
            {c.hook.stats.map((s) => (
              <div key={s.n} className={styles.stat} data-reveal>
                <div className={styles.statN}>{s.n}</div>
                <div className={styles.statL}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className={styles.block} id="programa">
        <div className={styles.wrap}>
          <div className={styles.progHead}>
            <p className={styles.eyebrow} data-reveal>
              {c.programa.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.s}>Pro</span>
                <span className={styles.k}>grama</span>
              </span>
            </h2>
            <p className={`${styles.lead} ${styles.d2}`} data-reveal>
              {c.programa.lead}
            </p>
          </div>
          <div className={styles.steps}>
            {c.programa.steps.map((step) => (
              <div key={step.n} className={styles.step} data-reveal>
                <div className={styles.stepNum}>{step.n}</div>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENERALIDADES */}
      <section className={`${styles.block} ${styles.blockAlt}`}>
        <div className={`${styles.wrap} ${styles.grid2}`}>
          <div>
            <p className={styles.eyebrow} data-reveal>
              {c.generalidades.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.s}>General</span>
                <span className={styles.k}>idades</span>
              </span>
            </h2>
            <p className={`${styles.lead} ${styles.d2}`} data-reveal>
              {c.generalidades.lead}
            </p>
          </div>
          <div className={styles.pillars}>
            {c.generalidades.pillars.map((p) => (
              <div key={p.title} className={styles.pillar} data-reveal>
                <span className={styles.dot} />
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAFEINA */}
      <section className={styles.block}>
        <div className={`${styles.wrap} ${styles.grid2}`}>
          <div>
            <p className={styles.eyebrow} data-reveal>
              {c.cafeina.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.k}>Cafe</span>
                <span className={styles.s}>ína</span>
              </span>
            </h2>
            <p className={`${styles.lead} ${styles.d2}`} data-reveal>
              {c.cafeina.lead}
            </p>
            <div className={styles.pillars} style={{ marginTop: 34 }}>
              {c.cafeina.pillars.map((p) => (
                <div key={p.title} className={styles.pillar} data-reveal>
                  <span className={styles.dot} />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal>
            <Image
              src={expImages.molecula.src}
              alt={expImages.molecula.alt}
              width={1254}
              height={1254}
              sizes="(max-width: 860px) 80vw, 40vw"
              className={styles.mol}
            />
          </div>
        </div>
      </section>

      {/* CALIDAD */}
      <section className={`${styles.block} ${styles.blockAlt}`}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow} data-reveal>
            {c.calidad.eyebrow}
          </p>
          <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
            <span className={styles.split}>
              <span className={styles.s}>Cali</span>
              <span className={styles.k}>dad</span>
            </span>
          </h2>
          <p className={`${styles.lead} ${styles.d2}`} data-reveal>
            {c.calidad.lead}
          </p>
          <div className={styles.chips}>
            {c.calidad.chips.map((chip) => (
              <span key={chip} className={styles.chip} data-reveal>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRAZABILIDAD */}
      <section className={styles.block}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow} data-reveal>
            {c.trazabilidad.eyebrow}
          </p>
          <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
            <span className={styles.k} style={{ fontWeight: 800 }}>
              TRAZABILIDAD
            </span>
          </h2>
          <p className={`${styles.lead} ${styles.d2}`} data-reveal>
            {c.trazabilidad.lead}
          </p>
          <div className={styles.rail}>
            {c.trazabilidad.rail.map((r) => (
              <div key={r.idx} className={styles.railItem} data-reveal>
                <span className={styles.railIdx}>{r.idx}</span>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTIVO */}
      <section className={`${styles.imgsec} ${styles.left}`}>
        <Image
          src={expImages.cultivo.src}
          alt={expImages.cultivo.alt}
          fill
          sizes="100vw"
          className={styles.bgimg}
        />
        <div className={styles.wrap}>
          <div className={styles.panel}>
            <p className={styles.eyebrow} data-reveal>
              {c.cultivo.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.k}>Cul</span>
                <span className={styles.s}>tivo</span>
              </span>
            </h2>
            <p className={`${styles.lead} ${styles.d2}`} data-reveal>
              {c.cultivo.lead}
            </p>
            <div className={styles.miniList}>
              {c.cultivo.tags.map((tag) => (
                <span key={tag} className={styles.tag} data-reveal>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={`${styles.imgsec} ${styles.center}`}>
        <Image
          src={expImages.proceso.src}
          alt={expImages.proceso.alt}
          fill
          sizes="100vw"
          className={styles.bgimg}
        />
        <div className={styles.wrap}>
          <div className={styles.panel} style={{ maxWidth: 820, margin: "0 auto" }}>
            <p className={styles.eyebrow} data-reveal>
              {c.proceso.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.k} style={{ fontWeight: 800 }}>
                PROCESO
              </span>
            </h2>
            <p
              className={`${styles.lead} ${styles.d2}`}
              style={{ margin: "0 auto" }}
              data-reveal
            >
              {c.proceso.lead}
            </p>
            <div className={styles.trio}>
              {c.proceso.trio.map((t) => (
                <div key={t.title} className={styles.trioItem} data-reveal>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TUESTE */}
      <section className={`${styles.imgsec} ${styles.right}`}>
        <Image
          src={expImages.tueste.src}
          alt={expImages.tueste.alt}
          fill
          sizes="100vw"
          className={styles.bgimg}
        />
        <div className={styles.wrap}>
          <div className={styles.panel}>
            <p className={styles.eyebrow} data-reveal>
              {c.tueste.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.k}>Tu</span>
                <span className={styles.s}>este</span>
              </span>
            </h2>
            <p
              className={`${styles.lead} ${styles.d2}`}
              style={{ marginLeft: "auto" }}
              data-reveal
            >
              {c.tueste.lead}
            </p>
            <div className={styles.roast}>
              {c.tueste.roast.map((r) => (
                <div key={r.name} className={styles.roastRow} data-reveal>
                  <span
                    className={styles.swatch}
                    style={{ background: r.color }}
                  />
                  <span className={styles.nm}>{r.name}</span>
                  <span className={styles.vl}>{r.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.agtron} data-reveal>
              {c.tueste.note}
            </p>
          </div>
        </div>
      </section>

      {/* CAFE DE ESPECIALIDAD / SCA */}
      <section className={styles.block}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow} data-reveal>
            {c.sca.eyebrow}
          </p>
          <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
            <span className={styles.split}>
              <span className={styles.s}>Café</span>{" "}
              <span className={styles.k}>de especialidad</span>
            </span>
          </h2>
          <p className={`${styles.lead} ${styles.d2}`} data-reveal>
            {c.sca.lead}
          </p>
          <div className={styles.scaBadges} data-reveal>
            {c.sca.badges.map((b) => (
              <div key={b.caption} className={styles.scaBadge}>
                <span className={styles.b}>{b.big}</span>
                <span className={styles.c}>{b.caption}</span>
              </div>
            ))}
          </div>
          <div
            className={styles.grid2}
            style={{ marginTop: 64, alignItems: "start" }}
          >
            <div>
              <p
                className={`${styles.eyebrow} ${styles.eyebrowMuted}`}
                data-reveal
              >
                Lo que defiende
              </p>
              <div className={styles.pillars}>
                {c.sca.defiende.map((d) => (
                  <div key={d} className={styles.pillar} data-reveal>
                    <span className={styles.dot} />
                    <div>
                      <h4>{d}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                className={`${styles.eyebrow} ${styles.eyebrowMuted}`}
                data-reveal
              >
                Criterios SCA · puntaje
              </p>
              <div className={styles.scaScale}>
                {c.sca.scale.map((row) => (
                  <div
                    key={row.range}
                    className={`${styles.scaRow} ${
                      row.dim ? styles.scaRowDim : ""
                    }`}
                    data-reveal
                  >
                    <span className={styles.rng}>{row.range}</span>
                    <span className={styles.lb}>{row.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.agtron} data-reveal>
                {c.sca.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A QUE SABE / GUSTOS */}
      <section className={`${styles.hook} ${styles.hookSoft}`}>
        <div className={styles.wrap}>
          <p
            className={styles.eyebrow}
            style={{ textAlign: "center" }}
            data-reveal
          >
            {c.gustoIntro.eyebrow}
          </p>
          <p className={`${styles.big} ${styles.d1}`} data-reveal>
            {c.gustoIntro.question} <em>{c.gustoIntro.questionEmphasis}</em>
          </p>
          <p className={`${styles.hookBody} ${styles.d2}`} data-reveal>
            {c.gustoIntro.body}
          </p>
          <div className={styles.gustoList}>
            {c.gustoIntro.list.map((g) => (
              <span key={g} className={styles.g} data-reveal>
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TASTES */}
      {c.tastes.map((taste) => {
        const img = expImages[taste.image];
        const sideClass = taste.side === "right" ? styles.right : styles.left;
        return (
          <section
            key={taste.name}
            className={`${styles.taste} ${sideClass}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className={styles.bgimg}
            />
            <div className={styles.wrap}>
              <div className={styles.panel}>
                <p className={styles.eyebrow} data-reveal>
                  El gusto · {taste.index}
                </p>
                <h3 className={`${styles.tasteTitle} ${styles.d1}`} data-reveal>
                  {taste.name}
                </h3>
                <p className={`${styles.desc} ${styles.d2}`} data-reveal>
                  {taste.desc}
                </p>
                <div className={styles.notes} data-reveal>
                  {taste.notes.map((note) => (
                    <span
                      key={note.label}
                      className={`${styles.note} ${
                        note.key ? styles.noteKey : ""
                      }`}
                    >
                      {note.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CUPPING */}
      <section className={styles.cupping}>
        <div className={`${styles.wrap} ${styles.cupGrid}`}>
          <div>
            <p className={styles.eyebrow} data-reveal>
              {c.cupping.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.s}>Cupping</span>
              </span>
            </h2>
            <p className={`${styles.lead} ${styles.d2}`} data-reveal>
              {c.cupping.lead}
            </p>
            <p
              className={`${styles.lead} ${styles.d3}`}
              style={{ marginTop: 18, fontSize: "1rem" }}
              data-reveal
            >
              {c.cupping.lead2}
            </p>
          </div>
          <div className={styles.wheelWrap} data-reveal>
            <Image
              src={expImages.rueda.src}
              alt={expImages.rueda.alt}
              width={1254}
              height={1254}
              sizes="(max-width: 860px) 86vw, 440px"
              className={styles.wheel}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.final} id="reservar">
        <Image
          src={expImages.cta.src}
          alt={expImages.cta.alt}
          fill
          sizes="100vw"
          className={styles.bgimg}
        />
        <div className={styles.wrap}>
          <div className={styles.panel}>
            <p className={styles.eyebrow} data-reveal>
              {c.final.eyebrow}
            </p>
            <h2 className={`${styles.title} ${styles.d1}`} data-reveal>
              <span className={styles.split}>
                <span className={styles.s}>{c.final.titleTop}</span>{" "}
                <span className={styles.k}>{c.final.titleBottom}</span>
              </span>
            </h2>
            <div className={styles.price} data-reveal>
              <span className={styles.priceAmt}>
                {formatPrice(workshop.pricePerPerson)}
              </span>
              <span className={styles.pricePer}>MXN por persona</span>
            </div>
            <div className={styles.details} data-reveal>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Reservación</span>
                <span className={styles.detailVal}>
                  Anticipada
                  <small>Se aparta en persona, en el local.</small>
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Grupo</span>
                <span className={styles.detailVal}>
                  Mínimo {workshop.minParticipants} personas
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Dónde</span>
                <span className={styles.detailVal}>
                  {a.street}
                  <small>
                    {a.neighborhood}, {a.city}, {a.state}
                  </small>
                </span>
              </div>
            </div>
            <div className={styles.finalActions} data-reveal>
              <a
                href={`tel:+52${siteConfig.contact.phone}`}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Llamar: {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnGhost}`}
              >
                Cómo llegar
              </a>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link
                href="/talleres"
                style={{ color: "var(--paper-faint)", fontSize: "0.9rem" }}
              >
                ← Ver todos los talleres
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
