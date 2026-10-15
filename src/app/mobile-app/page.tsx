import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { MobileAppDesktop } from "@/components/views/mobile-app-desktop";
import { MobileAppMobile } from "@/components/views/mobile-app-mobile";

export const metadata: Metadata = {
  title: "Mobile App",
  description: "Read, listen and learn isiNdebele anywhere with the Indlu Yokufundela mobile app.",
};

export default function MobileAppPage() {
  return <PageShell mobile={<MobileAppMobile />} desktop={<MobileAppDesktop />} />;
}
