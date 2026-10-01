# Ember & Olive — Restaurant Website

A static restaurant site built with **Next.js 15 (App Router)**, **Tailwind CSS** and **TypeScript**. No backend, no API calls, no database.

## Setup

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass with zero TypeScript errors
npm start
```

## Pages

`/` Home · `/menu` Menu (filter tabs) · `/about` About · `/contact` Contact

### Two portals

- `/reviews` — **customer portal**: guests pick a team member, rate them and leave a message. Reviews wait for admin approval.
- `/admin` — **admin dashboard** (demo passcode `admin123`): overview, staff & posts, review moderation, operations (hours, tables, daily checklist) and monthly payroll adjusted by approved reviews.

> There is no backend or db.json. Dashboard data is seeded from `data/` and saved in the browser's `localStorage`, so customer reviews only reach the admin on the same browser. A real multi-user setup needs a database and real authentication.

## Project structure

- `app/` — routes and root layout (wraps `ThemeProvider`)
- `components/layout|ui|sections` — small, typed, reusable components
- `context/ThemeContext.tsx` — light/dark theme, persisted in `localStorage`
- `data/` — typed content (`menu.ts`, `hours.ts`, `site.ts`)
- `styles/globals.css`, `tailwind.config.ts`

## Screenshots

| Light | Dark |
| --- | --- |
| ![Light](public/images/screenshot-light.png) | ![Dark](public/images/screenshot-dark.png) |

> Add your own screenshots to `public/images/` with the names above.

## Deploy

Push to GitHub, import the repo at vercel.com, and deploy.

## Git workflow

Branches: `feat/theme-context`, `feat/components`, `feat/pages`. Commit prefixes: `chore`, `feat`, `fix`, `style`, `refactor`.
