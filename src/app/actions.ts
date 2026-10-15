"use server";

export type FormKind = "story" | "contact" | "waitlist" | "newsletter" | "order" | "lesson-proposal";

export type FormResult = { ok: true; reference: string } | { ok: false; error: string };

const REQUIRED: Record<FormKind, string[]> = {
  story: ["name", "story"],
  contact: ["name", "email", "message"],
  waitlist: ["email"],
  newsletter: ["email"],
  order: ["name", "email", "items"],
  "lesson-proposal": ["title", "name", "email"],
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Single entry point for the site's forms. It validates and acknowledges submissions; there is
 * no mail or storage provider configured yet, so accepted entries are only written to the server
 * log. Connect a provider here (email API, CRM, database) before relying on these forms.
 */
export async function submitForm(kind: FormKind, data: Record<string, string>): Promise<FormResult> {
  const clean = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, String(v ?? "").trim().slice(0, 4000)]),
  );
  const missing = REQUIRED[kind].filter((field) => !clean[field]);
  if (missing.length) return { ok: false, error: "Please fill in the required fields." };
  if (clean.email && !EMAIL.test(clean.email)) return { ok: false, error: "Please enter a valid email address." };

  const reference = `IY-${Date.now().toString(36).toUpperCase()}`;
  console.info(`[form:${kind}] ${reference}`, clean);
  return { ok: true, reference };
}
