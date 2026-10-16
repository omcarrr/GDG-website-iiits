# Contributing — GDG IIIT Sri City Website

## Quick start

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # must pass before push
```

## How to add content (no code needed)

### Add an event
Edit `src/data/events.js`, append:

```js
{
  slug: "git-bootcamp-2025",
  title: "Git Bootcamp",
  year: "2025",
  tags: ["Git", "GitHub"],
  blurb: "One line.",
  images: ["/images/events/git-1.svg", "/images/events/git-2.svg"],
},
```

Put 2 images in `public/images/events/`. It appears on home horizontal + `/events` automatically.

### Add a team member
Edit `src/data/team.js`:

```js
{ name: "Name", role: "member", title: "App Dev", domain: "AppDev",
  photo: "/images/team/placeholder.svg", socials: { linkedin: "#", github: "#" } },
```

Roles: `organizer` (1) → `co-organizer` (2) → `executive` (3) → `member` (12-14).
Domains: `AIML | Backend | AppDev | DevRel`.

### Swap placeholder photos
Replace file in `public/images/...`, keep same filename or update `images:` path. Keep <500KB, WebP preferred.

## Animation rules (GSAP)

- Register plugins once in `src/lib/gsap.js`.
- Use `useGSAP(..., { scope: ref })` from `@gsap/react`. No raw `useEffect` + `gsap.to` without cleanup.
- ScrollTrigger only on timelines / top-level tweens, never on child tweens inside a timeline.
- Animate `x/y/scale/rotation/autoAlpha` only. No `width/height/top/left`.
- After images/fonts load call `ScrollTrigger.refresh()`.
- Support `prefers-reduced-motion`: skip pin/scrub, show static.
- Remove `markers: true` before commit.
- Mobile-first: test 390px + touch (no cursor dependency).

## Git

```bash
git checkout -b feat/<what>
git add -A
git commit -m "feat: what changed"
git push origin feat/<what>   # or push to main for small fixes
```

Do not commit `node_modules/` or `dist/`.
