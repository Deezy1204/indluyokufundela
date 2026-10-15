"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { createContext, use, useDeferredValue, useId, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";
import { AddToBag } from "./bag";
import {
  BOOKS,
  DESKTOP_CATEGORIES,
  formatPrice,
  MOBILE_CATEGORIES,
  type Book,
  type CategoryKey,
  type FormatKey,
  type SortKey,
} from "./catalog-data";

type CatalogState = {
  query: string;
  setQuery: (q: string) => void;
  category: CategoryKey | "all";
  setCategory: (c: CategoryKey | "all") => void;
  format: FormatKey;
  setFormat: (f: FormatKey) => void;
  sort: SortKey;
  setSort: (s: SortKey) => void;
  results: Book[];
  reset: () => void;
};

const CatalogContext = createContext<CatalogState | null>(null);

function useCatalog() {
  const ctx = use(CatalogContext);
  if (!ctx) throw new Error("Catalog parts must be rendered inside <CatalogProvider>");
  return ctx;
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey | "all">("all");
  const [format, setFormat] = useState<FormatKey>("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const deferred = useDeferredValue(query);

  const results = useMemo(() => {
    const q = deferred.trim().toLowerCase();
    const list = BOOKS.filter(
      (b) =>
        (category === "all" || b.tags.includes(category)) &&
        (format === "all" || b.formats.includes(format)) &&
        (!q || `${b.title} ${b.author} ${b.label} ${b.blurb}`.toLowerCase().includes(q)),
    );
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "newest") sorted.sort((a, b) => b.released - a.released);
    if (sort === "rating") sorted.sort((a, b) => b.rating * 1000 + b.reviews - (a.rating * 1000 + a.reviews));
    return sorted;
  }, [deferred, category, format, sort]);

  const reset = () => {
    setQuery("");
    setCategory("all");
    setFormat("all");
  };

  return (
    <CatalogContext value={{ query, setQuery, category, setCategory, format, setFormat, sort, setSort, results, reset }}>
      {children}
    </CatalogContext>
  );
}

function scrollToCatalog(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CatalogSearch({ variant, target }: { variant: "desktop" | "mobile"; target: string }) {
  const { query, setQuery } = useCatalog();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    scrollToCatalog(target);
  };
  if (variant === "mobile") {
    return (
      <form role="search" onSubmit={submit} className="relative mb-4 w-full">
        <div className="flex h-[52px] w-full items-center rounded-full bg-surface-container-lowest px-4 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-primary-container">
          <Icon name="search" className="mr-2 shrink-0 text-[22px] text-outline" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search books"
            className="w-full border-0 bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-outline"
            placeholder="Search by title, author, or keyword..."
            type="search"
          />
          <button type="submit" className="group flex h-9 shrink-0 flex-row items-center justify-center gap-1 rounded-full bg-primary-container px-4 font-label-md text-label-md whitespace-nowrap text-on-primary transition-colors hover:bg-primary">
            Find
          </button>
        </div>
      </form>
    );
  }
  return (
    <form role="search" onSubmit={submit} className="flex w-full flex-col items-stretch gap-2 rounded-2xl bg-surface-container-low p-2 shadow-sm transition-shadow focus-within:shadow-md md:flex-row">
      <div className="relative flex flex-1 flex-row items-center pr-2 pl-4">
        <Icon name="search" className="mr-3 shrink-0 text-[22px] text-outline" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search books"
          className="w-full border-0 bg-transparent py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
          placeholder="Search by title, author, ISBN, or topic..."
          type="search"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              type="button"
              aria-label="Clear search"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setQuery("")}
              className="flex h-8 w-8 items-center justify-center rounded-full text-outline hover:bg-surface-container"
            >
              <Icon name="close" className="text-[18px]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <button
        type="submit"
        className="group flex flex-row items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-title-editorial text-title-editorial whitespace-nowrap text-on-primary shadow-sm transition-all hover:bg-primary-container"
      >
        <Icon name="search" className="text-[18px]" />
        <span>Search</span>
      </button>
    </form>
  );
}

export function CategoryPills({ variant }: { variant: "desktop" | "mobile" }) {
  const { category, setCategory } = useCatalog();
  const id = useId();
  const list = variant === "desktop" ? DESKTOP_CATEGORIES : MOBILE_CATEGORIES;
  return (
    <LayoutGroup id={id}>
      <div
        role="tablist"
        aria-label="Book categories"
        className={
          variant === "desktop"
            ? "flex flex-wrap items-center gap-2"
            : "no-scrollbar -mx-4 flex w-auto items-center gap-2 overflow-x-auto px-4 py-1"
        }
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
                variant === "desktop" ? "px-4 py-2 font-label-lg text-label-lg" : "h-10 px-4 font-label-md text-label-md",
                on ? "text-on-primary" : "bg-surface-container text-on-surface hover:bg-surface-container-high",
              )}
            >
              {on && (
                <motion.span
                  layoutId="category-pill"
                  className={cn("absolute inset-0 rounded-full shadow-sm", variant === "desktop" ? "bg-primary" : "bg-primary-container")}
                  transition={{ type: "spring", stiffness: 450, damping: 34 }}
                />
              )}
              {variant === "mobile" && c.key === "all" && <Icon name="menu_book" className="relative text-[16px]" />}
              <span className="relative">{c.label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

export function FormatToggle() {
  const { format, setFormat } = useCatalog();
  const options: { key: FormatKey; label: string }[] = [
    { key: "all", label: "All Formats" },
    { key: "print", label: "Print Edition" },
    { key: "digital", label: "Digital e-Book" },
  ];
  return (
    <div className="inline-flex rounded-full bg-surface-container p-1">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          aria-pressed={format === o.key}
          onClick={() => setFormat(o.key)}
          className={cn(
            "relative flex flex-row items-center justify-center gap-1.5 rounded-full px-3.5 py-1 font-label-md text-label-md whitespace-nowrap transition-colors",
            format === o.key ? "font-bold text-primary" : "text-on-surface-variant hover:text-on-surface",
          )}
        >
          {format === o.key && (
            <motion.span layoutId="format-pill" className="absolute inset-0 rounded-full bg-surface-container-lowest shadow-sm" transition={{ type: "spring", stiffness: 450, damping: 34 }} />
          )}
          <span className="relative">{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export function SortSelect() {
  const { sort, setSort } = useCatalog();
  return (
    <div className="relative inline-flex items-center">
      <select
        aria-label="Sort books"
        value={sort}
        onChange={(e) => setSort(e.target.value as SortKey)}
        className="cursor-pointer appearance-none rounded-full bg-surface-container-low py-2 pr-10 pl-4 font-label-lg text-label-lg text-on-surface focus:outline-none"
      >
        <option value="featured">Featured Picks</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
        <option value="rating">Highest Rated</option>
      </select>
      <Icon name="unfold_more" className="pointer-events-none absolute right-3 text-[18px] text-on-surface-variant" />
    </div>
  );
}

export function ResultCount({ className }: { className?: string }) {
  const { results } = useCatalog();
  return (
    <span className={className} aria-live="polite">
      Showing{" "}
      <motion.span key={results.length} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block font-bold text-primary">
        {results.length}
      </motion.span>{" "}
      curated title{results.length === 1 ? "" : "s"}
    </span>
  );
}

function EmptyState() {
  const { reset } = useCatalog();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="col-span-full flex flex-col items-center gap-3 rounded-3xl bg-surface-container-low px-6 py-14 text-center"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
        <Icon name="travel_explore" idle className="text-[32px]" />
      </span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">No titles match yet</h3>
      <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
        New biographies and history titles are being prepared. Try another category or clear your search.
      </p>
      <button type="button" onClick={reset} className="group mt-1 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary">
        <Icon name="autorenew" className="text-[18px]" /> Reset filters
      </button>
    </motion.div>
  );
}

const cardMotion = {
  layout: true,
  initial: { opacity: 0, y: 24, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.18 } },
  transition: { type: "spring", stiffness: 300, damping: 30 },
} as const;

/** Desktop 3-column card grid. */
export function CatalogGrid() {
  const { results } = useCatalog();
  return (
    <motion.div layout className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {results.map((b) => (
          <motion.div
            key={b.id}
            {...cardMotion}
            className="group flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col gap-4">
              <div className="zoom-media relative h-64 w-full overflow-hidden rounded-xl bg-surface-container">
                <Image src={b.image} alt={b.alt} placeholder="blur" sizes="(min-width: 1280px) 400px, 45vw" className="h-full w-full object-cover" />
                <div className={cn("absolute top-3 left-3 rounded-full px-3 py-1 font-label-cultural-caps text-label-cultural-caps font-bold", b.tone)}>
                  {b.label}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="font-label-md text-label-md font-semibold text-on-surface-variant">{b.author}</span>
                  <div className="flex flex-row items-center gap-1 text-secondary-fixed-dim">
                    <Icon name="star" filled className="text-[16px]" />
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      {b.rating.toFixed(1)} ({b.reviews})
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface transition-colors group-hover:text-primary">{b.title}</h3>
                <p className="mt-1 line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{b.blurb}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-row items-center justify-between gap-2 pt-5">
              <span className="font-headline-sm text-headline-sm font-black text-primary">{formatPrice(b.price)} USD</span>
              <AddToBag
                id={b.id}
                addedLabel="Added"
                className="flex flex-row items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-title-editorial text-[14px] font-bold whitespace-nowrap text-on-primary shadow-sm transition-all hover:bg-primary-container active:scale-95"
              >
                <span>Buy Now</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </AddToBag>
            </div>
          </motion.div>
        ))}
        {results.length === 0 && <EmptyState key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="mt-1 flex items-center gap-1 text-secondary-fixed-dim">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name={i < full ? "star" : i === full && half ? "star_half" : "star"} filled={i < full || (i === full && half)} className="text-[16px]" />
      ))}
      <span className="ml-1 font-label-md text-xs font-semibold text-on-surface">{rating.toFixed(1)}</span>
    </div>
  );
}

/** Mobile single-column list. */
export function CatalogList() {
  const { results } = useCatalog();
  return (
    <motion.div layout className="flex flex-col gap-4">
      <AnimatePresence mode="popLayout">
        {results.map((b) => (
          <motion.div key={b.id} {...cardMotion} className="group flex flex-col gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-container shadow-sm">
                <Image src={b.mobileImage} alt={b.alt} placeholder="blur" sizes="120px" className="h-full w-full object-cover" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <span className="mb-1 inline-flex rounded-full bg-surface-container px-2 py-0.5 font-label-cultural-caps text-[10px] font-bold text-primary uppercase">
                    {b.label}
                  </span>
                  <h3 className="truncate font-title-editorial text-title-editorial font-bold text-primary">{b.title}</h3>
                  <p className="truncate font-label-md text-label-md text-on-surface-variant">{b.author}</p>
                  <Stars rating={b.rating} />
                </div>
                <span className="font-headline-sm text-headline-sm font-extrabold text-primary">
                  {formatPrice(b.price)} <span className="font-label-md text-xs font-normal text-outline">USD</span>
                </span>
              </div>
            </div>
            <p className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{b.blurb}</p>
            <AddToBag
              id={b.id}
              className="flex h-11 w-full flex-row items-center justify-center gap-2 rounded-full bg-primary-container font-label-lg text-label-lg font-bold whitespace-nowrap text-on-primary shadow-sm transition-colors hover:bg-primary active:scale-[0.99]"
            >
              <span>Buy Now</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </AddToBag>
          </motion.div>
        ))}
        {results.length === 0 && <EmptyState key="empty" />}
      </AnimatePresence>
    </motion.div>
  );
}
