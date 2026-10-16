import { Link } from "react-router-dom";

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
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/team" className="hover:underline">Team</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-mono2 text-xs font-bold uppercase opacity-60">Reach us</div>
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold">
            <a href="mailto:gdg@iiits.in" className="hover:underline">gdg@iiits.in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>
      <div className="font-mono2 mx-auto mt-10 max-w-6xl border-t border-white/20 pt-4 text-xs opacity-60">
        © 2026 GDG IIIT Sri City • Built with GSAP + ♥ on campus
      </div>
    </footer>
  );
}
