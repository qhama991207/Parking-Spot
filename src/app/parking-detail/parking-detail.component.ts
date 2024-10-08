import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParkingDetailService } from '../parking-detail.service';
import { ParkingListService } from '../parking-list.service';
@Component({
  selector: 'app-parking-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.css']
})
export class ParkingDetailComponent {
  formService = inject(ParkingDetailService);
  parkingService = inject(ParkingListService);
  userForm = new FormGroup({
    fullName: new FormControl(''),
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern(/^0[1-9][0-9]{8}$/)
  ]),
    carBrand: new FormControl(''),
    selectSpot: new FormControl('')});
get availableSpots(): any[] {
    return this.parkingService.availableSpots;
  }
  submitUserInformation() {
    const selectedSpot = this.userForm.value.selectSpot;
    if (selectedSpot) {
      this.formService.submitUserInformation(
        this.userForm.value.fullName ?? '',
        this.userForm.value.contact ?? '',
        this.userForm.value.carBrand ?? '',
        selectedSpot
      );
      this.parkingService.selectSpot(selectedSpot);
      this.userForm.reset({
        fullName: '',
        contact: '',
        carBrand: '',
        selectSpot: ''
      });
    } else {
      console.error('Selected spot is undefined or null');
    }
  }
}

interface User {
  fullName: string;
  contact: string;
  carBrand: string;
  selectedSpot: string;
}