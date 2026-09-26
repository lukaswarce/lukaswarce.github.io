/**
 * Analítica respetuosa con la privacidad. No carga nada hasta que se elija un
 * proveedor en siteConfig.analytics. Los eventos se marcan en el HTML con
 * data-event="nombre" y data-event-*="valor"; un único listener los envía.
 *
 * Eventos previstos: cta_click, social_click, research_click, project_view,
 * article_view, contact_click.
 */
export type AnalyticsEvent =
  | 'cta_click'
  | 'social_click'
  | 'research_click'
  | 'project_view'
  | 'article_view'
  | 'contact_click';

type Props = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    umami?: { track: (event: string, data?: Props) => void };
  }
}

export function track(event: AnalyticsEvent | string, props: Props = {}) {
  if (typeof window === 'undefined') return;
  window.plausible?.(event, { props });
  window.umami?.track(event, props);
}

/** Atributos para marcar un enlace o botón como evento medible. */
export const eventAttrs = (event: AnalyticsEvent, props: Props = {}) => ({
  'data-event': event,
  ...Object.fromEntries(Object.entries(props).map(([k, v]) => [`data-event-${k}`, v])),
});
