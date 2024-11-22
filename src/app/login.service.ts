import { Injectable } from '@angular/core';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email:any="";
   password:any="";
   isLoggedIn:boolean=false;
  constructor() { }

 userLoggedIn(user:any,passwords:any){
this.email=user;
this.password=passwords;
this.isLoggedIn=true;
}
isUserLoggedIn():boolean{
  return this.isLoggedIn;
}
userLogOut():void{
  this.isLoggedIn=false;
}
isAdminUser():boolean{
  console.log("un"+this.email)
  if(this.email="admin"){
    return true;
  }
  return false;
}
}
