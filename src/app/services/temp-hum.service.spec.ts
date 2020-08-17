import { TestBed } from '@angular/core/testing';

import { TempHumService } from './temp-hum.service';

describe('TempHumService', () => {
  let service: TempHumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempHumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
