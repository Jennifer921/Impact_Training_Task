import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateAdminGuard implements CanActivate {
  constructor(private profile:ProfileService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

      if(!this.profile.islogin()){
        alert('You are not logged in as administrator');
        this.router.navigate(["NutriLogin"],{queryParams:{retUrl:route.url}});
        return false;
      }

    return true;
  }

}
