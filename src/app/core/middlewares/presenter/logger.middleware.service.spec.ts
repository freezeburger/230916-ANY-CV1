import { TestBed } from '@angular/core/testing';

import { LoggerMiddlewareService } from './logger.middleware.service';

describe('LoggerMiddlewareService', () => {
  let service: LoggerMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
