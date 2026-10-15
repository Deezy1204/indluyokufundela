import { ViewTransition, type ReactNode } from "react";

const SLIDE = { "page-forward": "page-forward", "page-back": "page-back", default: "page-fade" };

/**
 * Each Stitch screen ships a mobile and a desktop design. Both are rendered and CSS picks
 * one at the md breakpoint, so there is no layout flash or client-side detection. The
 * wrapper also owns the route transition: content slides in the direction of travel
 * through the nav (see components/ui/link.tsx) and crossfades otherwise.
 */
export function PageShell({ mobile, desktop }: { mobile: ReactNode; desktop: ReactNode }) {
  return (
    <ViewTransition enter={SLIDE} exit={SLIDE} default="none">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col md:hidden">{mobile}</div>
        <div className="hidden flex-1 flex-col md:flex">{desktop}</div>
      </div>
    </ViewTransition>
  );
}
