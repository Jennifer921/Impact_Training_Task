import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signUpp',
  templateUrl: './signUpp.component.html',
  styles:[`input.ng-invalid{border-right:5px solid red;}

  input.ng-valid{border-right:5px solid green;}`]

})

export class SignUppComponent  {

  constructor(private fb:FormBuilder, private router:Router, private http:HttpClient) { }


  regForm1=this.fb.group({
    username:["",[Validators.required,Validators.pattern("([a-zA-Z ]{3,20})")]],
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    password:["",[Validators.required,Validators.pattern("^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$")]],
    cpassword:["",[Validators.required]]});
  // },{validator:ConfirmedValidator('password','cpassword')});

  submitForm(){
  this.http.post<any>("http://localhost:3000/users", this.regForm1.value).subscribe(() => {
      alert("Form submitted Successfully, Now Login please");
      this.router.navigateByUrl('/Login');
});
}
}
