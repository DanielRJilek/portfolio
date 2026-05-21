# Portfolio

Personal software developer portfolio — static React site built with [Vite](https://vite.dev/) and hosted on [GitHub Pages](https://pages.github.com/).

**Live site:** `https://<your-github-username>.github.io/portfolio/`

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/portfolio/`).

## Production preview

Build and preview the same output GitHub Pages serves:

```bash
npm run build
npm run preview
```

## Customize content

Edit these files — no component changes needed for copy updates:

- [`src/data/site.js`](src/data/site.js) — name, bio, skills, nav, email, social links
- [`src/data/projects.js`](src/data/projects.js) — project cards

Update [`index.html`](index.html) `<title>` and meta description to match your name.

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds `dist/` and deploys to GitHub Pages.

**One-time setup:** In the repo on GitHub, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

This repo uses a **project site** URL (`/portfolio/`). [`vite.config.js`](vite.config.js) sets `base: '/portfolio/'` to match the repository name.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
