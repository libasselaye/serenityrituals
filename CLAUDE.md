# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SerenityRituals is a single-page French-language landing site for an energy healing practice. It runs entirely in-browser with no build step — React 18 and Babel are loaded from CDN, and JSX files are compiled client-side by Babel Standalone.

## How to Run

Open `SerenityRituals.html` directly in a browser, or serve the directory with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

No install, no build, no CLI commands.

## Architecture

The entry point is `SerenityRituals.html`. It loads the following JSX files in order via `<script type="text/babel">` tags:

| File | Exports |
|---|---|
| `tweaks-panel.jsx` | `useTweaks`, `TweaksPanel`, and all `Tweak*` controls |
| `sr-header.jsx` | `Header`, `CALENDLY_URL` |
| `sr-sections1.jsx` | `Hero`, `TuSens`, `About`, `Services`, `ForWho` |
| `sr-sections2.jsx` | `Process`, `Benefits`, `Testimonials`, `FAQ`, `Footer` |
| `sr-contact.jsx` | `Contact` |

All components are exported to `window` via `Object.assign(window, {...})` so they are accessible to the inline `<App/>` script at the bottom of the HTML file.

## Theming System

`TWEAK_DEFAULTS` in the HTML file controls the two live design tokens — `blue` and `gold` — plus a `roundness` slider. These are passed as a `colors` prop (`{ blue, gold }`) to every section component. Do not hardcode color values; always read from `colors?.blue` / `colors?.gold` with a fallback.

The `TweaksPanel` activates when the host sends a `__activate_edit_mode` postMessage (used by the Claude.ai canvas toolbar). Changes are persisted by posting `__edit_mode_set_keys` back to the parent, which rewrites the `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` block in the HTML on disk.

## Conventions

- Typography: `'Cormorant Garamond', serif` for headings, `'DM Sans', sans-serif` for body/UI.
- Layout cap: `maxWidth: 1200, margin: "0 auto"` on all section wrappers.
- Scroll animations: use the shared `RevealBox` / `useReveal` hook (defined in `sr-sections1.jsx`).
- Responsive: CSS class hooks (`hero-grid`, `two-col-grid`, `desktop-nav`, etc.) are targeted by global media queries in the HTML `<style>` block — add new classes there rather than inline `@media`.
- CTA links: booking goes to `CALENDLY_URL` (defined in `sr-header.jsx`, shared via `window`).
- All user-visible copy is in French.
