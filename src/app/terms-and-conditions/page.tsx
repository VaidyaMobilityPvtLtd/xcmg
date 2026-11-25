import type { Metadata } from "next";
import LegalDocumentPage from "../_components/LegalDocumentPage";
import { termsSections } from "../_data/legalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | XCMG Nepal",
  description: "Read the terms governing use of the UHEEM and XCMG Nepal website and online enquiries.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalDocumentPage
      title="Terms & Conditions"
      effectiveDate="March 2026"
      intro="These terms explain how the UHEEM website and online enquiries may be used, and outline the terms that apply to website content and digital interactions."
      sections={termsSections}
      originalHref="/legal/terms-and-conditions.pdf"
      originalLabel="Download PDF"
      downloadOriginal
      otherDocument={{ label: "Read Privacy Policy", href: "/privacy-policy" }}
    />
  );
}
