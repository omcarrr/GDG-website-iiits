import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { team, roleLabel } from "../data/team";
import MemberCard from "./MemberCard";

const order = ["organizer", "co-organizer", "executive", "member"];

export default function TeamSection({ preview = true }) {
  const root = useRef(null);

  useGSAP(() => {
    const batch = ScrollTrigger.batch(".team-card", {
      start: "top 88%",
      onEnter: (els) => gsap.fromTo(els, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, overwrite: true }),
    });
    return () => batch.forEach((st) => st.kill());
  }, { scope: root });

  const list = preview ? team.slice(0, 6) : team;

  return (
    <section ref={root} className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono2 text-xs font-bold uppercase text-[#5b5b55]">The humans</p>
          <h2 className="font-display text-3xl sm:text-5xl">Meet the team</h2>
        </div>
        {preview && (
          <Link to="/team" data-cursor="All" className="font-mono2 rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white">
            Full team →
          </Link>
        )}
      </div>
      <p className="font-mono2 mt-3 inline-block rounded-full bg-[#fbbc05] px-3 py-1 text-[11px] font-bold uppercase text-black">
        Click on the card to flip it
      </p>
      {order.map((role) => {
        const members = list.filter((m) => m.role === role);
        if (!members.length) return null;
        return (
          <div key={role} className="mt-10">
            <h3 className="font-mono2 mb-4 inline-block rounded-full bg-black px-4 py-1 text-xs font-bold uppercase text-white">
              {roleLabel[role]}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {members.map((m) => (
                <div key={m.name} className="team-card">
                  <MemberCard member={m} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
