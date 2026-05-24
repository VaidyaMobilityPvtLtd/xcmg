"use client";

import { useState, type FormEvent } from "react";
import { contactDepartments } from "../_lib/contactForm";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 w-full min-w-0 border border-[#d8dee8] bg-white px-3 py-2.5 text-sm text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[var(--brand-blue)]";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#64748b]";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [successNote, setSuccessNote] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);
    setSuccessNote(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      department: String(data.get("department") ?? "general"),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        method?: string;
        mailto?: string;
        message?: string;
      };

      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong. Please try again or call us directly.");
        setState("error");
        return;
      }

      if (json.method === "mailto" && json.mailto) {
        window.location.href = json.mailto;
        setSuccessNote(
          json.message ??
            "Your email app should open with a draft. Send the message to reach our team.",
        );
      } else {
        setSuccessNote("Thank you. Your message has been sent. We will respond as soon as possible.");
        form.reset();
      }

      setState("success");
    } catch {
      setError("Network error. Please check your connection or contact us by phone.");
      setState("error");
    }
  }

  return (
    <section className="min-w-0" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
        Send a message
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64748b]">
        Enquire about equipment, parts, or service. We route your message to the right UHEEM department.
      </p>

      {state === "success" && successNote ? (
        <p
          className="mt-4 rounded-sm border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]"
          role="status"
        >
          {successNote}
        </p>
      ) : null}

      {state === "error" && error ? (
        <p className="mt-4 rounded-sm border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]" role="alert">
          {error}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name <span className="text-[var(--brand-blue)]">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              disabled={state === "submitting"}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-[var(--brand-blue)]">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              disabled={state === "submitting"}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              disabled={state === "submitting"}
            />
          </div>
          <div>
            <label htmlFor="contact-company" className={labelClass}>
              Company / project
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClass}
              disabled={state === "submitting"}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-department" className={labelClass}>
            Department <span className="text-[var(--brand-blue)]">*</span>
          </label>
          <select
            id="contact-department"
            name="department"
            required
            defaultValue="general"
            className={inputClass}
            disabled={state === "submitting"}
          >
            {contactDepartments.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message <span className="text-[var(--brand-blue)]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y min-h-[120px]`}
            disabled={state === "submitting"}
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex min-h-[44px] w-full items-center justify-center bg-[var(--brand-blue)] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0a3376] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
}
