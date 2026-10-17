import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import EventCard from "../components/EventCard";
import { gsap, useGSAP } from "../lib/gsap";
import { events } from "../data/events";

// Tabs shown in the year switcher, newest first. Add a year here when a new season starts.
const years = ["2026", "2025", "2024"];
const latestWithEvents = years.find((y) => events.some((e) => e.year === y)) ?? years[0];

export default function EventsPage() {
  const root = useRef(null);
  const [params, setParams] = useSearchParams();
  const year = years.includes(params.get("year")) ? params.get("year") : latestWithEvents;
  const list = events.filter((e) => e.year === year);

  useGSAP(() => {
    gsap.fromTo(".ev-grid-card", { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 });
  }, { scope: root, dependencies: [year] });

  const pick = (y) => setParams(y === latestWithEvents ? {} : { year: y }, { replace: true });

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

        <div className="sticky top-[76px] z-[70] mt-8 -mx-1 py-2">
          <div role="tablist" aria-label="Event year" className="card-shadow inline-flex gap-1 rounded-full border-2 border-black bg-white p-1">
            {years.map((y) => {
              const count = events.filter((e) => e.year === y).length;
              const active = y === year;
              return (
                <button
                  key={y}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  data-cursor={y}
                  onClick={() => pick(y)}
                  className={`font-mono2 flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                    active ? "bg-black text-white" : "hover:bg-[#fbbc05]"
                  }`}
                >
                  {y}
                  <span className={`rounded-full px-1.5 text-[10px] ${active ? "bg-[#fbbc05] text-black" : "bg-black/10"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div role="tabpanel" aria-label={`${year} events`} className="mt-6">
          {list.length ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {list.map((e) => (
                <div key={e.slug} className="ev-grid-card">
                  <EventCard event={e} />
                </div>
              ))}
            </div>
          ) : (
            <div className="ev-grid-card card-shadow rounded-2xl border-2 border-dashed border-black bg-white p-10 text-center">
              <p className="font-display text-2xl sm:text-3xl">{year} events dropping soon</p>
              <p className="mt-2 text-[#5b5b55]">Join the WhatsApp community on the contact page to hear first.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
