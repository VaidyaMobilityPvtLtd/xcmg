import { NextResponse } from "next/server";
import { contactDepartments } from "../../_lib/contactForm";
import {
  buildContactMailto,
  departmentEmail,
  validateContactPayload,
  type ContactFormPayload,
} from "../../_lib/contactForm";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailHtml(payload: ContactFormPayload): string {
  const deptLabel = contactDepartments.find((d) => d.value === payload.department)?.label ?? "General";
  return `
    <h2>New enquiry from XCMG Nepal website</h2>
    <p><strong>Department:</strong> ${escapeHtml(deptLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
    ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `.trim();
}

async function sendViaResend(payload: ContactFormPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = departmentEmail(payload.department);
  const from = process.env.CONTACT_FROM_EMAIL ?? "XCMG Nepal <onboarding@resend.dev>";
  const deptLabel = contactDepartments.find((d) => d.value === payload.department)?.label ?? "General";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[XCMG Nepal] ${deptLabel} — ${payload.name}`,
      html: emailHtml(payload),
    }),
  });

  return res.ok;
}

async function sendViaWeb3Forms(payload: ContactFormPayload): Promise<boolean> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const deptLabel = contactDepartments.find((d) => d.value === payload.department)?.label ?? "General";

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[XCMG Nepal] ${deptLabel} — ${payload.name}`,
      from_name: "XCMG Nepal Website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "—",
      company: payload.company || "—",
      department: deptLabel,
      message: payload.message,
    }),
  });

  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, error: validated.error }, { status: 400 });
  }

  const payload = validated.data;

  if (payload.website) {
    return NextResponse.json({ ok: true, method: "email" });
  }

  if (await sendViaResend(payload)) {
    return NextResponse.json({ ok: true, method: "email" });
  }

  if (await sendViaWeb3Forms(payload)) {
    return NextResponse.json({ ok: true, method: "email" });
  }

  return NextResponse.json({
    ok: true,
    method: "mailto",
    mailto: buildContactMailto(payload),
    message:
      "Email delivery is not configured on the server. Your email app will open with a draft message — please send it to complete your enquiry.",
  });
}
