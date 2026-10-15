import type { Metadata } from "next";
import { Icon } from "@/components/icons/icon";
import { d } from "@/components/motion/delay";
import { SplitWords } from "@/components/motion/split-words";
import { Link } from "@/components/ui/link";
import { NAV, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  const links = NAV.filter((item) => item.href !== "/");
  return (
    <section className="relative flex w-full flex-1 flex-col items-center overflow-hidden bg-surface px-margin py-space-2xl md:px-margin-desktop">
      <div className="ndebele-band absolute inset-x-0 top-0 h-2" />
      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <div className="relative">
          {/* Ndebele diamond motif drawing itself around the number */}
          <svg aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 text-primary/15 md:h-[250px] md:w-[250px]" viewBox="0 0 200 200" fill="none">
            <polygon className="draw-line" pathLength={1} points="100,4 196,100 100,196 4,100" stroke="currentColor" strokeWidth="2.5" />
            <polygon className="draw-line" pathLength={1} style={d(250)} points="100,26 174,100 100,174 26,100" stroke="currentColor" strokeWidth="2.5" />
            <polygon className="draw-line" pathLength={1} style={d(500)} points="100,48 152,100 100,152 48,100" stroke="var(--color-secondary-fixed)" strokeOpacity="0.55" strokeWidth="4" />
          </svg>
          <p className="enter-pop relative font-display-hero text-[120px] leading-none font-black tracking-tighter text-primary md:text-[168px]" style={d(100)}>
            4<span className="inline-block animate-float text-secondary-fixed [text-shadow:0_4px_0_var(--color-primary)]">0</span>4
          </p>
        </div>
        <span className="enter-up mt-4 inline-flex items-center gap-2 rounded-full bg-secondary-container/40 px-4 py-1.5 font-label-cultural-caps text-label-cultural-caps tracking-wider text-on-secondary-container uppercase" style={d(250)}>
          <Icon name="explore" idle className="text-[16px]" />
          {SITE.motto}
        </span>
        <h1 className="mt-space-sm font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:font-headline-lg md:text-headline-lg">
          <SplitWords text="This page has wandered off the path" delay={320} />
        </h1>
        <p className="enter-up mt-space-xs max-w-lg font-body-lg text-body-lg text-on-surface-variant" style={d(560)}>
          The page you were looking for may have moved, or the link may be mistyped. Here are some good places to pick up the story again.
        </p>
        <Link
          href="/"
          className="enter-up group mt-space-md inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-label-lg text-label-lg font-bold text-on-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-container active:scale-95"
          style={d(660)}
        >
          <Icon name="home" hover="lift" className="text-[20px]" />
          Back to Home
        </Link>
      </div>

      <nav aria-label="Popular pages" className="relative mt-space-xl grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
        {links.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="enter-up group lift flex items-center gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-sm"
            style={d(760 + i * 70)}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary transition-colors group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed">
              <Icon name={item.icon} className="text-[20px]" />
            </span>
            <span className="font-title-editorial text-title-editorial font-bold text-on-surface">{item.label}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
