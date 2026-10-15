import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { CourseProvider, CoursePlaylist, LessonStage, StageActions, StageMeta } from "@/components/lessons/course";
import { LessonCatalogProvider, LessonCount, LessonFilterBar, LessonGrid, LessonSearchSpine, LoadMore } from "@/components/lessons/lesson-catalog";
import { StudyTabs } from "@/components/lessons/study-tabs";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { FileDrop } from "@/components/ui/file-drop";
import { SaveDraftButton } from "@/components/ui/save-draft";
import img103 from "@/assets/images/lessons/103.webp";
import img104 from "@/assets/images/lessons/104.webp";

export function LessonsDesktop() {
  return (
    <div className="w-full bg-surface">
      <CourseProvider>
      <LessonCatalogProvider scope="d-lessons">
      <div className="flex flex-col w-full">
        {/* Top Utility Context / Breadcrumb & Hero Search Header */}
        <section className="w-full bg-surface-container-low px-margin-desktop py-space-xl relative overflow-hidden">
          {/* Faint Geometric Ndebele Motifs Background */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/20 pointer-events-none blur-3xl animate-float" />
          <div className="absolute left-1/3 bottom-0 w-96 h-32 bg-primary/5 pointer-events-none blur-2xl animate-float [animation-delay:-3s]" />
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
            {/* Breadcrumb */}
            <nav className="enter-up flex flex-row items-center gap-2 text-on-surface-variant font-label-md text-label-md" style={d(0)}>
              <Link href="/" className="group hover:text-primary transition-colors flex flex-row items-center gap-1">
                <Icon name="home" className="text-[16px]" />
                Home
              </Link>
              <span className="text-outline-variant font-bold">
                /
              </span>
              <span className="text-primary font-semibold">
                Lessons
              </span>
            </nav>
            {/* Heading Block */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div className="max-w-3xl flex flex-col gap-space-xs">
                <div className="enter-up inline-flex flex-row items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-surface font-label-cultural-caps text-label-cultural-caps tracking-widest w-fit shadow-sm" style={d(80)}>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  AUDIO &amp; VIDEO CURRICULUM • STREAMED FROM BULAWAYO
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                  <SplitWords text="Master isiNdebele: Interactive Audio & Video Lessons" delay={140} />
                </h1>
                <p className="enter-up font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1 leading-relaxed" style={d(420)}>
                  Structured multimedia language courses and oral literature clinics taught by certified linguists and cultural storytellers from Matabeleland.
                </p>
              </div>
              {/* Metric Pill Counter */}
              <div className="enter-pop group flex flex-row items-center gap-3 bg-surface-container-lowest px-5 py-3 rounded-full shadow-sm shrink-0" style={d(560)}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex flex-row items-center justify-center text-primary">
                  <Icon name="school" idle hover="lift" className="text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary leading-none">
                    <span data-count="">48</span> Modules
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Accredited Content
                  </span>
                </div>
              </div>
            </div>
            {/* Integrated Search & Filter Spine */}
            <div className="enter-up" style={d(640)}>
              <LessonSearchSpine />
            </div>
          </div>
        </section>
        {/* Navigation Filters & Sorting Bar */}
        <div className="w-full bg-surface/90 border-b border-surface-container-high sticky top-[var(--header-offset)] z-30 backdrop-blur-md transition-[top] duration-500 ease-[var(--ease-out-quint)]">
          <LessonFilterBar />
        </div>
        {/* Main Showcase Container: Interactive Studio Player & Playlist (Spotlight) */}
        <section className="max-w-7xl mx-auto px-margin-desktop py-space-xl w-full" data-reveal="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            {/* LEFT 2/3 COLUMN: Main Video Player & Lesson Interactive Details */}
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              {/* Lesson stage */}
              <div className="bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-md flex flex-col">
                <LessonStage
                  variant="desktop"
                  image={img103}
                  alt="A Matabeleland teacher lecturing at a chalkboard inscribed with isiNdebele proverbs in a Bulawayo studio"
                />
                <div className="p-space-lg flex flex-col gap-space-md">
                  <StageMeta variant="desktop" />
                  <StageActions variant="desktop" />
                </div>
              </div>
              {/* Interactive Study Tabs (Notes, Transcript, Practice Quiz, Teacher) */}
              <StudyTabs
                notes={
                <div className="flex flex-col gap-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-[20px]">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Linguistic Concept: Izaga vs. Izisho
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      In isiNdebele literature, proverbs (
                      <strong className="text-on-surface">
                        Izaga
                      </strong>
                      ) serve as fixed communal truths passed down through generations to regulate behavior, instill patience, and praise valor. Idioms (
                      <strong className="text-on-surface">
                        Izisho
                      </strong>
                      ), conversely, are figurative verbal expressions whose literal translation shifts to describe specific emotional, social, or physical states.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between">
                      <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase tracking-wider font-bold">
                        Featured Vocabulary &amp; Proverbs in this Lesson
                      </span>
                      <span className="font-label-md text-label-md text-outline">
                        4 Selected Expressions
                      </span>
                    </div>
                    <div className="overflow-x-auto rounded-[20px] shadow-sm">
                      <table className="w-full text-left bg-surface-container-lowest">
                        <thead>
                          <tr className="bg-surface-container-high text-on-surface font-label-lg text-label-lg">
                            <th className="py-3 px-4 font-bold">
                              isiNdebele Term / Isaga
                            </th>
                            <th className="py-3 px-4 font-bold">
                              Literal Translation
                            </th>
                            <th className="py-3 px-4 font-bold">
                              Cultural Context &amp; Usage
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm">
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-primary">
                              Injobo enhle ithungelwa ebandla
                            </td>
                            <td className="py-3.5 px-4 text-on-surface-variant italic">
                              “A good skirt is sewn in public council”
                            </td>
                            <td className="py-3.5 px-4 text-on-surface">
                              Best results are achieved when seeking wise counsel from peers and elders.
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-primary">
                              Ukuhamba kubona
                            </td>
                            <td className="py-3.5 px-4 text-on-surface-variant italic">
                              “Traveling brings sight”
                            </td>
                            <td className="py-3.5 px-4 text-on-surface">
                              Experience and broader journeys broaden wisdom more than solitary reflection.
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-primary">
                              Ukuphosa itshe esizibeni
                            </td>
                            <td className="py-3.5 px-4 text-on-surface-variant italic">
                              “To cast a stone into a deep pool”
                            </td>
                            <td className="py-3.5 px-4 text-on-surface">
                              Idiom: To raise a provocative topic or venture into uncharted thoughts.
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-primary">
                              Isalakutshelwa sabona ngomopho
                            </td>
                            <td className="py-3.5 px-4 text-on-surface-variant italic">
                              “The obstinate one witnessed via blood flow”
                            </td>
                            <td className="py-3.5 px-4 text-on-surface">
                              Those who refuse wise warnings will invariably learn through painful consequences.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Notes Download Card */}
                  <div className="flex flex-row items-center justify-between p-4 bg-secondary-container/20 rounded-[20px]">
                    <div className="flex flex-row items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex flex-row items-center justify-center text-on-surface">
                        <Icon name="description" className="text-[20px]" />
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                          Handout: Izaga Lezisho Summary Sheet
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          4-page bilingual study guide with phonetic accents and practice drills (PDF, 2.4 MB)
                        </p>
                      </div>
                    </div>
                    <Link href="/contact?topic=materials" className="group bg-secondary-container hover:bg-secondary-fixed text-on-surface font-label-lg text-label-lg font-bold px-4 py-2 rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-all shrink-0">
                      <Icon name="download" className="text-[16px]" />
                      <span>
                        Request PDF
                      </span>
                    </Link>
                  </div>
                </div>
                }
              />
            </div>
            {/* RIGHT 1/3 COLUMN: Playlist Curriculum Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              {/* Playlist Box Container */}
              <CoursePlaylist variant="desktop" />
              {/* Instructor Mini Card */}
              <div className="group lift bg-surface-container-lowest p-5 rounded-[20px] shadow-sm flex flex-row items-center gap-4">
                <Image src={img104} alt={"Close up portrait of a smiling African linguistic scholar wearing a traditional patterned headband in an archival library in Bulawayo"} className="w-14 h-14 rounded-full object-cover shadow-sm shrink-0" sizes="160px" placeholder="blur" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-outline uppercase font-bold">
                    Featured Linguist
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary truncate">
                    Dr. Thabani Moyo
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    Dean of isiNdebele Studies, Hillside Teachers College
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Complete Catalog Grid: 6 Featured Lessons Across Levels */}
        <section className="w-full bg-surface-container-low px-margin-desktop py-space-2xl scroll-mt-40" id="lesson-archive" data-reveal="">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div>
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase font-bold tracking-wider">
                  Comprehensive Library
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                  Explore All Lessons in the Archive
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Self-paced clinics across grammar, dramatic readings, syntax, and poetry.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <LessonCount variant="desktop" />
              </div>
            </div>
            {/* Filterable lesson cards */}
            <LessonGrid />
            <div className="mt-space-md">
              <LoadMore variant="desktop" />
            </div>
          </div>
        </section>
        {/* Admin & Instructor Upload Panel (Teacher / Site Administrator Portal) */}
        <section className="max-w-7xl mx-auto px-margin-desktop py-space-2xl w-full" data-reveal="">
          <div className="bg-surface-container-lowest rounded-[20px] shadow-md overflow-hidden relative">
            {/* Distinctive Yellow Accent Bar */}
            <div className="ndebele-band h-3 w-full" />
            <div className="p-space-xl flex flex-col gap-space-xl">
              {/* Header & Admin Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md border-b border-surface-container-high">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <span className="bg-secondary-container text-on-surface font-label-cultural-caps text-label-cultural-caps px-3 py-0.5 rounded-full uppercase font-bold tracking-wider">
                      Educator Portal
                    </span>
                    <span className="font-label-md text-label-md text-outline">
                      Indlu Yokufundela CMS
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary mt-1">
                    Instructor &amp; Admin Publishing Studio
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    Propose new audio recordings, video lectures, and study worksheets. Our curriculum team reviews every submission before it is published for registered schools and learners across Zimbabwe.
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Icon name="verified_user" idle hover="beat" className="text-outline text-[24px]" />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Reviewed by Curriculum Team
                    </span>
                    <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant">
                      BULAWAYO REGISTRY
                    </span>
                  </div>
                </div>
              </div>
              {/* Publishing Form Grid */}
              <ActionForm
                kind="lesson-proposal"
                className="grid grid-cols-1 md:grid-cols-12 gap-space-lg"
                successTitle="Lesson proposal received"
                successBody="Thank you! Our curriculum team will review it and contact you to collect the media files before publishing."
              >
                {/* Lesson Title (Span 12) */}
                <div className="md:col-span-12 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Lesson Title
                  </label>
                  <input name="title" required className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="e.g. Grade 10 Poetry Deconstruction: Izibongo Zenkosi" type="text" />
                </div>
                {/* Contributor details (Span 6 + 6) */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Your Name
                  </label>
                  <input name="name" required autoComplete="name" className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="e.g. Sithandazile Dube" type="text" />
                </div>
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Email Address
                  </label>
                  <input name="email" required autoComplete="email" className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="you@school.ac.zw" type="email" />
                </div>
                {/* Media Type Selection (Span 6) */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Media Delivery Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="bg-surface-container-low p-3 rounded-full flex flex-row items-center justify-center gap-2 cursor-pointer has-[:checked]:bg-primary has-[:checked]:text-on-primary transition-all">
                      <input defaultChecked className="hidden" name="mediaType" value="video" type="radio" />
                      <Icon name="videocam" className="text-[18px]" />
                      <span className="font-label-md text-label-md font-semibold">
                        Video Masterclass
                      </span>
                    </label>
                    <label className="bg-surface-container-low p-3 rounded-full flex flex-row items-center justify-center gap-2 cursor-pointer has-[:checked]:bg-primary has-[:checked]:text-on-primary transition-all">
                      <input className="hidden" name="mediaType" value="audio" type="radio" />
                      <Icon name="headphones" className="text-[18px]" />
                      <span className="font-label-md text-label-md font-semibold">
                        Audio / Podcast
                      </span>
                    </label>
                  </div>
                </div>
                {/* Subject Category Dropdown (Span 6) */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Subject Category
                  </label>
                  <select name="category" className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer">
                    <option>
                      Grammar &amp; Orthography
                    </option>
                    <option>
                      Oral Literature &amp; Folklore
                    </option>
                    <option>
                      Exam Preparation (ZIMSEC)
                    </option>
                    <option>
                      Conversational isiNdebele
                    </option>
                    <option>
                      Poetry &amp; Izibongo
                    </option>
                  </select>
                </div>
                {/* Proficiency Level (Span 4) */}
                <div className="md:col-span-4 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Target Proficiency Level
                  </label>
                  <select name="level" className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer">
                    <option>
                      Beginner (Grade 1-7)
                    </option>
                    <option>
                      Intermediate (Form 1-4)
                    </option>
                    <option>
                      Advanced (A-Level / Tertiary)
                    </option>
                  </select>
                </div>
                {/* Module Series (Span 4) */}
                <div className="md:col-span-4 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Module Series Title
                  </label>
                  <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" name="series" placeholder="e.g. Matabeleland Folklore Series" type="text" />
                </div>
                {/* Lesson Order Number (Span 4) */}
                <div className="md:col-span-4 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Lesson Sequence #
                  </label>
                  <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" name="sequence" min={1} placeholder="e.g. 05" type="number" />
                </div>
                {/* Media File Drag-and-Drop Dropzone (Span 6) */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Primary Media File (MP4, MP3, WAV)
                  </label>
                  <FileDrop name="mediaFile" accept="video/mp4,audio/mpeg,audio/wav" icon="cloud_upload" title="Drop high-resolution media here" hint="or click to browse files (Up to 500MB)" />
                </div>
                {/* Supplementary Materials Dropzone (Span 6) */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Supplementary Study Notes (PDF, DOCX)
                  </label>
                  <FileDrop name="notesFile" accept=".pdf,.doc,.docx" icon="post_add" title="Attach Worksheet / Grammar PDF" hint="Vocab glossaries &amp; exercises (Up to 25MB)" iconWrapClassName="bg-secondary-container/40 text-on-surface" />
                </div>
                {/* Lesson Overview & Linguistic Notes (Span 12) */}
                <div className="md:col-span-12 flex flex-col gap-1.5">
                  <label className="font-label-lg text-label-lg font-bold text-on-surface">
                    Lesson Overview &amp; Linguistic Notes
                  </label>
                  <textarea className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md p-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" name="overview" placeholder="Provide a summary of the grammar rules, historical contexts, and conversational phrases analyzed in this session..." rows={4} />
                </div>
                {/* Publishing Buttons Bar (Span 12) */}
                <div className="md:col-span-12 flex flex-row items-center justify-end gap-3 pt-4 border-t border-surface-container-high">
                  <SaveDraftButton storageKey="indlu-lesson-draft" className="bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg px-6 py-3 rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap transition-colors" />
                  <button className="group bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold px-8 py-3 rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-md active:scale-95 transition-all" type="submit">
                    <SubmitLabel>
                      <Icon name="publish" className="text-[18px]" />
                      <span>
                        Submit Lesson for Review
                      </span>
                    </SubmitLabel>
                  </button>
                </div>
              </ActionForm>
            </div>
          </div>
        </section>
        {/* Community Support Banner: Offline Classroom Lesson Packs */}
        <section className="max-w-7xl mx-auto px-margin-desktop pb-space-2xl w-full" data-reveal="">
          <div className="bg-secondary-container rounded-[20px] p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm relative overflow-hidden">
            {/* Decorative Backdrop Circles */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/20 pointer-events-none animate-float" />
            <div className="absolute right-40 -top-10 w-28 h-28 rounded-full border-8 border-dashed border-on-surface/10 pointer-events-none animate-spin-slow" />
            <div className="flex flex-row items-start gap-space-md z-10">
              <div className="w-14 h-14 rounded-full bg-on-surface text-secondary-container flex flex-row items-center justify-center shrink-0 shadow-sm">
                <Icon name="usb" idle hover="beat" className="text-[28px]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-cultural-caps text-label-cultural-caps uppercase font-bold text-on-surface tracking-wider">
                  Offline Learning Initiative
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">
                  Request Offline Lesson USB &amp; DVD Packs for Rural Schools
                </h3>
                <p className="font-body-md text-body-md text-on-surface/85 max-w-2xl">
                  Ensuring zero digital divide across Matabeleland North and South. We provide preloaded high-capacity drives with complete video series, audio lectures, and printable study worksheets at no charge for community educators.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 shrink-0 z-10">
              <Link href="/contact?topic=usb-pack" className="group bg-on-surface hover:bg-inverse-surface hover:-translate-y-0.5 text-secondary-container font-label-lg text-label-lg font-bold px-7 py-3.5 rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-md transition-all">
                <Icon name="mail" className="text-[18px]" />
                <span>
                  Request School Pack
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      </LessonCatalogProvider>
      </CourseProvider>
    </div>
  );
}
