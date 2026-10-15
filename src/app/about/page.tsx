import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { AboutDesktop } from "@/components/views/about-desktop";
import { AboutMobile } from "@/components/views/about-mobile";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our story, milestones, leadership and team — reviving isiNdebele literature from Bulawayo since 2018.",
};

export default function AboutPage() {
  return <PageShell mobile={<AboutMobile />} desktop={<AboutDesktop />} />;
}
