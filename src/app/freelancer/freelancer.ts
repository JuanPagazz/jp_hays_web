import { Component } from '@angular/core';
import { Header } from '../shared-c/header/header';
import { CardsNav } from '../shared-c/cards-nav/cards-nav';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-freelancer',
  imports: [Header, CardsNav, Hero],
  templateUrl: './freelancer.html',
  styleUrl: './freelancer.css',
})
export class Freelancer {}
