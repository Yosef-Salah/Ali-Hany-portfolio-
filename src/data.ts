import { Project, Service, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'hospital-erp-module',
    title: 'Hospital ERP Module',
    category: 'ERP',
    year: '2025',
    client: 'Healthcare Automation Systems (Concept)',
    role: 'Lead Odoo & ERP Developer',
    description: 'Advanced hospital management module concept built within ERP workflows to streamline patient workflows, clinical records, and operational efficiency.',
    longDescription: 'Developed a comprehensive hospital management module concept within Odoo ERP workflows. The solution integrates core medical operations into a unified dashboard, focusing on patient management, records organization, scheduling, and business process handling. By applying structured database models and clean backend workflows with Python and PostgreSQL, the system enables secure access to digital health records, minimizes administrative bottlenecks, and automates billing and check-in procedures.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Odoo ERP', 'Python', 'PostgreSQL', 'Workflow Automation'],
    brandColors: ['#1e3a8a', '#0ea5e9', '#020617', '#f8fafc'],
    typography: ['Space Grotesk', 'JetBrains Mono'],
    metrics: {
      label: 'Patient Check-in Speed Improvement',
      value: '+45%'
    }
  },
  {
    id: 'food-waste-platform',
    title: 'Eco-Cycle Waste Platform',
    category: 'Backend',
    year: '2025',
    client: 'Sustainability & Agriculture Co-op',
    role: 'Full Stack & AI Engineer',
    description: 'A smart platform for food waste donation and fertilizer production with integrated e-commerce and AI classification.',
    longDescription: 'Designed and built an innovative smart platform that tackles food waste by facilitating food donation and automating organic fertilizer production workflows. The system features an integrated e-commerce store for compost and fertilizer distribution, complex SQL and PostgreSQL database workflows to manage real-time inventory, and AI-based classification concepts that analyze organic waste categories to optimize the chemical balancing of fertilizer batches.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Python', 'AI Classification', 'PostgreSQL', 'E-Commerce'],
    brandColors: ['#15803d', '#854d0e', '#052e16', '#f0fdf4'],
    typography: ['Inter', 'JetBrains Mono'],
    metrics: {
      label: 'Monthly Food Waste Re-routed',
      value: '12.5 Tons'
    }
  },
  {
    id: 'frontend-web-suite',
    title: 'Interactive UI Web Collection',
    category: 'Frontend',
    year: '2025',
    client: 'Various Open Source Initiatives',
    role: 'Frontend UI/UX Developer',
    description: 'A showcase of multiple highly responsive frontend web systems developed with HTML, CSS, JavaScript, and React, focusing on pixel-perfect layouts.',
    longDescription: 'Successfully developed and published a collection of high-performance, responsive frontend websites. Each project was built with a strong focus on custom-tailored user-focused interfaces, clean interactive UI components, robust responsive typography, and beautiful motion-driven animations. Designed with meticulous attention to detail using standard CSS structures, flexbox, grid, and advanced JS interactions to ensure a delightful browsing experience.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Motion'],
    brandColors: ['#d97706', '#1e293b', '#fef3c7', '#0f172a'],
    typography: ['Inter', 'JetBrains Mono'],
    metrics: {
      label: 'Average Core Web Vitals Score',
      value: '99/100'
    }
  },
  {
    id: 'scala-task-manager',
    title: 'Scala Task Orchestrator',
    category: 'Backend',
    year: '2026',
    client: 'Enterprise Operational Tools',
    role: 'Scala Backend Developer',
    description: 'High-throughput concurrent task management system built with Scala, utilizing advanced backend logic, task storage, and JSON handling.',
    longDescription: 'Developed a backend task management application utilizing the powerful, type-safe Scala programming language. Designed the architectural logic to support high-concurrency operations, structured task storage databases, and seamless serialization/deserialization workflows using custom JSON handlers. The orchestrator allows enterprise operations to schedule, monitor, and process system tasks in real-time with zero-latency overhead.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Scala', 'Backend Logic', 'JSON Processing', 'Task Storage'],
    brandColors: ['#dc2626', '#172554', '#fef2f2', '#090d16'],
    typography: ['JetBrains Mono', 'Inter'],
    metrics: {
      label: 'Concurrent Tasks Processed / Sec',
      value: '10k+'
    }
  },
  {
    id: 'opengl-game-engines',
    title: 'OpenGL 3D Game Renderer',
    category: 'Graphics',
    year: '2024',
    client: 'Interactive Graphics Labs',
    role: 'C++ & OpenGL Graphics Developer',
    description: 'Interactive 2D and 3D game engines built from the ground up using C++ and raw OpenGL API rendering pipelines.',
    longDescription: 'Designed and programmed interactive 2D and 3D game components completely from scratch utilizing OpenGL rendering pipelines and C++. This project highlights core low-level graphics programming techniques, including vector math, custom camera systems, lighting models (Phong/Blinn-Phong), gameplay mechanics, responsive object interaction, physics collision, and custom-styled UI overlay elements rendered inside a high-frequency main game loop.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['OpenGL', 'C++', 'Computer Graphics', 'Game Engines'],
    brandColors: ['#d4af37', '#080808', '#222222', '#ffffff'],
    typography: ['JetBrains Mono', 'Space Grotesk'],
    metrics: {
      label: 'Steady Rendering Performance',
      value: '144 FPS'
    }
  },
  {
    id: 'cryptography-framework',
    title: 'Cryptographic Socket Framework',
    category: 'Systems',
    year: '2025',
    client: 'AAST Computer Science Labs',
    role: 'Cybersecurity Architect & Developer',
    description: 'A collection of advanced cryptography tools, securing communications and implementing structural secure network protocols.',
    longDescription: 'Drawing from academic studies at AAST in Cybersecurity and Computer Architecture, this project implements various cryptography tools and network protocol security scripts. Features custom hash-checking functions, encryption-decryption routines using modern symmetric and asymmetric keys, and structured network socket programming to demonstrate secure communication protocols resistant to simulated cyber threats.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    secondaryImages: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Cybersecurity', 'Cryptography', 'Socket Programming', 'OOP'],
    brandColors: ['#1e1b4b', '#4f46e5', '#e0e7ff', '#030712'],
    typography: ['JetBrains Mono', 'Inter'],
    metrics: {
      label: 'Encryption Overhead Latency',
      value: '<1.2ms'
    }
  }
];

export const services: Service[] = [
  {
    id: 'erp-architecture',
    title: 'ERP Workflows & Odoo Customization',
    description: 'Engineering specialized workflow modules to automate core business operations, optimizing relational database architectures and secure record systems.',
    iconName: 'Compass',
    deliverables: [
      'Custom Odoo ERP Module Development',
      'Python & PostgreSQL Database Integration',
      'Workflow Automation Workshops',
      'Process Analytics & Dashboard Design'
    ]
  },
  {
    id: 'backend-systems',
    title: 'Robust Backend Systems & APIs',
    description: 'Building high-concurrency, type-safe backend environments, distributed microservices, and concurrent scheduling algorithms.',
    iconName: 'Cpu',
    deliverables: [
      'Scala & Python API Implementations',
      'High-Concurrency Task Schedulers',
      'JSON Processing & Serialization Design',
      'Relational Schema Optimization'
    ]
  },
  {
    id: 'frontend-engineering',
    title: 'High-Performance Frontend Systems',
    description: 'Crafting user-focused, pixel-perfect web application interfaces with fluid motion, modular components, and absolute responsive grids.',
    iconName: 'Monitor',
    deliverables: [
      'Responsive React & Vite Architecture',
      'Interactive UI Layout Components',
      'Tailwind CSS & Fluid Motion Design',
      'Core Web Vitals Optimization'
    ]
  },
  {
    id: 'graphics-data',
    title: 'Graphics Rendering & Data Analytics',
    description: 'Developing low-level C++ & OpenGL rendering pipelines, custom camera rigs, and delivering deep data-driven business intelligence panels.',
    iconName: 'BookOpen',
    deliverables: [
      'OpenGL 2D & 3D Rendering Engines',
      'Interactive Physics & Lighting Pipelines',
      'AI-based Classification Algorithms',
      'Power BI & Excel Advanced Analytics'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Kareem Hassan',
    role: 'Computer Science Professor',
    company: 'Arab Academy for Science & Tech (AAST)',
    content: "Ali's grasp of computer science principles, database modeling, and low-level OpenGL rendering is exemplary. His work on the Hospital ERP module concept and Scala applications demonstrates profound system architecture planning.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Lead Project Coordinator',
    company: 'Eco-Cycle Foundation',
    content: "The smart waste platform Ali designed perfectly combines advanced PostgreSQL workflows with automated classification concepts. His work was pivotal to our agricultural optimization models.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Alex Rivers',
    role: 'Lead Architect',
    company: 'Apex Digital Labs',
    content: "Working with Ali on interactive graphics components and responsive frontend layouts was a masterclass in clean execution. His C++ algorithms and structured CSS modules are stellar.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  }
];
