"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { Icon } from "@/components/icons/icon";
import { NAV } from "@/lib/site";

type Pending = { from: string; to: string } | null;

let pending: Pending = null;
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function setPending(next: Pending) {
  pending = next;
  listeners.forEach((cb) => cb());
}

/** Called by components/ui/link.tsx when a client-side navigation to another page starts. */
export function beginNavigation(from: string, to: string) {
  setPending({ from, to });
}

/**
 * Covers the page being left with a skeleton of the next one while it renders, instead of leaving the
 * old page on screen. It is derived from the pathname during render, so it disappears in the same
 * commit that shows the new page, and its own view-transition name lets it fade out over the
 * incoming slide (see globals.css).
 */
export function NavigationLoader() {
  const pathname = usePathname();
  const nav = useSyncExternalStore(subscribe, () => pending, () => null);
  const show = nav !== null && nav.from === pathname;

  // Landed: forget the navigation so returning to `from` later doesn't bring the loader back.
  useEffect(() => {
    if (nav && nav.from !== pathname) setPending(null);
  }, [nav, pathname]);

  // Never strand the loader: back/forward cancels it, and a stuck navigation gives up after 10s.
  useEffect(() => {
    if (!show) return;
    const cancel = () => setPending(null);
    const timer = setTimeout(cancel, 10_000);
    window.addEventListener("popstate", cancel);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", cancel);
    };
  }, [show]);

  if (!show) return null;
  const item = NAV.find((n) => n.href === nav.to);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{ viewTransitionName: "nav-loader" }}
      className="nav-loader fixed inset-0 z-40 flex flex-col overflow-hidden bg-surface pt-safe"
    >
      <span className="sr-only">Loading {item?.label ?? "page"}…</span>
      <div aria-hidden className="h-16 shrink-0 md:h-20" />
      <div aria-hidden className="nav-loader-bar h-[3px] shrink-0" />

      <div aria-hidden className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin pt-space-lg md:px-6 md:pt-16 lg:px-12">
        <div className="grid gap-space-lg md:grid-cols-2 md:items-center md:gap-12">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-fixed py-1.5 pr-4 pl-2 text-primary">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-on-primary">
                <Icon name={item?.icon ?? "menu_book"} className="text-[16px]" />
              </span>
              <span className="font-label-lg text-label-lg font-bold">{item?.label ?? "Loading"}</span>
            </span>
            <div className="skeleton h-9 w-11/12 rounded-xl md:h-12" />
            <div className="skeleton h-9 w-2/3 rounded-xl md:h-12" />
            <div className="mt-1 flex flex-col gap-2.5">
              <div className="skeleton h-3.5 w-full rounded-full" />
              <div className="skeleton h-3.5 w-full rounded-full" />
              <div className="skeleton h-3.5 w-4/5 rounded-full" />
            </div>
            <div className="mt-2 flex gap-3">
              <div className="skeleton h-12 w-36 rounded-full" />
              <div className="skeleton h-12 w-28 rounded-full" />
            </div>
          </div>
          <div className="skeleton aspect-[4/3] w-full rounded-3xl" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className={i === 2 ? "hidden flex-col gap-3 md:flex" : "flex flex-col gap-3"}>
              <div className="skeleton aspect-square w-full rounded-2xl" />
              <div className="skeleton h-4 w-4/5 rounded-full" />
              <div className="skeleton h-3 w-1/2 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
