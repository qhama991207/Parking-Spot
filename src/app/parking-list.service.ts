import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingListService {
  spots = [
    { name: 'Spot1', selected: false },
    { name: 'Spot2', selected: false },
    {name: 'Spot3', selected:false},
    {name: 'Spot4', selected:false},
    {name: 'Spot5', selected:false},
    {name: 'Spot6', selected:false},
    {name: 'Spot7', selected:false},
    {name: 'Spot8', selected:false},
    {name: 'Spot9', selected:false},
    {name: 'Spot10', selected:false},
    {name: 'Spot11', selected:false},
    {name: 'Spot12', selected:false},
    {name: 'Spot13', selected:false},
    {name: 'Spot14', selected:false},
    {name: 'Spot15', selected:false},
    {name: 'Spot16', selected:false},
    {name: 'Spot17', selected:false},
    {name: 'Spot18', selected:false},
    {name: 'Spot19', selected:false},
    {name: 'Spot20', selected:false}
  ];
  get availableSpots(): any[] {
    return this.spots.filter(spot => !spot.selected);
  }
  selectSpot(spotName: string): void {
    const spot = this.spots.find(spot => spot.name === spotName);
    if (spot) {
      spot.selected = true;
    }
  }

  deselectSpot(spotName: string): void {
    const spot = this.spots.find(spot => spot.name === spotName);
    if (spot) {
      spot.selected = false;
    }
  }
}