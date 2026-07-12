// Resolve public/ assets against the configured base so subpath hosting
// (e.g. GitHub Pages) works.
export const asset = (path) => import.meta.env.BASE_URL + path

// Structure + media only — all copy lives in src/i18n/{en,ar}.js under `solutions`.
export const SOLUTIONS = [
  {
    id: 'led-displays',
    href: '/services#led-displays',
    index: '01',
    video: asset('videos/led-lobby.mp4'),
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'av-solutions',
    href: '/services#av-solutions',
    index: '02',
    video: asset('videos/showroom-led.mp4'),
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'control-rooms',
    href: '/services#command-control',
    index: '03',
    video: asset('videos/control-room.mp4'),
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'immersive-rooms',
    href: '/services#immersive-experiences',
    index: '04',
    video: asset('videos/immersive-museum.mp4'),
    poster: asset('posters/immersive-museum.jpg'),
  },
]
