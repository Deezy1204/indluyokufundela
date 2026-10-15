"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

function useFlash(): [string | null, (m: string) => void] {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    if (!msg) return;
    const t = window.setTimeout(() => setMsg(null), 1800);
    return () => window.clearTimeout(t);
  }, [msg]);
  return [msg, setMsg];
}

function Bubble({ msg }: { msg: string | null }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.span
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6 }}
          className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 rounded-full bg-inverse-surface px-3 py-1.5 font-label-md text-label-md whitespace-nowrap text-inverse-on-surface shadow-md"
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

/** Uses the native share sheet where available, otherwise copies the link. */
export function ShareButton({ title, path, className, children }: { title: string; path: string; className?: string; children: ReactNode }) {
  const [msg, flash] = useFlash();
  return (
    <button
      type="button"
      onClick={async () => {
        const url = `${window.location.origin}${path}`;
        try {
          if (navigator.share) await navigator.share({ title, url });
          else {
            await navigator.clipboard.writeText(url);
            flash("Link copied");
          }
        } catch {}
      }}
      className={cn("group relative", className)}
    >
      <Bubble msg={msg} />
      {children}
    </button>
  );
}

/** Bookmark toggle remembered in this browser. */
export function SaveToggle({ storageKey, className, label = "Save to Library", savedLabel = "Saved to Library" }: { storageKey: string; className?: string; label?: string; savedLabel?: string }) {
  const [saved, setSaved] = useState(false);
  const [msg, flash] = useFlash();
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- read persisted preference after mount
      setSaved(localStorage.getItem(storageKey) === "1");
    } catch {}
  }, [storageKey]);
  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => {
        const next = !saved;
        setSaved(next);
        flash(next ? "Saved for later" : "Removed");
        try {
          localStorage.setItem(storageKey, next ? "1" : "0");
        } catch {}
      }}
      className={cn("group relative", className)}
    >
      <Bubble msg={msg} />
      <motion.span key={String(saved)} initial={{ scale: 0.5, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 500, damping: 15 }} className="flex">
        <Icon name={saved ? "bookmark" : "bookmark_add"} filled={saved} className={cn("text-[18px]", saved && "text-secondary")} />
      </motion.span>
      {saved ? savedLabel : label}
    </button>
  );
}

/** Copies text to the clipboard with a small confirmation bubble. */
export function CopyButton({ text, label, className, children }: { text: string; label: string; className?: string; children: ReactNode }) {
  const [msg, flash] = useFlash();
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          flash("Copied!");
        } catch {
          flash("Copy failed");
        }
      }}
      className={cn("group relative", className)}
    >
      <Bubble msg={msg} />
      {children}
    </button>
  );
}
