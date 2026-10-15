"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { Link } from "@/components/ui/link";
import {
  Player,
  PlayerCaptions,
  PlayerCaptionsToggle,
  PlayerFullscreen,
  PlayerOverlayButton,
  PlayerButton,
  PlayerProgress,
  PlayerSkip,
  PlayerSpeed,
  PlayerTime,
  PlayerZoom,
} from "@/components/ui/player";
import { cn } from "@/lib/cn";
import { COURSE_TOTAL, CUES, QUEUE, type QueueLesson } from "./lesson-data";

type CourseState = {
  active: QueueLesson;
  select: (id: number) => void;
  completed: Set<number>;
  toggleComplete: (id: number) => void;
  bookmarked: Set<number>;
  toggleBookmark: (id: number) => void;
};

const CourseContext = createContext<CourseState | null>(null);
const STORE = "indlu-course";

function useCourse() {
  const ctx = use(CourseContext);
  if (!ctx) throw new Error("Course parts must be inside <CourseProvider>");
  return ctx;
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(4);
  const [completed, setCompleted] = useState<Set<number>>(() => new Set([1, 2, 3]));
  const [bookmarked, setBookmarked] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) ?? "null") as { c: number[]; b: number[] } | null;
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- restore progress after hydration
        setCompleted(new Set(saved.c));
        setBookmarked(new Set(saved.b));
      }
    } catch {}
  }, []);

  const persist = (c: Set<number>, b: Set<number>) => {
    try {
      localStorage.setItem(STORE, JSON.stringify({ c: [...c], b: [...b] }));
    } catch {}
  };

  const toggle = (set: Set<number>, id: number) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  };

  const value: CourseState = {
    active: QUEUE.find((l) => l.id === activeId) ?? QUEUE[3],
    select: setActiveId,
    completed,
    bookmarked,
    toggleComplete: (id) => {
      const c = toggle(completed, id);
      setCompleted(c);
      persist(c, bookmarked);
    },
    toggleBookmark: (id) => {
      const b = toggle(bookmarked, id);
      setBookmarked(b);
      persist(completed, b);
    },
  };
  return <CourseContext value={value}>{children}</CourseContext>;
}

/** The 16:9 lesson stage: poster with slow zoom, captions and full control bar. */
export function LessonStage({ image, alt, variant }: { image: StaticImageData; alt: string; variant: "desktop" | "mobile" }) {
  const { active } = useCourse();
  const start = active.id === 4 ? 860 : 0;
  if (variant === "mobile") {
    return (
      <Player key={active.id} duration={active.seconds} start={start} className="group relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-[16px] bg-inverse-surface p-space-sm shadow-sm">
        <PlayerZoom className="absolute inset-0">
          <Image src={image} alt={alt} placeholder="blur" sizes="(min-width: 640px) 576px, 100vw" className="h-full w-full object-cover opacity-75" />
        </PlayerZoom>
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/30 to-transparent" />
        <PlayerCaptions cues={CUES} className="absolute top-3 right-3 left-3 z-10" />
        <PlayerOverlayButton className="absolute top-1/2 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-md" />
        <div className="relative z-10 flex w-full flex-col gap-1.5 pt-space-xs">
          <PlayerProgress className="h-1.5 w-full overflow-hidden rounded-full bg-surface-variant/40" barClassName="bg-secondary-container" />
          <div className="flex items-center justify-between font-label-md text-label-md text-inverse-on-surface">
            <div className="flex items-center gap-space-xs">
              <PlayerButton label="lesson" iconClassName="text-[18px]" className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface/20" />
              <PlayerTime />
            </div>
            <div className="flex items-center gap-space-xs">
              <PlayerCaptionsToggle className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface/20" />
              <PlayerSpeed className="rounded-full bg-surface/20 px-2 py-0.5 text-inverse-on-surface hover:bg-surface/30" />
              <PlayerFullscreen className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface/20" />
            </div>
          </div>
        </div>
      </Player>
    );
  }
  return (
    <Player key={active.id} duration={active.seconds} start={start} className="group relative aspect-video w-full overflow-hidden bg-inverse-surface">
      <PlayerZoom className="absolute inset-0">
        <Image src={image} alt={alt} placeholder="blur" sizes="(min-width: 1280px) 860px, 66vw" className="h-full w-full object-cover opacity-85" />
      </PlayerZoom>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute top-4 left-4 z-10 flex flex-row items-center gap-2">
        <span className="flex flex-row items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1 font-label-cultural-caps text-label-cultural-caps font-bold tracking-wider text-on-surface uppercase shadow-sm">
          <span className="h-2 w-2 animate-ping rounded-full bg-error" />
          Active Lesson Stream
        </span>
        <span className="rounded-full bg-black/60 px-3 py-1 font-label-md text-label-md text-white backdrop-blur-md">1080p HD • Multi-camera Lecture</span>
      </div>
      <PlayerCaptions cues={CUES} className="absolute right-6 bottom-24 left-6 z-10 mx-auto max-w-xl" />
      <PlayerOverlayButton className="absolute inset-0 z-10 m-auto flex h-16 w-16 flex-row items-center justify-center rounded-full bg-secondary-container text-on-surface shadow-xl" />
      <div className="absolute right-0 bottom-0 left-0 z-10 flex flex-col gap-2 p-4">
        <PlayerProgress className="h-2 w-full overflow-hidden rounded-full bg-white/20" barClassName="bg-secondary-container" />
        <div className="flex flex-row items-center justify-between text-sm text-white">
          <div className="flex flex-row items-center gap-3">
            <PlayerButton label="lesson" iconClassName="text-[24px]" className="flex flex-row items-center justify-center transition-colors hover:text-secondary-fixed" />
            <PlayerSkip by={-10} className="flex items-center justify-center transition-colors hover:text-secondary-fixed" />
            <PlayerSkip by={10} className="flex items-center justify-center transition-colors hover:text-secondary-fixed" />
            <div className="group flex flex-row items-center gap-1 transition-colors hover:text-secondary-fixed">
              <Icon name="volume_up" className="text-[20px]" />
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/30">
                <div className="h-full w-3/4 rounded-full bg-white" />
              </div>
            </div>
            <PlayerTime className="ml-2 font-mono font-label-md text-label-md text-white/90" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <PlayerSpeed className="cursor-pointer rounded-full bg-white/20 px-2 py-0.5 font-label-md text-label-md hover:bg-white/30" />
            <PlayerCaptionsToggle className="flex flex-row items-center justify-center transition-colors hover:text-secondary-fixed" />
            <PlayerFullscreen className="flex flex-row items-center justify-center transition-colors hover:text-secondary-fixed" />
          </div>
        </div>
      </div>
    </Player>
  );
}

const LEVEL_TONE: Record<string, string> = {
  Beginner: "bg-secondary-container text-on-secondary-container",
  Intermediate: "bg-surface-container-high text-on-surface",
  Advanced: "bg-primary-container text-on-primary",
};

/** Badges + title for the lesson currently on stage; crossfades when the lesson changes. */
export function StageMeta({ variant }: { variant: "desktop" | "mobile" }) {
  const { active } = useCourse();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className={variant === "desktop" ? "flex flex-col gap-2" : "space-y-space-xs"}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-label-cultural-caps text-label-cultural-caps text-primary uppercase">
            {active.kind === "video" ? "Video Masterclass" : "Audio Lesson"}
          </span>
          <span className={cn("rounded-full px-3 py-1 font-label-cultural-caps text-label-cultural-caps uppercase", LEVEL_TONE[active.level])}>
            {active.level} Level
          </span>
          <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-cultural-caps text-label-cultural-caps text-on-surface uppercase">
            Module 2 of 6
          </span>
          {variant === "desktop" && (
            <span className="rounded-full bg-tertiary-fixed-dim/20 px-3 py-1 font-label-cultural-caps text-label-cultural-caps font-bold text-tertiary uppercase">
              Certified Curriculum
            </span>
          )}
        </div>
        <h2 className={variant === "desktop" ? "mt-1 font-headline-md text-headline-md text-primary" : "font-headline-md-mobile text-headline-md-mobile tracking-tight text-on-surface"}>
          {active.title}
        </h2>
        <p className={variant === "desktop" ? "font-body-md text-body-md text-on-surface-variant" : "font-body-sm text-body-sm text-on-surface-variant"}>
          Taught by <strong className="text-on-surface">Dr. Thabani Moyo</strong> &amp; <strong className="text-on-surface">Usisi Omkhulu</strong> • {active.duration} • Bulawayo Cultural Quarter Recording Studio
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

function Toast({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.span
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6 }}
          className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 rounded-full bg-inverse-surface px-3 py-1.5 font-label-md text-label-md whitespace-nowrap text-inverse-on-surface shadow-md"
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function useFlash() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    if (!msg) return;
    const t = window.setTimeout(() => setMsg(null), 1800);
    return () => window.clearTimeout(t);
  }, [msg]);
  return [msg, setMsg] as const;
}

/** Materials / bookmark / complete / share row. */
export function StageActions({ variant }: { variant: "desktop" | "mobile" }) {
  const { active, completed, toggleComplete, bookmarked, toggleBookmark } = useCourse();
  const [msg, flash] = useFlash();
  const done = completed.has(active.id);
  const saved = bookmarked.has(active.id);

  const share = async () => {
    const url = `${window.location.origin}/lessons`;
    try {
      if (navigator.share) await navigator.share({ title: active.title, url });
      else {
        await navigator.clipboard.writeText(url);
        flash("Link copied");
      }
    } catch {}
  };

  const bookmarkBtn = (
    <button
      type="button"
      onClick={() => {
        toggleBookmark(active.id);
        flash(saved ? "Removed from saved" : "Saved for later");
      }}
      aria-pressed={saved}
      aria-label={saved ? "Remove bookmark" : "Bookmark lesson"}
      className={cn(
        "group relative flex items-center justify-center rounded-full transition-colors",
        variant === "desktop" ? "bg-surface-container-low p-2.5 text-on-surface shadow-sm hover:bg-surface-container-high" : "h-11 w-11 min-w-[44px] bg-surface-container text-primary hover:bg-surface-container-high",
      )}
    >
      <motion.span key={String(saved)} initial={{ scale: 0.5, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 500, damping: 15 }} className="flex">
        <Icon name={saved ? "bookmark" : "bookmark_border"} filled={saved} className={cn("text-[20px]", saved && "text-secondary")} />
      </motion.span>
    </button>
  );
  const shareBtn = (
    <button
      type="button"
      onClick={share}
      aria-label="Share lesson"
      className={cn(
        "group flex items-center justify-center rounded-full transition-colors",
        variant === "desktop" ? "bg-surface-container-low p-2.5 text-on-surface shadow-sm hover:bg-surface-container-high" : "h-11 w-11 min-w-[44px] bg-surface-container text-primary hover:bg-surface-container-high",
      )}
    >
      <Icon name="share" className="text-[20px]" />
    </button>
  );

  if (variant === "mobile") {
    return (
      <div className="relative flex flex-wrap items-center gap-space-xs pt-space-xs">
        <Toast show={!!msg}>{msg}</Toast>
        <Link
          href="/contact?topic=materials"
          className="group flex min-h-[44px] flex-1 flex-row items-center justify-center gap-2 rounded-full bg-primary font-headline-sm text-label-lg whitespace-nowrap text-on-primary shadow-sm transition-colors hover:bg-primary-container"
        >
          <Icon name="download" className="text-[18px]" />
          <span>Request Notes (PDF)</span>
        </Link>
        {bookmarkBtn}
        {shareBtn}
      </div>
    );
  }
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-space-sm pt-2">
      <Toast show={!!msg}>{msg}</Toast>
      <Link
        href="/contact?topic=materials"
        className="group flex flex-row items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg whitespace-nowrap text-on-primary shadow-sm transition-all hover:bg-primary-container"
      >
        <Icon name="download" className="text-[18px]" />
        <span>Request Lesson Materials (PDF + MP3)</span>
      </Link>
      <div className="flex flex-row items-center gap-2">
        {bookmarkBtn}
        <button
          type="button"
          onClick={() => toggleComplete(active.id)}
          aria-pressed={done}
          className={cn(
            "group flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2.5 font-label-md text-label-md shadow-sm transition-colors",
            done ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-surface-container-low text-on-surface hover:bg-surface-container-high",
          )}
        >
          <motion.span key={String(done)} initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 600, damping: 14 }} className="flex">
            <Icon name="check_circle" filled={done} className="text-[18px] text-on-tertiary-container" />
          </motion.span>
          <span>{done ? "Completed" : "Mark as Completed"}</span>
        </button>
        {shareBtn}
      </div>
    </div>
  );
}

function KindMeta({ l, className }: { l: QueueLesson; className?: string }) {
  return (
    <span className={cn("flex flex-row items-center gap-1", className)}>
      <Icon name={l.kind === "audio" ? "headphones" : "videocam"} className="text-[14px]" />
      {l.kind === "audio" ? "Audio" : "Video"}
    </span>
  );
}

/** Curriculum queue: progress, quick search and clickable lessons. */
export function CoursePlaylist({ variant }: { variant: "desktop" | "mobile" }) {
  const { active, select, completed } = useCourse();
  const [q, setQ] = useState("");
  const list = QUEUE.filter((l) => l.title.toLowerCase().includes(q.trim().toLowerCase()));
  const pct = Math.round((completed.size / COURSE_TOTAL) * 100);

  if (variant === "mobile") {
    return (
      <div className="space-y-space-xs pt-space-md">
        {QUEUE.map((l) => {
          const on = l.id === active.id;
          const done = completed.has(l.id);
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => select(l.id)}
              className={cn(
                "relative flex w-full items-center justify-between gap-space-xs rounded-[12px] p-space-sm text-left transition-colors",
                on ? "text-on-primary-fixed" : "bg-surface-container",
              )}
            >
              {on && <motion.span layoutId="m-now-playing" className="absolute inset-0 rounded-[12px] bg-primary-fixed shadow-sm" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="relative flex min-w-0 items-center gap-space-sm">
                <Icon name={on ? "play_circle" : done ? "check_circle" : l.kind === "audio" ? "headphones" : "videocam"} filled={on || done} className="text-[20px] text-primary" />
                <span className="min-w-0">
                  <span className={cn("block truncate font-body-sm text-body-sm", on ? "font-bold" : "font-semibold text-on-surface")}>{l.short}</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {on ? "Now Playing" : l.kind === "audio" ? "Audio" : "Video"} • {Math.round(l.seconds / 60)} min
                  </span>
                </span>
              </span>
              {on ? (
                <span className="relative h-3 w-3 animate-pulse rounded-full bg-primary" />
              ) : done ? (
                <span className="relative font-label-cultural-caps text-label-cultural-caps text-tertiary-container">Completed</span>
              ) : null}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-sm">
      <div className="flex flex-col gap-3 bg-surface-container-low p-space-md">
        <div className="flex flex-row items-center justify-between">
          <span className="font-label-cultural-caps text-label-cultural-caps font-bold tracking-wider text-primary uppercase">Curriculum Queue</span>
          <span className="rounded-full bg-primary px-2.5 py-0.5 font-label-md text-label-md text-on-primary">Part 1 of 2</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm leading-tight text-primary">Oral Literature &amp; Grammar Series</h3>
          <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">Instructor: Dr. Thabani Moyo</p>
        </div>
        <div className="mt-1 flex flex-col gap-1.5">
          <div className="flex flex-row items-center justify-between font-label-md text-label-md">
            <span className="text-on-surface-variant">
              Course Progress: {completed.size} of {COURSE_TOTAL} Lessons
            </span>
            <motion.span key={pct} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="font-bold text-primary">
              {pct}% Completed
            </motion.span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
            <motion.div className="h-full rounded-full bg-primary" initial={false} animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          </div>
        </div>
        <div className="relative mt-1">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Find in this course"
            className="w-full rounded-full bg-surface-container-lowest px-3.5 py-2 pl-9 font-body-sm text-body-sm text-on-surface shadow-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
            placeholder="Find in this course..."
            type="search"
          />
          <Icon name="search" className="absolute top-2.5 left-2.5 text-[18px] text-outline" />
        </div>
      </div>
      <div className="flex max-h-[640px] flex-col divide-y divide-surface-container overflow-y-auto">
        <AnimatePresence initial={false}>
          {list.map((l) => {
            const on = l.id === active.id;
            const done = completed.has(l.id);
            return (
              <motion.button
                key={l.id}
                layout
                type="button"
                onClick={() => select(l.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                className={cn("group relative flex flex-row items-start gap-3 overflow-hidden p-3.5 text-left transition-colors", on ? "bg-primary/5 shadow-inner" : "hover:bg-surface-container-low")}
              >
                {on && <motion.span layoutId="now-playing-rail" className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span className={cn("mt-0.5", on ? "text-primary" : done ? "text-on-tertiary-container" : "text-outline")}>
                  <Icon name={on ? "play_circle" : done ? "check_circle" : "full_hd"} filled={on || done} className="text-[20px]" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  {on && (
                    <span className="mb-0.5 w-fit rounded-full bg-secondary-container px-2 py-0.5 font-label-cultural-caps text-label-cultural-caps font-bold text-on-surface uppercase">Now Playing</span>
                  )}
                  <span
                    className={cn(
                      "line-clamp-2 transition-colors",
                      on ? "font-headline-sm text-headline-sm text-primary" : cn("font-label-md text-label-md group-hover:text-primary", done ? "text-on-surface-variant" : "text-on-surface"),
                    )}
                  >
                    {l.title}
                  </span>
                  <span className={cn("mt-1 flex flex-row items-center gap-2 font-label-cultural-caps text-label-cultural-caps", on ? "font-semibold text-primary" : "text-outline")}>
                    <KindMeta l={l} />
                    <span>•</span>
                    <span>{l.duration}</span>
                    <span>•</span>
                    <span className={on ? "" : done ? "font-bold text-primary" : "text-on-surface-variant"}>{l.level}</span>
                  </span>
                </span>
              </motion.button>
            );
          })}
        </AnimatePresence>
        {list.length === 0 && <p className="p-6 text-center font-body-sm text-body-sm text-on-surface-variant">No lessons match “{q}”.</p>}
      </div>
      <div className="bg-surface-container-low p-4 text-center">
        <Link href="/contact?topic=syllabus" className="group flex flex-row items-center justify-center gap-1 font-label-md text-label-md font-semibold text-primary hover:underline">
          <span>Request Course Syllabus &amp; ZIMSEC Alignment</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </Link>
      </div>
    </div>
  );
}
