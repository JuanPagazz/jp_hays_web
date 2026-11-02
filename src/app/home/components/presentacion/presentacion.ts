import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css',
})
export class Presentacion {
  readonly translations = inject(TranslationService)
}
