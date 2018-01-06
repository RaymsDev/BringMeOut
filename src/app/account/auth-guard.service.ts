import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, take,tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < boolean > {
    return this.authService.user$.pipe(
      take(1),
      map(user => user ? true : false),
      tap(isLogin => {
        if (!isLogin) {
          console.error('ACCESS DENIED!');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

