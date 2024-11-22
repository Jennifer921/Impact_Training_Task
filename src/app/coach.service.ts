import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoachService {
upiURL:string=environment.upiURL;
creditURL:string=environment.creditURL;
debitURL:string=environment.debitURL;
coachURL:string=environment.coachURL;
nutritionistURL:string=environment.nutritionistURL;
yogaURL:string=environment.yogaURL;
commURL:string=environment.commURL;
booknowURL:string=environment.booknowURL;
loginURL:string=environment.loginURL;
usersURL:string=environment.usersURL;
constructor(private client:HttpClient) { }


getNutritionist(){
  return this.client.get(this.nutritionistURL);
}

getYoga(){
  return this.client.get(this.yogaURL);
}

getSignup(){
  return this.client.get(this.usersURL+sessionStorage.getItem('userdata'));
}

getReview(){
  return this.client.get(this.loginURL);
}

getCoach(){
  return this.client.get(this.coachURL);
}

getComm(){
  return this.client.get(this.commURL);
}

getUpi(){
  return this.client.get(this.upiURL);
}

getDebit(){
  return this.client.get(this.debitURL);
}

getCredit(){
  return this.client.get(this.creditURL);
}

getbooknow(){
  return this.client.get(this.booknowURL);
}

feedback() {
  return this.client.get(this.booknowURL);
}

deleteService(email: any) {
   return this.client.delete(this.booknowURL + email);
}

deleteService1(email: any) {
  return this.client.delete(this.commURL + email);
}

}
