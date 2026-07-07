import { asset } from './solutions.js'

// "What we do" — delivery disciplines followed by solution practices,
// LED and Command & Control included as first-class services.
export const SERVICES = [
  {
    id: 'design-consulting',
    index: '01',
    group: 'How we deliver',
    title: 'Design & Consulting',
    summary:
      'Technology master-planning, experience design and engineering documentation — we define the vision with you before a single screen is ordered.',
    bullets: [
      'Feasibility studies & technology master plans',
      'Experience & content strategy',
      'Detailed engineering design and tender documentation',
      'Budgeting, value engineering & vendor-neutral advice',
    ],
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'systems-integration',
    index: '02',
    group: 'How we deliver',
    title: 'Build & Systems Integration',
    summary:
      'From staging and rack fabrication to on-site installation, commissioning and calibration — one accountable team delivering to spec, on schedule.',
    bullets: [
      'Project management & site coordination',
      'Fabrication, staging and pre-commissioning',
      'Installation, integration & programming',
      'Testing, calibration and handover',
    ],
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'managed-services',
    index: '03',
    group: 'How we deliver',
    title: 'Managed Services & Support',
    summary:
      'Preventive maintenance, remote monitoring and rapid-response support that keep mission-critical systems running around the clock.',
    bullets: [
      '24/7 support & SLA-backed response',
      'Preventive maintenance programmes',
      'Remote monitoring & fleet management',
      'Spares, training and lifecycle planning',
    ],
    poster: asset('posters/immersive-museum.jpg'),
  },
  {
    id: 'led-displays',
    index: '04',
    group: 'What we deliver',
    title: 'LED Display Solutions',
    summary:
      'Ultra-fine-pitch video walls, architectural media façades and outdoor spectaculars — engineered and calibrated for flawless brightness, colour and longevity.',
    bullets: [
      'Indoor fine-pitch & rental-grade LED',
      'Outdoor spectaculars and media façades',
      'Curved, corner and bespoke-form factors',
      'Content playback & CMS integration',
    ],
    video: asset('videos/led-lobby.mp4'),
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'command-control',
    index: '05',
    group: 'What we deliver',
    title: 'Command & Control Centers',
    summary:
      '24/7 mission-critical environments built on redundant video walls, KVM and content management — where operators see everything and never go dark.',
    bullets: [
      'Video walls & operator console design',
      'KVM, signal routing and redundancy',
      'Control-room content management',
      'NOC, SOC, EOC and traffic-management rooms',
    ],
    video: asset('videos/control-room.mp4'),
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'av-solutions',
    index: '06',
    group: 'What we deliver',
    title: 'AV Solutions',
    summary:
      'End-to-end audio-visual integration for corporate, hospitality, retail and public venues — signal, sound, control and rooms that just work.',
    bullets: [
      'Boardrooms, auditoria & divisible spaces',
      'Digital signage networks',
      'Professional audio & acoustics',
      'Unified room control & scheduling',
    ],
    video: asset('videos/showroom-led.mp4'),
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'immersive-experiences',
    index: '07',
    group: 'What we deliver',
    title: 'Immersive Experiences',
    summary:
      'Floor-to-ceiling immersive LED environments for museums, visitor centres and brand experiences — spaces where stories become places.',
    bullets: [
      'Immersive LED rooms & tunnels',
      'Projection mapping & blended domes',
      'Interactive & sensor-driven experiences',
      'Show control & content pipelines',
    ],
    video: asset('videos/immersive-museum.mp4'),
    poster: asset('posters/immersive-museum.jpg'),
  },
]

export const INDUSTRIES = [
  {
    id: 'government',
    title: 'Government & Public Sector',
    blurb: 'Command centers, situation rooms and secure AV for ministries and agencies.',
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'corporate',
    title: 'Corporate & Enterprise',
    blurb: 'Executive briefing centers, lobbies, boardrooms and workplace AV at scale.',
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'museums',
    title: 'Museums & Culture',
    blurb: 'Immersive galleries and storytelling environments for cultural destinations.',
    poster: asset('posters/immersive-museum.jpg'),
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Hospitality',
    blurb: 'Sales centers, hotel experiences and architectural media that sell the vision.',
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'retail',
    title: 'Retail & Exhibitions',
    blurb: 'Flagship retail media, showrooms and exhibition stands that stop traffic.',
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'energy',
    title: 'Energy & Industry',
    blurb: 'Operations centers and plant-floor visualisation for critical infrastructure.',
    poster: asset('posters/control-room.jpg'),
  },
]

export const PROJECTS = [
  {
    id: 'p1',
    sector: 'Government',
    title: 'National operations center',
    blurb: 'A 24/7 command environment with a 28-metre fine-pitch LED wall and 40 operator positions.',
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'p2',
    sector: 'Real Estate',
    title: 'Developer sales gallery',
    blurb: 'Curved LED and interactive models bringing a masterplan to life for international buyers.',
    poster: asset('posters/led-lobby.jpg'),
  },
  {
    id: 'p3',
    sector: 'Culture',
    title: 'Immersive museum gallery',
    blurb: 'A 360° LED room with floor projection telling the story of the Kingdom to 2,000 visitors a day.',
    poster: asset('posters/immersive-museum.jpg'),
  },
  {
    id: 'p4',
    sector: 'Corporate',
    title: 'Headquarters experience',
    blurb: 'Lobby media wall, briefing center and 60 meeting rooms unified under one control platform.',
    poster: asset('posters/showroom-led.jpg'),
  },
  {
    id: 'p5',
    sector: 'Banking',
    title: 'Trading floor & signage network',
    blurb: 'Real-time market visualisation and enterprise signage across a regional headquarters.',
    poster: asset('posters/control-room.jpg'),
  },
  {
    id: 'p6',
    sector: 'Exhibitions',
    title: 'Giga-project pavilion',
    blurb: 'A touring exhibition with modular LED architecture and show-controlled storytelling.',
    poster: asset('posters/led-lobby.jpg'),
  },
]

export const INSIGHTS = [
  {
    id: 'i1',
    tag: 'LED',
    title: 'Choosing the right pixel pitch: a practical guide',
    blurb: 'Viewing distance, content and budget — how to specify LED that looks right on day one and year five.',
  },
  {
    id: 'i2',
    tag: 'Control Rooms',
    title: 'Designing control rooms operators can live in',
    blurb: 'Ergonomics, sightlines and redundancy: the fundamentals of 24/7 mission-critical design.',
  },
  {
    id: 'i3',
    tag: 'Immersive',
    title: 'Why museums in the Kingdom are going immersive',
    blurb: 'From artefacts to atmospheres — what Vision 2030 cultural projects teach us about experience design.',
  },
  {
    id: 'i4',
    tag: 'AV Strategy',
    title: 'The real cost of AV downtime',
    blurb: 'What an unmanaged meeting-room estate costs an enterprise, and how managed services change the math.',
  },
]
