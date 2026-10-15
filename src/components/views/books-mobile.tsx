import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { AddToBag } from "@/components/books/bag";
import { CatalogList, CatalogProvider, CatalogSearch, CategoryPills } from "@/components/books/catalog";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { Player, PlayerButton } from "@/components/ui/player";
import img044 from "@/assets/images/books/044.webp";

export function BooksMobile() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      <CatalogProvider>
      <div className="flex flex-col w-full">
        {/* SECTION 1: BREADCRUMB, SEARCH & CATEGORY CHIPS */}
        <section className="flex flex-col w-full px-4 pt-4 pb-6 bg-surface">
          {/* Breadcrumb */}
          <div className="enter-up flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-3" style={d(0)}>
            <Link className="group hover:text-primary transition-colors flex items-center gap-1" href="/">
              <Icon name="home" className="text-[16px]" />
              <span>
                Home
              </span>
            </Link>
            <span className="text-outline text-xs">
              ›
            </span>
            <span className="font-semibold text-primary">
              Books
            </span>
          </div>
          {/* Editorial Badge */}
          <div className="enter-up inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-2" style={d(80)}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-widest font-extrabold uppercase">
              Literary Catalog &amp; Bookstore
            </span>
          </div>
          {/* Main Title & Blurb */}
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight mb-2">
            <SplitWords text="Ndebele Literature & Published Works" delay={120} />
          </h1>
          <p className="enter-up font-body-md text-body-md text-on-surface-variant mb-5" style={d(360)}>
            Browse curated mother-tongue literature, student anthologies, and folktale readers preserving Zimbabwe&apos;s literary heritage.
          </p>
          {/* Search Bar */}
          <div className="enter-up" style={d(460)}>
            <CatalogSearch variant="mobile" target="m-catalog" />
          </div>
          {/* Category Pills (Horizontal Scrollable) */}
          <div className="enter-up" style={d(560)}>
            <CategoryPills variant="mobile" />
          </div>
        </section>
        {/* SECTION 2: BOOK DETAIL SPOTLIGHT (BOOK OF THE MONTH) */}
        <section className="w-full px-4 py-4 bg-surface-container-low" data-reveal="">
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col gap-4">
            {/* Spotlight Tag */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps font-extrabold tracking-wide uppercase">
                <Icon name="auto_awesome" idle hover="beat" className="text-[14px]" />
                Featured Spotlight • Book of the Month
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps uppercase">
                Curriculum Approved
              </span>
            </div>
            {/* Spotlight Book Visual presentation */}
            <div className="relative w-full rounded-xl overflow-hidden bg-primary/5 flex flex-col items-center p-4">
              <div className="w-48 h-64 rounded-lg overflow-hidden shadow-md relative group animate-float">
                <Image src={img044} alt={"Hardcover book titled Izaga Lezisho with royal blue and vivid yellow African geometric patterns inspired by Ndebele murals and Matabeleland artistic heritage on display against a warm editorial backdrop"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                <div className="absolute bottom-2 left-2 right-2 bg-on-surface/80 backdrop-blur-md px-2 py-1 rounded-md text-center">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-surface-bright uppercase">
                    Grade 8 – Tertiary Standard
                  </span>
                </div>
              </div>
              {/* Audio Excerpt Pill */}
              <Player duration={225} className="mt-4 w-full max-w-xs">
                <PlayerButton
                  label="excerpt of Izaga Lezisho"
                  playIcon="headphones"
                  iconClassName="text-secondary text-[20px]"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-high text-primary hover:bg-primary-fixed aria-pressed:bg-primary-fixed transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap font-label-md text-label-md"
                  idleText={
                    <>
                      <span>Listen to Excerpt</span>
                      <span className="text-outline text-xs">•</span>
                      <span className="font-semibold text-secondary">03:45</span>
                    </>
                  }
                  playingText={
                    <>
                      <span>Playing Preview…</span>
                      <span className="text-outline text-xs">•</span>
                      <span className="font-semibold text-secondary">03:45</span>
                    </>
                  }
                />
              </Player>
            </div>
            {/* Book Metadata & Info */}
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary">
                Izaga Lezisho: The Living Treasury of Ndebele Wisdom
              </h2>
              <p className="font-label-lg text-label-lg text-on-surface-variant font-medium">
                By Dr. Barbara C. Makhalisa &amp; Sithandazile Dube
              </p>
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 my-1">
                <div className="flex text-secondary-fixed-dim">
                  <Icon name="star" filled className="text-[18px]" />
                  <Icon name="star" filled className="text-[18px]" />
                  <Icon name="star" filled className="text-[18px]" />
                  <Icon name="star" filled className="text-[18px]" />
                  <Icon name="star" filled className="text-[18px]" />
                </div>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  5.0
                </span>
                <span className="font-body-sm text-body-sm text-outline">
                  (48 reviews)
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                An authoritative modern compilation of over 400 foundational Ndebele proverbs, idioms, and oral aphorisms with cultural context, classroom study guides, and English commentary.
              </p>
              {/* Price Tag & Actions */}
              <div className="flex items-baseline gap-2 pt-2 pb-1">
                <span className="font-headline-md-mobile text-headline-md-mobile text-primary font-black" data-count="">
                  $14.50
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  USD (Print Edition)
                </span>
                <span className="ml-auto font-label-cultural-caps text-label-cultural-caps text-tertiary-container font-extrabold uppercase">
                  In Stock (Bulawayo Press)
                </span>
              </div>
              {/* Buttons: Strictly Horizontal Flex Rows with 44px+ height */}
              <div className="flex flex-col gap-2.5 pt-2">
                <AddToBag id="izaga-lezisho" className="w-full h-12 rounded-full bg-primary-container text-on-primary font-title-editorial text-title-editorial font-bold shadow-md hover:bg-primary transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]">
                  <span>
                    Buy Now
                  </span>
                  <Icon name="arrow_forward" className="text-[20px]" />
                </AddToBag>
                <Link href="/contact?topic=sample&book=izaga-lezisho" className="group w-full h-12 rounded-full bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap">
                  <Icon name="mail" className="text-[18px]" />
                  <span>
                    Request a Sample Chapter
                  </span>
                </Link>
              </div>
              {/* Quick Related Books (Horizontal Scroll Inside Card) */}
              <div className="mt-4 pt-4 border-t border-surface-container-high/60">
                <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant uppercase font-extrabold mb-2 block">
                  Companion Study Texts
                </span>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  <div className="shrink-0 w-44 p-2 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
                    <span className="font-title-editorial text-body-sm font-bold text-primary truncate">
                      Imilayezo Yabazali
                    </span>
                    <span className="font-label-md text-xs text-outline">
                      $11.00 USD
                    </span>
                    <AddToBag id="imilayezo-yabazali" addedLabel="Added" className="mt-1 w-full h-8 rounded-full bg-surface-container-lowest text-primary text-xs font-semibold flex flex-row items-center justify-center gap-1 whitespace-nowrap active:scale-95 transition-transform">
                      <Icon name="add" className="text-[14px]" />
                      <span>
                        Add to Bag
                      </span>
                    </AddToBag>
                  </div>
                  <div className="shrink-0 w-44 p-2 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
                    <span className="font-title-editorial text-body-sm font-bold text-primary truncate">
                      Echoes of Mhlahlandlela
                    </span>
                    <span className="font-label-md text-xs text-outline">
                      $13.50 USD
                    </span>
                    <AddToBag id="echoes-of-mhlahlandlela" addedLabel="Added" className="mt-1 w-full h-8 rounded-full bg-surface-container-lowest text-primary text-xs font-semibold flex flex-row items-center justify-center gap-1 whitespace-nowrap active:scale-95 transition-transform">
                      <Icon name="add" className="text-[14px]" />
                      <span>
                        Add to Bag
                      </span>
                    </AddToBag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3: PUBLISHED BOOKS & ANTHOLOGIES (CATALOG LIST) */}
        <section className="flex flex-col w-full px-4 py-6 bg-surface scroll-mt-20" id="m-catalog" data-reveal="">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary tracking-tight">
                Published Books &amp; Anthologies
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Available for shipping and digital delivery.
              </p>
            </div>
          </div>
          {/* Filterable catalogue */}
          <CatalogList />
        </section>
        {/* SECTION 4: COMING SOON (UPCOMING TITLES & PRE-ORDERS) */}
        <section className="flex flex-col w-full px-4 py-6 bg-surface-container-low" data-reveal="">
          <div className="mb-4">
            <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-extrabold uppercase tracking-wider block mb-1">
              Advance Announcements
            </span>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary tracking-tight">
              Coming Soon (2026)
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Reserve advance print copies before festival release.
            </p>
          </div>
          {/* Upcoming Book Cards */}
          <div className="flex flex-col gap-3.5" data-stagger="">
            {/* Upcoming 1 */}
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 font-label-cultural-caps text-[10px] text-primary uppercase font-extrabold">
                  <Icon name="calendar_month" className="text-[14px]" />
                  Releasing June 2026
                </span>
                <span className="font-label-md text-xs font-bold text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full">
                  Pre-order Price: $15.00
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-16 h-20 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="landscape" idle hover="lift" className="text-primary text-[28px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-primary font-bold truncate">
                    Voices of Matobo
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Eco-poetry and essays recorded on granite summits.
                  </p>
                </div>
              </div>
              <AddToBag id="voices-of-matobo" addedLabel="Pre-order added" className="w-full h-11 rounded-full bg-secondary-fixed text-on-secondary-fixed font-title-editorial text-body-md font-bold shadow-sm hover:bg-secondary-fixed-dim transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap active:scale-[0.99]">
                <span>
                  Pre-order Now
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </AddToBag>
            </div>
            {/* Upcoming 2 */}
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 font-label-cultural-caps text-[10px] text-primary uppercase font-extrabold">
                  <Icon name="calendar_month" className="text-[14px]" />
                  Releasing August 2026
                </span>
                <span className="font-label-md text-xs font-bold text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full">
                  Pre-order Price: $9.50
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-16 h-20 rounded-lg bg-secondary-fixed/20 flex items-center justify-center shrink-0">
                  <Icon name="pets" idle hover="beat" className="text-secondary text-[28px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-primary font-bold truncate">
                    The Adventures of Hare &amp; Baboon
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Full-color illustrated comic reader for primary schools.
                  </p>
                </div>
              </div>
              <AddToBag id="hare-and-baboon" addedLabel="Pre-order added" className="w-full h-11 rounded-full bg-secondary-fixed text-on-secondary-fixed font-title-editorial text-body-md font-bold shadow-sm hover:bg-secondary-fixed-dim transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap active:scale-[0.99]">
                <span>
                  Pre-order Now
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </AddToBag>
            </div>
            {/* Upcoming 3 */}
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 font-label-cultural-caps text-[10px] text-primary uppercase font-extrabold">
                  <Icon name="calendar_month" className="text-[14px]" />
                  Launching Sept 2026
                </span>
                <span className="font-label-md text-xs font-bold text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full">
                  Pre-order Price: $14.00
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-16 h-20 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center shrink-0">
                  <Icon name="festival" idle className="text-tertiary-container text-[28px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-primary font-bold truncate">
                    Cikoza Sizwe: 2026 Festival Anthology
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Selected works from the upcoming Ndebele Literature Festival.
                  </p>
                </div>
              </div>
              <AddToBag id="cikoza-sizwe-anthology" addedLabel="Pre-order added" className="w-full h-11 rounded-full bg-secondary-fixed text-on-secondary-fixed font-title-editorial text-body-md font-bold shadow-sm hover:bg-secondary-fixed-dim transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap active:scale-[0.99]">
                <span>
                  Pre-order Now
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </AddToBag>
            </div>
          </div>
        </section>
        {/* SECTION 5: SCHOOL BULK ORDER BANNER */}
        <section className="w-full px-4 py-6 bg-surface" data-reveal="">
          <div className="bg-secondary-fixed rounded-2xl p-5 text-on-secondary-fixed shadow-md flex flex-col gap-3 relative overflow-hidden">
            {/* Decorative geometric SVG accent in background */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none animate-spin-slow">
              <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                <polygon points="50,0 100,50 50,100 0,50" />
                <polygon points="50,20 80,50 50,80 20,50" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-on-secondary-fixed/10 flex items-center justify-center">
                <Icon name="school" className="text-[20px]" />
              </div>
              <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider font-extrabold">
                Institutional Support
              </span>
            </div>
            <h2 className="font-headline-md-mobile text-headline-md-mobile tracking-tight">
              Order for Your School or Library
            </h2>
            <p className="font-body-md text-body-md leading-snug">
              Classroom sets with special educational discounts, matched teacher guide packs, and direct freight shipping across Zimbabwe and Southern Africa.
            </p>
            {/* Full-Width Horizontal Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/contact?topic=bulk" className="group w-full h-12 rounded-full bg-primary-container text-on-primary font-title-editorial text-title-editorial font-bold shadow-md hover:bg-primary transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]">
                <span>
                  Request School Catalog
                </span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </Link>
              <Link href="/contact?topic=schools" className="group w-full h-12 rounded-full bg-on-secondary-fixed/10 text-on-secondary-fixed font-title-editorial text-body-md font-bold hover:bg-on-secondary-fixed/20 transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap">
                <Icon name="mail" className="text-[18px]" />
                <span>
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      </CatalogProvider>
      <aside className="w-full bg-secondary-fixed text-on-secondary-fixed px-margin py-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-row items-center gap-space-xs">
            <Icon name="menu_book" className="text-on-secondary-fixed text-[20px]" />
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider font-extrabold">
              Empowering Literacy
            </span>
          </div>
          <p className="font-body-sm text-body-sm font-medium">
            Reviving isiNdebele literature, cultural folklore, and modern educational excellence.
          </p>
        </div>
      </aside>
    </div>
  );
}
