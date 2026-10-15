import { Icon } from "@/components/icons/icon";
import { CourseProvider, CoursePlaylist, LessonStage, StageActions, StageMeta } from "@/components/lessons/course";
import { LessonCatalogProvider, LessonCount, LessonFeed, LoadMore, MobileLessonFilters } from "@/components/lessons/lesson-catalog";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Accordion } from "@/components/ui/accordion";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { FileDrop } from "@/components/ui/file-drop";
import { Link } from "@/components/ui/link";
import { SaveDraftButton } from "@/components/ui/save-draft";
import img111 from "@/assets/images/lessons/111.webp";

export function LessonsMobile() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      <CourseProvider>
      <LessonCatalogProvider scope="m-lessons">
      <div className="flex flex-col w-full">
        {/* Top Banner & Breadcrumb Header */}
        <section className="px-margin pt-space-md pb-space-lg bg-surface">
          <nav aria-label="Breadcrumb" className="enter-up flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-sm" style={d(0)}>
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-primary font-bold">
              Lessons
            </span>
          </nav>
          <div className="enter-up inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-secondary-container text-on-secondary-container px-space-md py-1 rounded-full mb-space-sm font-label-cultural-caps text-label-cultural-caps" style={d(80)}>
            <Icon name="school" idle hover="lift" className="text-[16px]" />
            <span>
              AUDIO &amp; VIDEO CURRICULUM
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-space-xs">
            <SplitWords text="Master isiNdebele: Interactive Lessons" delay={120} />
          </h1>
          <p className="enter-up font-body-md text-body-md text-on-surface-variant leading-relaxed" style={d(380)}>
            Certified multimedia lessons, folktale clinics, and grammar guides from Bulawayo.
          </p>
          {/* Search + filter pills */}
          <div className="enter-up" style={d(480)}>
            <MobileLessonFilters />
          </div>
        </section>
        {/* Interactive Lesson Player Section */}
        <section className="px-margin py-space-md" data-reveal="">
          <div className="rounded-[20px] bg-surface-container-lowest shadow-md overflow-hidden p-space-md space-y-space-md">
            {/* Video Player Viewport */}
            <LessonStage
              variant="mobile"
              image={img111}
              alt="An educator in a Bulawayo studio explaining isiNdebele proverbs at a blackboard"
            />
            {/* Video Meta */}
            <StageMeta variant="mobile" />
            {/* Action Row */}
            <StageActions variant="mobile" />
            {/* Collapsible Accordions */}
            <div className="space-y-space-xs pt-space-xs">
              <Accordion
                defaultOpen
                icon="menu_book"
                title="Lesson Notes & Vocabulary"
                titleClassName="font-headline-sm text-title-editorial text-on-surface"
                className="rounded-[16px] bg-surface-container-low p-space-md"
                panelClassName="pt-space-sm"
              >
                <div className="space-y-space-sm">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Key proverb study for Module 2: communal consultation and deliberate problem-solving.
                </p>
                <div className="rounded-[12px] bg-surface-container-lowest p-space-sm space-y-space-xs shadow-sm">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold block uppercase">
                        Isaga (Proverb)
                      </span>
                      <span className="font-headline-sm text-title-editorial text-primary font-bold">
                        “Injobo enhle ithungelwa ebandla”
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-cultural-caps text-label-cultural-caps">
                      High Usage
                    </span>
                  </div>
                  <div className="pt-space-xs space-y-1">
                    <p className="font-body-sm text-body-sm text-on-surface">
                      <strong>Literal Meaning:</strong> A good loin ornament is crafted together in the gathering council.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      <strong>Conceptual Usage:</strong> No one succeeds in isolation; critical endeavors achieve perfection when open to collective wisdom and dialogue.
                    </p>
                  </div>
                </div>
                </div>
              </Accordion>
              <Accordion
                icon="playlist_play"
                title="Course Playlist (7 Lessons)"
                titleClassName="font-headline-sm text-title-editorial text-on-surface"
                className="rounded-[16px] bg-surface-container-low p-space-md"
              >
                <CoursePlaylist variant="mobile" />
              </Accordion>
            </div>
          </div>
        </section>
        {/* Featured Lesson Cards Feed (Single Column Mobile) */}
        <section className="px-margin py-space-md space-y-space-md scroll-mt-20" id="m-lesson-archive" data-reveal="">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold block uppercase">
                Recommended Next
              </span>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface tracking-tight">
                Curated Lessons
              </h2>
            </div>
            <LessonCount variant="mobile" />
          </div>
          {/* Filterable lesson feed */}
          <LessonFeed />
          <div className="pt-space-xs">
            <LoadMore variant="mobile" />
          </div>
        </section>
        {/* Mobile Admin Upload Panel */}
        <section className="px-margin py-space-md" data-reveal="">
          <div className="rounded-[20px] bg-surface-container-low p-space-md space-y-space-md shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <Icon name="add_task" idle hover="beat" className="text-[18px]" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-title-editorial text-on-surface">
                    Educator Publishing Desk
                  </h3>
                  <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant">
                    Curriculum Contributors
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-cultural-caps text-label-cultural-caps">
                Educator Desk
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Propose new multimedia lessons and grammar references. Our curriculum team reviews every submission before it joins the Indlu Yokufundela repository.
            </p>
            <ActionForm
              kind="lesson-proposal"
              className="space-y-space-sm"
              successTitle="Lesson proposal received"
              successBody="Thank you! Our curriculum team will review it and contact you to collect the media files."
            >
              {/* Lesson Title */}
              <div className="space-y-1">
                <label className="font-label-md text-label-md font-semibold text-on-surface block" htmlFor="m-lp-title">
                  Lesson Title
                </label>
                <input id="m-lp-title" name="title" required className="w-full h-[52px] px-space-md rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm" placeholder="e.g., Cikoza Sizwe: Poetic Meter" type="text" />
              </div>
              {/* Contributor */}
              <div className="grid grid-cols-1 gap-space-xs">
                <input name="name" required autoComplete="name" aria-label="Your name" className="w-full h-[52px] px-space-md rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm" placeholder="Your name" type="text" />
                <input name="email" required autoComplete="email" aria-label="Email address" className="w-full h-[52px] px-space-md rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm" placeholder="Email address" type="email" />
              </div>
              {/* Media Type Selector */}
              <div className="space-y-1">
                <span className="font-label-md text-label-md font-semibold text-on-surface block">
                  Media Format
                </span>
                <div className="grid grid-cols-2 gap-space-xs">
                  <label className="group flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-surface-container-lowest font-label-md text-label-md text-on-surface transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary has-[:checked]:shadow-sm">
                    <input type="radio" name="mediaType" value="video" defaultChecked className="sr-only" />
                    <Icon name="videocam" className="text-[18px]" />
                    <span>Video (MP4)</span>
                  </label>
                  <label className="group flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-surface-container-lowest font-label-md text-label-md text-on-surface transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary has-[:checked]:shadow-sm">
                    <input type="radio" name="mediaType" value="audio" className="sr-only" />
                    <Icon name="mic" className="text-[18px]" />
                    <span>Audio (MP3)</span>
                  </label>
                </div>
              </div>
              {/* Category & Level Dropdowns */}
              <div className="grid grid-cols-2 gap-space-xs">
                <div className="space-y-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface block" htmlFor="m-lp-category">
                    Category
                  </label>
                  <div className="relative">
                    <select id="m-lp-category" name="category" className="w-full h-[52px] px-space-md rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none shadow-sm">
                      <option>Izaga (Proverbs)</option>
                      <option>Phonetics</option>
                      <option>Folklore Audio</option>
                      <option>Formal Grammar</option>
                    </select>
                    <Icon name="expand_more" className="text-outline-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[20px]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface block" htmlFor="m-lp-level">
                    Level
                  </label>
                  <div className="relative">
                    <select id="m-lp-level" name="level" className="w-full h-[52px] px-space-md rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none shadow-sm">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                    <Icon name="expand_more" className="text-outline-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[20px]" />
                  </div>
                </div>
              </div>
              {/* File Upload Touch Area */}
              <div className="space-y-1">
                <span className="font-label-md text-label-md font-semibold text-on-surface block">
                  Media File
                </span>
                <FileDrop name="mediaFile" accept="video/mp4,audio/mpeg" icon="cloud_upload" title="Tap to select MP3 or MP4" hint="Maximum file size: 250MB" />
              </div>
              {/* Description Textarea */}
              <div className="space-y-1">
                <label className="font-label-md text-label-md font-semibold text-on-surface block" htmlFor="m-lp-overview">
                  Lesson Description
                </label>
                <textarea id="m-lp-overview" name="overview" className="w-full p-space-md rounded-[16px] bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm resize-none" placeholder="Add lesson summary, objectives, and linguistic context..." rows={3} />
              </div>
              {/* Actions */}
              <div className="space-y-space-xs pt-space-xs">
                <button className="group flex w-full min-h-[44px] h-[52px] rounded-full bg-primary text-on-primary font-headline-sm text-title-editorial flex-row items-center justify-center gap-2 whitespace-nowrap shadow-md hover:bg-primary-container active:scale-[0.98] transition-all" type="submit">
                  <SubmitLabel>
                    <Icon name="publish" className="text-[20px]" />
                    <span>Submit for Review</span>
                  </SubmitLabel>
                </button>
                <SaveDraftButton
                  storageKey="indlu-lesson-draft-m"
                  label="Save Draft"
                  className="flex w-full min-h-[44px] h-[48px] items-center justify-center rounded-full bg-surface-container text-on-surface font-headline-sm text-label-lg whitespace-nowrap hover:bg-surface-container-high transition-colors"
                />
              </div>
            </ActionForm>
          </div>
        </section>
        {/* Offline School Support Notice (Vibrant Sun Yellow) */}
        <section className="px-margin pt-space-md pb-space-xl" data-reveal="">
          <div className="rounded-[20px] bg-secondary-container text-on-secondary-container p-space-lg space-y-space-md shadow-md">
            <div className="flex items-start gap-space-sm">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm shrink-0">
                <Icon name="usb" idle hover="beat" className="text-[28px]" />
              </div>
              <div className="space-y-1">
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-bold uppercase tracking-wider block">
                  Spheth&apos;Imfundw&apos;Emoyeni
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-secondary-container leading-tight">
                  Offline Flash Drive Kits for Rural Matabeleland Schools
                </h3>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-secondary-container font-medium">
              Internet access should never be a boundary for language literacy. Indlu Yokufundela provides encrypted 64GB flash drives preloaded with our complete 48-lesson audio and video syllabus, printable worksheets, and audio folktales to educators across Matabeleland North and South.
            </p>
            <div className="pt-space-xs">
              <Link href="/contact?topic=usb-pack" className="group flex w-full min-h-[44px] h-[52px] rounded-full bg-on-background text-on-primary font-headline-sm text-title-editorial flex-row items-center justify-center gap-2 whitespace-nowrap shadow-md hover:bg-inverse-surface active:scale-[0.98] transition-all">
                <Icon name="local_shipping" className="text-[20px]" />
                <span>
                  Request USB Pack
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
