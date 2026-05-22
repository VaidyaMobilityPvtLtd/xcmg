/** UHEEM service outlet cities (order matches published outlet list). */
export const serviceOutletLocations = [
  { order: 1, name: "Kathmandu", region: "Bagmati Province", role: "Head office & central dispatch" },
  { order: 2, name: "Pokhara", region: "Gandaki Province", role: "Western region support" },
  { order: 3, name: "Janakpur", region: "Madhesh Province", role: "Terai & eastern corridor" },
  { order: 4, name: "Birgunj", region: "Madhesh Province", role: "Border trade & industrial belt" },
  { order: 5, name: "Itahari", region: "Koshi Province", role: "Eastern Nepal coverage" },
] as const;

export const serviceOutletSupportPillars = [
  {
    title: "Coverage and dispatch",
    body: "UHEEM coordinates field service planning, regional response, and spare parts support to reduce downtime and keep your projects on schedule.",
  },
  {
    title: "Site-first support model",
    body: "For active jobsites, service routing prioritizes equipment criticality, accessibility, and turnaround time to maintain operational continuity.",
  },
  {
    title: "Parts & technical backup",
    body: "Genuine XCMG parts channels and technical guidance are aligned with outlet coverage so repairs do not wait on long logistics loops.",
  },
] as const;
