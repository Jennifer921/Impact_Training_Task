import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { HttpClient } from '@angular/common/http';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  regList:any="";
  constructor(private service:CoachService,private http:HttpClient) { }

  ngOnInit() {
    this.service.getbooknow().subscribe(data=>{
      console.log(data);
      this.regList=data;
    })
  }

  deleteNow(email: any) {
    this.service.deleteService(email).subscribe(()=>{

    });

    this.http.patch("http://localhost:3000/users/"+email,{booknow:[]}).subscribe(()=>{ });
      alertyfy
      .alert("Deleted the Booking", function(){
        alertyfy.success('OK');
      });
    };
  }


