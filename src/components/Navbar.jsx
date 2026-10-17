import { Link, NavLink } from "react-router-dom";

const linkCls = ({ isActive }) =>
  `font-mono2 rounded-full border-2 border-black px-4 py-1 text-xs font-bold uppercase transition-colors ${
    isActive ? "bg-black text-white" : "bg-white hover:bg-[#fbbc05]"
  }`;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[80] px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-2xl border-2 border-black bg-[#fffcf2]/90 px-3 py-2 backdrop-blur">
        <Link to="/" className="flex items-center gap-2" data-cursor="Home">
          <img src="/images/logo/GDG_LOGO.png" alt="GDG Logo" className="h-8 w-8 rounded-full object-contain" />
          <span className="font-display text-sm sm:text-base">GDG <span className="hidden sm:inline">IIIT Sri City</span></span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <NavLink to="/events" className={linkCls}>Events</NavLink>
          <NavLink to="/team" className={linkCls}>Team</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
