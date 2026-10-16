// Order: 1 organizer → 2 co-organizers → 3 executives → 12-14 members.
// domain: AIML | Backend | AppDev | DevRel | null (for leads)
const ph = "/images/team/placeholder.svg";

export const team = [
  { name: "Your Name", role: "organizer", title: "Organiser / Club Coordinator", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Co-Organiser One", role: "co-organizer", title: "Co-Organiser", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Co-Organiser Two", role: "co-organizer", title: "Co-Organiser", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Executive One", role: "executive", title: "Executive — Operations", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Executive Two", role: "executive", title: "Executive — Events", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Executive Three", role: "executive", title: "Executive — Outreach", domain: null, photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AIML Member 1", role: "member", title: "AIML", domain: "AIML", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AIML Member 2", role: "member", title: "AIML", domain: "AIML", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AIML Member 3", role: "member", title: "AIML", domain: "AIML", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Backend Member 1", role: "member", title: "Backend", domain: "Backend", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Backend Member 2", role: "member", title: "Backend", domain: "Backend", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "Backend Member 3", role: "member", title: "Backend", domain: "Backend", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AppDev Member 1", role: "member", title: "Application Dev", domain: "AppDev", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AppDev Member 2", role: "member", title: "Application Dev", domain: "AppDev", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "AppDev Member 3", role: "member", title: "Application Dev", domain: "AppDev", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "DevRel Member 1", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "DevRel Member 2", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph, socials: { linkedin: "#", github: "#" } },
  { name: "DevRel Member 3", role: "member", title: "Developer Relations", domain: "DevRel", photo: ph, socials: { linkedin: "#", github: "#" } },
];

export const roleLabel = {
  organizer: "Organiser",
  "co-organizer": "Co-Organisers",
  executive: "Executives",
  member: "Members",
};
