import { TestBed } from '@angular/core/testing';

import { MovieUtilityService } from './movie-utility.service';

describe('MovieUtilityService', () => {
  let service: MovieUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
