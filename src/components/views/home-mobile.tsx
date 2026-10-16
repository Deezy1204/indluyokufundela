import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { d } from "@/components/motion/delay";
import { Marquee } from "@/components/motion/marquee";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { Player, PlayerButton, PlayerLabel, Equalizer } from "@/components/ui/player";
import festivalEmblem from "@/assets/brand/festival-emblem.png";
import logo from "@/assets/brand/logo.png";
import img093 from "@/assets/images/home/093.webp";
import img094 from "@/assets/images/home/094.webp";
import img095 from "@/assets/images/home/095.webp";
import img097 from "@/assets/images/home/097.webp";
import img098 from "@/assets/images/home/098.webp";
import img099 from "@/assets/images/home/099.webp";
import img100 from "@/assets/images/home/100.webp";
import img101 from "@/assets/images/home/101.webp";
import img102 from "@/assets/images/home/102.webp";

/** Partner cards for the scrolling strip. `tile` colours the logo square until real partner logos are added. */
const PARTNERS: { name: string; role: string; icon: IconName; tile: string }[] = [
  { name: "National Arts Council of Zimbabwe", role: "Arts council", icon: "account_balance", tile: "bg-primary-fixed text-primary" },
  { name: "Skyz Metro FM 100.3", role: "Radio partner", icon: "radio", tile: "bg-secondary-fixed text-on-secondary-fixed" },
  { name: "'Amabooks Publishers", role: "Publisher", icon: "menu_book", tile: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { name: "Zimbabwe Book Development Council", role: "Book development", icon: "library_books", tile: "bg-primary-fixed text-primary" },
  { name: "Culture Fund of Zimbabwe", role: "Culture funding", icon: "diversity_3", tile: "bg-error-container text-on-error-container" },
  { name: "Bulawayo City Council Libraries", role: "Public libraries", icon: "local_library", tile: "bg-secondary-fixed text-on-secondary-fixed" },
];

export function HomeMobile() {
  return (
    <div className="w-full bg-surface flex flex-col">
      <div className="flex flex-col w-full">
        {/* 1. HERO SECTION */}
        <section className="relative bg-secondary-container text-on-surface px-margin pt-space-md pb-space-xl overflow-hidden">
          {/* Subtle Ndebele Geometric Watermark */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
            <svg className="w-full h-full object-cover enter-fade" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <pattern height="80" id="m-ndebele-hero-pat" patternUnits="userSpaceOnUse" width="80" x="0" y="0">
                <polygon fill="#15157d" points="40,0 80,40 40,80 0,40" />
                <polygon fill="#003013" points="40,15 65,40 40,65 15,40" />
                <polygon fill="#ba1a1a" points="40,25 55,40 40,55 25,40" />
                <line stroke="#1c1b1b" strokeWidth="2" x1="0" x2="80" y1="40" y2="40" />
              </pattern>
              <rect fill="url(#m-ndebele-hero-pat)" height="100%" width="100%" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-space-md max-w-xl mx-auto">
            {/* Tagline Pill & Identity */}
            <div className="flex items-center justify-between">
              <div className="enter-up inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 text-primary font-label-cultural-caps text-label-cultural-caps shadow-sm" style={d(0)}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-error animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-error" />
                </span>
                <span>
                  Bulawayo • Spheth&apos;Imfundw&apos;Emoyeni
                </span>
              </div>
              <Image src={logo} alt={"Indlu Yokufundela logo"} className="enter-pop w-12 h-12 rounded-full shadow-sm bg-surface-container-lowest object-contain transition-transform duration-700 active:rotate-[360deg]" style={d(300)} sizes="96px" />
            </div>
            {/* Hero Headline & Subtitle */}
            <div className="flex flex-col gap-space-xs">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-black tracking-tight leading-tight">
                <SplitWords text="Reviving Our Heritage: Celebrating Ndebele Literature & Culture" delay={100} />
              </h1>
              <p className="enter-up font-body-md text-body-md text-on-surface-variant font-medium leading-relaxed" style={d(380)}>
                Empowering young readers, schools, and cultural storytellers across Zimbabwe through vibrant literature, oral traditions, and digital learning.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="enter-up flex flex-wrap items-center gap-space-sm pt-space-xs" style={d(500)}>
              <Link className="group h-12 px-6 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform whitespace-nowrap" href="/lessons">
                <span>
                  Explore Lessons
                </span>
                <Icon name="arrow_forward" idle className="text-[18px]" />
              </Link>
              <a className="group h-12 px-5 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform whitespace-nowrap" href="#m-festival">
                <Icon name="celebration" className="text-secondary text-[20px]" />
                <span>
                  Festival 2026
                </span>
              </a>
            </div>
            {/* Photo Montage Collage */}
            <div className="grid grid-cols-12 gap-space-sm pt-space-sm">
              <div className="enter-wipe col-span-7 h-48 rounded-lg overflow-hidden shadow-sm relative" style={d(560)}>
                <Image src={img093} alt={"Enthusiastic African students in school uniforms reading an illustrated isiNdebele storybook under warm sunny Bulawayo library light with rich golden yellow and blue tones"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-primary/90 text-on-primary font-label-cultural-caps text-[9px] uppercase">
                  Youth Literature Collection
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-space-sm">
                <div className="enter-wipe h-[88px] rounded-lg overflow-hidden shadow-sm relative" style={d(700)}>
                  <Image src={img094} alt={"Young Zimbabwean cultural performers in traditional vibrant beadwork and headdresses smiling warmly outdoors in Matabeleland"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                </div>
                <div className="enter-wipe h-[88px] rounded-lg overflow-hidden shadow-sm relative" style={d(820)}>
                  <Image src={img095} alt={"Active Zimbabwean classroom setting with happy children holding up bilingual reading materials in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2. STATS STRIP */}
        <section className="px-margin -mt-4 relative z-20" data-reveal="">
          <div className="max-w-xl mx-auto grid grid-cols-2 gap-space-sm" data-stagger="">
            {/* Card 1 */}
            <div className="group p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-display-hero-mobile text-display-hero-mobile font-black text-primary leading-none" data-count="">
                  5
                </span>
                <span className="w-9 h-9 rounded-full bg-secondary-container/30 flex items-center justify-center text-on-secondary-container">
                  <Icon name="military_tech" className="text-[20px]" />
                </span>
              </div>
              <div className="pt-space-xs">
                <p className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                  Festival Editions
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                  Annual national celebration
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-display-hero-mobile text-[30px] font-black text-secondary leading-none whitespace-nowrap" data-count="">
                  3-Day
                </span>
                <span className="w-9 h-9 rounded-full bg-secondary-container/30 flex items-center justify-center text-on-secondary-container">
                  <Icon name="calendar_month" className="text-[20px]" />
                </span>
              </div>
              <div className="pt-space-xs">
                <p className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                  Literary Gathering
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                  Uniting authors &amp; schools
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-display-hero-mobile text-display-hero-mobile font-black text-tertiary-container leading-none" data-count="">
                  5
                </span>
                <span className="w-9 h-9 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                  <Icon name="map" className="text-[20px]" />
                </span>
              </div>
              <div className="pt-space-xs">
                <p className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                  Provinces Active
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                  Bulawayo, Mat North &amp; South
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-title-editorial text-title-editorial font-black text-primary leading-none uppercase">
                  Weekly
                </span>
                <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="radio" idle className="text-[20px]" />
                </span>
              </div>
              <div className="pt-space-xs">
                <p className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                  Skyz Metro FM
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                  Radio broadcast lessons
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 3. NDEBELE LITERATURE FESTIVAL (SIGNATURE CENTERPIECE) */}
        <section className="mt-space-xl px-margin" id="m-festival" data-reveal="">
          <div className="max-w-xl mx-auto rounded-xl bg-surface-container-low shadow-sm overflow-hidden flex flex-col">
            {/* Traditional Geometric Decorative Header Band */}
            <div className="w-full h-3 flex overflow-hidden" data-stagger="">
              <div className="flex-1 bg-[#ba1a1a]" />
              <div className="flex-1 bg-[#2e3192]" />
              <div className="flex-1 bg-[#f2e400]" />
              <div className="flex-1 bg-[#004920]" />
              <div className="flex-1 bg-[#1c1b1b]" />
              <div className="flex-1 bg-[#ffffff]" />
              <div className="flex-1 bg-[#ba1a1a]" />
              <div className="flex-1 bg-[#2e3192]" />
              <div className="flex-1 bg-[#f2e400]" />
              <div className="flex-1 bg-[#004920]" />
            </div>
            <div className="p-space-md flex flex-col gap-space-md">
              {/* Official Festival Emblem Display */}
              <div className="w-full bg-surface-container-lowest rounded-lg p-space-sm flex items-center justify-center shadow-sm">
                <Image src={festivalEmblem} alt={"Ndebele Literature Festival \"Cikoza Sizwe\" emblem"} className="max-h-36 w-auto object-contain" sizes="(min-width: 768px) 320px, 200px" />
              </div>
              {/* Festival Title & Theme Badge */}
              <div className="flex flex-col gap-1 text-center">
                <div className="inline-flex self-center items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-cultural-caps text-label-cultural-caps uppercase">
                  <Icon name="verified" className="text-[16px]" />
                  <span>
                    Theme: &quot;Cikoza Sizwe&quot; • Proud Heritage
                  </span>
                </div>
                <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary font-black mt-1">
                  Ndebele Literature Festival • 5th Edition
                </h2>
                <div className="flex items-center justify-center gap-1.5 text-on-surface-variant font-label-lg text-label-lg font-semibold">
                  <Icon name="location_on" className="text-error text-[18px]" />
                  <span>
                    Bulawayo Amphitheatre, Zimbabwe • Sept 2026
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-center">
                Zimbabwe&apos;s premier mother-tongue literary gathering uniting primary &amp; secondary schools, acclaimed authors, folk artists, and linguists across Matabeleland North, Matabeleland South, Midlands, and Masvingo.
              </p>
              {/* Guest of Honour Spotlight Card */}
              <div className="rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex items-start gap-space-sm">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <Icon name="star" filled idle className="text-on-secondary-fixed text-[26px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase font-bold">
                    Guest of Honour
                  </span>
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">
                    Dr. Barbara C. Makhalisa (Nkala)
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                    Veteran pioneer novelist, translator, and cultural preservationist mentoring the next generation of isiNdebele authors.
                  </p>
                </div>
              </div>
              {/* 8 Grid Icon Cards: Festival Disciplines */}
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold flex items-center gap-2">
                  <Icon name="interests" className="text-primary text-[20px]" />
                  <span>
                    Festival Pillars &amp; Competitions
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-space-xs" data-stagger="">
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name="history_edu" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Poetry &amp; Oral Praise
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Classical Praise Poetry &amp; Izibongo
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
                      <Icon name="theater_comedy" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Stage Drama &amp; Theatre
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Live Theatrical Plays &amp; Skits
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                      <Icon name="edit_note" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Creative Essay Writing
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Short Story &amp; Composition Awards
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name="record_voice_over" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Public Speaking &amp; Oratory
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Debate &amp; Eloquent Address
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
                      <Icon name="quiz" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Language &amp; Cultural Bowl
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      History, Proverbs &amp; Trivia
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                      <Icon name="palette" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Arts, Crafts &amp; Beadwork
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Heritage Crafts &amp; Artefacts
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name="tour" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Heritage Tours
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Mhlahlandlela &amp; Royal Historical Sites
                    </span>
                  </div>
                  <div className="group p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1.5 active:scale-[0.97] transition-transform">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
                      <Icon name="celebration" className="text-[18px]" />
                    </div>
                    <span className="font-label-lg text-label-lg text-primary font-bold leading-tight">
                      Traditional Attire &amp; Dance
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                      Folk Dancing &amp; Regalia Showcase
                    </span>
                  </div>
                </div>
              </div>
              {/* Mini Festival Gallery Snapshots */}
              <div className="flex flex-col gap-2 pt-space-xs">
                <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant uppercase">
                  Festival Moments
                </span>
                <div className="grid grid-cols-3 gap-2" data-stagger="">
                  <div className="zoom-media h-20 rounded-lg overflow-hidden shadow-sm">
                    <Image src={img097} alt={"Traditional Ndebele dancer in traditional regalia performing at the Bulawayo Amphitheatre during cultural arts festival celebration"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                  <div className="zoom-media h-20 rounded-lg overflow-hidden shadow-sm">
                    <Image src={img098} alt={"Secondary school pupils holding prize trophies and certificates with broad smiles during literary festival awards ceremony in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                  <div className="zoom-media h-20 rounded-lg overflow-hidden shadow-sm">
                    <Image src={img099} alt={"A Zimbabwean elder storytelling to seated schoolchildren under an acacia tree with book stalls in the background"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                </div>
              </div>
              {/* Festival CTA Button */}
              <Link href="/events" className="group w-full h-12 rounded-full bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all whitespace-nowrap">
                <span>
                  View Highlights &amp; Register School
                </span>
                <Icon name="how_to_reg" className="text-[18px]" />
              </Link>
            </div>
          </div>
        </section>
        {/* 4. SKYZ METRO FM RADIO BANNER */}
        <section className="mt-space-xl px-margin" data-reveal="">
          <div className="max-w-xl mx-auto rounded-xl bg-primary text-on-primary p-space-md shadow-md relative overflow-hidden flex flex-col gap-space-sm">
            {/* Glow ambient background */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none animate-float" />
            {/* Top Row: Radio Badge & Live Status */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-surface-container-lowest/15 flex items-center justify-center">
                  <Icon name="podcasts" idle className="text-secondary-container text-[22px]" />
                </span>
                <div className="flex flex-col">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-secondary-container tracking-wider uppercase">
                    Live On Air
                  </span>
                  <span className="font-title-editorial text-title-editorial text-on-primary font-bold leading-tight">
                    Skyz Metro FM 100.3
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error text-on-error font-label-cultural-caps text-label-cultural-caps font-bold">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-surface-container-lowest animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-surface-container-lowest" />
                </span>
                <span>
                  16:15 CAT
                </span>
              </span>
            </div>
            {/* Radio Program Details */}
            <div className="flex flex-col gap-1 relative z-10">
              <h3 className="font-headline-md-mobile text-headline-md-mobile font-bold text-on-primary leading-snug">
                Spheth&apos;Imfundw&apos;Emoyeni Radio Classroom
              </h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                Every Monday 16:15 – 16:45 CAT. Interactive isiNdebele proverbs, folklore lessons, and pupil call-in quizzes hosted by Usisi Omkhulu.
              </p>
            </div>
            {/* Interactive Soundwave Player Mockup */}
            <Player duration={1680} className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-lg p-space-sm flex flex-col gap-2 relative z-10">
              <div className="flex items-center justify-between gap-3 text-body-sm text-surface-container-highest">
                <div className="flex items-center gap-2">
                  <PlayerButton label="Ep. 42: Folk Proverbs & The Clever Hare" iconClassName="text-[24px]" className="w-10 h-10 shrink-0 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-sm active:scale-90 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-on-primary text-[13px]">
                      Ep. 42: Folk Proverbs &amp; The Clever Hare
                    </span>
                    <PlayerLabel className="text-[11px] text-primary-fixed-dim" on="Now playing • Broadcast from Bulawayo" off="28 mins • Broadcast from Bulawayo" />
                  </div>
                </div>
                {/* Animated graphic sound bars */}
                <Equalizer bars={4} />
              </div>
            </Player>
          </div>
        </section>
        {/* 5. HIGHLIGHTS & PROGRAM PREVIEWS */}
        <section className="mt-space-xl px-margin" id="m-lessons" data-reveal="">
          <div className="max-w-xl mx-auto flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1.5 text-secondary font-label-cultural-caps text-label-cultural-caps uppercase">
                <Icon name="menu_book" className="text-[16px]" />
                <span>
                  Featured Initiatives
                </span>
              </div>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary font-bold">
                Explore Our Cultural Programs
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bridging historical literary excellence with fresh digital learning media for learners of all ages.
              </p>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="group rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-cultural-caps text-[10px] font-bold uppercase">
                    Curated Children&apos;s Books
                  </span>
                  <Icon name="auto_stories" className="text-outline text-[20px]" />
                </div>
                <div className="flex gap-space-sm">
                  <div className="zoom-media w-20 h-24 rounded-md overflow-hidden shrink-0 shadow-sm">
                    <Image src={img100} alt={"Cover illustration of an African folktale storybook in isiNdebele featuring a hare and an elephant in bold modern graphic style"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                        Traditional Folktales Anthology
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] line-clamp-2 mt-1">
                        Classic Matabeleland folktales re-imagined for primary grades with dual-language vocabulary notes.
                      </p>
                    </div>
                    <Link className="font-label-lg text-label-lg text-primary font-bold inline-flex items-center gap-1 text-[13px] hover:underline" href="/books">
                      <span>
                        Browse Anthology
                      </span>
                      <Icon name="chevron_right" className="text-[16px]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-cultural-caps text-[10px] font-bold uppercase">
                    Writers Workshop
                  </span>
                  <Icon name="event" className="text-outline text-[20px]" />
                </div>
                <div className="flex gap-space-sm">
                  <div className="zoom-media w-20 h-24 rounded-md overflow-hidden shrink-0 shadow-sm">
                    <Image src={img101} alt={"Bulawayo young authors gathered at a workshop table sharing notebooks and creative ideas with mentor smiling"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                        Bulawayo Youth Writing Clinic
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] line-clamp-2 mt-1">
                        Quarterly clinics teaching short-story crafting, orthography, and scriptwriting for screen &amp; radio.
                      </p>
                    </div>
                    <Link className="font-label-lg text-label-lg text-primary font-bold inline-flex items-center gap-1 text-[13px] hover:underline" href="/contact?topic=join">
                      <span>
                        Reserve Seat
                      </span>
                      <Icon name="chevron_right" className="text-[16px]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary-container font-label-cultural-caps text-[10px] font-bold uppercase">
                    Video &amp; Audio Archives
                  </span>
                  <Icon name="movie" className="text-outline text-[20px]" />
                </div>
                <div className="flex gap-space-sm">
                  <div className="zoom-media w-20 h-24 rounded-md overflow-hidden shrink-0 shadow-sm">
                    <Image src={img102} alt={"Close up of an elder speaking and smiling into a professional podcast microphone in a creative studio space"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                        Proverbs &amp; Idioms Digital Archives
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] line-clamp-2 mt-1">
                        High-definition micro-lessons breaking down ancient isiNdebele proverbs into modern context.
                      </p>
                    </div>
                    <Link className="font-label-lg text-label-lg text-primary font-bold inline-flex items-center gap-1 text-[13px] hover:underline" href="/watch">
                      <span>
                        Watch Episode
                      </span>
                      <Icon name="chevron_right" className="text-[16px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6. PARTNERS MARQUEE SECTION */}
        <section className="mt-space-xl px-margin" data-reveal="">
          <div className="max-w-xl mx-auto flex flex-col gap-space-sm">
            <div className="flex flex-col gap-1 text-center">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase font-bold">
                Collaborators &amp; Partners
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Our Partners &amp; Supporters
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Warmest gratitude to the organizations and cultural custodians standing alongside Indlu Yokufundela throughout the years.
              </p>
            </div>
            {/* Slow-scrolling partner cards (logo tile + name); tap or hover pauses the strip */}
            <Marquee className="py-3 -mx-margin" gap="0.75rem" duration="75s">
              {PARTNERS.map((p) => (
                <div key={p.name} className="w-64 shrink-0 flex flex-col gap-4 p-5 rounded-2xl bg-surface-container-lowest shadow-sm">
                  <span className={`w-16 h-16 rounded-xl flex items-center justify-center ${p.tile}`}>
                    <Icon name={p.icon} className="text-[34px]" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-title-editorial text-title-editorial font-bold text-on-surface">
                      {p.name}
                    </span>
                    <span className="font-label-cultural-caps text-label-cultural-caps uppercase text-secondary">
                      {p.role}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        {/* 7. CALL-TO-ACTION (CTA) BAND */}
        <section className="mt-space-xl px-margin mb-space-sm" data-reveal="scale">
          <div className="max-w-xl mx-auto rounded-xl bg-secondary-container text-on-secondary-fixed p-space-lg shadow-sm flex flex-col gap-space-md text-center relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-secondary-fixed/40 pointer-events-none animate-float" />
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-dashed border-primary/15 pointer-events-none animate-spin-slow" />
            <div className="flex flex-col gap-1 items-center relative z-10">
              <span className="w-12 h-12 rounded-full bg-surface-container-lowest/80 flex items-center justify-center text-primary shadow-sm mb-1">
                <Icon name="handshake" idle hover="beat" className="text-[28px]" />
              </span>
              <h2 className="font-headline-md-mobile text-headline-md-mobile font-black text-primary">
                Be Part of the Story!
              </h2>
              <p className="font-body-md text-body-md text-on-surface mt-1 leading-relaxed">
                Download our mobile learning app or partner with us to sponsor books for rural schools across Matabeleland.
              </p>
            </div>
            <div className="flex flex-col gap-space-xs relative z-10">
              <Link href="/mobile-app" className="group w-full h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 shadow-md active:scale-95 transition-transform whitespace-nowrap">
                <Icon name="install_mobile" className="text-[20px]" />
                <span>
                  Download Mobile App
                </span>
              </Link>
              <Link href="/contact" className="group w-full h-12 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold flex flex-row items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform whitespace-nowrap">
                <Icon name="mail" className="text-[20px]" />
                <span>
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
