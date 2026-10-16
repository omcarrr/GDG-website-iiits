import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="border-t-2 border-black bg-[#34a853] px-4 py-20 text-center text-white">
      <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight sm:text-6xl">
        Have something to build? Let's move it.
      </h2>
      <p className="mx-auto mt-4 max-w-md font-medium opacity-90">
        Stuck on an idea, a project, a club collab — tell us. We make it visible.
      </p>
      <Link to="/contact" data-cursor="Go" className="font-display card-shadow mt-8 inline-block rounded-full border-2 border-black bg-white px-8 py-4 text-black transition-transform hover:-translate-y-1">
        Contact us →
      </Link>
    </section>
  );
}
