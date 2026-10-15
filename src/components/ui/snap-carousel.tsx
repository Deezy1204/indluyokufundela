"use client";

import { motion } from "motion/react";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Native scroll-snap row (swipe on touch, shift+wheel / drag-scroll on desktop) with dots that
 * follow the closest slide and jump to a slide when tapped.
 */
export function SnapCarousel({
  children,
  className,
  dotsClassName,
  label = "Slides",
}: {
  children: ReactNode;
  className?: string;
  dotsClassName?: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const items = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      items.forEach((item, i) => {
        const dist = Math.abs(item.offsetLeft + item.offsetWidth / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = ref.current;
    const item = el?.children[i] as HTMLElement | undefined;
    if (el && item) el.scrollTo({ left: item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={ref} className={cn("no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth", className)} aria-label={label}>
        {children}
      </div>
      {count > 1 && (
        <div className={cn("mt-3 flex items-center justify-center gap-1.5", dotsClassName)}>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className="relative flex h-6 items-center"
            >
              <motion.span
                className="block h-2 rounded-full"
                animate={{ width: i === active ? 24 : 8, backgroundColor: i === active ? "#2e3192" : "#e5e2e1" }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
