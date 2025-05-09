import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const routerGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if (sessionStorage.getItem('Login') || localStorage.getItem('autoLogin')) {
    return true
  } else {
    router.navigate(['/login']);
    return false;
  }
};
