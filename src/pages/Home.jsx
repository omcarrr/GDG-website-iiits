import { useState } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import EventsHorizontal from "../components/EventsHorizontal";
import TeamSection from "../components/TeamSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function Home() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <Cursor />
      {!started && <Preloader onDone={() => setStarted(true)} />}
      <Navbar />
      <main>
        <Hero started={started} />
        <Ticker />
        <About />
        <WhatWeDo />
        <EventsHorizontal />
        <TeamSection preview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
