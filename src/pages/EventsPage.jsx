import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import EventCard from "../components/EventCard";
import { gsap, useGSAP } from "../lib/gsap";
import { events } from "../data/events";

export default function EventsPage() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.fromTo(".ev-grid-card", { y: 60, autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 70%", toggleActions: "play none none reverse" },
    });
  }, { scope: root });

  return (
    <>
      <Cursor />
      <Navbar />
      <main ref={root} className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
        <p className="font-mono2 text-xs font-bold uppercase text-[#5b5b55]">Archive</p>
        <h1 className="font-display text-4xl sm:text-6xl">All events</h1>
        <p className="mt-3 max-w-xl text-[#5b5b55]">
          To add an event, append an object to <code>src/data/events.js</code> with 2 cover images and a 6-10 photo gallery —
          it appears here and on home automatically.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {events.map((e) => (
            <div key={e.slug} className="ev-grid-card">
              <EventCard event={e} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
