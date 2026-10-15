import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { LessonsDesktop } from "@/components/views/lessons-desktop";
import { LessonsMobile } from "@/components/views/lessons-mobile";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Interactive isiNdebele lessons: grammar, proverbs (izaga), idioms and oral literature.",
};

export default function LessonsPage() {
  return <PageShell mobile={<LessonsMobile />} desktop={<LessonsDesktop />} />;
}
