import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profileService/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    constructor(private profileService: ProfileService , private router:Router , private route: ActivatedRoute){ }
    id : any;
    user : any;
    
    dataPassword={
      currentPassword : '',
      newPassword : '',
      confirmPassword : ''
    }

    dataUser = {
      firstName : '',
      lastName : '',
      dateBirth: '',
      phone : '',
      email : '',
      address : ''
    };

    ngOnInit(): void {
      this.user=localStorage.getItem("user");
      this.user=JSON.parse(this.user);

      this.route.params.subscribe(
        params => {
          this.id =  params["id"];
        }
      );
      
      this.dataUser.firstName = this.user.firstName;
      this.dataUser.lastName = this.user.lastName;
      this.dataUser.dateBirth = this.user.dateBirth;
      this.dataUser.phone = this.user.phone;
      this.dataUser.email = this.user.email;
      this.dataUser.address = this.user.address;

    }
    updateProfile(){
      this.profileService.updateProfile(this.dataUser,this.user.id)
        .subscribe(
          res=>{
            localStorage.setItem("user" , JSON.stringify(res.data))
            window.location.reload()
            console.log('works');
          },
          error=>{
            // localStorage.setItem("error" , "true");
            console.log(error);
            console.log("doesn't work");
          }
        );
    }
    updatePassword(){
      this.profileService.updatePassword(this.dataPassword , this.user.id)
      .subscribe(
        res=>{
          window.location.reload();
          console.log("works");
        },
        error=>{
          // localStorage.setItem("error" , "true");
          console.log(error);
          console.log("doesn't work");
        }
      )
    }
    
}
