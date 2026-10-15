"use client";

import { Icon } from "@/components/icons/icon";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-1.5 rounded-full bg-inverse-on-surface/10 px-3 py-1.5 text-surface-bright transition-colors hover:bg-secondary-fixed hover:text-on-secondary-fixed"
    >
      <Icon name="arrow_upward" hover="lift" className="text-[16px]" />
      Top
    </button>
  );
}
