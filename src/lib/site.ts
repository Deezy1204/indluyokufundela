import type { IconName } from "@/components/icons/icon-data";

export const SITE = {
  name: "Indlu Yokufundela",
  motto: "Spheth'Imfundw'Emoyeni",
  description:
    "Reviving and celebrating isiNdebele literature and culture from Bulawayo, Zimbabwe — books, lessons, radio classes on Skyz Metro FM 100.3 and the Ndebele Literature Festival.",
  email: "nkululeko@indluyokufundela.org.zw",
  phone: "+263 (292) 884-210",
  address: "Bulawayo Cultural Quarter, Matabeleland, Zimbabwe",
  /** Replace with the official channel URL (e.g. https://www.youtube.com/@IndluYokufundela) once confirmed. */
  youtube: "https://www.youtube.com/results?search_query=Indlu+Yokufundela",
  // Contact details below come from the Stitch designs — confirm each before launch.
  editorEmail: "editor@indluyokufundela.org.zw",
  schoolsEmail: "schools@indluyokufundela.org.zw",
  whatsapp: "+263 77 219 4038",
  studioLine: "+263 292 260 094",
  studioSms: "+263 71 884 2100",
  streetAddress: "Bulawayo Cultural Quarter, Robert Mugabe Way & 8th Avenue, Bulawayo, Zimbabwe",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Robert+Mugabe+Way+%26+8th+Avenue+Bulawayo+Zimbabwe",
  /** Skyz Metro FM listen-live page — swap for the station's official stream URL. */
  radioUrl: "https://www.google.com/search?q=Skyz+Metro+FM+100.3+listen+live",
} as const;

/**
 * Mobile app launch copy from the Stitch designs. These dates have passed (designs were made
 * before Q3 2026) — update them here and every mention on the Mobile App page follows.
 */
export const APP_LAUNCH = {
  window: "Q3 2026",
  betaDate: "June 2026",
  waitlist: "3,400+",
} as const;

/** "+263 (292) 884-210" -> "tel:+263292884210" */
export function tel(number: string) {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

/** WhatsApp click-to-chat link for a number. */
export function whatsapp(number: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

export type NavItem = { href: string; label: string; icon: IconName; ndebele: string };

/** Primary navigation, in the order the Stitch header lists it. */
export const NAV: NavItem[] = [
  { href: "/", label: "Home", icon: "home", ndebele: "Ekhaya" },
  { href: "/about", label: "About", icon: "diversity_3", ndebele: "Mayelana Lathi" },
  { href: "/events", label: "Events", icon: "celebration", ndebele: "Imicimbi" },
  { href: "/books", label: "Books", icon: "menu_book", ndebele: "Amabhuku" },
  { href: "/watch", label: "Watch", icon: "smart_display", ndebele: "Bukela" },
  { href: "/lessons", label: "Lessons", icon: "school", ndebele: "Izifundo" },
  { href: "/mobile-app", label: "Mobile App", icon: "install_mobile", ndebele: "I-App" },
  { href: "/contact", label: "Contact", icon: "mail", ndebele: "Xhumana Lathi" },
];

/** Index of a pathname in NAV, used to pick a slide direction for page transitions. */
export function navIndex(pathname: string): number {
  const path = pathname.split(/[?#]/)[0];
  const i = NAV.findIndex((item) => item.href === path);
  return i === -1 ? NAV.length : i;
}
