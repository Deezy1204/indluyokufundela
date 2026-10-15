"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, use, useState, type FormEvent, type ReactNode } from "react";
import { submitForm, type FormKind } from "@/app/actions";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";
import { SuccessCheck } from "./success-check";

const SendingContext = createContext(false);

type ActionFormProps = {
  kind: FormKind;
  className?: string;
  children: ReactNode;
  successTitle: string;
  successBody: string;
  successClassName?: string;
  /** Extra hidden values sent with the form (e.g. which page it came from). */
  extra?: Record<string, string>;
};

/**
 * Wraps a designed form: validates natively, posts to the `submitForm` Server Action and swaps to
 * an animated confirmation. Field markup stays in the (server) view; inputs just need `name`s.
 */
export function ActionForm({ kind, className, children, successTitle, successBody, successClassName, extra }: ActionFormProps) {
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setError("");
    setSending(true);
    const data = { ...Object.fromEntries(new FormData(form)), ...extra } as Record<string, string>;
    try {
      const res = await submitForm(kind, data);
      if (res.ok) setReference(res.reference);
      else setError(res.error);
    } catch {
      setError("Something went wrong — please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {reference ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className={cn(
            "flex flex-col items-center gap-3 rounded-2xl bg-tertiary-fixed/30 p-8 text-center text-tertiary-container",
            successClassName,
          )}
        >
          <SuccessCheck />
          <h4 className="font-headline-sm text-headline-sm text-on-surface">{successTitle}</h4>
          <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">{successBody}</p>
          <p className="font-label-md text-label-md text-outline">Reference {reference}</p>
          <button
            type="button"
            onClick={() => setReference(null)}
            className="group mt-1 inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest px-4 py-2 font-label-lg text-label-lg text-primary shadow-sm transition-colors hover:bg-surface-container"
          >
            <Icon name="replay_10" hover="spin" className="text-[16px]" />
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={onSubmit}
          aria-busy={sending}
          className={className}
          exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
        >
          <SendingContext value={sending}>{children}</SendingContext>
          <AnimatePresence>
            {error && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-error-container px-4 py-2.5 font-body-sm text-body-sm text-on-error-container"
              >
                <Icon name="crisis_alert" className="text-[18px]" />
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/** Submit-button contents that turn into a spinner while the form is sending. */
export function SubmitLabel({ children }: { children: ReactNode }) {
  const sending = use(SendingContext);
  return sending ? (
    <span className="inline-flex items-center gap-2">
      <Icon name="progress_activity" className="animate-spin text-[18px]" />
      Sending…
    </span>
  ) : (
    <>{children}</>
  );
}
