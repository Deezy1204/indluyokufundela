"use client";

import { useSyncExternalStore, type ReactNode } from "react";

/** Tailwind's md breakpoint, where the desktop design takes over. */
const DESKTOP = "(min-width: 48rem)";

type View = "mobile" | "desktop" | "both";

function subscribe(onChange: () => void) {
  const mq = matchMedia(DESKTOP);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const clientView = (): View => (matchMedia(DESKTOP).matches ? "desktop" : "mobile");
const serverView = (): View => "both";

/**
 * Server HTML carries both designs and CSS shows the right one, so first paint never flashes. Once
 * hydrated, only the design for this screen stays mounted, and client navigations never build the
 * hidden one: that halves the DOM each route change creates, which is most of its cost on phones.
 */
export function ResponsiveView({ mobile, desktop }: { mobile: ReactNode; desktop: ReactNode }) {
  const view = useSyncExternalStore(subscribe, clientView, serverView);
  return (
    <div className="flex flex-1 flex-col">
      {view !== "desktop" && <div className="flex flex-1 flex-col md:hidden">{mobile}</div>}
      {view !== "mobile" && <div className="hidden flex-1 flex-col md:flex">{desktop}</div>}
    </div>
  );
}
