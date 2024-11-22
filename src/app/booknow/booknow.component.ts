import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { StoreService } from '../store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    //  RegForm=new FormGroup({
//     username: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     dob: new FormControl('',[Validators.required,]),
//     weight:new FormControl('',[Validators.required,]),
//     height:new FormControl('',[Validators.required,]),
//     gender:new FormControl('',[Validators.required,]),
//     slot:new FormControl('',[Validators.required,]),
//     desc:new FormControl('',[Validators.required,])

//    })
//     constructor(private fb:FormBuilder,private storeService:StoreService,private http:HttpClient) {}

//     get username(){
//       return this.RegForm.get('username');
//     }
//     get email(){
//       return this.RegForm.get('email');
//     }
//     get weight(){
//       return this.RegForm.get('weight');
//     }
//     get height(){
//       return this.RegForm.get('height');
//     }

//    submitForm(){
//     this.http.post<any>("http://localhost:3000/booknow", this.RegForm.value).subscribe(()=>{
//       alert("Soon,Will be in touch");
//    })
//    }

  }

