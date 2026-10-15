import type { MetadataRoute } from "next";
import { NAV } from "@/lib/site";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((item) => ({
    url: new URL(item.href, BASE).toString(),
    lastModified: new Date(),
    changeFrequency: item.href === "/events" || item.href === "/watch" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
