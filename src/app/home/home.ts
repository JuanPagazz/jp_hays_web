import { Component } from '@angular/core';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
import { Footer } from '../shared-c/footer/footer';
import { LanguageSelector } from '../shared-c/language-selector/language-selector';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Presentacion, Tarjetas, Footer, LanguageSelector],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
