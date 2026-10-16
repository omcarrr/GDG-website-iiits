import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import TeamSection from "../components/TeamSection";
import MemberCard from "../components/MemberCard";
import { team } from "../data/team";

const filters = ["All", "AIML", "Backend", "AppDev", "DevRel"];

export default function TeamPage() {
  const [f, setF] = useState("All");
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6">
        <p className="font-mono2 text-xs font-bold uppercase text-[#5b5b55]">Humans</p>
        <h1 className="font-display text-4xl sm:text-6xl">Our team</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((d) => (
            <button
              key={d}
              onClick={() => setF(d)}
              data-cursor={d}
              className={`font-mono2 rounded-full border-2 border-black px-4 py-1 text-xs font-bold uppercase ${
                f === d ? "bg-black text-white" : "bg-white hover:bg-[#fbbc05]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <p className="font-mono2 mt-4 text-xs uppercase opacity-60">
          Filter: {f} • edit <code>src/data/team.js</code> to update roster
        </p>
      </main>
      <div className={f === "All" ? "" : "hidden"}>
        <TeamSection preview={false} />
      </div>
      {f !== "All" && <FilteredDomain domain={f} />}
      <Footer />
    </>
  );
}

function FilteredDomain({ domain }) {
  const members = team.filter((m) => m.domain === domain);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {members.map((m) => <MemberCard key={m.name} member={m} />)}
      </div>
      {members.length === 0 && <p className="mt-6 text-[#5b5b55]">No members yet in {domain} — add them in team.js.</p>}
    </section>
  );
}
