
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ParkingDetailService {

  constructor() { }
  submitUserInformation(fullName: string, contact: string, carBrand: string, selectedSpot: string) {
    const UserDetails = [{
      fullName: fullName,
      contact: contact,
      carBrand: carBrand,
      selectedSpot: selectedSpot
    }];
  
    console.log('Full Name:', fullName);
    console.log('Contact:', contact);
    console.log('Car Brand:', carBrand);
    console.log('Selected Spot:', selectedSpot);
  }
  
}