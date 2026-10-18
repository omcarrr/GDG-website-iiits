import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { scrollToSection } from "../lib/lenis";
import FloatWrap from "./FloatWrap";

const items = [
  { title: "Workshops", desc: "Git, Web, Android, Cloud — hands-on, beginner friendly.", color: "#4285f4" },
  { title: "Hackathons", desc: "Chakravyuh, TechFest, overnight builds that ship.", color: "#ea4335" },
  { title: "Study Jams", desc: "Cloud Study Jam, Build with AI, Solution Challenge.", color: "#34a853" },
];

export default function WhatWeDo() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.fromTo(".wwd-card", { y: 80, autoAlpha: 0, rotation: 2 }, {
      y: 0, autoAlpha: 1, rotation: 0, duration: 0.7, stagger: 0.12,
      scrollTrigger: { trigger: root.current, start: "top 75%", toggleActions: "play none none reverse" },
    });
  }, { scope: root });

  return (
    <section ref={root} className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl sm:text-5xl">What we do</h2>
        <a href="/events" onClick={(e) => { e.preventDefault(); scrollToSection("events"); }} className="font-mono2 rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white">
          All events →
        </a>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((c) => (
          <div key={c.title} className="wwd-card">
            <FloatWrap as="article" className="card-shadow h-full rounded-2xl border-2 border-black bg-white p-5">
              <div className="img-placeholder flex h-44 items-center justify-center rounded-xl border-2 border-black font-display text-2xl" style={{ background: c.color, color: "#fff" }}>
                {c.title[0]}
              </div>
              <h3 className="font-display mt-4 text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-[#5b5b55]">{c.desc}</p>
            </FloatWrap>
          </div>
        ))}
      </div>
    </section>
  );
}
