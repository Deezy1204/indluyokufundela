"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

export type Testimonial = { quote: string; name: string; role: string; image: StaticImageData; alt: string };

const AUTOPLAY_MS = 7000;

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const go = (step: number) => setState(([i]) => [(i + step + items.length) % items.length, step]);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  const t = items[index];
  return (
    <div
      className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[20px] bg-surface-container-lowest p-8 shadow-sm md:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <motion.span
        key={`q-${index}`}
        initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="pointer-events-none absolute top-6 right-6"
      >
        <Icon name="format_quote" className="text-[72px] text-secondary-container/50" />
      </motion.span>

      <div className="relative">
        <AnimatePresence mode="popLayout" initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d * 80, opacity: 0, filter: "blur(4px)" }),
              center: { x: 0, opacity: 1, filter: "blur(0px)" },
              exit: (d: number) => ({ x: d * -80, opacity: 0, filter: "blur(4px)" }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="cursor-grab active:cursor-grabbing"
            aria-live="polite"
          >
            <div className="mb-4 flex items-center gap-1 text-secondary">
              {Array.from({ length: 5 }, (_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, type: "spring", stiffness: 500, damping: 15 }}
                >
                  <Icon name="star" filled className="text-[20px]" />
                </motion.span>
              ))}
            </div>
            <blockquote className="mb-6 font-headline-sm text-headline-sm leading-relaxed font-medium text-on-surface select-none">
              “{t.quote}”
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-container ring-2 ring-secondary-fixed">
                <Image src={t.image} alt={t.alt} placeholder="blur" sizes="48px" className="h-full w-full object-cover" draggable={false} />
              </div>
              <div>
                <h5 className="font-label-lg text-label-lg font-bold text-on-surface">{t.name}</h5>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between pt-8">
        <div className="flex items-center gap-2">
          {items.map((it, i) => (
            <button
              key={it.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={cn(
                "relative h-2 overflow-hidden rounded-full transition-all duration-500",
                i === index ? "w-10 bg-primary-container/25" : "w-2.5 bg-surface-variant hover:bg-outline-variant",
              )}
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-primary-container"
                  initial={{ width: paused ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-variant"
          >
            <Icon name="arrow_back" className="text-[20px]" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary transition-colors hover:bg-primary"
          >
            <Icon name="arrow_forward" className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
