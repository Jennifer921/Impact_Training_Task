import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public data:any;
   data2:any="";
  constructor(public router:Router,public profile:ProfileService) {
    // var values = JSON.parse(sessionStorage.getItem('userdata') + "");
    var values= sessionStorage.getItem('userdata');
    this.data2= sessionStorage.getItem('userdata1');
    profile.load(values);
   }
  ngOnInit() {
  }
 public  logout(){
    if(confirm("Confirm logout")){
      sessionStorage.removeItem('userdata');
      this.profile.load(null);
      this.router.navigate(['/']);
    }
}
}
