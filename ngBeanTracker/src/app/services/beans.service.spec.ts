import { TestBed } from '@angular/core/testing';

import { BeansService } from './beans.service';

describe('BeansService', () => {
  let service: BeansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
