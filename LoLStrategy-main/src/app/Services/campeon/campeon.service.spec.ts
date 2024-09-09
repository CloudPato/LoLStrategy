import { TestBed } from '@angular/core/testing';

import { CampeonService } from './campeon.service';

describe('CampeonService', () => {
  let service: CampeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
