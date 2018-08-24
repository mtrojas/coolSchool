import { TestBed, inject } from '@angular/core/testing';

import { SchoolSystemApiService } from './school-system-api.service';

describe('SchoolSystemApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolSystemApiService]
    });
  });

  it('should be created', inject([SchoolSystemApiService], (service: SchoolSystemApiService) => {
    expect(service).toBeTruthy();
  }));
});
