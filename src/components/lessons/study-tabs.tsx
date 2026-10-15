"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import img104 from "@/assets/images/lessons/104.webp";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-data";
import { cn } from "@/lib/cn";
import { CUES, PROVERBS } from "./lesson-data";

type TabKey = "notes" | "transcript" | "quiz" | "instructor";
const TABS: { key: TabKey; label: string; icon: IconName }[] = [
  { key: "notes", label: "Lesson Notes & Vocabulary", icon: "menu_book" },
  { key: "transcript", label: "Transcript (isiNdebele & English)", icon: "subtitles" },
  { key: "quiz", label: "Practice Exercises & Quiz", icon: "quiz" },
  { key: "instructor", label: "Instructor Profile", icon: "badge" },
];

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function Transcript() {
  return (
    <ol className="flex flex-col gap-2">
      {CUES.slice(1, -1).map((c, i) => (
        <motion.li
          key={c.at}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="group flex gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-container-low"
        >
          <span className="mt-0.5 shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[12px] font-semibold text-primary">{fmt(c.at)}</span>
          <span className="flex flex-col">
            <span className="font-body-lg text-body-lg text-on-surface">{c.nde}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant italic">{c.en}</span>
          </span>
        </motion.li>
      ))}
    </ol>
  );
}

const QUESTIONS = PROVERBS.map((p, i) => ({
  prompt: p.term,
  answer: p.meaning,
  options: [p.meaning, PROVERBS[(i + 1) % PROVERBS.length].meaning, PROVERBS[(i + 2) % PROVERBS.length].meaning].sort(
    (a, b) => ((a.length * 7 + i) % 3) - ((b.length * 7 + i) % 3),
  ),
}));

function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const finished = index >= QUESTIONS.length;
  const q = QUESTIONS[Math.min(index, QUESTIONS.length - 1)];

  if (finished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-3 rounded-[20px] bg-surface-container-low p-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
          <Icon name="emoji_events" idle className="text-[32px]" />
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary">
          You scored {score} of {QUESTIONS.length}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{score === QUESTIONS.length ? "Halala! A perfect round." : "Review the vocabulary table and try again."}</p>
        <button
          type="button"
          onClick={() => {
            setIndex(0);
            setScore(0);
            setPicked(null);
          }}
          className="group mt-1 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary"
        >
          <Icon name="replay_10" className="text-[18px]" /> Try again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-label-cultural-caps text-label-cultural-caps font-bold text-primary uppercase">
          Question {index + 1} of {QUESTIONS.length}
        </span>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span key={i} className={cn("h-1.5 w-8 rounded-full transition-colors", i < index ? "bg-tertiary-container" : i === index ? "bg-primary" : "bg-surface-container-high")} />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="flex flex-col gap-3">
          <p className="font-body-md text-body-md text-on-surface-variant">What does this expression mean?</p>
          <p className="font-headline-sm text-headline-sm text-primary">“{q.prompt}”</p>
          <div className="flex flex-col gap-2">
            {q.options.map((o) => {
              const correct = o === q.answer;
              const state = picked ? (correct ? "right" : o === picked ? "wrong" : "idle") : "idle";
              return (
                <motion.button
                  key={o}
                  type="button"
                  disabled={!!picked}
                  onClick={() => {
                    setPicked(o);
                    if (correct) setScore((s) => s + 1);
                  }}
                  animate={state === "wrong" ? { x: [0, -8, 8, -5, 5, 0] } : state === "right" ? { scale: [1, 1.03, 1] } : {}}
                  transition={{ duration: 0.45 }}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-body-sm text-body-sm transition-colors",
                    state === "right" && "border-tertiary-container bg-tertiary-fixed/40 text-on-surface",
                    state === "wrong" && "border-error bg-error-container text-on-error-container",
                    state === "idle" && "border-surface-container-high bg-surface-container-lowest hover:border-primary-container",
                  )}
                >
                  <Icon name={state === "right" ? "check_circle" : state === "wrong" ? "crisis_alert" : "quiz"} filled={state !== "idle"} className="text-[20px]" />
                  {o}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {picked && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIndex((i) => i + 1);
              setPicked(null);
            }}
            className="group self-end inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary"
          >
            {index + 1 === QUESTIONS.length ? "See results" : "Next question"}
            <Icon name="arrow_forward" className="text-[18px]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Instructor() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <Image src={img104} alt="Dr. Thabani Moyo" placeholder="blur" sizes="160px" className="h-36 w-36 shrink-0 rounded-[20px] object-cover shadow-sm" />
      <div className="flex flex-col gap-2">
        <span className="font-label-cultural-caps text-label-cultural-caps font-bold text-secondary uppercase">Featured Linguist</span>
        <h3 className="font-headline-sm text-headline-sm text-primary">Dr. Thabani Moyo</h3>
        <p className="font-label-md text-label-md text-on-surface-variant">Dean of isiNdebele Studies, Hillside Teachers College</p>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          Dr. Moyo has devoted over two decades to mother-tongue curriculum development across Zimbabwe. A playwright and linguist, he leads the
          academic research arm of Indlu Yokufundela and co-hosts this series with the storyteller Usisi Omkhulu.
        </p>
      </div>
    </div>
  );
}

export function StudyTabs({ notes }: { notes: ReactNode }) {
  const [tab, setTab] = useState<TabKey>("notes");
  return (
    <div className="flex flex-col gap-space-lg rounded-[20px] bg-surface-container-lowest p-space-lg shadow-sm">
      <div role="tablist" aria-label="Lesson study material" className="no-scrollbar flex flex-row items-center gap-5 overflow-x-auto border-b border-surface-container-high">
        {TABS.map((t) => {
          const on = t.key === tab;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setTab(t.key)}
              className={cn(
                "group relative flex flex-row items-center gap-2 pb-3 whitespace-nowrap transition-colors",
                on ? "font-headline-sm text-headline-sm text-primary" : "font-title-editorial text-title-editorial text-on-surface-variant hover:text-on-surface",
              )}
            >
              <Icon name={t.icon} className="text-[20px]" />
              {t.label}
              {on && <motion.span layoutId="study-tab-underline" className="absolute right-0 -bottom-px left-0 h-0.5 rounded-full bg-primary" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
          {tab === "notes" && notes}
          {tab === "transcript" && <Transcript />}
          {tab === "quiz" && <Quiz />}
          {tab === "instructor" && <Instructor />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
