// Add an event = add an object. Appears on home horizontal + /events automatically.
// images: 2 cover shots shown on the card. Placeholders live in public/images/events/.
// gallery: 6-10 photos shown when the card is expanded. Drop them in
//   public/images/events/<slug>/1.jpg, 2.jpg, … — missing files show a striped placeholder.
// details / highlights / date / venue: shown in the expanded view.
const gallery = (slug, n = 8) => Array.from({ length: n }, (_, i) => `/images/events/${slug}/${i + 1}.jpg`);

export const events = [
  {
    slug: "chakravyuh-2024",
    title: "Chakravyuh",
    year: "2024",
    date: "March 2024",
    venue: "IIIT Sri City — Main Auditorium",
    tags: ["Flagship", "Hackathon"],
    blurb: "Our flagship multi-round tech battle — DSA, dev and quizzing.",
    details:
      "Chakravyuh is GDG IIITS's flagship event: a multi-round gauntlet where teams fight through DSA puzzles, a timed dev sprint and a rapid-fire tech quiz. Only the sharpest make it to the final round.",
    highlights: ["3 elimination rounds", "Teams from across campus", "Prizes + swag for top teams"],
    images: ["/images/events/chakra-1.JPG", "/images/events/chakra-2.JPG"],
    gallery: gallery("chakravyuh-2024", 10),
  },
  {
    slug: "cloud-study-jam-2024",
    title: "Cloud Study Jam",
    year: "2024",
    date: "August 2024",
    venue: "IIIT Sri City — Computer Lab",
    tags: ["Cloud", "GenAI"],
    blurb: "Hands-on Google Cloud + Arcade labs with Qwiklabs credits.",
    details:
      "A guided sprint through Google Cloud fundamentals and GenAI labs on Google Cloud Skills Boost. Participants earned skill badges, Arcade points and walked away with working deployments.",
    highlights: ["Free Qwiklabs credits", "Skill badges earned", "Live mentor help"],
    images: ["/images/events/cloud-1.JPG", "/images/events/cloud-2.JPG"],
    gallery: gallery("cloud-study-jam-2024"),
  },
  {
    slug: "git-bootcamp-2024",
    title: "Git Bootcamp",
    year: "2024",
    date: "October 2024",
    venue: "IIIT Sri City — Lecture Hall",
    tags: ["Git", "GitHub"],
    blurb: "Zero-to-PR bootcamp: commits, branches, merges, open source.",
    details:
      "A beginner-friendly bootcamp that took students from their first commit to their first pull request — branching, resolving merge conflicts and contributing to a real open-source repo.",
    highlights: ["First PR for most attendees", "Live merge-conflict drills", "Open-source starter list"],
    images: ["/images/events/git-1.JPG", "/images/events/git-2.JPG"],
    gallery: gallery("git-bootcamp-2024", 10),
  },
  {
    slug: "techfest-2025",
    title: "TechFest",
    year: "2025",
    date: "January 2025",
    venue: "IIIT Sri City Campus",
    tags: ["Fest", "Talks"],
    blurb: "Campus tech fest with speakers, demos and build nights.",
    details:
      "Our campus tech fest packed into one weekend: industry speakers, project demos from every domain team, a late-night build session and plenty of community time.",
    highlights: ["Industry speaker sessions", "Domain team demos", "Overnight build night"],
    images: ["/images/events/techfest-1.JPG", "/images/events/techfest-2.JPG"],
    gallery: gallery("techfest-2025", 10),
  },
  {
    slug: "build-with-ai-2025",
    title: "Build with AI",
    year: "2025",
    date: "April 2025",
    venue: "IIIT Sri City — Innovation Lab",
    tags: ["Gemini", "AI"],
    blurb: "Prompt-to-product sprint using Gemini API + Vertex AI.",
    details:
      "A prompt-to-product sprint where teams built working AI apps on the Gemini API and Vertex AI in a single day, then demoed them to a panel of mentors.",
    highlights: ["Gemini API hands-on", "Same-day demos", "Mentor feedback panel"],
    images: ["/images/events/ai-1.JPG", "/images/events/ai-2.JPG"],
    gallery: gallery("build-with-ai-2025"),
  },
  {
    slug: "solution-challenge-2025",
    title: "Solution Challenge",
    year: "2025",
    date: "February 2025",
    venue: "IIIT Sri City + Online",
    tags: ["Global", "SDG"],
    blurb: "Google global challenge — student teams solving for SDGs.",
    details:
      "Google's global Solution Challenge, run locally by GDG IIITS. Student teams picked a UN Sustainable Development Goal and built a solution with Google tech, with mentoring through every stage.",
    highlights: ["UN SDG-focused projects", "Mentoring rounds", "Global submission"],
    images: ["/images/events/solution-1.JPG", "/images/events/solution-2.JPG"],
    gallery: gallery("solution-challenge-2025", 8),
  },
];
