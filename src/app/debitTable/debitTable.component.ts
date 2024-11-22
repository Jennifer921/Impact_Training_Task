import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-debitTable',
  templateUrl: './debitTable.component.html',
  styleUrls: ['./debitTable.component.css']
})
export class DebitTableComponent implements OnInit {

  debitList:any="";
  constructor(private service:CoachService) { }

  ngOnInit() {
    this.service.getDebit().subscribe(data=>{
      console.log(data);
      this.debitList=data;
    })
  }
  deleteNow(){

  }
}
