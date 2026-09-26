/**
 * Única fuente de verdad del perfil: biografía, titular, experiencia,
 * proyectos y contacto, en español e inglés.
 *
 * Los valores envueltos en `pending(...)` son datos contradictorios entre las
 * versiones anteriores del sitio y el README. Se muestran como
 * "[por confirmar]" en la página y se listan en la consola al compilar
 * hasta que se reemplacen por el valor definitivo.
 */

export type Lang = 'es' | 'en';
export type Localized<T = string> = Record<Lang, T>;

export interface Pending {
  pending: true;
  /** Valores encontrados en las fuentes, con su origen. */
  options: string[];
  note: string;
}

export type Value<T = string> = T | Pending;

export const pending = (note: string, ...options: string[]): Pending => ({
  pending: true,
  options,
  note,
});

export const isPending = (v: unknown): v is Pending =>
  typeof v === 'object' && v !== null && (v as Pending).pending === true;

export const profile = {
  name: 'Christian Spana',

  headline: {
    es: pending(
      'Titular principal',
      'AI Engineer & Full Stack Developer (README, sitio de febrero 2026)',
      'Tech Entrepreneur & AI Researcher (redirección actual)',
    ),
    en: pending(
      'Main headline',
      'AI Engineer & Full Stack Developer (README, February 2026 site)',
      'Tech Entrepreneur & AI Researcher (current redirect)',
    ),
  } satisfies Localized<Value>,

  roles: {
    es: ['Emprendedor', 'Arquitecto de IA', 'Ingeniero Full Stack', 'Profesor'],
    en: ['Entrepreneur', 'AI Architect', 'Full Stack Engineer', 'Professor'],
  } satisfies Localized<string[]>,

  yearsExperience: pending(
    'Años de experiencia',
    '15+ (README, sitio de febrero 2026)',
    '20+ (sitio Quasar anterior)',
  ) as Value,

  location: {
    es: 'North Vancouver, BC, Canadá',
    en: 'North Vancouver, BC, Canada',
  } satisfies Localized,

  summary: {
    es: 'Ingeniero sénior de IA y desarrollador full stack. Hago de puente entre la investigación avanzada en IA y el software que funciona en producción: desde entrenar y ajustar LLMs y modelos de visión por computadora hasta construir APIs confiables y frontends fluidos.',
    en: 'Senior AI Engineer and Full Stack Developer. I act as a bridge between advanced AI research and real-world software, from training and fine-tuning LLMs and computer vision models to building reliable APIs and smooth frontends.',
  } satisfies Localized,

  about: {
    es: [
      'Como emprendedor he lanzado varios productos basados en IA que impulsaron el crecimiento del negocio y consolidaron alianzas B2B en los sectores fintech y agtech.',
      'Como académico he enseñado Cloud Computing, Inteligencia Artificial y Ciberseguridad a cientos de estudiantes, con un 80 % de proyectos exitosos, y he guiado a más de 25 estudiantes hasta certificaciones profesionales de AWS.',
      'Hoy trabajo en sistemas multiagente (MAS), flujos agénticos y el Model Context Protocol (MCP) para lograr interoperabilidad segura en entornos empresariales.',
    ],
    en: [
      'As an entrepreneur, I have launched multiple AI-powered products that drove business growth and secured B2B partnerships across the fintech and agtech sectors.',
      'As an academic, I have taught Cloud Computing, Artificial Intelligence and Cybersecurity to hundreds of students, with an 80% project success rate, and guided 25+ students to professional AWS certifications.',
      'Today I build Multi-Agent Systems (MAS), agentic workflows and Model Context Protocol (MCP) integrations for secure enterprise interoperability.',
    ],
  } satisfies Localized<string[]>,

  credentials: {
    es: [
      'Máster en Inteligencia Artificial',
      'AWS Certified Solutions Architect',
      'Diplomado en Ciberseguridad',
      pending('Doctorado', 'Candidato a doctorado (solo en el sitio de febrero 2026)', 'No mencionarlo'),
    ],
    en: [
      'Master in Artificial Intelligence',
      'AWS Certified Solutions Architect',
      'Cybersecurity Diploma',
      pending('PhD', 'PhD Candidate (only on the February 2026 site)', 'Leave it out'),
    ],
  } satisfies Localized<Value[]>,

  skills: [
    {
      title: { es: 'IA y aprendizaje automático', en: 'AI & Machine Learning' },
      items: ['TensorFlow', 'PyTorch', 'LangChain', 'LLMs', 'Computer Vision', 'NLP', 'RAG'],
    },
    {
      title: { es: 'Sistemas multiagente', en: 'Multi-Agent Systems' },
      items: ['MAS', 'MCP', 'Agentic Workflows', 'LLM Orchestration'],
    },
    {
      title: { es: 'Full stack', en: 'Full Stack' },
      items: ['Python', 'Node.js', 'Go', 'TypeScript', 'React', 'Vue', 'GraphQL'],
    },
    {
      title: { es: 'Nube y datos', en: 'Cloud & Data' },
      items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL'],
    },
  ],

  // TODO: las fuentes no traen empresas ni fechas; añadirlas cuando estén.
  experience: [
    {
      role: { es: 'Emprendedor', en: 'Entrepreneur' },
      summary: {
        es: 'Productos basados en IA para fintech y agtech.',
        en: 'AI-powered products for fintech and agtech.',
      },
      highlights: {
        es: ['Más de 10 alianzas B2B', '25 % de crecimiento mensual', '40 % menos tiempo de MVP a mercado'],
        en: ['10+ B2B partnerships', '25% month-over-month growth', '40% faster MVP-to-market'],
      },
    },
    {
      role: { es: 'Arquitecto de IA', en: 'AI Architect' },
      summary: {
        es: 'Sistemas de IA en producción con arquitecturas multiagente a escala empresarial.',
        en: 'Production AI systems with multi-agent architectures at enterprise scale.',
      },
      highlights: {
        es: ['Más de 10.000 transacciones concurrentes', '99,99 % de disponibilidad', 'Integraciones MCP seguras'],
        en: ['10,000+ concurrent transactions', '99.99% uptime', 'Secure MCP integrations'],
      },
    },
    {
      role: { es: 'Profesor y mentor', en: 'Professor & Mentor' },
      summary: {
        es: 'Docencia en Cloud Computing, IA y Ciberseguridad.',
        en: 'Teaching Cloud Computing, AI and Cybersecurity.',
      },
      highlights: {
        es: ['Más de 25 estudiantes certificados en AWS', '80 % de proyectos exitosos', 'Diseño curricular de IA y nube'],
        en: ['25+ AWS-certified students', '80% project success rate', 'AI & Cloud curriculum design'],
      },
    },
  ],

  // TODO: el sitio anterior solo tenía los nombres; faltan descripción y enlace.
  projects: [
    { name: 'Sortistry', description: { es: 'Descripción por completar.', en: 'Description to be added.' }, url: '' },
    { name: 'E-commerce', description: { es: 'Descripción por completar.', en: 'Description to be added.' }, url: '' },
    { name: 'Dendi', description: { es: 'Descripción por completar.', en: 'Description to be added.' }, url: '' },
  ],

  contact: {
    email: pending(
      'Correo de contacto',
      'lukaswarce@gmail.com (README, sitio de febrero 2026)',
      'christian.spana@gmail.com (sitio Quasar anterior)',
    ) as Value,
    phone: pending(
      'Teléfono (y si publicarlo)',
      '786.671.4280 (README, último cambio)',
      '708.671.4280 (sitios anteriores)',
      'No publicar teléfono',
    ) as Value,
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/lukaswarce' },
      { label: 'GitHub', url: 'https://github.com/lukaswarce' },
      { label: 'Blog', url: 'https://lukaswarce.substack.com/' },
      { label: 'Instagram', url: 'https://instagram.com/lukaswarce' },
    ],
  },

  photo: '/images/christian-spana.jpeg',
};

/** Recorre el perfil y devuelve cada dato pendiente con su ruta. */
export function listPending(node: unknown = profile, path = 'profile'): { path: string; value: Pending }[] {
  if (isPending(node)) return [{ path, value: node }];
  if (Array.isArray(node)) return node.flatMap((v, i) => listPending(v, `${path}[${i}]`));
  if (typeof node === 'object' && node !== null) {
    return Object.entries(node).flatMap(([k, v]) => listPending(v, `${path}.${k}`));
  }
  return [];
}
