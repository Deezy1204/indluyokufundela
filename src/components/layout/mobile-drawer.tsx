"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import logo from "@/assets/brand/logo.png";
import { Icon } from "@/components/icons/icon";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/cn";
import { NAV, SITE } from "@/lib/site";
import type { Lang } from "./site-header";

const panel: Variants = {
  closed: { x: "-100%", transition: { type: "spring", stiffness: 420, damping: 42 } },
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 34, when: "beforeChildren", staggerChildren: 0.045 },
  },
};

const item: Variants = {
  closed: { opacity: 0, x: -24 },
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 380, damping: 30 } },
};

export function MobileDrawer({ pathname, lang, onClose }: { pathname: string; lang: Lang; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Site menu">
      <motion.button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.aside
        variants={panel}
        initial="closed"
        animate="open"
        exit="closed"
        className="absolute inset-y-0 left-0 flex w-[min(88vw,380px)] flex-col overflow-y-auto bg-surface pt-safe pb-safe shadow-lg"
      >
        <div className="ndebele-band h-2 w-full shrink-0" />
        <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" className="h-11 w-11 rounded-full shadow-sm" sizes="48px" />
            <div className="flex flex-col">
              <span className="font-title-editorial text-title-editorial leading-tight text-primary">{SITE.name}</span>
              <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-widest text-secondary">
                {SITE.motto}
              </span>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-surface-container text-on-surface transition-transform hover:rotate-90"
          >
            <Icon name="close" className="text-[22px]" />
          </button>
        </div>

        <nav aria-label="Main" className="flex flex-col gap-1 px-3">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <motion.div key={n.href} variants={item}>
                <Link
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors",
                    active ? "text-on-primary" : "text-on-surface hover:bg-surface-container",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="drawer-active"
                      className="absolute inset-0 rounded-2xl bg-primary-container shadow-md"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                      active ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-primary-fixed text-primary",
                    )}
                  >
                    <Icon name={n.icon} className="text-[20px]" />
                  </span>
                  <span className="relative flex flex-col">
                    <span className="font-headline-sm text-[17px] leading-tight">{lang === "nde" ? n.ndebele : n.label}</span>
                    <span
                      className={cn(
                        "font-label-cultural-caps text-label-cultural-caps uppercase",
                        active ? "text-primary-fixed-dim" : "text-on-surface-variant",
                      )}
                    >
                      {lang === "nde" ? n.label : n.ndebele}
                    </span>
                  </span>
                  <Icon
                    name="chevron_right"
                    className={cn("relative ml-auto text-[20px]", active ? "text-secondary-fixed" : "text-outline")}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div variants={item} className="mt-5 flex flex-col gap-2 px-5">
          <Link
            href="/contact?topic=join"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-secondary-container font-label-lg text-label-lg font-bold text-on-secondary-fixed shadow-sm active:scale-95"
          >
            <Icon name="handshake" className="text-[20px]" />
            Join Us
          </Link>
          <Link
            href="/mobile-app"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-primary font-label-lg text-label-lg font-bold text-on-primary shadow-md active:scale-95"
          >
            <Icon name="install_mobile" className="text-[20px]" />
            Download the App
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-auto px-5 pt-6 pb-6">
          <div className="rounded-2xl bg-surface-container-low p-4">
            <p className="font-label-cultural-caps text-label-cultural-caps uppercase text-secondary">Live every Monday</p>
            <p className="mt-1 flex items-center gap-2 font-title-editorial text-title-editorial text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-error opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-error" />
              </span>
              Skyz Metro FM 100.3
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">16:15 – 16:45 CAT · Radio literature class</p>
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="group mt-4 flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary"
          >
            <Icon name="mail" className="text-[18px] text-primary" />
            {SITE.email}
          </a>
        </motion.div>
      </motion.aside>
    </div>
  );
}
