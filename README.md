# Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-1FAD58?style=flat-square)](LICENSE)
[![Deployment](https://img.shields.io/github/actions/workflow/status/Mahmud0808/Mahmud0808.github.io/deploy.yml?branch=main&label=deploy&style=flat-square)](https://github.com/Mahmud0808/Mahmud0808.github.io/actions/workflows/deploy.yml)

Source code for [mahmud0808.github.io](https://mahmud0808.github.io), my personal portfolio website.

The same code is also deployed to Vercel at [mahmud0808.vercel.app](https://mahmud0808.vercel.app).

## Features

- **Fast by default.** Static HTML with a small amount of JavaScript, responsive images generated at build time, and the heading font embedded in the stylesheet.
- **Dark first, with a light theme** and five accent colours in the style of Material You. Each visitor's choice is remembered.
- **Accessible.** Keyboard navigation, a skip link, visible focus, touch targets that meet WCAG 2.2, reduced motion support and high contrast support.
- **Search ready.** Person and profile structured data, sitemap, robots file, web manifest and an Open Graph preview image.
- **Printable.** Printing the page produces a clean, CV-style layout.
- **Content kept apart from code.** All text lives in typed files under `src/lib/content`.

## Tech stack

| Area      | Tools                                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org) (App Router) with [TypeScript](https://www.typescriptlang.org)                                                   |
| Styling   | Plain CSS with OKLCH colour tokens, no CSS framework                                                                                           |
| Fonts     | [Big Shoulders](https://fonts.google.com/specimen/Big+Shoulders) and [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex), self-hosted |
| Icons     | [Simple Icons](https://simpleicons.org) and [Devicon](https://devicon.dev), inlined at build time                                              |
| Images    | [sharp](https://sharp.pixelplumbing.com) for responsive sizes                                                                                  |
| Quality   | ESLint, Prettier and [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)                                                            |

## Getting started

Requirements: [Node.js](https://nodejs.org) 20.9 or newer and [Yarn](https://classic.yarnpkg.com) 1. If Yarn is not installed, run `npm install -g yarn`.

```bash
git clone https://github.com/Mahmud0808/Mahmud0808.github.io.git
cd Mahmud0808.github.io
yarn install
yarn dev
```

The site runs at `http://localhost:3000`.

| Command        | What it does                                    |
| -------------- | ----------------------------------------------- |
| `yarn dev`     | Starts the development server                   |
| `yarn build`   | Builds the site; outputs static files to `out/` |
| `yarn lint`    | Checks the code with ESLint                     |
| `yarn format`  | Formats the code with Prettier                  |
| `yarn analyze` | Builds with the bundle analyzer                 |

`yarn dev` and `yarn build` first run `scripts/resize-images.mjs` and `scripts/inline-font.mjs`, which generate the responsive images and the embedded heading font. The generated files are not committed.

## Editing content

| To change                              | Edit                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| Name, intro and availability           | `src/lib/content/hero.ts`                             |
| About text and key facts               | `src/lib/content/about.ts`                            |
| Skills and tools                       | `src/lib/content/skills.ts`                           |
| Work experience                        | `src/lib/content/experience.ts`                       |
| Featured projects                      | `src/lib/content/featured-projects.ts`                |
| All projects                           | `src/lib/content/projects.ts`                         |
| Reviews                                | `src/lib/content/testimonials.ts`                     |
| Email, profiles and search description | `src/lib/content/portfolio.ts`                        |
| Resume                                 | Replace `public/resume.pdf`, keeping the file name    |
| Profile picture                        | Replace `src/assets/mahmudul-hasan.webp`              |
| Project screenshots                    | Add to `public/images/projects/` (700 × 400 px)       |
| Colours, fonts and layout              | `src/styles/globals.css`                              |
| Link preview image                     | Replace `src/app/opengraph-image.png` (1200 × 630 px) |

## Project structure

```
src/
  app/          Pages, metadata, sitemap, robots, icons and preview image
  assets/       Profile picture source
  components/   Small reusable and interactive pieces
  containers/   Page sections, header and footer
  fonts/        Font files
  lib/
    content/    All site text and data
    types/      Content types
    utils/      Helpers, font setup, image loader and icons
  styles/       Global stylesheet
scripts/        Build-time image and font generation
public/         Resume, project screenshots and app icons
```

## Deployment

**GitHub Pages.** Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It installs dependencies, builds a static export, checks it with Lighthouse, and publishes `out/` to the `public` branch. The deploy stops if accessibility, best practices or SEO score below 95. For a project site (a repository not named `<username>.github.io`), the workflow sets the base path automatically.

**Vercel.** Import the repository and keep the default Next.js settings. On Vercel the site builds as a server app and uses Vercel's image optimisation instead of the static export.

Both deployments point search engines to `https://mahmud0808.github.io` as the main address. To change it, edit `siteUrl` in `src/lib/content/portfolio.ts`.

## Credits

This project started as a fork of [vatsalsinghkv's portfolio](https://vatsalsinghkv.vercel.app) and has since been redesigned and rewritten. Icons come from [Simple Icons](https://simpleicons.org) (CC0) and [Devicon](https://devicon.dev) (MIT). Fonts are licensed under the SIL Open Font License.

## License

Released under the [MIT License](LICENSE).
