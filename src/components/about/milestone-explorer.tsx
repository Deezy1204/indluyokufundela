"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";
import img004 from "@/assets/images/about/004.webp";
import img005 from "@/assets/images/about/005.webp";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/cn";
import { FestivalCrest } from "./festival-crest";

type Milestone = {
  year: number;
  summary: string;
  tag?: string;
  badge: string;
  status: string;
  title: string;
  desc: string;
  bullets: { title: string; desc: string }[];
  archive: string;
  festival?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    year: 2018,
    summary: "Foundation & First Rural Book Drive in Matabeleland South",
    badge: "Milestone Archive • Gwanda & Plumtree, 2018",
    status: "Archived & Verified",
    title: "2018: Foundation & First Rural Book Drive",
    desc: "Our founding trustees organized the inaugural mobile book drive traversing 18 rural primary schools across Matabeleland South, delivering over 4,000 newly published isiNdebele storybooks.",
    bullets: [
      { title: "18 Rural Schools Reached", desc: "Across Gwanda, Plumtree, and Beitbridge districts." },
      { title: "4,000+ Native Storybooks", desc: "Curated in partnership with elder folklore writers." },
      { title: "First Teacher Workshop", desc: "45 educators trained in indigenous storytelling techniques." },
      { title: "Community Council Endorsement", desc: "Official recognition by traditional Matabeleland chiefs." },
    ],
    archive: "2018 Foundation Archive",
  },
  {
    year: 2020,
    summary: "Launch of Skyz Metro FM Weekly Radio Lessons (\"Spheth'Imfundw'Emoyeni\")",
    badge: "Broadcast Milestone • Bulawayo & Matabeleland, 2020",
    status: "Weekly Airing",
    title: "2020: Skyz Metro FM Radio Lessons Launch",
    desc: "When pandemic lockdowns closed classroom doors, we partnered with Skyz Metro FM to air 'Spheth'Imfundw'Emoyeni', broadcasting live dual-language reading and proverb comprehension to over 300,000 homes.",
    bullets: [
      { title: "Daily Live Broadcasts", desc: "Airtime secured 5 days a week during school terms." },
      { title: "300,000+ Listener Reach", desc: "Coverage spanning Greater Bulawayo and surrounds." },
      { title: "SMS Homework Helpline", desc: "Over 8,000 student queries answered live on air." },
      { title: "National Education Award", desc: "Commended for pandemic educational resilience." },
    ],
    archive: "Radio Curriculum Syllabus",
  },
  {
    year: 2022,
    tag: "Milestone Anchor",
    summary: "The First Ndebele Literature Festival (\"Cikoza Sizwe\")",
    badge: "Featured Milestone Detail • Bulawayo, September 2022",
    status: "Archived & Published",
    title: "2022: Inaugural Ndebele Literature Festival",
    desc: "In September 2022, over 1,200 learners, teachers, and cultural custodians converged at the Bulawayo Amphitheatre. The historic festival inaugurated a public platform dedicated purely to contemporary fiction, traditional praise poetry (Izibongo), and orthographic scholarship in isiNdebele.",
    bullets: [
      { title: "34 High Schools Joined", desc: "Schools from Bulawayo, Gwanda, Plumtree, and Lupane." },
      { title: "250+ Original Essays", desc: "Authored entirely in isiNdebele by secondary learners." },
      { title: "Dr. Barbara C. Makhalisa", desc: "Delivered the historic keynote address on women writers." },
      { title: "Royal Praise Poetry Trophy", desc: "First presented to Mpopoma High School oral team." },
    ],
    archive: "2022 Festival Report",
    festival: true,
  },
  {
    year: 2024,
    summary: "Digital Folktales Archive & Schools Debate League Expansion (5 Provinces)",
    badge: "Provincial Expansion • 5 Provinces, 2024",
    status: "Active Deployment",
    title: "2024: Digital Folktales Archive & Debate League",
    desc: "We deployed acoustic recording teams into rural elder communities to build an open-access audio library of isiNdebele folklore, alongside expanding the mother-tongue high school debate circuit.",
    bullets: [
      { title: "640+ Audio Stories Digitized", desc: "Phonetically tagged and searchable online." },
      { title: "5 Provinces Engaged", desc: "High school debate teams competing purely in isiNdebele." },
      { title: "Mobile Reading App Beta", desc: "Interactive vocabulary quizzes for youth learners." },
      { title: "Digital Preservation Grant", desc: "Secured international endowment for audio conservation." },
    ],
    archive: "2024 Digital Strategy",
  },
  {
    year: 2026,
    tag: "Upcoming",
    summary: "5th Biennial \"Cikoza Sizwe\" Festival at Bulawayo Amphitheatre",
    badge: "Upcoming Biennial • Bulawayo Amphitheatre, 2026",
    status: "In Planning Phase",
    title: "2026: 5th Biennial 'Cikoza Sizwe' Festival",
    desc: "Scheduled for September 2026 at the Bulawayo Amphitheatre, our fifth biennial festival celebrates our journey with diaspora delegations, author masterclasses, and our largest student poetry slam to date.",
    bullets: [
      { title: "Target: 50 High Schools", desc: "Anticipating over 2,500 student attendees." },
      { title: "New Anthology Debut", desc: "Anthology of 100 student poems to be published." },
      { title: "Diaspora Streaming", desc: "Live high-definition international webcast." },
      { title: "Heritage Pavilion", desc: "Interactive exhibition of historic Matabeleland print works." },
    ],
    archive: "2026 Festival Prospectus",
    festival: true,
  },
];

const BULLET_ICONS: IconName[] = ["apartment", "history_edu", "mic", "emoji_events"];

const panel: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.15 } },
  exit: { opacity: 0, y: -18, filter: "blur(4px)", transition: { duration: 0.22 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 26 } },
};

export function MilestoneExplorer() {
  const [active, setActive] = useState(2);
  const m = MILESTONES[active];

  return (
    <>
      {/* Horizontal Timeline Track Bar */}
      <div className="relative mb-12">
        <div className="absolute top-1/2 right-[10%] left-[10%] z-0 hidden h-1 -translate-y-1/2 rounded-full bg-surface-variant md:block">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary-fixed-dim"
            initial={false}
            animate={{ scaleX: active / (MILESTONES.length - 1) }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
          />
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5" role="tablist" aria-label="Milestone years" data-stagger="">
          {MILESTONES.map((ms, i) => {
            const on = i === active;
            return (
              <button
                key={ms.year}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative flex h-36 flex-col justify-between rounded-[20px] p-4 text-left transition-[box-shadow,transform] duration-300",
                  on ? "text-on-primary" : "bg-surface-container-lowest shadow-sm hover:-translate-y-1 hover:shadow-md",
                )}
              >
                {on && (
                  <motion.span
                    layoutId="milestone-active"
                    className="absolute inset-0 rounded-[20px] bg-primary-container shadow-md ring-2 ring-secondary-container"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      "font-headline-sm text-headline-sm font-bold transition-colors",
                      on ? "text-surface-container-lowest" : "text-on-surface group-hover:text-primary-container",
                    )}
                  >
                    {ms.year}
                  </span>
                  {on ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-secondary-container">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "h-3.5 w-3.5 rounded-full transition-colors group-hover:bg-primary-container",
                        ms.tag === "Upcoming" ? "bg-secondary-fixed-dim" : "bg-surface-variant",
                      )}
                    />
                  )}
                </span>
                <span className="relative">
                  {ms.tag && (
                    <span
                      className={cn(
                        "mb-1 inline-block rounded px-2 py-0.5 font-label-cultural-caps text-[10px] tracking-wide uppercase",
                        on ? "bg-surface-container-lowest/20 text-secondary-fixed" : "bg-secondary-container/50 text-secondary",
                      )}
                    >
                      {ms.tag}
                    </span>
                  )}
                  <span
                    className={cn(
                      "line-clamp-2 block font-body-sm text-body-sm",
                      on ? "font-medium text-surface-container-highest" : "text-on-surface-variant",
                    )}
                  >
                    {ms.summary}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded detail card */}
      <div className="relative overflow-hidden rounded-[20px] bg-surface-container-lowest p-8 shadow-md md:p-12" aria-live="polite">
        <div className="ndebele-band absolute top-0 right-0 left-0 h-2" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={m.year}
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div className="flex flex-col gap-6 lg:col-span-7">
              <motion.div variants={child} className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-fixed px-3.5 py-1 font-label-cultural-caps text-label-cultural-caps font-bold tracking-wider text-on-primary-fixed-variant uppercase">
                  {m.badge}
                </span>
                <span className="flex items-center gap-1 font-label-md text-label-md font-semibold text-on-tertiary-container">
                  <Icon name="verified" className="text-[16px]" />
                  {m.status}
                </span>
              </motion.div>
              <motion.div variants={child}>
                <h3 className="mb-3 font-headline-lg text-headline-md tracking-tight text-primary md:text-headline-lg">{m.title}</h3>
                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{m.desc}</p>
              </motion.div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {m.bullets.map((b, i) => (
                  <motion.div
                    key={b.title}
                    variants={child}
                    className="group flex items-start gap-3 rounded-xl bg-surface-container p-3.5 transition-colors hover:bg-primary-fixed"
                  >
                    <Icon name={BULLET_ICONS[i]} className="mt-0.5 text-[20px] text-primary-container" />
                    <div>
                      <h5 className="font-label-lg text-label-lg font-semibold text-on-surface">{b.title}</h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={child} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/contact?topic=archive&year=${m.year}`}
                  className="group flex flex-row items-center justify-center gap-2 rounded-full bg-primary-container px-7 py-3.5 font-label-lg text-label-lg whitespace-nowrap text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <Icon name="mail" className="text-[18px]" />
                  <span>Request the {m.archive}</span>
                </Link>
                <span className="font-body-sm text-body-sm text-outline">Sent by our archives team on request</span>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <motion.div
                variants={child}
                className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-surface-container-low p-6 text-center shadow-inner"
              >
                <div className="relative mb-4 flex h-32 w-32 items-center justify-center">
                  <FestivalCrest className="h-full w-full drop-shadow-md" />
                </div>
                <span className="font-headline-sm text-title-editorial font-bold text-on-surface">
                  {m.festival ? "Ndebele Literature Festival" : m.title}
                </span>
                <span className="mt-1 font-label-cultural-caps text-label-cultural-caps font-extrabold tracking-wider text-secondary uppercase">
                  “Cikoza Sizwe” Archive
                </span>
                <p className="mt-2 max-w-xs font-body-sm text-body-sm text-on-surface-variant">
                  Official archival record managed under the Indlu Yokufundela preservation guild.
                </p>
              </motion.div>
              {m.festival && (
                <motion.div variants={child} className="grid grid-cols-2 gap-3">
                  {[
                    { img: img004, label: "Traditional Dance", alt: "High school learners performing traditional Ndebele dance at the Bulawayo Amphitheatre" },
                    { img: img005, label: "Trophy Presentation", alt: "A student holding a literature trophy beside smiling teachers at the festival" },
                  ].map((p) => (
                    <div key={p.label} className="group zoom-media relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                      <Image src={p.img} alt={p.alt} placeholder="blur" sizes="240px" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-primary/20" />
                      <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[11px] font-medium text-surface-container-lowest">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
