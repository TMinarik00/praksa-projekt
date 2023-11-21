import { TestBed } from '@angular/core/testing';

import { TimoviService } from './timovi.service';

describe('TimoviService', () => {
  let service: TimoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
