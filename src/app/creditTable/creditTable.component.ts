import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-creditTable',
  templateUrl: './creditTable.component.html',
  styleUrls: ['./creditTable.component.css']
})
export class CreditTableComponent implements OnInit {

  creditList:any="";
  constructor(private service:CoachService) { }

  ngOnInit() {
    this.service.getCredit().subscribe(data=>{
      console.log(data);
      this.creditList=data;
    })
  }

}
