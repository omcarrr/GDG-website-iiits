const domainColor = {
  AIML: "#4285f4",
  Backend: "#ea4335",
  AppDev: "#34a853",
  DevRel: "#fbbc05",
};

export default function MemberCard({ member }) {
  const c = member.domain ? domainColor[member.domain] : "#111111";
  return (
    <article className="card-shadow rounded-2xl border-2 border-black bg-white p-4 transition-transform hover:-translate-y-1">
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
    </article>
  );
}
