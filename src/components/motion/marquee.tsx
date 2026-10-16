import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Infinite horizontal scroller; pauses on hover/focus. Content is rendered twice and the
 * track slides by exactly one copy (each copy carries the trailing gap), so the loop is seamless.
 */
export function Marquee({
  children,
  className,
  gap = "0.75rem",
  duration,
  reverse,
}: {
  children: ReactNode;
  className?: string;
  gap?: string;
  /** Time for one full copy to pass, e.g. "80s". Defaults to the theme's --animate-marquee speed. */
  duration?: string;
  reverse?: boolean;
}) {
  const copy = "flex shrink-0 items-stretch gap-[var(--marquee-gap)] pr-[var(--marquee-gap)]";
  return (
    <div
      style={{ "--marquee-gap": gap } as CSSProperties}
      className={cn(
        "group/marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        style={duration ? { animationDuration: duration } : undefined}
        className={cn(
          "flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className={copy}>{children}</div>
        <div className={copy} aria-hidden inert>
          {children}
        </div>
      </div>
    </div>
  );
}
