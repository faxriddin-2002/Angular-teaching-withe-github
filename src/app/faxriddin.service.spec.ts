import { TestBed } from '@angular/core/testing';

import { FaxriddinService } from './faxriddin.service';

describe('FaxriddinService', () => {
  let service: FaxriddinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaxriddinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
