import { Icon } from "@/components/icons/icon";
import { StoreBadge, WaitlistForm } from "@/components/app/app-tools";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { Equalizer, Player, PlayerButton, PlayerLabel, PlayerProgress, PlayerTime } from "@/components/ui/player";
import { APP_LAUNCH } from "@/lib/site";

export function MobileAppMobile() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      <div className="flex flex-col w-full">
        {/* Top Decorative Ndebele Geometric Band */}
        <div className="w-full h-2.5 flex items-stretch">
          <div className="enter-grow flex-1 bg-primary" style={d(0)} />
          <div className="enter-grow flex-1 bg-secondary-fixed" style={d(90)} />
          <div className="enter-grow flex-1 bg-tertiary-container" style={d(180)} />
          <div className="enter-grow flex-1 bg-secondary-container" style={d(270)} />
          <div className="enter-grow flex-1 bg-primary-container" style={d(360)} />
          <div className="enter-grow flex-1 bg-secondary-fixed" style={d(450)} />
        </div>
        <div className="px-margin pt-space-md pb-space-2xl flex flex-col gap-space-lg">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="enter-up flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md" style={d(0)}>
            <Link className="group hover:text-primary transition-colors flex items-center gap-1" href="/">
              <Icon name="home" className="text-[16px]" />
              <span>
                Home
              </span>
            </Link>
            <Icon name="chevron_right" className="text-[14px] text-outline-variant" />
            <span className="text-primary font-semibold">
              Mobile App
            </span>
          </nav>
          {/* Header Section Badge */}
          <div className="enter-up flex flex-wrap items-center gap-space-xs" style={d(80)}>
            <span className="px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-cultural-caps text-label-cultural-caps uppercase tracking-wider">
              Upcoming App • iOS &amp; Android
            </span>
            <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold shadow-sm">
              Coming Soon ({APP_LAUNCH.window})
            </span>
          </div>
          {/* Hero Showcase Section */}
          <section className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
                <SplitWords text="Ndebele Literature & Oral Culture in Your Pocket." delay={140} />
              </h1>
              <p style={d(400)} className="enter-up font-body-md text-body-md text-on-surface-variant">
                Carry the voice of Bulawayo wherever you roam. Indlu Yokufundela is coming to mobile with zero-data offline learning, synchronized audio folktales, and dual-language classic literature designed for all ages.
              </p>
            </div>
            {/* Realistic Mobile App Mockup Frame */}
            <div className="enter-scale relative w-full rounded-[28px] bg-gradient-to-b from-primary via-primary-container to-primary p-3 shadow-md overflow-hidden" style={d(480)}>
              {/* Subtle Ndebele Chevron Texture in Background */}
              <svg className="absolute -right-12 -top-12 w-48 h-48 opacity-10 text-secondary-fixed pointer-events-none animate-spin-slow" fill="currentColor" viewBox="0 0 100 100">
                <polygon points="50,0 100,50 50,100 0,50" />
                <polygon fill="none" points="50,20 80,50 50,80 20,50" stroke="currentColor" strokeWidth="4" />
              </svg>
              <Player autoStart duration={165} start={99} className="w-full rounded-[22px] bg-surface-container-lowest flex flex-col gap-space-sm shadow-sm overflow-hidden p-space-sm">
                {/* Mockup Top Bar */}
                <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse" />
                    <span className="font-label-cultural-caps text-[10px] text-primary uppercase font-bold tracking-wider">
                      Indlu Yokufundela App
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-on-surface-variant">
                    <span>
                      9:41
                    </span>
                    <Icon name="wifi" className="text-[13px]" />
                    <Icon name="battery_full" className="text-[13px]" />
                  </div>
                </div>
                {/* Lesson Highlight Inside Mockup */}
                <div className="rounded-xl bg-surface-container-low p-space-sm flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-cultural-caps text-[9px] uppercase">
                      Featured Isaga
                    </span>
                    <span className="font-label-md text-label-md text-secondary font-bold flex items-center gap-1">
                      <PlayerLabel className="flex" on={<Equalizer className="h-3.5 gap-0.5" barClassName="bg-secondary" bars={4} />} off={<Icon name="volume_up" className="text-[14px]" />} />
                      <PlayerTime part="remaining" />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-title-editorial text-title-editorial text-primary font-bold">
                      “Isitsha esihle kasidleli.”
                    </p>
                    <p className="font-body-sm text-[12px] text-on-surface-variant italic">
                      A fine bowl is not eaten from forever. (Treasures do not last indefinitely.)
                    </p>
                  </div>
                  {/* Mini Audio Scrubber */}
                  <div className="flex flex-col gap-1 pt-1">
                    <PlayerProgress className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden flex" barClassName="bg-secondary-fixed" />
                    <div className="flex justify-between font-label-md text-[10px] text-outline">
                      <span>
                        Narrated by Usisi Omkhulu
                      </span>
                      <span>
                        Bulawayo Archives
                      </span>
                    </div>
                  </div>
                </div>
                {/* Lesson Action Tile Inside Mockup */}
                <div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-primary-fixed/40">
                  <PlayerButton label="click consonant audio drill" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0" iconClassName="text-[16px]" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[13px] text-on-primary-fixed leading-tight truncate">
                      Spheth&apos;Imfundw&apos;Emoyeni
                    </span>
                    <span className="font-body-sm text-[11px] text-on-primary-fixed-variant truncate">
                      Module 3 • Click Consonant Audio Drill
                    </span>
                  </div>
                </div>
              </Player>
            </div>
            {/* Notify Me at Launch Card */}
            <div className="rounded-[20px] bg-surface-container-low p-space-md flex flex-col gap-space-sm shadow-sm" data-reveal="">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs text-primary font-bold">
                  <Icon name="notifications_active" idle hover="ring" className="text-[20px] text-secondary" />
                  <span className="font-headline-sm text-headline-sm text-primary">
                    Get Early VIP Access
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Be the first to explore the beta release. We will send you an exclusive link when private invitations open.
                </p>
              </div>
              <WaitlistForm variant="mobile" />
              {/* Social Proof Micro Badge */}
              <div className="flex items-center gap-space-xs pt-1">
                <div className="flex -space-x-2" data-stagger="">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
                    B
                  </div>
                  <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[10px] font-bold">
                    M
                  </div>
                  <div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-[10px] font-bold">
                    E
                  </div>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Join{" "}
                  <strong className="text-on-surface" data-count="">
                    {APP_LAUNCH.waitlist}
                  </strong>
                  {" "}waiting for early beta access.
                </span>
              </div>
            </div>
            {/* App Store Badges with Coming Soon Badges */}
            <div className="grid grid-cols-2 gap-space-xs" data-stagger="">
              <StoreBadge platform="ios" className="p-space-sm rounded-[18px] bg-surface-container flex flex-col gap-1 items-start shadow-sm active:scale-[0.97] transition-transform">
                <span className="flex items-center gap-1.5 text-on-surface">
                  <Icon name="phone_iphone" hover="tilt" className="text-[22px]" />
                  <span className="flex flex-col leading-none">
                    <span className="font-label-md text-[10px] text-outline uppercase font-semibold">
                      Download on
                    </span>
                    <span className="font-title-editorial text-[13px] font-bold">
                      Apple App Store
                    </span>
                  </span>
                </span>
                <span className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-cultural-caps text-[9px] uppercase font-bold tracking-wider">
                  Coming Soon
                </span>
              </StoreBadge>
              <StoreBadge platform="android" className="p-space-sm rounded-[18px] bg-surface-container flex flex-col gap-1 items-start shadow-sm active:scale-[0.97] transition-transform">
                <span className="flex items-center gap-1.5 text-on-surface">
                  <Icon name="android" hover="wave" className="text-[22px]" />
                  <span className="flex flex-col leading-none">
                    <span className="font-label-md text-[10px] text-outline uppercase font-semibold">
                      Get it on
                    </span>
                    <span className="font-title-editorial text-[13px] font-bold">
                      Google Play
                    </span>
                  </span>
                </span>
                <span className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-cultural-caps text-[9px] uppercase font-bold tracking-wider">
                  Coming Soon
                </span>
              </StoreBadge>
            </div>
          </section>
          {/* Development Progress Tracker */}
          <section className="rounded-[20px] bg-surface-container-lowest p-space-md flex flex-col gap-space-md shadow-sm" data-reveal="">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase font-bold">
                  Engineering Roadmap
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary">
                  Development Progress
                </h2>
              </div>
              <span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-cultural-caps text-[10px] font-bold uppercase">
                Private Beta
              </span>
            </div>
            {/* Horizontal Bar with Percentage */}
            <div className="flex flex-col gap-space-xs">
              <div className="flex justify-between items-baseline font-title-editorial">
                <span className="font-bold text-primary text-headline-sm" data-count="">
                  78% Complete
                </span>
                <span className="font-label-md text-label-md text-outline">
                  Target: {APP_LAUNCH.window}
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden flex">
                <div className="grow-bar bg-primary h-full rounded-full w-[78%]" />
              </div>
            </div>
            {/* Milestones List */}
            <div className="flex flex-col gap-space-sm pt-space-xs" data-stagger="">
              {/* Milestone 1 */}
              <div className="flex items-start gap-space-sm">
                <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="check" className="text-[15px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-editorial text-[15px] text-on-surface font-semibold leading-tight">
                    Core Offline Engine Completed
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero-bandwidth SQLite storage &amp; local asset encryption finished.
                  </span>
                </div>
              </div>
              {/* Milestone 2 */}
              <div className="flex items-start gap-space-sm">
                <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="check" className="text-[15px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-editorial text-[15px] text-on-surface font-semibold leading-tight">
                    Audio &amp; Text Synchronization
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Parallel line-by-line audio mapping with elder speakers finalized.
                  </span>
                </div>
              </div>
              {/* Milestone 3 */}
              <div className="flex items-start gap-space-sm">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="hourglass_top" idle hover="spin" className="text-[15px]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-title-editorial text-[15px] text-on-surface font-semibold leading-tight">
                      Interactive Quiz Engine
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-secondary-container animate-pulse text-on-secondary-container font-label-cultural-caps text-[9px] uppercase">
                      In Progress
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Developing click consonant speech recognition and riddle cards.
                  </span>
                </div>
              </div>
              {/* Milestone 4 */}
              <div className="flex items-start gap-space-sm">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest text-outline flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="flag" idle hover="wave" className="text-[15px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-editorial text-[15px] text-outline font-semibold leading-tight">
                    Beta Launch &amp; School Deployment
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Scheduled rollout across pilot schools in Entumbane and Mhlahlandlela.
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Highlights */}
          <section className="flex flex-col gap-space-md" data-reveal="">
            <div className="flex flex-col gap-1">
              <span className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase font-bold">
                App Modules
              </span>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary">
                Everything Built for Deep Learning
              </h2>
            </div>
            <div className="flex flex-col gap-space-sm" data-stagger="">
              {/* Feature Card 1 */}
              <div className="group lift rounded-[20px] bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                    <Icon name="record_voice_over" idle className="text-[22px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-cultural-caps text-[10px] text-secondary font-bold uppercase">
                      Pronunciation &amp; Wisdom
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                      Interactive Language Lessons
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Master the subtle nuances of isiNdebele click consonants (c, q, x) and explore deep cultural wisdom with curated Izaga Lezisho proverb modules for daily practice.
                </p>
                <div className="mt-space-xs p-2 rounded-lg bg-surface-container flex items-center gap-2">
                  <Icon name="touch_app" hover="pop" className="text-[16px] text-primary" />
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Includes tactile phonics drills &amp; voice waveforms
                  </span>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="group lift rounded-[20px] bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                    <Icon name="podcasts" idle className="text-[22px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-cultural-caps text-[10px] text-secondary font-bold uppercase">
                      Oral Heritage Archives
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                      Audio Folktales &amp; Radio Plays
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Immerse yourself in broadcast-grade radio storytelling featuring Skyz Metro FM audio stories with Usisi Omkhulu, preserving regional folk legends and fireside tales.
                </p>
                <div className="mt-space-xs p-2 rounded-lg bg-surface-container flex items-center gap-2">
                  <Icon name="graphic_eq" className="text-[16px] text-secondary" />
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Over 140+ hours of studio-restored oral drama
                  </span>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="group lift rounded-[20px] bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                    <Icon name="menu_book" idle className="text-[22px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-cultural-caps text-[10px] text-tertiary font-bold uppercase">
                      Literary Reading Hub
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                      Digital E-Books &amp; Reader
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Read authentic Zimbabwean mother-tongue literature in an adjustable dual-language interface. Tap any sentence to view real-time grammatical notes and English definitions.
                </p>
                <div className="mt-space-xs p-2 rounded-lg bg-surface-container flex items-center gap-2">
                  <Icon name="translate" className="text-[16px] text-tertiary" />
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Instant side-by-side English annotations
                  </span>
                </div>
              </div>
              {/* Feature Card 4 */}
              <div className="group lift rounded-[20px] bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <Icon name="festival" idle className="text-[22px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-cultural-caps text-[10px] text-secondary font-bold uppercase">
                      Live Bulawayo Pulse
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                      Festival &amp; Event Alerts
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Stay in sync with community gatherings. Get calendar reminders for cultural festivities like Cikoza Sizwe at Bulawayo Amphitheatre and literary workshops.
                </p>
                <div className="mt-space-xs p-2 rounded-lg bg-surface-container flex items-center gap-2">
                  <Icon name="pin_drop" className="text-[16px] text-primary" />
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Direct alerts for arts workshops &amp; book launches
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Offline First Advantage Section */}
          <section className="rounded-[20px] bg-secondary-fixed p-space-md flex flex-col gap-space-sm text-on-secondary-fixed shadow-md" data-reveal="">
            <div className="flex items-center gap-space-xs">
              <span className="w-9 h-9 rounded-full bg-on-secondary-fixed text-secondary-fixed flex items-center justify-center shrink-0">
                <Icon name="cloud_off" idle className="text-[20px]" />
              </span>
              <span className="font-label-cultural-caps text-label-cultural-caps uppercase font-bold tracking-wider">
                Built for Matabeleland Classrooms
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-md-mobile text-headline-md-mobile text-on-secondary-fixed leading-tight">
                100% Offline-First Architecture
              </h3>
              <p className="font-body-md text-body-md text-on-secondary-fixed-variant">
                Internet connectivity should never limit learning. The entire Indlu Yokufundela syllabus, including recorded audio lectures and graded reader tracks, downloads directly to your device for smooth uninterrupted access in remote schools and community libraries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-xs pt-space-xs" data-stagger="">
              <div className="p-2.5 rounded-xl bg-on-secondary-fixed/10 flex items-center gap-2">
                <Icon name="signal_cellular_connected_no_internet_0_bar" className="text-[18px]" />
                <span className="font-label-md text-label-md font-bold">
                  Zero mobile data needed
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-on-secondary-fixed/10 flex items-center gap-2">
                <Icon name="sd_card" className="text-[18px]" />
                <span className="font-label-md text-label-md font-bold">
                  SD card backup support
                </span>
              </div>
            </div>
          </section>
          {/* Closed Beta Tester CTA */}
          <section className="rounded-[20px] bg-primary-container p-space-md text-on-primary flex flex-col gap-space-md shadow-md" data-reveal="">
            <div className="flex flex-col gap-space-xs">
              <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-[10px] uppercase font-bold tracking-wider self-start">
                Schools &amp; Educators
              </span>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-white leading-tight">
                Are you a teacher in Bulawayo or Matabeleland North &amp; South?
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container">
                Join our accredited school evaluation program. We are equipping classrooms in Entumbane, Mhlahlandlela, and surrounding districts with preloaded preview tablets for curriculum feedback.
              </p>
            </div>
            <div className="flex flex-col gap-space-sm">
              <Link href="/contact?topic=beta" className="group w-full h-[52px] rounded-full bg-secondary-fixed text-on-secondary-fixed font-title-editorial font-bold shadow-md hover:bg-secondary-fixed-dim active:scale-[0.98] transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap px-space-md">
                <span>
                  Join School Beta Cohort
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <span className="font-label-md text-label-md text-on-primary-container text-center">
                Accredited by Indlu Yokufundela Educational Trust
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
