# JJ Spices – Global Spice Hub

A modern, fast, and accessible marketing website for an Indian spice exporter, built with:

- React 18 + TypeScript
- Vite
- Tailwind CSS (custom design tokens)
- shadcn/ui (Radix UI based components)
- React Router

## Features

- Polished UX with focus-visible states, accessible navigation, and responsive layout
- Modern “spice” theme (turmeric/paprika/herb tones) defined via CSS variables
- SEO and indexing ready: canonical URL, OpenGraph/Twitter tags, JSON‑LD, sitemap and robots
- Static SPA routing compatible with GitHub Pages

## Project structure

```
src/
  components/
    Navigation.tsx
    ui/ ... (shadcn/ui components)
  pages/
    Home.tsx
    About.tsx
    Products.tsx
    GlobalPresence.tsx
    Contact.tsx
  assets/
    hero-spices.jpg
  index.css        (design tokens + utilities)
  main.tsx         (app bootstrap)
vite.config.ts
public/
  favicon.ico
  robots.txt
  sitemap.xml
  404.html         (SPA fallback for GitHub Pages)
```

## Getting started

Prerequisites:
- Node.js 18+ and npm

Install dependencies:
```bash
npm install
```

Run locally (dev server):
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Theming (Design Tokens)

Primary design tokens are defined in `src/index.css` under `@layer base :root` and `.dark`.
Update these to customize the theme:

- `--primary`, `--secondary`, `--accent` – brand colors
- `--background`, `--foreground`, `--muted` – surface/text
- Shadows (`--shadow-card`, `--shadow-float`, `--shadow-glow`) and transitions
- Gradients: `--gradient-hero`, `--gradient-warm`, `--gradient-cool`, `--gradient-sunset`

Tailwind is extended to expose these tokens as utilities (see `tailwind.config.ts`), including custom shadows:
- `shadow-card`, `shadow-float`, `shadow-glow`, `shadow-intense`

Common UI elements (like buttons) use these tokens and utilities. You can adjust component styles in `src/components/ui/*`.

## SEO and indexing

- `index.html` contains canonical URL, `og:url`, `og:image`, `twitter:card`, and Organization JSON‑LD.
- `public/sitemap.xml` lists the main routes; `public/robots.txt` references the sitemap.
- Update URLs to your live domain:
  - `index.html`: `<link rel="canonical" ...>` and `og:url`
  - `public/robots.txt`: `Sitemap: https://<your-domain>/sitemap.xml`

## Deploying to GitHub Pages

This project is configured for GitHub Pages static hosting.

Vite config (`vite.config.ts`):
- `base: './'` so assets load correctly from a repository subpath.

SPA fallback:
- `public/404.html` redirects to `index.html` so client-side routes work on refresh.

Scripts (`package.json`):
- `predeploy`: builds the project
- `deploy`: publishes the `dist` folder to the `gh-pages` branch via `gh-pages`

Steps:
1. Commit and push the repository to GitHub.
2. In GitHub → Settings → Pages: set Source to “Deploy from a branch”, select `gh-pages` and root.
3. Deploy:
   ```bash
   npm run deploy
   ```
4. Site URL: `https://<your-username>.github.io/<repo-name>/`

### Custom domain (optional)
If using a custom domain:
- Create `public/CNAME` with your domain name (single line), e.g.:
  ```
  www.jjspices.com
  ```
- GitHub Pages → Custom domain: set the same domain and configure DNS (CNAME record to `<username>.github.io`).

## Accessibility

- Navigation highlights the current page using `aria-current="page"`.
- Focus-visible outlines are enabled on interactive elements for keyboard users.

## Tech stack

- React + TypeScript, Vite, Tailwind CSS, Radix/shadcn/ui, React Router
- ESLint configured for React and TypeScript

## Commands

- `npm run dev` – Start dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run deploy` – Publish `dist` to GitHub Pages (`gh-pages` branch)

## Notes

- Replace any placeholder social links and domain values with your actual profiles and domain.
- Images live in `src/assets/`; update `hero-spices.jpg` if you want a different hero.
