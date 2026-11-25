import type { Metadata } from "next";
import LegalDocumentPage from "../_components/LegalDocumentPage";
import { privacySections } from "../_data/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy | XCMG Nepal",
  description: "Read how UHEEM handles personal information collected through the XCMG Nepal website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      effectiveDate="November 2026"
      intro="Learn what information UHEEM collects through this website, how it is used and protected, and how to make a privacy request."
      sections={privacySections}
      originalHref="/legal/privacy-policy.pdf"
      originalLabel="View original PDF"
      otherDocument={{ label: "Read Terms & Conditions", href: "/terms-and-conditions" }}
    />
  );
}
