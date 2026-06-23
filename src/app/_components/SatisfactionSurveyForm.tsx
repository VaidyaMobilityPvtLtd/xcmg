"use client";

import { useState, type FormEvent } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 w-full min-w-0 rounded-md border border-[#d8dee8] bg-white px-3 py-2.5 text-sm text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[var(--brand-blue)]";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#64748b]";

const ratingOptions = [
  { value: "5", label: "Excellent" },
  { value: "4", label: "Good" },
  { value: "3", label: "Average" },
  { value: "2", label: "Below average" },
  { value: "1", label: "Poor" },
] as const;

const experienceAreas = [
  { value: "after-sales", label: "After-sales service" },
  { value: "parts", label: "Spare parts" },
  { value: "sales", label: "Sales & delivery" },
  { value: "other", label: "Other UHEEM support" },
] as const;

function buildSurveyMessage(data: {
  rating: string;
  ratingLabel: string;
  area: string;
  areaLabel: string;
  equipment: string;
  wentWell: string;
  improve: string;
}): string {
  return [
    "Customer Satisfaction Survey submission",
    "",
    `Overall rating: ${data.rating}/5 — ${data.ratingLabel}`,
    `Experience area: ${data.areaLabel}`,
    data.equipment ? `Equipment / model: ${data.equipment}` : null,
    "",
    data.wentWell ? `What went well:\n${data.wentWell}` : null,
    "",
    `What could improve:\n${data.improve}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function SatisfactionSurveyForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [successNote, setSuccessNote] = useState<string | null>(null);
  const [rating, setRating] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);
    setSuccessNote(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const equipment = String(data.get("equipment") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const wentWell = String(data.get("wentWell") ?? "").trim();
    const improve = String(data.get("improve") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (!rating) {
      setError("Please select an overall satisfaction rating.");
      setState("error");
      return;
    }

    const ratingLabel = ratingOptions.find((option) => option.value === rating)?.label ?? rating;
    const areaLabel = experienceAreas.find((option) => option.value === area)?.label ?? area;

    const payload = {
      name,
      email,
      phone,
      company,
      department: "services",
      message: buildSurveyMessage({
        rating,
        ratingLabel,
        area,
        areaLabel,
        equipment,
        wentWell,
        improve,
      }),
      website,
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
            "Your email app should open with a draft. Send the message to complete your survey.",
        );
      } else {
        setSuccessNote("Thank you. Your feedback has been sent to our service team.");
        form.reset();
        setRating("");
      }

      setState("success");
    } catch {
      setError("Network error. Please check your connection or contact us by phone.");
      setState("error");
    }
  }

  return (
    <section id="survey-form" className="scroll-mt-28 min-w-0" aria-labelledby="survey-form-heading">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
        Share feedback
      </p>
      <h2
        id="survey-form-heading"
        className="mt-2 text-xl font-bold tracking-tight text-[var(--brand-blue)] md:text-2xl"
      >
        Customer satisfaction survey
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
        Responses go directly to the UHEEM service team. Most surveys take about two minutes.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5 rounded-xl border border-[var(--border-subtle)] bg-[#fafbfd] p-5 sm:p-6 md:p-7">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="survey-name" className={labelClass}>
              Your name <span className="text-[var(--brand-blue)]">*</span>
            </label>
            <input id="survey-name" name="name" type="text" required autoComplete="name" className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="survey-email" className={labelClass}>
              Email <span className="text-[var(--brand-blue)]">*</span>
            </label>
            <input id="survey-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="survey-phone" className={labelClass}>
              Phone
            </label>
            <input id="survey-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="survey-company" className={labelClass}>
              Company / project
            </label>
            <input id="survey-company" name="company" type="text" autoComplete="organization" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="survey-equipment" className={labelClass}>
            Equipment model
          </label>
          <input
            id="survey-equipment"
            name="equipment"
            type="text"
            placeholder="e.g. XE215I-K, XC958"
            className={inputClass}
          />
        </div>

        <fieldset>
          <legend className={labelClass}>
            Overall satisfaction <span className="text-[var(--brand-blue)]">*</span>
          </legend>
          <div className="mt-2 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
            {ratingOptions.map((option) => {
              const active = rating === option.value;
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "border-[var(--brand-blue)] bg-[#eff6ff] text-[var(--brand-blue)]"
                      : "border-[#d8dee8] bg-white text-[#334155] hover:border-[var(--brand-blue)]/35"
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                  <input
                    type="radio"
                    name="rating-display"
                    value={option.value}
                    checked={active}
                    onChange={() => setRating(option.value)}
                    className="sr-only"
                  />
                  <span className="font-mono text-xs tabular-nums text-[#64748b]">{option.value}/5</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="survey-area" className={labelClass}>
            What are you rating? <span className="text-[var(--brand-blue)]">*</span>
          </label>
          <select id="survey-area" name="area" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an area
            </option>
            {experienceAreas.map((area) => (
              <option key={area.value} value={area.value}>
                {area.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="survey-went-well" className={labelClass}>
            What went well?
          </label>
          <textarea
            id="survey-went-well"
            name="wentWell"
            rows={3}
            className={`${inputClass} resize-y`}
            placeholder="Response time, technician support, parts delivery, etc."
          />
        </div>

        <div>
          <label htmlFor="survey-improve" className={labelClass}>
            What could we improve? <span className="text-[var(--brand-blue)]">*</span>
          </label>
          <textarea
            id="survey-improve"
            name="improve"
            rows={4}
            required
            minLength={10}
            className={`${inputClass} resize-y`}
            placeholder="Tell us what would make your next experience better."
          />
        </div>

        {error ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}

        {successNote ? (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900" role="status">
            {successNote}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border-subtle)] pt-5">
          <button type="submit" disabled={state === "submitting"} className="inner-cta-solid w-full min-[480px]:w-auto disabled:opacity-60">
            {state === "submitting" ? "Sending…" : "Submit survey"}
          </button>
          <p className="text-xs text-[#94a3b8]">Fields marked * are required.</p>
        </div>
      </form>
    </section>
  );
}
