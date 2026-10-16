import { useRef, useState } from "react";
import { gsap, useGSAP } from "../lib/gsap";

const words = ["BUILD", "LEARN", "INNOVATE", "GDG*"];
const dots = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

export default function Preloader({ onDone }) {
  const root = useRef(null);
  const num = useRef(null);
  const word = useRef(null);
  const [gone, setGone] = useState(false);

  useGSAP(() => {
    // bouncing google dots
    gsap.to(".pre-dot", {
      y: -26,
      duration: 0.32,
      ease: "power2.out",
      stagger: { each: 0.09, yoyo: true, repeat: -1 },
      yoyo: true,
      repeat: -1,
    });
    // wiggling stickers
    gsap.to(".pre-sticker", {
      rotation: "+=10",
      duration: 0.5,
      ease: "sine.inOut",
      stagger: { each: 0.15, yoyo: true, repeat: -1 },
      yoyo: true,
      repeat: -1,
    });

    const counter = { v: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        setGone(true);
        onDone?.();
      },
    });

    // cycle hype words while counting
    words.forEach((w, i) => {
      tl.call(() => {
        if (word.current) word.current.textContent = w;
        if (word.current) {
          gsap.fromTo(word.current, { scale: 0.7, rotation: -4 }, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(2)" });
        }
      }, null, i * 0.38);
    });

    tl.to(counter, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (num.current) num.current.textContent = Math.round(counter.v);
      },
    }, 0)
      // color panels wipe up one by one, then the whole loader lifts
      .to(".pre-panel", { yPercent: -100, duration: 0.45, ease: "power3.inOut", stagger: 0.08 })
      .to(root.current, { yPercent: -100, duration: 0.6, ease: "hop" }, "-=0.15");
  }, { scope: root });

  if (gone) return null;
  return (
    <div ref={root} className="fixed inset-0 z-[90] overflow-hidden bg-[#fffcf2]">
      {/* staggered exit panels in google colors */}
      <div className="pre-panel absolute inset-0 bg-[#4285f4]" />
      <div className="pre-panel absolute inset-0 bg-[#ea4335]" />
      <div className="pre-panel absolute inset-0 bg-[#fbbc05]" />
      <div className="pre-panel absolute inset-0 flex flex-col items-center justify-center bg-[#fffcf2]">
        <span className="pre-sticker font-mono2 absolute left-[10%] top-[16%] rotate-[-8deg] rounded-full border-2 border-black bg-[#34a853] px-4 py-1 text-xs font-bold uppercase text-white">
          hello campus!
        </span>
        <span className="pre-sticker font-mono2 absolute right-[8%] top-[24%] rotate-[6deg] rounded-full border-2 border-black bg-[#ea4335] px-4 py-1 text-xs font-bold uppercase text-white">
          ship it
        </span>
        <span className="pre-sticker font-mono2 absolute bottom-[20%] left-[12%] rotate-[5deg] rounded-full border-2 border-black bg-[#4285f4] px-4 py-1 text-xs font-bold uppercase text-white">
          GDG on campus
        </span>

        <div className="flex items-end gap-3">
          {dots.map((c) => (
            <span key={c} className="pre-dot inline-block h-6 w-6 rounded-full border-2 border-black" style={{ background: c }} />
          ))}
        </div>

        <div ref={word} className="font-display mt-6 px-4 text-center text-5xl sm:text-8xl">
          BUILD
        </div>
        <p className="font-mono2 mt-3 text-xs font-bold uppercase tracking-widest text-[#5b5b55]">
          GDG IIIT Sri City is warming up…
        </p>
      </div>

      {/* big counter */}
      <div className="absolute bottom-4 right-6 flex items-baseline gap-1">
        <span ref={num} className="font-display text-7xl leading-none">0</span>
        <span className="font-display text-2xl">%</span>
      </div>
    </div>
  );
}
