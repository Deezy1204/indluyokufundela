"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { createContext, use, useCallback, useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

export type GalleryImage = { image: StaticImageData; alt: string; caption?: string; sub?: string };

type GalleryState = { open: (index: number) => void };
const GalleryContext = createContext<GalleryState | null>(null);

/** Lightbox for a set of photos; any <GalleryTrigger index> inside opens it at that photo. */
export function GalleryProvider({ items, children }: { items: GalleryImage[]; children: ReactNode }) {
  const [[index, dir], setState] = useState<[number | null, number]>([null, 0]);
  const close = useCallback(() => setState([null, 0]), []);
  const step = useCallback((d: number) => setState(([i]) => [i === null ? null : (i + d + items.length) % items.length, d]), [items.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, close, step]);

  const item = index === null ? null : items[index];
  return (
    <GalleryContext value={{ open: (i) => setState([i, 0]) }}>
      {children}
      <AnimatePresence>
        {item && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={item.caption ?? "Photo"}>
            <motion.button type="button" aria-label="Close gallery" tabIndex={-1} onClick={close} className="absolute inset-0 bg-ink/85 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div className="relative flex w-full max-w-5xl flex-col items-center gap-4" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-black shadow-lg">
                <AnimatePresence initial={false} custom={dir} mode="popLayout">
                  <motion.div
                    key={index}
                    custom={dir}
                    className="absolute inset-0"
                    variants={{
                      enter: (d: number) => ({ x: d === 0 ? 0 : d * 120, opacity: 0, scale: d === 0 ? 0.96 : 1 }),
                      center: { x: 0, opacity: 1, scale: 1 },
                      exit: (d: number) => ({ x: d * -120, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    drag={items.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) step(1);
                      else if (info.offset.x > 80) step(-1);
                    }}
                  >
                    <Image src={item.image} alt={item.alt} placeholder="blur" sizes="(min-width: 1024px) 1024px, 100vw" className="h-full w-full object-contain" draggable={false} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex w-full items-center justify-between gap-4 text-white">
                <div className="min-w-0">
                  {item.caption && <p className="font-title-editorial text-title-editorial font-bold">{item.caption}</p>}
                  {item.sub && <p className="font-body-sm text-body-sm text-white/75">{item.sub}</p>}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {items.length > 1 && (
                    <>
                      <span className="mr-2 font-label-md text-label-md text-white/70 tabular-nums">
                        {index! + 1} / {items.length}
                      </span>
                      <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25">
                        <Icon name="arrow_back" className="text-[20px]" />
                      </button>
                      <button type="button" onClick={() => step(1)} aria-label="Next photo" className="group flex h-11 w-11 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim">
                        <Icon name="arrow_forward" className="text-[20px]" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            <button type="button" onClick={close} aria-label="Close" className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-transform hover:rotate-90">
              <Icon name="close" className="text-[22px]" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </GalleryContext>
  );
}

/** Makes a designed thumbnail (or any button-like content) open the surrounding gallery. */
export function GalleryTrigger({ index, className, children, label }: { index: number; className?: string; children: ReactNode; label?: string }) {
  const ctx = use(GalleryContext);
  return (
    <button type="button" onClick={() => ctx?.open(index)} aria-label={label ?? "Open photo"} className={cn("group cursor-zoom-in", className)}>
      {children}
    </button>
  );
}
