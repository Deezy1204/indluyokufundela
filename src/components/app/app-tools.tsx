"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { cn } from "@/lib/cn";
import { APP_LAUNCH } from "@/lib/site";

export type Platform = "ios" | "android";

const STORE: Record<Platform, string> = { ios: "Apple App Store", android: "Google Play" };
const PICK = "waitlist:platform";

/**
 * Store badge from the designs. The stores have no listing yet, so a tap pre-selects that
 * platform in the waitlist form and moves focus to its email field.
 */
export function StoreBadge({ platform, className, children }: { platform: Platform; className?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      title={`Get notified when we launch on ${STORE[platform]}`}
      onClick={() => window.dispatchEvent(new CustomEvent<Platform>(PICK, { detail: platform }))}
      className={cn("group text-left", className)}
    >
      {children}
    </button>
  );
}

/** "Notify Me at Launch" early-access form, posted to the waitlist Server Action. */
export function WaitlistForm({ variant }: { variant: "desktop" | "mobile" }) {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const email = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onPick = (e: Event) => {
      setPlatform((e as CustomEvent<Platform>).detail);
      const input = email.current;
      if (!input || !input.offsetParent) return;
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      input.focus({ preventScroll: true });
    };
    window.addEventListener(PICK, onPick);
    return () => window.removeEventListener(PICK, onPick);
  }, []);

  const desktop = variant === "desktop";
  const id = desktop ? "early-access-email" : "m-early-access-email";

  return (
    <ActionForm
      kind="waitlist"
      extra={{ source: "mobile-app-page" }}
      className={cn("flex flex-col", desktop ? "mt-1 gap-2.5" : "gap-space-xs")}
      successTitle="Thank you!"
      successBody={
        desktop
          ? `You have secured early access beta priority. We'll email you the moment the ${platform ? STORE[platform] : "beta"} build is ready.`
          : `You have been added to the ${APP_LAUNCH.window} priority queue${platform ? ` for ${STORE[platform]}` : ""}.`
      }
      successClassName="gap-2 bg-tertiary-fixed/40 p-5"
    >
      <AnimatePresence initial={false}>
        {platform && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed py-1 pr-1 pl-3 font-label-md text-label-md text-on-primary-fixed">
              <Icon name={platform === "ios" ? "phone_iphone" : "android"} idle className="text-[16px]" />
              Notify me on {STORE[platform]}
              <button
                type="button"
                aria-label="Clear platform"
                onClick={() => setPlatform(null)}
                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-primary-fixed-dim"
              >
                <Icon name="close" className="text-[14px]" />
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <input type="hidden" name="platform" value={platform ?? "any"} />
      <label className="sr-only" htmlFor={id}>
        Email address
      </label>
      <div className={desktop ? "flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center" : "flex flex-col gap-space-xs"}>
        <div className={cn("relative", desktop && "flex-1")}>
          {desktop && <Icon name="mail" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[20px] text-outline" />}
          <input
            ref={email}
            id={id}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address..."
            className={cn(
              "h-[52px] w-full rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:outline-none",
              desktop ? "pr-4 pl-12 font-body-md text-body-md shadow-inner" : "px-space-md font-body-sm text-body-sm shadow-sm",
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "group flex h-[52px] cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-secondary-fixed font-bold whitespace-nowrap text-on-secondary-fixed transition-all hover:bg-secondary-fixed-dim active:scale-[0.98]",
            desktop ? "px-7 font-label-lg text-label-lg shadow-sm" : "w-full px-space-md font-title-editorial shadow-md",
          )}
        >
          <SubmitLabel>
            <span>Notify Me at Launch</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </SubmitLabel>
        </button>
      </div>
    </ActionForm>
  );
}
