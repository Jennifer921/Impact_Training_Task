import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl, NgForm } from '@angular/forms';
import { ResetService } from '../reset.service';
import { UsersService } from '../users.service';
import { ConfirmedValidator } from '../passcheck.validator';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  constructor(private form:FormBuilder,private service:ResetService,private userservice:UsersService) { }
  confirmForms = this.form.group({
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
  get password(){
    return this.confirmForms.get('password');
  }
  get cpassword(){
    return this.confirmForms.get('cpassword');
  }

set(){
    const read=this.confirmForms.controls['password'].value;
    const read1=this.confirmForms.controls['cpassword'].value;
    const read2= this.userservice.declare1;
    this.service.addUserInformation(read,read1,read2);
   }
}
