import { Component, signal } from '@angular/core';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
import { Footer } from '../shared-c/footer/footer';
import { LanguageSelector } from '../shared-c/language-selector/language-selector';
import { Intro } from '../intro/intro';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Presentacion, Tarjetas, Footer, LanguageSelector, Intro],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly showIntro = signal(true);
  readonly closingIntro = signal(false);

  finishIntro(): void {
    this.closingIntro.set(true);

    window.setTimeout(() => {
      this.showIntro.set(false);
    }, 450);
  }
}
