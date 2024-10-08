
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ParkingDetailService {

  constructor() { }
  submitUserInformation(Name: string, Surname: string, Email: string, carColour: string, contact: string, carBrand: string, registrationNumber: string, selectedSpot: string) {
    const UserDetails = [{
      Name: Name,
      Surname: Surname,
      Email: Email,
      contact: contact,
      carColour: carColour,
      carBrand: carBrand,
      registrationNumber: registrationNumber,
      selectedSpot: selectedSpot
    }];
  
    console.log('Name:', Name);
    console.log('Surname:', Surname);
    console.log('Email:', Email);
    console.log('carColour:', carColour);
    console.log('Contact:', contact);
    console.log('Car Brand:', carBrand);
    console.log('registrationNumber:', registrationNumber);
    console.log('Selected Spot:', selectedSpot);
  }
  
}