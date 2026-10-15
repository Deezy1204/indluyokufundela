# Indlu Yokufundela — website

Next.js 16 (App Router) site for Indlu Yokufundela, built from the "Indlu Yokufundela Cultural Website" Stitch project. Every page has a desktop and a mobile design. Both are rendered, and CSS switches between them at the `md` breakpoint (768px).

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are static)
npm start          # serve the production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://indluyokufundela.org.zw`) when building for production. It is used for social-share metadata, `sitemap.xml` and `robots.txt`, which otherwise point at `http://localhost:3000`.

## Where things live

| Path | What it is |
| --- | --- |
| `src/app/*/page.tsx` | One route per page: metadata plus `<PageShell mobile={…} desktop={…} />` |
| `src/components/views/` | The 16 page layouts (8 pages × desktop/mobile), converted from the Stitch HTML with the original Tailwind classes |
| `src/components/{about,books,events,lessons,watch,contact,app}/` | Interactive parts for each page (catalogue filters, shopping bag, course player, video library, forms…) |
| `src/components/ui/` | Shared widgets: audio/video `Player`, `ActionForm`, modals, carousel, accordion, share/copy buttons |
| `src/components/layout/` | Header (hide-on-scroll, EN/NDE toggle, mobile drawer), footer, page-transition shell |
| `src/components/icons/` | Animated line icons (Lucide paths keyed by Material Symbol name) |
| `src/lib/site.ts` | **Contact details, social links, navigation, app launch dates.** Edit these first |
| `src/app/actions.ts` | Server Action that receives every form on the site |

Content data files: `books/catalog-data.ts` (books and prices), `lessons/lesson-data.ts`, `watch/video-data.ts`. Events are written directly in `views/events-*.tsx`. Their IDs are also listed in `contact/contact-form.tsx` so registration links can pre-fill the enquiry form.

## Motion system

All motion respects `prefers-reduced-motion`.

- **Scroll reveals:** add `data-reveal` (`""`, `"fade"` or `"scale"`) to a section, or `data-stagger` to a grid so its children cascade in. Add `data-count` to a number such as "3,400+" to make it count up when it comes into view. `MotionObserver` drives all of these.
- **Hero entrances:** pure CSS classes `enter-up`, `enter-fade`, `enter-scale`, `enter-pop` and `enter-grow`. Stagger them with `style={d(ms)}` from `components/motion/delay`. Headlines use `<SplitWords text="…" />`.
- **Icons:** `<Icon name="material_name" />` draws itself in when it first appears.
  - `hover="…"` sets the hover effect: draw, nudge, drop, pop, ring, spin, beat, wave, tilt or lift. A parent with the `group` class also triggers it.
  - `idle` loops the effect gently.
  - `filled` gives a duotone fill.
- **Utilities:** `lift` for hover cards, `zoom-media`, `grow-bar` for progress fills, `draw-line` for SVG strokes, `ndebele-band` for the moving colour trim.
- **Page transitions:** the React `<ViewTransition>` slides pages left or right, following their order in the main navigation.

## Before launch

1. **Contact details** in `src/lib/site.ts` come from the Stitch mock-ups and are unverified. This covers emails, phone and WhatsApp numbers, the street address and the Google Maps link.
2. **Links**
   - The YouTube channel and Skyz Metro FM "listen live" links are currently web searches. Replace them with the official URLs.
   - The Facebook, Instagram, X and WhatsApp-group buttons are not clickable yet. Add their URLs in `site-footer.tsx` and the Contact views.
3. **Forms:** the contact, newsletter, app waitlist, book order, story submission and lesson proposal forms all post to `submitForm` in `src/app/actions.ts`. It validates the input and only logs to the server console. Connect it to email or a CRM before going live.
4. **Audio and video:** the players run a silent preview. Put the files in `public/` and pass them to `<Player src="…">`.
5. **Dates:** the 2026 events and the app's "Q3 2026" / "June 2026" launch dates are now in the past. Update the events views and `APP_LAUNCH` in `src/lib/site.ts`.
6. **isiNdebele:** the NDE navigation labels in `src/lib/site.ts` need review by a native speaker.
7. **Legal pages:** Privacy Policy, Terms of Heritage Use and the Indigenous Archival Code appear as plain text in the footer. The pages don't exist yet.
8. **Images:** these are the AI-generated Stitch images, and a few contain garbled text or UI artifacts. Replace them with real photography in `src/assets/images/`.
"# indluyokufundela" 
