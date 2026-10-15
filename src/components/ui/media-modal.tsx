"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";
import { Equalizer, Player, PlayerButton, PlayerProgress, PlayerTime } from "./player";

export type Media = {
  image: StaticImageData;
  alt: string;
  title: string;
  description?: string;
  /** Length in seconds. */
  seconds: number;
  kind?: "video" | "audio";
  meta?: string;
  /** Real media URL, when published (e.g. /media/finale.mp3). */
  src?: string;
};

function useModalChrome(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);
}

export function MediaModal({ media, onClose }: { media: Media; onClose: () => void }) {
  useModalChrome(onClose);
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={media.title}>
      <motion.button type="button" aria-label="Close" tabIndex={-1} onClick={onClose} className="absolute inset-0 bg-ink/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-t-[28px] bg-surface shadow-lg sm:rounded-[28px]"
      >
        <Player duration={media.seconds} src={media.src}>
          <div className="relative aspect-video w-full overflow-hidden bg-inverse-surface">
            <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
              <Image src={media.image} alt={media.alt} placeholder="blur" sizes="(min-width: 768px) 768px, 100vw" className="h-full w-full object-cover opacity-80" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 flex flex-col gap-2 text-white">
              <PlayerProgress className="h-1.5 w-full overflow-hidden rounded-full bg-white/25" barClassName="bg-secondary-container" />
              <div className="flex items-center justify-between font-label-md text-label-md">
                <div className="flex items-center gap-3">
                  <PlayerButton label={media.title} iconClassName="text-[26px]" className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-surface shadow-md" />
                  <PlayerTime />
                </div>
                <Equalizer bars={5} />
              </div>
            </div>
          </div>
        </Player>
        <button type="button" onClick={onClose} aria-label="Close" className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-transform hover:rotate-90">
          <Icon name="close" className="text-[20px]" />
        </button>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex flex-col gap-2 p-6">
          {media.meta && <span className="font-label-cultural-caps text-label-cultural-caps font-bold text-secondary uppercase">{media.meta}</span>}
          <h3 className="font-headline-sm text-headline-sm text-primary">{media.title}</h3>
          {media.description && <p className="font-body-md text-body-md text-on-surface-variant">{media.description}</p>}
          {!media.src && (
            <p className="mt-1 rounded-xl bg-surface-container-low px-4 py-2.5 font-body-sm text-[13px] text-outline">
              Preview mode — the full {media.kind === "audio" ? "recording" : "video"} plays here once it is published to the archive.
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Wraps a designed media tile; clicking opens the preview modal. */
export function MediaTrigger({ media, className, children, label }: { media: Media; className?: string; children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={label ?? `Play ${media.title}`} className={cn("group block text-left", className)}>
        {children}
      </button>
      <AnimatePresence>{open && <MediaModal media={media} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
