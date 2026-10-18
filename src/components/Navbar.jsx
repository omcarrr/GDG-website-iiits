import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { sections, scrollToSection } from "../lib/lenis";

const linkCls = (active) =>
  `font-mono2 shrink-0 rounded-full border-2 border-black px-2.5 py-1 text-[10px] font-bold uppercase transition-colors sm:px-4 sm:text-xs ${
    active ? "bg-black text-white" : "bg-white hover:bg-[#fbbc05]"
  }`;

export default function Navbar() {
  const root = useRef(null);
  const [active, setActive] = useState("home");

  useGSAP(() => {
    // progress bar under the nav, scrubbed by page scroll
    gsap.fromTo(".nav-progress", { scaleX: 0 }, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });

    // whichever section spans the middle of the screen lights up its pill. Recomputed from all
    // triggers (not just the one that toggled) so a re-measure after layout shifts can't leave a stale pill.
    let triggers = [];
    const sync = () => {
      const current = triggers.findLast((t) => t.isActive);
      if (current) setActive(current.vars.id);
    };
    triggers = sections.map(({ id }) =>
      ScrollTrigger.create({
        id,
        trigger: document.getElementById(id), // element, not selector: useGSAP scopes selectors to <header>
        start: "top center",
        end: "bottom center",
        onToggle: sync,
      })
    );
    ScrollTrigger.addEventListener("refresh", sync);
    return () => {
      ScrollTrigger.removeEventListener("refresh", sync);
      triggers.forEach((t) => t.kill());
    };
  }, { scope: root });

  const go = (id) => {
    setActive(id);
    scrollToSection(id);
  };

  return (
    <header ref={root} className="fixed inset-x-0 top-0 z-[80] px-3 pt-3 sm:px-6">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 overflow-hidden rounded-2xl border-2 border-black bg-[#fffcf2]/90 px-3 py-2 backdrop-blur">
        <button type="button" onClick={() => go("home")} className="flex shrink-0 items-center gap-2">
          <img src="/images/logo/GDG_LOGO.png" alt="GDG Logo" className="h-8 w-8 rounded-full object-contain" />
          <span className="font-display hidden text-sm min-[420px]:inline sm:text-base">GDG <span className="hidden sm:inline">IIIT Sri City</span></span>
        </button>
        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
          {sections.map(({ id, label, path }) => (
            <a
              key={id}
              href={path}
              aria-current={active === id ? "true" : undefined}
              onClick={(e) => { e.preventDefault(); go(id); }}
              className={linkCls(active === id)}
            >
              {label}
            </a>
          ))}
        </div>
        <span className="nav-progress pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#4285f4]" aria-hidden="true" />
      </nav>
    </header>
  );
}
