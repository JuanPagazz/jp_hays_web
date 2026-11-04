import { Component } from '@angular/core';
import { Header } from '../shared-c/header/header';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-hiring',
  imports: [Header, Hero],
  templateUrl: './hiring.html',
  styleUrl: './hiring.css',
})
export class Hiring {}
