import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, Presentacion, Tarjetas, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
