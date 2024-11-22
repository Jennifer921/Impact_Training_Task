import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import * as alertyfy from 'alertifyjs';
import { CoachService } from '../coach.service';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-nutritionist',
  templateUrl: './nutritionist.component.html',
  styleUrls: ['./nutritionist.component.css']
})
export class NutritionistComponent implements OnInit {
  nutritionistURL:string=environment.nutritionistURL;
  constructor(private client:HttpClient,private fb:FormBuilder,private service:CoachService,private http:HttpClient) {
    this.service.getNutritionist().subscribe(data=>{
      this.nutritionList=data;
      // console.log(this.nutritionList);
    })
   }
data:any="";
AdminForm=this.fb.group({
  username: ['', [Validators.required, Validators.pattern("^(?!.([a-zA-Z0-9!@#$%^&])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{3,12}$")]],
  experience: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
  education:new FormControl('',[Validators.required]),
  email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
  description:['',[Validators.required]],
  url:['',[Validators.required]],
 });

nutritionList:any="";

  ngOnInit() {

  }

  get username(){
    return this.AdminForm.get('username');
  }

  get experience(){
    return this.AdminForm.get('experience');
  }

  get url(){
    return this.AdminForm.get('url');
  }

  get education(){
    return this.AdminForm.get('education');
  }

  get email(){
    return this.AdminForm.get('email');
  }

  get description(){
    return this.AdminForm.get('description');
  }

  submitForm(){
    this.http.post<any>(this.nutritionistURL, this.AdminForm.value).subscribe(()=>{
      alertyfy.success('Info added');
    })
  }

  deleteflex(email:any){
  console.log(email);
    this.http.delete(this.nutritionistURL+email).subscribe(()=>{
      alertyfy.success('Info deleted');
     });
  }
}
