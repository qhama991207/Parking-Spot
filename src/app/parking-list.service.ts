import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingListService {
  reserveSpace(selectedSpace: never) {
    throw new Error('Method not implemented.');
  }
  getAvailableSpaces(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
