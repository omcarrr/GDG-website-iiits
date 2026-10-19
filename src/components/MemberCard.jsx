import { useState } from "react";

const domainColor = {
  AIML: "#4285f4",
  Backend: "#ea4335",
  AppDev: "#34a853",
  DevRel: "#fbbc05",
};

const icons = {
  github: (
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  // Google "G" in brand colours, drawn on a white chip
  gdg: (
    <>
      <path fill="#4285f4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81Z" />
      <path fill="#34a853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.88-3c-1.07.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.28v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#fbbc05" d="M5.28 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.28a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path fill="#ea4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.28 6.6l4 3.1C6.22 6.86 8.87 4.75 12 4.75Z" />
    </>
  ),
};
const iconBg = { github: "#111111", linkedin: "#0a66c2", gdg: "#ffffff" };
const iconLabel = { github: "GitHub", linkedin: "LinkedIn", gdg: "GDG Community" };

// "#" in team.js means "not added yet" — skip it rather than render a dead link.
const realSocials = (member) => Object.entries(member.socials ?? {}).filter(([, url]) => url && url !== "#");

// Static card for the club mentor: photo, name, title — no flip side.
function MentorCard({ member }) {
  return (
    <article className="card-shadow flex h-full flex-col rounded-2xl border-2 border-black bg-white p-4">
      <div className="img-placeholder aspect-square overflow-hidden rounded-xl border-2 border-black">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy" decoding="async"
          width={300}
          height={300}
          className="aspect-square w-full object-cover object-top"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      <h3 className="font-display mt-3 text-base line-clamp-2 min-h-[2.5em] leading-tight">{member.name}</h3>
      <p className="font-mono2 mt-1 text-[11px] font-bold line-clamp-2 min-h-[3em] uppercase text-[#5b5b55]">{member.title}</p>
      {/* same footprint as the socials row on member cards, so every card is the same height */}
      <div className="mt-auto h-10 shrink-0" />
    </article>
  );
}

export default function MemberCard({ member }) {
  if (member.role === "mentor") return <MentorCard member={member} />;
  return <FlipMemberCard member={member} />;
}

function FlipMemberCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const c = member.domain ? domainColor[member.domain] : "#111111";
  const toggle = () => setFlipped((f) => !f);
  const socials = realSocials(member);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${member.name} — tap to ${flipped ? "show photo" : "read more"}`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      }}
      className="flip-card"
      data-flipped={flipped}
    >
      <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="flip-face card-shadow flex flex-col rounded-2xl border-2 border-black bg-white p-4">
          <div className="img-placeholder overflow-hidden rounded-xl border-2 border-black">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy" decoding="async"
              width={300}
              height={300}
              className="aspect-square w-full object-cover object-top"
              style={{ objectPosition: member.photoPosition }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <h3 className="font-display mt-3 text-base line-clamp-2 min-h-[2.5em] leading-tight">{member.name}</h3>
          <p className="font-mono2 mt-1 text-[11px] font-bold line-clamp-2 min-h-[3em] uppercase text-[#5b5b55]">{member.title}</p>
          <div className="mt-auto flex min-h-10 items-center justify-between gap-2 pt-2">
            {member.domain ? (
              <span className="font-mono2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold uppercase text-white" style={{ background: c }}>
                {member.domain}
              </span>
            ) : <span />}
            <div className="flex gap-1.5">
              {socials.filter(([name]) => icons[name]).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${iconLabel[name]}`}
                  tabIndex={flipped ? -1 : 0}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-white transition-transform hover:-translate-y-0.5 hover:scale-110"
                  style={{ background: iconBg[name] ?? "#111111" }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">{icons[name]}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div aria-hidden={!flipped} className="flip-face flip-back card-shadow flex flex-col rounded-2xl border-2 border-black bg-black p-4 text-white">
          <span className="h-2 w-10 rounded-full" style={{ background: member.domain ? c : "#fbbc05" }} />
          <h3 className="font-display mt-3 text-base leading-tight">{member.name}</h3>
          <p className="font-mono2 mt-1 text-[11px] font-bold uppercase opacity-60">{member.title}</p>
          {/* bio scrolls inside the card; data-lenis-prevent lets the wheel scroll it instead of the page */}
          <p data-lenis-prevent className="flip-scroll mt-3 min-h-0 flex-1 overflow-y-auto whitespace-pre-line pr-1 text-xs leading-relaxed opacity-90 sm:text-sm">{member.bio}</p>
          <div className="flex shrink-0 flex-wrap gap-2 pt-3">
            {socials.map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
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
