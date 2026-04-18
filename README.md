# Danylo Zahorulko

Personal site. Dark, cinematic, single-scroll.

## Stack

- React 18 (Create React App)
- Inter + JetBrains Mono (Google Fonts)
- No CSS framework — global styles in `src/styles/global.css` + inline styles

## Layout

```
public/            static assets
src/
  index.js         entry point
  App.jsx          mounts the cinematic stack + binds keyboard shortcuts
  data.js          all content
  lib/             pure helpers
  hooks/           scroll + smoothing
  components/
    marks/         animated brand marks
    cinema/        slides, runway, corner chrome, rail
  styles/global.css
```

## Commands

```bash
npm install
npm start          # dev server on :3000
npm run build      # production build → /build
npm run deploy     # gh-pages deploy (uses `homepage` from package.json)
```

## Shortcuts

- `E` — open mail composer to contact email
- `Shift + ↑` — smooth scroll back to the top
