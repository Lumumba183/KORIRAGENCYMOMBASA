# Korir Agency — Official Website

**Your Trusted Coastal Property & Travel Partner** — Diani Beach, South Coast, Kenya.

A premium, mobile-first website for Korir Agency covering property sales & rentals, holiday villas & Airbnb, car hire, airport & SGR transfers, tours & safaris, property management, gallery, testimonials, blog and contact — plus a **no-password Admin Panel** and **Customer Accounts** (per client request).

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS 3 + shadcn/ui primitives
- React Router 7 (SPA)
- LocalStorage-backed demo store (session, listings, bookings, inquiries, users, payments, content)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs dist/
```

## Deploy to Netlify (per the deployment knowledge base)

1. Push this repo to GitHub (already done: `Lumumba183/KORIRAGENCYMOMBASA`).
2. In Netlify: **Add new site → Import an existing project → GitHub → KORIRAGENCYMOMBASA**.
3. **IMPORTANT:** Leave the Netlify UI build settings **completely blank** (Build command, Publish directory, Base directory). The `netlify.toml` in the repo root handles everything (`npm run build`, `publish = "dist"`). Filled-in UI settings override the file (`commandOrigin: ui`) and cause the classic `dist does not exist` failure.
4. Deploy. First deploy log should show `commandOrigin: config` and `publishOrigin: config`.
5. (Optional) Set a custom domain, then update `https://koriragency.co.ke` in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Contact Form → koriragency@gmail.com

The contact and booking forms are **Netlify Forms** (`form-name="contact"` and `"booking"` — hidden detection forms live in `index.html`). After the first deploy:

1. Netlify dashboard → **Forms** — you'll see both forms.
2. **Forms → Settings → Notifications → Add notification → Email notification**.
3. Set **Email to notify** = `koriragency@gmail.com`, event = *New form submission*.

Every website inquiry then lands directly in the Gmail inbox. (Form submissions are also mirrored into the Admin Panel for demo purposes.)

## WhatsApp

Hardcoded site-wide to **+254 722 280 840** via `https://wa.me/254722280840` with pre-filled messages per context (bookings, viewings, inquiries). Change once in `src/data/site.ts` (`BRAND.whatsapp`).

## Access Areas (no password, as requested)

- **Login page** (`/login`) — choose *Admin Panel* or *Customer Account*; no password needed.
- **Admin Panel** (`/admin`) — manage property listings (add/edit/delete/reset), bookings (status), inquiries (status), users, payments, and live website content (announcement bar, hero text).
- **Customer Account** (`/account`) — favorites, bookings, inquiries, profile.

> Demo build: accounts and data persist in the visitor's browser (localStorage). For production accounts with real passwords and a shared database, the next phase adds a backend (e.g. Supabase/Firebase) without redesigning the site.

## SEO

- Full meta/OG/Twitter tags + LocalBusiness JSON-LD in `index.html`
- Per-page titles & descriptions
- `sitemap.xml`, `robots.txt`
- Optimized local imagery (all assets compressed, ~4 MB total), lazy loading, security & cache headers in `netlify.toml`

---

*"Against All Odds, We Hope. Let It Happen."*
📞 +254 722 280 840 | +254 722 760 805 · 📧 koriragency@gmail.com
