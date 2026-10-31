import { CanActivateFn, Router } from '@angular/router';
import { LanguageService, Language } from './language.service';
import { inject } from '@angular/core';

export const languageGuard: CanActivateFn = (route) => {
  const languageService = inject(LanguageService);
  const router = inject(Router);

  const language = route.paramMap.get('lang');

  if (languageService.isSupported(language)) {
    languageService.setLanguage(language as Language);
    return true;
  }

  return router.createUrlTree(['/es']);
};