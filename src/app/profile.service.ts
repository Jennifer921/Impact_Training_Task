import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  constructor(private client:HttpClient,private routes:Router) { }
  private login:any;
  public islogin(){
    if(this.login == null){
      return false;
    }
    return true;
  }
  public load(data:any){
    this.login = data;
  }
  public getname(){
    if(this.login == null){
      return false;
    }
    return this.login;
  }

}
