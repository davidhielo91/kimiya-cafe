# Image Prompts — Kimiya Café

Detailed English prompts to generate the site's **6 provisional images** in
ChatGPT / DALL·E, Midjourney, or similar. These are temporary AI placeholders
until the real Kimiya Café photographs arrive — they must **not** depict the
actual venue, real products, real workshops, or identifiable real people.

## How to use

1. Generate each image in **JPG**, quality ~80%.
2. Save it in `public/images/` with the **exact filename** in each section.
3. Run `pnpm dev` — the image appears automatically (no code changes).
4. Keep the same style so the six images feel like one family. Generate them in
   a single session if possible.

**Platform notes**
- **Midjourney:** append the `--ar` flag shown in each section (e.g. `--ar 4:5`).
  Optionally add `--style raw --quality 2`.
- **ChatGPT / DALL·E:** there is no `--ar`. State the orientation and pixel size
  in plain language (e.g. *"vertical 4:5, 1200×1500 px"*), then crop to the exact
  size afterwards.

## Shared art direction (already baked into each prompt)

> Editorial specialty-coffee photography. Natural window light, warm and slightly
> moody. Shallow depth of field. Artisanal, urban, contemporary feel — never a
> generic stock or corporate/SaaS look. Minimalist composition with generous
> negative space. Palette: charcoal black (#111111) and clean white (#FFFFFF)
> with a single subtle warm-orange accent (#FC4C02). Photorealistic, high detail.

**Negative (avoid in all):** text, letters, logos, watermarks, signatures,
identifiable faces, extra fingers/hands artifacts, oversaturated colors, HDR
look, plastic skin, cluttered background, cartoon, illustration, 3D render.

---

## 1 · Cold Brew

- **File:** `cold-brew.jpg`
- **Size:** 1200×1500 px · **Vertical 4:5** · Midjourney `--ar 4:5`
- **Where:** Homepage, Cold Brew section (tall right-hand column)

```
Editorial specialty-coffee photograph of a tall clear glass filled with cold
brew coffee poured over large, crystal-clear ice cubes, sitting on a dark
charcoal stone surface. Heavy fresh condensation runs down the glass. A single
thin slice of orange rests beside the base as a subtle warm-orange accent. Soft
directional window light from the left, deep shadows on the right, moody and
artisanal. Shallow depth of field, background softly blurred into near-black.
Vertical composition with empty headroom above the glass. Photorealistic, shot
on a 50mm lens, f/2.0, high detail.
Negative: no text, no logos, no watermark, no faces, no clutter, no cartoon.
--ar 4:5
```

---

## 2 · Café en grano (coffee beans)

- **File:** `cafe-en-grano.jpg`
- **Size:** 1920×1080 px · **Horizontal 16:9** · Midjourney `--ar 16:9`
- **Where:** Homepage banner + "Café en grano" page

```
Editorial macro photograph of freshly roasted specialty coffee beans spilling
from an open kraft-paper bag onto a dark charcoal surface. Rich medium-roast
tone with a visible natural oil sheen and detailed bean texture. Warm raking
light from one side highlights the grooves of the beans; a faint warm-orange
glow in the shadows. The right third of the frame is left mostly empty as calm
negative space. Shallow depth of field, sharp foreground beans, soft falloff.
Photorealistic, macro lens, f/2.8, high detail, artisanal mood.
Negative: no text, no logos, no watermark, no hands, no clutter, no illustration.
--ar 16:9
```

---

## 3 · Métodos (pour-over brewing)

- **File:** `metodos.jpg`
- **Size:** 1920×1080 px · **Horizontal 16:9** · Midjourney `--ar 16:9`
- **Where:** Métodos page (lead image)

```
Editorial specialty-coffee photograph of pour-over brewing on a V60 dripper. A
hand pours hot water from a matte-black gooseneck kettle in a thin, steady
stream over the coffee bed; delicate steam rises and catches the light. A glass
server sits below on a dark wooden counter. Warm window light, dark blurred
background, quiet and precise atmosphere. Composition off-center with negative
space on the left. Shallow depth of field, subtle warm-orange highlight in the
steam. Photorealistic, 35mm lens, f/2.5, crisp detail.
Negative: no text, no logos, no watermark, no faces, no clutter, no 3D render.
--ar 16:9
```

---

## 4 · Talleres (coffee cupping / tasting)

- **File:** `talleres.jpg`
- **Size:** 1920×1080 px · **Horizontal 16:9** · Midjourney `--ar 16:9`
- **Where:** Talleres page (lead image)

```
Editorial photograph of a coffee cupping and tasting session. A neat row of
identical small white cupping cups on a warm wooden table, each with dark coffee,
cupping spoons resting on the rim, a few scattered roasted beans and a folded
score sheet. Hands mid-tasting are visible but no faces. Warm natural light,
sensory-lab yet cozy atmosphere, artisanal and inviting. Slight overhead angle,
generous negative space at the top. Subtle warm-orange accent on a napkin or
label. Shallow depth of field. Photorealistic, 50mm lens, f/2.8, high detail.
Negative: no text, no logos, no watermark, no faces, no clutter, no cartoon.
--ar 16:9
```

---

## 5 · Espresso (menu)

- **File:** `menu-espresso.jpg`
- **Size:** 1800×1200 px · **Horizontal 3:2** · Midjourney `--ar 3:2`
- **Where:** Menú page (lead image)

```
Editorial close-up photograph of espresso extraction from a professional
espresso machine. Two thin streams of rich caramel-colored espresso with thick
golden crema flow into a small white cup on the drip tray. Warm golden
highlights glint off the stainless portafilter against the dark machine body.
Steam and warmth in the air. Tight, dramatic composition, dark moody background,
shallow depth of field. Subtle warm-orange reflection on the metal.
Photorealistic, 85mm macro lens, f/2.8, high detail, artisanal craft feel.
Negative: no text, no logos, no watermark, no faces, no clutter, no illustration.
--ar 3:2
```

---

## 6 · Open Graph (social share image)

- **File:** `og.jpg`
- **Size:** 1200×630 px · **Horizontal 1.91:1** · Midjourney `--ar 1.91:1`
- **Where:** Social preview when the site is shared (WhatsApp, Facebook, X…)

```
Editorial top-down flat-lay of specialty coffee elements arranged on a dark
charcoal surface: a white cup of black coffee, a small pile of roasted coffee
beans, and a V60 dripper with a paper filter. Warm directional light, soft
shadows, artisanal and premium mood. The LEFT THIRD of the frame is deliberately
left as clean empty dark space for a title overlay. Balanced minimalist
composition, subtle warm-orange accent (a folded cloth or a single orange slice).
Photorealistic, top-down view, high detail.
Negative: no text, no logos, no watermark, no faces, no clutter, no cartoon.
--ar 1.91:1
```

> The OG image usually carries the brand name "Kimiya Café" on top. Generate it
> **without text**, then add the wordmark in Canva/Figma over the empty left
> third if you want it.

---

## Quick checklist

- [ ] `cold-brew.jpg` — 1200×1500 (4:5)
- [ ] `cafe-en-grano.jpg` — 1920×1080 (16:9)
- [ ] `metodos.jpg` — 1920×1080 (16:9)
- [ ] `talleres.jpg` — 1920×1080 (16:9)
- [ ] `menu-espresso.jpg` — 1800×1200 (3:2)
- [ ] `og.jpg` — 1200×630 (1.91:1)

All files go in `public/images/`. Provisional AI images — replace with real
Kimiya Café photography before production.
