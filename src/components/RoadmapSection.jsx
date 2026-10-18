import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { tracks, branches } from "../data/roadmaps";
import { useSectionReveal } from "../hooks/useSectionReveal";
import FloatWrap from "./FloatWrap";

// Flow chart: branch start node → stage nodes zig-zagging a centre spine (left spine on phones)
// → job-role chips. The spine fills as you scroll; nodes slide in as the fill reaches them.

function StartNode({ track, branch }) {
  const note = track.branchNotes[branch];
  return (
    <div className="rm-node relative pl-14 md:mx-auto md:max-w-2xl md:pl-0">
      <span
        className="rm-dot absolute left-5 top-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black bg-[#fffcf2] text-sm md:left-1/2 md:top-0 md:-translate-y-1/2"
        aria-hidden="true"
      >
        ★
      </span>
      <div className="rm-card md:mt-8">
        <FloatWrap float={{ move: 6, tilt: 4 }} className="rounded-2xl border-2 border-black bg-[#fffcf2] p-5 text-[#111]" style={{ boxShadow: `6px 6px 0 ${track.color}` }}>
          <p className="font-mono2 text-xs font-bold uppercase">Start here · BTech {branch}</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-display text-lg">Your edge</p>
              <ul className="mt-2 space-y-1 text-sm">
                {note.edge.map((t) => <li key={t} className="flex gap-2"><span style={{ color: track.color }}>✓</span>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="font-display text-lg">Add these first</p>
              <ul className="mt-2 space-y-1 text-sm">
                {note.first.map((t) => <li key={t} className="flex gap-2"><span style={{ color: track.color }}>+</span>{t}</li>)}
              </ul>
            </div>
          </div>
        </FloatWrap>
      </div>
    </div>
  );
}

function StageNode({ stage, index, color }) {
  const right = index % 2 === 1;
  return (
    <div className={`rm-node relative pl-14 md:grid md:grid-cols-2 md:gap-20 md:pl-0 ${right ? "rm-right" : "rm-left"}`}>
      <span
        className="rm-dot font-display absolute left-5 top-5 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black text-sm text-white md:left-1/2"
        style={{ background: color }}
        aria-hidden="true"
      >
        {index + 1}
      </span>
      {/* elbow from spine to card on desktop */}
      <span
        className={`absolute top-[37px] hidden h-[3px] w-10 md:block ${right ? "left-1/2" : "right-1/2"}`}
        style={{ background: color }}
        aria-hidden="true"
      />
      <div className={`rm-card ${right ? "md:col-start-2" : ""}`}>
        <FloatWrap
          as="article"
          float={{ move: 6, tilt: 4 }}
          className="rounded-2xl border-2 border-black bg-white p-5 text-[#111]"
          style={{ boxShadow: `6px 6px 0 ${color}` }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl">{stage.title}</h3>
            <span className="font-mono2 rounded-full bg-black px-3 py-1 text-[11px] font-bold text-white">{stage.time}</span>
          </div>

          <p className="font-mono2 mt-4 text-[11px] font-bold uppercase text-[#5b5b55]">What to study</p>
          <ul className="mt-1 space-y-1 text-sm">
            {stage.learn.map((t) => (
              <li key={t} className="flex gap-2"><span className="font-bold" style={{ color }}>→</span>{t}</li>
            ))}
          </ul>

          <p className="font-mono2 mt-4 text-[11px] font-bold uppercase text-[#5b5b55]">Skills you'll have</p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {stage.skills.map((s) => (
              <span key={s} className="font-mono2 rounded-full border-2 border-black px-2 py-0.5 text-[11px] font-bold">{s}</span>
            ))}
          </div>

          <p className="font-mono2 mt-4 text-[11px] font-bold uppercase text-[#5b5b55]">Learn from</p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {stage.resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: color }}
              >
                {r.name} ↗
              </a>
            ))}
          </div>
        </FloatWrap>
      </div>
    </div>
  );
}

function RolesNode({ track }) {
  return (
    <div className="rm-node relative pl-14 md:pl-0">
      <span
        className="rm-dot absolute left-5 top-5 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black bg-[#fbbc05] text-sm md:left-1/2"
        aria-hidden="true"
      >
        ◎
      </span>
      <div className="rm-card md:mx-auto md:max-w-3xl md:pt-16">
        <h3 className="font-display text-2xl text-[#fffcf2] sm:text-4xl md:text-center">Jobs this path leads to</h3>
        <div className="mt-6 flex flex-wrap gap-3 md:justify-center">
          {track.roles.map((r) => (
            <div key={r} className="rm-role">
              <FloatWrap
                float={{ move: 8, tilt: 10 }}
                className="font-display rounded-full border-2 border-black bg-white px-5 py-3 text-sm text-[#111] sm:text-base"
                style={{ boxShadow: `4px 4px 0 ${track.color}` }}
              >
                {r}
              </FloatWrap>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const root = useRef(null);
  const [trackId, setTrackId] = useState(tracks[0].id);
  const [branch, setBranch] = useState(branches[0]);
  const track = tracks.find((t) => t.id === trackId);
  useSectionReveal(root);

  useGSAP(() => {
    const chart = root.current.querySelector(".rm-chart");
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".rm-fill", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: chart, start: "top 65%", end: "bottom 65%", scrub: 0.5 },
      });

      gsap.set(".rm-card", { autoAlpha: 0, y: 40 });
      gsap.set(".rm-right .rm-card", { x: 60, y: 0 });
      gsap.set(".rm-left .rm-card", { x: -60, y: 0 });
      gsap.set(".rm-dot", { scale: 0 });
      gsap.set(".rm-role", { autoAlpha: 0, y: 24, rotation: () => gsap.utils.random(-8, 8) });

      ScrollTrigger.batch(".rm-node", {
        start: "top 72%",
        once: true,
        onEnter: (nodes) => nodes.forEach((n, i) => {
          const tl = gsap.timeline({ delay: i * 0.12 });
          tl.to(n.querySelector(".rm-dot"), { scale: 1, duration: 0.5, ease: "back.out(2.5)" })
            .to(n.querySelector(".rm-card"), { autoAlpha: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.25");
          const roles = n.querySelectorAll(".rm-role");
          if (roles.length) tl.to(roles, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.5, stagger: 0.07, ease: "back.out(2)" }, "-=0.3");
        }),
      });
      ScrollTrigger.refresh();
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [trackId, branch], revertOnUpdate: true });

  return (
    <section ref={root} id="paths" className="relative overflow-hidden border-y-2 border-black bg-[#111] py-20 text-[#fffcf2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="reveal-head font-mono2 text-xs font-bold uppercase opacity-70">For BTech CSE · ECE · AIDS</p>
          <h2 className="reveal-head font-display text-4xl leading-[0.95] sm:text-7xl">Pick your path</h2>
          <p className="reveal-head mt-4 max-w-xl text-base opacity-80 sm:text-lg">
            What to study, where to learn it, the skills you'll pick up and the jobs it leads to. Pick a domain and your branch.
          </p>
        </div>

        <div className="reveal-head mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div role="tablist" aria-label="Domain" className="grid grid-cols-3 gap-2 sm:flex">
            {tracks.map((t) => {
              const active = t.id === trackId;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTrackId(t.id)}
                  className={`font-display rounded-2xl border-2 px-3 py-3 text-sm transition-transform hover:-translate-y-1 sm:px-6 sm:text-lg ${
                    active ? "border-black text-white" : "border-[#fffcf2]/30 bg-transparent text-[#fffcf2]"
                  }`}
                  style={active ? { background: t.color, boxShadow: "4px 4px 0 #fffcf2" } : undefined}
                >
                  {t.short}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Your branch">
            <span className="font-mono2 text-xs font-bold uppercase opacity-70">I'm in</span>
            {branches.map((b) => (
              <button
                key={b}
                type="button"
                aria-pressed={b === branch}
                onClick={() => setBranch(b)}
                className={`font-mono2 rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-colors ${
                  b === branch ? "border-[#fbbc05] bg-[#fbbc05] text-black" : "border-[#fffcf2]/40 hover:border-[#fbbc05]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <p className="font-display mt-8 text-xl sm:text-2xl" style={{ color: track.color }}>{track.tagline}</p>

        <div className="rm-chart relative mt-10 space-y-12 pb-4" role="tabpanel" aria-label={`${track.title} roadmap for ${branch}`}>
          {/* spine: faint track + scroll-filled colour */}
          <div className="pointer-events-none absolute bottom-6 left-5 top-6 w-[3px] -translate-x-1/2 bg-[#fffcf2]/15 md:left-1/2" aria-hidden="true">
            <div className="rm-fill h-full w-full origin-top" style={{ background: track.color }} />
          </div>
          <StartNode track={track} branch={branch} />
          {track.stages.map((s, i) => <StageNode key={s.title} stage={s} index={i} color={track.color} />)}
          <RolesNode track={track} />
        </div>
      </div>
    </section>
  );
}
