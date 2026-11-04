import { Component } from '@angular/core';
import { LanguageSelector } from '../language-selector/language-selector';

@Component({
  selector: 'app-header',
  imports: [LanguageSelector],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
