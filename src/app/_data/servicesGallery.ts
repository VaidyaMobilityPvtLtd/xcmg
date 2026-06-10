export type ServiceGalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export const serviceGalleryItems: readonly ServiceGalleryItem[] = [
  {
    src: "/services/service-team.png",
    alt: "XCMG Nepal service technicians at a UHEEM workshop",
    title: "Certified service team",
    caption: "UHEEM technicians in branded workshop gear, ready to support your fleet on site.",
  },
  {
    src: "/services/service-genuine-parts.png",
    alt: "Genuine Cummins and DCEC engine filters installed on XCMG equipment",
    title: "Genuine parts fitted",
    caption: "OEM filters and components installed to protect engine life and machine uptime.",
  },
  {
    src: "/services/service-maintenance.png",
    alt: "XCMG engine bay maintenance with alternator and filtration system",
    title: "Expert maintenance",
    caption: "Hands-on engine and hydraulic care carried out in our service facilities.",
  },
] as const;
