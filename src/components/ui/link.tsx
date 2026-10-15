"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { navIndex } from "@/lib/site";

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * next/link that tags the navigation so pages slide in the direction of travel through the
 * main menu (forward = further right in the nav). Same-page hash links are left untouched.
 */
export function Link({ href, transitionTypes, ...rest }: LinkProps) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href : (href.pathname ?? "");
  let types = transitionTypes;
  if (!types && target && !target.startsWith("#")) {
    const from = navIndex(pathname);
    const to = navIndex(target);
    if (to !== from) types = [to > from ? "page-forward" : "page-back"];
  }
  return <NextLink href={href} transitionTypes={types} {...rest} />;
}
