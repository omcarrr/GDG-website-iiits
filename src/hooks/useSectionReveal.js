import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

// "Page reveal" as a section scrolls in: the panel opens from an inset rounded window
// to full bleed, then its .reveal-head lines rise in. Content stays visible without JS.
export function useSectionReveal(root) {
  useGSAP(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    // The scrubbed clip-path repaints the whole section every frame — too heavy for phones, so desktop only.
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      gsap.fromTo(el,
        { clipPath: "inset(6% 3% 0% 3% round 40px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: true },
        });
      ScrollTrigger.refresh();
    });
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heads = el.querySelectorAll(".reveal-head");
      if (heads.length) {
        gsap.fromTo(heads, { y: 48, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        });
      }
      ScrollTrigger.refresh();
    });
    return () => mm.revert();
  }, { scope: root });
}
