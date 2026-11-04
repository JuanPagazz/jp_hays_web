import { Component, signal } from '@angular/core';
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
  readonly showIntro = signal(true);
  readonly closingIntro = signal(false);

  finishIntro(): void {
    this.closingIntro.set(true);

    window.setTimeout(() => {
      this.showIntro.set(false);
    }, 450);
  }
}
