import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../lib/gsap";
import { events } from "../data/events";
import EventCard from "./EventCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function EventsHorizontal() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(() => {
    if (reduced) return;
    const track = root.current.querySelector(".ev-track");
    const getX = () => -(track.scrollWidth - window.innerWidth + 48);
    const tween = gsap.to(track, {
      x: getX,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth + 800}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, { scope: root, dependencies: [reduced] });

  return (
    <section ref={root} className="relative overflow-hidden border-y-2 border-black bg-[#fbbc05] py-16">
      <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-4 sm:px-6">
        <div>
          <p className="font-mono2 text-xs font-bold uppercase">Scroll →</p>
          <h2 className="font-display text-3xl sm:text-5xl">Past events</h2>
        </div>
        <Link to="/events" data-cursor="All" className="font-mono2 rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white">
          View archive
        </Link>
      </div>
      {reduced ? (
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
          {events.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      ) : (
        <div className="ev-track flex w-max gap-5 px-6">
          {events.map((e) => <EventCard key={e.slug} event={e} />)}
          <div className="flex w-[60vw] shrink-0 items-center justify-center sm:w-[300px]">
            <Link to="/events" data-cursor="Go" className="font-display card-shadow rounded-full border-2 border-black bg-black px-8 py-4 text-white">
              See all →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
