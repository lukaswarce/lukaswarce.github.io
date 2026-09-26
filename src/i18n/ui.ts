import type { Lang } from '../data/profile';

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.years': 'años de experiencia',
    'hero.cta': 'Escríbeme',
    'about.credentials': 'Formación y certificaciones',
    'about.skills': 'Especialidades',
    'contact.intro': 'Abierto a colaborar en proyectos de IA, arquitectura de software y mentoría.',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'pending': 'por confirmar',
    'lang.switch': 'English',
    'meta.description': 'Christian Spana: ingeniero de IA, desarrollador full stack, emprendedor y profesor.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.years': 'years of experience',
    'hero.cta': 'Get in touch',
    'about.credentials': 'Education & certifications',
    'about.skills': 'Expertise',
    'contact.intro': 'Open to collaborating on AI, software architecture and mentoring projects.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'pending': 'to be confirmed',
    'lang.switch': 'Español',
    'meta.description': 'Christian Spana: AI engineer, full stack developer, entrepreneur and professor.',
    'footer.rights': 'All rights reserved.',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];

export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key];

/** Ruta de la página de inicio en cada idioma. */
export const homePath: Record<Lang, string> = { es: '/', en: '/en/' };
