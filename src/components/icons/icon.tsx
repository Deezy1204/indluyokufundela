import { createElement, type SVGProps } from "react";
import { cn } from "@/lib/cn";
import { ICON_HOVER, ICON_NODES, SOLID_FILL, type IconHover, type IconName } from "./icon-data";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name" | "fill"> & {
  name: IconName;
  /** Mirrors Material Symbols' FILL axis: a soft duotone fill, or solid for simple glyphs. */
  filled?: boolean;
  /** Override the hover/focus motion picked for this glyph. */
  hover?: IconHover | "none";
  /** Play the hover motion continuously (e.g. a live indicator). */
  idle?: boolean;
};

/**
 * Animated line icon. Every icon draws its strokes in when it first appears (see the
 * `.icon` rules in globals.css and MotionObserver), and replays a glyph-specific motion
 * when its nearest interactive ancestor is hovered or focused. Sized by font-size like
 * the Material Symbols it replaces, so `text-[18px]` keeps working.
 */
export function Icon({ name, filled, hover, idle, className, ...rest }: IconProps) {
  const node = ICON_NODES[name];
  const motion = hover ?? ICON_HOVER[name] ?? "draw";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-icon={name}
      data-hover={motion}
      data-idle={idle ? "" : undefined}
      className={cn("icon", filled && (SOLID_FILL.has(name) ? "icon-solid" : "icon-filled"), className)}
      {...rest}
    >
      {node.map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs, pathLength: 1 }))}
    </svg>
  );
}
