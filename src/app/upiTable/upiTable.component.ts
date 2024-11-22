import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-upiTable',
  templateUrl: './upiTable.component.html',
  styleUrls: ['./upiTable.component.css']
})
export class UpiTableComponent implements OnInit {

  upiList:any="";
  constructor(private service:CoachService) { }

  ngOnInit() {
    this.service.getUpi().subscribe(data=>{
      console.log(data);
      this.upiList=data;
    })
  }

}
