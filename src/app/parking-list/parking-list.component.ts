import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { ParkingListService } from '../parking-list.service';
@Component({
  selector: 'app-parking-list',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent {
  parkingService = inject(ParkingListService);

  get spots(): any[] {
    return this.parkingService.spots;
  }

  getSpotClass(spot: any): string {
    return spot.selected ? 'spot-unavailable' : 'spot-available';
  }
}