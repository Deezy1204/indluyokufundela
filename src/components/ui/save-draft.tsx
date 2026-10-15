"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

/** Saves the surrounding form's text fields to this browser and restores them on return. */
export function SaveDraftButton({ storageKey, className, label = "Save as Draft" }: { storageKey: string; className?: string; label?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    try {
      const draft = JSON.parse(localStorage.getItem(storageKey) ?? "null") as Record<string, string> | null;
      if (!draft) return;
      for (const [k, v] of Object.entries(draft)) {
        const field = form.elements.namedItem(k);
        if (field instanceof HTMLInputElement && field.type !== "radio" && field.type !== "hidden") field.value = v;
        else if (field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) field.value = v;
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (!saved) return;
    const t = window.setTimeout(() => setSaved(false), 1800);
    return () => window.clearTimeout(t);
  }, [saved]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        const form = ref.current?.closest("form");
        if (!form) return;
        const data = Object.fromEntries(Array.from(new FormData(form).entries()).filter(([, v]) => typeof v === "string" && v)) as Record<string, string>;
        try {
          localStorage.setItem(storageKey, JSON.stringify(data));
        } catch {}
        setSaved(true);
      }}
      className={cn("group relative overflow-hidden", className)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={String(saved)} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }} className="flex items-center gap-2">
          <Icon name={saved ? "task_alt" : "draft"} className="text-[18px]" />
          <span>{saved ? "Draft saved" : label}</span>
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
