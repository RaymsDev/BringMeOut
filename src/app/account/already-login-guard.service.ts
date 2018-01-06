import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AlreadyLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    console.log('Guard@AlreadyLoginGuard is called!');
    return this.authService.user$.pipe(
      take(1),
      map(user => user ? false : true),
      tap(isLogout => {
        if(!isLogout){
            console.error('USER ALREADY LOGIN!');
            this.router.navigate(['/']);
        }
      })
    );
  }
}
