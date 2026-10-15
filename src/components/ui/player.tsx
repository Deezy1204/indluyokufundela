"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, use, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/cn";

type PlayerState = {
  playing: boolean;
  toggle: () => void;
  /** 0..1 */
  progress: number;
  seek: (fraction: number) => void;
  skip: (seconds: number) => void;
  elapsed: number;
  duration: number;
  rate: number;
  cycleRate: () => void;
  captions: boolean;
  toggleCaptions: () => void;
  fullscreen: () => void;
};

const RATES = [1, 1.25, 1.5, 2];

const PlayerContext = createContext<PlayerState | null>(null);

function usePlayer() {
  const ctx = use(PlayerContext);
  if (!ctx) throw new Error("Player parts must be rendered inside <Player>");
  return ctx;
}

/**
 * Lightweight audio player state shared by its parts (button, progress, time, equalizer).
 * With `src` it plays the real file; without one it runs a silent preview so the UI from
 * the designs still responds — add episode MP3s to /public/audio and pass them as `src`.
 */
export function Player({
  src,
  duration = 1690,
  start = 0,
  loop = true,
  autoStart = false,
  children,
  className,
}: {
  src?: string;
  duration?: number;
  start?: number;
  /** Silent previews restart at the end by default; short clips should stop instead. */
  loop?: boolean;
  /** Start a silent preview already playing (e.g. a decorative app mock-up). Ignored with `src`. */
  autoStart?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const audio = useRef<HTMLAudioElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [playingState, setPlaying] = useState(autoStart && !src);
  const [elapsed, setElapsed] = useState(start);
  const [total, setTotal] = useState(duration);
  const [rate, setRate] = useState(1);
  const [captions, setCaptions] = useState(false);
  const ended = !src && !loop && elapsed >= total;
  const playing = playingState && !ended;

  useEffect(() => {
    if (!playing || src) return;
    const id = window.setInterval(() => setElapsed((e) => (e + rate >= total ? (loop ? 0 : total) : e + rate)), 1000);
    return () => window.clearInterval(id);
  }, [playing, src, total, rate, loop]);

  const cycleRate = () => {
    const next = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    if (audio.current) audio.current.playbackRate = next;
    setRate(next);
  };

  const fullscreen = () => {
    const el = root.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.().catch(() => {});
  };

  const toggle = () => {
    const el = audio.current;
    if (el) {
      if (el.paused) void el.play().catch(() => setPlaying(false));
      else el.pause();
    }
    if (ended) {
      setElapsed(0);
      setPlaying(true);
      return;
    }
    setPlaying((p) => !p);
  };

  const seek = (f: number) => {
    const t = Math.max(0, Math.min(1, f)) * total;
    if (audio.current) audio.current.currentTime = t;
    setElapsed(t);
  };

  const skip = (s: number) => seek((elapsed + s) / total);

  return (
    <PlayerContext
      value={{
        playing,
        toggle,
        progress: total ? elapsed / total : 0,
        seek,
        skip,
        elapsed,
        duration: total,
        rate,
        cycleRate,
        captions,
        toggleCaptions: () => setCaptions((c) => !c),
        fullscreen,
      }}
    >
      <div ref={root} className={className} data-playing={playing || undefined}>
        {src && (
          <audio
            ref={audio}
            src={src}
            preload="none"
            onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setTotal(e.currentTarget.duration || duration)}
            onEnded={() => setPlaying(false)}
          />
        )}
        {children}
      </div>
    </PlayerContext>
  );
}

export function PlayerButton({
  className,
  iconClassName = "text-3xl",
  label = "broadcast",
  playIcon = "play_arrow",
  pauseIcon = "pause",
  idleText,
  playingText,
}: {
  className?: string;
  iconClassName?: string;
  label?: string;
  playIcon?: "play_arrow" | "play_circle" | "headphones" | "volume_up";
  pauseIcon?: "pause";
  /** Optional visible text beside the icon, swapped while playing. */
  idleText?: ReactNode;
  playingText?: ReactNode;
}) {
  const { playing, toggle } = usePlayer();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={`${playing ? "Pause" : "Play"} ${label}`}
      className={cn("group relative", className)}
    >
      {playing && (
        <span aria-hidden className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-current opacity-20" />
      )}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={playing ? "pause" : "play"}
          initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.3, rotate: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="relative flex items-center justify-center"
        >
          <Icon name={playing ? pauseIcon : playIcon} filled className={iconClassName} hover="pop" />
        </motion.span>
      </AnimatePresence>
      {idleText !== undefined && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={playing ? "on" : "off"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="relative flex items-center gap-2"
          >
            {playing ? (playingText ?? idleText) : idleText}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}

export function PlayerProgress({ className, barClassName }: { className?: string; barClassName?: string }) {
  const { progress, seek } = usePlayer();
  return (
    <div
      role="slider"
      tabIndex={0}
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        seek((e.clientX - r.left) / r.width);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") seek(progress + 0.02);
        if (e.key === "ArrowLeft") seek(progress - 0.02);
      }}
      className={cn("group/progress relative cursor-pointer", className)}
    >
      <motion.div
        className={cn("h-full rounded-full", barClassName)}
        animate={{ width: `${progress * 100}%` }}
        transition={{ type: "tween", ease: "linear", duration: 0.25 }}
      />
    </div>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export function PlayerTime({ className, part = "both" }: { className?: string; part?: "both" | "elapsed" | "duration" | "remaining" }) {
  const { elapsed, duration } = usePlayer();
  const text = {
    both: `${fmt(elapsed)} / ${fmt(duration)}`,
    elapsed: fmt(elapsed),
    duration: fmt(duration),
    remaining: fmt(Math.max(0, duration - elapsed)),
  }[part];
  return <span className={cn("tabular-nums", className)}>{text}</span>;
}

/** Animated sound bars that dance only while playing. */
export function Equalizer({ className, barClassName = "bg-secondary-container", bars = 5 }: { className?: string; barClassName?: string; bars?: number }) {
  const { playing } = usePlayer();
  return <Bars playing={playing} className={className} barClassName={barClassName} bars={bars} />;
}

export function Bars({
  playing = true,
  className,
  barClassName = "bg-secondary-container",
  bars = 5,
}: {
  playing?: boolean;
  className?: string;
  barClassName?: string;
  bars?: number;
}) {
  return (
    <span aria-hidden className={cn("flex items-end", !/(^|\s)h-/.test(className ?? "") && "h-6", !/(^|\s)gap-/.test(className ?? "") && "gap-1", className)}>
      {Array.from({ length: bars }, (_, i) => (
        <span
          key={i}
          className={cn("h-full w-1 origin-bottom rounded-full transition-transform duration-500", barClassName)}
          style={{
            animation: playing ? `equalize ${0.8 + (i % 3) * 0.22}s ease-in-out ${i * 0.12}s infinite` : undefined,
            transform: playing ? undefined : `scaleY(${[0.45, 0.8, 0.6, 0.95, 0.5][i % 5]})`,
          }}
        />
      ))}
    </span>
  );
}

export function usePlaying() {
  return usePlayer().playing;
}

/** Renders `on` while playing and `off` otherwise (for swapping labels). */
export function PlayerLabel({ on, off, className }: { on: ReactNode; off: ReactNode; className?: string }) {
  const { playing } = usePlayer();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={playing ? "on" : "off"}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
        className={className}
      >
        {playing ? on : off}
      </motion.span>
    </AnimatePresence>
  );
}

/** Seek backwards/forwards by a number of seconds. */
export function PlayerSkip({ by, className, iconClassName = "text-[20px]" }: { by: number; className?: string; iconClassName?: string }) {
  const { skip } = usePlayer();
  return (
    <button type="button" onClick={() => skip(by)} aria-label={`${by < 0 ? "Back" : "Forward"} ${Math.abs(by)} seconds`} className={cn("group", className)}>
      <Icon name={by < 0 ? "replay_10" : by >= 30 ? "forward_30" : "forward_10"} hover="spin" className={iconClassName} />
    </button>
  );
}

/** Playback speed pill that cycles 1× → 1.25× → 1.5× → 2×. */
export function PlayerSpeed({ className }: { className?: string }) {
  const { rate, cycleRate } = usePlayer();
  return (
    <button type="button" onClick={cycleRate} aria-label={`Playback speed ${rate}x`} className={cn("relative overflow-hidden tabular-nums", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={rate} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} className="inline-block">
          {Number.isInteger(rate) ? rate.toFixed(1) : rate}x
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function PlayerCaptionsToggle({ className }: { className?: string }) {
  const { captions, toggleCaptions } = usePlayer();
  return (
    <button type="button" onClick={toggleCaptions} aria-pressed={captions} title="Subtitles" className={cn("group", captions && "text-secondary-fixed", className)}>
      <Icon name="closed_caption" filled={captions} className="text-[20px]" />
    </button>
  );
}

export type Cue = { at: number; nde: string; en: string };

/** Bilingual caption overlay; shows the latest cue at or before the current time. */
export function PlayerCaptions({ cues, className }: { cues: Cue[]; className?: string }) {
  const { captions, elapsed } = usePlayer();
  const cue = [...cues].reverse().find((c) => c.at <= elapsed) ?? cues[0];
  return (
    <AnimatePresence>
      {captions && cue && (
        <motion.div
          key={cue.at}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className={cn("pointer-events-none rounded-xl bg-black/70 px-4 py-2 text-center backdrop-blur-sm", className)}
        >
          <p className="font-title-editorial text-[15px] font-bold text-secondary-fixed">{cue.nde}</p>
          <p className="font-body-sm text-[13px] text-white/90 italic">{cue.en}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PlayerFullscreen({ className }: { className?: string }) {
  const { fullscreen } = usePlayer();
  return (
    <button type="button" onClick={fullscreen} title="Fullscreen" aria-label="Toggle fullscreen" className={cn("group", className)}>
      <Icon name="fullscreen" className="text-[20px]" />
    </button>
  );
}

/** Slow "Ken Burns" drift on the poster while playing, so the stage feels alive. */
export function PlayerZoom({ children, className }: { children: ReactNode; className?: string }) {
  const { playing } = usePlayer();
  return (
    <motion.div
      className={className}
      animate={playing ? { scale: 1.12, x: "-2%", y: "-1%" } : { scale: 1, x: 0, y: 0 }}
      transition={{ duration: playing ? 18 : 1.2, ease: playing ? "linear" : [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Big centred play/pause that fades away while playing (reappears on hover). */
export function PlayerOverlayButton({ className, iconClassName = "text-[36px]" }: { className?: string; iconClassName?: string }) {
  const { playing, toggle } = usePlayer();
  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause lesson" : "Play lesson"}
      animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.85 : 1 }}
      whileHover={{ opacity: 1, scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("group", className)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={playing ? "p" : "a"} initial={{ scale: 0.4, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.4, rotate: 90, opacity: 0 }} className="flex">
          <Icon name={playing ? "pause" : "play_arrow"} filled hover="none" className={iconClassName} />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export function usePlayerState() {
  return usePlayer();
}
