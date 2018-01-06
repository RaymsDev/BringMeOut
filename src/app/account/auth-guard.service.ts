import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');
        if(!this.isLoggedIn()){
            this.router.navigate(['/login']);
        }
        return this.isLoggedIn();
    }

    isLoggedIn():boolean{
        return this.afAuth.auth.currentUser ? true: false;
    }
}