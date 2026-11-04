import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
import { Footer } from '../shared-c/footer/footer';
import { Header } from '../shared-c/header/header';
import { Intro } from './components/intro/intro';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Presentacion, Tarjetas, Footer, Header, Intro],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly platformId = inject(PLATFORM_ID);
  readonly showIntro = signal (
    !isPlatformBrowser(this.platformId) || window.history.state?.skipIntro !== true
  );
  readonly closingIntro = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId) && window.history.state?.skipIntro === true) {
      const {skipIntro, ...state } = window.history.state;
      window.history.replaceState(state, '', window.location.href);
    }
  }

  finishIntro(): void {
    this.closingIntro.set(true);

    window.setTimeout(() => {
      this.showIntro.set(false);
    }, 450);
  }
}
