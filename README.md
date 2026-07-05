# TSSCO — Cinematic Scroll Website

A dark, editorial, scroll-driven marketing site for **TSSCO** — LED displays, AV
solutions, control rooms and immersive environments, engineered in Saudi Arabia.
Design direction inspired by electrosonic.com: full-bleed media panels, smooth
scroll, restrained typography, gold-on-charcoal palette.

## Stack

- **Static site** — no build step. Open `index.html` or serve the folder with any
  static host (GitHub Pages, Netlify, nginx…).
- **GSAP 3 + ScrollTrigger** (vendored in `assets/vendor/`) — scroll choreography:
  masked line reveals, panel deck transitions, parallax, manifesto word scrub.
- **Lenis** (vendored) — smooth, inertial scrolling synced to ScrollTrigger.
- **Space Grotesk + Inter** — self-hosted woff2 in `assets/fonts/`.

Run locally:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Section map

| Section | Behaviour |
| --- | --- |
| Hero | Full-viewport media, masked headline reveal, parallax exit |
| Manifesto | Editorial statement, words light up as you scrub |
| Solutions | Four full-viewport sticky panels (LED, AV, Control Rooms, Immersive) — each covers the last while the outgoing panel recedes and dims |
| Clients | Dual counter-scrolling wordmark marquee (ARAMCO, DAR Global, MOI, SABB, Saudi Bonyan) |
| Contact | Oversized CTA with email actions |

Reduced-motion users get a fully readable, animation-free experience.

## Media assets

Every media slot is a `[data-media]` frame in `index.html` with:

- `data-poster` — cinematic still (currently generated with Nano Banana Pro on
  Higgsfield, hot-linked from the Higgsfield CDN). Posters get a slow Ken Burns
  drift so the panels feel alive even without video.
- `data-video` *(optional)* — local MP4 path. The video lazy-loads near the
  viewport, autoplays muted/looped/inline, fades in over the poster when it
  actually plays, and silently falls back to the poster if the file is missing
  or autoplay is blocked. Videos pause off-screen.

### Localizing the posters (recommended before production)

The posters are hot-linked because this build environment's egress policy blocked
downloading them. From any normal machine:

```sh
./scripts/localize-assets.sh
```

That downloads the four stills into `assets/posters/` and rewrites `index.html`
to reference the local copies.

### Generating the three videos (pending — needs credits)

The brief calls for three Seedance 2.0 clips (std mode, 1080p, 16:9, no audio,
~8 s). At the time of this build the Higgsfield account had **10 credits** and
each clip at that spec costs **72 credits (216 total)** — so generation is
blocked until the account is topped up. Once credits are available, generate
with Seedance 2.0 (`std`, `1080p`, `16:9`, `generate_audio: false`, `duration: 8`):

| Drop into | Prompt brief |
| --- | --- |
| `assets/videos/control-room-server-room.mp4` | Open on a control room with a giant LED video wall and operator consoles, then transition into a server room revealing racks and controllers |
| `assets/videos/showroom-exhibition-led.mp4` | LED screens displayed in modern showrooms and exhibition environments |
| `assets/videos/immersive-museum-room.mp4` | An LED immersive room designed for museums |

Drop the MP4s at those exact paths — the site picks them up automatically, no
code changes needed. (H.264, ~8 Mbps or lower recommended for web delivery.)

## Structure

```
index.html
assets/
  css/main.css        design system + all styling
  js/main.js          Lenis + GSAP choreography, media manager
  vendor/             gsap.min.js, ScrollTrigger.min.js, lenis.min.js
  fonts/              Space Grotesk + Inter (woff2)
  videos/             drop generated MP4s here (see above)
scripts/
  localize-assets.sh  pull remote posters into the repo
```
