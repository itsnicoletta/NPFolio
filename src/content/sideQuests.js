function sideQuestFiles(slug, files) {
  return files.map((file) => ({
    label: file.replace(/\.pdf$/i, ''),
    url: `${import.meta.env.BASE_URL}side-quests/${slug}/${encodeURIComponent(file)}`,
  }))
}

export const sideQuests = [
  {
    title: 'NPF DeckOS / BiteDJ',
    slug: 'npf-deckos-bitedj',
    year: '2026',
    type: 'Hardware / UI / Raspberry Pi / DJ Tech',
    summary: 'Custom DJ hardware + interface',
    description:
      'I am currently building a custom hardware companion for my DJ controller: a Raspberry Pi-based system with its own display and interface, designed to extend the functionality of my setup beyond what the controller provides out of the box.',
    items: [
      'hardware prototyping',
      'interface design',
      'software development',
      'deck information',
      'BPM display',
      'future multi-deck setup',
    ],
    why:
      'It started as a personal tool for my DDJ-FLX4, but I am designing it with enough flexibility to evolve with a larger DJ setup later.',
    images: [],
  },
  {
    title: 'Shelter Calendar',
    slug: 'shelter-calendar',
    year: 'Since 2021',
    type: 'Editorial Design / Photography / Volunteering',
    summary: 'Editorial design & volunteering since 2021',
    description:
      'Since 2021, I have been designing an annual calendar for a local cat shelter as a volunteer project. Each edition combines photography, layout and editorial design to turn the shelter cats and stories into a cohesive printed piece that supports the organisation communication and fundraising activities.',
    items: [
      'editorial design',
      'layout',
      'photo selection',
      'image editing',
      'typography',
      'print preparation',
      'visual consistency across yearly editions',
    ],
    why:
      'It is a small project, but one I have kept returning to for years. It sits somewhere between design practice, volunteering and a personal commitment to using visual communication for something useful.',
    images: [],
    pdfs: sideQuestFiles('shelter-calendar', [
      'Calendario da parete 2024 con rifili - Copia.pdf',
      'calendario gattile 2025 piccolo da tavolo.pdf',
      'Calendario gattile 2026 da parete compresso.pdf',
    ]),
  },
  {
    title: 'Music Production',
    slug: 'music-production',
    year: 'Ongoing',
    type: 'Ableton Live / Progressive House / Sound Design',
    summary: 'Progressive house & sound experiments',
    description:
      'I produce progressive house and electronic music in Ableton Live, experimenting with arrangement, layering, synthesis and mixing.',
    items: ['arrangement', 'layering', 'synthesis', 'mixing', 'sound experiments'],
    why:
      'Music production gives me another way to think about rhythm, atmosphere, progression and emotional structure outside visual design.',
    images: [],
  },
  {
    title: 'NPF DJ',
    slug: 'npf-dj',
    year: 'Ongoing',
    type: 'DJing / Music Selection / Performance',
    summary: 'DJ sets & music selection',
    description:
      'A personal DJ project focused mainly on progressive house, built around music selection, harmonic mixing and live performance.',
    items: ['music selection', 'harmonic mixing', 'live performance', 'set building'],
    why:
      'It is a more performative side of my creative work, where selection, pacing and atmosphere matter as much as execution.',
    images: [],
  },
  {
    title: 'Creative Coding',
    slug: 'creative-coding',
    year: 'Ongoing',
    type: 'Vue / JavaScript / Generative Visuals',
    summary: 'ASCII, interfaces & browser experiments',
    description:
      'Small digital experiments built to explore interaction, typography and code, from ASCII animations to playful interface ideas and browser-based visuals.',
    items: ['ASCII animations', 'playful interfaces', 'Vue experiments', 'browser-based visuals'],
    why:
      'These experiments let me test strange ideas quickly and keep a more playful relationship with code.',
    images: [],
  },
  {
    title: '3D Experiments',
    slug: '3d-experiments',
    year: 'Ongoing',
    type: 'Blender / Spline / Digital Art',
    summary: 'Blender, Spline & digital environments',
    description:
      'Experiments with 3D environments, objects and interactive visuals, usually created as a way to explore ideas outside conventional interface design.',
    items: ['3D environments', 'objects', 'interactive visuals', 'digital art studies'],
    why:
      '3D gives me another space to explore atmosphere, materiality and digital worlds beyond flat interface design.',
    images: [],
  },
]
