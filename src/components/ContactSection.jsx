import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";
import FloatWrap from "./FloatWrap";

export default function ContactSection() {
  const root = useRef(null);
  useSectionReveal(root);

  return (
    <section ref={root} id="contact" className="bg-[#34a853] px-4 py-20 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal-head font-display max-w-3xl text-4xl leading-tight sm:text-6xl">
          Have something to build? Let's move it.
        </h2>
        <p className="reveal-head mt-4 max-w-md font-medium opacity-90">
          Stuck on an idea, a project, a club collab — tell us. We make it visible.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <FloatWrap
            as="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gdsc%40iiits.in"
            target="_blank"
            rel="noopener noreferrer"
            className="card-shadow block rounded-2xl border-2 border-black bg-white p-6 text-black"
          >
            <div className="font-mono2 text-xs font-bold uppercase opacity-60">Email</div>
            <div className="font-display mt-2 text-2xl">gdsc@iiits.in</div>
            <div className="mt-2 text-sm text-[#5b5b55]">Official reach-out for collabs, talks, sponsorships.</div>
          </FloatWrap>
          <FloatWrap className="card-shadow rounded-2xl border-2 border-white bg-black p-6 text-white">
            <div className="font-mono2 text-xs font-bold uppercase opacity-60">Campus</div>
            <div className="font-display mt-2 text-2xl">IIIT Sri City</div>
            <div className="mt-2 text-sm opacity-70">Sri City, Andhra Pradesh</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Instagram", url: "https://www.instagram.com/gdgiiits/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/gdg-iiits/posts/?feedView=all" },
                { name: "GitHub", url: "https://github.com/GDG-IIITS" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-black hover:bg-[#fbbc05]"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </FloatWrap>
        </div>
        <FloatWrap
          as="a"
          href="https://chat.whatsapp.com/FeOB3y0AHZ92HrmhnBhyYm"
          target="_blank"
          rel="noreferrer"
          className="card-shadow mt-4 flex flex-col gap-3 rounded-2xl border-2 border-black bg-[#25d366] p-6 text-white sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="font-mono2 inline-block rounded-full bg-black px-3 py-1 text-[11px] font-bold uppercase">
              WhatsApp community
            </div>
            <div className="font-display mt-3 text-2xl sm:text-3xl">Connect with GDG</div>
            <p className="mt-1 max-w-md text-sm font-medium opacity-90">
              Event drops, registrations, build-night calls — everything lands here first.
              Tap to join the community.
            </p>
          </div>
          <span className="font-display inline-flex shrink-0 items-center gap-2 self-start rounded-full border-2 border-black bg-white px-6 py-3 text-sm text-black transition-transform hover:-translate-y-1 sm:self-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25d366]" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.5-.6c.1-.2.1-.4 0-.5L9.4 7.6c-.2-.5-.5-.4-.7-.4h-.5c-.2 0-.5.2-.7.5-.9.9-1.1 2.2-.2 3.9a12 12 0 0 0 4.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2Z" />
            </svg>
            Join →
          </span>
        </FloatWrap>
      </div>
    </section>
  );
}
