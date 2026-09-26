/**
 * Ventures y roles. Fuente: el CV de Christian, salvo Chaucheros, que él
 * describió directamente. No se añaden métricas que no estén en el CV.
 *
 * Pendientes de revisión (no publicados hasta confirmar rol, periodo y estado):
 * - Safe Money: no aparece en el CV.
 * - Allpa Technologies: no aparece en el CV (solo como afiliación "AllpaTech"
 *   en un preprint de arXiv de 2020).
 */

export type VentureStatus = 'Building' | 'Current role' | 'Past role' | 'Research project';

export type Venture = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  role: string;
  /** null cuando el CV no da periodo. */
  period: string | null;
  status: VentureStatus;
  category: string;
  /** Resultados tal como aparecen en el CV. */
  highlights: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  /** Datos que Christian debe confirmar antes de darlos por buenos. */
  review?: string;
};

export const ventures: Venture[] = [
  {
    slug: 'chaucheros',
    name: 'Chaucheros',
    summary: 'Turning goals into coordinated work powered by AI agents and people.',
    description: [
      'Chaucheros turns needs and goals into work orders that can be executed by people, by AI agents, or by humans and AI working together.',
      'Its core idea: from a need to a workforce.',
    ],
    role: 'Founder',
    period: null,
    status: 'Building',
    category: 'AI · Future of Work · Marketplace',
    highlights: [],
    links: [],
    featured: true,
    review: 'Añadir fecha de inicio y enlace público cuando existan.',
  },
  {
    slug: 'kardot',
    name: 'Kardot',
    summary: 'A high-performance multi-agent B2B fintech ecosystem for interoperability.',
    description: [
      'As Lead Architect, I engineered the platform’s AI core and pioneered multi-agent systems using the Model Context Protocol (MCP) to connect secure B2B tools.',
    ],
    role: 'Lead Architect',
    period: 'June 2025 – Present',
    status: 'Current role',
    category: 'Fintech · Multi-agent systems · B2B',
    highlights: [
      'AI core supporting 10,000 concurrent transactions with 99.99% uptime.',
      'Led a cross-functional team of 5, accelerating MVP-to-market by 40%.',
      'B2B frameworks securing 10+ key partnerships and reducing development costs by 30%.',
    ],
    links: [],
  },
  {
    slug: 'estrategia-ia',
    name: 'Estrategia.IA',
    summary: 'Strategic AI-powered engine for automated business planning.',
    description: [
      'As Lead Full Stack Developer & AI Architect, I orchestrated an AI-driven KPI tracking engine and shaped the product roadmap.',
    ],
    role: 'Lead Full Stack Developer & AI Architect',
    period: 'Jan 2025 – June 2025',
    status: 'Past role',
    category: 'AI · Business planning',
    highlights: [
      'KPI tracking engine that reduced client planning cycles by 60%.',
      'Product roadmap driving 25% month-over-month growth in B2B engagement.',
      'Web and mobile integrations with zero critical downtime during launch.',
    ],
    links: [],
  },
  {
    slug: 'goplay',
    name: 'GoPlay!',
    summary: 'A marketplace built on AWS and Node.js, with iOS and Android apps.',
    description: [
      'As Senior Software Engineer, I architected the marketplace on AWS and Node.js and led development of the mobile apps.',
    ],
    role: 'Senior Software Engineer',
    period: 'Jan 2024 – Jan 2025',
    status: 'Past role',
    category: 'Marketplace · Mobile',
    highlights: [
      'Marketplace scaled to 1,000 active players.',
      'iOS/Android apps processing $10k+ in monthly booking volume.',
    ],
    links: [],
    review: 'El CV no describe qué vende el marketplace; añadir una línea si quieres.',
  },
  {
    slug: 'plotvision',
    name: 'PlotVision',
    summary: 'High-performance computer vision platform for big data and agricultural research.',
    description: [
      'A computer vision platform built for big data and agricultural research.',
    ],
    role: '',
    period: null,
    status: 'Research project',
    category: 'Computer vision · Agriculture · Big data',
    highlights: [],
    links: [],
    review: 'El CV lista PlotVision como proyecto destacado sin rol ni fechas; confirmar ambos y la relación con la Universidad de Saskatchewan.',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);

/** Arquitectura conceptual de Chaucheros, tal como la describió Christian. */
export const chaucherosArchitecture = [
  { label: 'Channels' },
  { label: 'Messaging Gateway' },
  { label: 'Conversation Engine' },
  { label: 'BEAGLE AI' },
  { label: 'Agents', items: ['Intent Agent', 'Sales Agent', 'Work Agent'] },
  { label: 'Work Order Engine' },
  { label: 'Execution', items: ['AI Chauchero', 'Human Chauchero', 'Hybrid'] },
  { label: 'Result' },
];
