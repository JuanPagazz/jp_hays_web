import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-tarjetas',
  imports: [RouterLink],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {
  @Input() loadImages = true;

  readonly translations = inject(TranslationService)
}
