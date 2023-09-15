import { CanMatchFn } from '@angular/router';

export const genericGuard: CanMatchFn = (route, segments) => {
  return false;
};
