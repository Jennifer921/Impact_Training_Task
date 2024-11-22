import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { UsersService } from '../users.service';
import * as alertyfy from 'alertifyjs';
import { Router, Routes } from '@angular/router';
import { ConfirmedValidator } from '../passcheck.validator';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  usersURL:string=environment.usersURL;
  constructor( private usersservice:UsersService,private formBuilder:FormBuilder,private routes:Router,private http:HttpClient) { }

  // loginForm =new FormGroup({
  //   username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.pattern ('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]),
  //   mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
  //  })

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{4,12}$")]],
    email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
    cpassword: ['', [Validators.required]]
  }, { validator: ConfirmedValidator('password', 'cpassword') })

  ngOnInit():void {

  }

  visible:boolean=true;
changetype:boolean=true;
viewpassword(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}


  signUp() {
    this.http.get<any>(this.usersURL).subscribe(res => {
      const user = res.find((result: any) => {
        return result.email === this.registerForm.value.email;
      });
      if (user) {
        alert("Email Already Exists");
      }
      else {
        this.http.post<any>(this.usersURL, this.registerForm.value)
          .subscribe((data) => {
            alertyfy
            .alert("Check mail.SignedUp successfully", function(){
              alertyfy.success('OK');
            });
            this.routes.navigate(['/NutriLogin']);
          });
        }
     });

     let list={
      username1:this.registerForm.value.username,
      email1:this.registerForm.value.email,
      password1:this.registerForm.value.password,
     }
     this.usersservice.sendMail("http://localhost:222/sendmail",list).subscribe((data)=>{});
  }
}
