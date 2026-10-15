import type { Metadata } from "next";
import { BagProvider } from "@/components/books/bag";
import { PageShell } from "@/components/layout/page-shell";
import { BooksDesktop } from "@/components/views/books-desktop";
import { BooksMobile } from "@/components/views/books-mobile";

export const metadata: Metadata = {
  title: "Books & Published Works",
  description: "Browse isiNdebele literature, student anthologies, folktale readers and bilingual books.",
};

export default function BooksPage() {
  return (
    <BagProvider>
      <PageShell mobile={<BooksMobile />} desktop={<BooksDesktop />} />
    </BagProvider>
  );
}
