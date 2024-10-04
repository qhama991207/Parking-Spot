import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  parkingDetailService = inject(ParkingDetailService);
  parkingListService = inject(ParkingListService);

  userForm = new FormGroup({
    userName: new FormControl('', Validators.required), 
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern(/^0[1-9][0-9]{8}$/)
    ]),
    selectedSpace: new FormControl(null) 
  });

  get availableSpaces(): any[] {
    return this.parkingListService.getAvailableSpaces(); 
  }

  submitData(): void {
    const selectedSpace = this.userForm.value.selectedSpace;
    if (selectedSpace) {
      this.parkingDetailService.submitData(
        this.userForm.value.userName ?? '',
        this.userForm.value.contact ?? '',
        selectedSpace 
      );
      this.parkingListService.reserveSpace(selectedSpace); 
      this.userForm.reset({
        userName: '',
        contact: '',
        selectedSpace: null 
      });
    } else { 
      console.error('Selected space is undefined or null');
    }
  }
}
