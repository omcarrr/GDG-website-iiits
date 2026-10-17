import { useState } from "react";

const domainColor = {
  AIML: "#4285f4",
  Backend: "#ea4335",
  AppDev: "#34a853",
  DevRel: "#fbbc05",
};

export default function MemberCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const c = member.domain ? domainColor[member.domain] : "#111111";
  const toggle = () => setFlipped((f) => !f);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${member.name} — tap to ${flipped ? "show photo" : "read more"}`}
      data-cursor={flipped ? "Back" : "Flip"}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      }}
      className="flip-card transition-transform hover:-translate-y-1"
    >
      <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="flip-face card-shadow rounded-2xl border-2 border-black bg-white p-4">
          <div className="img-placeholder overflow-hidden rounded-xl border-2 border-black">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              width={300}
              height={300}
              className="aspect-square w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <h3 className="font-display mt-3 text-base leading-tight">{member.name}</h3>
          <p className="font-mono2 mt-1 text-[11px] font-bold uppercase text-[#5b5b55]">{member.title}</p>
          {member.domain && (
            <span className="font-mono2 mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold uppercase text-white" style={{ background: c }}>
              {member.domain}
            </span>
          )}
        </div>

        <div className="flip-face flip-back card-shadow flex flex-col rounded-2xl border-2 border-black bg-black p-4 text-white">
          <span className="h-2 w-10 rounded-full" style={{ background: member.domain ? c : "#fbbc05" }} />
          <h3 className="font-display mt-3 text-base leading-tight">{member.name}</h3>
          <p className="font-mono2 mt-1 text-[11px] font-bold uppercase opacity-60">{member.title}</p>
          <p className="mt-3 text-xs leading-relaxed opacity-90 sm:text-sm">{member.bio}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {Object.entries(member.socials ?? {}).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open"
                tabIndex={flipped ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
                className="font-mono2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase text-black hover:bg-[#fbbc05]"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
