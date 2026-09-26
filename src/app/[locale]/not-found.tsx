import { NotFoundView } from '@/views/NotFoundView';

export const metadata = { title: 'Página no encontrada', robots: { index: false } };

// Hoy solo hay un idioma con prefijo (es).
export default function NotFound() {
  return <NotFoundView locale="es" />;
}
