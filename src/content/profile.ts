/**
 * Trayectoria y formación. Fuente única: el CV de Christian (2 páginas, sep 2026).
 * No publicar teléfono, dirección, ciudadanías ni otros datos personales.
 */

export type Role = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  kind: 'founder' | 'engineering' | 'research' | 'teaching';
};

export const experience: Role[] = [
  {
    company: 'Kardot',
    title: 'Lead Architect',
    period: 'Jun 2025 – Present',
    kind: 'engineering',
    highlights: [
      'Engineered the platform’s AI core to support 10,000 concurrent transactions with 99.99% uptime.',
      'Pioneered multi-agent systems using the Model Context Protocol (MCP) to connect secure B2B tools.',
      'Directed a cross-functional team of 5, accelerating the MVP-to-market lifecycle by 40%.',
      'Formulated B2B frameworks securing 10+ key partnerships and reducing development costs by 30%.',
    ],
  },
  {
    company: 'Estrategia.IA',
    title: 'Lead Full Stack Developer & AI Architect',
    period: 'Jan 2025 – Jun 2025',
    kind: 'engineering',
    highlights: [
      'Orchestrated an AI-driven KPI tracking engine, reducing client planning cycles by 60%.',
      'Conceptualized the product roadmap, driving 25% month-over-month growth in B2B engagement.',
    ],
  },
  {
    company: 'GoPlay!',
    title: 'Senior Software Engineer',
    period: 'Jan 2024 – Jan 2025',
    kind: 'engineering',
    highlights: [
      'Architected a marketplace using AWS and Node.js, scaling to 1,000 active players.',
      'Spearheaded iOS/Android apps processing $10k+ monthly booking volume.',
    ],
  },
  {
    company: 'University of Saskatchewan',
    title: 'Software Development Leader',
    period: 'Aug 2022 – Dec 2023',
    kind: 'engineering',
    highlights: [
      'Developed AI models for medical resource allocation, improving appointment accuracy by 25%.',
      'Built a cross-platform ultrasound app supporting 500+ annual exams in remote regions.',
    ],
  },
  {
    company: 'Saskatchewan Polytechnic',
    title: 'Faculty – AI & Cloud Computing',
    period: 'Feb 2021 – Aug 2022',
    kind: 'teaching',
    highlights: [
      'Taught Cloud Computing and AI with an 80% project success rate.',
      'Guided 25 students to professional AWS certifications.',
    ],
  },
  {
    company: 'Freelance',
    title: 'AI Solutions Developer',
    period: 'Dec 2019 – Jan 2021',
    kind: 'engineering',
    highlights: [
      'Delivered full-stack solutions for SMEs, increasing restaurant revenue by 30%.',
      'Translated business goals into custom AI automation for 5 companies.',
    ],
  },
  {
    company: 'University of Saskatchewan',
    title: 'Research Associate & Lead',
    period: 'Sep 2017 – Sep 2019',
    kind: 'research',
    highlights: [
      'Improved drone-image processing efficiency by 40% with a hybrid Python/Go platform.',
      'Produced a plant phenotyping platform processing 50TB+ of visual data.',
    ],
  },
  {
    company: 'Ag Exchange Group',
    title: 'Software Developer & Data Scientist',
    period: 'Jan 2017 – Dec 2017',
    kind: 'engineering',
    highlights: ['Deployed grain classification AI models, raising insurance quality accuracy by 20%.'],
  },
];

export const education = [
  { degree: 'Master in Computer Science (Artificial Intelligence)', school: 'Universidad Espíritu Santo (UEES)', country: 'Ecuador' },
  { degree: 'Diploma in Computer Science (Cybersecurity)', school: 'Monterrey Institute of Technology', country: 'Mexico' },
  { degree: 'Bachelor of Computer Science', school: 'University of the Armed Forces', country: 'Ecuador' },
];

export const certifications = [{ name: 'AWS Certified Solutions Architect – Associate', year: 2022 }];

/** Áreas de trabajo (texto de Christian). */
export const workAreas = [
  { title: 'Artificial Intelligence', text: 'Building AI systems and experimenting with agents, automation and intelligent products.' },
  { title: 'Startups', text: 'From idea and validation to product, distribution and monetization.' },
  { title: 'Technology', text: 'Designing and engineering software products that solve real problems.' },
  { title: 'Applied Research', text: 'Exploring technology through research, experimentation and scientific publication.' },
];
