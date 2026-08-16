# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Judeson Brian Rodriguez (zvdas) — a single-page Angular 13 application that doubles as both a CV/About page and a project showcase. Built to be deployed to GitHub Pages under a custom domain.

## Commands

All commands are run from the repo root (`/home/jude/repos/zvdas.github.io`).

- `npm start` — runs `ng serve`, dev server at `http://localhost:4200/` with hot reload.
- `npm run build` — production build. Output goes to `docs/` (not the default `dist/`) because the project is configured to publish via GitHub Pages from the `docs/` folder.
- `npm run watch` — dev build in watch mode.
- `npm test` — Karma + Jasmine unit tests. Launches Chrome via `karma-chrome-launcher`; tests run headlessly against the configured browser target.
- `npm run deploy` — one-shot deploy: `ng build && git add . && git commit -m 'deployed changes' && git push`. The `docs/` output is committed and pushed to the deployed branch.

### Running a single test

Karma doesn't have a friendly single-file CLI in this version, but you can focus Jasmine on one spec by name (fDescribe / fIt patterns) or by temporarily narrowing `src/test.ts`. There are currently no `.spec.ts` files in the source tree — tests are scaffolded but unused.

## Architecture

### Module structure

Two feature modules under `src/app/`, both imported into `AppModule` (declared in `src/app/app.module.ts`):

- **`MainModule`** (`src/app/main/`) — the chrome and page-level components: `NavbarComponent`, `HomeComponent`, `AboutComponent` (binds to `/home`), `TemplateComponent` (the dynamic project detail page), `MessagesComponent`, `ErrorComponent`. Both `NavbarComponent` and `TemplateComponent` are **re-exported** by `MainModule` so `TechnologiesModule` can consume them. **`HomeComponent` is dead code** — it's declared but has no route and no template references it anywhere; `'' ` redirects straight to `/home` → `AboutComponent`.
- **`TechnologiesModule`** (`src/app/technologies/`) — project-detail components grouped by tech: `angular/` (3 projects: `OnlineTestAppComponent`, `BlogAppComponent`, `ThreedAppComponent`), `react/` (2: `EventFinderAppComponent`, `PokemonSearchAppComponent`), `nodejs/` (2: `LmsAppComponent`, `OmsAppComponent`). **These are declared but never routed to** — see the comment in `app-routing.module.ts`. The router now drives everything through `TemplateComponent` instead, so these components are dead code from the routing perspective and are only re-declared for any future per-project deep links. There's also `nodejs/online-music-library-app/`, which has only an `.html` file (no `.ts`/`.css`) and isn't declared in `technologies.module.ts` at all — an in-progress scaffold, not part of the seven finished components above.

### Routing

`src/app/app-routing.module.ts` uses the **hash strategy** (`useHash: true`) — links in the navbar use `#/home`, `#/details/:id/:code` form. Routes: `home → AboutComponent`, `details/:id/:code → TemplateComponent`, `messages → MessagesComponent`, `'' → redirectTo '/home'`, `** → ErrorComponent`. The dynamic route `details/:id/:code` resolves a project by numeric index plus a short code (e.g. `ota`, `fba`, `tma`, `efa`, `psa`, `lms`, `oms`) and renders `TemplateComponent` for the matching entry.

### Project data flow

Project metadata is stored as a static JSON file at `src/assets/files/project.json`, imported directly into `ProjectService` (`src/app/services/project.service.ts`) via TypeScript's `resolveJsonModule`. The service exposes:

- `getAllProjects()` / `getProjectByIndex(index)` — synchronous access to the JSON array.
- `getScreenshots(index)` — synthesizes raw.githubusercontent.com URLs from the project's `screenshots_app` and `screenshots_branch` fields and a `screenshots_count` number array. Screenshots are **fetched at view time from GitHub, not bundled**.
- `getProblem(index)` / `getWriteup(index)` — HTTP-fetches the project's `problem_link` and `procedure_link` as text. These come from the JSON and can be either local `assets/files/*.html` or external.
- `getIntroduction()` — loads `assets/files/introduction.html` for the home page.

`TemplateComponent` subscribes to its own route params, calls these service methods, then injects the project source code into a same-origin `<iframe>` via `document.write` (`setIframe()`) so the gist-style code preview runs without a build step.

### Theme

`AboutComponent` swaps CSS custom properties on `document.documentElement` between a light and dark palette (variables: `--mainTextColor-dark`, `--secondaryTextColor-dark`, `--mainLinkColor-dark`, `--mainBorderColor-dark`, `--mainBgColor-dark`). The styling is light/dark by toggling these variables rather than a `prefers-color-scheme` media query.

### Resume generation

`src/assets/files/pdf-resume.ts` and `pdf-resume-styled.ts` define pdfmake document definitions that generate a PDF resume client-side in the browser. Currently only `PdfResumeStyled()` is called from `AboutComponent.generatePdf()`; the static PDF at `src/assets/files/Resume Judeson Rodriguez Full Stack Developer.pdf` is the one linked from the about page. There's also a `pdf-resume-2026.ts` exporting `PdfResume2026()` that isn't wired up anywhere yet — treat it as staged/in-progress, not dead code to delete.

## Important conventions

- **Build output is `docs/`**, not `dist/`. This is intentional (see `angular.json` → `architect.build.options.outputPath`) — the deployed GitHub Pages branch serves the `docs/` folder. Do not change this without also updating the Pages publishing config.
- **Source code for the project previews lives inside the JSON** as `code` strings and is written into iframes; it is not executed through a build pipeline.
- **Hash-based routing only** — when adding links anywhere in the app, use `#/path` form, not `/path`.
- **No `.spec.ts` files exist yet** despite the Karma + Jasmine setup. If you add tests, follow the `*.component.spec.ts` naming Angular CLI generates and add them to the existing `src/test.ts` entry point.
- **Tech stack on the about page is hardcoded** in `AboutComponent.techStack` and `yearsSpent` is computed as `new Date().getFullYear() - 2023`. Update both if the resume content changes materially.

## Reference files

- `angular.json` — workspace + project + build/serve/test config; the only project is named `portfolio`.
- `package.json` — npm scripts; Angular 13.2.x, Bootstrap 5.1.x, pdfmake 0.2.x, ngx-socket-io and socket.io are listed as dependencies but only the static, no-realtime portions are currently used.
- `tsconfig.json` — strict TypeScript with `strictTemplates`, `noPropertyAccessFromIndexSignature`, and `noImplicitOverride` enabled.
- `karma.conf.js` — Karma test config; Chrome is the only browser, `autoWatch: true` so `ng test` keeps running.
