import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import {futureDateValidator} from '../passcheck.validator';
import { environment } from 'src/assets/environments/environment';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  creditURL:string=environment.creditURL;
  creditForms =this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{3,12}$")]],
    cnumber:['',[Validators.required,Validators.maxLength(16)]],
    dates:['',Validators.required,futureDateValidator],
    // cvv:['',[Validators.required,Validators.maxLength(16)]],
    type:new FormControl('',[Validators.required]),
   })

  constructor(private fb:FormBuilder,private routes:Router,private http:HttpClient) { }
  ngOnInit() {
  }

  bill(){
    this.http.post<any>(this.creditURL,this.creditForms.value).subscribe(()=>{});
    alert("Payment received");
    this.routes.navigate(['/']);
  }

  get username(){
    return this.creditForms.get('username');
  }
  get type(){
    return this.creditForms.get('type');
  }
  get cnumber(){
    return this.creditForms.get('cnumber');
  }

  get date(){
    return this.creditForms.get('date');
  }

  get cvv(){
    return this.creditForms.get('cvv');
  }
}
