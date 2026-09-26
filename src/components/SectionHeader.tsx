import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  action?: ReactNode;
  as?: 'h1' | 'h2';
  id?: string;
};

export function SectionHeader({ eyebrow, title, intro, action, as: Tag = 'h2', id }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <Tag id={id} className={`display ${Tag === 'h1' ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl'} leading-[1.02]`}>
          {title}
        </Tag>
        {intro && <p className="mt-5 max-w-2xl text-lg text-fg-soft">{intro}</p>}
      </div>
      {action && <div className="md:col-span-4 md:justify-self-end">{action}</div>}
    </div>
  );
}
