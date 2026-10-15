import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { WatchDesktop } from "@/components/views/watch-desktop";
import { WatchMobile } from "@/components/views/watch-mobile";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description: "Video lessons, oral storytelling, festival performances and radio classroom recordings.",
};

export default function WatchPage() {
  return <PageShell mobile={<WatchMobile />} desktop={<WatchDesktop />} />;
}
