# Whistle — Landing Page

A responsive recreation of the **Whistle** invisible-aligners landing page (from the provided
Figma design), built with **React + Vite** and plain CSS. One section is populated with **dynamic
data from a public API**, and the page includes a working **FAQ accordion** interaction.

> Built for the Unbundl Frontend Developer assessment.

---

## Tech stack

- **React 18** (functional components + hooks)
- **Vite** (dev server + build)
- **Plain CSS** — co-located per component, with global design tokens in `src/index.css`
  (no UI libraries, as required)
- **Google Fonts** — Poppins (headings) + Inter (body)

---

## Getting started

```bash
npm install
npm run dev      # start the dev server (Vite) → http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into /dist
npm run preview  # preview the production build
```

> Requires Node 18+.

---

## What's included

The page recreates the full Whistle ("whistle AND SMILE") landing design, top to bottom:

1. Sticky header — logo + call button
2. Offer strip — *“Starting at Rs 68,999 Rs 47,999. Hurry! Offer ends soon.”*
3. Hero — *“Invisible Aligners for a dream smile”*
4. **Lead form — “Do you have Teeth Gaps or Crooked Teeth?” (interactive)**
5. Clove Dental clinic strip — “Book a Free 3D Teeth Scan…”
6. Scrolling benefits marquee
7. “Dream smiles achieved secretly” — copy + Whistle Aligners pricing card
8. “Results You'll Love” — before/after cards (concern + duration)
9. “Why Whistle?” — reason cards
10. “The Whistle Difference” — split block (Next-Gen / Hassle-Free / Transparent Pricing)
11. “What sets Whistle apart?” — comparison table
12. “Get your perfect smile in four simple steps”
13. “We are Doctor-led, not direct-to-customers”
14. **“Happy Smilers!” — testimonials (dynamic data)**
15. **“Got Questions?” — FAQ accordion (interaction)**
16. Footer + sticky bottom CTA bar

---

## Dynamic data (Task B)

The **“Happy Smilers!”** testimonials section is populated from the public **DummyJSON** API:

```
GET https://dummyjson.com/comments?limit=6
```

The fetch lifecycle lives in a small custom hook, [`src/hooks/useTestimonials.js`](src/hooks/useTestimonials.js),
using `useState` + `useEffect`. Each comment is mapped onto a testimonial card:

| Card field | API field |
| ---------- | --------- |
| Quote      | `comment.body` |
| Name       | `comment.user.fullName` (falls back to `username`) |
| Handle     | `@comment.user.username` |
| Avatar     | `picsum.photos` placeholder seeded by `comment.id` |

States handled:

- **Loading** — animated skeleton cards that match the final grid layout
- **Error** — a friendly message with a **“Try again”** button that re-runs the fetch
  (handles non-200 responses, empty results and network failures; the request is aborted on unmount)

> Why DummyJSON: the design shows short customer quotes with a name + avatar, which maps cleanly
> onto the `/comments` endpoint. Avatars aren't provided by the API, so `picsum.photos` placeholders
> are used (in line with the brief's note to use placeholder image URLs).

---

## Interaction (Task C)

The **“Got questions?”** section is an accessible **FAQ accordion**
([`src/components/Faq/Faq.jsx`](src/components/Faq/Faq.jsx)):

- Click a question to expand its answer; only one stays open at a time
- Smooth height animation (CSS `grid-template-rows` 0fr → 1fr) and a rotating chevron
- Keyboard/accessibility friendly: real `<button>`s with `aria-expanded` / `aria-controls`

The **lead-capture form** ("Do you have Teeth Gaps or Crooked Teeth?") is also fully interactive —
Yes/No radios, controlled name/mobile inputs with a floating label, a consent checkbox that gates the
submit button, and a thank-you confirmation on submit. Hover states are applied to cards, buttons and
links throughout, consistent with the design.

---

## Approach

I broke the design into one functional component per section, each with its own co-located CSS, and
centralised the palette, typography and layout values as CSS variables in `src/index.css` for
consistency. Data fetching is isolated in a reusable hook so the testimonials component stays focused
on rendering its loading, error and success states. The layout is responsive down to mobile using a
handful of breakpoints (grids collapse to single columns and the nav becomes a hamburger menu).

**Placeholder images** use `picsum.photos`, sized to match the Figma frames.

---

## What I found challenging / would improve with more time

The trickiest part was matching the long, multi-section design faithfully while keeping the CSS
organised and the page fully responsive across breakpoints. With more time I'd fine-tune spacing and
typography to be pixel-perfect against the Figma, add subtle scroll-in animations, swap the
`picsum.photos` placeholders for properly art-directed imagery, and add a small test suite around the
data-fetching hook (loading / error / success paths).

---

## Project structure

```
src/
├── main.jsx                 # entry — loads base styles first, then the app
├── App.jsx                  # composes all sections
├── index.css                # design tokens, reset, shared helpers
├── hooks/
│   └── useTestimonials.js   # DummyJSON fetch lifecycle (Task B)
├── data/
│   └── faqs.js              # FAQ accordion content (Task C)
└── components/
    ├── Header/  TopOffer/  Hero/  LeadForm/  CloveStrip/  BenefitsBar/
    ├── DreamSmiles/  Results/  WhyWhistle/  WhistleDifference/
    ├── ComparisonTable/  HowItWorks/  DoctorLed/  HappySmilers/
    └── Faq/  Footer/  StickyCta/
```
