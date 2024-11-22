import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { ProfileService } from './profile.service';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private profile:ProfileService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(!this.profile.islogin()){
        //alert('Kindly,Login to view the page');
        alertyfy
  .alert("Kindly,Login to view the page", function(){
    alertyfy.success('OK');
  });
        this.router.navigate(["NutriLogin"],{queryParams:{retUrl:route.url}});
        return false;
      }
    return true;
  }
}
