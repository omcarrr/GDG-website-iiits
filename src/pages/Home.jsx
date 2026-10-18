import { useEffect, useLayoutEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import EventsSection from "../components/EventsSection";
import TeamSection from "../components/TeamSection";
import RoadmapSection from "../components/RoadmapSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { ScrollTrigger } from "../lib/gsap";
import { lockScroll, sections, scrollToSection } from "../lib/lenis";

export default function Home() {
  const [started, setStarted] = useState(false);

  // No scrolling behind the preloader; always start the page at the top.
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    lockScroll(!started);
    return () => lockScroll(false);
  }, [started]);

  // Deep links like /team land on Home, then glide to that section once the preloader is gone.
  useEffect(() => {
    if (!started) return;
    const match = sections.find((s) => s.path === window.location.pathname && s.id !== "home");
    if (!match) return;
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
      scrollToSection(match.id);
    }, 400);
    return () => clearTimeout(id);
  }, [started]);

  return (
    <>
      {!started && <Preloader onDone={() => setStarted(true)} />}
      <Navbar />
      <main>
        <Hero started={started} />
        <Ticker />
        <About />
        <WhatWeDo />
        <EventsSection />
        <TeamSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
