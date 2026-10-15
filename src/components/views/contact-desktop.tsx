import { Icon } from "@/components/icons/icon";
import { ContactForm } from "@/components/contact/contact-form";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { CopyButton } from "@/components/ui/share-actions";
import { SITE, tel, whatsapp } from "@/lib/site";
import img049 from "@/assets/images/contact/049.webp";

export function ContactDesktop() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* Top Atmospheric Geometric Ribbon (Cultural Pattern Accent) */}
        <div className="ndebele-band w-full h-2" />
        {/* Header & Context Section */}
        <section className="relative w-full overflow-hidden bg-surface py-space-xl px-margin md:px-margin-tablet lg:px-margin-desktop">
          {/* Faint Ndebele Geometric Background Texture (SVG chevrons & stepped shapes) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
            <svg className="w-full h-full object-cover enter-fade" fill="none" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
              <pattern height="80" id="ndebele-hero-pattern" patternUnits="userSpaceOnUse" width="80">
                <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="#2E3192" strokeWidth="2.5" />
                <path d="M40 15L65 40L40 65L15 40Z" fill="#FFF000" fillOpacity="0.3" />
                <path d="M0 0L40 40L0 80Z" fill="none" stroke="#2E3192" strokeWidth="1.5" />
                <path d="M80 0L40 40L80 80Z" fill="none" stroke="#2E3192" strokeWidth="1.5" />
              </pattern>
              <rect fill="url(#ndebele-hero-pattern)" height="100%" width="100%" />
            </svg>
          </div>
          <div className="relative max-w-[1280px] mx-auto flex flex-col gap-space-md">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="enter-up flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant" style={d(0)}>
              <Link className="group hover:text-primary transition-colors flex items-center gap-1" href="/">
                <Icon name="home" className="text-[16px]" />
                Home
              </Link>
              <span className="text-outline">
                /
              </span>
              <span className="text-on-surface font-medium">
                Contact
              </span>
            </nav>
            {/* Badge Pill */}
            <div className="enter-up inline-flex items-center gap-2 self-start bg-secondary-container/30 px-4 py-1.5 rounded-full text-secondary font-label-cultural-caps text-label-cultural-caps tracking-wider uppercase" style={d(80)}>
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              Get in touch • Bulawayo Cultural Quarter
            </div>
            {/* Hero Typography */}
            <div className="max-w-3xl">
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                <SplitWords text="Connect with the House of Reading" delay={140} />
              </h1>
              <p className="enter-up mt-space-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed" style={d(380)}>
                Whether you represent a school in Matabeleland, wish to submit a manuscript, tune into our weekly radio broadcasts, or visit our Bulawayo reading rooms, we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>
        {/* Section 2: Contact Detail Cards Grid */}
        <section className="w-full bg-surface-container-low py-space-xl px-margin md:px-margin-tablet lg:px-margin-desktop" data-reveal="">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop" data-stagger="">
              {/* Card 1: Physical Sanctuary */}
              <div className="bg-surface-container-lowest rounded-[20px] p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary origin-left transition-transform duration-500 group-hover:scale-x-110" />
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon name="location_on" className="text-[24px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Bulawayo Cultural Sanctuary
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    Bulawayo Cultural Quarter, Robert Mugabe Way &amp; 8th Avenue, Bulawayo, Zimbabwe
                  </p>
                  <div className="bg-surface-container rounded-xl p-3 text-body-sm font-body-sm text-on-surface mb-6 space-y-1">
                    <p className="font-medium text-primary">
                      Operating Hours:
                    </p>
                    <p>
                      Mon – Fri: 08:30 – 17:00
                    </p>
                    <p>
                      Sat: 09:00 – 13:00
                    </p>
                    <p className="text-outline">
                      Sun &amp; Holidays: Closed
                    </p>
                  </div>
                </div>
                <a className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap text-primary hover:text-primary-container font-label-lg text-label-lg transition-colors pt-2" href="#map-section">
                  <span>
                    Get Directions
                  </span>
                  <Icon name="north_east" className="text-[18px]" />
                </a>
              </div>
              {/* Card 2: Direct Enquiries & Press */}
              <div className="bg-surface-container-lowest rounded-[20px] p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary-container" />
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 text-on-secondary-container flex items-center justify-center mb-5">
                    <Icon name="mark_email_read" className="text-[24px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Reach Our Editorial Team
                  </h3>
                  <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-4">
                    <div>
                      <span className="text-outline block text-xs uppercase tracking-wider font-semibold">
                        General &amp; Submissions
                      </span>
                      {" "}
                      <a className="text-primary hover:underline font-medium break-all" href={`mailto:${SITE.editorEmail}`}>
                        {SITE.editorEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-outline block text-xs uppercase tracking-wider font-semibold">
                        Executive Liaison
                      </span>
                      {" "}
                      <a className="text-primary hover:underline font-medium break-all" href={`mailto:${SITE.email}`}>
                        {SITE.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-outline block text-xs uppercase tracking-wider font-semibold">
                        Bulawayo Landline &amp; WhatsApp
                      </span>
                      <a className="block text-on-surface font-medium hover:text-primary" href={tel(SITE.phone)}>
                        {SITE.phone}
                      </a>
                      <a className="block text-tertiary font-medium hover:underline" href={whatsapp(SITE.whatsapp)} target="_blank" rel="noopener noreferrer">
                        WhatsApp: {SITE.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-2 bg-surface-container-low rounded-lg p-2.5">
                  <p className="font-body-sm text-xs text-on-surface-variant text-center">
                    Inquiries responded to within 24 business hours.
                  </p>
                </div>
              </div>
              {/* Card 3: Broadcast & Radio Show Studio */}
              <div className="bg-surface-container-lowest rounded-[20px] p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-tertiary" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
                      <Icon name="podcasts" idle className="text-[24px]" />
                    </div>
                    <span className="bg-secondary-container px-2.5 py-1 rounded-full text-on-secondary-container font-label-cultural-caps text-[10px] uppercase font-bold">
                      WEEKLY BROADCAST
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    Skyz Metro FM Radio Show
                  </h3>
                  <p className="font-label-lg text-xs text-primary font-bold mb-3">
                    Spheth&apos;Imfundw&apos;Emoyeni with Usisi Omkhulu
                  </p>
                  <div className="space-y-1.5 text-body-sm font-body-sm text-on-surface-variant mb-4">
                    <p className="flex items-center gap-1.5">
                      <Icon name="radio" className="text-[16px] text-tertiary" />
                      <span className="font-medium text-on-surface">
                        100.3 FM
                      </span>
                      (Matabeleland South)
                    </p>
                    <p className="text-xs text-outline leading-tight">
                      Thu: 19:30–20:30 CAT &amp; Sun: 14:00–15:00 CAT
                    </p>
                    <div className="pt-2 border-t border-surface-container mt-2">
                      <span className="text-xs font-semibold text-on-surface">
                        Studio Call-In:
                      </span>
                      <a className="block text-xs text-on-surface-variant hover:text-primary" href={tel(SITE.studioLine)}>
                        {SITE.studioLine}
                      </a>
                      <span className="text-xs font-semibold text-on-surface">
                        SMS/WhatsApp:
                      </span>
                      <a className="block text-xs text-on-surface-variant hover:text-primary" href={whatsapp(SITE.studioSms)} target="_blank" rel="noopener noreferrer">
                        {SITE.studioSms}
                      </a>
                    </div>
                  </div>
                </div>
                <Link className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md py-2.5 px-4 rounded-full transition-colors w-full mt-2" href="/watch">
                  <span>
                    Listen to Archives
                  </span>
                  <Icon name="north_east" className="text-[16px]" />
                </Link>
              </div>
              {/* Card 4: Community & Social Circles */}
              <div className="bg-surface-container-lowest rounded-[20px] p-6 shadow-sm lift flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container" />
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon name="diversity_3" className="text-[24px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Follow &amp; Join the Community
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    Daily cultural proverbs, digital manuscript clubs, and reading circles.
                  </p>
                  <div className="flex flex-col gap-2 font-body-sm">
                    <a className="group flex items-center justify-between p-2 rounded-xl hover:bg-surface-container transition-colors" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2">
                        <Icon name="smart_display" className="text-error text-[18px]" />
                        <span className="text-xs font-medium text-on-surface">
                          YouTube: @IndluYokufundela
                        </span>
                      </div>
                      <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full text-outline">
                        14.8K
                      </span>
                    </a>
                    <span title="Link coming soon" className="group flex items-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-default">
                      <Icon name="forum" className="text-primary text-[18px]" />
                      <span className="text-xs font-medium text-on-surface">
                        X: @Indlu_Bulawayo
                      </span>
                    </span>
                    <span title="Link coming soon" className="group flex items-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-default">
                      <Icon name="public" className="text-primary text-[18px]" />
                      <span className="text-xs font-medium text-on-surface">
                        Facebook: Indlu Yokufundela Cultural Trust
                      </span>
                    </span>
                    <span title="Link coming soon" className="group flex items-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-default">
                      <Icon name="groups" className="text-tertiary-container text-[18px]" />
                      <span className="text-xs font-medium text-on-surface">
                        WhatsApp: Matabeleland Readers Circle
                      </span>
                    </span>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-center">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-outline uppercase tracking-wider">
                    Cikoza Sizwe Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Main Interaction - 2-Column Split (Form & Map) */}
        <section className="w-full py-space-2xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface relative overflow-hidden" id="map-section" data-reveal="">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-primary font-label-cultural-caps text-label-cultural-caps uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Direct Correspondence
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Send an Inquiry or Feedback
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Fill out the form below and our community liaison will direct your message to the appropriate department.
                </p>
              </div>
              <ContactForm variant="desktop" />
            </div>
            {/* Right Column: Stylized Embedded Bulawayo Map & Location Guide */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Stylized Map Card */}
              <div className="w-full bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm flex flex-col">
                {/* Interactive Map Container with Data-Location */}
                <div className="relative w-full h-[320px] sm:h-[360px] overflow-hidden group">
                  <div className="w-full h-full bg-cover bg-center animate-[float_14s_ease-in-out_infinite] scale-110 transition-transform duration-[2s] group-hover:scale-125" data-location="Bulawayo Cultural Quarter, Robert Mugabe Way, Bulawayo, Zimbabwe" style={{ backgroundImage: `url(${img049.src})` }} />
                  {/* Stylized Street Grid / Ndebele Motif Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-primary/20 pointer-events-none" />
                  {/* Custom Pin Marker Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none drop-shadow-lg animate-bounce [animation-duration:2.4s]">
                    <div className="bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                      <span>
                        Indlu Yokufundela
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-container flex items-center justify-center shadow-lg mt-1 border-2 border-surface-container-lowest">
                      <Icon name="menu_book" className="text-[20px]" />
                    </div>
                    <div className="w-2.5 h-2.5 bg-primary rotate-45 -mt-1.5 shadow" />
                  </div>
                  {/* Landmarks Floating Badges */}
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-label-cultural-caps text-on-surface shadow-sm">
                    Robert Mugabe Way &amp; 8th Ave
                  </div>
                  <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-label-cultural-caps text-on-surface shadow-sm flex items-center gap-1">
                    <Icon name="park" className="text-[14px] text-tertiary" />
                    Near Centenary Park
                  </div>
                </div>
                {/* Overlay Info Box & Directions Notice */}
                <div className="p-6 bg-surface-container-lowest flex flex-col gap-4">
                  <div>
                    <span className="text-xs uppercase font-label-cultural-caps tracking-wider text-secondary font-bold block mb-1">
                      Bulawayo Central Hub
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      Indlu Yokufundela Reading Sanctuary
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Located 5 minutes walk from City Hall and Bulawayo Centenary Park. Easy access from Entumbane and Mhlahlandlela transit hubs. Secure visitor parking available on 8th Avenue.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a className="group flex-1 py-3 px-5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors flex flex-row items-center justify-center gap-2 whitespace-nowrap" href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">
                      <Icon name="map" className="text-[18px]" />
                      <span>
                        Open in Google Maps
                      </span>
                      <Icon name="north_east" className="text-[16px]" />
                    </a>
                    <CopyButton text={SITE.streetAddress} label="Copy address" className="p-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center">
                      <Icon name="content_copy" className="text-[20px]" />
                    </CopyButton>
                  </div>
                </div>
              </div>
              {/* Community Transit Notice Card */}
              <div className="bg-surface-container-low rounded-[20px] p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0">
                  <Icon name="directions_bus" idle hover="lift" className="text-[20px]" />
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  <span className="font-medium text-on-surface block">
                    Public Transit &amp; Minibus Access:
                  </span>
                  {" "}Direct routes from City Hall Rank, Luveve rank, and Entumbane drop within two blocks.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: School & Institutional Quick Contact Banner */}
        <section className="w-full py-space-xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface-container-low" data-reveal="">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative overflow-hidden bg-secondary-container rounded-[24px] p-8 md:p-12 shadow-sm">
              {/* Faint Ndebele Geometric Texture within Yellow Banner (10% Opacity) */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full object-cover animate-[shimmer_6s_linear_infinite]" fill="none" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                  <pattern height="60" id="ndebele-banner-geom" patternUnits="userSpaceOnUse" width="60">
                    <polygon fill="#000000" points="30,0 60,30 30,60 0,30" />
                    <polygon fill="#FFF000" points="30,10 50,30 30,50 10,30" />
                  </pattern>
                  <rect fill="url(#ndebele-banner-geom)" height="100%" width="100%" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-on-secondary-container/10 px-3 py-1 rounded-full text-on-secondary-container font-label-cultural-caps text-[11px] uppercase tracking-wider mb-3">
                    <Icon name="school" idle hover="lift" className="text-[14px]" />
                    Educators &amp; Institutions
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-secondary-fixed font-extrabold tracking-tight">
                    Are you a school administrator or educator in Matabeleland?
                  </h3>
                  <p className="mt-2 font-body-md text-body-md text-on-secondary-fixed/80 leading-relaxed">
                    Direct school procurement, curriculum alignment requests, and rural school USB audio kits can be routed through our dedicated schools desk:{" "}
                    <a className="underline font-bold text-on-secondary-fixed hover:opacity-80" href={`mailto:${SITE.schoolsEmail}`}>
                      {SITE.schoolsEmail}
                    </a>
                  </p>
                </div>
                <div className="shrink-0">
                  <a className="group inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap bg-primary hover:bg-primary-container hover:-translate-y-0.5 text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full transition-all active:scale-95 shadow-md" href={`mailto:${SITE.schoolsEmail}?subject=School%20Curriculum%20and%20Book%20Procurement`}>
                    <span>
                      Contact Schools Desk
                    </span>
                    <Icon name="arrow_forward" className="text-[20px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Cultural Footer Accent Band */}
        <div className="w-full bg-surface-container py-6 px-margin text-center">
          <p className="font-label-cultural-caps text-label-cultural-caps text-outline uppercase tracking-widest">
            Indlu Yokufundela • Spheth&apos;Imfundw&apos;Emoyeni • Bulawayo, Zimbabwe
          </p>
        </div>
      </div>
    </div>
  );
}
