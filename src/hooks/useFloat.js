import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

// Card follows the mouse while hovered: drifts toward the pointer and tilts in 3D,
// then springs back on leave. Mouse/trackpad only; skipped for touch and reduced motion.
export function useFloat({ move = 12, tilt = 8 } = {}) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set(el, { transformPerspective: 800, willChange: "transform" });
      const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3" });

      // Measure on enter, before the card shifts/tilts; measuring the transformed box
      // on every move made the pointer math feed back on itself and jitter.
      let r = null;
      const onEnter = () => { r = el.getBoundingClientRect(); };
      const onMove = (e) => {
        if (!r) onEnter();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        qx(px * move * 2);
        qy(py * move * 2);
        rx(-py * tilt * 2);
        ry(px * tilt * 2);
      };
      // Return through the same quickTo tweens: an overwrite here used to kill them,
      // so the card stopped following the pointer after the first hover.
      const onLeave = () => {
        r = null;
        qx(0); qy(0); rx(0); ry(0);
      };
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { clearProps: "transform,willChange" });
      };
    });
    return () => mm.revert();
  });

  return ref;
}
