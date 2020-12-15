import { TestBed } from '@angular/core/testing';

import { InterestingPlacesService } from './interesting-places.service';

describe('InterestingPlacesService', () => {
  let service: InterestingPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestingPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
