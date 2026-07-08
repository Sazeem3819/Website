// Resolve public/ assets against the configured base so subpath hosting
// (e.g. GitHub Pages) works.
export const asset = (path) => import.meta.env.BASE_URL + path

export const SOLUTIONS = [
  {
    id: 'led-displays',
    href: '/services#led-displays',
    index: '01',
    title: 'LED Displays',
    kicker: 'Direct-view LED, indoor & outdoor',
    description:
      'Ultra-fine-pitch video walls, architectural media façades and outdoor spectaculars — engineered, calibrated and installed for flawless brightness, colour and longevity in every environment.',
    video: asset('videos/led-lobby.mp4'),
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'av-solutions',
    href: '/services#av-solutions',
    index: '02',
    title: 'AV Solutions',
    kicker: 'Design, integration & support',
    description:
      'End-to-end audio-visual integration for corporate, hospitality, retail and public venues — from signal architecture and acoustics to room control, all delivered as one seamless system.',
    video: asset('videos/showroom-led.mp4'),
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'control-rooms',
    href: '/services#command-control',
    index: '03',
    title: 'Control Room Solutions',
    kicker: 'Mission-critical command & control',
    description:
      '24/7 command-and-control environments built on redundant video walls, KVM and content management — where operators see everything, react instantly and never go dark.',
    video: asset('videos/control-room.mp4'),
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'immersive-rooms',
    href: '/services#immersive-experiences',
    index: '04',
    title: 'Immersive Rooms',
    kicker: 'Experiential & cultural spaces',
    description:
      'Floor-to-ceiling immersive LED environments for museums, visitor centres and brand experiences — spaces where content surrounds the audience and stories become places.',
    video: asset('videos/immersive-museum.mp4'),
    poster: asset('posters/immersive-museum.jpg'),
  },
]

export const CLIENTS = [
  'ARAMCO',
  'SABB',
  'SNB',
  'SABIC',
  'Saudi Electricity Company',
  'Dr. Soliman Fakeeh Hospital',
  'Saudi German Hospital',
  'MOI',
  'DAR Global',
  'Saudi Bonyan',
  'stc',
  'Ministry of Health',
  'King Faisal Specialist Hospital',
]
