import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usercoach',
  templateUrl: './usercoach.component.html',
  styleUrls: ['./usercoach.component.css']
})
export class UsercoachComponent implements OnInit {
  coachList:any="";
  constructor(private service:CoachService,private client:HttpClient,private http:HttpClient) {
    this.service.getCoach().subscribe(data=>{
      this.coachList=data;
    })
   }

  ngOnInit() {

  }
}
