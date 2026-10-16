import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-custom-cursor");

    const dx = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const over = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) {
        const label = t.getAttribute("data-cursor") || "";
        labelRef.current.textContent = label;
        gsap.to(ringRef.current, { scale: 2.2, backgroundColor: "#fbbc05", duration: 0.3 });
      } else {
        labelRef.current.textContent = "";
        gsap.to(ringRef.current, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
      }
    };
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden [@media(pointer:fine)]:block" aria-hidden="true">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black"
        style={{ x: -100, y: -100 }}
      >
        <span ref={labelRef} className="font-mono2 text-[9px] font-bold uppercase" />
      </div>
      <div ref={dotRef} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ea4335]" style={{ x: -100, y: -100 }} />
    </div>
  );
}
