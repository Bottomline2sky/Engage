import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DloginService} from '../auth/dlogin/dlogin.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DlogInGuardService implements CanActivate {
  constructor(private dloginService : DloginService, private router: Router) {
  }
       canActivate(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
           if(this.dloginService.getToken() != null) {
                  return true;
       }
             else {
                  alert("Please LogIN first");
                this.router.navigate(['/dlogin']);
                return false;
           }
}

}
