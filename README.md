# Daniel Jilek — Portfolio

My personal portfolio page. Built as a static single-page React app with [Vite](https://vite.dev/) and deployed to [GitHub Pages](https://pages.github.com/).

**Live site:** [https://danielrjilek.github.io/portfolio/](https://danielrjilek.github.io/portfolio/)

## Features

- **Hero** — Introduction, link to projects, resume (header), and social icons (GitHub, LinkedIn, email)
- **About** — Bio with line breaks via `white-space: pre-line`
- **Education** — Schools with seals, degree, location, and dates
- **Skills** — Grouped by category (languages, frameworks, tools, etc.)
- **Projects** — Cards with screenshots, tech tags, and live/repo links
- **Contact** — Social icon links
- Responsive layout, light/dark system theme, sticky header with in-page navigation

## Tech stack

- React 19
- Vite 8
- Plain CSS (co-located per component)
- GitHub Actions → GitHub Pages

No backend — content is driven by JavaScript data files and static assets in `public/`.

## Local development

```bash
npm install
npm run dev
```

Open the URL from the terminal (typically `http://localhost:5173/portfolio/`).

### Production preview

```bash
npm run build
npm run preview
```

## Customize content

Most updates do not require component changes:

| File | What to edit |
|------|----------------|
| [`src/data/site.js`](src/data/site.js) | Name, role, tagline, bio, email, resume URL, social links, nav, skills, education |
| [`src/data/projects.js`](src/data/projects.js) | Project titles, descriptions, tech, links, screenshot paths |
| [`index.html`](index.html) | Page `<title>` and meta description |
| [`public/`](public/) | Resume PDF, university seals, project images (`public/projects/`) |

**Bio line breaks:** Use `\n` in the `bio` string in `site.js`.

**Project screenshots:** Add images under `public/projects/` and set `image` to `` `${import.meta.env.BASE_URL}projects/your-file.png` `` in `projects.js`.

**Education logos:** Update `logo` paths in the `education` array in `site.js` (files live in `public/`).

## Project structure

```
src/
  data/           site.js, projects.js
  components/     Header, Hero, About, Education, Skills, Projects, Contact, etc.
  App.jsx         Composes all sections
public/           Resume, seals, project screenshots
.github/workflows/deploy.yml
```

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds `dist/` and publishes to GitHub Pages.

**One-time GitHub setup:** **Settings → Pages → Build and deployment → Source:** GitHub Actions.

This repo is a **project site** (`/portfolio/`). [`vite.config.js`](vite.config.js) sets `base: '/portfolio/'` to match the repository name. If you rename the repo or use a user site (`username.github.io`), update `base` accordingly.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

