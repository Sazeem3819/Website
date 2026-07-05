# TSSCO — Cinematic Scroll Website

Marketing website for **TSSCO** (Saudi Arabia) — LED Displays · AV Solutions · Command & Control.
Dark, editorial, scroll-driven single page with full-bleed video sections.

## Stack

- [Vite](https://vitejs.dev) + React 18
- [GSAP](https://gsap.com) + ScrollTrigger — scroll-linked reveals, parallax, aperture transitions
- [Lenis](https://lenis.darkroom.engineering) — smooth inertial scrolling
- Space Grotesk / Inter via Google Fonts

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/components/Hero.jsx` | Full-viewport cinematic intro (immersive-room video) |
| `src/components/Manifesto.jsx` | Scroll-scrubbed editorial statement |
| `src/components/Solutions.jsx` | Four solution pillars, each a full-viewport video panel |
| `src/components/Clients.jsx` | "Trusted by" logo marquee (placeholder wordmarks) |
| `src/components/Contact.jsx` | CTA section |
| `src/components/LazyVideo.jsx` | Lazy-loading, autoplay-safe background video |
| `src/data/solutions.js` | Section copy + client list |
| `public/videos/` | Seedance 2.0 generated clips (1080p, 16:9, 8 s, silent) |
| `public/posters/` | Poster frames used before video loads / as fallback |

## Media

The three background clips were generated with **Seedance 2.0** (std mode, 1080p, 16:9,
~8 s, no audio) via the Higgsfield MCP:

1. `control-room.mp4` — control room transitioning into a server room
2. `showroom-led.mp4` — LED screens in showroom / exhibition environments
3. `immersive-museum.mp4` — immersive LED room for museums

Videos lazy-load near the viewport, autoplay muted/looped/inline, pause off-screen,
and fall back to poster frames where autoplay is unavailable. Animations respect
`prefers-reduced-motion`.

## Placeholders to replace

- Client logos are styled wordmarks — swap in real logo assets in `Clients.jsx`.
- Contact phone number in `Contact.jsx`.
