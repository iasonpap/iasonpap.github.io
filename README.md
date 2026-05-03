# iasonpap.github.io

Personal portfolio site. React + Vite, deployed to GitHub Pages via Actions.
Site is located at https://iasonpap.github.io/.

## Dev

```bash
npm install
npm run dev
```

`predev` hook auto-generates `src/data/cv-manifest.json` from PDFs in `src/assets/CVs/`.

## Build & deploy

```bash
npm run build   # generates manifest then builds to dist/
```

CI deploys automatically on push to `main` via `.github/workflows/deploy-pages.yml`.
The `gh-pages` npm script in `package.json` is a leftover — use CI instead.

## Adding a CV

1. Name the PDF: `YYYY-MM-Iasonas_CV_<language>.pdf`  
   Example: `2026-01-Iasonas_CV_english.pdf`
2. Drop it in `src/assets/CVs/`
3. Run `npm run dev` (or `build`) — manifest regenerates automatically

Supported languages: `english`, `greek` (defined in `scripts/generate-cv-manifest.mjs`).

The script picks the **most recent file** (by `YYYY-MM` prefix) as the current CV per language.
All files for a language appear in the archive section, including the current one.

## Adding a project

Edit `src/pages/Projects.jsx` — `projectItems` array at the top.

## Structure

```
src/
  assets/CVs/        # PDF files (tracked in git)
  data/
    cv-manifest.json # AUTO-GENERATED — do not edit by hand
  pages/
    About.jsx
    CV.jsx
    Projects.jsx
  App.jsx            # shell + routing
  App.css            # component styles
  index.css          # global tokens + body styles
scripts/
  generate-cv-manifest.mjs  # scans CVs dir, writes manifest
```
