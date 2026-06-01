/** Canonical UHEEM contact details — footer, About, Services, and product CTAs. */

export type DepartmentContact = {
  title: string;
  tagline: string;
  email: string;
};

export type SitePhoneLine = {
  /** Omitted for the main office line */
  label?: string;
  tel: string;
  display: string;
};

export const sitePhoneLines: SitePhoneLine[] = [
  { tel: "+97714542901", display: "+977-01-4542901" },
  { label: "Equipment inquiries", tel: "+9779851403028", display: "9851403028" },
  { label: "Spare parts & service", tel: "+9779851217690", display: "9851217690" },
];

export const siteContacts = {
  legalName: "United Heavy Equipment and Earth Movers Pvt. Ltd.",
  localityLine: "Ananda Nagar, Kathmandu",
  postalCountryLine: "44600, Nepal",
  phones: {
    lines: sitePhoneLines,
    primary: sitePhoneLines[0],
    equipmentInquiries: sitePhoneLines[1],
    sparePartsService: sitePhoneLines[2],
    /** @deprecated Use equipmentInquiries or sparePartsService */
    mobile: sitePhoneLines[2],
  },
  generalEmail: "info@uheem.com.np",
  departments: [
    {
      title: "Sales",
      tagline: "We believe in long term business relationships that are based on mutual goals",
      email: "sales@uheem.com.np",
    },
    {
      title: "Services",
      tagline: "We believe in long term business relationships that are based on mutual goals",
      email: "service@uheem.com.np",
    },
    {
      title: "Parts",
      tagline: "We believe in long term business relationship that are based on mutual goals",
      email: "spareparts@uheem.com.np",
    },
  ] satisfies DepartmentContact[],
} as const;

export const officeMapsQuery = `${siteContacts.legalName}, ${siteContacts.localityLine}, ${siteContacts.postalCountryLine}`;

export const officeMapsEmbedSrc =
  "https://maps.google.com/maps?q=" + encodeURIComponent(officeMapsQuery) + "&z=16&output=embed";

export const officeMapsExternalHref =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(officeMapsQuery);
