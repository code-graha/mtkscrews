# MTK Screws — Website

Static marketing site for **MTK Screws** (Aggarwal Industries) — a manufacturer and trader of industrial fasteners based in Greater Noida, India.

Plain HTML pages, Tailwind CSS (compiled at build time), and vanilla JavaScript. No frontend framework, no server — deploys as static files.

## Tech stack

- **Markup**: 8 static HTML pages (one per route)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) compiled via the Tailwind CLI, plus a small hand-written stylesheet for the few things utility classes don't cover
- **Scripting**: vanilla JS — no build step required for JS, no bundler
- **Contact form backend**: a Google Apps Script Web App (writes submissions to a Google Sheet, sends notification/thank-you emails)
- **Image pipeline**: [sharp](https://sharp.pixelplumbing.com) via small Node scripts for gallery generation and image compression
- **Loading screen**: a full-page overlay (`#loading-screen`, inlined critical CSS in `<head>`) shown until `window.load`, with a 5s safety timeout — see `js/script.js`
- **SEO / AI discoverability**: structured data (Organization, LocalBusiness, FAQPage) on every page, plus `robots.txt` and `llms.txt` tuned for AI crawlers — see [SEO & AI discoverability](#seo--ai-discoverability) below

## Folder structure

```
.
├── index.html, about.html, products.html, …   Pages (kept at project root so live URLs never change)
├── robots.txt, sitemap.xml, llms.txt           Crawler-facing files (must stay at root)
├── css/
│   ├── input.css                               Tailwind source (@tailwind base/components/utilities)
│   ├── tailwind.css                             Compiled, purged, minified — generated, but committed
│   └── style.css                                Hand-written custom rules (scrollbar, dot-grid wells, etc.)
├── js/
│   ├── script.js                                Shared logic: nav, mega-menu, SITE_CONFIG injection, loading screen
│   ├── products-data.js                         Product catalogue + site config (source of truth)
│   ├── gallery-data.js                          Generated — see scripts/generate-gallery.js
│   └── coming-soon-popup.js                     "Coming soon" modal used on a few CTAs
├── assets/                                      Images, favicons, catalog PDF — everything actually served to visitors
├── docs/                                        Project reference docs (color theory, data-to-confirm list)
├── scripts/                                     Dev tooling (not deployed)
│   ├── generate-gallery.js                      Scans assets/gallery/ → writes js/gallery-data.js
│   ├── optimize-images.js                       Resizes/compresses oversized images in place
│   └── *.ps1                                    Older PowerShell helpers for syncing product images
├── google-apps-script/Code.gs                   Contact form backend (deployed separately to Google)
└── _archive/                                    Gitignored — old docs, backup files, and original
                                                   full-resolution images (before optimize-images.js)
```

## Local development

```bash
npm install
npm run build:css      # compiles css/tailwind.css from css/input.css + tailwind.config.js
npm run serve           # serves the site at http://localhost:3000
```

While editing Tailwind classes, run the watcher instead so `css/tailwind.css` rebuilds on save:

```bash
npm run watch:css
```

Because the pages are plain static HTML, you can also just open them directly in a browser — but a local server is recommended so absolute paths (`/css/…`, `/js/…`, `/assets/…`) resolve correctly.

## Image pipeline

- `npm run gallery` — regenerates `js/gallery-data.js` by scanning every image under `assets/gallery/`. Run this after adding/removing/renaming gallery images.
- `npm run optimize-images` — resizes and re-compresses oversized source images (factory photos, headshots, the logo) in place. Idempotent: it backs up the untouched original to `_archive/originals/` before compressing, and skips any file that's already been optimized. Run this after dropping in new full-resolution photos.

## Site-wide configuration

Contact details, social links, and the footer credit all come from **one place**: `SITE_CONFIG` at the top of `js/products-data.js`. `js/script.js` injects these values into every page at load time (scoped to `#top-bar` and `#main-footer`, plus a site-wide pass for WhatsApp/catalog links) — so to change a phone number, social URL, or the footer credit link, edit `SITE_CONFIG` once rather than hunting through each HTML file.

Currently configured social links: **LinkedIn** and **Instagram** only (Facebook/YouTube icons were removed). All WhatsApp links open in a new tab with a pre-filled "Hi" message (`?text=Hi`).

## SEO & AI discoverability

- **`robots.txt`** explicitly allows the major AI crawlers (Googlebot, Google-Extended, GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, FacebookBot, Bingbot, Applebot) in addition to general crawlers.
- **`llms.txt`** is a plain-text company/product summary written for LLMs (company overview, full product catalogue, quality/certifications, contact info, and an **FAQ section**). Keep it in sync with `SITE_CONFIG` and the on-page FAQ whenever contact details, social links, or key facts change — it's hand-maintained, not generated.
- **Structured data** (JSON-LD) on every page: `Organization` (with `alternateName` including "mtkscrews" for the bare brand-name query), `LocalBusiness`/`Manufacturer`, and on the homepage a `FAQPage` block. The `FAQPage` JSON-LD **must exactly match** the visible FAQ accordion text in `index.html` — Google penalizes structured data that doesn't match on-page content, so update both together.
- **`sitemap.xml`** — bump `<lastmod>` for any page whose content you change.

## Deployment

The site is static and has no server-side rendering, but Tailwind now requires a build step (it no longer loads from the CDN — see below). Whatever host serves this site needs to run, before publishing:

```bash
npm install && npm run build:css
```

`css/tailwind.css` is committed to the repo, so the site works correctly even if a build step isn't configured — but any change to HTML/JS markup that uses new Tailwind classes won't take effect live until `npm run build:css` is re-run and the output is deployed.

## What's gitignored

See `.gitignore`. Not committed to the repo:

- `_archive/` — old docs/backups, plus pre-compression originals of every image `optimize-images.js` has touched (`_archive/originals/`)
- `.claude/` — local Claude Code project settings
- `node_modules/` — reinstall with `npm install`
- OS/editor clutter (`.DS_Store`, `Thumbs.db`)

Everything else — including the compiled `css/tailwind.css` and `package-lock.json` — is committed, since this site has no CI build step guaranteed at deploy time (see [Deployment](#deployment)).

## Notes for future work

- **Contact form**: `contact.html`'s quote form posts to a Google Apps Script Web App — see `google-apps-script/Code.gs` for setup/redeploy instructions. If submissions fail with a generic "Something went wrong" error, check the Apps Script deployment's **Who has access** setting is **Anyone** (Deploy → Manage deployments) — if it's restricted, Google returns an HTML "Access denied" page instead of JSON, which the form can't parse. Redeploying also changes the `/exec` URL, so update `QUOTE_FORM_ENDPOINT` in `contact.html` afterward.
- **Tailwind CDN removed**: the site previously loaded Tailwind via `cdn.tailwindcss.com` on every page (flagged by Lighthouse as unsuitable for production — it compiles all utilities client-side on every load). It's now a compiled, purged, minified stylesheet (`css/tailwind.css`) generated from `tailwind.config.js` + `css/input.css`.
- **Placeholder images**: a few sections (the testimonial avatars and "trusted by" logo strip on `index.html`, two images on `certifications.html`) still hotlink to `storage.googleapis.com/uxpilot-auth.appspot.com/...` — leftover placeholder assets from an AI design mockup. These should be replaced with real, self-hosted images under `assets/` when the client provides them.
- **Originals are preserved**: every image `optimize-images.js` touches has its pre-compression original saved under `_archive/originals/` (gitignored, but present locally) in case a higher-resolution version is ever needed again.
