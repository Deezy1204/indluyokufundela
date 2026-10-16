"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { beginNavigation } from "@/components/layout/navigation-loader";
import { navIndex } from "@/lib/site";

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * next/link that tags the navigation so pages slide in the direction of travel through the
 * main menu (forward = further right in the nav), and shows the navigation loader while the next
 * page renders. Same-page links (hash or query only) are left untouched.
 */
export function Link({ href, transitionTypes, onNavigate, ...rest }: LinkProps) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href : (href.pathname ?? "");
  const targetPath = target.split(/[?#]/)[0];
  let types = transitionTypes;
  if (!types && target && !target.startsWith("#")) {
    const from = navIndex(pathname);
    const to = navIndex(target);
    if (to !== from) types = [to > from ? "page-forward" : "page-back"];
  }
  return (
    <NextLink
      href={href}
      transitionTypes={types}
      onNavigate={(e) => {
        let cancelled = false;
        onNavigate?.({
          preventDefault: () => {
            cancelled = true;
            e.preventDefault();
          },
        });
        if (!cancelled && targetPath && targetPath !== pathname) beginNavigation(pathname, targetPath);
      }}
      {...rest}
    />
  );
}
