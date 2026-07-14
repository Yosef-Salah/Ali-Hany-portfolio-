import { Project, Service, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'aether-cosmetics',
    title: 'Aether Skincare',
    category: 'Packaging',
    year: '2025',
    client: 'Aether Labs Inc.',
    role: 'Lead Brand & Packaging Designer',
    description: 'Minimalist brand identity and sustainable tactile packaging for a luxury clean-beauty skincare line.',
    longDescription: 'Aether was born from the desire to simplify skincare. The visual direction reflects this purity through generous negative space, structured typographic grids, and a warm, skin-neutral color palette. The packaging utilizes post-consumer recycled glass and compostable soy-ink boxes, aligning the luxury aesthetic with absolute environmental responsibility. We designed a custom blind-debossed monogram and selected a high-tactility stock to make the unboxing experience deeply sensory.',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Brand Identity', 'Packaging Design', 'Art Direction', 'Eco-Materials'],
    brandColors: ['#EAE2D8', '#4A3E3D', '#A89F91', '#1A1817'],
    typography: ['Syne (Bold)', 'Inter (Regular)'],
    metrics: {
      label: 'Retail Sell-out Rate Post-Launch',
      value: '+142%'
    }
  },
  {
    id: 'komorebi-studios',
    title: 'Komorebi Architecture',
    category: 'Branding',
    year: '2026',
    client: 'Komorebi Partners',
    role: 'Principal Brand Strategist & Visual Designer',
    description: 'A precise, Swiss-inspired typographic identity system for an international modern architectural firm.',
    longDescription: 'Komorebi (Japanese for "sunlight filtering through trees") specializes in sustainable concrete and timber architecture. The visual identity needed to feel structured, structural, yet organic in its relationship to light. We built an adaptive grid system where the logo itself dynamically shifts position depending on the aspect ratio of the application—mimicking how shadows move across a concrete wall throughout the day. The typography relies exclusively on custom cut-out geometric sans-serifs, evoking structural beams.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Visual Identity', 'Grid Systems', 'Signage', 'Creative Direction'],
    brandColors: ['#1A1D20', '#F0F0EE', '#8E9194', '#C4A484'],
    typography: ['Space Grotesk', 'Fira Code'],
    metrics: {
      label: 'Client Inquiry Quality Rating Increase',
      value: '+85%'
    }
  },
  {
    id: 'nova-espresso',
    title: 'Nova Craft Coffee',
    category: 'Packaging',
    year: '2025',
    client: 'Nova Roasters Ltd.',
    role: 'Packaging Designer & Illustrator',
    description: 'Vibrant, color-coded illustrative packaging and custom coffee bag series celebrating single-origin beans.',
    longDescription: 'For Nova Craft Coffee, we moved away from the ubiquitous brown-paper craft packaging and instead embraced a bold, chromatic universe. Each single-origin bag features an abstract topographic illustration depicting the micro-climate and altitude of the farm where the beans were harvested. The color schemes are psychologically mapped to the tasting notes (e.g., vibrant magenta and orange for high-acidity citrus notes; deep velvet blue and forest green for chocolate and earthy profiles).',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Illustration', 'Packaging Lineup', 'Color Theory', 'Retail Design'],
    brandColors: ['#FF5A36', '#FFB100', '#2C5E43', '#FFFDF9'],
    typography: ['Clash Display (Bold)', 'JetBrains Mono'],
    metrics: {
      label: 'Shelf Visibility Rank (Local Cafes)',
      value: '#1 Best-Seller'
    }
  },
  {
    id: 'maison-art',
    title: 'Maison de l’Art Book',
    category: 'Editorial',
    year: '2024',
    client: 'Paris Fine Arts Publishing',
    role: 'Editorial Director & Layout Designer',
    description: 'A premium, high-contrast, double-gatefold retrospective art book with bespoke typographic details.',
    longDescription: 'This limited-edition 340-page hardcover publication covers the avant-garde design movements of the mid-20th century. Utilizing an asymmetric 12-column grid and a stark high-contrast layout, the design allows the monumental historical photography to breathe. To emphasize the historical timeline, we used hand-crafted editorial ligatures and printed the entire body text in a deep obsidian black soy ink on premium ultra-matte uncoated Italian paper.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Editorial Layout', 'Typography', 'Book Design', 'Print Production'],
    brandColors: ['#0A0A0A', '#FFFFFF', '#D2B48C', '#555555'],
    typography: ['Playfair Display', 'Inter'],
    metrics: {
      label: 'Design Book of the Year Nominations',
      value: '3 Awards'
    }
  },
  {
    id: 'kinetic-identity',
    title: 'Kinetic Motion Festival',
    category: 'Digital',
    year: '2026',
    client: 'Berlin Arts Board',
    role: 'Lead Digital Artist & Motion Designer',
    description: 'An interactive, code-driven fluid identity and digital campaign for an experimental performance festival.',
    longDescription: 'Kinetic Motion Festival was a digital-first event celebrating human movement and generative sound. Rather than designing a static logo, we built a custom webGL-based fluid simulation that captures real-time cursor movements and camera tracking to generate responsive, infinite logo variants. This generative art engine served as the backbone of the digital advertising campaign, custom interactive ticket sales page, and massive projection installations throughout the Berlin venue.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Generative Design', 'Creative Coding', 'UI/UX Design', 'Fluid Mechanics'],
    brandColors: ['#080112', '#39FF14', '#FF007F', '#00FFFF'],
    typography: ['PPMori (Bold)', 'Space Mono'],
    metrics: {
      label: 'Interactive Ticket Conversion Rate',
      value: '18.4%'
    }
  },
  {
    id: 'verdant-harvest',
    title: 'Verdant Harvest',
    category: 'Branding',
    year: '2025',
    client: 'Verdant Co-op',
    role: 'Brand Identity & Strategy',
    description: 'Earthy, high-end organic farming co-op visual system and eco-friendly consumer goods branding.',
    longDescription: 'Verdant Harvest reconnects metropolitan food enthusiasts with rural micro-farms. The visual identity rejects the typical cliché rustic look, in favor of a clean modern green aesthetic. We utilized structured typography alongside raw, high-contrast, organic botanical silhouettes that frame the content. The packaging is created with 100% biodegradable seaweed wrap, with a minimalistic label highlighting trace-back origin codes for ultimate transparency.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1530251365312-f1db74553659?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Sustainable Design', 'Art Direction', 'Eco-Packaging', 'Identity'],
    brandColors: ['#1E3A27', '#E2D3BB', '#606C38', '#FEFAE0'],
    typography: ['Outfit', 'Inter'],
    metrics: {
      label: 'Local Direct Consumer Sales Increase',
      value: '+210%'
    }
  }
];

export const services: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Strategy & Design',
    description: 'We build complete visual universes that define your core values, combining robust conceptual foundations with impeccable visual style.',
    iconName: 'Compass',
    deliverables: [
      'Brand Audit & Positioning Workshop',
      'Logo Systems & Dynamic Guidelines',
      'Custom Brand Typography Systems',
      'Full Color Framework & Texture Direction'
    ]
  },
  {
    id: 'editorial-print',
    title: 'Editorial & Printed Publications',
    description: 'With a deep reverence for ink and paper, we construct layouts that turn information into visual hierarchies worth preserving.',
    iconName: 'BookOpen',
    deliverables: [
      'Editorial Strategy & Art Direction',
      'Grid Architecture & Type Setting',
      'Specialist Paper & Ink Procurement Guides',
      'Limited-Edition Print Production'
    ]
  },
  {
    id: 'custom-packaging',
    title: 'Eco-Luxury Packaging Design',
    description: 'Crafting three-dimensional sensory experiences that elevate retail shelf presence while championing sustainable structural engineering.',
    iconName: 'Box',
    deliverables: [
      'Packaging Architecture & Unboxing Blueprints',
      'Compostable & Recyclable Material Research',
      '3D Visualization & Debossing Prototyping',
      'Custom Pattern & Surface Illustrations'
    ]
  },
  {
    id: 'digital-direction',
    title: 'High-Fidelity Interactive Experiences',
    description: 'Translating visceral tactile design into highly interactive digital interfaces, interactive brand assets, and web layout design.',
    iconName: 'Monitor',
    deliverables: [
      'Interactive Brand System Design',
      'UI/UX Typography Layout Design',
      'Responsive Fluid Code Mockups',
      'Digital-First Campaign Design Guidelines'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Helena Vance',
    role: 'Creative Director',
    company: 'Aether Labs',
    content: 'The packaging and branding transformed our physical products into true pieces of art. The blind debossing on the cotton stock boxes has become our signature brand signifier. Absolutely brilliant work.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Kenji Sato',
    role: 'Founder & Architect',
    company: 'Komorebi Partners',
    content: 'We expected a nice logo, but we received an entire architectural philosophy translated into a graphic grid system. The dynamic responsive shadow logos mirror our concrete edifices beautifully.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Head of Growth',
    company: 'Nova Roasters',
    content: 'Our retail shelf performance soared by over 140% within two months of launching the topographic single-origin bag designs. Customers collect the packaging just for the artwork!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];
