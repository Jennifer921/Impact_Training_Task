import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import * as alertyfy from 'alertifyjs';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { environment } from 'src/assets/environments/environment';


@Component({
  selector: 'app-reviewPage',
  templateUrl: './reviewPage.component.html',
  styleUrls: ['./reviewPage.component.css']
})
export class ReviewPageComponent implements OnInit {

  constructor(private fb:FormBuilder,public http:HttpClient,public service:CoachService) { }
  loginURL:any=environment.loginURL;
  review: any = {};
  reviewList:any="";
  topic="Leave a comment";

  ngOnInit() {
    this.service.getReview().subscribe(data=>{
     this.reviewList=data;
   });
  }
  reviewForm=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    desc:['',[Validators.required]],
   })

  submitReview() {
    // Perform actions with the review data
    this.http.post<any>(this.loginURL,this.reviewForm.value).subscribe(data=>{
    alertyfy.success(" Thankyou for your comment");
    });

  }}
  