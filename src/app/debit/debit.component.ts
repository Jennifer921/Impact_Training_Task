import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import {futureDateValidator} from '../passcheck.validator';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  debitURL:string=environment.debitURL;
  debitForms =this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{3,12}$")]],
    cnumber:['',[Validators.required,Validators.maxLength(16)]],
    dates:['',[Validators.required],futureDateValidator],
    // cvv:['',[Validators.required,Validators.maxLength(16)]],
    type:['',[Validators.required]],
   })

  constructor(private fb:FormBuilder,private routes:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  bill(){

    this.http.post<any>(this.debitURL,this.debitForms.value).subscribe(()=>{});
    alert("Payment received");
    this.routes.navigate(['/']);
  }

  get username(){
    return this.debitForms.get('username');
  }

  get type(){
    return this.debitForms.get('type');
  }
  get cnumber(){
    return this.debitForms.get('cnumber');
  }

  get date(){
    return this.debitForms.get('date');
  }

  get cvv(){
    return this.debitForms.get('cvv');
  }
}
