import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl, MaxLengthValidator} from '@angular/forms';
import { StoreService } from '../store.service';
import { HttpClient } from '@angular/common/http';
import { IDeactivateComponent } from '../deactivate.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import {futureDateValidator} from '../passcheck.validator';
import { UsersService } from '../users.service';
import { environment } from 'src/assets/environments/environment';
import { NameWhiteSpace } from '../white.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class RegistrationComponent  implements IDeactivateComponent{
  booknowURL:string=environment.booknowURL;
  temp1:any;
  constructor(private usersservice:UsersService,private fb:FormBuilder,private profile:ProfileService,private http:HttpClient,private router:Router) { }

 RegForm=this.fb.group({
  username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{3,12}$"),NameWhiteSpace.noSpaceAllowed]],
  email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
  dob: ['',[Validators.required,futureDateValidator]],
  weight: ['', [Validators.required, Validators.min(3), Validators.max(150)]],
  height:['',[Validators.required,Validators.min(30), Validators.max(200)]],
  slot:['',[Validators.required]],
  desc:['',[Validators.required]],
  motive:['',[Validators.required]]
 })

  get username(){
    return this.RegForm.get('username');
  }
  get email(){
    return this.RegForm.get('email');
  }
  get weight(){
    return this.RegForm.get('weight');
  }
  get height(){
    return this.RegForm.get('height');
  }

// ClientDetails(){
// username:this.RegForm.controls['username'].value;
// email:this.RegForm.controls['email'].value;
// weight:this.RegForm.controls['weight'].value;
// height:this.RegForm.controls['height'].value;
// dob:this.RegForm.controls['dob'].value;
// slot:this.RegForm.controls['slot'].value;
// desc:this.RegForm.controls['desc'].value;
// motive:this.RegForm.controls['motive'].value;
// }

submitForm(){
  var details:any={
    username:this.RegForm.controls['username'].value,
    email:this.RegForm.controls['email'].value,
    weight:this.RegForm.controls['weight'].value,
    height:this.RegForm.controls['height'].value,
    dob:this.RegForm.controls['dob'].value,
    slot:this.RegForm.controls['slot'].value,
    desc:this.RegForm.controls['desc'].value,
    motive:this.RegForm.controls['motive'].value
  }

  this.temp1=sessionStorage.getItem('userdata');
  console.log(this.temp1);
  this.http.patch("http://localhost:3000/users/"+this.temp1,{booknow:[details]}).subscribe(info=>{
    console.log(info);
  });
  // this.http.post<any>("http://localhost:3000/tempo", this.RegForm.value).subscribe((data)=>{
  //   })

  this.http.post<any>(this.booknowURL, this.RegForm.value).subscribe((data1)=>{
     })

     alert("Check mail for verification");
     this.router.navigate(['/registration/thankyou']);


     let list1={
      username2:this.RegForm.value.username,
      email2:this.RegForm.value.email,
      slot:this.RegForm.value.dob,
     }

     this.usersservice.sendMail1("http://localhost:222/sendmail1",list1).subscribe((data)=>{});
     }

//  canExit() :boolean{
//   console.log("Can Exit Register");
//   if(confirm("you are about to leave registration page .press 'yes' to continue")){
//     return true;
//   }
//   else{
//   return false;
//  }
// }

canExit():boolean{
if(this.RegForm.value){
  return confirm('ddd');
}else{
  return false;
}
}
}
