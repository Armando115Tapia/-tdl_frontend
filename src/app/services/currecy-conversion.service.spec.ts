import { TestBed } from '@angular/core/testing';

import { CurrecyConversionService } from './currecy-conversion.service';

describe('CurrecyConversionService', () => {
  let service: CurrecyConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrecyConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
