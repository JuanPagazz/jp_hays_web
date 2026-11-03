import { Component, output, inject, HostListener } from '@angular/core';
import { LanguageSelector } from '../../../shared-c/language-selector/language-selector';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-intro',
  imports: [LanguageSelector],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  readonly translations = inject(TranslationService)
  readonly completed = output<void>();

  @HostListener('document:pointermove', ['$event'])
  updateMousePosition(event: PointerEvent): void {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }

  continue(): void {
    this.completed.emit();
  }
}
