import { asset } from './solutions.js'

// Structure + media only — all copy lives in src/i18n/{en,ar}.js under
// `servicesPage.items` / `industriesPage.items` / `insightsPage.items`.
export const SERVICES = [
  { id: 'design-consulting', index: '01', group: 'deliver', poster: asset('posters/showroom-led.jpg') },
  { id: 'systems-integration', index: '02', group: 'deliver', poster: asset('posters/control-room.jpg') },
  { id: 'managed-services', index: '03', group: 'deliver', poster: asset('posters/immersive-museum.jpg') },
  {
    id: 'led-displays',
    index: '04',
    group: 'solutions',
    video: asset('videos/led-lobby.mp4'),
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'command-control',
    index: '05',
    group: 'solutions',
    video: asset('videos/control-room.mp4'),
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'av-solutions',
    index: '06',
    group: 'solutions',
    video: asset('videos/showroom-led.mp4'),
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'immersive-experiences',
    index: '07',
    group: 'solutions',
    video: asset('videos/immersive-museum.mp4'),
    poster: asset('posters/immersive-museum.jpg'),
  },
]

export const INDUSTRIES = [
  { id: 'government', poster: asset('posters/control-room.jpg') },
  { id: 'corporate', poster: asset('posters/led-lobby.jpg') },
  { id: 'museums', poster: asset('posters/immersive-museum.jpg') },
  { id: 'real-estate', poster: asset('posters/showroom-led.jpg') },
  { id: 'retail', poster: asset('posters/showroom-led.jpg') },
  { id: 'energy', poster: asset('posters/control-room.jpg') },
]

export const INSIGHT_IDS = ['i1', 'i2', 'i3', 'i4']
