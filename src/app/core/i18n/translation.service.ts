import { computed, inject, Injectable} from '@angular/core';
import { LanguageService } from './language.service';
import { homeEn } from '../../home/i18n/home.en';
import { homeEs } from '../../home/i18n/home.es';

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
}