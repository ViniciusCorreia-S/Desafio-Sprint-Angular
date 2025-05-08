import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const routerGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if (sessionStorage.length > 0) {
    return true
  } else {
    router.navigate(['/login']);
    return false;
  }
};
