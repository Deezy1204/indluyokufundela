import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { Accordion } from "@/components/ui/accordion";
import { BackToTop } from "@/components/ui/back-to-top";
import { Link } from "@/components/ui/link";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { SITE } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/about", label: "About Organization" },
  { href: "/events", label: "Cultural Calendar & Events" },
  { href: "/books", label: "isiNdebele Literary Archives" },
  { href: "/lessons", label: "Language & Oral Lessons" },
  { href: "/watch", label: "Watch & Listen" },
  { href: "/mobile-app", label: "Interactive Reader App" },
];

const SOCIAL: { label: string; icon: IconName; href?: string }[] = [
  { label: "Facebook", icon: "share" },
  { label: "YouTube", icon: "smart_display", href: SITE.youtube },
  { label: "Instagram", icon: "photo_camera" },
  { label: "X (Twitter)", icon: "tag" },
];

const GROUPS: { title: string; icon: IconName; links: { href: string; label: string }[] }[] = [
  {
    title: "Izehlakalo (Events & Programs)",
    icon: "event",
    links: [
      { href: "/events", label: "Imibukiso Yezincwadi (Book Fairs)" },
      { href: "/events", label: "Ama-Workshop Okubhala (Writing Workshops)" },
      { href: "/events", label: "Inganekwane Zomphakathi (Folk Story Sessions)" },
      { href: "/events", label: "Umgubho Wesiko (Cultural Festivals)" },
    ],
  },
  {
    title: "Izinsiza (Literary Resources)",
    icon: "menu_book",
    links: [
      { href: "/books", label: "Umgcinimafa Wezincwadi (Digital Archive)" },
      { href: "/watch", label: "Umsindo Wamagugu (Oral Audio Tales)" },
      { href: "/lessons", label: "Izaga Lezisho (Proverbs & Idioms)" },
    ],
  },
  {
    title: "Umphakathi (Community & Contact)",
    icon: "diversity_3",
    links: [
      { href: "/about", label: "Mayelana Lendlu Yokufundela" },
      { href: "/contact?topic=volunteer", label: "Bambisana Lathi (Host an Event / Volunteer)" },
      { href: "/contact", label: "Xhumana Lathi (Contact Us)" },
    ],
  },
];

function Socials({ size }: { size: "sm" | "lg" }) {
  // Only YouTube has a destination so far; the rest stay inert until official URLs are added.
  const className =
    size === "sm"
      ? "group flex h-9 w-9 items-center justify-center rounded-full bg-inverse-on-surface/10 text-surface-bright transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-fixed hover:text-on-secondary-fixed"
      : "group flex h-11 w-11 items-center justify-center rounded-full bg-surface-container/10 text-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-container hover:text-on-secondary-fixed";
  return (
    <div className="flex items-center gap-3">
      {SOCIAL.map((s) => {
        const icon = (
          <>
            <Icon name={s.icon} className={size === "sm" ? "text-[18px]" : "text-[20px]"} />
            <span className="sr-only">{s.label}</span>
          </>
        );
        return s.href ? (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className={className}>
            {icon}
          </a>
        ) : (
          <span key={s.label} title={`${s.label} — coming soon`} className={className}>
            {icon}
          </span>
        );
      })}
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-ink text-inverse-on-surface">
      <div className="ndebele-band h-1.5 w-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"
      />

      {/* Desktop / tablet */}
      <div className="relative mx-auto hidden max-w-7xl px-6 pt-16 pb-12 md:block lg:px-12">
        <div className="grid grid-cols-2 gap-10 pb-12 lg:grid-cols-4" data-stagger>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="" className="h-11 w-11 rounded-full" sizes="48px" />
              <span className="font-title-editorial text-title-editorial text-surface-bright">{SITE.name}</span>
            </div>
            <p className="font-body-sm text-body-sm leading-relaxed text-surface-dim">
              An autonomous cultural, literary and educational sanctuary based in Bulawayo, Zimbabwe. Dedicated to
              preserving isiNdebele folklore, expanding bilingual literacy, and inspiring communal storytelling.
            </p>
            <div className="pt-2">
              <Socials size="sm" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-surface-bright">Quick Navigation</h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-surface-dim transition-colors hover:text-secondary-fixed"
                  >
                    <span className="h-px w-0 bg-secondary-fixed transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-surface-bright">Contact Us</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-surface-dim">
              <li className="flex items-start gap-2.5">
                <Icon name="location_on" className="mt-0.5 shrink-0 text-[18px] text-secondary-fixed" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="group flex items-center gap-2.5 transition-colors hover:text-secondary-fixed">
                  <Icon name="mail" className="shrink-0 text-[18px] text-secondary-fixed" />
                  <span>{SITE.email.split("@")[0]}@<wbr />{SITE.email.split("@")[1]}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="group flex items-center gap-2.5 transition-colors hover:text-secondary-fixed">
                  <Icon name="call" className="shrink-0 text-[18px] text-secondary-fixed" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-surface-bright">Imbizo Newsletter</h4>
            <p className="font-body-sm text-body-sm leading-relaxed text-surface-dim">
              Receive quarterly literary publications, oral history updates, and educational workshop invites.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-inverse-on-surface/10 pt-8 font-body-sm text-body-sm text-surface-dim lg:flex-row">
          <p>
            © {year} {SITE.name}. Bulawayo, Zimbabwe. {SITE.motto}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-label-md text-label-md">
            <span>Privacy Policy</span>
            <span>Terms of Heritage Use</span>
            <span>Indigenous Archival Code</span>
            <BackToTop />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto flex max-w-xl flex-col gap-space-lg px-margin pt-space-xl pb-safe md:hidden">
        <div className="flex items-center gap-space-sm">
          <Image src={logo} alt="" className="h-11 w-11 rounded-full" sizes="48px" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-surface-container-lowest">{SITE.name}</span>
            <span className="font-label-cultural-caps text-label-cultural-caps font-extrabold uppercase tracking-widest text-secondary-container">
              {SITE.motto}
            </span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm leading-relaxed text-outline-variant">
          Preserving, celebrating, and revitalizing isiNdebele literature, folklore, and intellectual heritage through
          community-grounded digital libraries and oral archives.
        </p>
        <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-container-high">
          <div className="flex items-center gap-2">
            <Icon name="location_on" className="text-[20px] text-secondary-container" />
            <span>Bulawayo Cultural Corridor, Matabeleland, Zimbabwe</span>
          </div>
          <a href={`mailto:${SITE.email}`} className="group flex items-center gap-2">
            <Icon name="mail" className="text-[20px] text-secondary-container" />
            <span>{SITE.email.split("@")[0]}@<wbr />{SITE.email.split("@")[1]}</span>
          </a>
        </div>

        <div className="flex flex-col divide-y divide-inverse-on-surface/10 rounded-2xl bg-inverse-on-surface/5 px-4">
          {GROUPS.map((g) => (
            <Accordion
              key={g.title}
              title={g.title}
              titleClassName="font-label-lg text-label-lg text-surface-bright"
              icon={g.icon}
              buttonClassName="py-4 text-surface-bright [&_.icon]:text-secondary-container"
              panelClassName="flex flex-col gap-2.5 pb-4 pl-8"
            >
              {g.links.map((l) => (
                <Link key={l.label} href={l.href} className="font-body-sm text-[13px] text-outline-variant transition-colors hover:text-secondary-container">
                  {l.label}
                </Link>
              ))}
            </Accordion>
          ))}
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-cultural-caps text-label-cultural-caps uppercase text-surface-container-highest">
            Our Newsletter
          </span>
          <NewsletterForm layout="inline" placeholder="Enter your email address..." />
        </div>
        <Socials size="lg" />
        <div className="flex flex-col gap-1 border-t border-outline/20 pt-space-md pb-space-lg text-center font-body-sm text-body-sm text-outline-variant">
          <p>
            © {year} {SITE.name}. Wonke amalungelo agodliwe.
          </p>
          <p className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-widest text-secondary-container">
            &apos;{SITE.motto}&apos;
          </p>
        </div>
      </div>
    </footer>
  );
}
