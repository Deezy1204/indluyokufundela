"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { submitForm } from "@/app/actions";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

type Props = {
  layout?: "stacked" | "inline";
  tone?: "dark" | "light";
  placeholder?: string;
  className?: string;
};

/** Imbizo newsletter sign-up, posted to the `submitForm` Server Action. */
export function NewsletterForm({ layout = "stacked", tone = "dark", placeholder = "Your email address", className }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const res = await submitForm("newsletter", { email, source: "footer" });
      if (res.ok) {
        setState("done");
        return;
      }
      setError(res.error);
    } catch {
      setError("Something went wrong — please try again in a moment.");
    }
    setState("idle");
  }

  const dark = tone === "dark";
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {state === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={cn(
              "flex items-center gap-3 rounded-2xl p-3",
              dark ? "bg-secondary-fixed/10 text-surface-bright" : "bg-tertiary-fixed/40 text-on-surface",
            )}
            role="status"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
              <Icon name="mark_email_read" className="text-[18px]" />
            </span>
            <span className="font-body-sm text-body-sm">
              <strong className="font-semibold">Thank you!</strong> You&apos;re on the Imbizo list.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={subscribe}
            exit={{ opacity: 0, y: -8 }}
            className={cn("flex gap-2.5", layout === "stacked" ? "flex-col" : "flex-row")}
          >
            <label className="sr-only" htmlFor={`nl-${layout}-${tone}`}>
              Email address
            </label>
            <input
              id={`nl-${layout}-${tone}`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={placeholder}
              aria-invalid={error ? true : undefined}
              className={cn(
                "h-11 w-full min-w-0 rounded-full px-4 font-body-sm text-body-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-secondary-fixed",
                layout === "inline" && "flex-1",
                dark
                  ? "bg-inverse-on-surface/10 text-surface-bright placeholder:text-surface-dim/60"
                  : "border-[1.5px] border-[#D5D5CE] bg-surface-container-lowest text-on-surface placeholder:text-outline",
              )}
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="group flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-secondary-fixed px-6 font-label-lg text-label-lg text-on-secondary-fixed shadow-sm transition-all hover:bg-secondary-fixed-dim active:scale-95 disabled:opacity-70"
            >
              {state === "sending" ? (
                <Icon name="progress_activity" className="animate-spin text-[16px]" />
              ) : (
                <>
                  <span>Subscribe</span>
                  <Icon name="send" className="text-[16px]" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 font-body-sm text-[13px] text-error-container"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
