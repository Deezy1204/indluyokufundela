"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { createContext, use, useDeferredValue, useId, useMemo, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { MediaModal, type Media } from "@/components/ui/media-modal";
import { Player, PlayerOverlayButton, PlayerProgress, PlayerTime, PlayerZoom } from "@/components/ui/player";
import { cn } from "@/lib/cn";
import { CATEGORIES, formatMonth, formatViews, VIDEOS, type Video, type VideoCategory } from "./video-data";

type Sort = "recent" | "popular" | "duration";
type LibraryState = {
  category: VideoCategory | "all";
  setCategory: (c: VideoCategory | "all") => void;
  query: string;
  setQuery: (q: string) => void;
  sort: Sort;
  setSort: (s: Sort) => void;
  results: Video[];
  play: (v: Video) => void;
};

const Ctx = createContext<LibraryState | null>(null);
function useLibrary() {
  const ctx = use(Ctx);
  if (!ctx) throw new Error("Video library parts must be inside <VideoLibraryProvider>");
  return ctx;
}

function toMedia(v: Video): Media {
  return {
    image: v.image,
    alt: v.alt,
    title: v.title,
    description: v.description,
    seconds: v.seconds,
    kind: v.category === "radio" ? "audio" : "video",
    meta: `${v.label} • ${formatViews(v.views)} views • ${formatMonth(v.date)}`,
  };
}

export function VideoLibraryProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<VideoCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("recent");
  const [playing, setPlaying] = useState<Video | null>(null);
  const q = useDeferredValue(query);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = VIDEOS.filter((v) => (category === "all" || v.category === category) && (!needle || `${v.title} ${v.description} ${v.label}`.toLowerCase().includes(needle)));
    const sorted = [...list];
    if (sort === "recent") sorted.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === "popular") sorted.sort((a, b) => b.views - a.views);
    if (sort === "duration") sorted.sort((a, b) => b.seconds - a.seconds);
    return sorted;
  }, [category, q, sort]);

  return (
    <Ctx value={{ category, setCategory, query, setQuery, sort, setSort, results, play: setPlaying }}>
      {children}
      <AnimatePresence>{playing && <MediaModal key={playing.id} media={toMedia(playing)} onClose={() => setPlaying(null)} />}</AnimatePresence>
    </Ctx>
  );
}

export function CategoryTabs({ variant }: { variant: "desktop" | "mobile" }) {
  const { category, setCategory } = useLibrary();
  const id = useId();
  const list = variant === "desktop" ? CATEGORIES : CATEGORIES.filter((c) => c.key !== "grammar");
  return (
    <LayoutGroup id={id}>
      <div
        role="tablist"
        aria-label="Video categories"
        className={variant === "desktop" ? "no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0" : "custom-scroll-hidden -mx-4 flex items-center gap-2 overflow-x-auto scroll-smooth px-4 pb-1"}
      >
        {list.map((c) => {
          const on = c.key === category;
          return (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setCategory(c.key)}
              className={cn(
                "group relative flex shrink-0 flex-row items-center justify-center gap-1.5 rounded-full whitespace-nowrap transition-colors",
                variant === "desktop"
                  ? cn("px-4 py-2 font-label-md text-label-md", on ? "font-bold text-on-primary" : "bg-surface-container-high font-medium text-on-surface-variant hover:text-on-surface")
                  : cn("min-h-[44px] px-4 py-2 font-label-cultural-caps text-label-cultural-caps uppercase shadow-sm", on ? "text-on-primary" : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface"),
              )}
            >
              {on && (
                <motion.span
                  layoutId="video-cat-pill"
                  className={cn("absolute inset-0 rounded-full shadow-sm", variant === "desktop" ? "bg-primary-container" : "bg-primary")}
                  transition={{ type: "spring", stiffness: 450, damping: 34 }}
                />
              )}
              {variant === "mobile" && <Icon name={c.icon} className="relative text-[16px]" />}
              <span className="relative">{variant === "desktop" ? c.label : c.short}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

export function VideoSearch({ variant }: { variant: "desktop" | "mobile" }) {
  const { query, setQuery } = useLibrary();
  if (variant === "mobile") {
    return (
      <div className="relative w-full">
        <Icon name="search" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[20px] text-outline" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search videos"
          className="h-[48px] w-full rounded-full bg-surface-container-lowest pr-4 pl-11 font-body-sm text-body-sm text-on-surface shadow-sm placeholder:text-outline focus:ring-2 focus:ring-primary-container focus:outline-none"
          placeholder="Search videos by title or topic..."
          type="search"
        />
      </div>
    );
  }
  return (
    <div className="relative grow sm:w-64">
      <Icon name="search" className="absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-outline" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search videos"
        className="w-full rounded-full bg-surface-container-lowest py-2 pr-4 pl-9 font-body-sm text-body-sm text-on-surface shadow-sm placeholder:text-outline focus:ring-2 focus:ring-primary focus:outline-none"
        placeholder="Search videos by topic..."
        type="search"
      />
    </div>
  );
}

export function VideoSort() {
  const { sort, setSort } = useLibrary();
  return (
    <div className="relative shrink-0">
      <select
        aria-label="Sort videos"
        value={sort}
        onChange={(e) => setSort(e.target.value as Sort)}
        className="cursor-pointer appearance-none rounded-full bg-surface-container-lowest py-2 pr-9 pl-4 font-label-md text-label-md text-on-surface shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option value="recent">Most Recent</option>
        <option value="popular">Most Viewed</option>
        <option value="duration">Longest Duration</option>
      </select>
      <Icon name="expand_more" className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[18px] text-on-surface-variant" />
    </div>
  );
}

export function VideoCount({ className }: { className?: string }) {
  const { results } = useLibrary();
  return (
    <span className={className} aria-live="polite">
      Showing{" "}
      <motion.span key={results.length} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block">
        {results.length}
      </motion.span>{" "}
      video{results.length === 1 ? "" : "s"}
    </span>
  );
}

function Empty() {
  const { setCategory, setQuery } = useLibrary();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="col-span-full flex flex-col items-center gap-3 rounded-[20px] bg-surface-container-lowest px-6 py-12 text-center">
      <Icon name="smart_display" idle hover="pop" className="text-[40px] text-primary" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface">No videos match yet</h3>
      <button
        type="button"
        onClick={() => {
          setCategory("all");
          setQuery("");
        }}
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary"
      >
        <Icon name="autorenew" className="text-[18px]" /> Show all videos
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

export function VideoGrid() {
  const { results, play } = useLibrary();
  return (
    <motion.div layout className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {results.map((v) => (
          <motion.article key={v.id} {...card} className="group lift flex flex-col overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-sm">
            <button type="button" onClick={() => play(v)} aria-label={`Play ${v.title}`} className="zoom-media relative aspect-video w-full overflow-hidden bg-surface-container-highest">
              <Image src={v.image} alt={v.alt} placeholder="blur" sizes="(min-width: 1280px) 400px, 45vw" className="h-full w-full object-cover" />
              <div className="absolute right-3 bottom-3 flex flex-row items-center justify-center gap-1 rounded-md bg-black/80 px-2 py-0.5 font-label-md text-label-md text-white">{v.duration}</div>
              <div className={cn("absolute top-3 left-3 rounded-full px-2.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold uppercase", v.tone)}>{v.label}</div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-secondary-container text-on-secondary-fixed shadow-xl transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-100">
                  <Icon name="play_arrow" filled className="text-4xl" />
                </span>
              </div>
            </button>
            <div className="flex grow flex-col justify-between gap-2 p-space-md">
              <div>
                <h3 className="line-clamp-2 font-headline-sm text-headline-sm font-bold text-on-surface transition-colors group-hover:text-primary">{v.title}</h3>
                <p className="mt-1 line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{v.description}</p>
              </div>
              <div className="flex items-center justify-between pt-2 font-label-md text-label-md text-on-surface-variant">
                <span className="flex items-center gap-1 font-semibold text-primary">
                  Indlu Yokufundela
                  <Icon name="verified" filled className="text-[14px] text-primary" />
                </span>
                <span>
                  {formatViews(v.views)} views • {formatMonth(v.date)}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
        {results.length === 0 && <Empty key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}

export function VideoList() {
  const { results, play } = useLibrary();
  return (
    <motion.div layout className="flex flex-col space-y-4">
      <AnimatePresence mode="popLayout">
        {results.map((v) => (
          <motion.article key={v.id} {...card} className="group flex flex-col overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-sm">
            <button type="button" onClick={() => play(v)} aria-label={`Play ${v.title}`} className="relative aspect-video w-full overflow-hidden bg-surface-container-high">
              <Image src={v.mobileImage} alt={v.alt} placeholder="blur" sizes="(min-width: 640px) 448px, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105" />
              <div className="absolute right-2.5 bottom-2.5 rounded-md bg-inverse-surface/90 px-2 py-0.5 font-label-md text-xs text-inverse-on-surface backdrop-blur-sm">{v.duration}</div>
              <div className={cn("absolute top-2.5 left-2.5 rounded-full px-2 py-0.5 font-label-cultural-caps text-[10px] tracking-wider uppercase", v.tone)}>{v.label}</div>
            </button>
            <div className="space-y-1.5 p-3.5">
              <h3 className="line-clamp-2 font-title-editorial text-title-editorial text-on-surface">{v.mobileTitle}</h3>
              <div className="flex items-center gap-2 font-label-md text-xs text-on-surface-variant">
                <span>{formatViews(v.views)} views</span>
                <span>•</span>
                <span>{formatMonth(v.date)}</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => play(v)}
                  className="group flex min-h-[44px] w-full flex-row items-center justify-center gap-2 rounded-full bg-surface-container font-label-lg text-label-lg whitespace-nowrap text-on-surface transition-colors hover:bg-surface-container-high active:scale-[0.98]"
                >
                  <Icon name="play_arrow" className="text-[18px]" />
                  <span>{v.cta}</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
        {results.length === 0 && <Empty key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}

/** "View Full Playlist" — filters the library to that playlist's category and scrolls to it. */
export function PlaylistButton({ category, target, className, children }: { category: VideoCategory; target: string; className?: string; children: ReactNode }) {
  const { setCategory } = useLibrary();
  return (
    <button
      type="button"
      onClick={() => {
        setCategory(category);
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className={cn("group", className)}
    >
      {children}
    </button>
  );
}

/** Cinema-style featured video: poster drifts while "playing", progress runs along the bottom. */
export function FeaturedStage({
  image,
  alt,
  seconds,
  variant,
}: {
  image: StaticImageData;
  alt: string;
  seconds: number;
  variant: "desktop" | "mobile";
}) {
  return (
    <Player duration={seconds} className="group relative aspect-video w-full overflow-hidden bg-inverse-surface">
      <PlayerZoom className="absolute inset-0">
        <Image src={image} alt={alt} placeholder="blur" sizes={variant === "desktop" ? "(min-width: 1280px) 1200px, 90vw" : "(min-width: 640px) 448px, 100vw"} className="h-full w-full object-cover opacity-90" />
      </PlayerZoom>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        {variant === "desktop" && <span className="absolute h-24 w-24 animate-ping rounded-full bg-secondary-container opacity-30 group-data-[playing]:hidden" />}
        <PlayerOverlayButton
          iconClassName={variant === "desktop" ? "text-4xl" : "text-[32px]"}
          className={cn(
            "relative z-10 flex items-center justify-center rounded-full shadow-xl",
            variant === "desktop" ? "h-20 w-20 bg-secondary-container text-on-secondary-fixed" : "h-14 w-14 bg-[#E50914] text-white",
          )}
        />
      </div>
      <div
        className={cn(
          "absolute flex flex-row items-center justify-center gap-1 rounded-full bg-black/80 font-label-md text-label-md text-white backdrop-blur-md",
          variant === "desktop" ? "right-6 bottom-6 px-3 py-1.5" : "right-3 bottom-3 px-2 py-0.5 text-xs",
        )}
      >
        <Icon name="schedule" className="text-[14px]" />
        <PlayerTime />
      </div>
      <PlayerProgress className="absolute inset-x-0 bottom-0 h-1.5 bg-white/15" barClassName="bg-secondary-container" />
      {variant === "desktop" ? (
        <div className="absolute top-6 left-6 flex flex-row items-center gap-2 rounded-full bg-error px-3 py-1 font-label-cultural-caps text-label-cultural-caps text-on-error uppercase shadow-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          Premiere Presentation
        </div>
      ) : (
        <div className="absolute top-3 left-3 rounded-full bg-secondary-container px-2.5 py-1 font-label-cultural-caps text-[10px] font-extrabold tracking-wider text-on-secondary-fixed uppercase shadow-sm">
          Featured Premiere
        </div>
      )}
    </Player>
  );
}
