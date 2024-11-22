import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { environment } from 'src/assets/environments/environment';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {
  temp1:any;
  upiURL:string=environment.upiURL;
  upiForms =this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{3,12}$")]],
    id:['',[Validators.required]],
   })

  constructor(private fb:FormBuilder,private routes:Router,private http:HttpClient) { }

  ngOnInit() {

  }

  get email(){
    return this.upiForms.get('username');
  }

  bill(){
  var upis:any={
    upi:this.upiForms.controls['username'].value

  }
this.http.post<any>(this.upiURL,this.upiForms.value).subscribe(()=>{})

  this.temp1=sessionStorage.getItem('userdata');
  this.http.patch("https://localhost:3000/users/"+this.temp1,{upi:[upis]}).subscribe((y)=>{
    console.log(y);
  })
     alert("Payment received");
     this.routes.navigate(['/']);
  }
}
