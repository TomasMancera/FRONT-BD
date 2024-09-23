import { TestBed } from '@angular/core/testing';

import { ConeccionApiService } from './coneccion-api.service';

describe('ConeccionApiService', () => {
  let service: ConeccionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConeccionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
