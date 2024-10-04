import { TestBed } from '@angular/core/testing';

import { ParkingDetailService } from './parking-detail.service';

describe('ParkingDetailService', () => {
  let service: ParkingDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
