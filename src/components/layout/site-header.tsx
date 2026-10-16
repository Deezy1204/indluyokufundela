"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useEffect, useId, useState, useSyncExternalStore, ViewTransition } from "react";
import logo from "@/assets/brand/logo.png";
import { Icon } from "@/components/icons/icon";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/cn";
import { NAV, NDEBELE_ENABLED, SITE } from "@/lib/site";
import { MobileDrawer } from "./mobile-drawer";

export type Lang = "en" | "nde";

const LANG_KEY = "indlu-lang";
const langListeners = new Set<() => void>();
function subscribeLang(cb: () => void) {
  langListeners.add(cb);
  return () => langListeners.delete(cb);
}
function readLang(): Lang {
  if (!NDEBELE_ENABLED) return "en";
  try {
    return localStorage.getItem(LANG_KEY) === "nde" ? "nde" : "en";
  } catch {
    return "en";
  }
}
function writeLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
  langListeners.forEach((cb) => cb());
}

/** EN / isiNdebele preference for navigation labels, persisted per browser. */
export function useLang(): [Lang, (l: Lang) => void] {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "en" as Lang);
  return [lang, writeLang];
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

function LangToggle({ compact }: { compact?: boolean }) {
  const [lang, setLang] = useLang();
  const id = useId();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "nde" : "en")}
      aria-label={lang === "en" ? "Show menu in isiNdebele" : "Show menu in English"}
      className="group flex items-center gap-1 rounded-full border border-outline/15 bg-surface-container p-1 pl-2.5 transition-colors hover:bg-surface-container-high"
    >
      <Icon name="language" className="text-[18px] text-primary" />
      {compact ? (
        <span className="relative inline-flex h-6 w-9 items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={lang}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              className="font-label-md text-[12px] font-extrabold text-primary"
            >
              {lang === "en" ? "EN" : "NDE"}
            </motion.span>
          </AnimatePresence>
        </span>
      ) : (
        (["en", "nde"] as const).map((l) => (
          <span key={l} className="relative rounded-full px-2 py-0.5 font-label-md text-label-md font-semibold">
            {lang === l && (
              <motion.span
                layoutId={`lang-${id}`}
                className="absolute inset-0 rounded-full bg-surface-container-lowest shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 34 }}
              />
            )}
            <span className={cn("relative transition-colors", lang === l ? "text-primary" : "text-outline")}>
              {l.toUpperCase()}
            </span>
          </span>
        ))
      )}
    </button>
  );
}

function Brand({ small }: { small?: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label={`${SITE.name} — home`}>
      <span className="relative block">
        <Image
          src={logo}
          alt=""
          className={cn(
            "w-auto rounded-full object-contain shadow-sm transition-transform duration-700 ease-[var(--ease-spring)] group-hover:rotate-[14deg] group-hover:scale-110",
            small ? "h-9" : "h-11",
          )}
          sizes="48px"
          preload
        />
        <span className="absolute inset-0 rounded-full ring-2 ring-secondary-fixed/0 transition-all duration-500 group-hover:ring-offset-2 group-hover:ring-secondary-fixed" />
      </span>
      <span className="flex flex-col">
        <span className="font-title-editorial text-title-editorial leading-tight tracking-tight text-primary">{SITE.name}</span>
        <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-widest text-secondary max-[380px]:hidden">
          {SITE.motto}
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang] = useLang();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    if (open) return;
    if (y > 160 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y < 160) setHidden(false);
  });

  // Close the drawer whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setHidden(false);
  }

  useEffect(() => {
    document.documentElement.toggleAttribute("data-header-hidden", hidden);
  }, [hidden]);

  // Drawer links only mount when the menu opens, so they can't prefetch until then and a quick tap
  // waits on the network. Warm the main routes once the browser is idle (skipped under Data Saver).
  useEffect(() => {
    if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;
    const warm = () => NAV.forEach((item) => router.prefetch(item.href));
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(warm, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(warm, 1500);
    return () => clearTimeout(id);
  }, [router]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-safe backdrop-blur-xl transition-[translate,background-color,box-shadow] duration-500 ease-[var(--ease-out-quint)]",
          scrolled ? "bg-surface/90 shadow-[0_6px_24px_-12px_rgba(46,49,146,0.25)]" : "bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
          hidden && "-translate-y-full",
        )}
      >
        {/* Desktop / tablet */}
        <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between gap-4 px-6 md:flex lg:px-12">
          <Brand />
          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-3 py-1.5 font-label-lg text-label-lg transition-colors duration-300",
                    active ? "text-on-primary" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                  )}
                >
                  {active && (
                    <ViewTransition name="nav-pill">
                      <span className="absolute inset-0 rounded-full bg-primary-container shadow-sm" />
                    </ViewTransition>
                  )}
                  <span className="relative">{lang === "nde" ? item.ndebele : item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            {NDEBELE_ENABLED && <LangToggle />}
            <Link
              href="/contact?topic=join"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-6 py-2.5 font-label-lg text-label-lg text-on-secondary-fixed shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:shadow-md"
            >
              Join Us
              <Icon name="handshake" className="text-[18px]" />
            </Link>
            <Link
              href="/mobile-app"
              aria-label="Your reader profile lives in the Indlu Yokufundela app"
              className="group hidden h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary transition-transform hover:scale-110 lg:flex"
            >
              <Icon name="person" className="text-[18px]" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high xl:hidden"
            >
              <Icon name="menu" className="text-[22px]" />
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex h-16 items-center justify-between gap-2 px-margin md:hidden">
          <div className="flex min-w-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group -ml-1.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container"
            >
              <Icon name="menu" className="text-[24px]" />
            </button>
            <Brand small />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {NDEBELE_ENABLED && <LangToggle compact />}
            <Link
              href="/contact?topic=join"
              className="flex h-10 items-center rounded-full bg-secondary-container px-4 font-label-lg text-label-lg font-bold text-on-secondary-fixed shadow-sm transition-transform active:scale-95 max-[400px]:hidden"
            >
              Join Us
            </Link>
          </div>
        </div>

        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-primary-container via-secondary-fixed to-tertiary-fixed-dim"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>{open && <MobileDrawer pathname={pathname} lang={lang} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
