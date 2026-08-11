# Art by SHA — React conversion

Your original `Art_by_SHA_with_my_artwork.html` has been split into components that drop
straight into the `my-react-app` project shown in your VS Code screenshot.

## Where each file goes

Copy into your existing `my-react-app`:

```
src/App.tsx              → replaces src/App.tsx
src/App.css              → replaces src/App.css
src/data/artworks.ts     → new file
src/components/*.tsx     → new folder/files
index.html               → merge the <head> (fonts + favicon + title) into your existing index.html
```

Your `main.tsx` doesn't need to change — it already renders `<App />`.

## Images

The original site expected files at `images/art1.jpg` ... `images/art7.jpg`. In Vite,
static files go in the `public/` folder and are referenced from the site root:

1. Create `public/images/` in your project (next to `public/vite.svg`).
2. Drop your artwork photos in there, named `art1.jpg` through `art7.jpg`
   (or edit the paths in `src/data/artworks.ts` to match your own filenames).

They're referenced as `/images/art1.jpg` (leading slash, no `public` in the path) —
already set up that way in `Hero.tsx` and `data/artworks.ts`.

## What changed from the static HTML

- **Scroll reveal, mobile nav, lightbox, and the mailto contact form** — all converted
  from vanilla JS/DOM code into React state + hooks (`useState`, `useEffect`, refs).
  Behavior is identical to the original.
- **Reveal.tsx** is a small reusable wrapper that replaces the old `IntersectionObserver`
  script — anything wrapped in `<Reveal>` fades/slides in on scroll, same as before.
- **Gallery images are now data-driven** (`src/data/artworks.ts`) instead of 7 near-identical
  blocks of HTML — add or remove artworks by editing that one array.
- Fixed two small leftover placeholder bugs from the original file: the favicon had a
  broken URL (`http://wsvgww.w3.org...`) and showed "NV" instead of "SHA", and the footer's
  JS was setting the copyright name to "Nora Voss" instead of "Art by SHA". Both now say
  "SHA" consistently.
- All CSS is unchanged — just moved from the `<style>` tag into `App.css`.

## Run it

```
npm install
npm run dev
```
