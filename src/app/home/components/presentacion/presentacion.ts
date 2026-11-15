import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css',
})
export class Presentacion {
  @Input() loadImages = true;

  readonly translations = inject(TranslationService)
}
