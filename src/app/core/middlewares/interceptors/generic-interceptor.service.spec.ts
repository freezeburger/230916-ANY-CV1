import { TestBed } from '@angular/core/testing';

import { GenericInterceptorService } from './generic-interceptor.service';

describe('GenericInterceptorService', () => {
  let service: GenericInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
