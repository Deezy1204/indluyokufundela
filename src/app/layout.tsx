import type { Metadata, Viewport } from "next";
import { Epilogue, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { NavigationLoader } from "@/components/layout/navigation-loader";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionObserver } from "@/components/motion/motion-observer";
import { SITE } from "@/lib/site";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${SITE.name} — Ndebele Literature & Culture`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["isiNdebele", "Ndebele literature", "Bulawayo", "Zimbabwe", "Cikoza Sizwe", "Skyz Metro FM", "folktales"],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.motto}`,
    description: SITE.description,
    locale: "en_ZW",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5e700",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${epilogue.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[70] -translate-y-24 rounded-full bg-primary px-5 py-3 font-label-lg text-label-lg text-on-primary shadow-md transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <NavigationLoader />
        <main id="main" className="flex w-full flex-1 flex-col pt-16 md:pt-20">
          {children}
        </main>
        <SiteFooter />
        <MotionObserver />
      </body>
    </html>
  );
}
