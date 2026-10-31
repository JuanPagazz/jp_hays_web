import { DOCUMENT,} from '@angular/common';
import { computed, inject, Injectable, signal,} from '@angular/core';

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  private readonly currentLanguage = signal<Language>('es');

  readonly language = this.currentLanguage.asReadonly();

  readonly isSpanish = computed(() => {
    return this.currentLanguage() === 'es';
  });

  readonly isEnglish = computed(() => {
    return this.currentLanguage() === 'en';
  });

  isSupported(value: string | null): value is Language {
    return SUPPORTED_LANGUAGES.includes(value as Language);
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.document.documentElement.lang = language;
  }
}