import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { splitChars } from "../utils/splitText";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { scrollToSection } from "../lib/lenis";

export default function Hero({ started }) {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(() => {
    if (!started) return;
    if (reduced) {
      gsap.set(root.current, { autoAlpha: 1 });
      return;
    }
    const chars = gsap.utils.toArray(root.current.querySelectorAll(".hero-line")).flatMap((el) => splitChars(el));
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });
    tl.fromTo(root.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 })
      .fromTo(chars, { y: 90, rotation: 8, autoAlpha: 0 }, { y: 0, rotation: 0, autoAlpha: 1, duration: 0.7, stagger: 0.03 }, "<")
      .fromTo(".hero-pop", { scale: 0, rotation: -20 }, { scale: 1, rotation: 0, duration: 0.6, stagger: 0.12, ease: "elastic.out(1,0.5)" }, "-=0.4")
      .fromTo(".hero-sub", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.3");

    // floating blobs follow mouse
    const blobs = gsap.utils.toArray(".blob");
    const setters = blobs.map((b) => ({
      x: gsap.quickTo(b, "x", { duration: 0.6, ease: "power3" }),
      y: gsap.quickTo(b, "y", { duration: 0.6, ease: "power3" }),
    }));
    const onMove = (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 60;
      const cy = (e.clientY / window.innerHeight - 0.5) * 60;
      setters.forEach((s, i) => {
        const f = (i + 1) * 0.5;
        s.x(cx * f);
        s.y(cy * f);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, { scope: root, dependencies: [started, reduced] });

  return (
    <section ref={root} id="home" className="relative flex min-h-[96vh] items-center justify-center overflow-hidden px-4 pt-24 opacity-0">
      <div className="blob absolute left-[8%] top-[20%] h-24 w-24 rounded-full bg-[#4285f4]" aria-hidden="true" />
      <div className="blob absolute right-[10%] top-[26%] h-16 w-16 rotate-12 bg-[#ea4335]" aria-hidden="true" />
      <div className="blob absolute bottom-[18%] left-[14%] h-14 w-14 rounded-full bg-[#fbbc05]" aria-hidden="true" />
      <div className="blob absolute bottom-[24%] right-[16%] h-20 w-20 rounded-2xl bg-[#34a853]" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl text-center">
        <p className="hero-sub font-mono2 mb-4 inline-block rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-bold uppercase">
          Google Developer Groups • On Campus
        </p>
        <h1 className="font-display text-[13vw] leading-[0.95] sm:text-8xl md:text-9xl">
          <span className="hero-line block">BUILD</span>
          <span className="hero-line text-stroke block">LEARN</span>
          <span className="hero-line block">
            <span className="bg-[#fbbc05] px-3">INNOVATE</span>
          </span>
        </h1>
        <p className="hero-sub mx-auto mt-6 max-w-xl text-base font-medium text-[#5b5b55] sm:text-lg">
          GDG IIIT Sri City — workshops, hackathons and study jams.
          Chakravyuh to Solution Challenge, we build with Google tech.
        </p>
        <div className="hero-sub mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/events" onClick={(e) => { e.preventDefault(); scrollToSection("events"); }} className="hero-pop rounded-full border-2 border-black bg-black px-7 py-3 font-display text-sm text-white transition-transform hover:-translate-y-1">
            Explore events
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="hero-pop rounded-full border-2 border-black bg-[#fbbc05] px-7 py-3 font-display text-sm transition-transform hover:-translate-y-1">
            Join us
          </a>
          <a href="/paths" onClick={(e) => { e.preventDefault(); scrollToSection("paths"); }} className="hero-pop font-mono2 rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-bold transition-transform hover:-translate-y-1">Find your path ↓</a>
        </div>
      </div>
    </section>
  );
}
