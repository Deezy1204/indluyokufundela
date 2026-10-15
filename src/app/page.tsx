import { PageShell } from "@/components/layout/page-shell";
import { HomeDesktop } from "@/components/views/home-desktop";
import { HomeMobile } from "@/components/views/home-mobile";

export default function HomePage() {
  return <PageShell mobile={<HomeMobile />} desktop={<HomeDesktop />} />;
}
