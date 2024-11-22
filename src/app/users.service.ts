import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';


@Injectable({
  providedIn:'root'
})
//forgot password
export class UsersService {
  declare:any="";
  declare1:any="";
constructor(private client:HttpClient,private http:HttpClient,private routes:Router) { }

addUserInformation(body:any){
 this.client.get<any>("http://localhost:3000/users").subscribe((data)=>{
   const store=data.find((store1:any)=>{
    this.declare=store1;
    this.declare1=this.declare.email;
    return store1.email==body;
   })
   if(store){
       this.routes.navigateByUrl('/NutriLogin/forgot/confirm');
   }
   else{
    alertyfy
    .alert("MailId not registered", function(){
      alertyfy.error('OK');
    });
   }
  })
}
sendMail(urL:any,userData:any){
    return this.client.post(urL,userData);
}

sendMail1(urL:any,userData:any){
  return this.client.post(urL,userData);
}
}
