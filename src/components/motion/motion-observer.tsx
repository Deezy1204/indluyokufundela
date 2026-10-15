"use client";

import { useEffect } from "react";

const REVEAL = "[data-reveal],[data-stagger],[data-count]";
const ICON = "svg.icon";

function inViewport(el: Element) {
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
}

function countUp(el: HTMLElement) {
  const raw = el.dataset.countText ?? el.textContent ?? "";
  const m = raw.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/);
  if (!m) return;
  el.dataset.countText = raw;
  const [, prefix, num, suffix] = m;
  const target = Number(num.replace(/,/g, ""));
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  const grouped = num.includes(",");
  const fmt = (v: number) =>
    grouped
      ? v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : v.toFixed(decimals);
  const duration = Math.min(2000, 700 + target * 0.12);
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = prefix + fmt(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Drives the CSS-based motion system in globals.css:
 * - [data-reveal] / [data-stagger] get [data-inview] when they scroll into view.
 * - [data-count] numbers count up once visible.
 * - Icons that start off-screen are parked ([data-wait]) and redraw on arrival.
 * New nodes (client navigations, filtered lists) are picked up by a MutationObserver.
 */
export function MotionObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.dataset.motion = "reduced";
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => el.setAttribute("data-inview", ""));
      return;
    }

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-inview", "");
          if (el.hasAttribute("data-count")) countUp(el);
          reveal.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const icons = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.removeAttribute("data-wait");
          el.setAttribute("data-inview", "");
          icons.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );

    const track = (root: ParentNode) => {
      if (root instanceof Element && root.matches(REVEAL)) reveal.observe(root);
      root.querySelectorAll(REVEAL).forEach((el) => {
        if (!el.hasAttribute("data-inview")) reveal.observe(el);
      });
      const found = root instanceof Element && root.matches(ICON) ? [root] : [];
      root.querySelectorAll(ICON).forEach((el) => found.push(el));
      for (const el of found) {
        if (el.hasAttribute("data-inview")) continue;
        // Already parked (e.g. by a previous mount of this effect): just watch it again.
        if (el.hasAttribute("data-wait")) {
          icons.observe(el);
          continue;
        }
        // Icons already on screen keep their first-paint draw; the rest wait their turn.
        if (inViewport(el)) continue;
        el.setAttribute("data-wait", "");
        icons.observe(el);
      }
    };

    track(document);
    document.documentElement.dataset.motion = "";

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) track(node);
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      reveal.disconnect();
      icons.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
