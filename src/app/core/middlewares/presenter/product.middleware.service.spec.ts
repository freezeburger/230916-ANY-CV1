import { TestBed } from '@angular/core/testing';

import { ProductMiddlewareService } from './product.middleware.service';

describe('ProductMiddlewareService', () => {
  let service: ProductMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
