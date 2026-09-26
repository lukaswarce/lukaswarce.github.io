/** Perfiles públicos proporcionados por Christian. Solo estos se usan en `sameAs`. */

export type SocialKey =
  | 'linkedin'
  | 'github'
  | 'instagram'
  | 'x'
  | 'youtube'
  | 'scholar'
  | 'orcid'
  | 'researchgate'
  | 'substack'
  | 'tiktok'
  | 'threads'
  | 'facebook'
  | 'pinterest';

export type Social = {
  key: SocialKey;
  label: string;
  url: string;
  group: 'primary' | 'research' | 'writing' | 'social';
};

export const socials: Social[] = [
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/lukaswarce', group: 'primary' },
  { key: 'github', label: 'GitHub', url: 'https://github.com/lukaswarce', group: 'primary' },
  { key: 'instagram', label: 'Instagram', url: 'https://instagram.com/lukaswarce', group: 'primary' },
  { key: 'x', label: 'X', url: 'https://x.com/lukaswarce', group: 'primary' },
  { key: 'youtube', label: 'YouTube', url: 'https://youtube.com/@lukaswarce', group: 'primary' },
  { key: 'scholar', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=smEA8i4AAAAJ', group: 'primary' },
  { key: 'orcid', label: 'ORCID', url: 'https://orcid.org/0000-0001-8726-4911', group: 'research' },
  { key: 'researchgate', label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Christian-Spana-2', group: 'research' },
  { key: 'substack', label: 'Substack', url: 'https://lukaswarce.substack.com/', group: 'writing' },
  { key: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@lukaswarce', group: 'social' },
  { key: 'threads', label: 'Threads', url: 'https://threads.net/@lukaswarce', group: 'social' },
  { key: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/lukaswarce/', group: 'social' },
  { key: 'pinterest', label: 'Pinterest', url: 'https://pin.it/6BzHPzXiV', group: 'social' },
];

export const getSocials = (...keys: SocialKey[]) =>
  keys.map((k) => socials.find((s) => s.key === k)).filter((s): s is Social => Boolean(s));

export const primarySocials = getSocials('linkedin', 'github', 'instagram', 'x', 'youtube', 'scholar');
export const researchSocials = getSocials('scholar', 'orcid', 'researchgate', 'github');
export const socialSocials = getSocials('instagram', 'x', 'tiktok', 'youtube', 'threads');
