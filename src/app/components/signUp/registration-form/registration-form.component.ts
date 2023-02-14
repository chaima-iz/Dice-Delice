import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupServiceService } from 'src/app/services/signupService/signup-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  
  firstName :any;
  lastName : any;
  gender : any;
  dateBirth: any;
  address : any;
  city : any;
  username : any;
  phone : any;
  email : any;
  password : any;
  Cpassword : any;
  
  constructor(private signupservice : SignupServiceService , private router:Router){ }
  
  ngOnInit(): void {
    // localStorage.setItem("logged_in" , "false");
  }
  
  register(){
    const newUser = {
      "firstName":this.firstName,
      "lastName":this.lastName,
      "gender":this.gender,
      "dateBirth":this.dateBirth,
      "address":this.address,
      "city":this.city,
      "username":this.username,
      "phone":this.phone,
      "email":this.email,
      "password":this.password,
      "password_confirmation":this.Cpassword,
      "picture":"null.jpeg"
  }
    this.signupservice.signup(newUser)
    .subscribe(
      res=>{
        if(res){
          localStorage.setItem("user" , JSON.stringify(res))
          localStorage.setItem("logged_in" , "true");
          this.router.navigate(['/'])
        }
      },
      error=>{
        localStorage.setItem("error" , "true");
      }
    );
  }
}