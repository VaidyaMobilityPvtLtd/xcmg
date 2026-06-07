/** Cards on `/services` — each opens a dedicated sub-page (except brochure). */

export type ServiceHubCardIcon = "outlet" | "survey" | "finance" | "brochure";

export const serviceHubCards = [
  {
    title: "Service Outlets",
    description: "Local support channels and outlet information for XCMG machinery across Nepal.",
    href: "/services/service-outlets",
    icon: "outlet" as const,
  },
  {
    title: "Satisfaction Survey",
    description: "Share feedback on service quality so we can keep improving.",
    href: "/services/satisfaction-survey",
    icon: "survey" as const,
  },
  {
    title: "Financial Services",
    description: "Financing and commercial options available through UHEEM where applicable.",
    href: "/services/financial-services",
    icon: "finance" as const,
  },
  {
    title: "Download brochure",
    description: "Product and technical literature for the Nepal catalogue.",
    href: "/DownloadBrochure",
    icon: "brochure" as const,
  },
] as const;
