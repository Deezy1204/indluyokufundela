"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useRef, useState, type DragEvent } from "react";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { cn } from "@/lib/cn";

/**
 * Drag-and-drop / tap-to-choose file picker. Files are not uploaded by the site (there is no
 * media storage yet); the chosen file names travel with the form so the team can follow up.
 */
export function FileDrop({
  name,
  accept,
  icon,
  title,
  hint,
  className,
  iconWrapClassName = "bg-primary/10 text-primary",
}: {
  name: string;
  accept: string;
  icon: IconName;
  title: string;
  hint: string;
  className?: string;
  iconWrapClassName?: string;
}) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [over, setOver] = useState(false);

  const take = (list: FileList | null) => setFiles(list ? Array.from(list).map((f) => `${f.name} (${(f.size / 1048576).toFixed(1)} MB)`) : []);

  return (
    <div
      onDragOver={(e: DragEvent) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e: DragEvent) => {
        e.preventDefault();
        setOver(false);
        take(e.dataTransfer.files);
      }}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[20px] border-2 border-dashed p-6 text-center transition-all duration-300",
        over ? "scale-[1.02] border-primary bg-primary-fixed/50" : "border-outline-variant bg-surface-container-low/50 hover:bg-surface-container-low",
        className,
      )}
      onClick={() => input.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && input.current?.click()}
      aria-describedby={`${id}-hint`}
    >
      <input ref={input} type="file" accept={accept} className="sr-only" tabIndex={-1} onChange={(e) => take(e.target.files)} aria-label={title} />
      <input type="hidden" name={name} value={files.join("; ")} />
      <motion.div animate={over ? { y: -6, scale: 1.1 } : { y: 0, scale: 1 }} className={cn("flex h-12 w-12 flex-row items-center justify-center rounded-full transition-transform group-hover:scale-110", iconWrapClassName)}>
        <Icon name={files.length ? "task_alt" : icon} hover="lift" className="text-[24px]" />
      </motion.div>
      <div className="flex flex-col">
        <span className="font-label-lg text-label-lg font-bold text-on-surface">{over ? "Release to attach" : title}</span>
        <span id={`${id}-hint`} className="font-body-sm text-body-sm text-outline">
          {hint}
        </span>
      </div>
      <AnimatePresence>
        {files.map((f) => (
          <motion.span
            key={f}
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-tertiary-fixed/50 px-3 py-1 font-label-md text-label-md text-on-tertiary-fixed"
          >
            <Icon name="check_circle" filled className="text-[14px]" />
            {f}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
