# GDG IIIT Sri City — Website Plan (Extrafazant-style + GSAP)

> Reference: https://www.extrafazant.nl — playful, bold, highly animated creative-agency feel.
> Stack: Vite + React + React Router + Tailwind CSS v4 + GSAP 3 + Lenis. No backend. Static deploy.

## 1. Goal

Showcase site for Google Developer Groups on Campus IIIT Sri City:
what GDG is, what we do, past events (photos), team, contact. Very interactive / animated throughout, custom cursor, scroll-driven sections.

## 2. Theme

- Google colors: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC05`, Green `#34A853`
- Base: paper off-white `#FFFCF2`, ink `#111111`
- Use colors as stickers / blobs / chips / marquee highlights, not full-page backgrounds.
- Fonts (Google Fonts, GDG-appropriate, close to extrafazant grotesk):
  - Display: `Archivo Black` or `Space Grotesk 700` — hero, section titles
  - Body: `Plus Jakarta Sans` or `Inter`
  - Mono labels: `Space Mono` — eyebrows, tags, numbers
  - Locked in `src/styles/tokens.css`. One person to verify extrafazant computed `font-family` and lock final choice.
- No gradients-as-decoration, no all-caps eyebrow on every heading, no identical SaaS cards. One bold moment per section.

## 3. Routes

Single-scroll site: one page, navbar smooth-scrolls (Lenis) to sections. Old URLs stay valid and deep-link to their section.

| URL / section | Purpose |
|---------------|---------|
| `/` `#home`   | Preloader, hero, ticker, about, what-we-do |
| `/events` `#events` | Event grid — first 4, then "Show more". Add event = add object. |
| `/team` `#team` | Full roster with domain filter, flip cards |
| `/paths` `#paths` | "Pick your path" flow-chart roadmaps (App Dev / Backend / AI/ML × CSE / ECE / AIDS) from `src/data/roadmaps.js` |
| `/contact` `#contact` | Reach-out details + WhatsApp community link |

All cards float/tilt toward the mouse (`src/hooks/useFloat.js`); sections reveal on scroll (`src/hooks/useSectionReveal.js`).

React Router in `src/routes.jsx`. Keep pages thin, sections in `src/components/`.

## 4. Home Sections (top → bottom)

1. **Preloader** — counter 0→100, curtain lift. `gsap-timeline` with labels `intro/outro`. Kills itself, then plays hero timeline.
2. **Hero** — animatic + interactive. Split-char stagger in, floating Google blobs follow mouse (`gsap.utils.mapRange` + `quickTo`), magnetic CTA, scroll hint. Reduced-motion: static.
3. **Ticker marquee** — `Chakravyuh • Cloud Study Jam • Git Bootcamp • TechFest • Build with AI • Solution Challenge • GenAI • Android • Flutter •` infinite `xPercent:-50 repeat:-1`. Velocity reacts to scroll.
4. **About** — "Who we are". Pinned text reveal per line (`ScrollTrigger scrub`).
5. **What We Do** — 3 cards (Workshops / Hackathons / Study Jams) like extrafazant `Wat we Doen`. Image zoom on hover, placeholder now.
6. **Past Events horizontal** — pinned section, vertical scroll drives horizontal `x`. 2 images per event as cards. Placeholders now, swap with real photos later. See §6.
7. **Team intro scroll** — Organiser → Co-organisers → Executives → Members preview, links to `/team`. Stagger batch entrance.
8. **CTA** — "Have an idea? Let's build it." Big type + sticker SVGs.
9. **Footer** — nav, address IIIT Sri City, email, socials (Instagram/LinkedIn/GitHub/YouTube), credit.

## 5. GSAP Usage (skills)

- `gsap-core`: `to/from/fromTo`, `stagger:{each:0.1}`, `back.out(1.7)`, `power3.inOut`, `quickTo` for cursor.
- `gsap-timeline`: preloader→hero master timeline, `defaults:{duration:0.6,ease:"power2.out"}`, position param `<`, `>`, labels.
- `gsap-scrolltrigger`: reveals `toggleActions:"play none none reverse"`, horizontal `pin:true scrub:1 end:"+=2000" ease:"none"`, `batch(".card")`, `ScrollTrigger.refresh()` after images/fonts load. Never put ScrollTrigger on child tween inside timeline — only on timeline/top tween. No `markers:true` in prod.
- `gsap-react`: `useGSAP(()=>{...},{scope:ref})` from `@gsap/react` for auto-cleanup. `gsap.matchMedia()` for `(min-width:800px)` vs mobile + `(prefers-reduced-motion:reduce)` → `duration:0`.
- `gsap-utils`: `toArray`, `clamp`, `mapRange`, `interpolate` for parallax.
- `gsap-performance`: animate only `x/y/scale/rotation/autoAlpha`, never `width/height/top/left`. `clearProps` after intro so CSS takes over.
- `gsap-plugins`: `ScrollToPlugin` for anchor nav, `CustomEase` hop ease.

Register once in `src/lib/gsap.js`: `gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase)`.

## 6. Events System (auto-generating)

File: `src/data/events.js`:

```js
export const events = [
  {
    slug: "cloud-study-jam-2024",
    title: "Cloud Study Jam",
    year: "2024",
    tags: ["Cloud", "GenAI"],
    blurb: "One-line what happened.",
    images: ["/images/events/cloud-1.svg", "/images/events/cloud-2.svg"]
  },
  // add object → appears on home horizontal + /events automatically
];
```

- `EventCard.jsx`: 2 images side-by-side / stacked, tilt on hover, tag chips in Google colors. Missing image → gray block with event initial (never broken `<img>`).
- Home: horizontal wrapper animates `x` with scrub. `/events`: vertical grid with `ScrollTrigger.batch` entrance.
- Placeholders live in `public/images/events/*.svg`. Swap with real JPGs later, keep same `images:[...]` shape, run `ScrollTrigger.refresh()`.

Seed events: Chakravyuh, Cloud Study Jam, Git Bootcamp, TechFest, Build with AI, Solution Challenge + 2 generic GDG ones (Android Compose Camp, Web Sprint).

## 7. Team System

File: `src/data/team.js`:

```js
{ name:"...", role:"organizer|co-organizer|executive|member",
  title:"Organiser / Club Coordinator", domain:"AIML|Backend|AppDev|DevRel|null",
  photo:"/images/team/placeholder.svg", socials:{linkedin:"#",github:"#"} }
```

Order: 1 organiser → 2 co-organisers → 3 executives → 12-14 members. `MemberCard.jsx` + domain filter on `/team`. Photo placeholder until real photos supplied.

## 8. Cursor, Smooth Scroll, Placeholders

- `Cursor.jsx`: fixed dot + ring via `quickTo`, grows + shows label on `[data-cursor="View"]`. Only `pointer:fine`, hidden on touch.
- Smooth scroll: `lenis` + `ScrollTrigger.update` on lenis scroll + `gsap.ticker`. No `ScrollSmoother` (paid Club plugin) — Lenis is free.
- Images: always local `public/images/...`, `loading="lazy"` except hero, `width/height` set to avoid CLS.
- Accessibility: `prefers-reduced-motion` disables pin/scrub to simple fade, visible focus, semantic headings, alt text.

## 9. File Structure

```
src/
  main.jsx routes.jsx App.jsx
  styles/index.css tokens.css
  lib/gsap.js lenis.js
  data/events.js team.js ticker.js
  components/
    Cursor/ Preloader/ Navbar/
    Hero/ Ticker/ About/ WhatWeDo/
    EventsHorizontal/ EventCard/
    TeamSection/ MemberCard/
    CTA/ Footer/
  pages/Home.jsx EventsPage.jsx TeamPage.jsx ContactPage.jsx
  hooks/usePrefersReducedMotion.js
  utils/splitText.js
public/images/events/ team/ stickers/
```

Rules: pages = composition only. Animation lives in the section component with `useGSAP` scoped. Data edits never require animation edits. Keep components <200 lines.

## 10. Work Split (for contributors)

- **A — Setup + shell**: Vite, Tailwind, router, tokens, Lenis, Cursor, Navbar, Footer, Preloader.
- **B — Hero + ticker + about**: split-text util, hero timeline, marquee, about line reveals.
- **C — Events**: `events.js`, `EventCard`, horizontal scroll, `/events` page, placeholders.
- **D — Team + contact**: `team.js`, `MemberCard`, filter, `/team`, `/contact`, CTA.

Each person: `npm install`, `npm run dev`, edit only their folder + data file, `ScrollTrigger.refresh()` after layout change, test `prefers-reduced-motion` + 390px mobile before push.

## 11. Git Workflow

- Branch `main` is live. Feature branches `feat/<name>`, PR or direct push for now (team small).
- Commit often, push to `main`: `git add -A && git commit -m "feat: ..." && git push origin main`.
- Do not commit `node_modules`, `dist`. Images <500KB, prefer WebP/AVIF for real photos.

## 12. Definition of Done

- `npm run build` passes, no `markers:true`, no console errors.
- Mobile 390px + desktop OK, touch devices have no cursor dependency.
- Adding an event/team member = 5-line data object, appears with animation, no code change.
- Lighthouse perf reasonable (lazy images, transform-only animation).
