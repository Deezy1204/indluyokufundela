import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { ShareButton } from "@/components/ui/share-actions";
import { CategoryTabs, FeaturedStage, PlaylistButton, VideoCount, VideoLibraryProvider, VideoList, VideoSearch } from "@/components/watch/video-library";
import { SITE } from "@/lib/site";
import img130 from "@/assets/images/watch/130.webp";
import img137 from "@/assets/images/watch/137.webp";
import img138 from "@/assets/images/watch/138.webp";
import img139 from "@/assets/images/watch/139.webp";

export function WatchMobile() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col bg-background">
      <VideoLibraryProvider>
      <div className="flex flex-col w-full">
        {/* Subtle Background Pattern Decoration */}
        <div className="relative w-full overflow-hidden px-4 pt-3 pb-8 space-y-6">
          {/* Ambient Ndebele Geometric Motif Background (SVG at low opacity) */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center select-none">
            <svg fill="none" height="100%" viewBox="0 0 390 800" width="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern height="60" id="m-ndebelePattern" patternUnits="userSpaceOnUse" width="60">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="#2E3192" strokeWidth="2" />
                <path d="M30 12L48 30L30 48L12 30Z" fill="none" stroke="#FFF000" strokeWidth="2" />
                <path d="M0 0L30 30L0 60" fill="none" stroke="#15157d" strokeWidth="1.5" />
                <path d="M60 0L30 30L60 60" fill="none" stroke="#15157d" strokeWidth="1.5" />
              </pattern>
              <rect fill="url(#m-ndebelePattern)" height="100%" width="100%" />
            </svg>
          </div>
          {/* SECTION 1: Header & Channel Showcase */}
          <section className="relative z-10 flex flex-col space-y-3">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="enter-up flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md" style={d(0)}>
              <Link className="group hover:text-primary transition-colors flex items-center gap-1" href="/">
                <Icon name="home" className="text-[16px]" />
                <span>
                  Home
                </span>
              </Link>
              <Icon name="chevron_right" className="text-[14px] text-outline" />
              <span className="text-primary font-bold">
                Watch
              </span>
            </nav>
            {/* Pill Channel Badge */}
            <div className="enter-up inline-flex items-center gap-2 self-start bg-surface-container px-3 py-1 rounded-full shadow-sm" style={d(80)}>
              <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
              <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase">
                YouTube Channel • Indlu Yokufundela
              </span>
            </div>
            {/* Headline & Subtitle */}
            <div className="space-y-1.5">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight tracking-tight">
                <SplitWords text="Watch & Listen: Living Voices of Ndebele Literature" delay={140} />
              </h1>
              <p className="enter-up font-body-sm text-body-sm text-on-surface-variant" style={d(420)}>
                Stream festival performances, masterclasses, and oral folktales directly from Matabeleland.
              </p>
            </div>
            {/* Channel Stats Indicator */}
            <div className="enter-up flex items-center gap-3 bg-surface-container-low p-2.5 rounded" style={d(520)}>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <Icon name="smart_display" idle hover="pop" className="text-[18px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-title-editorial text-xs font-bold text-on-surface">
                  14.8K Subscribers • 120+ Videos
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Updated weekly from Bulawayo Studio
                </span>
              </div>
            </div>
            {/* Primary Channel Subscription Action (Full-width Red Pill) */}
            <a className="group min-h-[44px] w-full bg-[#E50914] text-white hover:bg-[#C40812] active:scale-[0.99] font-label-lg text-label-lg rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-error" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
              <Icon name="play_circle" filled className="text-[20px]" />
              <span>
                Subscribe on YouTube ↗
              </span>
            </a>
          </section>
          {/* SECTION 2: Featured Large Video Player */}
          <section className="relative z-10 flex flex-col bg-surface-container-lowest rounded-[20px] shadow-sm overflow-hidden" data-reveal="">
            {/* 16:9 Aspect Media Container */}
            <FeaturedStage
              variant="mobile"
              image={img130}
              alt="A young poet reciting on the Cikoza Sizwe festival stage in Bulawayo"
              seconds={1455}
            />
            {/* Featured Video Meta and Actions */}
            <div className="p-4 flex flex-col space-y-3">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                <Icon name="visibility" className="text-primary text-[16px]" />
                <span>
                  18.4K views
                </span>
                <span>
                  •
                </span>
                <Icon name="location_on" className="text-primary text-[16px]" />
                <span>
                  Bulawayo Amphitheatre
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                Cikoza Sizwe Festival 2024: Grand Finale &amp; Izibongo Poetry Championship
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Witness celebrated author Dr. Barbara C. Makhalisa inaugurating the annual championship as talented youth poets revive oral traditions through fierce contemporary rhymes and cultural praise poetry.
              </p>
              {/* Horizontal Flex Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a className="group min-h-[44px] bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-transform active:scale-95" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
                  <Icon name="play_circle" className="text-[18px]" />
                  <span>
                    Watch Video ↗
                  </span>
                </a>
                <ShareButton title="Cikoza Sizwe Festival 2024: Grand Finale" path="/watch" className="min-h-[44px] bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-colors active:scale-95">
                  <Icon name="share" className="text-[18px]" />
                  <span>
                    Share
                  </span>
                </ShareButton>
              </div>
            </div>
          </section>
          {/* SECTION 3: Category Filter Tabs & Search */}
          <section className="relative z-10 flex flex-col space-y-3" data-reveal="">
            {/* Search Input Container */}
            <VideoSearch variant="mobile" />
            {/* Horizontally Scrollable Category Pills */}
            <CategoryTabs variant="mobile" />
          </section>
          {/* SECTION 4: Video Cards List / Single-Column Stack */}
          <section className="relative z-10 flex flex-col space-y-4 scroll-mt-20" id="m-video-library" data-reveal="">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
                Recent Uploads
              </h2>
              <VideoCount className="font-label-md text-xs text-primary font-semibold" />
            </div>
            <VideoList />
          </section>
          {/* SECTION 5: Curated Playlists Carousel (Horizontal Swipe) */}
          <section className="relative z-10 flex flex-col space-y-3 pt-2" data-reveal="">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
                  Curated Playlists
                </h2>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Selected learning tracks organized for study &amp; enjoyment
                </p>
              </div>
              <Icon name="playlist_play" idle hover="pop" className="text-primary text-[24px]" />
            </div>
            {/* Horizontal Carousel */}
            <div className="flex items-stretch gap-3 overflow-x-auto pb-2 -mx-4 px-4 custom-scroll-hidden scroll-smooth snap-x snap-mandatory">
              {/* Playlist Card 1 */}
              <div className="snap-start shrink-0 w-[260px] bg-surface-container-lowest rounded-[20px] shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="relative w-full h-32 bg-primary-container overflow-hidden">
                  <Image src={img137} alt={"Festive crowd enjoying outdoor performances at Bulawayo cultural arena with cultural dress and decorative banners, warm sunny afternoon, cinematic celebration"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                  <div className="absolute bottom-2 right-2 bg-inverse-surface/90 text-inverse-on-surface text-[11px] font-label-md px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Icon name="queue_music" className="text-[14px]" />
                    <span>
                      14 videos
                    </span>
                  </div>
                </div>
                <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-label-cultural-caps text-[10px] text-primary uppercase font-bold">
                      Annual Gathering
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-on-surface leading-tight mt-0.5">
                      Cikoza Sizwe 2024 Archive
                    </h3>
                  </div>
                  <PlaylistButton category="cikoza" target="m-video-library" className="min-h-[44px] w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-xs rounded-full flex flex-row items-center justify-center gap-1.5 whitespace-nowrap transition-colors mt-2">
                    <Icon name="play_circle" className="text-[16px]" />
                    <span>
                      View Full Playlist
                    </span>
                  </PlaylistButton>
                </div>
              </div>
              {/* Playlist Card 2 */}
              <div className="snap-start shrink-0 w-[260px] bg-surface-container-lowest rounded-[20px] shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="relative w-full h-32 bg-tertiary-container overflow-hidden">
                  <Image src={img138} alt={"High school students studying literature books around a library table in Zimbabwe, focused engaged expressions, notebooks and textbooks open, natural bright educational scene"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="absolute inset-0 bg-tertiary-container/40 mix-blend-multiply" />
                  <div className="absolute bottom-2 right-2 bg-inverse-surface/90 text-inverse-on-surface text-[11px] font-label-md px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Icon name="queue_music" className="text-[14px]" />
                    <span>
                      22 videos
                    </span>
                  </div>
                </div>
                <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-label-cultural-caps text-[10px] text-tertiary-container uppercase font-bold">
                      ZIMSEC Curriculum
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-on-surface leading-tight mt-0.5">
                      School Literature Guides
                    </h3>
                  </div>
                  <PlaylistButton category="masterclass" target="m-video-library" className="min-h-[44px] w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-xs rounded-full flex flex-row items-center justify-center gap-1.5 whitespace-nowrap transition-colors mt-2">
                    <Icon name="play_circle" className="text-[16px]" />
                    <span>
                      View Full Playlist
                    </span>
                  </PlaylistButton>
                </div>
              </div>
              {/* Playlist Card 3 */}
              <div className="snap-start shrink-0 w-[260px] bg-surface-container-lowest rounded-[20px] shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="relative w-full h-32 bg-secondary-container overflow-hidden">
                  <Image src={img139} alt={"Sound mixing console and studio audio gear in radio station, sound engineer adjusting faders with vintage headphones lying nearby, atmospheric radio studio in Bulawayo"} className="w-full h-full object-cover" sizes="(min-width: 640px) 576px, 100vw" placeholder="blur" />
                  <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
                  <div className="absolute bottom-2 right-2 bg-inverse-surface/90 text-inverse-on-surface text-[11px] font-label-md px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Icon name="queue_music" className="text-[14px]" />
                    <span>
                      38 videos
                    </span>
                  </div>
                </div>
                <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-label-cultural-caps text-[10px] text-secondary uppercase font-bold">
                      Broadcast Dramas
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-on-surface leading-tight mt-0.5">
                      Skyz Metro FM Radio Dramas
                    </h3>
                  </div>
                  <PlaylistButton category="radio" target="m-video-library" className="min-h-[44px] w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-xs rounded-full flex flex-row items-center justify-center gap-1.5 whitespace-nowrap transition-colors mt-2">
                    <Icon name="play_circle" className="text-[16px]" />
                    <span>
                      View Full Playlist
                    </span>
                  </PlaylistButton>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: High-Energy Yellow Banner CTA Card */}
          <section className="relative z-10 w-full bg-secondary-container text-on-secondary-fixed rounded-[20px] p-5 shadow-sm overflow-hidden" data-reveal="">
            {/* Decorative background accent */}
            <div aria-hidden="true" className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed-dim/30 pointer-events-none animate-float" />
            <div className="relative z-10 space-y-3 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-inverse-surface text-[#E50914] flex items-center justify-center shadow-sm">
                <Icon name="play_circle" filled idle hover="pop" className="text-[24px]" />
              </div>
              <div className="space-y-1">
                <h2 className="font-headline-sm text-headline-sm text-on-secondary-fixed leading-tight font-extrabold">
                  Join 14,800+ Cultural Observers
                </h2>
                <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant leading-relaxed">
                  Subscribe to{" "}
                  <strong className="text-on-secondary-fixed font-bold">
                    @IndluYokufundela
                  </strong>
                  {" "}for weekly live broadcasts, heritage workshops, and festival archives.
                </p>
              </div>
              {/* Full-width Red Button with YouTube Link */}
              <a className="group min-h-[44px] w-full bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white font-label-lg text-label-lg rounded-full flex flex-row items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary-fixed" href={SITE.youtube} rel="noopener noreferrer" target="_blank">
                <Icon name="subscriptions" filled className="text-[20px]" />
                <span>
                  Subscribe on YouTube ↗
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
      </VideoLibraryProvider>
    </div>
  );
}
