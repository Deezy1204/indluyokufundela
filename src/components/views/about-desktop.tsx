import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { MilestoneExplorer } from "@/components/about/milestone-explorer";
import { TestimonialCarousel, type Testimonial } from "@/components/about/testimonial-carousel";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { SITE } from "@/lib/site";
import img002 from "@/assets/images/about/002.webp";
import img003 from "@/assets/images/about/003.webp";
import img006 from "@/assets/images/about/006.webp";
import img007 from "@/assets/images/about/007.webp";
import img008 from "@/assets/images/about/008.webp";
import img009 from "@/assets/images/about/009.webp";
import img010 from "@/assets/images/about/010.webp";
import img011 from "@/assets/images/about/011.webp";
import img012 from "@/assets/images/about/012.webp";
import img013 from "@/assets/images/about/013.webp";
import img014 from "@/assets/images/about/014.webp";
import img015 from "@/assets/images/about/015.webp";
import img016 from "@/assets/images/about/016.webp";
import img017 from "@/assets/images/about/017.webp";
import img018 from "@/assets/images/about/018.webp";
import img019 from "@/assets/images/about/019.webp";

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Indlu Yokufundela gave me the courage to write my first short story in isiNdebele. Winning the festival essay category changed my life and showed me that our language holds infinite beauty.",
    name: "Nomvelo D.",
    role: "Form 4 Student, Mzilikazi High School • Bulawayo",
    image: img017,
    alt: "Nomvelo D., a high school student, smiling in her school uniform",
  },
  {
    quote:
      "The weekly radio classes on Skyz Metro FM have become mandatory listening for our department. The students' vocabulary has flourished, especially during national exam essays.",
    name: "Mr. E. Sibanda",
    role: "Literature Teacher, Gifford High School • Bulawayo",
    image: img018,
    alt: "Mr. E. Sibanda, a literature teacher, in a collared shirt",
  },
  {
    quote:
      "Hearing folktales we feared were being lost broadcast back to our children fills my heart with immense pride. Indlu Yokufundela is protecting our very soul.",
    name: "Mrs. Mthethwa",
    role: "Parent & Community Elder, Luveve • Bulawayo",
    image: img019,
    alt: "Mrs. Mthethwa, a community elder, smiling in traditional jewellery",
  },
];

export function AboutDesktop() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* Top Breadcrumb & Hero Area */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-16 md:py-20">
          {/* Faint Ndebele Geometric Motif Background (SVG Pattern 6% Opacity) */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%2315157d\\' fill-rule=\\'evenodd\\'%3E%3Cpath d=\\'M0 0l40 40L0 80h80L40 40 80 0H0zm40 20L20 40l20 20 20-20-20-20z\\'/%3E%3C/g%3E%3C/svg%3E')", backgroundSize: "80px 80px" }} />
          <div className="relative max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
            {/* Breadcrumb */}
            <nav className="enter-up flex items-center gap-2 mb-6 font-label-md text-label-md text-outline" style={d(0)}>
              <Link href="/" className="hover:text-primary-container transition-colors">
                Home
              </Link>
              <Icon name="chevron_right" className="text-[14px]" />
              <span className="text-primary-container font-semibold">
                About Us
              </span>
            </nav>
            {/* Section Title & Subtitle */}
            <div className="max-w-3xl mb-12">
              <div className="enter-up inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider mb-4 shadow-sm" style={d(80)}>
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span>
                  Matabeleland Literary Legacy
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
                <SplitWords text="Revitalizing Language, Empowering Generations" delay={140} />
              </h1>
              <p className="enter-up font-body-lg text-body-lg text-on-surface-variant font-medium" style={d(420)}>
                The Story &amp; Mission of{" "}
                <span className="text-primary-container font-semibold">
                  Indlu Yokufundela
                </span>
                {" "}
                <span className="italic text-secondary font-headline-sm text-title-editorial">
                  (&quot;Spheth&apos;Imfundw&apos;Emoyeni&quot;)
                </span>
              </p>
            </div>
            {/* 2-Column Editorial Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="enter-up bg-surface-container-lowest p-8 md:p-10 rounded-[20px] shadow-sm relative overflow-hidden" style={d(520)}>
                  <div className="enter-scale w-1.5 h-12 bg-primary-container absolute left-0 top-10 rounded-r-md origin-top" style={d(900)} />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    A Bulawayo Sanctuary for Mother-Tongue Literacy
                  </h3>
                  <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <p>
                      Founded in the cultural heart of Bulawayo, Zimbabwe,{" "}
                      <strong className="text-on-surface">
                        Indlu Yokufundela
                      </strong>
                      {" "}was forged to bridge an urgent generational divide. As digital media rapidly modernized communication, classic isiNdebele folklore, linguistic cadence, and literary heritage faced quiet attrition in primary schools and community living rooms across Matabeleland.
                    </p>
                    <p>
                      Our founders—veteran educators, novelists, and community storytellers—believed that no child should have to sacrifice their ancestral voice to thrive in modern scholarship. We began by assembling community reading circles under acacia trees in rural Matabeleland South, gradually transcribing elder memories and transforming dusty manuscript shelves into vibrant, high-energy educational incubators.
                    </p>
                    <p>
                      Today, our work spans provincial radio broadcasts, open-access linguistic archives, classroom curriculum guides, and the landmark biennial festival{" "}
                      <em className="text-primary font-semibold">
                        Cikoza Sizwe
                      </em>
                      . We honor tradition not as a museum exhibit, but as a living, pulsating current that fuels critical thinking and boundless creative ambition.
                    </p>
                  </div>
                  {/* Image Mosaic Inline */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t-0" data-stagger="">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm group">
                      <Image src={img002} alt={"A warm, vibrant photograph of African high school students in Bulawayo school uniforms smiling and reading colorful isiNdebele literature books together in a sunlit classroom library with warm golden natural light"} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex items-end p-3">
                        <span className="text-surface-container-lowest font-label-md text-label-md">
                          Reading Circles in Mzilikazi
                        </span>
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm group">
                      <Image src={img003} alt={"An African female archivist and literary scholar examining vintage African literature manuscripts and audio tape archives in a modern wood-paneled archive room with warm ambient editorial lighting"} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex items-end p-3">
                        <span className="text-surface-container-lowest font-label-md text-label-md">
                          Bulawayo Archival Vaults
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Mission Box & Impact Stats */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Mission Box */}
                <div className="enter-up group bg-primary text-on-primary p-8 md:p-9 rounded-[20px] shadow-md relative overflow-hidden" style={d(620)}>
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-primary-container opacity-40 blur-2xl animate-float" />
                  <div className="flex items-center gap-2 mb-4 text-secondary-fixed">
                    <Icon name="flag" filled idle className="text-[24px]" />
                    <span className="font-label-cultural-caps text-label-cultural-caps uppercase tracking-widest text-secondary-container">
                      Our Central Mission
                    </span>
                  </div>
                  <blockquote className="font-headline-sm text-headline-sm leading-snug mb-6 text-surface-container-lowest">
                    “To preserve, champion, and evolve isiNdebele literature and cultural heritage through classroom innovation, community radio, annual festivals, and open-access digital archives.”
                  </blockquote>
                  <p className="font-body-sm text-body-sm text-surface-variant/90 leading-relaxed">
                    We stand as cultural custodians ensuring that every young reader in Matabeleland and the diaspora can articulate their dreams with unreserved fluency and pride.
                  </p>
                </div>
                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-4" data-stagger="">
                  <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <Icon name="menu_book" className="text-primary-container text-[28px]" />
                      <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold">
                        LITERATURE
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg font-black text-primary leading-tight" data-count="">
                        45,000+
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Dual-Language Books Distributed to Rural Classrooms
                      </p>
                    </div>
                  </div>
                  <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <Icon name="radio" className="text-primary-container text-[28px]" />
                      <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold">
                        BROADCAST
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg font-black text-primary leading-tight" data-count="">
                        180+
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Radio Lessons on Skyz Metro FM &amp; Mhlahlandlela
                      </p>
                    </div>
                  </div>
                  <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <Icon name="school" className="text-primary-container text-[28px]" />
                      <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold">
                        SCHOOLS
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg font-black text-primary leading-tight" data-count="">
                        112
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Active High School Literature Clubs Registered
                      </p>
                    </div>
                  </div>
                  <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <Icon name="record_voice_over" className="text-primary-container text-[28px]" />
                      <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold">
                        ARCHIVE
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg font-black text-primary leading-tight" data-count="">
                        640+
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Oral Folktales Digitized &amp; Phonetically Indexed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Our Milestones (Interactive Timeline & Detailed Feature Panel) */}
        <section className="w-full bg-background py-20 relative overflow-hidden" id="milestones" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest block mb-2 font-bold">
                  Our Journey
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Our Milestones
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  A Decade of Revitalizing Cultural Literacy Across Matabeleland
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary-container animate-ping" />
                <span className="font-label-md text-label-md text-outline">
                  Click any milestone year below to inspect archives
                </span>
              </div>
            </div>
            <MilestoneExplorer />
          </div>
        </section>
        {/* Section 3: Our Leadership */}
        <section className="w-full bg-surface-container-low py-20 relative" id="leadership" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest block mb-2 font-bold">
                Executive Board
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Our Leadership
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
                Guided by Cultural Stewards, Educators, and Authors with Lifelong Commitments to Matabeleland
              </p>
            </div>
            {/* 3-Column Director Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-stagger="">
              {/* Director 1 */}
              <div className="lift bg-surface-container-lowest rounded-[20px] p-6 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="zoom-media relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-surface-container">
                    <Image src={img006} alt={"Professional studio portrait of Dr. Thabani Moyo, an African male scholar in his early 50s wearing tailored formal attire, warm intellectual expression, soft library backdrop with warm ambient lighting"} className="w-full h-full object-cover object-top" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md">
                        Executive Director
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Dr. Thabani Moyo
                    </h3>
                    <p className="font-label-md text-label-md text-secondary font-semibold">
                      Co-Founder &amp; Curriculum Scholar
                    </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Dr. Moyo has devoted over two decades to mother-tongue curriculum development across Zimbabwe. A playwright and linguist, he spearheads the academic research arm of Indlu Yokufundela and oversees our dialect codification initiatives in rural Matabeleland.
                  </p>
                </div>
                {/* Social & Action Links */}
                <div className="mt-6 pt-4 border-t-0 flex items-center justify-between">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-outline">
                    BULAWAYO / HARARE
                  </span>
                  <div className="flex items-center gap-2">

                    <Link className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href="/books" title="Publications">
                      <Icon name="menu_book" className="text-[16px]" />
                    </Link>
                    <a className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href={`mailto:${SITE.email}`} title="Email">
                      <Icon name="mail" className="text-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Director 2 */}
              <div className="lift bg-surface-container-lowest rounded-[20px] p-6 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="zoom-media relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-surface-container">
                    <Image src={img007} alt={"Professional portrait of Sithandazile Dube, a distinguished African woman in her 40s with traditional headwrap and elegant modern blazer, confident smile, warm studio illumination"} className="w-full h-full object-cover object-top" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md">
                        Programs &amp; Mentorship
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Sithandazile Dube
                    </h3>
                    <p className="font-label-md text-label-md text-secondary font-semibold">
                      Head of Programs &amp; Youth Mentorship
                    </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Celebrated oral folklorist, published poet, and former high school literature head in Entumbane. Sithandazile directs our 112 school literature hubs, curates youth poetry clinics, and leads regional adjudications for the{" "}
                    <em className="italic">
                      Cikoza Sizwe
                    </em>
                    {" "}festival trophy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-0 flex items-center justify-between">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-outline">
                    ENTUMBANE / BULAWAYO
                  </span>
                  <div className="flex items-center gap-2">

                    <Link className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href="/watch" title="Audio Archives">
                      <Icon name="mic" className="text-[16px]" />
                    </Link>
                    <a className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href={`mailto:${SITE.email}`} title="Email">
                      <Icon name="mail" className="text-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Director 3 */}
              <div className="lift bg-surface-container-lowest rounded-[20px] p-6 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="zoom-media relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-surface-container">
                    <Image src={img008} alt={"Professional headshot of Nkululeko Sibanda, an African male media producer in his late 30s with headphones around his neck, stylish spectacles, broadcast studio background with warm lighting"} className="w-full h-full object-cover object-top" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md">
                        Digital Archives &amp; Broadcast
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Nkululeko Sibanda
                    </h3>
                    <p className="font-label-md text-label-md text-secondary font-semibold">
                      Director of Broadcast &amp; Media
                    </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    An experienced sound designer and broadcast engineer who conceived our weekly radio curriculum partnership with Skyz Metro FM. Nkululeko steers our mobile sound recording labs and the digital repository of elder oral histories.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-0 flex items-center justify-between">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-outline">
                    BULAWAYO CENTRAL
                  </span>
                  <div className="flex items-center gap-2">

                    <Link className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href="/watch" title="Broadcast Vault">
                      <Icon name="podcasts" className="text-[16px]" />
                    </Link>
                    <a className="group w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-colors" href={`mailto:${SITE.email}`} title="Email">
                      <Icon name="mail" className="text-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Our Team (4x2 Responsive Grid) */}
        <section className="w-full bg-background py-20 relative" id="team" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest block mb-2 font-bold">
                Field Specialists
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Our Team
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                The Dedicated Educators, Archivists, and Coordinators on the Ground Every Day
              </p>
            </div>
            {/* 4x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger="">
              {/* Member 1 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img009} alt={"Portrait photo of Gugulethu Khumalo, a young professional African female educator smiling with natural hair and bright top, soft neutral background"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Gugulethu Khumalo
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Curriculum Specialist
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Bulawayo Central
                  </span>
                </div>
              </div>
              {/* Member 2 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img010} alt={"Portrait photo of Dumisani Ndlovu, an African male in mid-30s wearing utility field shirt with friendly expression outdoors in sunny Zimbabwe"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Dumisani Ndlovu
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Field Logistics Coordinator
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Gwanda
                  </span>
                </div>
              </div>
              {/* Member 3 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img011} alt={"Portrait photo of Bhekithemba Nyathi, an African sound technician wearing studio headphones smiling in modern sound booth"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Bhekithemba Nyathi
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Sound Engineer &amp; Audio Editor
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Bulawayo Central
                  </span>
                </div>
              </div>
              {/* Member 4 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img012} alt={"Portrait photo of Senzeni Mpofu, an African woman educator with warm demeanor wearing smart casual cardigan in classroom setting"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Senzeni Mpofu
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Community &amp; Schools Liaison
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Lupane
                  </span>
                </div>
              </div>
              {/* Member 5 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img013} alt={"Portrait photo of Mkhokheli Ncube, a young African male graphic designer with glasses, creative attire in design studio with book layouts"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Mkhokheli Ncube
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Lead Editorial Designer
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Bulawayo Central
                  </span>
                </div>
              </div>
              {/* Member 6 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img014} alt={"Portrait photo of Zwelibanzi Tshuma, an African scholar man with notebook, thoughtful expression in an African heritage library"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Zwelibanzi Tshuma
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Folklore Transcriptionist
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Plumtree
                  </span>
                </div>
              </div>
              {/* Member 7 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img015} alt={"Portrait photo of Nomusa Gumbo, an African woman volunteer leader with energetic radiant smile, outdoor festival lanyard"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Nomusa Gumbo
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Volunteer Coordinator
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Bulawayo Central
                  </span>
                </div>
              </div>
              {/* Member 8 */}
              <div className="group lift bg-surface-container-lowest p-6 rounded-[20px] shadow-sm text-center flex flex-col items-center">
                <div className="zoom-media w-24 h-24 rounded-full overflow-hidden mb-4 bg-surface-container shadow-inner ring-4 ring-transparent transition-[box-shadow] duration-500 group-hover:ring-secondary-fixed">
                  <Image src={img016} alt={"Portrait photo of Thandeka Mlambo, an African young female writer and mentor in her late 20s smiling kindly with a book in hand"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                </div>
                <h4 className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  Thandeka Mlambo
                </h4>
                <p className="font-body-sm text-body-sm text-primary-container font-semibold mt-1">
                  Youth Writing Clinic Mentor
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-outline">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>
                    Matobo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: What People Say (Split Layout: Carousel & Share Experience Form) */}
        <section className="w-full bg-surface-container-low py-20 relative" data-reveal="">
          <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: Testimonials Carousel */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest block mb-2 font-bold">
                    Community Voices
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    What People Say
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Reflections from Students, Teachers, and Elders across Matabeleland
                  </p>
                </div>
                <TestimonialCarousel items={TESTIMONIALS} />
              </div>
              {/* Right: "Share Your Experience" Form Card */}
              <div className="lg:col-span-5">
                <div className="bg-surface-container-lowest p-8 md:p-9 rounded-[20px] shadow-sm relative overflow-hidden">
                  {/* Royal Blue Decorative Bar at Top */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-primary-container" />
                  <div className="mb-6">
                    <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase tracking-widest block mb-1 font-bold">
                      Community Voice
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Share Your Experience
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Have our books, festival, or radio lessons touched your school or home? We would love to hear your story.
                    </p>
                  </div>
                  {/* Form */}
                  <ActionForm
                    kind="story"
                    className="space-y-4"
                    successTitle="Siyabonga — thank you!"
                    successBody="Your story has reached our community team. With your permission we may feature it in our newsletter or on air."
                  >
                    <div>
                      <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1.5" htmlFor="fullName">
                        Full Name
                      </label>
                      {" "}
                      <input className="w-full h-[52px] px-5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container transition-shadow" id="fullName" name="name" autoComplete="name" placeholder="e.g., Sihle Sibanda" required type="text" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1.5" htmlFor="userRole">
                        Your Role
                      </label>
                      <div className="relative">
                        <select className="w-full h-[52px] px-5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer" id="userRole" name="role" required defaultValue={""}>
                          <option disabled value="">
                            Select your connection
                          </option>
                          <option value="student">
                            High School Student
                          </option>
                          <option value="teacher">
                            Teacher / Educator
                          </option>
                          <option value="parent">
                            Parent / Guardian
                          </option>
                          <option value="writer">
                            Community Writer / Artist
                          </option>
                          <option value="other">
                            Other
                          </option>
                        </select>
                        {" "}
                        <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[20px]" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1.5" htmlFor="community">
                        Your School or Community
                      </label>
                      {" "}
                      <input className="w-full h-[52px] px-5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container" id="community" name="community" placeholder="e.g., Mpopoma High School or Gwanda Rural" required type="text" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1.5" htmlFor="experience">
                        Your Experience or Testimonial
                      </label>
                      {" "}
                      <textarea className="w-full p-4 rounded-2xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container resize-none" id="experience" name="story" placeholder="Tell us how mother-tongue reading or our radio broadcasts impacted you or your learners..." required rows={4} />
                    </div>
                    <div className="pt-2">
                      <button className="group w-full flex flex-row items-center justify-center gap-2 whitespace-nowrap h-[52px] rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary active:scale-[0.98] transition-all" type="submit">
                        <SubmitLabel>
                          <span>
                            Submit Your Story
                          </span>
                          <Icon name="arrow_forward" className="text-[18px]" />
                        </SubmitLabel>
                      </button>
                    </div>
                  </ActionForm>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
