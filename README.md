# TSSCO — Cinematic Website

Marketing website for **TSSCO** (Saudi Arabia) — LED Displays · AV Solutions · Command & Control.
Dark, editorial, scroll-driven multi-page site with full-bleed video sections, structured
after premium AV-integrator sites (Electrosonic-style architecture, original content and media).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — cinematic scroll narrative |
| `/services` | What We Do — Design & Consulting, Build & Integration, Managed Services, LED Displays, Command & Control, AV, Immersive |
| `/industries` | Industries — Government, Corporate, Museums, Real Estate, Retail, Energy |
| `/work` | Our Work — representative projects (placeholders) |
| `/insights` | Insights — article placeholders |
| `/about` | About — story, values, stats, clients |
| `/contact` | Contact — enquiry form (mailto) + details |

## Stack

- [Vite](https://vitejs.dev) + React 18 + React Router
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

Background clips generated with **Seedance 2.0** (std mode, 1080p, 16:9, ~8 s,
no audio) via the Higgsfield MCP. The lobby, control-room and museum clips are
image-to-video generations from client-approved reference stills:

1. `led-lobby.mp4` — curved LED wall in a dark marble corporate lobby (LED Displays)
2. `showroom-led.mp4` — LED screens in showroom / exhibition environments (AV Solutions)
3. `control-room.mp4` — mission-critical control room video wall (Control Rooms)
4. `immersive-museum.mp4` — immersive LED museum room (hero + Immersive Rooms)

Videos lazy-load near the viewport, autoplay muted/looped/inline, pause off-screen,
and fall back to poster frames where autoplay is unavailable. Animations respect
`prefers-reduced-motion`.

## Placeholders to replace

- Client logos are styled wordmarks — swap in real logo assets in `Clients.jsx`.
- Contact phone number in `Contact.jsx`.
