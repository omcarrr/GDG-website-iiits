import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { scrollToSection } from "../lib/lenis";
import FloatWrap from "./FloatWrap";

const items = [
  { title: "Workshops", desc: "Git, Web, Android, Cloud — hands-on, beginner friendly.", color: "#4285f4", icon: (
    <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="10" y="20" width="180" height="160" rx="12"/>
      <path d="M30 50h140M30 80h140M30 110h100M30 140h120" strokeWidth="2.5"/>
      <circle cx="170" cy="170" r="20"/>
      <path d="M160 170h20M170 160v20"/>
    </svg>
  )},
  { title: "Hackathons", desc: "Chakravyuh, TechFest, overnight builds that ship.", color: "#ea4335", icon: (
    <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="100,15 185,65 185,135 100,185 15,135 15,65" strokeWidth="4"/>
      <polygon points="100,40 165,80 165,120 100,160 35,120 35,80" strokeWidth="2"/>
      <path d="M100 40v120M45 95h110M35 80l65 40M165 80l-65 40" strokeWidth="2"/>
      <circle cx="100" cy="100" r="12"/>
    </svg>
  )},
  { title: "Study Jams", desc: "Cloud Study Jam, Build with AI, Solution Challenge.", color: "#34a853", icon: (
    <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M40 120c0-35 28-60 60-60s60 25 60 60" strokeWidth="4"/>
      <path d="M55 120c0-25 20-45 45-45s45 20 45 45" strokeWidth="2.5" opacity="0.6"/>
      <path d="M100 60v60M75 100l25-25 25 25" strokeWidth="4"/>
      <ellipse cx="100" cy="145" rx="70" ry="15" strokeWidth="2" opacity="0.4"/>
    </svg>
  )},
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
              <div className="relative flex h-44 items-center justify-center rounded-xl overflow-hidden" style={{ background: c.color }}>
                {c.icon}
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
