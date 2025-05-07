import { CanActivateFn } from '@angular/router';

export const routerGuard: CanActivateFn = (route, state) => {
  if (sessionStorage) {
    return true
  } else {
    return false;
  }
};
