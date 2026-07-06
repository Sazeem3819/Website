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
- `data-video` *(optional)* — local MP4 path, tried first. The video lazy-loads
  near the viewport, autoplays muted/looped/inline, fades in over the poster
  when it actually plays, and pauses off-screen.
- `data-video-remote` *(optional)* — CDN copy of the same clip, used
  automatically when the local file is absent. If both fail (or autoplay is
  blocked) the poster simply remains.

### Video assets (generated ✓)

The three clips were generated with **Seedance 2.0** on Higgsfield (std mode,
1080p, 16:9, no audio, 8 s) and are currently streamed from the Higgsfield CDN
via `data-video-remote`:

| Local path (preferred when present) | Clip |
| --- | --- |
| `assets/videos/control-room-server-room.mp4` | Control room with giant LED wall → server room with racks and controllers |
| `assets/videos/showroom-exhibition-led.mp4` | LED screens in modern showroom / exhibition environments |
| `assets/videos/immersive-museum-room.mp4` | Immersive LED room designed for museums |

### Localizing all assets (recommended before production)

Posters and videos are hot-linked because this build environment's egress
policy blocked downloading them. From any normal machine:

```sh
./scripts/localize-assets.sh
```

That downloads the four stills into `assets/posters/` (rewriting `index.html`
to the local copies) and the three MP4s into `assets/videos/`, which the site
then prefers automatically — no code changes needed.

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
