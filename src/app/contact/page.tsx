import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ContactDesktop } from "@/components/views/contact-desktop";
import { ContactMobile } from "@/components/views/contact-mobile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Indlu Yokufundela in Bulawayo — partnerships, school registrations, volunteering and media.",
};

export default function ContactPage() {
  return <PageShell mobile={<ContactMobile />} desktop={<ContactDesktop />} />;
}
