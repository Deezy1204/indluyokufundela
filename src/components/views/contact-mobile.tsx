import { Icon } from "@/components/icons/icon";
import { ContactForm } from "@/components/contact/contact-form";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { SITE, tel, whatsapp } from "@/lib/site";

export function ContactMobile() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      <div className="flex flex-col w-full text-on-surface pb-space-2xl">
        {/* Subtle Cultural Motif Background Header */}
        <div className="relative px-margin pt-space-md pb-space-lg overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
            <svg className="w-full h-full object-cover" fill="none" height="240" viewBox="0 0 400 240" width="400">
              <polygon fill="#2E3192" points="0,0 50,60 100,0 150,60 200,0 250,60 300,0 350,60 400,0" />
              <polygon fill="#15157d" points="0,80 50,140 100,80 150,140 200,80 250,140 300,80 350,140 400,80" />
              <polygon fill="#2E3192" points="0,160 50,220 100,160 150,220 200,160 250,220 300,160 350,220 400,160" />
              <circle cx="50" cy="180" fill="#f2e400" r="16" />
              <circle cx="150" cy="180" fill="#f2e400" r="16" />
              <circle cx="250" cy="180" fill="#f2e400" r="16" />
              <circle cx="350" cy="180" fill="#f2e400" r="16" />
            </svg>
          </div>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="enter-up flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-sm" style={d(0)}>
            <Link className="group hover:text-primary transition-colors flex items-center gap-1" href="/">
              <Icon name="home" className="text-[16px]" />
              <span>
                Home
              </span>
            </Link>
            <Icon name="chevron_right" className="text-[14px] text-outline-variant" />
            <span className="font-bold text-primary">
              Contact
            </span>
          </nav>
          {/* Cultural Eyebrow Badge */}
          <div className="enter-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-cultural-caps text-label-cultural-caps tracking-widest uppercase mb-space-sm shadow-sm" style={d(80)}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>
              GET IN TOUCH • BULAWAYO
            </span>
          </div>
          {/* Editorial Title & Intro */}
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-space-xs">
            <SplitWords text="Connect with the House of Reading" delay={120} />
          </h1>
          <p className="enter-up font-body-md text-body-md text-on-surface-variant" style={d(360)}>
            Reach our editorial team, visit the Bulawayo reading room, or tune into our{" "}
            <span className="font-semibold text-primary">
              Skyz Metro FM
            </span>
            {" "}radio broadcasts.
          </p>
          {/* Quick Action Strip */}
          <div className="enter-up flex items-center gap-space-sm overflow-x-auto no-scrollbar pt-space-md pb-1" style={d(460)}>
            <a className="flex-row items-center justify-center gap-2 whitespace-nowrap h-11 px-4 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex shadow-sm active:scale-95 transition-transform shrink-0" href={tel(SITE.phone)}>
              <Icon name="call" className="text-[18px] text-primary" />
              <span>
                Call Desk
              </span>
            </a>
            <a className="flex-row items-center justify-center gap-2 whitespace-nowrap h-11 px-4 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex shadow-sm active:scale-95 transition-transform shrink-0" href={`mailto:${SITE.email}`}>
              <Icon name="mail" className="text-[18px] text-primary" />
              <span>
                Email Us
              </span>
            </a>
            <a className="flex-row items-center justify-center gap-2 whitespace-nowrap h-11 px-4 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex shadow-sm active:scale-95 transition-transform shrink-0" href="#m-map-section">
              <Icon name="location_on" className="text-[18px] text-primary" />
              <span>
                Find Location
              </span>
            </a>
          </div>
        </div>
        {/* Main Content Flow */}
        <div className="px-margin flex flex-col gap-space-lg mt-space-lg">
          {/* Contact Cards Grid/Stack */}
          <div className="flex flex-col gap-space-md">
            {/* Card 1: Physical Sanctuary */}
            <section className="p-space-lg rounded-[20px] bg-surface-container-lowest shadow-sm flex flex-col gap-space-md relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                  <Icon name="storefront" filled idle hover="lift" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase font-extrabold">
                    Reading Room
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Bulawayo Cultural Sanctuary
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-surface-container-low p-3.5 rounded-xl">
                <div className="flex items-start gap-2">
                  <Icon name="pin_drop" className="text-[20px] text-primary shrink-0 mt-0.5" />
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Bulawayo Cultural Quarter, Robert Mugabe Way &amp; 8th Avenue, Bulawayo, Zimbabwe
                  </p>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-surface-container">
                  <Icon name="schedule" className="text-[20px] text-primary shrink-0 mt-0.5" />
                  <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col">
                    <span className="font-semibold text-on-surface">
                      Visiting Hours:
                    </span>
                    <span>
                      Mon–Fri: 08:30 – 17:00
                    </span>
                    <span>
                      Sat: 09:00 – 13:00 (Closed Sundays)
                    </span>
                  </div>
                </div>
              </div>
              <a className="group h-11 px-6 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap flex active:opacity-90 shadow-sm transition-opacity" href="#m-map-section">
                <span>
                  Get Directions
                </span>
                <Icon name="north_east" className="text-[18px]" />
              </a>
            </section>
            {/* Card 2: Phone & Email Contacts */}
            <section className="p-space-lg rounded-[20px] bg-surface-container-lowest shadow-sm flex flex-col gap-space-md" data-reveal="">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <Icon name="contact_phone" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase font-extrabold">
                    Editorial Office
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Phone &amp; Direct Email
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-space-sm">
                <a className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-[0.98] transition-all" href={tel(SITE.phone)}>
                  <div className="flex items-center gap-3">
                    <Icon name="phone_in_talk" className="text-[20px] text-primary" />
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        Landline Desk
                      </span>
                      <span className="font-body-md text-body-md font-semibold text-on-surface">
                        +263 (292) 884-210
                      </span>
                    </div>
                  </div>
                  <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
                </a>
                <a className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-[0.98] transition-all" href={whatsapp(SITE.whatsapp)} rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center gap-3">
                    <Icon name="chat" className="text-[20px] text-primary" />
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        Direct WhatsApp
                      </span>
                      <span className="font-body-md text-body-md font-semibold text-on-surface">
                        {SITE.whatsapp}
                      </span>
                    </div>
                  </div>
                  <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
                </a>
                <a className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-[0.98] transition-all" href={`mailto:${SITE.email}`}>
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon name="mail" className="text-[20px] text-primary shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        General Enquiries
                      </span>
                      <span className="font-body-md text-body-md font-semibold text-on-surface truncate">
                        {SITE.email}
                      </span>
                    </div>
                  </div>
                  <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant shrink-0" />
                </a>
              </div>
            </section>
            {/* Card 3: Skyz Metro FM Broadcast Card */}
            <section className="p-space-lg rounded-[20px] bg-primary text-on-primary shadow-md flex flex-col gap-space-md relative overflow-hidden" data-reveal="">
              {/* Geometric Accent Overlay */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4 animate-spin-slow">
                <svg fill="none" height="160" viewBox="0 0 160 160" width="160">
                  <polygon fill="#ffffff" points="80,0 160,80 80,160 0,80" />
                  <polygon fill="#f2e400" points="80,30 130,80 80,130 30,80" />
                </svg>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
                    <Icon name="radio" idle className="text-[24px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-cultural-caps text-label-cultural-caps text-secondary-container font-extrabold uppercase tracking-widest">
                      On-Air Literary Show
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-primary">
                      Skyz Metro FM (100.3 FM)
                    </h2>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-on-primary/10 text-on-primary text-xs font-semibold backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                  LIVE CAT
                </span>
              </div>
              <div className="bg-on-primary/10 rounded-xl p-3.5 backdrop-blur-sm flex flex-col gap-2 text-on-primary">
                <div className="flex items-center gap-2">
                  <Icon name="mic" className="text-[18px] text-secondary-container" />
                  <span className="font-body-md text-body-md font-semibold">
                    Spheth&apos;Imfundw&apos;Emoyeni with Usisi Omkhulu
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container pl-6">
                  Schedule: Thursdays 19:30 CAT &amp; Sundays 14:00 CAT
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-on-primary/10">
                  <Icon name="support_agent" className="text-[18px] text-secondary-container" />
                  <span className="font-body-sm text-body-sm">
                    Studio Call-In:{" "}
                    <a className="font-semibold text-secondary-container underline-offset-2 hover:underline" href={tel(SITE.studioLine)}>
                      {SITE.studioLine}
                    </a>
                  </span>
                </div>
              </div>
              <a className="group h-11 px-6 rounded-full bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap flex active:opacity-90 shadow-sm transition-opacity" href={SITE.radioUrl} rel="noopener noreferrer" target="_blank">
                <span>
                  Listen Online
                </span>
                <Icon name="open_in_new" className="text-[18px]" />
              </a>
            </section>
            {/* Card 4: Social Media Links */}
            <section className="p-space-lg rounded-[20px] bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm" data-reveal="">
              <div className="flex items-center gap-2">
                <Icon name="hub" className="text-primary text-[20px]" />
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Community Channels
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Connect with readers, attend literary festivals, and follow oral folklore archives across Matabeleland.
              </p>
              <div className="grid grid-cols-2 gap-space-xs pt-space-xs" data-stagger="">
                <a className="group h-12 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center gap-2 transition-colors" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
                  <Icon name="smart_display" className="text-[20px] text-primary" />
                  <span className="font-body-sm text-body-sm font-semibold truncate">
                    @IndluYokufundela
                  </span>
                </a>
                <span title="Link coming soon" className="group h-12 px-3 rounded-xl bg-surface-container-low flex items-center gap-2">
                  <Icon name="tag" className="text-[20px] text-primary" />
                  <span className="font-body-sm text-body-sm font-semibold truncate">
                    @Indlu_Bulawayo
                  </span>
                </span>
                <span title="Link coming soon" className="group h-12 px-3 rounded-xl bg-surface-container-low flex items-center gap-2">
                  <Icon name="public" className="text-[20px] text-primary" />
                  <span className="font-body-sm text-body-sm font-semibold truncate">
                    Facebook Page
                  </span>
                </span>
                <span title="Link coming soon" className="group h-12 px-3 rounded-xl bg-surface-container-low flex items-center gap-2">
                  <Icon name="groups" className="text-[20px] text-primary" />
                  <span className="font-body-sm text-body-sm font-semibold truncate">
                    WhatsApp Group
                  </span>
                </span>
              </div>
            </section>
          </div>
          {/* Contact Form Card */}
          <section className="p-space-lg rounded-[20px] bg-surface-container-lowest shadow-sm flex flex-col gap-space-md" data-reveal="">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <Icon name="edit_note" idle hover="tilt" className="text-[20px]" />
              </div>
              <div>
                <span className="font-label-cultural-caps text-label-cultural-caps text-primary tracking-wider uppercase font-extrabold">
                  Inquiries Desk
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Send a Message
                </h2>
              </div>
            </div>
            <ContactForm variant="mobile" />
          </section>
          {/* Map Card: Bulawayo Sanctuary Grid */}
          <section className="p-space-lg rounded-[20px] bg-surface-container-lowest shadow-sm flex flex-col gap-space-md" id="m-map-section" data-reveal="">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="explore" idle className="text-primary text-[24px]" />
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Sanctuary Map
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">
                Bulawayo CBD
              </span>
            </div>
            {/* Stylized Interactive Map Mockup Container */}
            <div className="relative w-full h-56 rounded-2xl bg-surface-container-high overflow-hidden flex flex-col justify-between p-3">
              {/* SVG Street Grid overlay with landmarks */}
              <svg className="absolute inset-0 w-full h-full object-cover opacity-60" fill="none" viewBox="0 0 350 220">
                {/* Parks and Green spaces */}
                <rect fill="#d7ca00" fillOpacity="0.25" height="90" rx="8" width="100" x="230" y="20" />
                <text fill="#676000" fontFamily="Inter" fontSize="10" fontWeight="600" x="240" y="65">
                  Centenary Park
                </text>
                {/* Street Lines */}
                <line className="draw-line" pathLength={1} stroke="#c7c5d4" strokeWidth="8" x1="0" x2="350" y1="80" y2="80" />
                <line className="draw-line" pathLength={1} stroke="#c7c5d4" strokeWidth="6" x1="0" x2="350" y1="140" y2="140" />
                <line className="draw-line" pathLength={1} stroke="#c7c5d4" strokeWidth="10" x1="120" x2="120" y1="0" y2="220" />
                <line className="draw-line" pathLength={1} stroke="#c7c5d4" strokeWidth="6" x1="220" x2="220" y1="0" y2="220" />
                {/* Street Names */}
                <text fill="#464652" fontFamily="Inter" fontSize="9" fontWeight="600" x="8" y="74">
                  8th Avenue
                </text>
                <text fill="#464652" fontFamily="Inter" fontSize="8" x="8" y="134">
                  9th Avenue
                </text>
                <text fill="#464652" fontFamily="Inter" fontSize="9" fontWeight="700" x="126" y="25">
                  Robert Mugabe Way
                </text>
              </svg>
              {/* Center Pin Marker for Sanctuary */}
              <div className="relative z-10 flex flex-col items-center self-center my-auto transform -translate-y-2">
                <div className="px-2.5 py-1 rounded-md bg-primary text-on-primary text-[11px] font-bold shadow-md whitespace-nowrap flex items-center gap-1 mb-1 animate-bounce">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                  <span>
                    Indlu Yokufundela
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-lg border-2 border-surface-container-lowest">
                  <Icon name="menu_book" className="text-[18px]" />
                </div>
                <div className="w-2.5 h-1 rounded-full bg-on-surface/20 mt-0.5" />
              </div>
              {/* Neighborhood tags */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-on-surface-variant font-medium">
                <span className="bg-surface/80 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  Near Mhlahlandlela &amp; Entumbane route
                </span>
                <span className="bg-surface/80 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  Quarter Entrance
                </span>
              </div>
            </div>
            {/* Address detail & External Map CTA */}
            <div className="flex flex-col gap-space-xs">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Located opposite the historical gardens, accessible from both Robert Mugabe Way and 8th Avenue transit links.
              </p>
              <a className="group h-11 px-6 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap flex active:scale-98 transition-transform shadow-sm" href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">
                <span>
                  Open in Google Maps
                </span>
                <Icon name="open_in_new" className="text-[18px] text-primary" />
              </a>
            </div>
          </section>
          {/* School Enquiries Banner (Yellow Accent Card) */}
          <section className="p-space-lg rounded-[20px] bg-secondary-container text-on-secondary-fixed shadow-md flex flex-col gap-space-sm relative overflow-hidden" data-reveal="">
            {/* Chevron Motif Border Accent */}
            <div className="flex items-center gap-2">
              <Icon name="school" idle hover="lift" className="text-[24px]" />
              <h3 className="font-headline-sm text-headline-sm tracking-tight">
                Schools &amp; Educators
              </h3>
            </div>
            <p className="font-body-md text-body-md leading-relaxed">
              Email{" "}
              <a className="font-bold underline" href={`mailto:${SITE.schoolsEmail}`}>
                {SITE.schoolsEmail}
              </a>
              {" "}for curriculum sets, offline audio folktale USB packs, and subsidized reading room class trips.
            </p>
            <div className="pt-2">
              <a className="group h-12 px-6 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex-row items-center justify-center gap-2 whitespace-nowrap flex active:opacity-90 shadow-sm transition-opacity" href={`mailto:${SITE.schoolsEmail}?subject=School%20Curriculum%20Packs%20Inquiry`}>
                <span>
                  Email Schools Desk
                </span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
