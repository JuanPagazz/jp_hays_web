import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { Presentacion } from './components/presentacion/presentacion';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, Presentacion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
