import { TestBed } from '@angular/core/testing';

import { AnyNameNewService } from './any-name-new-service.service';

describe('AnyNameNewService', () => {
  let service: AnyNameNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyNameNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
