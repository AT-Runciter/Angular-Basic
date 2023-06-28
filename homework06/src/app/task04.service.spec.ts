import { TestBed } from '@angular/core/testing';

import { Task04Service } from './task04.service';

describe('Task04Service', () => {
  let service: Task04Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task04Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
