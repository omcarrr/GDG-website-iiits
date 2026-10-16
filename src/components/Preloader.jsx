import { useRef, useState } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Preloader({ onDone }) {
  const root = useRef(null);
  const num = useRef(null);
  const [gone, setGone] = useState(false);

  useGSAP(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setGone(true);
        onDone?.();
      },
    });
    tl.to(counter, {
      v: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (num.current) num.current.textContent = Math.round(counter.v);
      },
    })
      .to(".pre-bar", { scaleX: 1, duration: 1.4, ease: "power2.inOut" }, 0)
      .to(root.current, { yPercent: -100, duration: 0.8, ease: "hop" });
  }, { scope: root });

  if (gone) return null;
  return (
    <div ref={root} className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#111] text-[#fffcf2]">
      <div className="font-display text-2xl">GDG <span className="text-[#4285f4]">IIIT</span> Sri City</div>
      <div ref={num} className="font-display mt-4 text-7xl">0</div>
      <div className="mt-6 h-1 w-56 overflow-hidden rounded bg-white/20">
        <div className="pre-bar h-full w-full origin-left scale-x-0 bg-[#34a853]" />
      </div>
      <div className="font-mono2 mt-4 text-xs uppercase opacity-60">loading community…</div>
    </div>
  );
}
