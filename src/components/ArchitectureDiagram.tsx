import { chaucherosArchitecture } from '@/content/ventures';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

/** Diagrama conceptual de Chaucheros: del canal al resultado. */
export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  return (
    <figure aria-labelledby="arch-caption" className="rounded-sm border border-line bg-bg p-5 sm:p-7">
      <ol className="flex flex-col items-stretch">
        {chaucherosArchitecture.map((step, i) => (
          <li key={step.label} className="flex flex-col items-center">
            {i > 0 && (
              <span aria-hidden="true" className="block h-4 w-px bg-line" />
            )}
            {step.items ? (
              <div className="w-full">
                <p className="sr-only">{step.label}:</p>
                <ul className="grid grid-cols-3 gap-2">
                  {step.items.map((it) => (
                    <li key={it} className="rounded-sm border border-accent/40 bg-accent/5 px-2 py-2 text-center font-mono text-[0.68rem] leading-tight text-fg sm:text-xs">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <span
                className={`w-full rounded-sm border px-3 py-2 text-center font-mono text-xs ${
                  step.label === 'BEAGLE AI' ? 'border-fg bg-fg text-bg' : 'border-line text-fg-soft'
                }`}
              >
                {step.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption id="arch-caption" className="mt-5 text-xs text-muted">
        {getDictionary(locale).architecture}
      </figcaption>
    </figure>
  );
}
