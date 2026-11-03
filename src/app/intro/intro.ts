import { Component, output, inject } from '@angular/core';
import { LanguageSelector } from '../shared-c/language-selector/language-selector';
import { TranslationService } from '../core/i18n/translation.service';

@Component({
  selector: 'app-intro',
  imports: [LanguageSelector],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  readonly translations = inject(TranslationService)
  readonly completed = output<void>();

  continue(): void {
    this.completed.emit();
  }
}
