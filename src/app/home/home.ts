import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
