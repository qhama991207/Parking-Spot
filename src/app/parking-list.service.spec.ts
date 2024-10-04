import { TestBed } from '@angular/core/testing';

import { ParkingListService } from './parking-list.service';

describe('ParkingListService', () => {
  let service: ParkingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
