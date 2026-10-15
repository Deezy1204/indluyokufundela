import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Player, PlayerButton, PlayerProgress, PlayerTime, Equalizer } from "@/components/ui/player";
import festivalEmblem from "@/assets/brand/festival-emblem.png";
import img080 from "@/assets/images/home/080.webp";
import img081 from "@/assets/images/home/081.webp";
import img082 from "@/assets/images/home/082.webp";
import img084 from "@/assets/images/home/084.webp";
import img085 from "@/assets/images/home/085.webp";
import img086 from "@/assets/images/home/086.webp";
import img087 from "@/assets/images/home/087.webp";
import img088 from "@/assets/images/home/088.webp";
import img089 from "@/assets/images/home/089.webp";
import img090 from "@/assets/images/home/090.webp";
import img091 from "@/assets/images/home/091.webp";

export function HomeDesktop() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-secondary-fixed py-16 lg:py-24">
          {/* Subtle geometric background watermark */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
              <path className="draw-line" pathLength={1} d="M0 300L150 0L300 300L450 0L600 300L750 0L900 300L1050 0L1200 300" stroke="#15157d" strokeWidth="24" />
              <path className="draw-line" style={d(250)} pathLength={1} d="M0 600L150 300L300 600L450 300L600 600L750 300L900 600L1050 300L1200 600" stroke="#003013" strokeWidth="24" />
              <circle className="animate-spin-slow origin-center [transform-box:fill-box]" cx="600" cy="300" r="180" stroke="#ba1a1a" strokeWidth="20" strokeDasharray="90 46" />
              <polygon className="enter-pop origin-center [transform-box:fill-box]" style={d(600)} fill="#15157d" points="600,160 500,380 700,380" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Majestic Editorial Headline */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <div className="enter-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/80 text-on-surface shadow-sm" style={d(0)}>
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-tertiary-container animate-ping opacity-50" />
                    <span className="relative w-2.5 h-2.5 rounded-full bg-tertiary-container" />
                  </span>
                  <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface uppercase tracking-wider">
                    Bulawayo, Zimbabwe • Spheth&apos;Imfundw&apos;Emoyeni
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-on-secondary-fixed font-black tracking-tight leading-[1.08]">
                  <SplitWords text="Reviving Our Heritage: Celebrating Ndebele Literature & Culture" delay={120} />
                </h1>
                <p className="enter-up font-body-lg text-body-lg text-on-secondary-fixed/90 max-w-2xl leading-relaxed" style={d(420)}>
                  Empowering students, aspiring authors, and community storytellers across Matabeleland and beyond. Through published anthologies, high school competitions, and bilingual airwaves, we safeguard our mother tongue with pride and dignity.
                </p>
                <div className="enter-up flex flex-wrap items-center gap-4 pt-2" style={d(540)}>
                  <Link href="/lessons" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-full shadow-md hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <span>
                      Explore Lessons
                    </span>
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </Link>
                  <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3.5 rounded-full shadow-sm hover:bg-surface-container hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" href="#festival-section">
                    <Icon name="emoji_events" className="text-[18px] text-secondary" />
                    <span>
                      5th Literature Festival 2026
                    </span>
                  </a>
                </div>
                {/* Quick Micro Metric */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3 p-1">
                    {[
                      ["BYO", "bg-primary-container text-on-primary", "Bulawayo"],
                      ["MN", "bg-tertiary-container text-on-tertiary", "Matabeleland North"],
                      ["MS", "bg-secondary text-surface-bright", "Matabeleland South"],
                      ["+5k", "bg-surface-container-highest text-on-surface", "and more"],
                    ].map(([label, tone, title], i) => (
                      <div
                        key={label}
                        title={title}
                        style={d(720 + i * 90)}
                        className={`enter-pop relative h-10 w-10 rounded-full ${tone} flex items-center justify-center font-bold text-[10px] shadow-sm ring-2 ring-secondary-fixed transition-transform duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-110`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="enter-up flex flex-col" style={d(780)}>
                    <span className="font-headline-sm text-headline-sm text-on-secondary-fixed leading-none">
                      <span data-count="">12,000+</span> Young Readers
                    </span>
                    <span className="font-body-sm text-body-sm text-on-secondary-fixed/80">
                      Engaged through books and radio clubs
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Column: Expressive Asymmetric Photo Mosaic */}
              <div className="lg:col-span-5 relative">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7 flex flex-col gap-4 animate-float [animation-delay:-2s]">
                    <div className="enter-wipe relative overflow-hidden rounded-[20px] shadow-md bg-surface-container group" style={d(260)}>
                      <Image src={img080} alt={"Vibrant close-up of cheerful Zimbabwean African school children in modern Bulawayo uniform happily reading colorful illustrated isiNdebele folk storybooks in an outdoor sunlit library courtyard under indigenous acacia trees"} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-surface/90 backdrop-blur-sm">
                        <p className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase">
                          Literacy Workshops
                        </p>
                      </div>
                    </div>
                    <div className="enter-wipe relative overflow-hidden rounded-[20px] shadow-md bg-surface-container group" style={d(460)}>
                      <Image src={img081} alt={"Traditional Ndebele cultural performers in Bulawayo adorned with vibrant beadwork, headbands and shields, passionately performing an energetic folk dance during a high school cultural gala"} className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-surface/90 backdrop-blur-sm">
                        <p className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase">
                          Oral Traditions (Izibongo)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col gap-4 -mt-6 animate-float">
                    <div className="enter-wipe relative overflow-hidden rounded-[20px] shadow-md bg-surface-container group" style={d(360)}>
                      <Image src={img082} alt={"Senior Zimbabwean female author Dr Barbara Makhalisa warmly guiding an eager young African high school student writing poetry in a notebook, smiling inside a Bulawayo library surrounded by wooden bookshelves and African manuscripts"} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-surface/90 backdrop-blur-sm">
                        <p className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase">
                          Mentorship
                        </p>
                      </div>
                    </div>
                    {/* Cultural Pattern Accent Card */}
                    <div className="enter-pop group p-4 rounded-[20px] bg-primary text-on-primary shadow-md flex flex-col justify-between gap-3 min-h-32 transition-transform duration-500 hover:-rotate-2 hover:scale-[1.03]" style={d(760)}>
                      <Icon name="auto_stories" className="text-secondary-fixed text-3xl" />
                      <div>
                        <p className="font-label-cultural-caps text-label-cultural-caps text-secondary-fixed uppercase">
                          IsiNdebele Archive
                        </p>
                        <p className="font-title-editorial text-title-editorial text-surface-bright leading-tight">
                          Over <span data-count="">240</span> folktales preserved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* IMPACT & STATS STRIP */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 -mt-8 z-10" data-reveal="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger="">
            {/* Stat 1 */}
            <div className="group lift bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                <Icon name="festival" className="text-primary text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight" data-count="">
                  5
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Festival Editions
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Annual national celebration elevating mother-tongue writers.
                </p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="group lift bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0">
                <Icon name="groups_3" className="text-on-secondary-fixed text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg text-secondary tracking-tight" data-count="">
                  3-Day
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Grand Gathering
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Uniting authors, schools, and traditional storytellers under one dome.
                </p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="group lift bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0">
                <Icon name="map" className="text-tertiary text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg text-tertiary-container tracking-tight" data-count="">
                  5
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Provinces Reached
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Bulawayo, Mat North, Mat South, Midlands &amp; Masvingo.
                </p>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="group lift bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center shrink-0">
                <Icon name="podcasts" idle className="text-error text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg text-error tracking-tight">
                  Weekly
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Live Radio Show
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Broadcasted live weekly across Skyz Metro FM 100.3.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* NDEBELE LITERATURE FESTIVAL 5TH EDITION SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20" id="festival-section" data-reveal="">
          {/* Traditional Chevron Geometric Trim */}
          <div className="w-full h-3 flex overflow-hidden rounded-t-2xl" data-stagger="">
            <div className="flex-1 bg-[#BA1A1A]" />
            <div className="flex-1 bg-[#F5E700]" />
            <div className="flex-1 bg-[#15157D]" />
            <div className="flex-1 bg-[#004920]" />
            <div className="flex-1 bg-[#1C1B1B]" />
            <div className="flex-1 bg-[#BA1A1A]" />
            <div className="flex-1 bg-[#F5E700]" />
            <div className="flex-1 bg-[#15157D]" />
            <div className="flex-1 bg-[#004920]" />
          </div>
          <div className="bg-surface-container-lowest rounded-b-3xl shadow-sm p-8 lg:p-14">
            {/* Section Header with Official Logo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
              <div className="group lg:col-span-4 flex flex-col items-center justify-center p-6 bg-surface-container-low rounded-2xl text-center">
                <Image src={festivalEmblem} alt={"Ndebele Literature Festival \"Cikoza Sizwe\" emblem"} className="h-44 w-auto object-contain transition-transform duration-700 ease-[var(--ease-spring)] group-hover:-rotate-6 group-hover:scale-105" sizes="(min-width: 768px) 320px, 200px" />
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase mt-3 tracking-widest">
                  Official Festival Emblem
                </span>
              </div>
              <div className="lg:col-span-8 flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">
                  <Icon name="celebration" idle className="text-[16px]" />
                  <span>
                    5th Biennial Gathering • September 2026
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Ndebele Literature Festival:{" "}
                  <span className="text-secondary">
                    “Cikoza Sizwe”
                  </span>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Translated as{" "}
                  <em className="text-on-surface font-semibold">
                    “Be Proud, O Nation”
                  </em>
                  , the 5th edition gathers over 60 schools, renowned Matabeleland authors, folklorists, and civic leaders at the iconic Bulawayo Amphitheatre. Join us as we honour the language that anchors our identity through spirited competitions, performances, and literary symposia.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-on-surface font-body-sm text-body-sm pt-2">
                  <div className="flex items-center gap-2">
                    <Icon name="location_on" className="text-primary text-[20px]" />
                    <span className="font-semibold">
                      Bulawayo Amphitheatre, Zimbabwe
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-outline" />
                  <div className="flex items-center gap-2">
                    <Icon name="calendar_month" className="text-primary text-[20px]" />
                    <span className="font-semibold">
                      September 24 - 26, 2026
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-outline" />
                  <div className="flex items-center gap-2">
                    <Icon name="verified" className="text-primary text-[20px]" />
                    <span>
                      Accredited with NACZ • Ministry of Education
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Guest of Honour Spotlight Card */}
            <div className="group my-8 p-6 lg:p-8 rounded-2xl bg-surface-container flex flex-col md:flex-row items-center gap-6">
              <div className="zoom-media w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shrink-0 shadow-sm bg-surface-container-highest ring-4 ring-secondary-fixed/0 transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                <Image src={img084} alt={"Portrait of Dr Barbara C Makhalisa Nkala, distinguished senior Zimbabwean Ndebele woman author and elder, wearing elegant colorful traditional African attire, glasses, and a warm mentor smile"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
              </div>
              <div className="flex flex-col gap-1 text-left flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-cultural-caps text-label-cultural-caps uppercase">
                    Guest of Honour
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Keynote Patron
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Dr. Barbara C. Makhalisa (Nkala)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  One of Zimbabwe&apos;s earliest published female Ndebele writers, prolific novelist, translator, and founder of Radiant Culture. Dr. Makhalisa will preside over the 2026 Young Writers Laureate Awards and deliver the keynote address on{" "}
                  <em>
                    “Linguistic Heritage as Economic Sovereignty.”
                  </em>
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/about" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-shadow">
                  <span>
                    Read Biography
                  </span>
                  <Icon name="chevron_right" className="text-[16px]" />
                </Link>
              </div>
            </div>
            {/* 8 Pillars / Competitions Grid */}
            <div className="pt-6">
              <div className="flex flex-col gap-2 mb-8">
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-wider">
                  Eight Championship Disciplines
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Festival Pillars &amp; School Trophy Categories
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger="">
                {/* Pillar 1 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                    <Icon name="record_voice_over" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Poetry &amp; Oral Praise (Izibongo)
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Recitation of historic praise poetry commemorating monarchical history, natural landmarks, and contemporary student verse.
                  </p>
                </div>
                {/* Pillar 2 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-surface-bright flex items-center justify-center">
                    <Icon name="theater_comedy" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Stage Drama &amp; Theatre
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    High school theatrical adaptations of canonical Ndebele stage plays dealing with social harmony, ubuntu, and cultural dialogue.
                  </p>
                </div>
                {/* Pillar 3 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center">
                    <Icon name="edit_note" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Creative Essay Writing Awards
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Annual short-story and essay open prize for secondary students across Zimbabwe writing original manuscripts in isiNdebele.
                  </p>
                </div>
                {/* Pillar 4 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                    <Icon name="mic" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Public Speaking &amp; Oratory
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Structured debate and persuasive speech challenges judged on rhetorical eloquence, dialectal depth, and vocabulary mastery.
                  </p>
                </div>
                {/* Pillar 5 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <Icon name="psychology_alt" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Language &amp; Cultural Bowl
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Fast-paced live trivia rounds challenging learners on deep proverbs (izaga), idioms (izitsho), and clan genealogy (izithakazelo).
                  </p>
                </div>
                {/* Pillar 6 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-tint text-on-primary flex items-center justify-center">
                    <Icon name="palette" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Arts, Crafts &amp; Beadwork
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Artistic exhibitions featuring intricate geometric Ndebele beadwork patterns, woven baskets, and hand-bound book illustrations.
                  </p>
                </div>
                {/* Pillar 7 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                    <Icon name="explore" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Heritage Tours &amp; Shrines
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Guided student field excursions to Mhlahlandlela, Old Bulawayo, and Matobo rock art shelters to connect literature with ancestral terrain.
                  </p>
                </div>
                {/* Pillar 8 */}
                <div className="group lift p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-lowest flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-error text-on-error flex items-center justify-center">
                    <Icon name="sports_kabaddi" className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Traditional Attire &amp; Dance
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Grand festival closing pageantry presenting authentic amabhayi attire, ingquzu, and traditional percussion ensembles.
                  </p>
                </div>
              </div>
            </div>
            {/* Past Moments Gallery Strip */}
            <div className="mt-12 pt-8 border-t border-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Moments from Past Festival Galas
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Over 1,800 students from 48 primary and high schools represented in 2024.
                  </p>
                </div>
                <Link href="/events" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary-container text-on-primary font-label-lg text-label-lg px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-primary transition-all">
                  <span>
                    View Highlights &amp; Register School
                  </span>
                  <Icon name="how_to_reg" className="text-[18px]" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-stagger="">
                <div className="zoom-media h-44 rounded-2xl overflow-hidden bg-surface-container">
                  <Image src={img085} alt={"Bulawayo high school students reciting choral poetry together on a bright outdoor amphitheatre stage, dressed in coordinated traditional blue and yellow sashes with expressive hand gestures"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <div className="zoom-media h-44 rounded-2xl overflow-hidden bg-surface-container">
                  <Image src={img086} alt={"An excited young Zimbabwean African schoolgirl joyfully receiving a grand gold trophy and a stack of books at an award ceremony from an elder author in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <div className="zoom-media h-44 rounded-2xl overflow-hidden bg-surface-container">
                  <Image src={img087} alt={"Traditional Zimbabwean drum circle at a cultural festival in Matabeleland, drummers beating cowhide drums with energy while audience claps in harmony"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <div className="zoom-media h-44 rounded-2xl overflow-hidden bg-surface-container">
                  <Image src={img088} alt={"Display table filled with published bilingual children storybooks written in isiNdebele and English with bright graphic covers, surrounded by browsing festival visitors at Bulawayo Amphitheatre"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SKYZ METRO FM 100.3 RADIO CLASSROOM BANNER */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10" data-reveal="">
          <div className="relative overflow-hidden rounded-3xl bg-primary-container text-on-primary p-8 lg:p-12 shadow-md">
            {/* Decorative Soundwaves */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <svg fill="none" height="300" viewBox="0 0 400 300" width="400" xmlns="http://www.w3.org/2000/svg">
                <circle className="radiate" cx="200" cy="150" r="140" stroke="#FFF000" strokeWidth="8" />
                <circle className="radiate" style={{ animationDelay: "1.2s" }} cx="200" cy="150" r="100" stroke="#FFFFFF" strokeWidth="8" />
                <circle className="radiate" style={{ animationDelay: "2.4s" }} cx="200" cy="150" r="60" stroke="#FFF000" strokeWidth="8" />
              </svg>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-error animate-ping" />
                      <span className="relative w-2 h-2 rounded-full bg-error" />
                    </span>
                    <span>
                      LIVE ON AIR • SKYZ METRO FM 100.3
                    </span>
                  </span>
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary-fixed uppercase tracking-wider">
                    Weekly Radio Classroom
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight">
                  Spheth&apos;Imfundw&apos;Emoyeni: The Radio Literature Class
                </h2>
                <p className="font-body-md text-body-md text-primary-fixed leading-relaxed">
                  Every Monday afternoon, tune in from 16:15 to 16:45 CAT on Bulawayo&apos;s premier station. Listen to elders interpret forgotten idioms, hear live call-ins from rural classrooms, and enjoy dramatized oral folklore for the entire family.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/watch" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg px-7 py-3 rounded-full hover:bg-secondary-fixed-dim hover:-translate-y-0.5 shadow-sm transition-all">
                    <Icon name="radio" className="text-[20px]" />
                    <span>
                      Tune In Stream Live
                    </span>
                  </Link>
                  <Link href="/lessons" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-bright font-label-lg text-label-lg px-6 py-3 rounded-full transition-all">
                    <Icon name="podcasts" className="text-[18px]" />
                    <span>
                      Browse Podcast Archive
                    </span>
                  </Link>
                </div>
              </div>
              {/* Featured Episode Card */}
              <Player start={645} duration={1690} className="lift lg:col-span-5 bg-surface-container-lowest text-on-surface p-6 rounded-2xl shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase font-bold">
                    Featured Recent Broadcast
                  </span>
                  <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant font-medium">
                    <Equalizer className="h-4" barClassName="bg-secondary" bars={4} />
                    28 Mins
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <PlayerButton label="Ep. 42: Folk Proverbs & The Clever Hare" className="w-14 h-14 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform shrink-0" />
                  <div className="flex flex-col">
                    <h4 className="font-title-editorial text-title-editorial text-primary font-bold leading-tight">
                      Ep. 42: Folk Proverbs &amp; The Clever Hare (Uvundla)
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Host: Gogo Nomusa Sibanda • Studio 2 Bulawayo
                    </p>
                  </div>
                </div>
                <PlayerProgress className="w-full bg-surface-container rounded-full h-2 flex items-center overflow-hidden" barClassName="bg-secondary" />
                <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <PlayerTime />
                  <span className="group flex items-center gap-1 text-primary font-semibold">
                    <Icon name="download" className="text-[16px]" />
                    <span>
                      MP3 Offline Download
                    </span>
                  </span>
                </div>
              </Player>
            </div>
          </div>
        </section>
        {/* EXPLORE OUR CULTURAL PROGRAMS */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16" data-reveal="">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-wider">
                Educational Horizons
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Explore Our Cultural Programs
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From published children&apos;s story anthologies to creative youth writer clinics and digital multimedia, our programs ensure the vitality of isiNdebele.
              </p>
            </div>
            <Link href="/about" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap text-primary hover:text-secondary font-label-lg text-label-lg transition-colors">
              <span>
                View Full Curriculum &amp; Timeline
              </span>
              <Icon name="east" className="text-[18px]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-stagger="">
            {/* Program Card 1 */}
            <div className="group lift bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="zoom-media relative h-56 overflow-hidden bg-surface-container">
                <Image src={img089} alt={"Cover and interior showcase of high quality illustrated African bilingual children storybook in isiNdebele, lying on a wooden study desk with pencils and African beads"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                {" "}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps uppercase font-bold">
                  Books &amp; Publishing
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Traditional Folktales Anthology
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Over 50 indigenous folklore tales transcribed directly from rural Matabeleland elders, accompanied by vibrant illustrations and parallel English glossaries.
                  </p>
                </div>
                <Link href="/books" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-label-lg transition-colors">
                  <span>
                    Browse Anthology
                  </span>
                  <Icon name="menu_book" className="text-[18px]" />
                </Link>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="group lift bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="zoom-media relative h-56 overflow-hidden bg-surface-container">
                <Image src={img090} alt={"Engaged group of young Zimbabwean university and high school writers collaborating around a wooden table in Bulawayo cultural centre, reviewing manuscript drafts with smiles and enthusiasm"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                {" "}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps uppercase font-bold">
                  Youth Empowerment
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Bulawayo Youth Writing Clinic
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    A 6-week intensive incubator connecting secondary students with published novelists to hone character building, dialectal nuances, and contemporary plot structures.
                  </p>
                </div>
                <Link href="/contact?topic=join" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-label-lg transition-colors">
                  <span>
                    Reserve Seat for Next Cohort
                  </span>
                  <Icon name="event_seat" className="text-[18px]" />
                </Link>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="group lift bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="zoom-media relative h-56 overflow-hidden bg-surface-container">
                <Image src={img091} alt={"Professional media recording studio in Zimbabwe with microphone and lighting setup, filming a cultural educator recording bilingual digital video lessons on African idioms and proverbs"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                {" "}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-cultural-caps text-label-cultural-caps uppercase font-bold">
                  Digital Video Masterclasses
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Proverbs &amp; Idioms Video Series
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    High-definition short-format video lessons unraveling the metaphorical genius of{" "}
                    <em>
                      Izaga leZitsho
                    </em>
                    {" "}with historical context and everyday conversational use.
                  </p>
                </div>
                <Link href="/watch" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-label-lg transition-colors">
                  <span>
                    Watch Video Episodes
                  </span>
                  <Icon name="play_circle" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* PARTNERS & SUPPORTERS SECTION */}
        <section className="w-full bg-surface-container-low py-16" data-reveal="">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest">
              Collaborative Alliances
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-3">
              Our Partners &amp; Supporters
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10">
              Heartfelt gratitude to the cultural trusts, governmental bodies, and media partners championing mother-tongue education across Zimbabwe.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8" data-stagger="">
              <div className="group lift px-6 py-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
                <Icon name="account_balance" className="text-primary text-2xl" />
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  National Arts Council of Zimbabwe (NACZ)
                </span>
              </div>
              <div className="group lift px-6 py-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
                <Icon name="radio" className="text-error text-2xl" />
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Skyz Metro FM 100.3
                </span>
              </div>
              <div className="group lift px-6 py-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
                <Icon name="school" className="text-tertiary text-2xl" />
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Ministry of Primary &amp; Secondary Education
                </span>
              </div>
              <div className="group lift px-6 py-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
                <Icon name="diversity_3" className="text-secondary text-2xl" />
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Matabeleland Cultural Society
                </span>
              </div>
              <div className="group lift px-6 py-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
                <Icon name="location_city" className="text-primary text-2xl" />
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  City of Bulawayo (Cultural Quarter)
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* GRAND CALL TO ACTION BANNER */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16" data-reveal="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary-fixed p-10 lg:p-16 text-center shadow-lg">
            {/* Traditional Geometric Decorative Ring */}
            <div className="absolute -left-16 -top-16 w-56 h-56 rounded-full border-8 border-dashed border-primary/15 pointer-events-none animate-spin-slow" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full border-8 border-dashed border-primary/15 pointer-events-none animate-spin-slow [animation-direction:reverse]" />
            <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
              <span className="font-label-cultural-caps text-label-cultural-caps text-on-secondary-fixed uppercase tracking-widest font-black">
                Join The Literary Renaissance
              </span>
              <h2 className="font-display-hero text-display-hero text-on-secondary-fixed font-black tracking-tight leading-none">
                Be Part of the Story!
              </h2>
              <p className="font-body-lg text-body-lg text-on-secondary-fixed/90 leading-relaxed">
                Whether you are a teacher looking to introduce our dual-language books in your school, a writer eager to enter the 2026 Festival competitions, or a diaspora family seeking authentic mother-tongue reading apps, we welcome you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link href="/mobile-app" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full shadow-md hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <Icon name="install_mobile" className="text-[20px]" />
                  <span>
                    Download Mobile App
                  </span>
                </Link>
                <Link href="/contact" className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-4 rounded-full shadow-sm hover:bg-surface-container hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Icon name="mail" className="text-[20px]" />
                  <span>
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
