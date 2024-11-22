import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';
import { environment } from 'src/assets/environments/environment';
import { Location } from '@angular/common';
import { CapitalizeePipe } from '../Capitalizee.pipe';

@Component({
  selector: 'app-NutriLogin',
  templateUrl: './NutriLogin.component.html',
  styleUrls: ['./NutriLogin.component.css']
})
export class NutriLoginComponent implements OnInit {
word:any="logins";
Capitalizee:any=CapitalizeePipe;
  admin_email:string=environment.admin_email;
  admin_password:string=environment.admin_password;
  usersURL:string=environment.usersURL;
  email: any = "";
  password: any = "";
  retUrl:any="home";
  constructor(private client: HttpClient,private route:ActivatedRoute,
    private loginservice:LoginService,
     private router: Router, private form: FormBuilder,private location: Location,
    private profile:ProfileService,  private http: HttpClient) {
}
//undergoes activateguard
  ngOnInit(){
    this.route.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
      console.log("NutriLoginComponent/ngOnInit",this.retUrl);
     })
}

  visible: boolean = true;
  changetype: boolean = true;
  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  loginForm = this.form.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
})

//Validates whether the credentials are there in signup
 login() {
  this.http.get<any>(this.usersURL)
    .subscribe(data => {
      const user = data.find((result: any) => {
        if (result.email === this.loginForm.value.email) {
          console.log(JSON.stringify(result));
          return result.email;
        }
      });
      if (user == null) {
        alertyfy.error("No user Found");
      } else if (user.password === this.loginForm.value.password) {
        alertyfy.success("LoggedIn Successfully");
        sessionStorage.setItem('userdata',user.email);
        sessionStorage.setItem('userdata1',user.username);

        this.profile.load(user);
        if (this.retUrl != null) {
          location.replace(this.retUrl);
        } else  {
          this.router.navigate(['/']);
        }
      }
      else {
        alertyfy.error("Invalid Email or Password!!")
      }
       if(this.loginForm.value.email==this.admin_email && this.loginForm.value.password==this.admin_password){
             this.router.navigateByUrl('/admin');
             setTimeout(() => {
              location.reload();
            }, 200);
            }
    })
}
}
