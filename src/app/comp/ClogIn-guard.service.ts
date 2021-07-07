import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CloginService} from '../auth/clogin/clogin.service';

@Injectable({providedIn: 'root'})
export class ClogInGuardService implements CanActivate {
  constructor(private cloginService : CloginService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.cloginService.getToken() != null) {
      return true;
    }
    else {
      alert("Please LogIn first");
      this.router.navigate(['/clogin']);
      return false;
    }
  }
}
