import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import * as alertyfy from 'alertifyjs';
import { CoachService } from '../coach.service';
import { environment } from 'src/assets/environments/environment';


@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
coachURL:string=environment.coachURL;
  AdminForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    experience:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    description:new FormControl('',[Validators.required]),
    url:new FormControl('',[Validators.required]),
 });
  coachList:any="";
  constructor(private client:HttpClient,private http:HttpClient,private service:CoachService,private fb:FormBuilder) {

   }
  ngOnInit() {
    this.service.getCoach().subscribe(data=>{
      console.log(data);
      this.coachList=data;
    })
  }
  get name(){
    return this.AdminForm.get('name');
  }
  get experience(){
    return this.AdminForm.get('experience');
  }

  get url(){
    return this.AdminForm.get('url');
  }

  get age(){
    return this.AdminForm.get('age');
  }

  get email(){
    return this.AdminForm.get('email');
  }

  get description(){
    return this.AdminForm.get('description');
  }

 get specialization(){
  return this.AdminForm.get('specialization');
 }

  submitForm(){
    console.log(this.AdminForm.value);
    this.http.post<any>(this.coachURL, this.AdminForm.value).subscribe(()=>{

      alertyfy.success('Info added');
    })
  }

  deleteflex(email:any){

    // this.http.get("http://localhost:3000/nutritionist").subscribe(x=>{
    // this.data=x;
    // });
    console.log(email);
      this.http.delete(this.coachURL+email).subscribe(()=>{
        alertyfy.success('Info deleted');
       });
    }
}
