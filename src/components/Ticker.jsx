import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { tickerWords } from "../data/ticker";

const colors = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

export default function Ticker() {
  const root = useRef(null);

  useGSAP(() => {
    const track = root.current.querySelector(".ticker-track");
    const loop = gsap.to(track, { xPercent: -50, duration: 18, ease: "none", repeat: -1 });
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-4, 4, self.getVelocity() / 1500);
        loop.timeScale(gsap.utils.clamp(0.4, 3, 1 + Math.abs(v)));
      },
    });
    return () => { loop.kill(); st.kill(); };
  }, { scope: root });

  const row = [...tickerWords, ...tickerWords];
  return (
    <section ref={root} className="overflow-hidden border-y-2 border-black bg-black py-3 text-white">
      <div className="ticker-track flex w-max items-center gap-6 whitespace-nowrap pr-6">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-6 font-display text-lg uppercase">
            {w}
            <span className="inline-block h-4 w-4 rounded-full" style={{ background: colors[i % colors.length] }} />
          </span>
        ))}
      </div>
    </section>
  );
}
