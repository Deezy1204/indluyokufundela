"use client";

import { AnimatePresence, motion, useAnimationControls } from "motion/react";
import { createContext, use, useEffect, useMemo, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { ActionForm, SubmitLabel } from "@/components/ui/action-form";
import { cn } from "@/lib/cn";
import { formatPrice, PRODUCTS } from "./catalog-data";

type Bag = Record<string, number>;
type BagContextValue = {
  items: Bag;
  count: number;
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  bump: number;
};

const BagContext = createContext<BagContextValue | null>(null);
const KEY = "indlu-reading-bag";

export function useBag() {
  const ctx = use(BagContext);
  if (!ctx) throw new Error("useBag must be used inside <BagProvider>");
  return ctx;
}

/** Reading bag for book orders and pre-orders; persisted in localStorage. */
export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Bag>({});
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "{}") as Bag;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount
      setItems(Object.fromEntries(Object.entries(saved).filter(([id, q]) => PRODUCTS[id] && q > 0)));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, loaded]);

  const value = useMemo<BagContextValue>(() => {
    const count = Object.values(items).reduce((a, b) => a + b, 0);
    const total = Object.entries(items).reduce((sum, [id, q]) => sum + (PRODUCTS[id]?.price ?? 0) * q, 0);
    return {
      items,
      count,
      total,
      open,
      setOpen,
      bump,
      add: (id, qty = 1) => {
        setItems((b) => ({ ...b, [id]: Math.min(99, (b[id] ?? 0) + qty) }));
        setBump((n) => n + 1);
      },
      setQty: (id, qty) =>
        setItems((b) => {
          const next = { ...b };
          if (qty <= 0) delete next[id];
          else next[id] = Math.min(99, qty);
          return next;
        }),
    };
  }, [items, open, bump]);

  return (
    <BagContext value={value}>
      {children}
      <BagFab />
      <AnimatePresence>{open && <BagDrawer />}</AnimatePresence>
    </BagContext>
  );
}

/** A "Buy Now" / "Pre-order" button that drops the title into the bag with a brief confirmation. */
export function AddToBag({
  id,
  qty = 1,
  className,
  children,
  addedLabel = "Added to bag",
}: {
  id: string;
  qty?: number;
  className?: string;
  children: ReactNode;
  addedLabel?: string;
}) {
  const { add } = useBag();
  const [added, setAdded] = useState(false);
  useEffect(() => {
    if (!added) return;
    const t = window.setTimeout(() => setAdded(false), 1600);
    return () => window.clearTimeout(t);
  }, [added]);
  return (
    <button
      type="button"
      onClick={() => {
        add(id, qty);
        setAdded(true);
      }}
      className={cn("group relative overflow-hidden", className)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Icon name="check_circle" filled className="text-[18px]" />
            {addedLabel}
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/** Quantity stepper bound to a local value (used by the spotlight before adding to bag). */
export function Stepper({ value, onChange, min = 1 }: { value: number; onChange: (v: number) => void; min?: number }) {
  return (
    <div className="flex flex-row items-center rounded-full bg-surface-container-lowest p-1 shadow-sm">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="group flex h-8 w-8 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container active:scale-90"
      >
        <Icon name="remove" className="text-[16px]" />
      </button>
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden font-title-editorial text-title-editorial font-bold text-on-surface">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(99, value + 1))}
        className="group flex h-8 w-8 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container active:scale-90"
      >
        <Icon name="add" className="text-[16px]" />
      </button>
    </div>
  );
}

/** Spotlight "quantity + Buy Now" pair. */
export function QuantityBuy({ id, buttonClassName, children }: { id: string; buttonClassName: string; children: ReactNode }) {
  const [qty, setQty] = useState(1);
  return (
    <>
      <Stepper value={qty} onChange={setQty} />
      <AddToBag id={id} qty={qty} className={buttonClassName}>
        {children}
      </AddToBag>
    </>
  );
}

function BagFab() {
  const { count, setOpen, bump } = useBag();
  const controls = useAnimationControls();
  useEffect(() => {
    if (bump) void controls.start({ scale: [1, 1.25, 0.92, 1], rotate: [0, -12, 8, 0], transition: { duration: 0.6 } });
  }, [bump, controls]);
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open reading bag (${count} item${count === 1 ? "" : "s"})`}
          initial={{ scale: 0, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="group fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg ring-4 ring-secondary-fixed/60"
        >
          <motion.span animate={controls} className="flex">
            <Icon name="shopping_bag" className="text-[28px]" />
          </motion.span>
          <motion.span
            key={count}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 600, damping: 18 }}
            className="absolute -top-1 -right-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-secondary-fixed px-1.5 font-label-md text-[12px] font-extrabold text-on-secondary-fixed shadow-sm"
          >
            {count}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function BagDrawer() {
  const { items, total, setQty, setOpen, count } = useBag();
  const entries = Object.entries(items);
  const summary = entries.map(([id, q]) => `${q} × ${PRODUCTS[id]?.title}${PRODUCTS[id]?.preorder ? " (pre-order)" : ""}`).join("; ");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [setOpen]);

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Reading bag">
      <motion.button
        type="button"
        aria-label="Close reading bag"
        tabIndex={-1}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 36 }}
        className="absolute inset-y-0 right-0 flex w-[min(92vw,440px)] flex-col bg-surface pt-safe pb-safe shadow-lg"
      >
        <div className="ndebele-band h-2 shrink-0" />
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <div>
            <p className="font-label-cultural-caps text-label-cultural-caps text-secondary uppercase">Indlu Yokufundela Press</p>
            <h2 className="font-headline-sm text-headline-sm text-primary">Your Reading Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container transition-transform hover:rotate-90"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <ul className="flex flex-col gap-3">
            <AnimatePresence initial={false}>
              {entries.map(([id, q]) => (
                <motion.li
                  key={id}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60, height: 0, marginBottom: -12 }}
                  className="flex items-center gap-3 rounded-2xl bg-surface-container-lowest p-3 shadow-sm"
                >
                  <span className="flex h-12 w-10 shrink-0 items-center justify-center rounded-md bg-primary-fixed text-primary">
                    <Icon name={PRODUCTS[id]?.preorder ? "alarm" : "menu_book"} className="text-[20px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-label-lg text-label-lg text-on-surface">{PRODUCTS[id]?.title}</p>
                    <p className="font-body-sm text-[13px] text-on-surface-variant">
                      {formatPrice(PRODUCTS[id]?.price ?? 0)} each{PRODUCTS[id]?.preorder ? " · pre-order" : ""}
                    </p>
                  </div>
                  <Stepper value={q} min={0} onChange={(v) => setQty(id, v)} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          {count === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 text-center font-body-md text-body-md text-on-surface-variant">
              Your bag is empty — add a title to get started.
            </motion.p>
          )}

          {count > 0 && (
            <div className="mt-6 rounded-2xl bg-surface-container-low p-4">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-label-cultural-caps text-label-cultural-caps text-on-surface-variant uppercase">Estimated total</span>
                <motion.span key={total} initial={{ scale: 1.15 }} animate={{ scale: 1 }} className="font-headline-sm text-headline-sm font-black text-primary">
                  {formatPrice(total)} USD
                </motion.span>
              </div>
              <ActionForm
                kind="order"
                className="flex flex-col gap-2.5"
                extra={{ items: summary, total: formatPrice(total) }}
                successTitle="Order request sent"
                successBody="Our press team will confirm availability, delivery and payment options (USD or ZWG) by email."
              >
                <input name="name" required autoComplete="name" placeholder="Full name" className="h-12 rounded-full border-[1.5px] border-[#D5D5CE] bg-surface-container-lowest px-5 font-body-sm text-body-sm focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 focus:outline-none" />
                <input name="email" type="email" required autoComplete="email" placeholder="Email address" className="h-12 rounded-full border-[1.5px] border-[#D5D5CE] bg-surface-container-lowest px-5 font-body-sm text-body-sm focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 focus:outline-none" />
                <input name="school" placeholder="School or delivery town (optional)" className="h-12 rounded-full border-[1.5px] border-[#D5D5CE] bg-surface-container-lowest px-5 font-body-sm text-body-sm focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 focus:outline-none" />
                <button type="submit" className="group mt-1 flex h-12 items-center justify-center gap-2 rounded-full bg-primary font-label-lg text-label-lg text-on-primary shadow-md transition-colors hover:bg-primary-container active:scale-[0.98]">
                  <SubmitLabel>
                    <Icon name="send" className="text-[18px]" />
                    Request Order
                  </SubmitLabel>
                </button>
                <p className="text-center font-body-sm text-[12px] text-outline">No payment is taken online — we confirm every order personally.</p>
              </ActionForm>
            </div>
          )}
        </div>
      </motion.aside>
    </div>
  );
}
