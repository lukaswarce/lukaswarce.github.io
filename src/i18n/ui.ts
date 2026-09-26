import { defaultLang, type Lang } from '../data/profile';

export const languages: Record<Lang, { label: string; short: string; locale: string }> = {
  es: { label: 'Español', short: 'ES', locale: 'es_ES' },
  en: { label: 'English', short: 'EN', locale: 'en_US' },
  fr: { label: 'Français', short: 'FR', locale: 'fr_CA' },
  pt: { label: 'Português', short: 'PT', locale: 'pt_BR' },
};

const es = {
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.experience': 'Experiencia',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'nav.label': 'Principal',
  'lang.label': 'Idioma',
  'hero.cta': 'Hablemos de negocios',
  'hero.secondary': 'Ver proyectos',
  'about.title': 'De programar productos a construir negocios',
  'about.pillars': 'Cómo aporto valor',
  'projects.title': 'Empresas y productos que he impulsado',
  'experience.title': 'Trayectoria',
  'experience.education': 'Formación',
  'contact.title': '¿Tienes un proyecto, una alianza o una inversión en mente?',
  'contact.text': 'Escríbeme y conversemos sobre cómo llevar tu idea al mercado.',
  'contact.cta': 'Escríbeme',
  'contact.social': 'Encuéntrame en',
  'meta.title': 'Christian Spana | Emprendedor tecnológico, IA y fintech B2B',
  'meta.description': 'Christian Spana, emprendedor tecnológico con más de 15 años en IA. Construye productos inteligentes y alianzas B2B entre Latinoamérica y Canadá.',
  'footer.rights': 'Todos los derechos reservados.',
  '404.title': 'Página no encontrada',
  '404.text': 'La página que buscas no existe.',
  '404.back': 'Volver al inicio',
};

type Dict = Record<keyof typeof es, string>;

const en: Dict = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.label': 'Main',
  'lang.label': 'Language',
  'hero.cta': "Let's talk business",
  'hero.secondary': 'See projects',
  'about.title': 'From coding products to building businesses',
  'about.pillars': 'How I add value',
  'projects.title': 'Companies and products I have driven',
  'experience.title': 'Track record',
  'experience.education': 'Education',
  'contact.title': 'Have a project, partnership or investment in mind?',
  'contact.text': "Write to me and let's talk about taking your idea to market.",
  'contact.cta': 'Email me',
  'contact.social': 'Find me on',
  'meta.title': 'Christian Spana | Tech Entrepreneur, AI and B2B Fintech',
  'meta.description': 'Christian Spana is a tech entrepreneur with 15+ years in AI, building intelligent products and B2B partnerships across Latin America and Canada.',
  'footer.rights': 'All rights reserved.',
  '404.title': 'Page not found',
  '404.text': 'The page you are looking for does not exist.',
  '404.back': 'Back to home',
};

const fr: Dict = {
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.experience': 'Parcours',
  'nav.projects': 'Projets',
  'nav.contact': 'Contact',
  'nav.label': 'Principale',
  'lang.label': 'Langue',
  'hero.cta': 'Parlons affaires',
  'hero.secondary': 'Voir les projets',
  'about.title': 'Du code aux entreprises',
  'about.pillars': 'Ce que j’apporte',
  'projects.title': 'Entreprises et produits que j’ai portés',
  'experience.title': 'Parcours',
  'experience.education': 'Formation',
  'contact.title': 'Un projet, un partenariat ou un investissement en tête ?',
  'contact.text': 'Écrivez-moi et voyons comment amener votre idée sur le marché.',
  'contact.cta': 'M’écrire',
  'contact.social': 'Retrouvez-moi sur',
  'meta.title': 'Christian Spana | Entrepreneur tech, IA et fintech B2B',
  'meta.description': 'Christian Spana, entrepreneur tech avec plus de 15 ans en IA, crée des produits intelligents et des partenariats B2B entre l’Amérique latine et le Canada.',
  'footer.rights': 'Tous droits réservés.',
  '404.title': 'Page introuvable',
  '404.text': 'La page que vous cherchez n’existe pas.',
  '404.back': 'Retour à l’accueil',
};

const pt: Dict = {
  'nav.home': 'Início',
  'nav.about': 'Sobre mim',
  'nav.experience': 'Experiência',
  'nav.projects': 'Projetos',
  'nav.contact': 'Contato',
  'nav.label': 'Principal',
  'lang.label': 'Idioma',
  'hero.cta': 'Vamos falar de negócios',
  'hero.secondary': 'Ver projetos',
  'about.title': 'De programar produtos a construir negócios',
  'about.pillars': 'Como gero valor',
  'projects.title': 'Empresas e produtos que impulsionei',
  'experience.title': 'Trajetória',
  'experience.education': 'Formação',
  'contact.title': 'Tem um projeto, uma parceria ou um investimento em mente?',
  'contact.text': 'Escreva para mim e vamos conversar sobre como levar sua ideia ao mercado.',
  'contact.cta': 'Escreva para mim',
  'contact.social': 'Me encontre no',
  'meta.title': 'Christian Spana | Empreendedor de tecnologia, IA e fintech B2B',
  'meta.description': 'Christian Spana, empreendedor de tecnologia com mais de 15 anos em IA, cria produtos inteligentes e parcerias B2B entre a América Latina e o Canadá.',
  'footer.rights': 'Todos os direitos reservados.',
  '404.title': 'Página não encontrada',
  '404.text': 'A página que você procura não existe.',
  '404.back': 'Voltar ao início',
};

export const ui: Record<Lang, Dict> = { es, en, fr, pt };

export type UIKey = keyof Dict;

export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key];

/** Ruta de la página de inicio en cada idioma: español en la raíz, el resto con prefijo. */
export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);
