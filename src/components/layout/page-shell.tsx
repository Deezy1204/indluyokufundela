import { ViewTransition, type ReactNode } from "react";
import { ResponsiveView } from "./responsive-view";

const SLIDE = { "page-forward": "page-forward", "page-back": "page-back", default: "page-fade" };

/**
 * Each Stitch screen ships a mobile and a desktop design. The server renders both and CSS picks one
 * at the md breakpoint, so there is no layout flash; on the client only the matching one stays
 * mounted (see ResponsiveView). The wrapper also owns the route transition: content slides in the
 * direction of travel through the nav (see components/ui/link.tsx) and crossfades otherwise.
 */
export function PageShell({ mobile, desktop }: { mobile: ReactNode; desktop: ReactNode }) {
  return (
    <ViewTransition enter={SLIDE} exit={SLIDE} default="none">
      <ResponsiveView mobile={mobile} desktop={desktop} />
    </ViewTransition>
  );
}
