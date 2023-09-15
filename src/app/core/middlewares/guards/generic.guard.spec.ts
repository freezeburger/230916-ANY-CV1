import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { genericGuard } from './generic.guard';

describe('genericGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => genericGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
