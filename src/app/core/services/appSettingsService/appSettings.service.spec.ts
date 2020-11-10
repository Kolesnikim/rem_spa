import { TestBed } from '@angular/core/testing';

import { AppSettingsService } from './appSettings.service';

describe('RoutingService', () => {
  let service: AppSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
