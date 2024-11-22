import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
close:boolean=true;
constructor(private client:HttpClient,private routes:Router) { }

addStoreInformation(body:any){
  return this.client.post("http://localhost:3000/login",body)
}


}
