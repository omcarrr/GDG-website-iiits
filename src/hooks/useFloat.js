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

      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        qx(px * move * 2);
        qy(py * move * 2);
        rx(-py * tilt * 2);
        ry(px * tilt * 2);
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: 1, ease: "elastic.out(1, 0.4)", overwrite: true });
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { clearProps: "transform,willChange" });
      };
    });
    return () => mm.revert();
  });

  return ref;
}
