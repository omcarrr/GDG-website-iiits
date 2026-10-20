import { sections, scrollToSection } from "../lib/lenis";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[#111] px-4 py-12 text-[#fffcf2] sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="font-display text-xl">GDG IIIT Sri City</div>
          <p className="mt-2 text-sm opacity-70">Google Developer Groups on Campus.<br />Learn • Build • Share</p>
        </div>
        <div>
          <div className="font-mono2 text-xs font-bold uppercase opacity-60">Navigate</div>
          <div className="mt-3 flex flex-col items-start gap-2 text-sm font-semibold">
            {sections.map(({ id, label, path }) => (
              <a key={id} href={path} onClick={(e) => { e.preventDefault(); scrollToSection(id); }} className="hover:underline">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono2 text-xs font-bold uppercase opacity-60">Reach us</div>
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold">
            <a href="mailto:gdsc@iiits.in" className="hover:underline">gdsc@iiits.in</a>
            <a href="https://www.instagram.com/gdgiiits/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.linkedin.com/company/gdg-iiits/posts/?feedView=all" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/GDG-IIITS" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>
      <div className="font-mono2 mx-auto mt-10 max-w-6xl border-t border-white/20 pt-4 text-xs opacity-60">
        © 2026 GDG IIIT Sri City • build by GDG Team 2026
      </div>
    </footer>
  );
}
