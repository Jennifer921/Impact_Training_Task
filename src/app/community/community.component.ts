import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import * as alertyfy from 'alertifyjs';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { NameWhiteSpace } from '../white.validator';
import { environment } from 'src/assets/environments/environment';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent {
commURL:string=environment.commURL;
  constructor(private fb:FormBuilder,private routes:Router,private http:HttpClient,private service:UsersService) {}
  comForm=this.fb.group({
    name: ['',[Validators.required,Validators.minLength(4),NameWhiteSpace.noSpaceAllowed]],
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
  });
  ngOnInit() {
  }
  gothere(){
    alertyfy.success('Have joined community');
      this.http.post<any>(this.commURL, this.comForm.value).subscribe(()=>{
      })
   }
   get name(){
    return this.comForm.get('name');
  }

}
