import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { StoreBadge, WaitlistForm } from "@/components/app/app-tools";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Equalizer, Player, PlayerButton, PlayerProgress, PlayerSkip, PlayerTime, PlayerZoom } from "@/components/ui/player";
import { APP_LAUNCH } from "@/lib/site";
import img030 from "@/assets/images/app/030.webp";
import img031 from "@/assets/images/app/031.webp";
import img032 from "@/assets/images/app/032.webp";
import img033 from "@/assets/images/app/033.webp";

export function MobileAppDesktop() {
  return (
    <div className="w-full bg-surface">
      <div className="flex flex-col w-full">
        {/* Top Breadcrumb & Status Anchor */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop pt-8 pb-4">
          <div className="enter-up flex flex-wrap items-center justify-between gap-4" style={d(0)}>
            <nav className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface-variant">
              <Link href="/" className="group hover:text-primary transition-colors flex items-center gap-1.5">
                <Icon name="home" className="text-[18px]" />
                Home
              </Link>
              <span className="text-outline-variant font-medium">
                /
              </span>
              <span className="text-primary font-bold">
                Mobile App
              </span>
            </nav>
            <div className="flex items-center gap-2.5 bg-surface-container px-4 py-2 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-fixed" />
              </span>
              <span className="font-label-cultural-caps text-label-cultural-caps tracking-widest text-on-surface uppercase">
                Upcoming Mobile Experience • iOS &amp; Android
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold tracking-normal">
                Coming Soon ({APP_LAUNCH.window})
              </span>
            </div>
          </div>
        </section>
        {/* Hero Section with Overlapping Mockups & Early Access */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Notification */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="enter-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary font-label-lg text-label-lg w-max" style={d(60)}>
                <Icon name="smartphone" idle hover="tilt" className="text-[18px]" />
                <span>
                  Spheth&apos;Imfundw&apos;Emoyeni Digital Suite
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-none">
                <SplitWords text="Ndebele Literature & Oral Culture, Anywhere in the World." delay={120} />
              </h1>
              <p style={d(460)} className="enter-up font-body-lg text-body-lg text-on-surface-variant max-w-[580px] leading-relaxed">
                The entire Indlu Yokufundela archive is coming directly to your smartphone. Practice interactive lessons offline, stream folklore audiobooks, read digital anthologies, and get live Cikoza Sizwe festival updates.
              </p>
              {/* Store Pre-Registration Badges */}
              <div className="enter-up flex flex-wrap items-center gap-4 pt-2" style={d(560)}>
                {/* App Store Badge */}
                <StoreBadge platform="ios" className="relative cursor-pointer bg-inverse-surface text-inverse-on-surface px-5 py-3 rounded-2xl flex items-center gap-3.5 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all">
                  <Icon name="file_download" hover="drop" className="text-[32px] text-white" />
                  <span className="flex flex-col text-left">
                    <span className="font-label-md text-[10px] uppercase text-outline-variant tracking-wider leading-tight">
                      Pre-register on
                    </span>
                    <span className="font-title-editorial text-title-editorial font-bold text-white leading-tight">
                      Apple App Store
                    </span>
                  </span>
                  <span className="absolute -top-2.5 -right-2 bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-[9px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider shadow-sm transition-transform group-hover:-rotate-6 group-hover:scale-110">
                    {APP_LAUNCH.window}
                  </span>
                </StoreBadge>
                {/* Google Play Badge */}
                <StoreBadge platform="android" className="relative cursor-pointer bg-inverse-surface text-inverse-on-surface px-5 py-3 rounded-2xl flex items-center gap-3.5 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all">
                  <Icon name="play_arrow" filled hover="nudge" className="text-[30px] text-secondary-fixed" />
                  <span className="flex flex-col text-left">
                    <span className="font-label-md text-[10px] uppercase text-outline-variant tracking-wider leading-tight">
                      Get it on
                    </span>
                    <span className="font-title-editorial text-title-editorial font-bold text-white leading-tight">
                      Google Play
                    </span>
                  </span>
                  <span className="absolute -top-2.5 -right-2 bg-secondary-fixed text-on-secondary-fixed font-label-cultural-caps text-[9px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider shadow-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
                    Pre-reg open
                  </span>
                </StoreBadge>
              </div>
              {/* Early Access Box */}
              <div className="enter-up mt-4 p-6 rounded-3xl bg-surface-container-low shadow-sm flex flex-col gap-3 max-w-[620px]" style={d(660)}>
                <div className="flex items-center justify-between">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-widest uppercase">
                    VIP BETA LIST
                  </span>
                  <span className="font-label-md text-label-md text-secondary font-bold flex items-center gap-1">
                    <Icon name="verified" idle className="text-[16px]" />
                    Closed Cohort 01
                  </span>
                </div>
                <WaitlistForm variant="desktop" />
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                  <Icon name="groups" idle className="text-[18px] text-primary shrink-0" />
                  <span>
                    Join <span data-count="">{APP_LAUNCH.waitlist}</span> readers and educators waiting for early beta access. No spam, ever.
                  </span>
                </p>
              </div>
            </div>
            {/* Right Column: Visual Device Mockup Composite */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
              {/* Sunburst decorative background element */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-secondary-fixed/25 blur-3xl -z-10 animate-float [animation-duration:9s]" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-primary-container/20 blur-2xl -z-10 translate-x-12 translate-y-12 animate-float [animation-duration:11s] [animation-delay:-4s]" />
              {/* Devices Container */}
              <div className="enter-scale relative w-full max-w-[440px] h-[580px] flex items-center justify-center" style={d(280)}>
                {/* Secondary Device (Background Left - Reading Screen) */}
                <div className="absolute left-0 top-6 w-[240px] h-[480px] rounded-[36px] bg-inverse-surface shadow-xl p-3 flex flex-col -rotate-6 transform hover:rotate-0 transition-transform duration-500 z-10 animate-float [animation-duration:7s] [animation-delay:-3.5s]">
                  {/* Screen Shell */}
                  <div className="w-full h-full rounded-[28px] bg-surface flex flex-col overflow-hidden relative">
                    {/* Mock Status Bar */}
                    <div className="h-6 w-full flex items-center justify-between px-4 pt-1 bg-surface-container-low">
                      <span className="text-[10px] font-bold text-on-surface">
                        09:41
                      </span>
                      <div className="flex items-center gap-1">
                        <Icon name="signal_cellular_alt" className="text-[12px] text-on-surface" />
                        <Icon name="wifi" className="text-[12px] text-on-surface" />
                        <Icon name="battery_full" className="text-[12px] text-on-surface" />
                      </div>
                    </div>
                    {/* Reader Header */}
                    <div className="p-3 bg-surface-container-low flex items-center justify-between">
                      <Icon name="arrow_back" className="text-[18px] text-primary" />
                      <span className="font-label-cultural-caps text-[9px] font-extrabold uppercase text-primary tracking-wider">
                        Mhlahlandlela Reader
                      </span>
                      <Icon name="bookmark_border" className="text-[18px] text-on-surface" />
                    </div>
                    {/* Reader Mock Content */}
                    <div className="p-3.5 flex flex-col gap-2.5 overflow-hidden">
                      <div className="h-28 w-full rounded-xl overflow-hidden relative shadow-sm">
                        <Image src={img030} alt={"Traditional Ndebele rural landscape with stone formations and an acacia tree beneath golden morning sunlight in Matabeleland Bulawayo Zimbabwe, richly saturated colors"} className="w-full h-full object-cover" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
                        <span className="absolute bottom-2 left-2 bg-inverse-surface/80 text-inverse-on-surface text-[8px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                          Folktale 04
                        </span>
                      </div>
                      <h4 className="font-title-editorial text-[14px] font-bold text-primary leading-tight">
                        Ugwalo Lwezindaba: Inyoni Yezulu
                      </h4>
                      <p className="font-body-sm text-[11px] leading-relaxed text-on-surface-variant line-clamp-4">
                        Kudala kwakukhona inyoni eyayibizwa ngokuthi yinyoni yezulu. Inyoni le yayilombala okhazimulayo njengenyanga esibhakabhakeni...
                      </p>
                      <div className="mt-auto p-2 bg-surface-container rounded-xl flex items-center justify-between">
                        <span className="font-label-md text-[10px] text-primary font-bold">
                          Parallel English
                        </span>
                        <Icon name="translate" idle className="text-[14px] text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Primary Device (Foreground Right - Interactive Audio Player) */}
                <div className="absolute right-0 top-0 w-[260px] h-[520px] rounded-[40px] bg-on-surface shadow-2xl p-3.5 flex flex-col rotate-3 transform hover:rotate-0 transition-transform duration-500 z-20 animate-float [animation-duration:7s]">
                  {/* Screen Shell */}
                  <div className="w-full h-full rounded-[30px] bg-surface-container-lowest flex flex-col overflow-hidden relative shadow-inner">
                    {/* Top Bezel & Camera Cutout */}
                    <div className="h-6 w-full flex items-center justify-between px-4 pt-1 bg-surface-container-lowest">
                      <span className="text-[10px] font-bold text-on-surface">
                        10:24
                      </span>
                      <div className="w-16 h-3.5 bg-on-surface rounded-full mx-auto" />
                      <div className="flex items-center gap-1">
                        <Icon name="offline_pin" className="text-[12px] text-on-surface" />
                        <Icon name="battery_charging_full" className="text-[12px] text-on-surface" />
                      </div>
                    </div>
                    {/* Main Player UI (silent preview until the app's audio ships) */}
                    <Player autoStart duration={1390} start={868} className="p-4 flex flex-col flex-1 justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                          <span className="font-label-cultural-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">
                            Usisi Omkhulu Audio
                          </span>
                        </div>
                        <Icon name="offline_bolt" idle className="text-[18px] text-primary" />
                      </div>
                      {/* Cover Art */}
                      <div className="w-full h-36 rounded-2xl overflow-hidden relative shadow-md my-2">
                        <PlayerZoom className="w-full h-full">
                          <Image src={img031} alt={"An elderly isiNdebele matriarch storyteller narrating oral folklore around an evening fire with attentive young listeners, rich atmospheric warm lighting, authentic Matabeleland Bulawayo cultural heritage aesthetic"} className="w-full h-full object-cover" sizes="260px" placeholder="blur" />
                        </PlayerZoom>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-between p-2.5">
                          <span className="text-[11px] font-title-editorial font-bold text-white">
                            Skyz Metro FM Archive
                          </span>
                          <Equalizer className="h-4 gap-0.5" barClassName="bg-secondary-fixed" bars={4} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-[10px] text-secondary font-bold uppercase">
                          Folklore Audio Book
                        </span>
                        <h4 className="font-title-editorial text-[15px] font-extrabold text-primary leading-tight">
                          Imvelo Yentumbane
                        </h4>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">
                          Narrated by Usisi Omkhulu
                        </p>
                      </div>
                      {/* Waveform / Scrubber Graphic */}
                      <div className="flex flex-col gap-1.5 py-1">
                        <PlayerProgress className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex" barClassName="bg-primary-container" />
                        <div className="flex items-center justify-between text-[10px] text-on-surface-variant font-medium">
                          <PlayerTime part="elapsed" />
                          <PlayerTime part="duration" />
                        </div>
                      </div>
                      {/* Player Controls */}
                      <div className="flex items-center justify-center gap-4 py-1">
                        <PlayerSkip by={-10} className="flex text-on-surface-variant hover:text-primary" />
                        <PlayerButton label="Imvelo Yentumbane preview" className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-md hover:scale-105 transition-transform" iconClassName="text-[24px]" />
                        <PlayerSkip by={30} className="flex text-on-surface-variant hover:text-primary" />
                      </div>
                      {/* Lesson Badge */}
                      <div className="bg-surface-container-low px-3 py-1.5 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Icon name="quiz" idle className="text-[16px] text-primary" />
                          <span className="text-[10px] font-bold text-on-surface">
                            3 Izaga in this chapter
                          </span>
                        </div>
                        <Link href="/lessons" className="text-[10px] font-bold text-primary underline hover:text-secondary">
                          Practice
                        </Link>
                      </div>
                    </Player>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Development Roadmap Tracker */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop py-12" data-reveal="">
          <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-3xl shadow-sm flex flex-col gap-8">
            {/* Roadmap Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-black uppercase tracking-widest">
                  ROADMAP TO LAUNCH
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Active Engineering Sprints
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Track our engineering progress as we prepare the native release for Southern Africa and the global diaspora.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero text-[42px] leading-none text-primary font-black" data-count="">
                    78%
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface-variant font-bold">
                    Completed
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-extrabold uppercase">
                  Beta Testing Stage
                </span>
              </div>
            </div>
            {/* Linear Overall Progress Bar */}
            <div className="w-full bg-surface-container h-3.5 rounded-full overflow-hidden p-0.5">
              <div className="grow-bar bg-gradient-to-r from-primary-container via-primary to-secondary-fixed h-full rounded-full w-[78%]" />
            </div>
            {/* 4 Milestone Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-stagger="">
              {/* Milestone 1 */}
              <div className="lift p-5 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center">
                    <Icon name="check" className="text-[18px]" />
                  </span>
                  <span className="font-label-cultural-caps text-[10px] font-bold text-on-tertiary-container uppercase">
                    Milestone 01
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-title-editorial text-title-editorial font-bold text-on-surface">
                    Core Architecture &amp; Offline Storage
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    SQLite local caching for texts and zero-overhead dictionary indexes.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-tertiary-container">
                  <Icon name="task_alt" className="text-[16px]" />
                  <span>
                    Completed • Verified
                  </span>
                </div>
              </div>
              {/* Milestone 2 */}
              <div className="lift p-5 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center">
                    <Icon name="check" className="text-[18px]" />
                  </span>
                  <span className="font-label-cultural-caps text-[10px] font-bold text-on-tertiary-container uppercase">
                    Milestone 02
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-title-editorial text-title-editorial font-bold text-on-surface">
                    Audio Player &amp; Archival Sync
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Stream and bookmark folklore archives with variable speed and auto-resume.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-tertiary-container">
                  <Icon name="task_alt" className="text-[16px]" />
                  <span>
                    Completed • Verified
                  </span>
                </div>
              </div>
              {/* Milestone 3 */}
              <div className="lift p-5 rounded-2xl bg-surface-container-high flex flex-col justify-between gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">
                    <Icon name="autorenew" idle hover="spin" className="text-[18px]" />
                  </span>
                  <span className="font-label-cultural-caps text-[10px] font-black text-secondary uppercase">
                    Milestone 03
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-title-editorial text-title-editorial font-bold text-primary">
                    Interactive Izaga Quiz Engine
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Dynamic spaced-repetition algorithms for idioms and consonant phonetics.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md font-bold text-secondary">
                    In Progress • 85%
                  </span>
                  <div className="w-20 bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="grow-bar bg-secondary-fixed h-full w-[85%]" style={d(700)} />
                  </div>
                </div>
              </div>
              {/* Milestone 4 */}
              <div className="lift p-5 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-4 opacity-90">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
                    <Icon name="schedule" idle className="text-[18px]" />
                  </span>
                  <span className="font-label-cultural-caps text-[10px] font-bold text-on-surface-variant uppercase">
                    Milestone 04
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-title-editorial text-title-editorial font-bold text-on-surface">
                    Public Beta Deployment
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    TestFlight release for Apple devices and open Play Store Early Access track.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-primary">
                  <Icon name="event" className="text-[16px]" />
                  <span>
                    Scheduled {APP_LAUNCH.betaDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Features Bento Grid */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop py-12" data-reveal="">
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase font-extrabold tracking-widest">
              EVERYTHING IN ONE APP
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Crafted for Literary Preservation
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[680px]">
              Each module has been designed alongside teachers, linguists, and Matabeleland storytellers to respect original cadence and orthography.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger="">
            {/* Feature 1: Interactive Lessons */}
            <div className="group lift bg-surface-container-lowest p-8 rounded-[24px] shadow-sm flex flex-col justify-between gap-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                  <Icon name="record_voice_over" idle className="text-[28px]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-cultural-caps text-[10px] font-bold text-primary uppercase">
                  Spoken Phonetics
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Interactive Language Lessons
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bite-sized multimedia lessons for click consonants (c, q, x), proverbs (Izaga), and grammar with interactive voice playback and spaced repetition. Hear native pronunciations recorded by linguists from Bulawayo.
                </p>
              </div>
              {/* Inline lesson preview card snippet */}
              <Player duration={4} loop={false} className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlayerButton label="lateral click exercise" playIcon="volume_up" className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm shrink-0" iconClassName="text-[20px]" />
                  <div className="flex flex-col">
                    <span className="font-title-editorial text-[14px] font-bold text-primary">
                      Iqaqa aliqizisi omunye
                    </span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant italic">
                      Lateral click exercise with audio wave
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-2 font-label-md text-label-md font-bold text-secondary">
                  <Equalizer className="h-4 gap-0.5" barClassName="bg-secondary" bars={4} />
                  Ibanga 1
                </span>
              </Player>
            </div>
            {/* Feature 2: Audio Folktales & Radio Plays */}
            <div className="group lift bg-surface-container-lowest p-8 rounded-[24px] shadow-sm flex flex-col justify-between gap-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <Icon name="graphic_eq" idle className="text-[28px]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-cultural-caps text-[10px] font-bold text-secondary uppercase">
                  Broadcasting Heritage
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Audio Folktales &amp; Radio Plays
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Direct streaming and 100% offline playback of Skyz Metro FM broadcasts and fireside stories narrated by Usisi Omkhulu. Immerse yourself in the authentic storytelling rhythm passed down across generations.
                </p>
              </div>
              {/* Inline audio showcase bar snippet */}
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="radio" idle className="text-[24px] text-primary" />
                  <div className="flex flex-col">
                    <span className="font-title-editorial text-[14px] font-bold text-primary">
                      Usisi Omkhulu: Izindaba Zabantwana
                    </span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">
                      Skyz Metro FM Archive • 48 Episodes Cached
                    </span>
                  </div>
                </div>
                <Icon name="download_done" hover="drop" className="text-[20px] text-primary" />
              </div>
            </div>
            {/* Feature 3: Digital E-Books & Reader */}
            <div className="group lift bg-surface-container-lowest p-8 rounded-[24px] shadow-sm flex flex-col justify-between gap-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                  <Icon name="auto_stories" idle className="text-[28px]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-cultural-caps text-[10px] font-bold text-primary uppercase">
                  Typography First
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Digital E-Books &amp; Reader
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-definition digital reader optimized for Matabeleland literature, dual-language translations, font scaling, and night mode. Read foundational texts like Mhlahlandlela with instant word lookups.
                </p>
              </div>
              {/* Inline reader settings preview snippet */}
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="font-label-lg text-label-lg font-bold text-primary">
                    Aa Font Scale
                  </span>
                  <span>
                    •
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="dark_mode" hover="tilt" className="text-[16px]" />
                    Sepia / Dark
                  </span>
                  <span>
                    •
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="subtitles" className="text-[16px]" />
                    Dual Text
                  </span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">
                  EPUB + PDF
                </span>
              </div>
            </div>
            {/* Feature 4: Festival & Community Updates */}
            <div className="group lift bg-surface-container-lowest p-8 rounded-[24px] shadow-sm flex flex-col justify-between gap-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                  <Icon name="confirmation_number" idle hover="tilt" className="text-[28px]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-cultural-caps text-[10px] font-bold text-tertiary uppercase">
                  Bulawayo Live
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Festival &amp; Community Updates
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Real-time schedules, poetry slam livestream alerts, and ticket booking for the biennial Cikoza Sizwe festival in Bulawayo. Connect directly with authors and reserve seats at the Entumbane cultural amphitheater.
                </p>
              </div>
              {/* Inline event ticker preview snippet */}
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="celebration" idle hover="pop" className="text-[22px] text-tertiary" />
                  <div className="flex flex-col">
                    <span className="font-title-editorial text-[14px] font-bold text-primary">
                      Cikoza Sizwe Biennial 2026
                    </span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">
                      Bulawayo Centre Stage • Ticket Wallet Sync
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tertiary text-on-tertiary font-label-md text-[10px] font-bold animate-pulse">
                  Live Passes
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Low-Connectivity Spotlight ("Designed for Matabeleland") */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop py-12" data-reveal="">
          <div className="bg-surface-container rounded-[28px] p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Architecture Illustration */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-cultural-caps text-label-cultural-caps text-primary uppercase font-black">
                      DATA RESILIENCY METRICS
                    </span>
                    <Icon name="offline_bolt" idle className="text-secondary text-[20px]" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between font-label-lg text-label-lg mb-1">
                        <span className="text-on-surface font-semibold">
                          Lesson Audio Compression (Opus 16kbps)
                        </span>
                        <span className="text-primary font-bold">
                          92% Data Savings
                        </span>
                      </div>
                      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="grow-bar h-full bg-primary rounded-full w-[92%]" style={d(300)} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-label-lg text-label-lg mb-1">
                        <span className="text-on-surface font-semibold">
                          Local SQLite Cache Footprint
                        </span>
                        <span className="text-primary font-bold">
                          &lt; 38 MB Full Library
                        </span>
                      </div>
                      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="grow-bar h-full bg-secondary-fixed rounded-full w-[38%]" style={d(480)} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-label-lg text-label-lg mb-1">
                        <span className="text-on-surface font-semibold">
                          Peer-to-Peer Wi-Fi Share Speed
                        </span>
                        <span className="text-primary font-bold">
                          Zero Mobile Bundles
                        </span>
                      </div>
                      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="grow-bar h-full bg-tertiary-container rounded-full w-[100%]" style={d(660)} />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl flex items-center gap-3">
                    <Icon name="wifi_off" idle className="text-primary text-[22px] shrink-0" />
                    <p className="font-body-sm text-[12px] text-on-surface leading-snug">
                      Every downloaded story, quiz, and grammar chart remains 100% readable without cellular data or Wi-Fi.
                    </p>
                  </div>
                </div>
              </div>
              {/* Copy Details */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary font-black uppercase tracking-widest">
                  INFRASTRUCTURE AWARENESS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Designed for Matabeleland: Zero-Data Architecture
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Internet access shouldn&apos;t be a barrier to celebrating literary heritage. We engineered the Indlu Yokufundela mobile app to thrive under intermittent bandwidth, low power, and high data tariff constraints across rural and urban Zimbabwe.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Icon name="downloading" idle className="text-primary text-[22px] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-title-editorial text-title-editorial font-bold text-on-surface">
                        Zero-Data Local Cache
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Download entire anthologies over public library Wi-Fi once, and study completely offline forever.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="near_me" idle hover="nudge" className="text-primary text-[22px] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-title-editorial text-title-editorial font-bold text-on-surface">
                        Campus Peer-to-Peer Sync
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Classroom students can beam modules directly device-to-device across Bluetooth and Local Wi-Fi without using cellular data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Dual-Column Photo Story: Bulawayo Classroom & Diaspora Reader */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger="">
            <div className="lift relative h-[280px] rounded-3xl overflow-hidden shadow-sm group">
              <Image src={img032} alt={"High school students in Bulawayo Zimbabwe smiling and reading isiNdebele literature on digital mobile tablets together under bright school courtyard sunlight"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent p-6 flex flex-col justify-end">
                <span className="font-label-cultural-caps text-[10px] text-secondary-fixed uppercase tracking-wider font-extrabold">
                  In the Classroom
                </span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-white">
                  Empowering Secondary Schools across Bulawayo
                </h4>
                <p className="font-body-sm text-body-sm text-outline-variant">
                  Structured curriculum companions for both teachers and students.
                </p>
              </div>
            </div>
            <div className="lift relative h-[280px] rounded-3xl overflow-hidden shadow-sm group">
              <Image src={img033} alt={"A young African woman in London listening through headphones while reading bilingual isiNdebele poetry on her smartphone with a cozy window view, modern diaspora literature connection"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" sizes="(min-width: 1280px) 640px, 50vw" placeholder="blur" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent p-6 flex flex-col justify-end">
                <span className="font-label-cultural-caps text-[10px] text-secondary-fixed uppercase tracking-wider font-extrabold">
                  Global Diaspora
                </span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-white">
                  Connecting Zimbabweans Around the Globe
                </h4>
                <p className="font-body-sm text-body-sm text-outline-variant">
                  Preserving ancestral mother-tongue fluency wherever your journey leads.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Bottom Community Callout: Royal Blue & Yellow Banner */}
        <section className="max-w-[1280px] w-full mx-auto px-margin-desktop pt-8 pb-16" data-reveal="">
          <div className="bg-primary-container text-on-primary rounded-[28px] p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Subtle Decorative Chevron Shape */}
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none animate-spin-slow">
              <svg fill="currentColor" height="240" viewBox="0 0 100 100" width="240">
                <polygon points="50,0 100,50 50,100 0,50" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 max-w-[680px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="font-label-cultural-caps text-label-cultural-caps text-secondary-fixed uppercase tracking-widest font-black">
                  EDUCATORS &amp; SCHOOL TESTERS
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-white tracking-tight">
                Are you an educator or school tester?
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
                Sign up for our closed beta testing cohort. Receive early installation builds, syllabus matching keys, and direct dialogue with the language curriculum team in Bulawayo.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link href="/contact?topic=beta" className="group w-full sm:w-auto px-8 py-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary-fixed-dim hover:-translate-y-0.5 active:scale-95 transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap">
                <span>
                  Join Closed Beta Cohort
                </span>
                <Icon name="school" hover="lift" className="text-[18px]" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
