import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { Link } from "@/components/ui/link";
import { SnapCarousel } from "@/components/ui/snap-carousel";
import { SITE } from "@/lib/site";
import img020 from "@/assets/images/about/020.webp";
import img021 from "@/assets/images/about/021.webp";
import img022 from "@/assets/images/about/022.webp";
import img023 from "@/assets/images/about/023.webp";
import img024 from "@/assets/images/about/024.webp";
import img025 from "@/assets/images/about/025.webp";
import img026 from "@/assets/images/about/026.webp";
import img027 from "@/assets/images/about/027.webp";
import img028 from "@/assets/images/about/028.webp";
import img029 from "@/assets/images/about/029.webp";

export function AboutMobile() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      <div className="flex flex-col w-full">
        {/* SECTION 1: OUR STORY */}
        <section className="px-margin pt-space-md pb-space-lg flex flex-col gap-space-md">
          {/* Header Pill Badge & Heading */}
          <div className="flex flex-col gap-space-xs">
            <div className="enter-up self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container shadow-sm" style={d(0)}>
              <Icon name="menu_book" className="text-[16px]" />
              <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider">
                About Indlu Yokufundela
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight mt-1">
              <SplitWords text="Revitalizing Language, Empowering Generations" delay={100} />
            </h1>
            <p className="enter-up font-body-md text-body-md text-on-surface-variant" style={d(360)}>
              Championing the living ethos of{" "}
              <span className="font-semibold text-primary">
                Spheth&apos;Imfundw&apos;Emoyeni
              </span>
              {" "}through community literacy, modern publishing, and creative youth empowerment across Matabeleland.
            </p>
          </div>
          {/* Editorial Story Image */}
          <div className="enter-wipe relative w-full h-56 rounded-[20px] overflow-hidden shadow-sm" style={d(480)}>
            <Image src={img020} alt={"Vibrant group of young Zimbabwean high school students outdoors in Bulawayo, joyfully reading colorful illustrated African storybooks together under warm acacia sunlight, wearing smart uniforms, surrounded by cultural books and bright royal blue and sun yellow book covers"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary-fixed tracking-widest uppercase">
                Bulawayo Arts Precinct • Reading Circle
              </span>
            </div>
          </div>
          {/* Narrative Story Cards */}
          <div className="flex flex-col gap-space-sm" data-stagger="">
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <Icon name="history_edu" className="text-[20px]" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                The Founding Vision
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Established in Bulawayo to counter the declining availability of indigenous language texts, Indlu Yokufundela was conceived by educators, writers, and cultural historians passionate about safeguarding isiNdebele literary thought.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-error">
                <Icon name="crisis_alert" className="text-[20px]" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                The Literacy Challenge
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Modern curricula and screen entertainment often side-line mother tongues. We recognized an urgent shortfall of vibrant, relatable youth fiction and open audio archives celebrating indigenous idioms, folk tales, and contemporary poetry.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary-container">
                <Icon name="hub" className="text-[20px]" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Our Multi-Disciplinary Solution
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                An ecosystem uniting high school reading clubs, regular community radio broadcasts on{" "}
                <span className="font-semibold text-on-surface">
                  Skyz Metro FM
                </span>
                , interactive digital literature archives, and the flagship annual literature festival.
              </p>
            </div>
          </div>
          {/* Core Mission Callout Card */}
          <div className="bg-primary text-on-primary p-space-md rounded-[20px] shadow-md flex flex-col gap-space-xs relative overflow-hidden" data-reveal="scale">
            <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full border-4 border-dashed border-secondary-fixed/25 animate-spin-slow" />
            <div className="self-start px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps uppercase">
              Core Mission
            </div>
            <p className="font-title-editorial text-title-editorial text-surface-container-lowest font-medium leading-snug">
              &quot;To elevate African languages into thriving vehicles of modern academic inquiry, imaginative fiction, and civic pride for generations of youth.&quot;
            </p>
          </div>
        </section>
        {/* SECTION 2: OUR MILESTONES */}
        <section className="bg-surface-container-low px-margin py-space-lg flex flex-col gap-space-md" data-reveal="">
          <div className="flex flex-col gap-0.5">
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-primary">
              Evolution &amp; Growth
            </span>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              Our Milestones
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Key moments in our cultural journey across Zimbabwe.
            </p>
          </div>
          {/* Vertical Timeline Nodes */}
          <div className="flex flex-col gap-3 relative pl-4" data-stagger="">
            <div className="timeline-line absolute left-2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-outline-variant via-primary to-outline-variant" />
            {/* 2018 Node */}
            <div className="relative flex items-start gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-outline-variant -ml-1.5 mt-1.5 shrink-0 ring-4 ring-surface-container-low" />
              <div className="bg-surface-container-lowest p-3 rounded-[16px] shadow-sm flex-1">
                <span className="font-label-md text-label-md font-bold text-primary">
                  2018
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                  Bulawayo Writers Circle Inception
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-0.5">
                  12 passionate educators and authors started informal book drop-ins in Entumbane and Mzilikazi.
                </p>
              </div>
            </div>
            {/* 2020 Node */}
            <div className="relative flex items-start gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-outline-variant -ml-1.5 mt-1.5 shrink-0 ring-4 ring-surface-container-low" />
              <div className="bg-surface-container-lowest p-3 rounded-[16px] shadow-sm flex-1">
                <span className="font-label-md text-label-md font-bold text-primary">
                  2020
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                  Airwave Reading on Skyz Metro FM
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-0.5">
                  Launched weekly broadcast storytelling sessions reaching over 85,000 regional listeners weekly.
                </p>
              </div>
            </div>
            {/* 2022 Node (Active Highlighted) */}
            <div className="relative flex items-start gap-3">
              <div className="relative w-4 h-4 -ml-2 mt-1 shrink-0">
                <span className="absolute inset-0 rounded-full bg-secondary-fixed animate-ping" />
                <span className="relative block w-4 h-4 rounded-full bg-secondary-fixed ring-4 ring-primary" />
              </div>
              <div className="bg-primary text-on-primary p-3.5 rounded-[16px] shadow-md flex-1 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md font-extrabold text-secondary-fixed">
                    2022 • Highlight
                  </span>
                  <Icon name="star" filled idle className="text-[16px] text-secondary-fixed" />
                </div>
                <p className="font-title-editorial text-title-editorial text-surface-container-lowest font-bold">
                  The First Ndebele Literature Festival
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container text-xs">
                  A historic milestone bringing literature into public stadiums with thousands of students.
                </p>
              </div>
            </div>
            {/* 2024 Node */}
            <div className="relative flex items-start gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-outline-variant -ml-1.5 mt-1.5 shrink-0 ring-4 ring-surface-container-low" />
              <div className="bg-surface-container-lowest p-3 rounded-[16px] shadow-sm flex-1">
                <span className="font-label-md text-label-md font-bold text-primary">
                  2024
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                  Digital Archive &amp; Audio Anthology
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-0.5">
                  Digitized 140 historic folk tales and launched the online parallel reader platform.
                </p>
              </div>
            </div>
            {/* 2026 Node */}
            <div className="relative flex items-start gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-outline-variant -ml-1.5 mt-1.5 shrink-0 ring-4 ring-surface-container-low" />
              <div className="bg-surface-container-lowest p-3 rounded-[16px] shadow-sm flex-1">
                <span className="font-label-md text-label-md font-bold text-outline">
                  2026
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                  Pan-African Translation Hub
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-0.5">
                  Expanding into regional cross-border publishing across Southern Africa.
                </p>
              </div>
            </div>
          </div>
          {/* Dedicated Milestone Detail Card: 2022 Inaugural Festival */}
          <div className="bg-surface-container-lowest rounded-[20px] p-space-md shadow-md flex flex-col gap-space-sm mt-1">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-cultural-caps text-label-cultural-caps uppercase">
                Expanded Milestone • Bulawayo 2022
              </span>
              <Icon name="celebration" idle className="text-primary text-[20px]" />
            </div>
            {/* Festival Emblem Header */}
            <div className="flex items-center gap-space-sm bg-surface-container-low p-3 rounded-[16px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden transition-transform duration-500 active:scale-110 active:rotate-6">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10 50 A 40 40 0 0 1 90 50 Z" fill="#15157d" />
                  <polygon fill="#f5e700" points="15,48 25,32 35,48" />
                  <polygon fill="#ba1a1a" points="35,48 45,30 55,48" />
                  <polygon fill="#004920" points="55,48 65,30 75,48" />
                  <polygon fill="#f5e700" points="75,48 85,32 95,48" />
                  <circle cx="50" cy="50" fill="#ffffff" r="18" />
                  <circle cx="50" cy="50" fill="#ba1a1a" r="13" />
                  <path d="M 22 55 L 78 55" stroke="#15157d" strokeWidth="2" />
                  <text fill="#15157d" fontSize="7" fontWeight="bold" textAnchor="middle" x="50" y="65">
                    FESTIVAL
                  </text>
                  <text fill="#676000" fontSize="6" fontStyle="italic" textAnchor="middle" x="50" y="74">
                    &quot;Cikoza Sizwe&quot;
                  </text>
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-tight">
                  2022: Inaugural Ndebele Literature Festival
                </h3>
                <span className="font-body-sm text-body-sm text-primary text-xs font-semibold">
                  Theme: &quot;Cikoza Sizwe&quot;
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Over 1,200 learners and 34 schools gathered at the Bulawayo Amphitheatre to celebrate indigenous language expression through dramatic recitation, creative writing, and oral heritage competitions.
            </p>
            {/* Achievements Checklist */}
            <div className="flex flex-col gap-2 py-1" data-stagger="">
              <div className="flex items-center gap-2">
                <Icon name="check_circle" className="text-tertiary-container text-[18px]" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  34 secondary schools joined from across Matabeleland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check_circle" className="text-tertiary-container text-[18px]" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  420 original short essays submitted in isiNdebele
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check_circle" className="text-tertiary-container text-[18px]" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Keynote address by renowned author Dr. Barbara C. Makhalisa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check_circle" className="text-tertiary-container text-[18px]" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Inaugural Izibongo praise poetry cup awarded
                </span>
              </div>
            </div>
            {/* 2-Photo Moment Gallery */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="zoom-media h-28 rounded-[14px] overflow-hidden">
                <Image src={img021} alt={"High school student reciting praise poetry at an outdoor theater microphone in Bulawayo with vivid traditional beadwork and an attentive crowd of students applauding in the bright daytime"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
              <div className="zoom-media h-28 rounded-[14px] overflow-hidden">
                <Image src={img022} alt={"Senior Zimbabwean literary elders presenting book award trophies and stacks of fresh novels to young smiling female student competition winners under blue marquee tents"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
            </div>
            {/* Download Button */}
            <Link href="/contact?topic=archive&year=2022" className="group mt-2 min-h-[48px] px-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap">
              <Icon name="mail" className="text-[18px] text-secondary-fixed" />
              <span>
                Request the 2022 Impact Report
              </span>
            </Link>
          </div>
        </section>
        {/* SECTION 3: OUR LEADERSHIP */}
        <section className="px-margin py-space-lg flex flex-col gap-space-md" data-reveal="">
          <div className="flex flex-col gap-0.5">
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-primary">
              Visionary Direction
            </span>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              Our Leadership
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Stewards of language, community preservation, and youth empowerment.
            </p>
          </div>
          {/* 3 Stacked Director Cards */}
          <div className="flex flex-col gap-space-sm" data-stagger="">
            {/* Director 1 */}
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-space-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm ring-2 ring-secondary-fixed ring-offset-2">
                  <Image src={img023} alt={"Portrait of Dr. Thabani Moyo, distinguished senior African male scholar and author with warm friendly eyes, spectacles, dressed in modern smart blazer with subtle African print trim"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-snug">
                    Dr. Thabani Moyo
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Executive Director &amp; Co-Founder
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Bulawayo, Zimbabwe
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Veteran playwright, curriculum specialist, and linguist with over 25 years championing indigenous language pedagogy in secondary and tertiary institutions.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a href={`mailto:${SITE.email}`} className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="mail" className="text-[16px] text-primary" />
                  <span>
                    Contact
                  </span>
                </a>
                <Link href="/books" className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="article" className="text-[16px] text-primary" />
                  <span>
                    Publications
                  </span>
                </Link>
              </div>
            </div>
            {/* Director 2 */}
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-space-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm ring-2 ring-secondary-fixed ring-offset-2">
                  <Image src={img024} alt={"Portrait of Sithandazile Dube, inspiring Zimbabwean woman educator with headwrap and bright warm smile, wearing beaded necklace against neutral studio lighting"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-snug">
                    Sithandazile Dube
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Head of Programs &amp; Mentorship
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Mhlahlandlela District
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Acclaimed spoken-word performer known as &quot;Usisi Omkhulu&quot;, leading interactive school reading clubs and provincial storytelling workshops for young girls.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a href={`mailto:${SITE.email}`} className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="mail" className="text-[16px] text-primary" />
                  <span>
                    Contact
                  </span>
                </a>
                <Link href="/events" className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="groups" className="text-[16px] text-primary" />
                  <span>
                    Workshops
                  </span>
                </Link>
              </div>
            </div>
            {/* Director 3 */}
            <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-space-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm ring-2 ring-secondary-fixed ring-offset-2">
                  <Image src={img025} alt={"Portrait of Nkululeko Sibanda, sharp African media producer in casual collared shirt with studio headphones resting on shoulders, creative radio setting background"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-editorial text-title-editorial text-on-surface font-bold leading-snug">
                    Nkululeko Sibanda
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Director of Broadcast Media &amp; Archives
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Bulawayo Media Hub
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Audio documentarian driving community broadcasts on Skyz Metro FM and coordinating field recordings with rural Matabeleland storytellers.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a href={`mailto:${SITE.email}`} className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="mail" className="text-[16px] text-primary" />
                  <span>
                    Contact
                  </span>
                </a>
                <Link href="/watch" className="group h-9 px-3.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex flex-row items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform">
                  <Icon name="podcasts" className="text-[16px] text-primary" />
                  <span>
                    Radio Series
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 4: OUR TEAM */}
        <section className="bg-surface-container-low px-margin py-space-lg flex flex-col gap-space-md" data-reveal="">
          <div className="flex flex-col gap-0.5">
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-primary">
              Field Champions
            </span>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              Our Team
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Field educators, translators, and cultural archivists.
            </p>
          </div>
          {/* 2-Column Grid of Avatar Cards */}
          <div className="grid grid-cols-2 gap-3" data-stagger="">
            {/* Member 1 */}
            <div className="bg-surface-container-lowest p-3.5 rounded-[20px] shadow-sm flex flex-col items-center text-center gap-2">
              <div className="zoom-media w-16 h-16 rounded-full overflow-hidden shadow-sm ring-2 ring-surface-container transition-[box-shadow] active:ring-secondary-fixed">
                <Image src={img026} alt={"Portrait photo of Bheki Khumalo, friendly young Zimbabwean male educator smiling warmly in school garden setting"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
              <div className="flex flex-col items-center min-w-0">
                <span className="font-title-editorial text-body-md text-on-surface font-bold truncate w-full">
                  Bheki Khumalo
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  School Coordinator
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-cultural-caps text-[10px] uppercase">
                Bulawayo
              </span>
            </div>
            {/* Member 2 */}
            <div className="bg-surface-container-lowest p-3.5 rounded-[20px] shadow-sm flex flex-col items-center text-center gap-2">
              <div className="zoom-media w-16 h-16 rounded-full overflow-hidden shadow-sm ring-2 ring-surface-container transition-[box-shadow] active:ring-secondary-fixed">
                <Image src={img027} alt={"Portrait photo of Gugulethu Ndlovu, thoughtful Zimbabwean female linguist with neat braided hairstyle and yellow scarf"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
              <div className="flex flex-col items-center min-w-0">
                <span className="font-title-editorial text-body-md text-on-surface font-bold truncate w-full">
                  Gugu Ndlovu
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Head Translator
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-cultural-caps text-[10px] uppercase">
                Gwanda
              </span>
            </div>
            {/* Member 3 */}
            <div className="bg-surface-container-lowest p-3.5 rounded-[20px] shadow-sm flex flex-col items-center text-center gap-2">
              <div className="zoom-media w-16 h-16 rounded-full overflow-hidden shadow-sm ring-2 ring-surface-container transition-[box-shadow] active:ring-secondary-fixed">
                <Image src={img028} alt={"Portrait photo of Mthokozisi Ncube, enthusiastic African youth literacy facilitator holding notebooks in library"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
              <div className="flex flex-col items-center min-w-0">
                <span className="font-title-editorial text-body-md text-on-surface font-bold truncate w-full">
                  Mthokozisi N.
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Audio Archivist
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-cultural-caps text-[10px] uppercase">
                Lupane
              </span>
            </div>
            {/* Member 4 */}
            <div className="bg-surface-container-lowest p-3.5 rounded-[20px] shadow-sm flex flex-col items-center text-center gap-2">
              <div className="zoom-media w-16 h-16 rounded-full overflow-hidden shadow-sm ring-2 ring-surface-container transition-[box-shadow] active:ring-secondary-fixed">
                <Image src={img029} alt={"Portrait photo of Lindiwe Sibanda, smiling female cultural documentarian wearing traditional African fabric headband outdoors"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
              </div>
              <div className="flex flex-col items-center min-w-0">
                <span className="font-title-editorial text-body-md text-on-surface font-bold truncate w-full">
                  Lindiwe Sibanda
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Community Liaison
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-cultural-caps text-[10px] uppercase">
                Matobo
              </span>
            </div>
          </div>
        </section>
        {/* SECTION 5: WHAT PEOPLE SAY & SHARE YOUR EXPERIENCE */}
        <section className="px-margin py-space-lg flex flex-col gap-space-lg" data-reveal="">
          {/* Testimonials Header */}
          <div className="flex flex-col gap-0.5">
            <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider text-primary">
              Voices from Matabeleland
            </span>
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
              What People Say
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Stories from students, teachers, and community elders.
            </p>
          </div>
          {/* Horizontal Swipeable Testimonials List */}
          <SnapCarousel className="gap-space-sm -mx-margin px-margin pb-2 scroll-px-margin" label="Testimonials">
            {/* Testimonial 1 */}
            <div className="min-w-[280px] max-w-[290px] bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col justify-between shrink-0 snap-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-secondary-container">
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  &quot;Before joining the school book club, I rarely read novels in my own language. The festival gave me the courage to write my first prize-winning poem.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-xs">
                  ND
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    Nomvelo D.
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Student, Mzilikazi High
                  </span>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="min-w-[280px] max-w-[290px] bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col justify-between shrink-0 snap-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-secondary-container">
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  &quot;The parallel reading guides and radio anthologies transformed classroom engagement. Our students speak with newfound pride and vocabulary.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-xs">
                  ES
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    Mr. E. Sibanda
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Literature Teacher, Gifford High
                  </span>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="min-w-[280px] max-w-[290px] bg-surface-container-lowest p-space-md rounded-[20px] shadow-sm flex flex-col justify-between shrink-0 snap-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-secondary-container">
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                  <Icon name="star" filled className="text-[18px] text-secondary" />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  &quot;Hearing our folk tales on the radio brings the warmth of our ancestors back into the living room. It connects my grandchildren to their roots.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-xs">
                  GM
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    Mrs. Mthethwa
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-xs">
                    Parent &amp; Elder, Luveve
                  </span>
                </div>
              </div>
            </div>
          </SnapCarousel>
          {/* Share Your Experience Form Card */}
          <div className="bg-surface-container-lowest p-space-md rounded-[20px] shadow-md flex flex-col gap-space-sm relative overflow-hidden">
            <div className="ndebele-band absolute top-0 inset-x-0 h-1.5" />
            <div className="flex flex-col gap-1">
              <div className="self-start px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-cultural-caps text-label-cultural-caps uppercase">
                Community Voice
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Share Your Experience
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Have you attended our festivals, read our literature, or listened on the radio? Tell us your story.
              </p>
            </div>
            <ActionForm
              kind="story"
              className="flex flex-col gap-3 mt-1"
              successTitle="Siyabonga — thank you!"
              successBody="Your story has reached our community team. With your permission we may feature it in our newsletter or on air."
            >
              {/* Input: Full Name */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="m-exp-name">
                  Full Name
                </label>
                <input className="w-full h-[52px] px-space-md rounded-full bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" id="m-exp-name" name="name" autoComplete="name" required placeholder="e.g. Sipho Moyo" type="text" />
              </div>
              {/* Selector: Role */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="m-exp-role">
                  Your Role
                </label>
                <div className="relative">
                  <select className="w-full h-[52px] px-space-md rounded-full bg-surface-container-low text-on-surface text-body-sm font-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary" id="m-exp-role" name="role">
                    <option value="student">
                      Student / Learner
                    </option>
                    <option value="teacher">
                      Educator / Teacher
                    </option>
                    <option value="author">
                      Writer / Cultural Artist
                    </option>
                    <option value="parent">
                      Parent / Elder
                    </option>
                    <option value="listener">
                      Radio Broadcast Listener
                    </option>
                  </select>
                  {" "}
                  <Icon name="expand_more" className="absolute right-4 top-3.5 pointer-events-none text-outline text-[20px]" />
                </div>
              </div>
              {/* Input: School / Community */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="m-exp-community">
                  School or Community
                </label>
                <input className="w-full h-[52px] px-space-md rounded-full bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" id="m-exp-community" name="community" placeholder="e.g. Mzilikazi, Bulawayo or Lupane" type="text" />
              </div>
              {/* Textarea: Comment */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="m-exp-comment">
                  Your Story or Feedback
                </label>
                <textarea className="w-full p-space-md rounded-[16px] bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" id="m-exp-comment" name="story" required placeholder="Share how indigenous language reading has touched your life..." rows={3} />
              </div>
              {/* Full-Width Pill Action Button */}
              <button className="group w-full min-h-[50px] mt-2 rounded-full bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-sm hover:bg-secondary-fixed transition-all active:scale-[0.98] flex flex-row items-center justify-center gap-2 whitespace-nowrap" type="submit">
                <SubmitLabel>
                  <span>
                    Submit Your Story
                  </span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </SubmitLabel>
              </button>
            </ActionForm>
          </div>
        </section>

      </div>
    </div>
  );
}
