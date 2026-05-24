# XCMG Nepal — Official Website

Marketing and product catalog site for **XCMG Nepal**, operated by **United Heavy Equipment & Earth Movers Pvt. Ltd. (UHEEM)** — sole authorized XCMG distributor in Nepal.

**Live repository:** [github.com/itssnehatho/xcmg](https://github.com/itssnehatho/xcmg)

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- [Lenis](https://github.com/darkroomengineering/lenis) smooth scrolling

## Features

- Equipment catalog with categories, filters, and model detail pages (specs & descriptions)
- Downloadable model brochures (PDF)
- Services hub (outlets, financial services, gold service, satisfaction survey)
- About Us, news, and contact information

## Getting started

Requirements: **Node.js 20+** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

| Command | Description |
|--------|-------------|
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run dev:url` | Print LAN URL for mobile testing |

## Project layout

```
├── public/          Static assets (images, brochure PDFs, video)
├── src/app/         Routes and pages (App Router)
│   ├── _components/ Shared UI (header, footer, hero, catalog)
│   ├── _data/       Catalog, specs, contacts, content
│   └── _lib/        Helpers (listing, image warm-up)
└── scripts/         Dev utilities
```

## Content & assets

- **Product data & specs:** `src/app/_data/`
- **Brochure PDFs:** `public/brochures/catalog/Xcmg pdf/` (linked from `/DownloadBrochure`)
- **Equipment images:** `public/equipment/`
- **Large media:** Keep video under 100 MB for Git; `.mov` files are gitignored

## Deployment

Build output is a standard Next.js app. Deploy on [Vercel](https://vercel.com), Netlify, or any Node host:

- **Build command:** `npm run build`
- **Output:** Next.js default

### Contact form

The contact form lives at **`/contact`** and posts to `/api/contact`. Configure **one** of these in `.env.local` (see `.env.example`):

- **Resend** — `RESEND_API_KEY` (recommended; emails go to Sales / Service / Parts by selection)
- **Web3Forms** — `WEB3FORMS_ACCESS_KEY` (free alternative)

If neither is set, submit opens the visitor’s email app with a pre-filled draft to the correct department.

## License

Proprietary — © UHEEM / XCMG Nepal. All product names and assets are property of their respective owners.
