import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl, NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email: any = "";
  constructor(private form: FormBuilder,private usersService:UsersService) { }

  ngOnInit() {
  }

  forgotforms = this.form.group({
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
  });

set(){
 const read=this.forgotforms.controls['email'].value;
 console.log(this.forgotforms.value);
  this.usersService.addUserInformation(read);
}
}
