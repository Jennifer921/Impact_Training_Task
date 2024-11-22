import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
commList:any="";
  constructor(private service:CoachService) { }

  ngOnInit() {
    this.service.getComm().subscribe(data=>{
      console.log(data);
      this.commList=data;
    })
  }

  deleteNow(email: any) {
    this.service.deleteService1(email).subscribe(data => {
      alertyfy
      .alert("Deleted the Booking", function(){
        alertyfy.success('OK');
      });
    });
  }
}
