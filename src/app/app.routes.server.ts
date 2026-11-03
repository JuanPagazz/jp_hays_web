import { RenderMode, ServerRoute } from '@angular/ssr';

const getLanguageParams = async (): Promise<Record<string, string>[]> => [
  { lang: 'es' },
  { lang: 'en' },
];

export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getLanguageParams,
  },
  {
    path: ':lang/freelancer',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getLanguageParams,
  },
  {
    path: ':lang/hiring',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getLanguageParams,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
