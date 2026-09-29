const noImages = []

function makeProject(project) {
  return {
    client: project.client || project.title,
    tools: project.tools || [],
    liveUrl: '',
    links: [],
    images: noImages,
    ...project,
  }
}

export const projects = [
  makeProject({
    title: 'NoBoard',
    slug: 'noboard',
    featured: true,
    year: '2026',
    type: 'Product Design / UX/UI / Front-End Development / Desktop App',
    role: 'Product Designer / UX/UI Designer / Front-End Developer',
    tools: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Electron'],
    summary:
      'A local-first desktop task manager for freelancers, independent professionals and small studios managing multiple clients at the same time.',
    context:
      'Many productivity tools gradually become another system users have to maintain: accounts, subscriptions, cloud dashboards, notifications and complex workflows can create more friction than the work they organise.',
    responsibilities: [
      'Product thinking',
      'Information architecture',
      'UX/UI design',
      'Front-end implementation',
      'Local persistence',
      'Themes, language support and update handling',
    ],
    approach: [
      {
        title: 'Reducing product friction',
        text: 'The product deliberately avoids feature overload and prioritises the work that needs attention instead of exposing every possible feature at once.',
      },
      {
        title: 'Designing local-first',
        text: 'The core experience remains independent from accounts and cloud services, supporting a focused desktop workflow.',
      },
      {
        title: 'Designing with implementation',
        text: 'Reusable interface patterns were shaped together with the implementation instead of separating Figma and development into isolated stages.',
      },
    ],
    decisions: [
      {
        title: 'Why local-first?',
        text: 'Because the product needed to remain useful without subscriptions, cloud dependency or permanent internet connection.',
      },
      {
        title: 'Why a focused interface?',
        text: 'Because freelancers need to see clients, projects, deadlines, priorities and statuses quickly without managing another complicated system.',
      },
    ],
    outcome:
      'Windows-first application currently used as a private/testing project rather than a commercial public product.',
    contribution:
      'This project shows product thinking, information architecture, component thinking and the ability to take a digital product from an idea to a packaged desktop application.',
  }),
  makeProject({
    title: 'The Secret Garden',
    slug: 'the-secret-garden',
    featured: true,
    year: '2026',
    type: 'Product Design / UX/UI / Front-End Development / Desktop App',
    role: 'Product Designer / UX/UI Designer / Front-End Developer',
    tools: ['Vite', 'Vanilla JavaScript', 'HTML/CSS', 'Electron', 'localStorage'],
    summary:
      'A local-first emotional diary that turns a daily mood and private note into a flower.',
    context:
      'Instead of representing emotional tracking only through charts and numbers, the application creates a small visual garden that changes throughout the week.',
    responsibilities: [
      'Product concept',
      'Information architecture',
      'User flow',
      'UX/UI',
      'Visual system',
      'Microcopy',
      'Front-end implementation',
    ],
    approach: [
      {
        title: 'Designing emotional tracking visually',
        text: 'Each week contains seven pots, one for each day. A daily entry generates a plant or flower based on the selected mood.',
      },
      {
        title: 'Separating present and memory',
        text: 'Only the current week remains represented visually as flowers, while older entries move into the Secret Log as text.',
      },
      {
        title: 'Avoiding dashboard language',
        text: 'The interface uses an illustrated, hand-drawn fantasy direction instead of a conventional health or productivity dashboard.',
      },
    ],
    decisions: [
      {
        title: 'Why only one visual week?',
        text: 'Keeping every historical flower visible would eventually turn the interface into visual noise. The garden represents the present, while the diary preserves memory.',
      },
    ],
    outcome:
      'Complete local desktop application with garden, diary, stats, onboarding, settings, daily entries, local persistence and Windows releases.',
    contribution:
      'This project demonstrates product concept development, emotional UX, interaction design, visual storytelling and implementation.',
    links: [{ label: 'The Froggy Studio', url: 'https://thefroggystudio.com/' }],
  }),
  makeProject({
    title: 'Ramzen',
    slug: 'ramzen',
    featured: true,
    year: '2026',
    type: 'UX/UI / Web Design / Visual Direction / Fashion',
    role: 'UX/UI / Digital Designer',
    tools: ['Figma'],
    summary:
      'A fashion-focused digital design project translating an existing luxury identity into an appropriate digital experience.',
    context:
      'Ramzen is a Milan-based luxury fashion brand combining contemporary fashion with references to nostalgia, craftsmanship and an international luxury audience.',
    responsibilities: [
      'UX/UI',
      'Digital visual direction',
      'Fashion-oriented layout',
      'Editorial hierarchy',
      'Product presentation',
      'Responsive behaviour',
    ],
    approach: [
      {
        title: 'Supporting the product imagery',
        text: 'The interface direction emphasises editorial pacing, strong imagery, product hierarchy and restraint.',
      },
      {
        title: 'Balancing luxury and usability',
        text: 'The digital interface supports the photography and products without visually competing with them.',
      },
      {
        title: 'Avoiding generic ecommerce',
        text: 'The project translates a high-end visual language into a digital interface without reducing it to a standard commerce layout.',
      },
    ],
    decisions: [
      {
        title: 'Why restraint?',
        text: 'For a luxury fashion brand, the interface has to create space for the imagery, materiality and product hierarchy.',
      },
    ],
    outcome:
      'Digital direction for a fashion interface built around editorial rhythm, restraint and brand consistency.',
    contribution:
      'This project demonstrates the ability to work with an existing high-end visual language and translate it into a usable digital interface.',
    links: [{ label: 'Ramzen website', url: 'https://www.ramzen.com/' }],
  }),
  makeProject({
    title: 'Atlas Pro',
    slug: 'atlas-pro',
    featured: true,
    year: '2026',
    type: 'Digital Marketing / Social Media Strategy / Content Design / Campaigns',
    role: 'Digital Designer / Social Media Strategist',
    tools: ['Instagram', 'Meta tools', 'Content planning', 'Campaign reporting'],
    summary:
      'A result-driven communication and campaign project for a sports organisation focused on parkour, acrobatics and movement training.',
    context:
      'The collaboration focused on creating a clearer communication system around courses, events and sports camps, then testing how that content could scale through a small paid media component.',
    responsibilities: [
      'Social media analysis',
      'Communication strategy',
      'Content strategy',
      'Editorial planning',
      'Campaign planning',
      'Graphic design',
      'Captions and copywriting',
      'Reel planning and editing',
      'Instagram management',
      'Campaign reporting',
      'Paid campaign support',
      'Performance analysis',
    ],
    approach: [
      {
        title: 'Structuring recurring formats',
        text: 'Communication was organised around repeatable content formats and clearer conversion paths between Instagram, landing pages, forms and registrations.',
      },
      {
        title: 'Connecting content and conversion',
        text: 'The work linked sports camp communication, community growth and lead-generation flows instead of treating posts as isolated visuals.',
      },
      {
        title: 'Measuring the campaign',
        text: 'Campaign performance was tracked through reach, views, interactions, link clicks, calls generated and cost per result.',
      },
      {
        title: 'Testing paid scalability',
        text: 'A small Meta Ads test showed that the new communication direction could scale efficiently, reaching a broad audience and generating concrete contact actions.',
      },
    ],
    decisions: [
      {
        title: 'Why strategy before visuals?',
        text: 'The project needed a clearer communication system, not only individual graphics.',
      },
      {
        title: 'Why combine organic and paid?',
        text: 'Organic content helped identify the strongest formats, while a small paid test showed whether that attention could convert into clicks and calls.',
      },
    ],
    outcome:
      'Organic reporting showed stronger Reel performance, with July average likes almost quadrupling compared to June. A September 2026 Meta Ads test added 87,009 impressions, 70 clicks and 4 calls with a total investment of EUR 51.31. The awareness campaign reached 58,312 people with a EUR 0.40 CPM, while the lead campaign generated calls at about EUR 5.22 per result and EUR 0.34 per click.',
    metrics: [
      { value: '87,009', label: 'paid impressions' },
      { value: '58,312', label: 'awareness reach' },
      { value: '70', label: 'clicks' },
      { value: '4', label: 'calls generated' },
      { value: 'EUR 0.40', label: 'awareness CPM' },
      { value: 'EUR 5.22', label: 'cost per call' },
      { value: 'EUR 0.34', label: 'cost per click' },
      { value: '4x', label: 'July average likes vs June' },
    ],
    contribution:
      'This project shows that my work connects design with strategy, content planning, conversion paths and measurable campaign performance, turning communication into something that can be evaluated through visibility, engagement and lead-generation data.',
    links: [
      { label: 'Atlas Pro Instagram', url: 'https://www.instagram.com/atlasprosocials/' },
    ],
  }),
  makeProject({
    title: 'The Ring Experience',
    slug: 'the-ring-experience',
    featured: true,
    year: '2026',
    type: 'UX/UI / Web Design / Front-End Development / CMS',
    role: 'UX/UI Designer / Web Designer / Front-End Developer',
    tools: ['Vue 3', 'Vite', 'Sanity CMS', 'Figma', 'Cloudflare Pages'],
    summary:
      'A website for a jewellery workshop and tourism experience in Sri Lanka where visitors create their own ring using local gemstones.',
    context:
      'The website needed to communicate the emotional value of the experience and turn interest into actual bookings.',
    responsibilities: [
      'UX/UI',
      'Website structure',
      'Storytelling',
      'Responsive web design',
      'Front-end development',
      'Booking flow',
      'Content architecture',
      'Sanity CMS integration',
    ],
    approach: [
      {
        title: 'Selling an experience',
        text: 'The site gives space to storytelling, photography and the process of creating jewellery before pushing the booking action.',
      },
      {
        title: 'Making booking clear',
        text: 'The booking journey was designed to make the next action clear without making the site feel overly transactional.',
      },
      {
        title: 'Separating content and presentation',
        text: 'Sanity CMS allows the client to update content while the design system remains consistent.',
      },
    ],
    decisions: [
      {
        title: 'Why CMS?',
        text: 'The client needed to independently update text and imagery without modifying front-end code.',
      },
      {
        title: 'Why storytelling first?',
        text: 'The project sells a memory and experience, not simply a product.',
      },
    ],
    outcome:
      'Published client website with editable CMS content and a booking-oriented experience.',
    contribution:
      'This project demonstrates the ability to connect UX, visual storytelling, front-end implementation and CMS architecture in a real client project.',
    liveUrl: 'https://www.theringexperience.lk/',
    links: [
      { label: 'The Froggy Studio case study', url: 'https://thefroggystudio.com/projects/theringexperience' },
    ],
  }),
  makeProject({
    title: 'The Froggy Studio',
    slug: 'the-froggy-studio',
    featured: false,
    year: '2026',
    type: 'Art Direction / Web Design / Brand Positioning / Creative Strategy',
    role: 'Art Direction / Product / Development',
    tools: ['Art direction', 'Web design', 'Creative strategy'],
    summary:
      'A small multidisciplinary digital studio built around complementary skills in design, development, systems and growth.',
    context:
      'The branding intentionally avoids the cold, generic aesthetic commonly associated with digital agencies and uses a more playful and recognisable visual language.',
    responsibilities: [
      'Art direction',
      'Interface direction',
      'Product thinking',
      'Web design',
      'Digital execution',
      'Development support',
      'Visual personality',
    ],
    approach: [
      {
        title: 'Building a recognisable world',
        text: 'The brand was designed around the idea that creative work can be thoughtful and full of life.',
      },
      {
        title: 'Avoiding neutral agency language',
        text: 'The project creates a distinct personality while keeping the communication about services clear.',
      },
      {
        title: 'Connecting brand and digital',
        text: 'The visual identity and website direction work together rather than behaving as separate outputs.',
      },
    ],
    decisions: [
      {
        title: 'Why playful?',
        text: 'The studio needed a memorable language that could communicate creative confidence without becoming cold or generic.',
      },
    ],
    outcome:
      'A complete creative identity and digital presence for a multidisciplinary studio.',
    contribution:
      'This project demonstrates art direction, brand positioning, digital design and the ability to shape a complete creative identity.',
    liveUrl: 'https://thefroggystudio.com/',
  }),
  makeProject({
    title: 'Lost in Light',
    slug: 'lost-in-light',
    featured: true,
    year: '2025',
    type: 'Experimental Web / UX/UI / Art Direction / 3D / Creative Development',
    role: 'Art Director / 3D Artist / UI Designer / Developer',
    tools: ['Vue.js', 'Spline 3D', 'WebGL', 'Vite', 'Netlify'],
    summary:
      'An immersive interactive web storytelling experience exploring light, perception, disorientation, loss and rebirth.',
    context:
      'Completed as my graduation project in Digital Design and Communication at LABA Brescia with 110 cum laude.',
    responsibilities: [
      'Concept',
      'Art direction',
      'UX/UI',
      'Interaction design',
      '3D environments',
      'Front-end development',
      'Visual storytelling',
      'Sound direction',
      'Deployment',
    ],
    approach: [
      {
        title: 'Balancing immersion and usability',
        text: 'Navigation and orientation needed to remain understandable without breaking the atmosphere.',
      },
      {
        title: 'Using motion as narrative',
        text: 'Motion was treated as part of the storytelling rather than decoration.',
      },
      {
        title: 'Loading experience progressively',
        text: 'Media and scenes were organised so heavy immersive content could be introduced progressively.',
      },
    ],
    decisions: [
      {
        title: 'Why a minimal interface?',
        text: 'Persistent orientation cues, predictable transitions and progressive disclosure helped users understand where they were without conventional interface clutter.',
      },
    ],
    outcome:
      'A bilingual Italian/English immersive web experience with dynamic scenes, transitions, audio, narration and environmental sound.',
    contribution:
      'This project demonstrates art direction, experimental UX, 3D web, interaction design, visual storytelling and creative front-end development.',
    liveUrl: 'https://lostinlight.netlify.app/',
  }),
  makeProject({
    title: 'FocusFlow Pro',
    slug: 'focusflow-pro',
    featured: false,
    year: '2025',
    type: 'Product Design / UX/UI / Front-End Development',
    role: 'UX/UI Designer / Front-End Developer',
    tools: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    summary:
      'An all-in-one workspace for independent freelancers who need to track work, projects, billable time and invoices.',
    context:
      'The product needed to organise a large number of business-management functions without becoming an enterprise dashboard.',
    responsibilities: [
      'UX/UI',
      'Application structure',
      'User flows',
      'Dashboard',
      'Reusable interface components',
      'Project management experience',
      'Front-end implementation',
      'Firebase-backed behaviour',
    ],
    approach: [
      {
        title: 'Separating complex functions',
        text: 'The interface separates project management, financial information and reporting to reduce cognitive load.',
      },
      {
        title: 'Designing reusable patterns',
        text: 'Shared components support projects, time tracking, invoices, profiles, to-do lists, budgets and reports.',
      },
      {
        title: 'Supporting ownership',
        text: 'The product positioning focuses on speed, privacy and data ownership.',
      },
    ],
    decisions: [
      {
        title: 'Why dashboard hierarchy?',
        text: 'The product includes many functions, so hierarchy and separation are essential for usability.',
      },
    ],
    outcome:
      'Live product with project management, time tracking, invoicing, insights, backup and export features.',
    contribution:
      'This project demonstrates product UX, dashboard design, front-end implementation and the organisation of complex functionality.',
    liveUrl: 'https://www.usefocusflow.pro/',
  }),
  makeProject({
    title: 'Polaroid Landing Page',
    slug: 'polaroid-landing-page',
    featured: false,
    year: '2025',
    type: 'Web Design / Webflow / Interaction Design',
    role: 'UI Designer / Webflow Developer',
    tools: ['Webflow'],
    summary:
      'A conceptual landing page exploring how the physical character of Polaroid photography could become an interactive digital experience.',
    context:
      'Instead of a conventional product grid, the interface takes inspiration from physical instant photographs and scattered photo walls.',
    responsibilities: [
      'Interface design',
      'Responsive design',
      'Webflow implementation',
      'Visual hierarchy',
      'Micro-interactions',
      'Interaction states',
    ],
    approach: [
      {
        title: 'Designing tactile interaction',
        text: 'Photographs behave like physical Polaroids through subtle changes in tilt, scale and depth.',
      },
      {
        title: 'Reinforcing brand feeling',
        text: 'Interaction supports the tactile and nostalgic quality of the product instead of acting as decoration.',
      },
      {
        title: 'Keeping the page responsive',
        text: 'The layout translates the scattered-photo concept across viewport sizes.',
      },
    ],
    decisions: [
      {
        title: 'Why micro-interactions?',
        text: 'Small motion details help the page feel closer to the physical behaviour of instant photographs.',
      },
    ],
    outcome:
      'Conceptual Webflow landing page focused on responsive execution and interaction details.',
    contribution:
      'This project demonstrates web design, Webflow development and interaction details that reinforce brand character.',
  }),
  makeProject({
    title: 'Focum',
    slug: 'focum',
    featured: true,
    year: '2024',
    type: 'Brand Identity / Art Direction / Graphic Design',
    role: 'Brand Designer / Art Director',
    tools: ['Figma', 'Illustrator', 'InDesign'],
    summary:
      'A concept brand identity for fire-starting products repositioned toward a more aspirational lifestyle context.',
    context:
      'The challenge was turning an ordinary utility product into something that could belong in outdoor gatherings, glamping and social occasions.',
    responsibilities: [
      'Brand strategy',
      'Naming direction',
      'Logo',
      'Visual identity',
      'Colour system',
      'Typography',
      'Photography direction',
      'Art direction',
      'Marketing assets',
      'Brand bible',
      'Packaging direction',
    ],
    approach: [
      {
        title: 'Repositioning the product',
        text: 'Instead of focusing only on practical function, the identity was directed toward a more premium audience.',
      },
      {
        title: 'Building an energetic system',
        text: 'Fiery colours and dynamic forms communicate the energy of fire.',
      },
      {
        title: 'Keeping the system refined',
        text: 'The visual identity remains sufficiently refined for a lifestyle-oriented positioning.',
      },
    ],
    decisions: [
      {
        title: 'Why premium positioning?',
        text: 'The product needed to move beyond utility and become desirable within social and outdoor contexts.',
      },
    ],
    outcome:
      'Concept project with complete visual and verbal identity, including logo, colour, typography, art direction and marketing materials.',
    contribution:
      'This project demonstrates brand strategy, visual identity, art direction and the ability to reposition an ordinary product through design.',
  }),
  makeProject({
    title: 'reMarkable - Seamless Product Configurator',
    slug: 'remarkable-product-configurator',
    featured: false,
    year: '2024',
    type: 'UI Design / Conversion Design / Interaction Design',
    role: 'UX/UI Designer',
    tools: ['Figma'],
    summary:
      'A concept redesign exploring how the configuration and purchase of a reMarkable product could be made simpler and more continuous.',
    context:
      'The project focuses on a multi-step configurator where users move through product decisions without losing context about previous selections.',
    responsibilities: [
      'UI design',
      'Conversion design',
      'Interaction flows',
      'Visual hierarchy',
      'Prototyping',
      'Configurator UX',
    ],
    approach: [
      {
        title: 'Clarifying the sequence',
        text: 'The configuration is organised around Marker, Folio and Review.',
      },
      {
        title: 'Keeping context visible',
        text: 'A persistent summary keeps selected options and prices visible throughout the flow.',
      },
      {
        title: 'Reducing cognitive load',
        text: 'Progressive disclosure avoids showing every option simultaneously.',
      },
    ],
    decisions: [
      {
        title: 'Why a persistent summary?',
        text: 'Users should not need to remember previous selections while configuring a product.',
      },
      {
        title: 'Why minimal language?',
        text: 'The visual language remains deliberately minimal and premium to stay compatible with the existing reMarkable brand.',
      },
    ],
    outcome:
      'Concept configurator flow focused on continuity, clarity and conversion.',
    contribution:
      'This project demonstrates conversion-focused UI design, interaction flows and the ability to reduce cognitive load in a multi-step purchase journey.',
  }),
  makeProject({
    title: 'Jewellery Brand - Promotional Newsletter',
    slug: 'jewellery-brand-promotional-newsletter',
    featured: false,
    year: '2024',
    type: 'Email Design / Visual Design / Conversion Design',
    role: 'Digital / Visual Designer',
    tools: ['Email design', 'Visual design', 'Conversion design'],
    summary:
      'A promotional newsletter concept for a jewellery brand balancing premium visual storytelling with a clear commercial objective.',
    context:
      'The challenge was creating an email that still felt consistent with a luxury brand instead of becoming a conventional promotional template.',
    responsibilities: [
      'Email layout',
      'Visual hierarchy',
      'Product emphasis',
      'Typography',
      'Promotional structure',
      'Brand consistency',
      'CTA placement',
      'Conversion-oriented composition',
    ],
    approach: [
      {
        title: 'Controlling the reading path',
        text: 'The layout moves from brand and image storytelling toward product information and finally toward action.',
      },
      {
        title: 'Balancing brand and conversion',
        text: 'The composition avoids treating every section as equally important.',
      },
      {
        title: 'Maintaining premium tone',
        text: 'The email keeps the jewellery brand feeling elevated while still guiding users toward action.',
      },
    ],
    decisions: [
      {
        title: 'Why hierarchy first?',
        text: 'Conversion-oriented design works best when the reader understands what to see first and where attention should move next.',
      },
    ],
    outcome:
      'Newsletter concept focused on brand consistency, product emphasis and conversion-oriented layout.',
    contribution:
      'This project demonstrates that conversion-oriented design does not require sacrificing visual identity, especially for premium brands.',
  }),
]
