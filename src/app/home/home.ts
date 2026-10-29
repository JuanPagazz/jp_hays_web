import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { Presentacion } from './components/presentacion/presentacion';
import { Tarjetas } from './components/tarjetas/tarjetas';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, Presentacion, Tarjetas],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
