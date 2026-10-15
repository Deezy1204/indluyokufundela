import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { AddToBag, QuantityBuy } from "@/components/books/bag";
import { CatalogGrid, CatalogProvider, CatalogSearch, CategoryPills, FormatToggle, ResultCount, SortSelect } from "@/components/books/catalog";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Player, PlayerButton } from "@/components/ui/player";
import img034 from "@/assets/images/books/034.webp";
import img041 from "@/assets/images/books/041.webp";
import img042 from "@/assets/images/books/042.webp";
import img043 from "@/assets/images/books/043.webp";

export function BooksDesktop() {
  return (
    <div className="w-full bg-background">
      <CatalogProvider>
      <div className="flex flex-col w-full">
        {/* Top Decorative Ndebele Geometric Strip */}
        <div className="w-full h-2.5 bg-gradient-to-r from-primary via-secondary-fixed via-tertiary-container to-primary flex items-center justify-center overflow-hidden">
          <div className="w-full h-full opacity-30 flex gap-2" data-stagger="">
            <div className="flex-1 bg-surface-container-lowest skew-x-12" />
            <div className="flex-1 bg-secondary-fixed -skew-x-12" />
            <div className="flex-1 bg-primary skew-x-12" />
            <div className="flex-1 bg-tertiary-fixed -skew-x-12" />
            <div className="flex-1 bg-surface-container-lowest skew-x-12" />
          </div>
        </div>
        {/* SECTION 1: BREADCRUMBS, HERO INTRO & SEARCH/FILTER CONTROLS */}
        <section className="w-full bg-surface-container-lowest py-space-xl">
          <div className="max-w-[1280px] mx-auto px-margin-desktop flex flex-col gap-space-lg">
            {/* Breadcrumb & Tagline */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <nav className="enter-up flex flex-row items-center gap-2 font-label-md text-label-md text-on-surface-variant" style={d(0)}>
                <Link href="/" className="hover:text-primary transition-colors flex flex-row items-center gap-1">
                  <Icon name="home" className="text-[16px]" />
                  <span>
                    Home
                  </span>
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-bold">
                  Books
                </span>
              </nav>
              <div className="enter-pop flex flex-row items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-cultural-caps text-label-cultural-caps tracking-widest uppercase" style={d(200)}>
                <Icon name="menu_book" className="text-[15px]" />
                <span>
                  Literary Catalog &amp; Bookstore
                </span>
              </div>
            </div>
            {/* Hero Heading Block */}
            <div className="flex flex-col gap-space-xs max-w-4xl">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                <SplitWords text="Ndebele Literature, Folktale Anthologies & Contemporary Fiction" delay={100} />
              </h1>
              <p className="enter-up font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed" style={d(400)}>
                Discover our curated repository of published Zimbabwean mother-tongue literature, scholastic readers, poetry anthologies, and award-winning fiction from Matabeleland writers.
              </p>
            </div>
            {/* Search Input Container */}
            <div className="enter-up" style={d(500)}>
              <CatalogSearch variant="desktop" target="catalog" />
            </div>
            {/* Secondary Controls & Filter Row */}
            <div className="enter-up flex flex-col gap-space-sm pt-2" style={d(600)}>
              {/* Category Filter Pills */}
              <CategoryPills variant="desktop" />
              {/* Format & Sort Dropdowns */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">
                    Format:
                  </span>
                  <FormatToggle />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Sort by:
                  </span>
                  <SortSelect />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 2: BOOK DETAIL SPOTLIGHT (BOOK OF THE MONTH) */}
        <section className="w-full py-space-2xl bg-surface-container-low" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin-desktop flex flex-col gap-space-lg">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping" />
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-widest uppercase font-extrabold">
                  Featured Literary Spotlight • Book of the Month
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Selected by Indlu Yokufundela Board
              </span>
            </div>
            {/* Large Spotlight Showcase Container */}
            <div className="w-full bg-surface-container-lowest rounded-3xl p-space-xl shadow-md relative overflow-hidden">
              {/* Subtle Geometric Corner Accent SVG */}
              <div className="absolute -top-12 -right-12 w-48 h-48 opacity-10 pointer-events-none animate-spin-slow">
                <svg className="text-primary w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                  <polygon points="0,0 100,0 100,100" />
                  <polygon fill="#FFF000" points="20,20 80,20 80,80" />
                  <polygon fill="#00A651" points="40,40 60,40 60,60" />
                </svg>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                {/* Left Column: Realistic 3D Book Display */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-space-md">
                  <div className="relative w-full max-w-[340px] group [perspective:1200px]">
                    {/* Book Container with 3D drop shadow */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:-translate-y-2 group-hover:[transform:rotateY(-12deg)_rotateX(4deg)]">
                      <Image src={img034} alt={"Editorial book cover featuring rich royal blue and warm yellow geometric African motifs with bold typography reading Izaga Lezisho The Living Treasury of Ndebele Wisdom with elegant graphic illustrations of Matabeleland landscape and traditional beadwork"} className="w-full h-[460px] object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      {/* Hardcover Spine Ridge Illusion */}
                      <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6">
                        <span className="font-label-cultural-caps text-label-cultural-caps text-secondary-fixed uppercase tracking-wider mb-1">
                          Authentic Treasury
                        </span>
                        <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold leading-tight">
                          Izaga Lezisho
                        </p>
                        <p className="font-body-sm text-body-sm text-surface-container-highest">
                          Dr. B. C. Makhalisa &amp; S. Dube
                        </p>
                      </div>
                    </div>
                    {/* Top Left Badge */}
                    <div className="absolute -top-3 -left-3 bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps px-3 py-1.5 rounded-full font-extrabold shadow-sm flex flex-row items-center gap-1.5 animate-float">
                      <Icon name="verified" idle className="text-[14px]" />
                      <span>
                        National Curriculum Approved
                      </span>
                    </div>
                  </div>
                  {/* Excerpt Audio Trigger */}
                  <Player duration={225} className="mt-space-md">
                    <PlayerButton
                      label="audio excerpt of Izaga Lezisho"
                      playIcon="play_circle"
                      iconClassName="text-[18px] text-secondary"
                      className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container text-primary hover:bg-surface-container-high transition-all font-label-lg text-label-lg font-bold aria-pressed:bg-primary-fixed"
                      idleText="Listen to Audio Excerpt (03:45)"
                      playingText="Playing excerpt… (03:45)"
                    />
                  </Player>
                </div>
                {/* Right Column: Metadata & Purchase Box */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps font-bold">
                        Hardcover &amp; Dual-Language
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        ISBN: 978-0-7974-9821-4
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                      Izaga Lezisho: The Living Treasury of Ndebele Wisdom
                    </h2>
                    <p className="font-title-editorial text-title-editorial text-primary font-bold">
                      By Dr. Barbara C. Makhalisa &amp; Sithandazile Dube{" "}
                      <span className="text-on-surface-variant font-normal">
                        • Published by Indlu Yokufundela Press (2025)
                      </span>
                    </p>
                  </div>
                  {/* Reviews and Rating Bar */}
                  <div className="flex flex-wrap items-center gap-4 py-1">
                    <div className="flex flex-row items-center gap-1 text-secondary-fixed-dim">
                      <Icon name="star" filled className="text-[18px]" />
                      <Icon name="star" filled className="text-[18px]" />
                      <Icon name="star" filled className="text-[18px]" />
                      <Icon name="star" filled className="text-[18px]" />
                      <Icon name="star" filled className="text-[18px]" />
                      <span className="font-label-lg text-label-lg text-on-surface font-bold ml-1.5">
                        5.0
                      </span>
                    </div>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      48 verified reviews
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-md text-label-md text-on-surface font-semibold">
                      Grade 8–12 Recommended Reading
                    </span>
                  </div>
                  {/* Detailed Synopsis */}
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    An authoritative modern compilation of over 400 foundational Ndebele proverbs, idioms, and oral aphorisms. Each entry includes cultural etiology, contextual social application, idiomatic English translation, and classroom discussion guides. Compiled across 3 years of elder field interviews in Matabeleland North and South.
                  </p>
                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl bg-surface-container-low font-body-sm text-body-sm" data-stagger="">
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant font-label-md text-label-md">
                        Format
                      </span>
                      <span className="font-semibold text-on-surface">
                        Hardcover &amp; eBook
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant font-label-md text-label-md">
                        Language
                      </span>
                      <span className="font-semibold text-on-surface">
                        isiNdebele / English
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant font-label-md text-label-md">
                        Publication
                      </span>
                      <span className="font-semibold text-on-surface">
                        October 2024
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-on-surface-variant font-label-md text-label-md">
                        Delivery
                      </span>
                      <span className="font-semibold text-on-surface">
                        Nationwide Courier
                      </span>
                    </div>
                  </div>
                  {/* Buy Panel Controls */}
                  <div className="p-4 rounded-2xl bg-surface-container flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant uppercase font-bold">
                        Standard Price
                      </span>
                      <div className="flex flex-row items-baseline gap-2">
                        <span className="font-headline-md text-headline-md text-primary font-black" data-count="">
                          $14.50 USD
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          (or ZWG equivalent)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Quantity Counter + Buy */}
                      <QuantityBuy
                        id="izaga-lezisho"
                        buttonClassName="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-7 py-3 rounded-full bg-primary text-on-primary font-title-editorial text-title-editorial font-bold shadow-md hover:bg-primary-container active:scale-95 transition-all"
                      >
                        <Icon name="shopping_bag" className="text-[18px]" />
                        <span>
                          Buy Now →
                        </span>
                      </QuantityBuy>
                      {/* PDF Sample Button */}
                      <Link href="/contact?topic=sample&book=izaga-lezisho" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all font-title-editorial text-title-editorial font-semibold">
                        <Icon name="description" className="text-[18px] text-outline" />
                        <span>
                          Request Sample Chapter
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* Micro Cards: Readers Also Explored */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant uppercase font-bold tracking-wider">
                      Readers Also Explored:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3" data-stagger="">
                      <AddToBag id="imilayezo-yabazali" className="lift p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left flex flex-row items-center gap-3 min-h-[80px]">
                        <div className="w-10 h-14 rounded-md bg-primary-fixed flex items-center justify-center shrink-0">
                          <Icon name="book" className="text-primary text-[20px]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-editorial text-title-editorial text-on-surface text-[14px] truncate font-bold">
                            Imilayezo Yabazali
                          </span>
                          <span className="font-label-md text-label-md text-primary font-bold">
                            $11.00 USD · Add
                          </span>
                        </div>
                      </AddToBag>
                      <AddToBag id="echoes-of-mhlahlandlela" className="lift p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left flex flex-row items-center gap-3 min-h-[80px]">
                        <div className="w-10 h-14 rounded-md bg-secondary-fixed flex items-center justify-center shrink-0">
                          <Icon name="history_edu" className="text-on-secondary-fixed text-[20px]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-editorial text-title-editorial text-on-surface text-[14px] truncate font-bold">
                            Echoes of Mhlahlandlela
                          </span>
                          <span className="font-label-md text-label-md text-primary font-bold">
                            $13.50 USD · Add
                          </span>
                        </div>
                      </AddToBag>
                      <AddToBag id="childrens-folktales" className="lift p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left flex flex-row items-center gap-3 min-h-[80px]">
                        <div className="w-10 h-14 rounded-md bg-tertiary-fixed flex items-center justify-center shrink-0">
                          <Icon name="auto_stories" className="text-tertiary text-[20px]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-editorial text-title-editorial text-on-surface text-[14px] truncate font-bold">
                            Children&apos;s Folktales
                          </span>
                          <span className="font-label-md text-label-md text-primary font-bold">
                            $9.00 USD · Add
                          </span>
                        </div>
                      </AddToBag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3: PUBLISHED BOOKS & ANTHOLOGIES (6 CARDS GRID) */}
        <section className="w-full py-space-2xl bg-surface-bright scroll-mt-24" id="catalog" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin-desktop flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-2xl">
                <div className="flex flex-row items-center gap-2">
                  <Icon name="library_books" className="text-primary text-[20px]" />
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-widest uppercase font-bold">
                    Comprehensive Archival Press
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                  Published Books &amp; Anthologies
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  In-stock literature available for individual purchase and classroom bulk orders.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ResultCount className="font-label-md text-label-md text-on-surface-variant font-medium" />
              </div>
            </div>
            {/* Filterable catalogue grid */}
            <CatalogGrid />
          </div>
        </section>
        {/* SECTION 4: COMING SOON / FORTHCOMING TITLES */}
        <section className="w-full py-space-2xl bg-surface-container-low" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin-desktop flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-2xl">
                <div className="flex flex-row items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps font-bold">
                    2026 Releases
                  </span>
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-widest uppercase font-bold">
                    Advance Literary Catalog
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                  Coming Soon &amp; Forthcoming Titles
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Reserve advance print copies before the 5th Biennial Cikoza Sizwe Festival launch.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 text-primary font-title-editorial text-title-editorial font-bold">
                <span>
                  Early Bird Pricing Guaranteed
                </span>
                <Icon name="verified_user" idle hover="beat" className="text-[18px]" />
              </div>
            </div>
            {/* 3 Forthcoming Title Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop" data-stagger="">
              {/* Upcoming Card 1 */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-cultural-caps text-label-cultural-caps font-bold">
                      Releasing June 2026 • Hardcover
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Vol. 1
                    </span>
                  </div>
                  {/* Preview Cover Artwork */}
                  <div className="zoom-media relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
                    <Image src={img041} alt={"Dramatic book mockup artwork depicting Matobo hills balancing granite rocks at sunrise with gold morning mists titled Voices of Matobo Sacred Hills and Unwritten Tales"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-surface-container-lowest font-label-cultural-caps text-label-cultural-caps px-3 py-1 rounded-full">
                      Printing First Edition (500 copies)
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      Voices of Matobo: Sacred Hills and Unwritten Tales
                    </h3>
                    <p className="font-label-lg text-label-lg text-primary font-semibold">
                      Gugu Ndlovu &amp; Mhlahlandlela Heritage Circle
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      An unprecedented oral documentary uncovering historical praise names, battle ballads, and ecological folklore of the Matobo granite hills.
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-4 flex flex-col gap-3">
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="font-headline-sm text-headline-sm text-primary font-black">
                      $15.00 USD
                    </span>
                    <span className="line-through text-outline font-label-lg text-label-lg">
                      $18.00 USD
                    </span>
                    <span className="font-label-md text-label-md text-secondary font-bold">
                      (Early Bird Special)
                    </span>
                  </div>
                  <AddToBag id="voices-of-matobo" addedLabel="Pre-order added" className="w-full flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-primary text-on-primary font-title-editorial text-title-editorial font-bold shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all">
                    <Icon name="alarm" className="text-[18px]" />
                    <span>
                      Pre-order Now →
                    </span>
                  </AddToBag>
                </div>
              </div>
              {/* Upcoming Card 2 */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-fixed/20 rounded-bl-full pointer-events-none" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps font-bold">
                      Releasing August 2026 • Bilingual Illustrated
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Children
                    </span>
                  </div>
                  <div className="zoom-media relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
                    <Image src={img042} alt={"Vibrant hand-drawn African folklore book cover featuring clever hare and playful baboon in baobab savannah with lush Ndebele bead patterns titled UNogwaja LoDlovu"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-surface-container-lowest font-label-cultural-caps text-label-cultural-caps px-3 py-1 rounded-full">
                      Pre-press Review Stage
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      The Adventures of Hare &amp; Baboon (UNogwaja LoDlovu)
                    </h3>
                    <p className="font-label-lg text-label-lg text-primary font-semibold">
                      Senzeni Mpofu • Illustrated by Bulawayo Arts Collective
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      Richly illustrated children&apos;s fable series revitalizing timeless trickster tales with full-color authentic Matabeleland illustrations.
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-4 flex flex-col gap-3">
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="font-headline-sm text-headline-sm text-primary font-black">
                      $9.50 USD
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Standard Pre-order
                    </span>
                  </div>
                  <AddToBag id="hare-and-baboon" addedLabel="Pre-order added" className="w-full flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-primary text-on-primary font-title-editorial text-title-editorial font-bold shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all">
                    <Icon name="alarm" className="text-[18px]" />
                    <span>
                      Pre-order Now →
                    </span>
                  </AddToBag>
                </div>
              </div>
              {/* Upcoming Card 3 */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed/20 rounded-bl-full pointer-events-none" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps font-bold">
                      Festival Launch: Sept 24, 2026
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Keepsake
                    </span>
                  </div>
                  <div className="zoom-media relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
                    <Image src={img043} alt={"Festival commemorative anthology book cover with the iconic Cikoza Sizwe festival sunburst shield emblem, deep royal blue background, bold gold lettering, and celebration motifs"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-surface-container-lowest font-label-cultural-caps text-label-cultural-caps px-3 py-1 rounded-full">
                      Official 2026 Festival Keepsake
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      Cikoza Sizwe: The Fifth Biennial Commemorative Anthology
                    </h3>
                    <p className="font-label-lg text-label-lg text-primary font-semibold">
                      Matabeleland Writers Union &amp; Indlu Yokufundela
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      The landmark 2026 festival flagship volume compiling new essays, short fiction, and keynote addresses from Zimbabwe&apos;s leading voices.
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-4 flex flex-col gap-3">
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="font-headline-sm text-headline-sm text-primary font-black">
                      $14.00 USD
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Festival Advance Ticket Bundle
                    </span>
                  </div>
                  <AddToBag id="cikoza-sizwe-anthology" addedLabel="Pre-order added" className="w-full flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-primary text-on-primary font-title-editorial text-title-editorial font-bold shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all">
                    <Icon name="alarm" className="text-[18px]" />
                    <span>
                      Pre-order Now →
                    </span>
                  </AddToBag>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 5: BULK SCHOOL ORDER CALLOUT BANNER */}
        <section className="w-full py-space-xl bg-surface-container-lowest" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin-desktop">
            <div className="w-full rounded-3xl bg-secondary-fixed p-space-xl shadow-md relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-lg">
              {/* Background Pattern Mask */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end">
                <svg className="text-on-secondary-fixed animate-spin-slow" fill="currentColor" height="400" viewBox="0 0 100 100" width="400">
                  <circle cx="50" cy="50" r="40" />
                  <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="#2E3192" />
                </svg>
              </div>
              {/* Left Message */}
              <div className="flex flex-col gap-2 max-w-2xl relative z-10 text-on-secondary-fixed">
                <div className="flex flex-row items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-label-cultural-caps text-label-cultural-caps text-on-secondary-fixed font-black tracking-widest uppercase">
                    Curriculum &amp; Institutional Support
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-secondary-fixed font-black tracking-tight">
                  Are you a Teacher, School Principal, or Community Library?
                </h2>
                <p className="font-body-md text-body-md text-on-secondary-fixed/90 leading-relaxed font-medium">
                  Order classroom sets (25+ copies) with special Ministry curriculum subsidies and complimentary teacher study guides delivered directly to your school address.
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
                <Link href="/contact?topic=bulk" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap px-7 py-4 rounded-full bg-primary text-on-primary font-title-editorial text-title-editorial font-bold shadow-md hover:bg-primary-container hover:-translate-y-0.5 transition-all">
                  <Icon name="inventory_2" className="text-[20px]" />
                  <span>
                    Request School Bulk Catalog →
                  </span>
                </Link>
                <Link href="/contact?topic=schools" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-4 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container hover:-translate-y-0.5 font-title-editorial text-title-editorial font-bold shadow-sm transition-all">
                  <Icon name="support_agent" className="text-[20px] text-primary" />
                  <span>
                    Contact Educational Team
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      </CatalogProvider>
    </div>
  );
}
