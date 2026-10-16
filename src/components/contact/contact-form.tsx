"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/icon";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { cn } from "@/lib/cn";

const CATEGORIES = [
  { value: "general", label: "General Inquiry" },
  { value: "join", label: "Join Us / Volunteer" },
  { value: "curriculum", label: "School Book Orders & Curriculum" },
  { value: "manuscript", label: "Manuscript Submission" },
  { value: "festival", label: "Festival & Event Registration" },
  { value: "radio", label: "Skyz Metro FM Radio Show" },
  { value: "archive", label: "Archives, Reports & Lesson Materials" },
  { value: "partnership", label: "Partnerships & Sponsorship" },
  { value: "media", label: "Media & Press" },
];

/** Maps ?topic= values used by links across the site to a category + friendly context. */
const TOPICS: Record<string, { category: string; label: string }> = {
  join: { category: "join", label: "Joining Indlu Yokufundela" },
  volunteer: { category: "join", label: "Volunteering or hosting an event" },
  community: { category: "join", label: "Joining our reader community" },
  partner: { category: "partnership", label: "Partnering with us" },
  registration: { category: "festival", label: "Event registration" },
  events: { category: "festival", label: "Our events team" },
  "school-packet": { category: "curriculum", label: "A festival school packet" },
  bulk: { category: "curriculum", label: "A school bulk catalogue" },
  schools: { category: "curriculum", label: "Our educational team" },
  sample: { category: "curriculum", label: "A sample chapter" },
  archive: { category: "archive", label: "An archive report" },
  "archive-access": { category: "archive", label: "Full lesson archive access" },
  anthology: { category: "archive", label: "A festival anthology" },
  transcript: { category: "archive", label: "A video transcript" },
  materials: { category: "archive", label: "Lesson materials" },
  syllabus: { category: "archive", label: "The course syllabus" },
  "usb-pack": { category: "archive", label: "An offline USB / DVD lesson pack" },
  press: { category: "media", label: "Press & media" },
  beta: { category: "curriculum", label: "The school beta-testing cohort for the mobile app" },
};

const EVENTS: Record<string, string> = {
  "cikoza-sizwe-2026": "5th Biennial Ndebele Literature Festival — Cikoza Sizwe",
  "youth-writing-masterclass": "Bulawayo Youth Creative Writing Masterclass",
  "izibongo-recital-night": "Heritage Oral Storytelling & Izibongo Recital Night",
};

function contextFromUrl() {
  const p = new URLSearchParams(window.location.search);
  const topic = TOPICS[p.get("topic") ?? ""];
  if (!topic) return null;
  const extra = [EVENTS[p.get("event") ?? ""], p.get("year") && `Year: ${p.get("year")}`, p.get("book") && `Title: ${p.get("book")?.replace(/-/g, " ")}`]
    .filter(Boolean)
    .join(" · ");
  const message = `Hello Indlu Yokufundela team,\n\nI'm getting in touch about ${topic.label.toLowerCase()}${extra ? ` (${extra})` : ""}.\n\n`;
  return { ...topic, extra, message };
}

type Variant = "desktop" | "mobile";

const field = {
  desktop:
    "w-full px-5 py-3.5 rounded-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary transition-all",
  mobile:
    "w-full h-[52px] pl-12 pr-4 rounded-full bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:shadow-sm font-body-md text-body-md transition-all",
};

export function ContactForm({ variant }: { variant: Variant }) {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [context, setContext] = useState<{ label: string; extra: string } | null>(null);

  useEffect(() => {
    const ctx = contextFromUrl();
    if (!ctx) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- prefill from the link that brought the visitor here
    setCategory(ctx.category);
    setMessage(ctx.message);
    setContext({ label: ctx.label, extra: ctx.extra });
  }, []);

  const id = (s: string) => `${variant === "mobile" ? "m-" : ""}${s}`;
  const label = cn("font-label-md text-label-md text-on-surface", variant === "desktop" ? "font-medium" : "font-semibold");

  return (
    <ActionForm
      kind="contact"
      className={variant === "desktop" ? "space-y-5" : "flex flex-col gap-space-sm"}
      successTitle="Thank you — message received"
      successBody="An Indlu Yokufundela coordinator will reply within 24 business hours."
    >
      <AnimatePresence>
        {context && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-3 rounded-2xl bg-secondary-container/40 p-4">
              <Icon name="auto_awesome" idle hover="beat" className="mt-0.5 text-[20px] text-on-secondary-container" />
              <div className="min-w-0 flex-1">
                <p className="font-label-cultural-caps text-label-cultural-caps font-bold text-on-secondary-container uppercase">You&apos;re asking about</p>
                <p className="font-title-editorial text-title-editorial text-on-surface">{context.label}</p>
                {context.extra && <p className="font-body-sm text-body-sm text-on-surface-variant">{context.extra}</p>}
              </div>
              <button type="button" aria-label="Clear topic" onClick={() => setContext(null)} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-surface-variant hover:bg-secondary-container">
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={variant === "desktop" ? "grid grid-cols-1 gap-5 sm:grid-cols-2" : "flex flex-col gap-space-sm"}>
        <div className="flex flex-col gap-1.5">
          <label className={label} htmlFor={id("full-name")}>
            Full Name{variant === "desktop" && " *"}
          </label>
          <div className="relative flex items-center">
            {variant === "mobile" && <Icon name="person" className="pointer-events-none absolute left-4 text-[20px] text-outline" />}
            <input className={field[variant]} id={id("full-name")} name="name" autoComplete="name" placeholder={variant === "desktop" ? "e.g. Sibusiso Moyo" : "e.g. Sipho Moyo"} required type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label} htmlFor={id("email")}>
            Email Address{variant === "desktop" && " *"}
          </label>
          <div className="relative flex items-center">
            {variant === "mobile" && <Icon name="mail" className="pointer-events-none absolute left-4 text-[20px] text-outline" />}
            <input className={field[variant]} id={id("email")} name="email" autoComplete="email" placeholder={variant === "desktop" ? "sibusiso@example.co.zw" : "name@domain.co.zw"} required type="email" />
          </div>
        </div>
      </div>

      <div className={variant === "desktop" ? "grid grid-cols-1 gap-5 sm:grid-cols-2" : "flex flex-col gap-space-sm"}>
        <div className="flex flex-col gap-1.5">
          <label className={label} htmlFor={id("inquiry-category")}>
            {variant === "desktop" ? "Inquiry Category *" : "Subject"}
          </label>
          <div className="relative flex items-center">
            {variant === "mobile" && <Icon name="topic" className="pointer-events-none absolute left-4 text-[20px] text-outline" />}
            <select
              id={id("inquiry-category")}
              name="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={cn(field[variant], "cursor-pointer appearance-none pr-10")}
            >
              <option disabled value="">
                Select category...
              </option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <Icon name="expand_more" className="pointer-events-none absolute right-4 text-[20px] text-on-surface-variant" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label} htmlFor={id("phone")}>
            Phone Number (Optional)
          </label>
          <div className="relative flex items-center">
            {variant === "mobile" && <Icon name="call" className="pointer-events-none absolute left-4 text-[20px] text-outline" />}
            <input className={field[variant]} id={id("phone")} name="phone" autoComplete="tel" placeholder="+263 7X XXX XXXX" type="tel" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label} htmlFor={id("message")}>
          Your Message{variant === "desktop" && " *"}
        </label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={variant === "desktop" ? 5 : 4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={variant === "desktop" ? "Type your message, book order details, or school inquiries here..." : "Write your inquiry or book order request here..."}
          className={cn(
            "w-full resize-none bg-surface-container-low font-body-md text-body-md text-on-surface transition-all placeholder:text-outline focus:ring-2 focus:outline-none",
            variant === "desktop" ? "rounded-[20px] px-5 py-4 focus:ring-primary" : "rounded-2xl p-4 focus:bg-surface-container-lowest focus:ring-primary-container",
          )}
        />
      </div>

      <label className="group flex cursor-pointer items-start gap-3 pt-1 select-none">
        <input name="newsletter" value="yes" defaultChecked={variant === "mobile"} className="peer mt-0.5 h-5 w-5 cursor-pointer rounded accent-primary" type="checkbox" />
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Sign me up for the weekly <span className="font-medium text-on-surface">Imbizo</span> newsletter for cultural proverbs, book releases, and festival announcements.
        </span>
      </label>

      <div className="pt-3">
        <button
          type="submit"
          className={cn(
            "group flex flex-row items-center justify-center gap-2 rounded-full font-label-lg text-label-lg whitespace-nowrap shadow-md transition-all active:scale-95",
            variant === "desktop" ? "w-full bg-primary-container px-8 py-3.5 text-on-primary hover:bg-primary sm:w-auto" : "h-[52px] w-full bg-primary font-bold text-on-primary",
          )}
        >
          <SubmitLabel>
            <span>Send Message</span>
            <Icon name="send" className="text-[18px]" />
          </SubmitLabel>
        </button>
      </div>
    </ActionForm>
  );
}
