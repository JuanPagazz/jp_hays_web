import { Component } from '@angular/core';
import { Header } from '../shared-c/header/header';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-freelancer',
  imports: [Header, Hero],
  templateUrl: './freelancer.html',
  styleUrl: './freelancer.css',
})
export class Freelancer {}
