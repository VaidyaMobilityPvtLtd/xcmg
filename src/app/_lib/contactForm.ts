import { siteContacts } from "../_data/siteContacts";

export const contactDepartments = [
  { value: "general", label: "General enquiry", email: siteContacts.generalEmail },
  { value: "sales", label: "Sales", email: siteContacts.departments[0].email },
  { value: "services", label: "Services", email: siteContacts.departments[1].email },
  { value: "parts", label: "Spare parts", email: siteContacts.departments[2].email },
] as const;

export type ContactDepartmentValue = (typeof contactDepartments)[number]["value"];

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  department: ContactDepartmentValue;
  message: string;
  website?: string;
};

export function departmentEmail(value: string): string {
  return contactDepartments.find((d) => d.value === value)?.email ?? siteContacts.generalEmail;
}

export function buildContactMailto(payload: ContactFormPayload): string {
  const dept = contactDepartments.find((d) => d.value === payload.department);
  const to = dept?.email ?? siteContacts.generalEmail;
  const subject = encodeURIComponent(`Website enquiry — ${dept?.label ?? "General"} — ${payload.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      payload.company ? `Company: ${payload.company}` : null,
      `Department: ${dept?.label ?? "General"}`,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(body: unknown): { ok: true; data: ContactFormPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  const department = typeof raw.department === "string" ? raw.department.trim() : "general";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (message.length < 10) return { ok: false, error: "Please enter a message (at least 10 characters)." };
  if (!contactDepartments.some((d) => d.value === department)) {
    return { ok: false, error: "Please select a department." };
  }

  const website = typeof raw.website === "string" ? raw.website.trim() : "";

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      company,
      department: department as ContactDepartmentValue,
      message,
      website,
    },
  };
}
