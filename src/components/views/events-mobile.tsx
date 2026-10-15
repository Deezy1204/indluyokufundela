import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { YearEmpty, YearFilterProvider, YearItem, YearTabs } from "@/components/events/event-tools";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { GalleryProvider, GalleryTrigger } from "@/components/ui/gallery";
import { Link } from "@/components/ui/link";
import { MediaTrigger } from "@/components/ui/media-modal";
import { SITE } from "@/lib/site";
import festivalEmblem from "@/assets/brand/festival-emblem.png";
import img070 from "@/assets/images/events/070.webp";
import img071 from "@/assets/images/events/071.webp";
import img072 from "@/assets/images/events/072.webp";
import img073 from "@/assets/images/events/073.webp";
import img074 from "@/assets/images/events/074.webp";
import img075 from "@/assets/images/events/075.webp";
import img076 from "@/assets/images/events/076.webp";
import img077 from "@/assets/images/events/077.webp";
import img078 from "@/assets/images/events/078.webp";
import img079 from "@/assets/images/events/079.webp";

export function EventsMobile() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col bg-background">
      <div className="flex flex-col w-full">
        {/* Section 1: Hero & Header */}
        <section className="relative px-4 pt-4 pb-6 overflow-hidden">
          {/* Subtle geometric background accent inspired by Ndebele murals (opacity 6%) */}
          <div className="absolute -right-12 -top-12 w-64 h-64 pointer-events-none opacity-[0.06] select-none text-primary animate-spin-slow">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 200 200">
              <polygon points="100,0 200,100 100,200 0,100" />
              <polygon fill="#FFF000" points="100,30 170,100 100,170 30,100" />
              <polygon points="100,60 140,100 100,140 60,100" />
            </svg>
          </div>
          {/* Breadcrumb */}
          <nav className="enter-up flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant mb-3" style={d(0)}>
            <Link className="hover:text-primary transition-colors py-1" href="/">
              Home
            </Link>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-primary font-bold">
              Events
            </span>
          </nav>
          {/* Cultural Category Badge */}
          <div className="enter-up inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-primary mb-3" style={d(80)}>
            <Icon name="celebration" idle className="text-[16px]" />
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase">
              GATHERINGS &amp; FESTIVALS
            </span>
          </div>
          {/* Bold Headline */}
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-2">
            <SplitWords text="Cultural Gatherings & Literary Events" delay={120} />
          </h1>
          <p className="enter-up font-body-md text-body-md text-on-surface-variant" style={d(380)}>
            Join our annual literature festivals, youth writing clinics, and community storytelling gatherings across Matabeleland.
          </p>
        </section>
        {/* Section 2: Upcoming Events */}
        <section className="px-4 py-4 space-y-4" data-reveal="">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              Upcoming Gatherings
            </h2>
            <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase">
              2026 Season
            </span>
          </div>
          {/* Major Event Card: 5th Biennial Festival */}
          <div className="relative bg-surface-container-lowest rounded-[20px] p-5 shadow-sm overflow-hidden group">
            {/* Decorative Top Stripe */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />
            <div className="flex items-start justify-between gap-3 mt-1 mb-3">
              {/* Date Badge */}
              <div className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-xl px-3 py-2 min-w-[70px] shadow-sm animate-float">
                <span className="font-label-cultural-caps text-[10px] tracking-wider uppercase opacity-90">
                  SEP
                </span>
                <span className="font-title-editorial text-title-editorial font-extrabold leading-none my-0.5">
                  24-26
                </span>
                <span className="font-label-md text-[10px]">
                  2026
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded-full font-label-cultural-caps text-[10px] uppercase font-bold">
                  Flagship Festival
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                  <Icon name="group" className="text-[14px] text-tertiary-container" />
                  1,500+ Expected
                </span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
              5th Biennial Ndebele Literature Festival: “Cikoza Sizwe”
            </h3>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-3">
              <Icon name="location_on" className="text-primary text-[18px]" />
              <span className="font-medium text-on-surface">
                Bulawayo Amphitheatre
              </span>
              <span className="text-outline">
                •
              </span>
              <span>
                5 Provinces Represented
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Our premier celebration uniting schools, acclaimed authors, poets, and community elders for three vibrant days of drama, recitals, book expos, and linguistic honour.
            </p>
            {/* Action Button */}
            <Link className="group w-full min-h-[44px] px-6 py-3 bg-primary text-on-primary rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-[0.99]" href="/contact?topic=registration&event=cikoza-sizwe-2026">
              <span>
                Learn More
              </span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
          {/* Event 2: Youth Creative Writing Masterclass */}
          <div className="bg-surface-container-lowest rounded-[20px] p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex flex-col items-center justify-center bg-surface-container-high text-on-surface rounded-xl px-3 py-2 min-w-[70px]">
                <span className="font-label-cultural-caps text-[10px] tracking-wider uppercase text-primary font-bold">
                  MAY
                </span>
                <span className="font-title-editorial text-title-editorial font-bold leading-none my-0.5">
                  16
                </span>
                <span className="font-label-md text-[10px] text-on-surface-variant">
                  2026
                </span>
              </div>
              <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-cultural-caps text-[10px] uppercase font-bold">
                Youth Clinic
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-on-surface mb-1">
              Bulawayo Youth Creative Writing Masterclass
            </h3>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-2">
              <Icon name="account_balance" className="text-primary text-[18px]" />
              <span>
                Bulawayo City Library
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Intensive day-long prose craft workshop led by award-winning Matabeleland novelists and indigenous language publishers.
            </p>
            <Link className="group w-full min-h-[44px] px-6 py-2.5 bg-surface-container-high text-on-surface rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap hover:bg-surface-container-highest transition-colors" href="/contact?topic=registration&event=youth-writing-masterclass">
              <span>
                Reserve Seat
              </span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
          {/* Event 3: Heritage Oral Storytelling & Izibongo Recital Night */}
          <div className="bg-surface-container-lowest rounded-[20px] p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex flex-col items-center justify-center bg-surface-container-high text-on-surface rounded-xl px-3 py-2 min-w-[70px]">
                <span className="font-label-cultural-caps text-[10px] tracking-wider uppercase text-primary font-bold">
                  JUN
                </span>
                <span className="font-title-editorial text-title-editorial font-bold leading-none my-0.5">
                  19
                </span>
                <span className="font-label-md text-[10px] text-on-surface-variant">
                  2026
                </span>
              </div>
              <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-cultural-caps text-[10px] uppercase font-bold">
                Evening Recital
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-on-surface mb-1">
              Heritage Oral Storytelling &amp; Izibongo Recital Night
            </h3>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-2">
              <Icon name="park" className="text-primary text-[18px]" />
              <span>
                Mhlahlandlela Heritage Site
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              An acoustic evening under the stars featuring praise-poetry orators, traditional thumb-piano acoustics, and elder folktales.
            </p>
            <Link className="group w-full min-h-[44px] px-6 py-2.5 bg-surface-container-high text-on-surface rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap hover:bg-surface-container-highest transition-colors" href="/contact?topic=registration&event=izibongo-recital-night">
              <span>
                Event Details
              </span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </section>
        {/* Section 3: Featured Event Detail View (Deep-Dive Showcase) */}
        <section className="px-4 py-6" data-reveal="">
          <div className="bg-surface-container-low rounded-[20px] p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="verified" idle hover="beat" className="text-primary text-[22px]" />
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase font-extrabold">
                  Festival Showcase
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-primary text-on-primary rounded-full font-label-md text-[11px] font-bold">
                Bulawayo 2024
              </span>
            </div>
            {/* Festival Emblem Spotlight */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <Image src={festivalEmblem} alt={"Ndebele Literature Festival \"Cikoza Sizwe\" emblem"} className="w-48 h-auto object-contain mx-auto mb-2 transition-transform duration-700 active:rotate-6 active:scale-105" sizes="(min-width: 768px) 320px, 200px" />
              <h3 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
                4th Ndebele Literature Festival
              </h3>
              <p className="font-label-cultural-caps text-label-cultural-caps text-primary font-bold uppercase mt-0.5">
                Theme: “Cikoza Sizwe”
              </p>
            </div>
            {/* Quick Facts Pill Badges */}
            <div className="grid grid-cols-3 gap-2" data-stagger="">
              <div className="bg-surface-container-lowest p-2.5 rounded-xl text-center shadow-sm flex flex-col justify-center items-center">
                <span className="font-title-editorial text-title-editorial font-bold text-primary" data-count="">
                  1,400+
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant">
                  Learners
                </span>
              </div>
              <div className="bg-surface-container-lowest p-2.5 rounded-xl text-center shadow-sm flex flex-col justify-center items-center">
                <span className="font-title-editorial text-title-editorial font-bold text-primary" data-count="">
                  48
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant">
                  Schools
                </span>
              </div>
              <div className="bg-surface-container-lowest p-2.5 rounded-xl text-center shadow-sm flex flex-col justify-center items-center">
                <span className="font-title-editorial text-title-editorial font-bold text-primary">
                  City
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant">
                  Amphitheatre
                </span>
              </div>
            </div>
            {/* Narrative summary */}
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              The landmark 2024 gathering celebrated vibrant indigenous mother-tongue expression through high-school stage dramatisations, choral poetry, and book publishing initiatives across Bulawayo.
            </p>
            {/* Photo Gallery: Horizontal Swipeable */}
            <GalleryProvider items={[{ image: img070, alt: "Traditional Dance at the 2024 festival", caption: "Traditional Dance", sub: "Opening Gala" }, { image: img071, alt: "Poetry Recitals at the 2024 festival", caption: "Poetry Recitals", sub: "Inter-School Contest" }, { image: img072, alt: "Book Fair Pavilion at the 2024 festival", caption: "Book Fair Pavilion", sub: "Publishers Display" }, { image: img073, alt: "Awards Ceremony at the 2024 festival", caption: "Awards Ceremony", sub: "Grand Finale" }]}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Festival Moments
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Swipe · tap to enlarge
                </span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scroll-hidden -mx-1 px-1">
                {/* Photo 1 */}
                <GalleryTrigger index={0} label="Open photo: Traditional Dance" className="zoom-media shrink-0 w-44 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.97] transition-transform">
                  <Image src={img070} alt={"Traditional Ndebele high school dance ensemble performing with energetic stomps and beaded cultural attire on stage at Bulawayo Amphitheatre with warm vibrant natural lighting and royal blue festival backdrops"} className="w-full h-28 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="p-2.5">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Traditional Dance
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      Opening Gala
                    </span>
                  </div>
                </GalleryTrigger>
                {/* Photo 2 */}
                <GalleryTrigger index={1} label="Open photo: Poetry Recitals" className="zoom-media shrink-0 w-44 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.97] transition-transform">
                  <Image src={img071} alt={"Passionate youth poet standing behind a podium reciting heartfelt isiNdebele verses during the Cikoza Sizwe poetry competition, bright morning stage lighting, expressive hand gestures"} className="w-full h-28 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="p-2.5">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Poetry Recitals
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      Inter-School Contest
                    </span>
                  </div>
                </GalleryTrigger>
                {/* Photo 3 */}
                <GalleryTrigger index={2} label="Open photo: Book Fair Pavilion" className="zoom-media shrink-0 w-44 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.97] transition-transform">
                  <Image src={img072} alt={"Colourful outdoor book fair exhibition tables crowded with students and teachers leafing through newly printed isiNdebele storybooks, golden sunny day in Bulawayo"} className="w-full h-28 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="p-2.5">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Book Fair Pavilion
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      Publishers Display
                    </span>
                  </div>
                </GalleryTrigger>
                {/* Photo 4 */}
                <GalleryTrigger index={3} label="Open photo: Awards Ceremony" className="zoom-media shrink-0 w-44 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.97] transition-transform">
                  <Image src={img073} alt={"Young female student recipient in school uniform smiling proudly while accepting a literature award trophy from a guest elder author on festival stage"} className="w-full h-28 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="p-2.5">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Awards Ceremony
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      Grand Finale
                    </span>
                  </div>
                </GalleryTrigger>
              </div>
            </div>
            </GalleryProvider>
            {/* Video Gallery */}
            <div>
              <span className="font-label-lg text-label-lg font-bold text-on-surface block mb-2">
                Video Highlights
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {/* Video 1 */}
                <MediaTrigger media={{ image: img074, alt: "Highlights Reel", title: "Highlights Reel", description: "Festival opening and grand finale highlights from Bulawayo 2024.", seconds: 252, kind: "video", meta: "Cikoza Sizwe 2024" }} className="zoom-media relative w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm active:scale-[0.97] transition-transform">
                  <Image src={img074} alt={"Wide scenic shot of full Bulawayo Amphitheatre audience waving colorful yellow and blue flags during the festival opening ceremony, cinematic film style"} className="w-full h-24 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-primary/25 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Icon name="play_arrow" filled className="text-[20px]" />
                    </div>
                  </div>
                  <div className="p-2 bg-surface-container-lowest">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Highlights Reel
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      04:12 mins
                    </span>
                  </div>
                </MediaTrigger>
                {/* Video 2 */}
                <MediaTrigger media={{ image: img075, alt: "Poetry Finals", title: "Poetry Finals", description: "The final round of the inter-school Izibongo contest.", seconds: 525, kind: "video", meta: "Cikoza Sizwe 2024" }} className="zoom-media relative w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm active:scale-[0.97] transition-transform">
                  <Image src={img075} alt={"Dramatic spotlight stage focus on students performing an isiNdebele theatrical play with traditional shields and attire, sharp cinematic lighting"} className="w-full h-24 object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-primary/25 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Icon name="play_arrow" filled className="text-[20px]" />
                    </div>
                  </div>
                  <div className="p-2 bg-surface-container-lowest">
                    <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                      Poetry Finals
                    </span>
                    {" "}
                    <span className="font-label-md text-[10px] text-on-surface-variant">
                      08:45 mins
                    </span>
                  </div>
                </MediaTrigger>
              </div>
            </div>
            {/* Download Action */}
            <Link className="group w-full min-h-[44px] px-6 py-3 bg-surface-container-highest text-on-surface hover:text-primary rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-colors" href="/contact?topic=anthology&year=2024">
              <Icon name="download" className="text-[20px]" />
              <span>
                Request the 2024 Report (PDF)
              </span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </section>
        {/* Section 4: Past Events Archive */}
        <YearFilterProvider years={["2025", "2024", "2023", "2022", "2020"]} itemYears={["2024", "2023", "2022"]}>
        <section className="px-4 py-4 space-y-4" data-reveal="">
          <div>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              Past Events Archive
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Explore historic competitions, book tours, and cultural meets.
            </p>
          </div>
          {/* Year Filter Pills (Horizontal Scroll) */}
          <YearTabs variant="mobile" />
          {/* Stacked Archive Cards */}
          <div className="space-y-4">
            {/* Archive Entry 1 */}
            <YearItem year="2024">
            <GalleryProvider items={[{ image: img076, alt: "Debate team at the podium", caption: "Debate team at the podium" }, { image: img077, alt: "A student writing an isiNdebele essay", caption: "A student writing an isiNdebele essay" }]}>
            <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 bg-surface-container-high text-primary rounded-full font-label-cultural-caps text-[11px] font-extrabold uppercase">
                  NOV 2024
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant flex items-center gap-1">
                  <Icon name="person" className="text-[14px] text-tertiary-container" />
                  650+ Attended
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold">
                2024 Provincial Debate &amp; Essay Championship
              </h3>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <Icon name="location_on" className="text-primary text-[18px]" />
                <span>
                  Entumbane High Hall, Bulawayo
                </span>
              </div>
              {/* Thumbnail Preview Carousel */}
              <div className="flex gap-2 overflow-x-auto pb-1 custom-scroll-hidden">
                <GalleryTrigger index={0} className="zoom-media w-24 h-16 rounded-xl overflow-hidden shrink-0"><Image src={img076} alt={"High school debate team debating passionately at podium with certificates on the table, crisp warm daylight"} className="w-full h-full object-cover" sizes="160px" placeholder="blur" /></GalleryTrigger>
                <GalleryTrigger index={1} className="zoom-media w-24 h-16 rounded-xl overflow-hidden shrink-0"><Image src={img077} alt={"Close up of student writing an isiNdebele essay exam with focused expression in an auditorium"} className="w-full h-full object-cover" sizes="160px" placeholder="blur" /></GalleryTrigger>
                <MediaTrigger media={{ image: img076, alt: "Provincial Debate Final", title: "Provincial Debate Final", description: "Highlights from the 2024 provincial debate and essay championship.", seconds: 640, kind: "video", meta: "Archive 2024" }} label="Play archive video" className="w-24 h-16 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 text-primary transition-colors hover:bg-primary hover:text-on-primary">
                  <Icon name="play_circle" filled className="text-[24px]" />
                </MediaTrigger>
              </div>
              <GalleryTrigger index={0} label="Open event gallery" className="group flex w-full min-h-[44px] px-5 py-2.5 bg-surface-container text-on-surface hover:text-primary rounded-full font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap transition-colors">
                <span>
                  View Gallery &amp; Report
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </GalleryTrigger>
            </div>
            </GalleryProvider>
            </YearItem>
            {/* Archive Entry 2 */}
            <YearItem year="2023">
            <GalleryProvider items={[{ image: img078, alt: "Mobile library van delivering readers", caption: "Mobile library van delivering readers" }, { image: img079, alt: "An elder reading a folk tale to children", caption: "An elder reading a folk tale to children" }]}>
            <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 bg-surface-container-high text-primary rounded-full font-label-cultural-caps text-[11px] font-extrabold uppercase">
                  AUG 2023
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant flex items-center gap-1">
                  <Icon name="person" className="text-[14px] text-tertiary-container" />
                  900+ Learners Reached
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold">
                2023 Matabeleland South Rural Book Tour
              </h3>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <Icon name="location_on" className="text-primary text-[18px]" />
                <span>
                  Gwanda &amp; Matobo Primary Circuits
                </span>
              </div>
              {/* Thumbnail Preview Carousel */}
              <div className="flex gap-2 overflow-x-auto pb-1 custom-scroll-hidden">
                <GalleryTrigger index={0} className="zoom-media w-24 h-16 rounded-xl overflow-hidden shrink-0"><Image src={img078} alt={"Mobile library van delivering boxes of isiNdebele readers to eager rural elementary students under an acacia tree in Matabeleland"} className="w-full h-full object-cover" sizes="160px" placeholder="blur" /></GalleryTrigger>
                <GalleryTrigger index={1} className="zoom-media w-24 h-16 rounded-xl overflow-hidden shrink-0"><Image src={img079} alt={"Elderly storyteller reading traditional folk tale from a large printed picture book to seated circle of children"} className="w-full h-full object-cover" sizes="160px" placeholder="blur" /></GalleryTrigger>
              </div>
              <GalleryTrigger index={0} label="Open event gallery" className="group flex w-full min-h-[44px] px-5 py-2.5 bg-surface-container text-on-surface hover:text-primary rounded-full font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap transition-colors">
                <span>
                  View Gallery &amp; Report
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </GalleryTrigger>
            </div>
            </GalleryProvider>
            </YearItem>
            {/* Archive Entry 3 */}
            <YearItem year="2022">
            <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 bg-surface-container-high text-primary rounded-full font-label-cultural-caps text-[11px] font-extrabold uppercase">
                  OCT 2022
                </span>
                <span className="font-label-md text-[11px] text-on-surface-variant flex items-center gap-1">
                  <Icon name="person" className="text-[14px] text-tertiary-container" />
                  1,100+ Attendees
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold">
                2022 Inaugural Festival: “Usisi Omkhulu”
              </h3>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <Icon name="location_on" className="text-primary text-[18px]" />
                <span>
                  Bulawayo Amphitheatre &amp; Skyz Metro FM Live
                </span>
              </div>
              <Link className="group w-full min-h-[44px] px-5 py-2.5 bg-surface-container text-on-surface hover:text-primary rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap transition-colors" href="/contact?topic=archive&year=2022">
                <span>
                  Request Event Report
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
            </YearItem>
            <YearEmpty />
          </div>
        </section>
        </YearFilterProvider>
        {/* Section 5: Partner / School Invitation CTA Banner */}
        <section className="px-4 pt-3 pb-8" data-reveal="">
          <div className="relative bg-secondary-container text-on-secondary-container rounded-[20px] p-6 shadow-md overflow-hidden">
            {/* Subtle Decorative Chevron Motif Overlay */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none text-on-secondary-container animate-spin-slow">
              <svg fill="currentColor" viewBox="0 0 100 100">
                <polygon points="50,0 100,50 50,100 0,50" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-on-secondary-container/10 flex items-center justify-center mb-3 text-on-secondary-container">
                <Icon name="school" idle hover="lift" className="text-[28px]" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-secondary-container mb-2">
                Host a Literary Event at Your School
              </h2>
              <p className="font-body-sm text-body-sm text-on-secondary-container/90 mb-6">
                Bring the magic of living Ndebele literature, author visits, and reading competitions to your classroom. We partner with primary and secondary schools across Zimbabwe.
              </p>
              <div className="flex flex-col w-full gap-3">
                <a className="group w-full min-h-[44px] px-6 py-3 bg-primary text-on-primary rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm hover:bg-primary-container transition-colors" href={`mailto:${SITE.email}?subject=Host%20a%20literary%20event`}>
                  <span>
                    Partner With Us
                  </span>
                  <Icon name="handshake" className="text-[18px]" />
                </a>
                <Link className="group w-full min-h-[44px] px-6 py-3 bg-surface-container-lowest text-on-surface rounded-full font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm hover:bg-surface-container transition-colors" href="/contact?topic=events">
                  <span>
                    Contact Us
                  </span>
                  <Icon name="mail" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
