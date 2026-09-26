/**
 * Ventures y roles. Fuente: el CV de Christian, salvo Chaucheros, que él
 * describió directamente. No se añaden métricas que no estén en el CV.
 *
 * Pendientes de revisión (no publicados hasta confirmar rol, periodo y estado):
 * - Safe Money: no aparece en el CV.
 * - Allpa Technologies: no aparece en el CV (solo como afiliación "AllpaTech"
 *   en un preprint de arXiv de 2020).
 */

import type { L } from '@/i18n/config';

export type VentureStatus = 'building' | 'current' | 'past' | 'research';

export type Venture = {
  slug: string;
  name: string;
  summary: L;
  description: L<string[]>;
  /** Vacío cuando el CV no da rol. */
  role: L;
  /** null cuando el CV no da periodo. */
  period: L | null;
  status: VentureStatus;
  category: L;
  /** Resultados tal como aparecen en el CV. */
  highlights: L<string[]>;
  links: { label: string; url: string }[];
  featured?: boolean;
  /** Datos que Christian debe confirmar antes de darlos por buenos. */
  review?: string;
};

export const ventures: Venture[] = [
  {
    slug: 'chaucheros',
    name: 'Chaucheros',
    summary: {
      en: 'Turning goals into coordinated work powered by AI agents and people.',
      es: 'Convierte objetivos en trabajo coordinado entre agentes de IA y personas.',
    },
    description: {
      en: [
        'Chaucheros turns needs and goals into work orders that can be executed by people, by AI agents, or by humans and AI working together.',
        'Its core idea: from a need to a workforce.',
      ],
      es: [
        'Chaucheros transforma necesidades y objetivos en órdenes de trabajo que pueden ejecutar personas, agentes de IA o personas e IA trabajando juntas.',
        'Su idea central: de una necesidad a una fuerza de trabajo.',
      ],
    },
    role: { en: 'Founder', es: 'Fundador' },
    period: null,
    status: 'building',
    category: { en: 'AI · Future of Work · Marketplace', es: 'IA · Futuro del trabajo · Marketplace' },
    highlights: { en: [], es: [] },
    links: [],
    featured: true,
    review: 'Añadir fecha de inicio y enlace público cuando existan.',
  },
  {
    slug: 'kardot',
    name: 'Kardot',
    summary: {
      en: 'A high-performance multi-agent B2B fintech ecosystem for interoperability.',
      es: 'Ecosistema fintech B2B multiagente de alto rendimiento para la interoperabilidad.',
    },
    description: {
      en: [
        'As Lead Architect, I engineered the platform’s AI core and pioneered multi-agent systems using the Model Context Protocol (MCP) to connect secure B2B tools.',
      ],
      es: [
        'Como Lead Architect, diseñé el núcleo de IA de la plataforma e impulsé sistemas multiagente con el Model Context Protocol (MCP) para conectar herramientas B2B seguras.',
      ],
    },
    role: { en: 'Lead Architect', es: 'Lead Architect' },
    period: { en: 'June 2025 – Present', es: 'Junio 2025 – Actualidad' },
    status: 'current',
    category: { en: 'Fintech · Multi-agent systems · B2B', es: 'Fintech · Sistemas multiagente · B2B' },
    highlights: {
      en: [
        'AI core supporting 10,000 concurrent transactions with 99.99% uptime.',
        'Led a cross-functional team of 5, accelerating MVP-to-market by 40%.',
        'B2B frameworks securing 10+ key partnerships and reducing development costs by 30%.',
      ],
      es: [
        'Núcleo de IA para 10.000 transacciones concurrentes con 99,99 % de disponibilidad.',
        'Dirección de un equipo multidisciplinario de 5 personas: 40 % menos tiempo de MVP a mercado.',
        'Marcos B2B que aseguraron más de 10 alianzas clave y redujeron un 30 % los costos de desarrollo.',
      ],
    },
    links: [],
  },
  {
    slug: 'estrategia-ia',
    name: 'Estrategia.IA',
    summary: {
      en: 'Strategic AI-powered engine for automated business planning.',
      es: 'Motor estratégico con IA para la planificación automatizada de negocios.',
    },
    description: {
      en: [
        'As Lead Full Stack Developer & AI Architect, I orchestrated an AI-driven KPI tracking engine and shaped the product roadmap.',
      ],
      es: [
        'Como Lead Full Stack Developer y AI Architect, orquesté un motor de seguimiento de KPI con IA y definí la hoja de ruta del producto.',
      ],
    },
    role: { en: 'Lead Full Stack Developer & AI Architect', es: 'Lead Full Stack Developer y AI Architect' },
    period: { en: 'Jan 2025 – June 2025', es: 'Ene 2025 – Jun 2025' },
    status: 'past',
    category: { en: 'AI · Business planning', es: 'IA · Planificación de negocios' },
    highlights: {
      en: [
        'KPI tracking engine that reduced client planning cycles by 60%.',
        'Product roadmap driving 25% month-over-month growth in B2B engagement.',
        'Web and mobile integrations with zero critical downtime during launch.',
      ],
      es: [
        'Motor de seguimiento de KPI que redujo un 60 % los ciclos de planificación de los clientes.',
        'Hoja de ruta de producto con un 25 % de crecimiento mensual en la interacción B2B.',
        'Integraciones web y móviles sin caídas críticas durante el lanzamiento.',
      ],
    },
    links: [],
  },
  {
    slug: 'goplay',
    name: 'GoPlay!',
    summary: {
      en: 'A marketplace built on AWS and Node.js, with iOS and Android apps.',
      es: 'Un marketplace sobre AWS y Node.js, con apps para iOS y Android.',
    },
    description: {
      en: ['As Senior Software Engineer, I architected the marketplace on AWS and Node.js and led development of the mobile apps.'],
      es: ['Como Senior Software Engineer, diseñé la arquitectura del marketplace sobre AWS y Node.js y lideré el desarrollo de las apps móviles.'],
    },
    role: { en: 'Senior Software Engineer', es: 'Senior Software Engineer' },
    period: { en: 'Jan 2024 – Jan 2025', es: 'Ene 2024 – Ene 2025' },
    status: 'past',
    category: { en: 'Marketplace · Mobile', es: 'Marketplace · Móvil' },
    highlights: {
      en: ['Marketplace scaled to 1,000 active players.', 'iOS/Android apps processing $10k+ in monthly booking volume.'],
      es: ['Marketplace escalado a 1.000 jugadores activos.', 'Apps iOS/Android que procesan más de 10.000 USD mensuales en reservas.'],
    },
    links: [],
    review: 'El CV no describe qué vende el marketplace; añadir una línea si quieres.',
  },
  {
    slug: 'plotvision',
    name: 'PlotVision',
    summary: {
      en: 'High-performance computer vision platform for big data and agricultural research.',
      es: 'Plataforma de visión por computadora de alto rendimiento para big data e investigación agrícola.',
    },
    description: {
      en: ['A computer vision platform built for big data and agricultural research.'],
      es: ['Una plataforma de visión por computadora pensada para big data e investigación agrícola.'],
    },
    role: { en: '', es: '' },
    period: null,
    status: 'research',
    category: { en: 'Computer vision · Agriculture · Big data', es: 'Visión por computadora · Agricultura · Big data' },
    highlights: { en: [], es: [] },
    links: [],
    review: 'El CV lista PlotVision como proyecto destacado sin rol ni fechas; confirmar ambos y la relación con la Universidad de Saskatchewan.',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);

/** Arquitectura conceptual de Chaucheros, tal como la describió Christian (nombres de componentes, sin traducir). */
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
