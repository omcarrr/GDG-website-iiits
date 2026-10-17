// Order: 1 organizer → 2 co-organizers → 3 executives → 12-14 members.
// domain: AIML | Backend | AppDev | DevRel | null (for leads)
// bio: 3-4 lines shown on the back of the flip card — replace placeholders with real ones.
const ph = "/images/team/placeholder.svg";

export const team = [
  {
    name: "Your Name", role: "organizer", title: "Organiser / Club Coordinator", domain: null, photo: ph,
    bio: "Leads GDG IIITS end to end — sets the roadmap, works with Google and faculty, and makes sure every event ships. Loves shipping side projects at 2 AM.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Co-Organiser One", role: "co-organizer", title: "Co-Organiser", domain: null, photo: ph,
    bio: "Runs day-to-day club operations alongside the organiser: planning events, onboarding new members and keeping every domain team in sync.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Co-Organiser Two", role: "co-organizer", title: "Co-Organiser", domain: null, photo: ph,
    bio: "Runs day-to-day club operations alongside the organiser: planning events, onboarding new members and keeping every domain team in sync.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Executive One", role: "executive", title: "Executive — Operations", domain: null, photo: ph,
    bio: "Owns one pillar of the club — from venue bookings and budgets to speaker outreach — so that every event lands smoothly on the day.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Executive Two", role: "executive", title: "Executive — Events", domain: null, photo: ph,
    bio: "Owns one pillar of the club — from venue bookings and budgets to speaker outreach — so that every event lands smoothly on the day.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Executive Three", role: "executive", title: "Executive — Outreach", domain: null, photo: ph,
    bio: "Owns one pillar of the club — from venue bookings and budgets to speaker outreach — so that every event lands smoothly on the day.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AIML Member 1", role: "member", title: "AIML", domain: "AIML", photo: ph,
    bio: "Builds with ML and GenAI — training models, hacking on Gemini APIs and running hands-on sessions for juniors getting started with AI.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AIML Member 2", role: "member", title: "AIML", domain: "AIML", photo: ph,
    bio: "Builds with ML and GenAI — training models, hacking on Gemini APIs and running hands-on sessions for juniors getting started with AI.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AIML Member 3", role: "member", title: "AIML", domain: "AIML", photo: ph,
    bio: "Builds with ML and GenAI — training models, hacking on Gemini APIs and running hands-on sessions for juniors getting started with AI.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Backend Member 1", role: "member", title: "Backend", domain: "Backend", photo: ph,
    bio: "Designs APIs, databases and cloud deployments. Usually found debugging servers and mentoring folks through their first backend project.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Backend Member 2", role: "member", title: "Backend", domain: "Backend", photo: ph,
    bio: "Designs APIs, databases and cloud deployments. Usually found debugging servers and mentoring folks through their first backend project.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Backend Member 3", role: "member", title: "Backend", domain: "Backend", photo: ph,
    bio: "Designs APIs, databases and cloud deployments. Usually found debugging servers and mentoring folks through their first backend project.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AppDev Member 1", role: "member", title: "Application Dev", domain: "AppDev", photo: ph,
    bio: "Ships Android and Flutter apps, and helps run app-dev workshops where students go from zero to a working app in a weekend.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AppDev Member 2", role: "member", title: "Application Dev", domain: "AppDev", photo: ph,
    bio: "Ships Android and Flutter apps, and helps run app-dev workshops where students go from zero to a working app in a weekend.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "AppDev Member 3", role: "member", title: "Application Dev", domain: "AppDev", photo: ph,
    bio: "Ships Android and Flutter apps, and helps run app-dev workshops where students go from zero to a working app in a weekend.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "DevRel Member 1", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph,
    bio: "Bridges the club and the community — writes, speaks, runs socials and makes sure every student hears about what we're building.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "DevRel Member 2", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph,
    bio: "Bridges the club and the community — writes, speaks, runs socials and makes sure every student hears about what we're building.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "DevRel Member 3", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph,
    bio: "Bridges the club and the community — writes, speaks, runs socials and makes sure every student hears about what we're building.",
    socials: { linkedin: "#", github: "#" },
  },
];

export const roleLabel = {
  organizer: "Organiser",
  "co-organizer": "Co-Organisers",
  executive: "Executives",
  member: "Members",
};
