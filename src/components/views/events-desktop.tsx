import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { SaveDateButton, YearEmpty, YearFilterProvider, YearItem, YearTabs } from "@/components/events/event-tools";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { GalleryProvider, GalleryTrigger } from "@/components/ui/gallery";
import { Link } from "@/components/ui/link";
import { MediaTrigger } from "@/components/ui/media-modal";
import { SITE } from "@/lib/site";
import festivalEmblem from "@/assets/brand/festival-emblem.png";
import img051 from "@/assets/images/events/051.webp";
import img052 from "@/assets/images/events/052.webp";
import img053 from "@/assets/images/events/053.webp";
import img054 from "@/assets/images/events/054.webp";
import img055 from "@/assets/images/events/055.webp";
import img056 from "@/assets/images/events/056.webp";
import img057 from "@/assets/images/events/057.webp";
import img058 from "@/assets/images/events/058.webp";
import img059 from "@/assets/images/events/059.webp";
import img060 from "@/assets/images/events/060.webp";
import img061 from "@/assets/images/events/061.webp";
import img062 from "@/assets/images/events/062.webp";
import img063 from "@/assets/images/events/063.webp";
import img064 from "@/assets/images/events/064.webp";
import img065 from "@/assets/images/events/065.webp";
import img066 from "@/assets/images/events/066.webp";
import img067 from "@/assets/images/events/067.webp";
import img068 from "@/assets/images/events/068.webp";

export function EventsDesktop() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* Top Hero Header / Breadcrumb Section */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-14 lg:py-20">
          {/* Subtle Geometric Ndebele Watermark Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
            <svg className="w-full h-full object-cover enter-fade" fill="none" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
              <pattern height="120" id="ndebele-hero-pat" patternUnits="userSpaceOnUse" width="120">
                <polygon fill="#15157d" points="60,10 110,60 60,110 10,60" stroke="#f2e400" strokeWidth="4" />
                <polygon fill="#f2e400" points="60,30 90,60 60,90 30,60" />
                <line stroke="#003013" strokeWidth="2" x1="0" x2="120" y1="0" y2="120" />
                <line stroke="#003013" strokeWidth="2" x1="120" x2="0" y1="0" y2="120" />
              </pattern>
              <rect fill="url(#ndebele-hero-pat)" height="100%" width="100%" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start gap-6">
            {/* Breadcrumb */}
            <nav className="enter-up flex items-center gap-2 font-label-md text-label-md text-on-surface-variant" style={d(0)}>
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <Icon name="chevron_right" className="text-[14px]" />
              <span className="text-primary font-semibold">
                Events
              </span>
            </nav>
            {/* Badge Pill */}
            <div className="enter-pop inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps shadow-sm" style={d(120)}>
              <Icon name="celebration" idle className="text-[16px]" />
              <span>
                COMMUNITY GATHERINGS &amp; FESTIVALS
              </span>
            </div>
            {/* Main Headline & Subtitle */}
            <div className="max-w-4xl space-y-4">
              <h1 className="font-headline-lg text-headline-lg text-on-surface text-primary tracking-tight">
                <SplitWords text="Cultural Gatherings, Literary Festivals & Community Workshops" delay={160} />
              </h1>
              <p className="enter-up font-body-lg text-body-lg text-on-surface-variant max-w-3xl" style={d(460)}>
                Experience the vibrant living tradition of isiNdebele literature across Matabeleland and beyond through our landmark annual festivals, youth clinics, and radio broadcasts.
              </p>
            </div>
            {/* Jump Anchors Bar */}
            <div className="enter-up flex flex-wrap items-center gap-3 pt-4" style={d(580)}>
              <a className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:-translate-y-0.5 bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md hover:bg-primary-container transition-all" href="#upcoming">
                <Icon name="event" className="text-[18px]" />
                <span>
                  Upcoming Events
                </span>
              </a>
              <a className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:-translate-y-0.5 bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-variant transition-all" href="#spotlight">
                <Icon name="auto_awesome" className="text-[18px]" />
                <span>
                  Event Detail Spotlight
                </span>
              </a>
              <a className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:-translate-y-0.5 bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-variant transition-all" href="#archives">
                <Icon name="history_edu" className="text-[18px]" />
                <span>
                  Past Archives
                </span>
              </a>
              <a className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:-translate-y-0.5 bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-lg text-label-lg transition-all shadow-sm" href="#partner">
                <Icon name="add_circle" className="text-[18px]" />
                <span>
                  Submit an Event
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* SECTION 1: UPCOMING EVENTS */}
        <section className="w-full py-16 lg:py-24 bg-surface" id="upcoming" data-reveal="">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest">
                  Calendar 2026
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-1">
                  Upcoming Gatherings
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Join our open public symposiums, academic symposiums, and community reading days across Zimbabwe.
              </p>
            </div>
            {/* Upcoming Events Stack */}
            <div className="flex flex-col gap-8">
              {/* Card 1: Major Flagship Event */}
              <article className="relative bg-surface-container-lowest rounded-lg p-6 lg:p-10 shadow-sm lift group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-stagger="">
                  {/* Date Badge */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center p-5 rounded-2xl bg-secondary-fixed text-on-secondary-fixed text-center shadow-sm transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                    <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-secondary">
                      SEP 2026
                    </span>
                    <span className="font-display-hero text-display-hero leading-none my-1 font-black">
                      24
                    </span>
                    <span className="font-label-md text-label-md">
                      3-Day Festival
                    </span>
                  </div>
                  {/* Content Area */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-cultural-caps text-label-cultural-caps">
                        Flagship Biennial Festival
                      </span>
                      <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <Icon name="schedule" className="text-[16px] text-primary" />
                        08:30 AM – 17:00 PM Daily
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      5th Biennial Ndebele Literature Festival: Cikoza Sizwe
                    </h3>
                    <div className="flex items-center gap-2 font-body-sm text-body-sm text-secondary font-medium">
                      <Icon name="location_on" className="text-[18px]" />
                      <span>
                        Bulawayo Amphitheatre &amp; Centenary Park, Bulawayo
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      Bringing together over 1,500 students, 60 schools, educators, and cultural elders across Bulawayo, Matabeleland North &amp; South, Midlands, and Masvingo for 3 days of poetry, dramatic arts, public speaking, and book launches. Keynote address by Dr. Barbara C. Makhalisa.
                    </p>
                  </div>
                  {/* Actions CTA */}
                  <div className="lg:col-span-3 flex flex-col gap-3 w-full self-center">
                    <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all" href="/contact?topic=registration&event=cikoza-sizwe-2026">
                      <span>
                        Register for Event
                      </span>
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </Link>
                    <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors" href="/contact?topic=school-packet">
                      <Icon name="description" className="text-[18px]" />
                      <span>
                        Request School Packet
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
              {/* Card 2: Youth Clinic */}
              <article className="relative bg-surface-container-lowest rounded-lg p-6 lg:p-10 shadow-sm lift group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-stagger="">
                  {/* Date Badge */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container text-on-surface text-center">
                    <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-on-surface-variant">
                      MAY 2026
                    </span>
                    <span className="font-display-hero text-display-hero leading-none my-1 font-black text-primary">
                      16
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Saturday Intake
                    </span>
                  </div>
                  {/* Content Area */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps">
                        Youth Clinic
                      </span>
                      <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <Icon name="schedule" className="text-[16px] text-tertiary" />
                        10:00 AM – 14:00 PM (Weekly for 6 Weeks)
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Bulawayo Youth Creative Writing Masterclass
                    </h3>
                    <div className="flex items-center gap-2 font-body-sm text-body-sm text-secondary font-medium">
                      <Icon name="location_on" className="text-[18px]" />
                      <span>
                        Bulawayo Arts Precinct &amp; City Library
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      A 6-week intensive workshop for secondary school learners focusing on short story structure, idiomatic nuances, and contemporary fiction writing in isiNdebele. Mentored by award-winning regional playwrights.
                    </p>
                  </div>
                  {/* Actions CTA */}
                  <div className="lg:col-span-3 flex flex-col gap-3 w-full self-center">
                    <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all" href="/contact?topic=registration&event=youth-writing-masterclass">
                      <span>
                        Learn More
                      </span>
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </Link>
                    <SaveDateButton
                      title="Bulawayo Youth Creative Writing Masterclass"
                      start="2026-05-16T10:00"
                      end="2026-05-16T14:00"
                      location="Bulawayo Arts Precinct & City Library, Bulawayo"
                      details="6-week isiNdebele creative writing workshop for secondary school learners (Saturdays)."
                      className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors"
                    >
                      <Icon name="bookmark_add" className="text-[18px]" />
                      <span>
                        Save Date
                      </span>
                    </SaveDateButton>
                  </div>
                </div>
              </article>
              {/* Card 3: Cultural Heritage */}
              <article className="relative bg-surface-container-lowest rounded-lg p-6 lg:p-10 shadow-sm lift group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-stagger="">
                  {/* Date Badge */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container text-on-surface text-center">
                    <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-on-surface-variant">
                      JUN 2026
                    </span>
                    <span className="font-display-hero text-display-hero leading-none my-1 font-black text-primary">
                      19
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Evening Session
                    </span>
                  </div>
                  {/* Content Area */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps">
                        Cultural Heritage
                      </span>
                      <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <Icon name="nightlight" className="text-[16px] text-primary" />
                        17:30 PM – 21:00 PM
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Heritage Oral Storytelling &amp; Izibongo Recital Night
                    </h3>
                    <div className="flex items-center gap-2 font-body-sm text-body-sm text-secondary font-medium">
                      <Icon name="location_on" className="text-[18px]" />
                      <span>
                        Mhlahlandlela Cultural Grounds, Matobo Outskirts
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      An open-air evening symposium featuring live praise poetry (Izibongo), elder folktale narrations, and acoustic traditional musical performances under the stars with communal campfires and dialogue.
                    </p>
                  </div>
                  {/* Actions CTA */}
                  <div className="lg:col-span-3 flex flex-col gap-3 w-full self-center">
                    <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all" href="/contact?topic=registration&event=izibongo-recital-night">
                      <span>
                        Learn More
                      </span>
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </Link>
                    <a className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 px-6 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors" href="https://www.google.com/maps/search/?api=1&query=Mhlahlandlela+Cultural+Grounds+Matobo+Zimbabwe" target="_blank" rel="noopener noreferrer">
                      <Icon name="location_searching" className="text-[18px]" />
                      <span>
                        Venue Directions
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* SECTION 2: EVENT DETAIL VIEW (FEATURED EXPANDED SHOWCASE) */}
        <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="spotlight" data-reveal="">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
            {/* Section Intro Header */}
            <div className="flex flex-col items-start gap-2">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest">
                Featured Retrospective Spotlight
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Cikoza Sizwe: The 4th Ndebele Literature Festival (Bulawayo 2024)
              </h2>
            </div>
            {/* Spotlight Main Card Container */}
            <div className="bg-surface-container-lowest rounded-lg p-8 lg:p-12 shadow-md flex flex-col gap-10">
              {/* Header Banner with Official Emblem & High Stats */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 bg-surface-container rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-6">
                  {/* Official Festival Emblem from reference */}
                  <div className="group w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-surface-container-lowest p-2 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <Image src={festivalEmblem} alt={"Ndebele Literature Festival \"Cikoza Sizwe\" emblem"} className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" sizes="(min-width: 768px) 320px, 200px" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest">
                      Official Flagship Recap
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold leading-tight">
                      Cikoza Sizwe 2024 Edition
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Held at Bulawayo Amphitheatre • September 26 - 28, 2024
                    </p>
                  </div>
                </div>
                {/* Attendance & Metric Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto" data-stagger="">
                  <div className="bg-surface-container-lowest rounded-xl p-3 text-center shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-primary font-black block" data-count="">
                      1,400+
                    </span>
                    {" "}
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Youth Attendees
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-3 text-center shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-secondary font-black block" data-count="">
                      48
                    </span>
                    {" "}
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Schools Represented
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-3 text-center shadow-sm col-span-2 sm:col-span-1">
                    <span className="font-headline-sm text-headline-sm text-tertiary-container font-black block" data-count="">
                      12
                    </span>
                    {" "}
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      New Books Unveiled
                    </span>
                  </div>
                </div>
              </div>
              {/* Comprehensive Event Overview Text */}
              <div className="prose max-w-none text-on-surface-variant">
                <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                  The 4th iteration of the biennial{" "}
                  <span className="font-semibold text-primary">
                    Cikoza Sizwe
                  </span>
                  {" "}literary carnival established unprecedented benchmarks for indigenous linguistic advocacy in Zimbabwe. Gathering high school delegations, veteran novelists, and oral historians, the 3-day symposium celebrated poetry recitation, dramatic stage adaptations of classic Ndebele literature, and bilingual publication clinics.
                </p>
                <p className="font-body-md text-body-md mt-4 text-on-surface-variant leading-relaxed">
                  Highlights included the historic inter-school Izibongo Poetry Slam won by Mpopoma High School, masterclasses by acclaimed author Dr. Barbara C. Makhalisa, and the unveiling of eight brand new primary school readers curated directly through Indlu Yokufundela&apos;s communal archival initiative.
                </p>
              </div>
              {/* Photo Gallery (4 High-fidelity images) */}
              <GalleryProvider items={[{ image: img051, alt: "Traditional dancers in Ndebele beadwork performing on an outdoor stage in Bulawayo", caption: "Traditional Dance & Royal Attire Showcase", sub: "Opening ceremonial dance troupes representing Matabeleland heritage." }, { image: img052, alt: "A high school student reciting praise poetry into a microphone at the amphitheatre", caption: "High School Izibongo Poetry Laureates", sub: "Students delivering competitive declamations in isiNdebele." }, { image: img053, alt: "A book fair pavilion stacked with isiNdebele storybooks and browsing teachers", caption: "Curriculum & Book Fair Pavilion", sub: "Distributing over 3,000 subsidized indigenous story readers." }, { image: img054, alt: "An elder author delivering the keynote address at the podium", caption: "Keynote Address by Veteran Authors", sub: "Pioneering author Dr. Barbara C. Makhalisa delivering remarks." }]}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Festival Gallery Showcase
                  </h4>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    4 Moments Captured · tap to enlarge
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger="">
                  {/* Photo 1 */}
                  <div className="flex flex-col gap-2">
                    <GalleryTrigger index={0} className="zoom-media block w-full h-56 rounded-2xl overflow-hidden shadow-sm relative">
                      <Image src={img051} alt={"Vibrant African traditional dancers wearing colorful Ndebele beadwork and headdresses performing joyfully on an outdoor stage in Bulawayo under warm golden sunlight, surrounded by enthusiastic high school audiences"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <span className="font-title-editorial text-title-editorial text-on-surface font-semibold text-sm">
                      Traditional Dance &amp; Royal Attire Showcase
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      Opening ceremonial dance troupes representing Matabeleland heritage.
                    </p>
                  </div>
                  {/* Photo 2 */}
                  <div className="flex flex-col gap-2">
                    <GalleryTrigger index={1} className="zoom-media block w-full h-56 rounded-2xl overflow-hidden shadow-sm relative">
                      <Image src={img052} alt={"Passionate young Zimbabwean high school student reciting praise poetry into a microphone with expressive gestures, wearing school blazer and cultural scarf at an amphitheatre podium"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <span className="font-title-editorial text-title-editorial text-on-surface font-semibold text-sm">
                      High School Izibongo Poetry Laureates
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      Students delivering competitive declamations in isiNdebele.
                    </p>
                  </div>
                  {/* Photo 3 */}
                  <div className="flex flex-col gap-2">
                    <GalleryTrigger index={2} className="zoom-media block w-full h-56 rounded-2xl overflow-hidden shadow-sm relative">
                      <Image src={img053} alt={"Bustling outdoor literary book fair pavilion tent with tables stacked with colorful isiNdebele children's storybooks, readers, and school teachers browsing titles"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <span className="font-title-editorial text-title-editorial text-on-surface font-semibold text-sm">
                      Curriculum &amp; Book Fair Pavilion
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      Distributing over 3,000 subsidized indigenous story readers.
                    </p>
                  </div>
                  {/* Photo 4 */}
                  <div className="flex flex-col gap-2">
                    <GalleryTrigger index={3} className="zoom-media block w-full h-56 rounded-2xl overflow-hidden shadow-sm relative">
                      <Image src={img054} alt={"Distinguished elderly African female author speaking gracefully at a podium with glasses and royal blue shawl, presenting the keynote address to a rapt audience"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <span className="font-title-editorial text-title-editorial text-on-surface font-semibold text-sm">
                      Keynote Address by Veteran Authors
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      Pioneering author Dr. Barbara C. Makhalisa delivering remarks.
                    </p>
                  </div>
                </div>
              </div>
              </GalleryProvider>
              {/* Video Gallery (2 Video Thumbnails with Play Overlays) */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Festival Recorded Highlights &amp; Broadcasts
                  </h4>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Archived Media
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Video 1 */}
                  <div className="flex flex-col gap-3">
                    <MediaTrigger media={{ image: img055, alt: "Wide shot of the crowded Bulawayo amphitheatre during the festival finale", title: "Highlights Reel: 2024 Festival Grand Finale", description: "Complete ceremony, trophy distributions, and choral performances.", seconds: 1125, kind: "video", meta: "Cikoza Sizwe 2024" }} className="zoom-media relative block w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                      <Image src={img055} alt={"Wide cinematic shot of the crowded Bulawayo amphitheater filled with singing schoolchildren and banner reading Cikoza Sizwe with dramatic natural afternoon sunlight"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Icon name="play_arrow" className="text-[32px]" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-md text-label-md backdrop-blur-sm">
                        18:45 mins
                      </span>
                    </MediaTrigger>
                    <div className="flex flex-col">
                      <span className="font-title-editorial text-title-editorial text-on-surface font-bold">
                        Highlights Reel: 2024 Festival Grand Finale
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Complete ceremony, trophy distributions, and choral performances.
                      </span>
                    </div>
                  </div>
                  {/* Video 2 */}
                  <div className="flex flex-col gap-3">
                    <MediaTrigger media={{ image: img056, alt: "Two student poetry teams competing on stage in Bulawayo", title: "Poetry Slam Championship: Mpopoma High vs Luveve High", description: "Watch the dramatic final round of the National Youth Izibongo Cup.", seconds: 740, kind: "video", meta: "Cikoza Sizwe 2024" }} className="zoom-media relative block w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                      <Image src={img056} alt={"Two student poetry teams competing on stage in Bulawayo with microphones, intense expressive theatrical recitation, warm theater lighting"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Icon name="play_arrow" className="text-[32px]" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-md text-label-md backdrop-blur-sm">
                        12:20 mins
                      </span>
                    </MediaTrigger>
                    <div className="flex flex-col">
                      <span className="font-title-editorial text-title-editorial text-on-surface font-bold">
                        Poetry Slam Championship: Mpopoma High vs Luveve High
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Watch the dramatic final round of the National Youth Izibongo Cup.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Download & Press Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 bg-surface-container-low p-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Icon name="folder_open" idle hover="tilt" className="text-[28px] text-primary" />
                  <div className="flex flex-col">
                    <span className="font-title-editorial text-title-editorial text-on-surface font-bold">
                      Festival Documentation &amp; Media Kit
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Official reports, winning poems anthology, and high-resolution press releases.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all" href="/contact?topic=anthology&year=2024">
                    <Icon name="download" className="text-[18px]" />
                    <span>
                      Request the 2024 Festival Anthology (PDF)
                    </span>
                  </Link>
                  <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-lg text-label-lg transition-colors" href="/contact?topic=press">
                    <Icon name="newspaper" className="text-[18px]" />
                    <span>
                      Press &amp; Media Enquiries
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3: PAST EVENTS ARCHIVE */}
        <YearFilterProvider years={["2025", "2024", "2023", "2022", "2020", "2018"]} itemYears={["2024", "2023", "2022", "2020"]}>
        <section className="w-full py-16 lg:py-24 bg-surface" id="archives" data-reveal="">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest">
                  Historical Retrospective
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-1">
                  Past Events Archive
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Explore past community gatherings, provincial outreach initiatives, and radio storytelling sessions since 2018.
              </p>
            </div>
            {/* Year Filter Tabs */}
            <YearTabs variant="desktop" />
            {/* Grid of Past Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Archive Card 1 */}
              <YearItem year="2024">
              <GalleryProvider items={[{ image: img057, alt: "Debate team preparing in Lupane", caption: "Debate team preparing in Lupane" }, { image: img058, alt: "Students receiving achievement certificates", caption: "Students receiving achievement certificates" }, { image: img059, alt: "Rural students and teachers in a community hall", caption: "Rural students and teachers in a community hall" }]}>
              <article className="bg-surface-container-lowest rounded-lg p-6 lg:p-8 shadow-sm flex flex-col justify-between gap-6 lift group h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps">
                      OCT 2024
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Academic Competition
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Provincial High School Debate &amp; Essay Championship
                  </h3>
                  <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary font-medium">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>
                      Lupane Community Hall, Matabeleland North
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    32 district secondary schools competed exclusively in isiNdebele debating historical philosophy and contemporary technological integration in indigenous tongues.
                  </p>
                  {/* Mini Photo Carousel / Strip (3 photos) */}
                  <div className="grid grid-cols-3 gap-2 pt-2" data-stagger="">
                    <GalleryTrigger index={0} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img057} alt={"High school debate team gathered around a wooden table in Lupane, Zimbabwe with notebooks and enthusiastic hand gestures"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={1} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img058} alt={"Award ceremony with two students receiving certificates of linguistic achievement from an educator in Lupane"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={2} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img059} alt={"Audience of smiling rural students and teachers listening in a sunny community hall in Matabeleland"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                  </div>
                  {/* Video Thumbnail Snippet */}
                  <MediaTrigger media={{ image: img057, alt: "Debate team preparing in Lupane", title: "Grand Final Debate: Lupane vs Fatima High", description: "The provincial championship final, debated entirely in isiNdebele.", seconds: 850, kind: "video", meta: "Lupane · Oct 2024" }} className="flex w-full items-center gap-3 p-3 bg-surface-container rounded-xl transition-colors hover:bg-primary-fixed">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                      <Icon name="play_arrow" filled className="text-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                        Grand Final Debate: Lupane vs Fatima High
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Video Archive • 14:10 mins
                      </span>
                    </div>
                  </MediaTrigger>
                </div>
                <GalleryTrigger index={0} label="Open event gallery" className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline self-start pt-2 cursor-pointer">
                  <span>
                    View Gallery &amp; Report
                  </span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </GalleryTrigger>
              </article>
              </GalleryProvider>
              </YearItem>
              {/* Archive Card 2 */}
              <YearItem year="2023">
              <GalleryProvider items={[{ image: img060, alt: "The mobile library van in Gwanda", caption: "The mobile library van in Gwanda" }, { image: img061, alt: "A volunteer reading aloud outdoors", caption: "A volunteer reading aloud outdoors" }, { image: img062, alt: "Book boxes ready for delivery", caption: "Book boxes ready for delivery" }]}>
              <article className="bg-surface-container-lowest rounded-lg p-6 lg:p-8 shadow-sm flex flex-col justify-between gap-6 lift group h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps">
                      AUG 2023
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Rural Library Outreach
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Matabeleland South Rural Book Drive &amp; Mobile Library Tour
                  </h3>
                  <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary font-medium">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>
                      Gwanda Arts Center &amp; Surrounding Rural Schools
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Equipped 18 remote primary schools with customized isiNdebele dual-language book boxes and conducted open-air reading camps reaching over 2,200 rural children.
                  </p>
                  {/* Mini Photo Strip (3 photos) */}
                  <div className="grid grid-cols-3 gap-2 pt-2" data-stagger="">
                    <GalleryTrigger index={0} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img060} alt={"Mobile library van parked under an acacia tree in Gwanda, surrounded by children carrying freshly donated books"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={1} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img061} alt={"Volunteer reading aloud to a circle of seated young students outdoors on sunny red soil in rural Matabeleland"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={2} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img062} alt={"Stacked wooden book boxes filled with colorful illustrated books in Gwanda Arts Center"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                  </div>
                  {/* Video Thumbnail Snippet */}
                  <MediaTrigger media={{ image: img060, alt: "The mobile library van in Gwanda", title: "Documentary: The Journey of the Book Boxes", description: "Following the mobile library across Matabeleland South.", seconds: 585, kind: "video", meta: "Gwanda · Aug 2023" }} className="flex w-full items-center gap-3 p-3 bg-surface-container rounded-xl transition-colors hover:bg-primary-fixed">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                      <Icon name="play_arrow" filled className="text-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                        Documentary: The Journey of the Book Boxes
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Video Archive • 09:45 mins
                      </span>
                    </div>
                  </MediaTrigger>
                </div>
                <GalleryTrigger index={0} label="Open event gallery" className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline self-start pt-2 cursor-pointer">
                  <span>
                    View Gallery &amp; Report
                  </span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </GalleryTrigger>
              </article>
              </GalleryProvider>
              </YearItem>
              {/* Archive Card 3 */}
              <YearItem year="2022">
              <GalleryProvider items={[{ image: img063, alt: "Opening ribbon ceremony, 2022", caption: "Opening ribbon ceremony, 2022" }, { image: img064, alt: "An elder narrating clan history on stage", caption: "An elder narrating clan history on stage" }, { image: img065, alt: "Young authors signing their debut anthologies", caption: "Young authors signing their debut anthologies" }]}>
              <article className="bg-surface-container-lowest rounded-lg p-6 lg:p-8 shadow-sm flex flex-col justify-between gap-6 lift group h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps">
                      SEP 2022
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Inaugural Biennial
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Inaugural Ndebele Literature Festival (Cikoza Sizwe 1st Edition)
                  </h3>
                  <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary font-medium">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>
                      Bulawayo Amphitheatre, Bulawayo
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The foundational gathering that launched the modern revival movement, featuring over 900 delegates, traditional elders reciting clan histories, and regional publishers.
                  </p>
                  {/* Mini Photo Strip (3 photos) */}
                  <div className="grid grid-cols-3 gap-2 pt-2" data-stagger="">
                    <GalleryTrigger index={0} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img063} alt={"Archival photograph of the opening ribbon ceremony at the first Ndebele Literature Festival in 2022 in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={1} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img064} alt={"Traditional elder wearing ceremonial leopard skin headband narrating historical Ndebele history on stage"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={2} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img065} alt={"Young authors signing copies of their debut anthologies at a literature stall"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                  </div>
                  {/* Video Thumbnail Snippet */}
                  <MediaTrigger media={{ image: img063, alt: "Opening ribbon ceremony, 2022", title: "Festival Launch Retrospective: The Birth of Cikoza Sizwe", description: "How the first Ndebele Literature Festival came together.", seconds: 1275, kind: "video", meta: "Bulawayo · Sep 2022" }} className="flex w-full items-center gap-3 p-3 bg-surface-container rounded-xl transition-colors hover:bg-primary-fixed">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                      <Icon name="play_arrow" filled className="text-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                        Festival Launch Retrospective: The Birth of Cikoza Sizwe
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Video Archive • 21:15 mins
                      </span>
                    </div>
                  </MediaTrigger>
                </div>
                <GalleryTrigger index={0} label="Open event gallery" className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline self-start pt-2 cursor-pointer">
                  <span>
                    View Gallery &amp; Report
                  </span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </GalleryTrigger>
              </article>
              </GalleryProvider>
              </YearItem>
              {/* Archive Card 4 */}
              <YearItem year="2020">
              <GalleryProvider items={[{ image: img066, alt: "A broadcaster live in Studio 2", caption: "A broadcaster live in Studio 2" }, { image: img067, alt: "Schoolchildren visiting the radio studio", caption: "Schoolchildren visiting the radio studio" }, { image: img068, alt: "The mixing console for the Usisi Omkhulu series", caption: "The mixing console for the Usisi Omkhulu series" }]}>
              <article className="bg-surface-container-lowest rounded-lg p-6 lg:p-8 shadow-sm flex flex-col justify-between gap-6 lift group h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-cultural-caps text-label-cultural-caps">
                      NOV 2020
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Radio &amp; Media
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Launch of Skyz Metro FM Radio Storytelling Series
                  </h3>
                  <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary font-medium">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>
                      Studio 2, Skyz Metro FM, Bulawayo
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Broadcast debut of the weekly Usisi Omkhulu children&apos;s radio program, transmitting oral folktales, riddles, and proverbs to over 350,000 households weekly across Matabeleland.
                  </p>
                  {/* Mini Photo Strip (3 photos) */}
                  <div className="grid grid-cols-3 gap-2 pt-2" data-stagger="">
                    <GalleryTrigger index={0} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img066} alt={"Radio broadcaster in sound studio with professional headphones and microphone speaking live into Skyz Metro FM console in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={1} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img067} alt={"Schoolchildren visiting a radio broadcast studio in Bulawayo, laughing with headphones on"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                    <GalleryTrigger index={2} className="zoom-media block h-20 w-full rounded-xl overflow-hidden">
                      <Image src={img068} alt={"Sound mixing console and manuscript pages for Usisi Omkhulu radio series in Studio 2"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    </GalleryTrigger>
                  </div>
                  {/* Video Thumbnail Snippet */}
                  <MediaTrigger media={{ image: img066, alt: "A broadcaster live in Studio 2", title: "First On-Air Broadcast: Usisi Omkhulu Special", description: "The debut episode of the weekly children’s radio programme.", seconds: 2700, kind: "audio", meta: "Skyz Metro FM · Nov 2020" }} className="flex w-full items-center gap-3 p-3 bg-surface-container rounded-xl transition-colors hover:bg-primary-fixed">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                      <Icon name="mic" className="text-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                        First On-Air Broadcast: Usisi Omkhulu Special
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Audio Archive • 45:00 mins
                      </span>
                    </div>
                  </MediaTrigger>
                </div>
                <GalleryTrigger index={0} label="Open event gallery" className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline self-start pt-2 cursor-pointer">
                  <span>
                    View Gallery &amp; Report
                  </span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </GalleryTrigger>
              </article>
              </GalleryProvider>
              </YearItem>
              <YearEmpty />
            </div>
          </div>
        </section>
        </YearFilterProvider>
        {/* SECTION 4: CALL TO ACTION STRIP */}
        <section className="w-full bg-secondary-fixed text-on-secondary-fixed py-16 lg:py-20 relative overflow-hidden" id="partner" data-reveal="">
          {/* Geometric Accents */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-end">
            <svg className="h-full w-auto animate-spin-slow" fill="currentColor" viewBox="0 0 200 200">
              <polygon points="100,20 180,100 100,180 20,100" />
              <polygon fill="none" points="100,50 150,100 100,150 50,100" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-cultural-caps text-label-cultural-caps text-on-secondary-fixed uppercase tracking-widest font-black">
                COLLABORATIVE PARTNERSHIPS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-secondary-fixed font-black tracking-tight leading-tight">
                Hosting a Cultural or School Reading Event?
              </h2>
              <p className="font-body-lg text-body-lg text-on-secondary-fixed font-medium leading-relaxed">
                Partner with Indlu Yokufundela to bring literature workshops, book supplies, and radio coverage to your school or community center.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all" href={`mailto:${SITE.email}?subject=Event%20partnership`}>
                <span>
                  Partner With Us
                </span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </a>
              <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto px-8 py-4 rounded-full bg-on-secondary-fixed/10 hover:bg-on-secondary-fixed/20 text-on-secondary-fixed font-label-lg text-label-lg transition-all" href="/contact?topic=events">
                <Icon name="mail" className="text-[20px]" />
                <span>
                  Contact Event Team
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
