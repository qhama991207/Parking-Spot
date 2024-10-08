
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingDetailComponent, ParkingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Parking Spot";

  
}

