import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public storage: Storage) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AuthGuard');
    return new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        console.log('storage ready');
        this.storage.get('currentUser').then((val) => {
          console.log('currentUser', val);
          if (val) {
            resolve(true);
          } else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            resolve(false);
          }
        });
      });
    });

  }
}
