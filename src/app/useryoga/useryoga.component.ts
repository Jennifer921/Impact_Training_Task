import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-useryoga',
  templateUrl: './useryoga.component.html',
  styleUrls: ['./useryoga.component.css']
})

export class UseryogaComponent implements OnInit {
  yogaList:any="";
  constructor(private http:HttpClient,private service:CoachService,private client:HttpClient) {
    this.service.getYoga().subscribe(data=>{
      this.yogaList=data;
    })
   }

  ngOnInit() {
    
  }

}
