import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usernutri',
  templateUrl: './usernutri.component.html',
  styleUrls: ['./usernutri.component.css']
})
export class UsernutriComponent implements OnInit {
  nutritionList:any="";

  constructor(private service:CoachService,private client:HttpClient,private http:HttpClient) {
    this.service.getNutritionist().subscribe(data=>{
      this.nutritionList=data;
    })
   }
  ngOnInit() {

  }

}
