import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { team, roleLabel } from "../data/team";
import { useSectionReveal } from "../hooks/useSectionReveal";
import MemberCard from "./MemberCard";
import FloatWrap from "./FloatWrap";

const order = ["mentor", "organizer", "co-organizer", "executive", "member"];
const filters = ["All", "AIML", "Backend", "AppDev", "DevRel"];

function Card({ member }) {
  // outer div takes the entrance animation, FloatWrap the hover float, MemberCard the CSS flip
  return (
    <div className="team-card">
      <FloatWrap float={{ move: 10, tilt: 10 }}>
        <MemberCard member={member} />
      </FloatWrap>
    </div>
  );
}

export default function TeamSection() {
  const root = useRef(null);
  const [filter, setFilter] = useState("All");
  useSectionReveal(root);

  useGSAP(() => {
    gsap.set(".team-card", { y: 50, autoAlpha: 0 });
    ScrollTrigger.batch(".team-card", {
      start: "top 92%",
      once: true,
      onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06, overwrite: true }),
    });
    ScrollTrigger.refresh();
  }, { scope: root, dependencies: [filter], revertOnUpdate: true });

  const filtered = filter === "All" ? null : team.filter((m) => m.domain === filter);

  return (
    <section ref={root} id="team" className="bg-[#fffcf2] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reveal-head font-mono2 text-xs font-bold uppercase text-[#5b5b55]">The humans</p>
            <h2 className="reveal-head font-display text-4xl sm:text-6xl">Meet the team</h2>
          </div>
          <div className="reveal-head flex flex-wrap gap-2" role="group" aria-label="Filter by domain">
            {filters.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setFilter(d)}
                aria-pressed={filter === d}
                className={`font-mono2 rounded-full border-2 border-black px-4 py-1 text-xs font-bold uppercase transition-colors ${
                  filter === d ? "bg-black text-white" : "bg-white hover:bg-[#fbbc05]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {filtered ? (
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {filtered.map((m) => <Card key={m.name} member={m} />)}
            </div>
            {filtered.length === 0 && <p className="mt-6 text-[#5b5b55]">No members yet in {filter}.</p>}
          </div>
        ) : (
          order.map((role) => {
            const members = team.filter((m) => m.role === role);
            if (!members.length) return null;
            return (
              <div key={role} className="mt-10">
                <h3 className="font-mono2 mb-4 inline-block rounded-full bg-black px-4 py-1 text-xs font-bold uppercase text-white">
                  {roleLabel[role]}
                </h3>
                {role === "organizer" && (
                  <p className="flip-hint font-mono2 mb-4 flex w-fit items-center gap-2 rounded-full border-2 border-black bg-[#ea4335] px-4 py-1.5 text-xs font-bold uppercase text-white shadow-[3px_3px_0_#000]">
                    Click on the card to flip it{" "}
                    <span className="flip-hint-arrow" aria-hidden="true">↙</span>
                  </p>
                )}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {members.map((m) => <Card key={m.name} member={m} />)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
