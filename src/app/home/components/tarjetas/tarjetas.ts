import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-tarjetas',
  imports: [],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {
  readonly translations = inject(TranslationService)
}
