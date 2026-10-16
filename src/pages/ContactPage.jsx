import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function ContactPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
        <p className="font-mono2 text-xs font-bold uppercase text-[#5b5b55]">Say hello</p>
        <h1 className="font-display text-4xl sm:text-6xl">Contact us</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="mailto:gdg@iiits.in" data-cursor="Mail" className="card-shadow rounded-2xl border-2 border-black bg-white p-6 hover:-translate-y-1">
            <div className="font-mono2 text-xs font-bold uppercase opacity-60">Email</div>
            <div className="font-display mt-2 text-2xl">gdg@iiits.in</div>
            <div className="mt-2 text-sm text-[#5b5b55]">Official reach-out for collabs, talks, sponsorships.</div>
          </a>
          <div className="card-shadow rounded-2xl border-2 border-black bg-black p-6 text-white">
            <div className="font-mono2 text-xs font-bold uppercase opacity-60">Campus</div>
            <div className="font-display mt-2 text-2xl">IIIT Sri City</div>
            <div className="mt-2 text-sm opacity-70">Sri City, Andhra Pradesh</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Instagram", "LinkedIn", "GitHub", "YouTube"].map((s) => (
                <a key={s} href="#" data-cursor="Open" className="font-mono2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-black hover:bg-[#fbbc05]">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="card-shadow mt-4 rounded-2xl border-2 border-black bg-[#4285f4] p-6 text-white">
          <div className="font-display text-xl">Want to join GDG?</div>
          <p className="mt-1 text-sm opacity-90">Replace this button link with your Google Form / WhatsApp community link.</p>
          <a href="#" data-cursor="Join" className="font-display mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm text-black">Apply →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
