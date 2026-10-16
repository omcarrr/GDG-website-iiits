import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function About() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.utils.toArray(".about-line").forEach((line) => {
      gsap.fromTo(line, { y: 60, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.8,
        scrollTrigger: { trigger: line, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
  }, { scope: root });

  return (
    <section ref={root} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="font-mono2 text-xs font-bold uppercase text-[#5b5b55]">Who we are</p>
      <h2 className="about-line font-display mt-3 text-4xl leading-tight sm:text-6xl">
        The creatives of <span className="bg-[#4285f4] px-2 text-white">GDG</span> IIIT Sri City
      </h2>
      <p className="about-line mt-6 max-w-2xl text-lg text-[#5b5b55]">
        No long boring process. We are a club of makers who ship fast and help each other —
        workshops before exams, hackathons on weekends, study jams every semester.
      </p>
      <div className="about-line mt-8 flex flex-wrap gap-2">
        {["Workshops", "Hackathons", "Study Jams", "Build nights"].map((t, i) => (
          <span key={t} className="font-mono2 rounded-full border-2 border-black px-4 py-1 text-xs font-bold uppercase"
            style={{ background: ["#fbbc05", "#34a853", "#ea4335", "#4285f4"][i % 4], color: i === 2 || i === 3 ? "#fff" : "#111" }}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
