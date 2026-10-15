"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { createContext, use, useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ Year filter */

type YearState = { year: string; setYear: (y: string) => void; years: string[]; itemYears: string[] };
const YearContext = createContext<YearState | null>(null);

function useYear() {
  const ctx = use(YearContext);
  if (!ctx) throw new Error("Year filter parts must be inside <YearFilterProvider>");
  return ctx;
}

export function YearFilterProvider({ years, itemYears, initial = "all", children }: { years: string[]; itemYears: string[]; initial?: string; children: ReactNode }) {
  const [year, setYear] = useState(initial);
  return <YearContext value={{ year, setYear, years, itemYears }}>{children}</YearContext>;
}

export function YearTabs({ variant }: { variant: "desktop" | "mobile" }) {
  const { year, setYear, years } = useYear();
  const id = useId();
  return (
    <LayoutGroup id={id}>
      <div role="tablist" aria-label="Filter by year" className={variant === "desktop" ? "flex flex-wrap items-center gap-2" : "custom-scroll-hidden -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1"}>
        {["all", ...years].map((y) => {
          const on = y === year;
          return (
            <button
              key={y}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setYear(y)}
              className={cn(
                "relative shrink-0 rounded-full font-label-lg text-label-lg transition-colors",
                variant === "desktop" ? "px-5 py-2" : "min-h-[44px] px-4 py-2 font-label-md text-label-md",
                on ? "font-bold text-on-primary" : "bg-surface-container text-on-surface-variant hover:text-on-surface",
              )}
            >
              {on && <motion.span layoutId="year-pill" className="absolute inset-0 rounded-full bg-primary shadow-sm" transition={{ type: "spring", stiffness: 450, damping: 34 }} />}
              <span className="relative">{y === "all" ? (variant === "desktop" ? "All Years" : "All") : y}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

/** One archive card; animates out/in as the selected year changes. */
export function YearItem({ year, className, children }: { year: string; className?: string; children: ReactNode }) {
  const { year: active } = useYear();
  const show = active === "all" || active === year;
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function YearEmpty({ className }: { className?: string }) {
  const { year, setYear, itemYears } = useYear();
  const empty = year !== "all" && !itemYears.includes(year);
  return (
    <AnimatePresence>
      {empty && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={cn("col-span-full flex flex-col items-center gap-3 rounded-[20px] bg-surface-container-low px-6 py-12 text-center", className)}
        >
          <Icon name="history_edu" idle hover="tilt" className="text-[40px] text-primary" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface">The {year} archive is being digitised</h3>
          <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">Reports and photos from {year} will appear here soon.</p>
          <button type="button" onClick={() => setYear("all")} className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary">
            <Icon name="autorenew" className="text-[18px]" /> Show all years
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ Save the date (.ics) */

function icsDate(local: string) {
  // "2026-09-24T08:30" (Africa/Harare, UTC+2) -> UTC basic format
  const d = new Date(`${local}:00+02:00`);
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function SaveDateButton({
  title,
  start,
  end,
  location,
  details,
  className,
  children,
}: {
  title: string;
  start: string;
  end: string;
  location: string;
  details: string;
  className?: string;
  children: ReactNode;
}) {
  const [saved, setSaved] = useState(false);
  const save = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Indlu Yokufundela//Events//EN",
      "BEGIN:VEVENT",
      `UID:${start}-${title.replace(/\W+/g, "-").toLowerCase()}@indluyokufundela`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
      `DTSTART:${icsDate(start)}`,
      `DTEND:${icsDate(end)}`,
      `SUMMARY:${title}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${details}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/[^\w]+/g, "-").toLowerCase()}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };
  return (
    <button type="button" onClick={save} className={cn("group relative overflow-hidden", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={String(saved)} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} className="flex items-center gap-2">
          {saved ? (
            <>
              <Icon name="event" className="text-[18px]" /> Added to calendar
            </>
          ) : (
            children
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
