// Add an event = add an object. Appears in the home Events section, sorted newest date first.
// images: 2 cover shots shown on the card. Placeholders live in public/images/events/.
// gallery: 6-10 photos shown when the card is expanded. Drop them in
//   public/images/events/<slug>/1.jpg, 2.jpg, … — missing files show a striped placeholder.
// details / highlights / date / venue: shown in the expanded view.
const gallery = (slug, n = 8) =>
  Array.from({ length: n }, (_, i) => `/images/events/${slug}/${i + 1}.webp`);

export const events = [
  // TODO: confirm 2026 dates, venues and copy. Covers/gallery read from
  // public/images/events/<slug>/ — striped placeholders show until photos are added.
  {
    slug: "intro-session-2026",
    title: "Introductory Session",
    year: "2026",
    date: "August 2026",
    venue: "IIIT Sri City — Main Auditorium",
    tags: ["Community", "Kickoff"],
    blurb: "Season kickoff: meet the team, the domains and what's coming this year.",
    details:
      "The kickoff for the 2026 season. We introduced GDG IIIT Sri City, the domain teams (AI/ML, Backend, App Dev, DevRel), the year's event lineup and how first-years can get involved from day one.",
    highlights: ["Meet the core team", "Domain walkthroughs", "How to join + Q&A"],
    images: ["/images/events/intro-session-2026/1.jpg", "/images/events/intro-session-2026/2.jpg"],
    gallery: gallery("intro-session-2026"),
  },
  {
    slug: "git-github-bootcamp-2026",
    title: "Git & GitHub Bootcamp",
    year: "2026",
    date: "September 2026",
    venue: "IIIT Sri City — Computer Lab",
    tags: ["Git", "GitHub"],
    blurb: "Hands-on bootcamp: first commit to first pull request.",
    details:
      "A hands-on bootcamp covering version control from scratch — commits, branches, merges and resolving conflicts — ending with every attendee opening their first pull request on GitHub.",
    highlights: ["Live terminal walkthrough", "Branching + merge-conflict drills", "First PR for every attendee"],
    images: ["/images/events/git-github-bootcamp-2026/1.jpg", "/images/events/git-github-bootcamp-2026/2.jpg"],
    gallery: gallery("git-github-bootcamp-2026"),
  },
  {
    slug: "gen-ai-2024",
    title: "Generative AI",
    year: "2024",
    date: "Jan 2024",
    venue: "IIIT Sri City",
    tags: ["Generative AI", "AI/ML", "Innovation"],
    blurb:
      "Exploring Generative AI, from large language models to creative AI-powered applications.",
    details:
      "A beginner-friendly session introducing students to the world of Generative AI and its growing role in modern technology. The event explored how generative models can create text, images, and other forms of content, while introducing participants to AI-powered tools, practical applications, and opportunities to build intelligent applications using emerging AI technologies.",
    highlights: [
      "Introduction to Generative AI and large language models",
      "Exploring AI-powered tools and applications",
      "Discovering opportunities to build with Generative AI",
    ],
    images: ["/images/events/gen-ai-1.webp", "/images/events/gen-ai-2.webp"],
    gallery: gallery("gen-ai-2024", 6),
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
    highlights: [
      "First PR for most attendees",
      "Live merge-conflict drills",
      "Open-source starter list",
    ],
    images: ["/images/events/git-1.webp", "/images/events/git-2.webp"],
    gallery: gallery("git-bootcamp-2024", 10),
  },
  {
    slug: "mongodb-101",
    title: "MongoDB 101",
    year: "2024",
    date: "2024",
    venue: "IIIT Sri City",
    tags: ["MongoDB", "Database", "Backend"],
    blurb:
      "A beginner-friendly introduction to MongoDB and the fundamentals of NoSQL databases.",
    details:
      "MongoDB 101 introduced students to the fundamentals of MongoDB, a popular NoSQL database. The session explored document-based data storage, collections, CRUD operations, and database management, helping participants understand how MongoDB can be used to store and manage data for modern web applications.",
    highlights: [
      "Introduction to NoSQL and document databases",
      "Understanding collections and documents",
      "Exploring CRUD operations in MongoDB",
    ],
    images: ["/images/events/mongodb-1.webp", "/images/events/mongodb-2.webp"],
    gallery: gallery("mongodb-101-2024", 7),
  },
  {
    slug: "build-with-ai-2024",
    title: "Build with AI",
    year: "2024",
    date: "April 2024",
    venue: "IIIT Sri City — Innovation Lab",
    tags: ["Gemini", "AI"],
    blurb: "Prompt-to-product sprint using Gemini API + Vertex AI.",
    details:
      "A prompt-to-product sprint where teams built working AI apps on the Gemini API and Vertex AI in a single day, then demoed them to a panel of mentors.",
    highlights: [
      "Gemini API hands-on",
      "Same-day demos",
      "Mentor feedback panel",
    ],
    images: ["/images/events/ai-1.webp", "/images/events/ai-2.webp"],
    gallery: gallery("build-with-ai-2024", 6),
  },
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
    highlights: [
      "3 elimination rounds",
      "Teams from across campus",
      "Prizes + swag for top teams",
    ],
    images: ["/images/events/chakra-1.webp", "/images/events/chakra-2.webp"],
    gallery: gallery("chakravyuh-2024", 14),
  },
  {
    slug: "techfest-2024",
    title: "TechFest",
    year: "2024",
    date: "January 2024",
    venue: "IIIT Sri City Campus",
    tags: ["Fest", "Talks"],
    blurb:
      "Campus tech fest with speakers, demos and build nights. (No photos available)",
    details:
      "Our campus tech fest packed into one weekend: industry speakers, project demos from every domain team, a late-night build session and plenty of community time.",
    highlights: [
      "Industry speaker sessions",
      "Domain team demos",
      "Overnight build night",
    ],
    images: [
      "/images/events/techfest-1.webp",
      "/images/events/techfest-2.webp",
    ],
    gallery: gallery("techfest-2024", 0),
  },
  {
    slug: "mira-network-2025",
    title: "Mira Network",
    year: "2025",
    date: "Jan 2025",
    venue: "IIIT Sri City + Online",
    tags: ["AI", "Web3", "Innovation"],
    blurb:
      "Exploring decentralized AI and building more reliable, trustworthy AI systems. A hands-on session with Mira Network, an AI verification platform.",
    details:
      "An exploration of Mira Network, a decentralized AI verification platform that uses multiple AI models and collective intelligence to verify AI-generated outputs. The initiative highlights how emerging technologies can help address AI hallucinations and improve the reliability of AI-powered applications.",
    highlights: [
      "Decentralized AI verification",
      "Reliable and trustworthy AI",
      "Exploring emerging AI technologies",
    ],
    images: ["/images/events/mira-1.webp", "/images/events/mira-2.webp"],
    gallery: gallery("mira-network-2025", 12),
  },
  {
    slug: "empowering-women-in-tech",
    title: "Empowering Women in Tech",
    year: "2025",
    date: "April 2025",
    venue: "IIIT Sri City",
    tags: ["Women in Tech", "Empowerment"],
    blurb:
      "Navigating the future of technology through the perspectives and aspirations of women.",
    details:
      "Empowering Women in Tech celebrated the role of women in shaping the future of technology. The event aimed to inspire students to explore opportunities in the tech industry, highlight the importance of women's contributions to innovation, and encourage greater confidence, inclusion, and participation in technology.",
    highlights: [
      "Celebrating women's contributions to technology",
      "Exploring opportunities in the tech industry",
      "Encouraging inclusion and empowerment",
    ],
    images: ["/images/events/women-1.webp", "/images/events/women-2.webp"],
    gallery: gallery("empowering-women-in-tech-2025", 7),
  },
  {
    slug: "gdg-x-iota-2025",
    title: "GDG x IOTA: Git Bootcamp",
    year: "2025",
    date: "October 21st to 23rd, 2025",
    venue: "IIIT Sri City — Lecture Hall",
    tags: ["Git", "GitHub", "Collaboration"],
    blurb: "Zero-to-PR bootcamp: commits, branches, merges, open source.",
    details:
      "A beginner-friendly bootcamp that took students from their first commit to their first pull request — branching, resolving merge conflicts and contributing to a real open-source repo.",
    highlights: [
      "First PR for most attendees",
      "Live merge-conflict drills",
      "Open-source starter list",
    ],
    images: [
      "/images/events/gdg-x-iota-1.webp",
      "/images/events/gdg-x-iota-2.webp",
    ],
    gallery: gallery("gdg-x-iota-2025", 10),
  },
  {
    slug: "cloud-study-jam-2025",
    title: "Cloud Study Jam",
    year: "2025",
    date: "October 24th, 2025",
    venue: "IIIT Sri City — Computer Lab",
    tags: ["Cloud", "GenAI"],
    blurb: "Hands-on Google Cloud + Arcade labs with Qwiklabs credits.",
    details:
      "A guided sprint through Google Cloud fundamentals and GenAI labs on Google Cloud Skills Boost. Participants earned skill badges, Arcade points and walked away with working deployments.",
    highlights: [
      "Free Qwiklabs credits",
      "Skill badges earned",
      "Live mentor help",
    ],
    images: ["/images/events/cloud-1.webp", "/images/events/cloud-2.webp"],
    gallery: gallery("cloud-study-jam-2025", 6),
  },
  {
    slug: "chakravyuh-2025",
    title: "Chakravyuh",
    year: "2025",
    date: "November 4th and 5th, 2025",
    venue: "IIIT Sri City — Main Auditorium",
    tags: ["Flagship", "Hackathon"],
    blurb: "Our flagship multi-round tech battle — DSA, dev and quizzing.",
    details:
      "Chakravyuh is GDG IIITS's flagship event: a multi-round gauntlet where teams fight through DSA puzzles, a timed dev sprint and a rapid-fire tech quiz. Only the sharpest make it to the final round.",
    highlights: [
      "3 elimination rounds",
      "Teams from across campus",
      "Prizes + swag for top teams",
    ],
    images: [
      "/images/events/chakra25-1.webp",
      "/images/events/chakra25-2.webp",
    ],
    gallery: gallery("chakravyuh-2025", 4),
  },
  {
    slug: "day-zero-to-zero-day-2025",
    title: "Day Zero to Zero Day",
    year: "2025",
    date: "November 12, 2025",
    venue: "IIIT Sri City",
    tags: ["Cybersecurity", "Ethical Hacking"],
    blurb:
      "An introduction to cybersecurity, from career pathways to ethical hacking and digital forensics.",
    details:
      "A beginner-friendly session for students that introduced the fundamentals of cybersecurity. The session explored what cybersecurity is, how to begin a career in the field, and fascinating concepts in ethical hacking, digital forensics, and secure coding. No prior knowledge was required, and attendees walked away with a clear roadmap for exploring cybersecurity.",
    highlights: [
      "Cybersecurity fundamentals and career roadmap",
      "Introduction to ethical hacking and digital forensics",
      "Exploring secure coding practices",
    ],
    images: [
      "/images/events/day-zero-1.webp",
      "/images/events/day-zero-2.webp",
    ],
    gallery: gallery("day-zero-to-zero-day-2025", 8),
  },
  {
    slug: "immersive-xr-bootcamp-2025",
    title: "Immersive XR Bootcamp",
    year: "2025",
    date: "September 15, 2025",
    venue: "IIIT Sri City — In collaboration with HCI Lab",
    tags: ["XR", "AR/VR", "HCI"],
    blurb:
      "A hands-on introduction to Extended Reality, exploring immersive technologies and their real-world applications.",
    details:
      "Immersive XR Bootcamp introduced 102 UG1 students to the world of Extended Reality (XR), covering Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). Conducted in collaboration with the HCI Lab, the bootcamp explored XR development tools, frameworks, and applications across industries such as gaming, education, and healthcare.",
    highlights: [
      "Introduction to VR, AR, and MR",
      "Exploring XR development tools and frameworks",
      "Real-world applications of immersive technologies",
    ],
    images: ["/images/events/xr-1.webp", "/images/events/xr-2.webp"],
    gallery: gallery("immersive-xr-bootcamp-2025", 0),
  },
  {
    slug: "tech-sprint-2026",
    title: "Tech Sprint",
    year: "2026",
    date: "Jan 16th to 21st, 2026",
    venue: "IIIT Sri City — Innovation Lab",
    tags: ["Innovation", "Workshop"],
    blurb:
      "A fast-paced tech sprint where students collaborate, build, and bring ideas to life.",
    details:
      "Tech Sprint brought students together to brainstorm ideas, collaborate in teams, and work on technology-driven solutions. The event encouraged hands-on learning, creative problem-solving, and teamwork in a fast-paced environment.",
    highlights: [
      "Collaborative problem-solving",
      "Hands-on technical experience",
      "Teamwork and innovation",
    ],
    images: ["/images/events/tech-1.webp", "/images/events/tech-2.webp"],
    gallery: gallery("tech-sprint-2026", 6),
  },
  {
    slug: "build-with-ai-2026",
    title: "Build with AI",
    year: "2026",
    date: "February 5th, 2026",
    venue: "IIIT Sri City — Innovation Lab",
    tags: ["Gemini", "AI"],
    blurb: "Prompt-to-product sprint using Gemini API + Vertex AI.",
    details:
      "A prompt-to-product sprint where teams built working AI apps on the Gemini API and Vertex AI in a single day, then demoed them to a panel of mentors.",
    highlights: [
      "Gemini API hands-on",
      "Same-day demos",
      "Mentor feedback panel",
    ],
    images: ["/images/events/ai26-1.webp", "/images/events/ai26-2.webp"],
    gallery: gallery("build-with-ai-2026", 3),
  },
  {
    slug: "solution-challenge-2026",
    title: "Solution Challenge",
    year: "2026",
    date: "March 12th, 2026",
    venue: "IIIT Sri City + Online",
    tags: ["Global", "SDG"],
    blurb: "Google global challenge — student teams solving for SDGs.",
    details:
      "Google's global Solution Challenge, run locally by GDG IIITS. Student teams picked a UN Sustainable Development Goal and built a solution with Google tech, with mentoring through every stage.",
    highlights: [
      "UN SDG-focused projects",
      "Mentoring rounds",
      "Global submission",
    ],
    images: [
      "/images/events/solution-1.webp",
      "/images/events/solution-2.webp",
    ],
    gallery: gallery("solution-challenge-2026", 0),
  },
  {
    slug: "cosmix-2026",
    title: "Cosmix",
    year: "2026",
    date: "March 26th to 27th, 2026",
    venue:
      "IIIT Sri City — In collaboration with Student Satellite Group and GalaxEye",
    tags: ["Space Tech", "AI/ML", "Hackathon"],
    blurb:
      "A space-tech hackathon challenging innovators to solve real-world problems using satellite imagery, AI, and orbital mission design.",
    details:
      "Cosmix was a space-tech hackathon held during Abhisarga, organized in collaboration with the Student Satellite Group of IIIT Sri City and GalaxEye. With 211 registrations from across India, the event featured three specialized problem tracks: ship detection in SAR imagery using lightweight AI models, LEO mission design involving orbital calculations and delta-v budgeting, and multi-sensor fusion for building height estimation using SpaceNet-6 data. The competition began with online PPT submissions, followed by a 36-hour offline finale at IIIT Sri City for shortlisted teams.",
    highlights: [
      "211 registrations",
      "Three tracks spanning AI, satellite imagery, and orbital design",
      "36-hour offline hackathon finale",
    ],
    images: ["/images/events/cosmix-1.webp", "/images/events/cosmix-2.webp"],
    gallery: gallery("cosmix-2026", 0),
  },
];
