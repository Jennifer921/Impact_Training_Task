import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
constructor(private client:HttpClient,private routes:Router) { }
addUserInformation(read:any,read1:any,read2:any){
  this.client.get<any>("http://localhost:3000/users").subscribe((data)=>{
    const store=data.find((store1:any)=>{
     return store1.email==read2;
})

if(store){  
      this.client.patch("http://localhost:3000/users/"+read2,{password:read}).subscribe((value)=>{
       console.log(value);
      })   
      alertyfy
      .alert("Password changed succussfully", function(){
        alertyfy.success('OK');
      });
      this.routes.navigateByUrl("/NutriLogin");
    }
    else{
      alertyfy
      .alert("Please enter correctly", function(){
        alertyfy.error('OK');
      });
    }
   })
 }
 }
