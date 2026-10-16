export default function EventCard({ event }) {
  return (
    <article data-cursor="View" className="card-shadow w-[78vw] shrink-0 rounded-2xl border-2 border-black bg-white p-4 sm:w-[380px]">
      <div className="grid grid-cols-2 gap-2">
        {event.images.map((src, i) => (
          <div key={i} className="img-placeholder overflow-hidden rounded-xl border-2 border-black">
            <img
              src={src}
              alt={`${event.title} photo ${i + 1}`}
              loading="lazy"
              width={400}
              height={300}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-110"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-display text-xl">{event.title}</h3>
        <span className="font-mono2 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">{event.year}</span>
      </div>
      <p className="mt-1 text-sm text-[#5b5b55]">{event.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {event.tags.map((t) => (
          <span key={t} className="font-mono2 rounded-full border border-black px-2 py-0.5 text-[11px] font-bold uppercase">{t}</span>
        ))}
      </div>
    </article>
  );
}
