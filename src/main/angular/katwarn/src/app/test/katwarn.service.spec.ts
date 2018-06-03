import { TestBed, inject } from '@angular/core/testing';

import { KatwarnService } from '../service/katwarn.service';

describe('KatwarnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KatwarnService]
    });
  });

  it('should be created', inject([KatwarnService], (service: KatwarnService) => {
    expect(service).toBeTruthy();
  }));
});
