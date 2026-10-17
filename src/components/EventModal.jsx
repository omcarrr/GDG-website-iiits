import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap, useGSAP } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function EventModal({ event, onClose }) {
  const root = useRef(null);
  const closeBtn = useRef(null);
  const reduced = usePrefersReducedMotion();

  // lock page scroll (Lenis + native/touch) and wire Esc while open
  useEffect(() => {
    const prevFocus = document.activeElement;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
    };
  }, [onClose]);

  useGSAP(() => {
    if (reduced) return;
    gsap.timeline()
      .from(".em-backdrop", { autoAlpha: 0, duration: 0.25 })
      .from(".em-panel", { y: 60, scale: 0.94, autoAlpha: 0, duration: 0.5, ease: "back.out(1.4)" }, "<")
      .from(".em-photo", { y: 24, autoAlpha: 0, duration: 0.4, stagger: 0.05 }, "-=0.2");
  }, { scope: root, dependencies: [reduced] });

  return createPortal(
    <div ref={root} className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="em-title">
      <div className="em-backdrop absolute inset-0 bg-black/70" onClick={onClose} data-cursor="Close" />
      <div
        data-lenis-prevent
        className="em-panel card-shadow relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border-2 border-black bg-[#fffdf6] p-5 sm:rounded-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-1">
              <span className="font-mono2 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">{event.year}</span>
              {event.tags.map((t) => (
                <span key={t} className="font-mono2 rounded-full border border-black px-2 py-0.5 text-[11px] font-bold uppercase">{t}</span>
              ))}
            </div>
            <h2 id="em-title" className="font-display mt-3 text-3xl sm:text-5xl">{event.title}</h2>
            <p className="font-mono2 mt-2 text-xs font-bold uppercase text-[#5b5b55]">
              {[event.date, event.venue].filter(Boolean).join(" · ")}
            </p>
          </div>
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            aria-label="Close"
            data-cursor="Close"
            className="font-display shrink-0 rounded-full border-2 border-black bg-white px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed">{event.details ?? event.blurb}</p>
        {event.highlights?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {event.highlights.map((h) => (
              <li key={h} className="font-mono2 rounded-full bg-[#fbbc05] px-3 py-1 text-xs font-bold uppercase">{h}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {(event.gallery ?? event.images).map((src, i) => (
            <div key={src} className={`em-photo img-placeholder overflow-hidden rounded-xl border-2 border-black ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img
                src={src}
                alt={`${event.title} photo ${i + 1}`}
                loading="lazy"
                width={600}
                height={450}
                className="aspect-[4/3] h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
