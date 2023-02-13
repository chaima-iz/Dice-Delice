import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
  email : string = '';
  password : string = '';
  constructor(private loginservice : LoginServiceService , private router:Router){ }
  
  ngOnInit(): void {
    // localStorage.setItem("logged_in" , "false");
  }
  submit(){
    this.loginservice.login(this.email , this.password)
    .subscribe(res=>{
      if(res.user){
        localStorage.setItem("user" , JSON.stringify(res.user))
        localStorage.setItem("logged_in" , "true");
        this.router.navigate(['/'])
      }
    });
  }
}
