import Image from 'next/image';

export type Photo = { src: string; alt: string; width: number; height: number; caption?: string };

/**
 * Rejilla para fotografías reales (retrato, trabajo, producto, viajes).
 * No se renderiza si no hay fotos: nunca se rellena con imágenes de stock.
 */
export function PhotoGrid({ photos }: { photos: Photo[] }) {
  if (!photos.length) return null;
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {photos.map((p) => (
        <li key={p.src}>
          <figure>
            <Image src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" className="h-auto w-full rounded-sm object-cover" />
            {p.caption && <figcaption className="mt-2 text-xs text-muted">{p.caption}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}
