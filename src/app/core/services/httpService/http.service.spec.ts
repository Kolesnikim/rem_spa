import { TestBed } from '@angular/core/testing';

import { HttpSettingsService } from './http-settings.service';

describe('HttpSettingsService', () => {
  let service: HttpSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
