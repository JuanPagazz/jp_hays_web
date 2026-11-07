import { computed, inject, Injectable} from '@angular/core';
import { LanguageService } from './language.service';
import { homeEn } from '../../home/i18n/home.en';
import { homeEs } from '../../home/i18n/home.es';
import { freelancerEn } from '../../freelancer/i18n/freelancer.en';
import { freelancerEs } from '../../freelancer/i18n/freelancer.es';
import { hiringEs } from '../../hiring/i18n/hiring.es';
import { hiringEn } from '../../hiring/i18n/hiring.en';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly languageService = inject(LanguageService);

  readonly home = computed(() => {
    if (this.languageService.language() === 'en') {
      return homeEn;
    }

    return homeEs;
  });

  readonly freelancer = computed(() => {
    if (this.languageService.language() === 'en') {
      return freelancerEn;
    }

    return freelancerEs
  })

  readonly hiring = computed(() => {
    if (this.languageService.language() === 'en') {
      return hiringEn;
    }

    return hiringEs
  })
}