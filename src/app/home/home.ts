import { Component, HostListener, signal } from '@angular/core';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
import { Footer } from '../shared-c/footer/footer';
import { LanguageSelector } from '../shared-c/language-selector/language-selector';
import { Intro } from './components/intro/intro';
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

  @HostListener('document:pointermove', ['$event'])
  updateMousePosition(event: PointerEvent): void {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }

  finishIntro(): void {
    this.closingIntro.set(true);

    window.setTimeout(() => {
      this.showIntro.set(false);
    }, 450);
  }
}
