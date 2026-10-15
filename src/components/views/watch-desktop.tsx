import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { SaveToggle, ShareButton } from "@/components/ui/share-actions";
import { CategoryTabs, FeaturedStage, PlaylistButton, VideoCount, VideoGrid, VideoLibraryProvider, VideoSearch, VideoSort } from "@/components/watch/video-library";
import { SITE } from "@/lib/site";
import img117 from "@/assets/images/watch/117.webp";
import img127 from "@/assets/images/watch/127.webp";
import img128 from "@/assets/images/watch/128.webp";
import img129 from "@/assets/images/watch/129.webp";

export function WatchDesktop() {
  return (
    <div className="w-full bg-background">
      <VideoLibraryProvider>
      <div className="flex flex-col w-full relative">
        {/* Faint Geometric Ndebele Watermark Overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-5 z-0">
          <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="80" id="ndebele-chevron-pattern" patternUnits="userSpaceOnUse" width="80">
                <path d="M 0 40 L 40 0 L 80 40 L 40 80 Z" fill="none" stroke="#2E3192" strokeWidth="2" />
                <path d="M 20 40 L 40 20 L 60 40 L 40 60 Z" fill="none" stroke="#FFF000" strokeWidth="1.5" />
                <circle cx="40" cy="40" fill="#2E3192" r="4" />
                <path d="M 0 0 L 20 20 M 80 0 L 60 20 M 0 80 L 20 60 M 80 80 L 60 60" stroke="#15157d" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect fill="url(#ndebele-chevron-pattern)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl flex flex-col gap-space-2xl">
          {/* 1. Header & Channel Showcase Strip */}
          <section className="flex flex-col gap-space-lg">
            {/* Breadcrumb */}
            <nav className="enter-up flex items-center gap-2 font-label-md text-label-md text-on-surface-variant" style={d(0)}>
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <Icon name="chevron_right" className="text-[14px]" />
              <span className="text-on-surface font-bold">
                Watch
              </span>
            </nav>
            {/* Showcase Hero Header */}
            <div className="enter-up flex flex-col lg:flex-row lg:items-end justify-between gap-space-xl bg-surface-container-lowest p-space-xl rounded-[20px] shadow-sm" style={d(80)}>
              <div className="flex flex-col gap-space-sm max-w-2xl">
                <div className="inline-flex items-center gap-2 self-start bg-primary-fixed text-on-primary-fixed px-space-md py-1 rounded-full font-label-cultural-caps text-label-cultural-caps tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-error animate-ping" />
                  Official YouTube Channel • Indlu Yokufundela
                </div>
                <h1 className="font-display-hero-mobile md:font-headline-lg text-display-hero-mobile md:text-headline-lg text-primary tracking-tight font-black">
                  <SplitWords text="Watch & Listen: Living Voices of Ndebele Literature" delay={200} />
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Stream recorded festival performances, author masterclasses, oral folktales, and youth poetry slams from Bulawayo and across Matabeleland.
                </p>
              </div>
              {/* Channel Stats & Action Pill Group */}
              <div className="enter-pop flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-space-md bg-surface-container-low p-space-md rounded-2xl" style={d(520)}>
                <div className="flex items-center gap-3 pr-2">
                  <div className="w-12 h-12 rounded-full bg-error flex items-center justify-center text-on-error shrink-0 shadow-sm">
                    <Icon name="play_circle" filled idle hover="pop" className="text-2xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold" data-count="">
                      14.8K Subscribers
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      120+ Curated Archival Videos
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-space-xs">
                  <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-error text-on-error px-space-lg py-3 rounded-full font-label-lg text-label-lg font-bold shadow-sm hover:brightness-110 transition-all" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
                    <Icon name="smart_display" className="text-[18px]" />
                    Subscribe on YouTube ↗
                  </a>
                  <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-highest text-on-surface px-space-md py-3 rounded-full font-label-lg text-label-lg font-bold hover:bg-surface-dim transition-colors" href="#playlists">
                    <Icon name="playlist_play" className="text-[18px]" />
                    Explore Playlists
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* 2. Featured Large Video Player (Cinema Showcase) */}
          <section className="flex flex-col gap-space-md bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-md" data-reveal="">
            {/* 16:9 Cinema Container */}
            <FeaturedStage
              variant="desktop"
              image={img117}
              alt="Youth spoken-word performers and elder poets on the Bulawayo Amphitheatre stage"
              seconds={1455}
            />
            {/* Video Details & Actions */}
            <div className="p-space-lg md:p-space-xl flex flex-col gap-space-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase">
                    FEATURED PREMIERE • FESTIVAL HIGHLIGHT
                  </span>
                  <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold tracking-tight">
                    Cikoza Sizwe Festival 2024: The Grand Finale &amp; Izibongo Poetry Championship
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 font-body-sm text-body-sm text-on-surface-variant pt-1">
                    <span className="flex items-center gap-1">
                      <Icon name="calendar_today" className="text-[16px]" />
                      Oct 14, 2024
                    </span>
                    <span>
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="visibility" className="text-[16px]" />
                      18,420 views
                    </span>
                    <span>
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="location_on" className="text-[16px]" />
                      Bulawayo Amphitheatre Live
                    </span>
                  </div>
                </div>
                {/* Video Interaction Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary-container text-on-primary px-5 py-2.5 rounded-full font-label-lg text-label-lg font-bold shadow-sm hover:bg-primary transition-colors" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
                    <Icon name="smart_display" className="text-[18px]" />
                    Watch on YouTube ↗
                  </a>
                  <ShareButton title="Cikoza Sizwe Festival 2024: The Grand Finale" path="/watch" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-high text-on-surface px-4 py-2.5 rounded-full font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors">
                    <Icon name="share" className="text-[18px]" />
                    Share Video
                  </ShareButton>
                  <SaveToggle storageKey="indlu-saved-cikoza-2024-finale" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-high text-on-surface px-4 py-2.5 rounded-full font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors" />
                  <Link className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container-high text-on-surface px-4 py-2.5 rounded-full font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors" href="/contact?topic=transcript">
                    <Icon name="description" className="text-[18px]" />
                    Request Transcript (PDF)
                  </Link>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl leading-relaxed pt-2">
                Experience the electrifying final day of the 4th Biennial Cikoza Sizwe Literature Festival in Bulawayo. High school poets from Mpopoma High and Luveve High take the stage alongside keynote reflections by renowned novelist Dr. Barbara C. Makhalisa, celebrating rhythmic oratorical power, traditional lineage praise, and the contemporary evolution of Ndebele literary arts.
              </p>
            </div>
          </section>
          {/* 3. Category Filter Tabs & Toolbar */}
          <section className="flex flex-col gap-space-md scroll-mt-28" id="browseSection" data-reveal="">
            <VideoCount className="font-label-md text-label-md text-on-surface-variant" />
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
              {/* Interactive Pill Filter Tabs */}
              <CategoryTabs variant="desktop" />
              {/* Search & Sort Controls */}
              <div className="flex flex-row items-center gap-3">
                {/* Search Field */}
                <VideoSearch variant="desktop" />
                {/* Sort Select */}
                <VideoSort />
              </div>
            </div>
          </section>
          {/* 4. Responsive Video Card Grid (3 Columns on Desktop) */}
          <section data-reveal="">
            <VideoGrid />
          </section>
          {/* 5. Curated Playlists Carousel / Strip */}
          <section className="flex flex-col gap-space-lg" id="playlists" data-reveal="">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase tracking-wider">
                  STRUCTURED LEARNING LISTS
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold tracking-tight">
                  Curated Playlists for Classrooms &amp; Enthusiasts
                </h2>
              </div>
              <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap text-primary font-label-lg text-label-lg font-bold hover:underline self-start sm:self-auto" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
                See All 12 Playlists on YouTube →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg" data-stagger="">
              {/* Playlist Card 1 */}
              <div className="flex flex-col bg-surface-container-lowest rounded-[20px] p-5 shadow-sm lift group">
                {/* Stacked Thumbnail Effect */}
                <div className="relative w-full aspect-video mb-4">
                  <div className="absolute -top-2 left-3 right-3 h-full bg-primary/20 rounded-xl -z-10" />
                  <div className="zoom-media w-full h-full rounded-2xl overflow-hidden relative shadow-sm">
                    <Image src={img127} alt={"High energy crowd at Cikoza Sizwe cultural literary festival cheering for youth poets on an outdoor stage in Bulawayo Zimbabwe"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-label-md text-label-md flex items-center gap-1">
                        <Icon name="playlist_play" className="text-[16px]" />
                        14 Videos
                      </span>
                      <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                        Festival Series
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                  Complete Cikoza Sizwe 2024 Archive
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4 grow">
                  Full keynotes, high school slam rounds, book launches, and panel conversations from all three festival days.
                </p>
                <PlaylistButton category="cikoza" target="browseSection" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container text-primary hover:bg-primary hover:text-on-primary py-2.5 px-4 rounded-full font-label-lg text-label-lg font-bold transition-all">
                  View Full Playlist <Icon name="arrow_forward" className="text-[16px]" />
                </PlaylistButton>
              </div>
              {/* Playlist Card 2 */}
              <div className="flex flex-col bg-surface-container-lowest rounded-[20px] p-5 shadow-sm lift group">
                {/* Stacked Thumbnail Effect */}
                <div className="relative w-full aspect-video mb-4">
                  <div className="absolute -top-2 left-3 right-3 h-full bg-secondary-container/40 rounded-xl -z-10" />
                  <div className="zoom-media w-full h-full rounded-2xl overflow-hidden relative shadow-sm">
                    <Image src={img128} alt={"Stack of African literature study guide books beside notebooks and fountain pens on a study desk, clean modern lighting"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-label-md text-label-md flex items-center gap-1">
                        <Icon name="playlist_play" className="text-[16px]" />
                        22 Videos
                      </span>
                      <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                        Curriculum Aid
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                  Grade 8–Tertiary Literature Guides
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4 grow">
                  Chapter analyses, character studies, and essay prompt deconstructions tailored for secondary syllabus requirements.
                </p>
                <PlaylistButton category="masterclass" target="browseSection" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container text-primary hover:bg-primary hover:text-on-primary py-2.5 px-4 rounded-full font-label-lg text-label-lg font-bold transition-all">
                  View Full Playlist <Icon name="arrow_forward" className="text-[16px]" />
                </PlaylistButton>
              </div>
              {/* Playlist Card 3 */}
              <div className="flex flex-col bg-surface-container-lowest rounded-[20px] p-5 shadow-sm lift group">
                {/* Stacked Thumbnail Effect */}
                <div className="relative w-full aspect-video mb-4">
                  <div className="absolute -top-2 left-3 right-3 h-full bg-tertiary/20 rounded-xl -z-10" />
                  <div className="zoom-media w-full h-full rounded-2xl overflow-hidden relative shadow-sm">
                    <Image src={img129} alt={"Vintage sound console and reel tape in an African broadcast archive room, nostalgic radio theatre vibe"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-label-md text-label-md flex items-center gap-1">
                        <Icon name="playlist_play" className="text-[16px]" />
                        38 Videos
                      </span>
                      <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                        Audio Heritage
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                  Radio Drama Theatre Archives
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4 grow">
                  Remastered historic and modern audio theatre productions capturing rural idioms and township experiences.
                </p>
                <PlaylistButton category="radio" target="browseSection" className="flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container text-primary hover:bg-primary hover:text-on-primary py-2.5 px-4 rounded-full font-label-lg text-label-lg font-bold transition-all">
                  View Full Playlist <Icon name="arrow_forward" className="text-[16px]" />
                </PlaylistButton>
              </div>
            </div>
          </section>
          {/* 6. YouTube Community & Notification Callout Banner */}
          <section className="bg-secondary-container text-on-secondary-fixed rounded-[20px] p-space-xl md:p-space-2xl relative overflow-hidden shadow-sm" data-reveal="">
            {/* Decorative Geo Accents */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/10 pointer-events-none animate-float" />
            <div className="absolute right-1/3 -top-12 w-36 h-36 rounded-full border-8 border-dashed border-on-secondary-fixed/10 pointer-events-none animate-spin-slow" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
              <div className="flex flex-col gap-space-sm max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 self-center lg:self-start bg-black/10 px-3 py-1 rounded-full font-label-cultural-caps text-label-cultural-caps uppercase font-bold text-on-secondary-fixed">
                  <Icon name="notifications_active" idle className="text-[16px]" />
                  COMMUNITY &amp; BROADCAST NOTIFICATIONS
                </div>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-secondary-fixed tracking-tight">
                  Never Miss a New Episode or Live Broadcast
                </h2>
                <p className="font-body-md text-body-md text-on-secondary-fixed leading-relaxed">
                  Subscribe to our YouTube channel{" "}
                  <strong>
                    @IndluYokufundela
                  </strong>
                  {" "}and turn on notifications for weekly cultural broadcasts, youth recitals, and festival livestreams straight from Matabeleland.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
                <a className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-error text-on-error px-space-xl py-4 rounded-full font-label-lg text-label-lg font-bold shadow-md hover:bg-error/90 transition-all" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
                  <Icon name="smart_display" className="text-[20px]" />
                  Subscribe Now on YouTube (14.8K)
                </a>
                <Link className="group flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary-container text-on-primary px-space-lg py-4 rounded-full font-label-lg text-label-lg font-bold shadow-md hover:bg-primary transition-all" href="/contact?topic=community">
                  <Icon name="forum" className="text-[20px]" />
                  Join Our Community
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      </VideoLibraryProvider>
    </div>
  );
}
