import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-cards-nav',
  imports: [MatIconModule, RouterLink],
  templateUrl: './cards-nav.html',
  styleUrl: './cards-nav.css',
})
export class CardsNav {
  @Input() variant: 'freelancer' | 'hiring' = 'freelancer';

  readonly languageService = inject(LanguageService);
  readonly translations = inject(TranslationService);
}
