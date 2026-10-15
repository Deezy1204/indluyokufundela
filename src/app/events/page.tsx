import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { EventsDesktop } from "@/components/views/events-desktop";
import { EventsMobile } from "@/components/views/events-mobile";

export const metadata: Metadata = {
  title: "Events & Festivals",
  description: 'The Ndebele Literature Festival "Cikoza Sizwe", workshops, book fairs and community storytelling across Matabeleland.',
};

export default function EventsPage() {
  return <PageShell mobile={<EventsMobile />} desktop={<EventsDesktop />} />;
}
