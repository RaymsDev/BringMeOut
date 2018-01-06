import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AlreadyLoginGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AlreadyLoginGuard#canActivate called');
        if(!this.isLoggedIn()){
            return true;
        }
        this.router.navigate(['/']);
        return false;
        
    }

    private isLoggedIn(): boolean{
        this.afAuth.auth.getRedirectResult()
        .then(success=>{
            console.log(success)
        })
        .catch(error=>{
            console.log(error)
        });
        return true;
    }
}