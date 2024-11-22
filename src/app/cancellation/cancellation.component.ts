import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { HttpClient } from '@angular/common/http';
import * as alertyfy from 'alertifyjs';
import { environment } from 'src/assets/environments/environment';


@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  booknowURL:string=environment.booknowURL;
  usersURL:string=environment.usersURL;
   state1:boolean=false;
  tempoList:any=[];
  newdata:any=[];
  picture:any;
  constructor(private http:HttpClient,private service:CoachService,private client:HttpClient) {
    this.service.getSignup().subscribe(data=>{
      this.tempoList=data;
      this.newdata=this.tempoList.booknow;
      // console.log(this.newdata.length);
      if(this.newdata.length>=1){
        this.state1=true;
        console.log(this.newdata);
      }
      else{
        this.picture="NO BOOKINGS HAVE BE DONE";
      }
    })
  }


  ngOnInit() {
  }

  sure(email: any) {
  
    this.http.patch(this.usersURL+email,{booknow:[]}).subscribe(()=>{ });
    this.http.delete(this.booknowURL + email).subscribe( data =>{
    });
      alertyfy
      .alert("Deleted the Booking", function(){
        alertyfy.success('OK');
      });

    };
}
