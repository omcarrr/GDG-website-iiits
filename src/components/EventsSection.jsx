import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { events } from "../data/events";
import { scrollToSection } from "../lib/lenis";
import { useSectionReveal } from "../hooks/useSectionReveal";
import EventCard from "./EventCard";

// Add an event = append to src/data/events.js. Newest first by `date` ("March 2025"), grouped by year.
const when = (e) => Date.parse(`1 ${e.date}`) || Date.parse(`1 January ${e.year}`);
const sorted = [...events].sort((a, b) => when(b) - when(a));
const FIRST = 4;

export default function EventsSection() {
  const root = useRef(null);
  const [expanded, setExpanded] = useState(false);
  useSectionReveal(root);

  useGSAP(() => {
    ScrollTrigger.refresh();
    if (!expanded) return;
    gsap.fromTo(".ev-extra", { y: 60, autoAlpha: 0, rotation: 1.5 }, {
      y: 0, autoAlpha: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.4)",
    });
  }, { scope: root, dependencies: [expanded] });

  useGSAP(() => {
    gsap.set(".ev-first", { y: 50, autoAlpha: 0 });
    ScrollTrigger.batch(".ev-first", {
      start: "top 98%",
      once: true,
      onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }),
    });
  }, { scope: root });

  const toggle = () => {
    if (expanded) {
      setExpanded(false);
      requestAnimationFrame(() => scrollToSection("events"));
    } else {
      setExpanded(true);
    }
  };

  const list = expanded ? sorted : sorted.slice(0, FIRST);
  const hidden = sorted.length - FIRST;

  return (
    <section ref={root} id="events" className="relative border-y-2 border-black bg-[#fbbc05] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reveal-head font-mono2 text-xs font-bold uppercase">What we've run</p>
            <h2 className="reveal-head font-display text-4xl sm:text-6xl">Past events</h2>
          </div>
          <p className="reveal-head max-w-xs text-sm font-medium">
            Workshops, hackathons & study jams across multiple seasons. Tap a card for the full story and photos.
          </p>
        </div>

        {[...new Set(list.map((e) => e.year))].map((year) => (
          <div key={year} className="mt-10">
            <h3 className="font-display mb-4 inline-block rounded-full border-2 border-black bg-black px-5 py-1.5 text-lg text-white">
              {year}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {list.filter((e) => e.year === year).map((e) => (
                <div key={e.slug} className={sorted.indexOf(e) < FIRST ? "ev-first" : "ev-extra"}>
                  <EventCard event={e} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {hidden > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              className="font-display card-shadow rounded-full border-2 border-black bg-black px-8 py-4 text-white transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              {expanded ? "Show less ↑" : `Show more events (+${hidden}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
