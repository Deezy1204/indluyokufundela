"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { cn } from "@/lib/cn";

type AccordionProps = {
  title: string;
  titleClassName?: string;
  icon?: IconName;
  defaultOpen?: boolean;
  className?: string;
  buttonClassName?: string;
  panelClassName?: string;
  children: ReactNode;
};

/** Disclosure with a spring height animation; replaces the static <details> in the designs. */
export function Accordion({ title, titleClassName, icon, defaultOpen, className, buttonClassName, panelClassName, children }: AccordionProps) {
  const [open, setOpen] = useState(!!defaultOpen);
  const id = useId();
  return (
    <div className={className} data-open={open || undefined}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={cn("group flex w-full items-center justify-between gap-3 text-left", buttonClassName)}
      >
        <span className="flex items-center gap-2.5">
          {icon && <Icon name={icon} className="text-[20px] text-primary" />}
          <span className={titleClassName}>{title}</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
          <Icon name="expand_more" hover="none" className="text-[20px]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <div className={panelClassName}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
