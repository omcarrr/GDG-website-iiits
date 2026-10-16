import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Lenis from "lenis";
import { ScrollTrigger } from "./lib/gsap";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t) => lenis.raf(t);
    const id = requestAnimationFrame(function loop(time) {
      raf(time);
      requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/events", element: <EventsPage /> },
    { path: "/team", element: <TeamPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "*", element: <Home /> },
  ]);
}
