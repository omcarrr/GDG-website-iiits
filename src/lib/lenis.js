import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

// One Lenis instance for the whole single-scroll site, shared by the navbar and in-page links.
let lenis = null;
let locked = false;
const NAV_OFFSET = -90;

// Freeze page scroll (wheel, touch, keys, scrollbar) e.g. while the preloader is up.
// Safe to call before initLenis(): the flag is applied when Lenis is created.
export function lockScroll(lock) {
  locked = lock;
  document.documentElement.classList.toggle("scroll-locked", lock);
  if (lock) window.scrollTo(0, 0);
  if (!lenis) return;
  if (lock) {
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.stop();
  } else {
    lenis.start();
  }
}

export function initLenis() {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  if (locked) lenis.stop();
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

export const getLenis = () => lenis;

// Section ids double as URL paths: /events -> #events. "home" is the top of the page.
export const sections = [
  { id: "home", label: "Home", path: "/" },
  { id: "events", label: "Events", path: "/events" },
  { id: "team", label: "Team", path: "/team" },
  { id: "paths", label: "Paths", path: "/paths" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export function scrollToSection(id, { immediate = false } = {}) {
  const target = id === "home" ? 0 : document.getElementById(id);
  if (target === null) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const path = sections.find((s) => s.id === id)?.path;
  if (path && window.location.pathname !== path) window.history.replaceState(null, "", path);

  if (lenis) {
    lenis.scrollTo(target, {
      offset: id === "home" ? 0 : NAV_OFFSET,
      duration: 1.4,
      immediate: immediate || reduced,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  } else {
    gsap.to(window, { scrollTo: { y: target, offsetY: id === "home" ? 0 : -NAV_OFFSET }, duration: reduced || immediate ? 0 : 1.2 });
  }
}
