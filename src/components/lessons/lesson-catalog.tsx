"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { createContext, use, useDeferredValue, useEffect, useId, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { Link } from "@/components/ui/link";
import { Equalizer, Player, PlayerButton, PlayerProgress, PlayerTime } from "@/components/ui/player";
import { cn } from "@/lib/cn";
import { ARCHIVE, MODULES, type ArchiveLesson, type Kind, type Level, type ModuleKey } from "./lesson-data";

type Sort = "course" | "short" | "long";
type CatalogState = {
  query: string;
  setQuery: (v: string) => void;
  module: ModuleKey;
  setModule: (v: ModuleKey) => void;
  kind: Kind | "all";
  setKind: (v: Kind | "all") => void;
  level: Level | "all";
  setLevel: (v: Level | "all") => void;
  sort: Sort;
  setSort: (v: Sort) => void;
  results: ArchiveLesson[];
  open: ArchiveLesson | null;
  setOpen: (l: ArchiveLesson | null) => void;
};

const Ctx = createContext<CatalogState | null>(null);
function useLessons() {
  const ctx = use(Ctx);
  if (!ctx) throw new Error("Lesson catalogue parts must be inside <LessonCatalogProvider>");
  return ctx;
}

export const LIBRARY_TOTALS = { all: 48, video: 28, audio: 20 };

export function LessonCatalogProvider({ scope, children }: { scope: string; children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [module, setModule] = useState<ModuleKey>("all");
  const [kind, setKind] = useState<Kind | "all">("all");
  const [level, setLevel] = useState<Level | "all">("all");
  const [sort, setSort] = useState<Sort>("course");
  const [open, setOpen] = useState<ArchiveLesson | null>(null);
  const q = useDeferredValue(query);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = ARCHIVE.filter(
      (l) =>
        (module === "all" || l.module === module) &&
        (kind === "all" || l.kind === kind) &&
        (level === "all" || l.level === level) &&
        (!needle || `${l.title} ${l.blurb} ${l.category} ${l.instructor} ${l.topic}`.toLowerCase().includes(needle)),
    );
    if (sort === "short") return [...list].sort((a, b) => a.mins - b.mins);
    if (sort === "long") return [...list].sort((a, b) => b.mins - a.mins);
    return list;
  }, [q, module, kind, level, sort]);

  return (
    <Ctx value={{ query, setQuery, module, setModule, kind, setKind, level, setLevel, sort, setSort, results, open, setOpen }}>
      <LayoutGroup id={scope}>
        {children}
        <AnimatePresence>{open && <LessonPreview key={open.id} lesson={open} onClose={() => setOpen(null)} />}</AnimatePresence>
      </LayoutGroup>
    </Ctx>
  );
}

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Desktop hero search spine: keyword + module + "Search Catalog". */
export function LessonSearchSpine() {
  const { query, setQuery, module, setModule } = useLessons();
  return (
    <form
      role="search"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        goTo("lesson-archive");
      }}
      className="flex flex-col items-center gap-space-sm rounded-full bg-surface-container-lowest p-space-sm shadow-sm transition-shadow focus-within:shadow-md md:flex-row"
    >
      <div className="flex w-full flex-1 flex-row items-center gap-3 px-4">
        <Icon name="search" className="text-[22px] text-outline" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search lessons"
          className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
          placeholder="Search lessons by keyword, grammar rule, or topic (e.g. Izaga, Izisho, concords)..."
          type="search"
        />
      </div>
      <div className="hidden h-8 w-[1px] bg-surface-container-highest md:block" />
      <div className="flex w-full flex-row items-center gap-2 px-2 md:w-auto">
        <select
          aria-label="Module"
          value={module}
          onChange={(e) => setModule(e.target.value as ModuleKey)}
          className="cursor-pointer rounded-full bg-surface-container-low px-4 py-2.5 font-label-lg text-label-lg text-on-surface focus:outline-none"
        >
          {MODULES.map((m) => (
            <option key={m.key} value={m.key}>
              {m.label}
            </option>
          ))}
        </select>
        <button type="submit" className="group flex shrink-0 flex-row items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 font-label-lg text-label-lg whitespace-nowrap text-on-primary shadow-sm transition-all hover:bg-primary-container">
          <Icon name="travel_explore" className="text-[18px]" />
          <span>Search Catalog</span>
        </button>
      </div>
    </form>
  );
}

const KIND_TABS: { key: Kind | "all"; label: string; icon: "apps" | "play_circle" | "podcasts" }[] = [
  { key: "all", label: `All Lessons (${LIBRARY_TOTALS.all})`, icon: "apps" },
  { key: "video", label: `Video Lessons (${LIBRARY_TOTALS.video})`, icon: "play_circle" },
  { key: "audio", label: `Audio Lessons (${LIBRARY_TOTALS.audio})`, icon: "podcasts" },
];
const LEVELS: { key: Level | "all"; label: string }[] = [
  { key: "all", label: "All Levels" },
  { key: "Beginner", label: "Beginner (Grade 1-7 / Starters)" },
  { key: "Intermediate", label: "Intermediate (Form 1-4 / O-Level)" },
  { key: "Advanced", label: "Advanced (A-Level / Literary Specialists)" },
];

/** Desktop sticky filter bar (media type tabs, proficiency, order). */
export function LessonFilterBar() {
  const { kind, setKind, level, setLevel, sort, setSort } = useLessons();
  const id = useId();
  return (
    <LayoutGroup id={id}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-space-md px-margin-desktop py-3">
        <div role="tablist" aria-label="Media type" className="flex flex-row items-center gap-2 rounded-full bg-surface-container-low p-1">
          {KIND_TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={kind === t.key}
              onClick={() => {
                setKind(t.key);
                goTo("lesson-archive");
              }}
              className={cn(
                "group relative flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2 font-label-lg text-label-lg whitespace-nowrap transition-colors",
                kind === t.key ? "text-on-primary" : "text-on-surface-variant hover:text-on-surface",
              )}
            >
              {kind === t.key && <motion.span layoutId="kind-pill" className="absolute inset-0 rounded-full bg-primary shadow-sm" transition={{ type: "spring", stiffness: 450, damping: 34 }} />}
              <Icon name={t.icon} className="relative text-[16px]" />
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2 overflow-x-auto py-1">
          <span className="mr-1 hidden font-label-cultural-caps text-label-cultural-caps tracking-wider text-on-surface-variant uppercase lg:inline">Proficiency:</span>
          {LEVELS.map((l) => (
            <button
              key={l.key}
              type="button"
              aria-pressed={level === l.key}
              onClick={() => setLevel(l.key)}
              className={cn(
                "relative flex flex-row items-center justify-center gap-2 rounded-full px-3.5 py-1.5 font-label-md text-label-md whitespace-nowrap transition-colors",
                level === l.key ? "font-semibold text-on-surface" : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high",
              )}
            >
              {level === l.key && <motion.span layoutId="level-pill" className="absolute inset-0 rounded-full bg-secondary-container shadow-sm" transition={{ type: "spring", stiffness: 450, damping: 34 }} />}
              <span className="relative">{l.label}</span>
            </button>
          ))}
          <div className="mx-1 h-6 w-[1px] bg-surface-container-highest" />
          <div className="relative flex flex-row items-center gap-1.5 rounded-full bg-surface-container-lowest px-3 py-1.5 font-label-md text-label-md text-on-surface">
            <Icon name="sort" className="text-[16px] text-outline" />
            <select aria-label="Order lessons" value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="cursor-pointer appearance-none bg-transparent pr-5 focus:outline-none">
              <option value="course">Course Order</option>
              <option value="short">Shortest First</option>
              <option value="long">Longest First</option>
            </select>
            <Icon name="expand_more" className="pointer-events-none absolute right-2 text-[16px] text-outline" />
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
}

export function LessonCount({ variant }: { variant: "desktop" | "mobile" }) {
  const { results } = useLessons();
  return (
    <span className={variant === "desktop" ? "font-label-md text-label-md text-on-surface-variant" : "font-label-md text-label-md font-bold text-primary"} aria-live="polite">
      <motion.span key={results.length} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block">
        {results.length}
      </motion.span>
      {variant === "desktop" ? ` of ${LIBRARY_TOTALS.all} Courses shown` : " Available"}
    </span>
  );
}

const LEVEL_BADGE: Record<Level, string> = {
  Beginner: "bg-secondary-container text-on-surface",
  Intermediate: "bg-surface-container-high text-on-surface",
  Advanced: "bg-primary-container text-white",
};

function EmptyLessons() {
  const { setQuery, setKind, setLevel, setModule } = useLessons();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="col-span-full flex flex-col items-center gap-3 rounded-[20px] bg-surface-container-lowest px-6 py-12 text-center">
      <Icon name="travel_explore" idle className="text-[40px] text-primary" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface">No lessons match those filters</h3>
      <button
        type="button"
        onClick={() => {
          setQuery("");
          setKind("all");
          setLevel("all");
          setModule("all");
        }}
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary"
      >
        <Icon name="autorenew" className="text-[18px]" /> Reset filters
      </button>
    </motion.div>
  );
}

const card = {
  layout: true,
  initial: { opacity: 0, y: 24, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.18 } },
  transition: { type: "spring", stiffness: 300, damping: 30 },
} as const;

/** Desktop 3-column lesson cards. */
export function LessonGrid() {
  const { results, setOpen } = useLessons();
  return (
    <motion.div layout className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {results.map((l) => (
          <motion.div key={l.id} {...card} className="group lift flex flex-col overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-sm">
            <motion.div layoutId={`lesson-img-${l.id}`} className="zoom-media relative h-48 w-full overflow-hidden bg-surface-container-high">
              <Image src={l.image} alt={l.alt} placeholder="blur" sizes="(min-width: 1280px) 400px, 45vw" className="h-full w-full object-cover" />
              <div className="absolute top-3 left-3 flex flex-row items-center gap-1.5">
                <span className="rounded-full bg-primary px-2.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold text-on-primary uppercase">
                  {l.kind === "audio" ? "Audio Lesson" : "Video Lesson"}
                </span>
                <span className={cn("rounded-full px-2.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold uppercase", LEVEL_BADGE[l.level])}>{l.level}</span>
              </div>
              <div className="absolute right-3 bottom-3 flex flex-row items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 font-label-md text-label-md text-white backdrop-blur-md">
                <Icon name="schedule" className="text-[14px]" />
                {l.mins} mins
              </div>
            </motion.div>
            <div className="flex flex-1 flex-col justify-between gap-space-md p-space-lg">
              <div className="flex flex-col gap-2">
                <span className="font-label-cultural-caps text-label-cultural-caps text-outline uppercase">{l.category}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-surface-tint">{l.title}</h3>
                <p className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{l.blurb}</p>
              </div>
              <div className="flex flex-row items-center justify-between border-t border-surface-container pt-3">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-outline">Instructor</span>
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">{l.instructor}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(l)}
                  className={cn(
                    "flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2 font-label-md text-label-md font-bold whitespace-nowrap shadow-sm transition-all active:scale-95",
                    l.kind === "audio" ? "bg-secondary-container text-on-surface hover:bg-secondary-fixed" : "bg-primary text-on-primary hover:bg-primary-container",
                  )}
                >
                  <Icon name={l.kind === "audio" ? "headphones" : "play_circle"} className="text-[18px]" />
                  <span>{l.kind === "audio" ? "Listen Now" : "Watch Lesson"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {results.length === 0 && <EmptyLessons key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}

/** Mobile search + combined type/level pills. */
export function MobileLessonFilters() {
  const { query, setQuery, kind, setKind, level, setLevel } = useLessons();
  const id = useId();
  const pills: { label: string; icon?: "videocam" | "mic"; on: boolean; onClick: () => void }[] = [
    { label: `All (${LIBRARY_TOTALS.all})`, on: kind === "all" && level === "all", onClick: () => {
        setKind("all");
        setLevel("all");
      } },
    { label: `Video (${LIBRARY_TOTALS.video})`, icon: "videocam", on: kind === "video", onClick: () => setKind(kind === "video" ? "all" : "video") },
    { label: `Audio (${LIBRARY_TOTALS.audio})`, icon: "mic", on: kind === "audio", onClick: () => setKind(kind === "audio" ? "all" : "audio") },
    ...(["Beginner", "Intermediate", "Advanced"] as Level[]).map((lv) => ({ label: lv, on: level === lv, onClick: () => setLevel(level === lv ? "all" : lv) })),
  ];
  return (
    <LayoutGroup id={id}>
      <div className="relative mt-space-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-space-md text-primary">
          <Icon name="search" className="text-[22px]" />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search lessons"
          className="h-[52px] w-full rounded-full bg-surface-container pr-space-md pl-[50px] font-body-sm text-body-sm text-on-surface shadow-sm transition-colors placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container"
          placeholder="Search lessons, izaga, grammar topics..."
          type="search"
        />
      </div>
      <div className="no-scrollbar -mx-margin flex items-center gap-space-xs overflow-x-auto px-margin pt-space-md pb-space-xs">
        {pills.map((p) => (
          <button
            key={p.label}
            type="button"
            aria-pressed={p.on}
            onClick={p.onClick}
            className={cn(
              "relative flex min-h-[44px] shrink-0 flex-row items-center justify-center gap-2 rounded-full px-space-md font-label-md text-label-md whitespace-nowrap transition-colors",
              p.on ? "text-on-primary" : "bg-surface-container text-on-surface hover:bg-surface-container-high",
            )}
          >
            {p.on && <motion.span layoutId="m-lesson-pill" className="absolute inset-0 rounded-full bg-primary shadow-sm" transition={{ type: "spring", stiffness: 450, damping: 34 }} />}
            {p.icon && <Icon name={p.icon} className="relative text-[18px]" />}
            <span className="relative">{p.label}</span>
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}

/** Mobile single-column lesson feed. */
export function LessonFeed() {
  const { results, setOpen } = useLessons();
  return (
    <motion.div layout className="space-y-space-md">
      <AnimatePresence mode="popLayout">
        {results.map((l) => (
          <motion.div key={l.id} {...card} className="space-y-space-sm rounded-[20px] bg-surface-container-lowest p-space-md shadow-sm">
            <motion.div layoutId={`lesson-img-${l.id}`} className="relative h-40 w-full overflow-hidden rounded-[14px] bg-surface-container">
              <Image src={l.mobileImage} alt={l.alt} placeholder="blur" sizes="(min-width: 640px) 576px, 100vw" className="h-full w-full object-cover" />
              <div className="absolute top-space-xs right-space-xs rounded-full bg-inverse-surface/80 px-space-sm py-1 font-label-cultural-caps text-label-cultural-caps text-inverse-on-surface backdrop-blur-md">{l.level}</div>
            </motion.div>
            <div className="space-y-1">
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Icon name={l.kind === "audio" ? "headphones" : "videocam"} className="text-[16px] text-primary" />
                <span>
                  {l.kind === "audio" ? "Audio" : "Video"} • {l.mins} min
                </span>
                <span>•</span>
                <span>{l.topic}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{l.mobileTitle}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{l.mobileBlurb}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(l)}
              className={cn(
                "group flex min-h-[44px] w-full flex-row items-center justify-center gap-2 rounded-full font-headline-sm text-label-lg whitespace-nowrap shadow-sm transition-colors active:scale-[0.98]",
                l.kind === "audio" ? "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed" : "bg-primary text-on-primary hover:bg-primary-container",
              )}
            >
              <Icon name={l.kind === "audio" ? "headphones" : "play_circle"} className="text-[18px]" />
              <span>{l.kind === "audio" ? "Listen Lesson" : "Watch Lesson"}</span>
            </button>
          </motion.div>
        ))}
        {results.length === 0 && <EmptyLessons key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}

/** "Load more" that explains how to access the rest of the 48-lesson archive. */
export function LoadMore({ variant }: { variant: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={
          variant === "desktop"
            ? "group flex flex-row items-center justify-center gap-2 rounded-full bg-surface-container-lowest px-8 py-3 font-label-lg text-label-lg whitespace-nowrap text-primary shadow-sm transition-all hover:bg-surface-container-high"
            : "group flex min-h-[44px] w-full flex-row items-center justify-center gap-2 rounded-full bg-surface-container-high font-headline-sm text-label-lg whitespace-nowrap text-on-surface transition-colors hover:bg-surface-dim"
        }
      >
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="flex">
          <Icon name="sync" hover="spin" className="text-[20px]" />
        </motion.span>
        <span>{variant === "desktop" ? `Load More Lessons (${LIBRARY_TOTALS.all - ARCHIVE.length} Remaining)` : "Load More Lessons"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-2 rounded-[20px] bg-primary-fixed/60 p-5 text-center">
              <p className="font-body-sm text-body-sm text-on-primary-fixed">
                The full {LIBRARY_TOTALS.all}-lesson archive is shared with registered schools and on our offline USB packs while we finish digitising it for the web.
              </p>
              <Link href="/contact?topic=archive-access" className="group inline-flex items-center gap-1.5 font-label-lg text-label-lg text-primary hover:underline">
                Request archive access <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LessonPreview({ lesson, onClose }: { lesson: ArchiveLesson; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={lesson.title}>
      <motion.button type="button" aria-label="Close preview" tabIndex={-1} onClick={onClose} className="absolute inset-0 bg-ink/50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-t-[28px] bg-surface shadow-lg sm:rounded-[28px]"
      >
        <Player duration={lesson.mins * 60} className="relative">
          <motion.div layoutId={`lesson-img-${lesson.id}`} className="relative aspect-video w-full overflow-hidden bg-inverse-surface">
            <Image src={lesson.image} alt={lesson.alt} placeholder="blur" sizes="(min-width: 768px) 672px, 100vw" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 flex flex-col gap-2 text-white">
              <PlayerProgress className="h-1.5 w-full overflow-hidden rounded-full bg-white/25" barClassName="bg-secondary-container" />
              <div className="flex items-center justify-between font-label-md text-label-md">
                <div className="flex items-center gap-3">
                  <PlayerButton
                    label={lesson.title}
                    iconClassName="text-[26px]"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-surface shadow-md"
                  />
                  <PlayerTime />
                </div>
                <Equalizer bars={5} />
              </div>
            </div>
          </motion.div>
        </Player>
        <button type="button" onClick={onClose} aria-label="Close" className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-transform hover:rotate-90">
          <Icon name="close" className="text-[20px]" />
        </button>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex flex-col gap-3 p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary px-2.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold text-on-primary uppercase">
              {lesson.kind === "audio" ? "Audio Lesson" : "Video Lesson"}
            </span>
            <span className={cn("rounded-full px-2.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold uppercase", LEVEL_BADGE[lesson.level])}>{lesson.level}</span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              {lesson.category} • {lesson.mins} mins
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary">{lesson.title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{lesson.blurb}</p>
          <p className="font-label-lg text-label-lg text-on-surface">With {lesson.instructor}</p>
          <p className="rounded-xl bg-surface-container-low px-4 py-2.5 font-body-sm text-[13px] text-outline">
            Preview mode — the full recording plays here once it is published to the lesson library.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
