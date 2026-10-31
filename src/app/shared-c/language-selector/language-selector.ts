import { Component, inject } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { Language,LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [MatButtonToggleModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css',
})
export class LanguageSelector {
  readonly languageService = inject(LanguageService);

  private readonly router = inject(Router);

  changeLanguage(event: MatButtonToggleChange): void {
    const language = event.value;

    if (!this.languageService.isSupported(language)) {
      return;
    }

    const currentUrl = this.router.url;
    const [pathWithQuery, fragment] = currentUrl.split('#', 2);
    const [path, queryString] = pathWithQuery.split('?', 2);

    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) {
      this.router.navigate(['/', language]);
      return;
    }

    if (this.languageService.isSupported(segments[0])) {
      segments[0] = language;
    } else {
      segments.unshift(language);
    }

    const nextPath = `/${segments.join('/')}`;
    const query = queryString ? `?${queryString}` : '';
    const nextFragment = fragment ? `#${fragment}` : '';

    this.router.navigateByUrl(`${nextPath}${query}${nextFragment}`);
  }
}