# GDG IIIT Sri City — Google Developer Groups on Campus

Playful, animated showcase site in the style of extrafazant.nl. Built with Vite + React + GSAP + Lenis. No backend.

See `PLAN.md` for the full handoff (routes, GSAP patterns, work split) and `CONTRIBUTING.md` for how to add events / team members without touching animation code.

## Run

```bash
npm install
npm run dev
npm run build
```

## Add an event

Append to `src/data/events.js` with 2 images in `public/images/events/`. It appears on home + `/events` automatically.

## Add a team member

Append to `src/data/team.js`. Roles: `organizer` → `co-organizer` → `executive` → `member`.
