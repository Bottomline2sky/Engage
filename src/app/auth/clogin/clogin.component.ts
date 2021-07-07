import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CloginService} from './clogin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {
    registered: boolean =  true;
  @ViewChild('f')   logInData : NgForm;
  @ViewChild('s')   signUpData : NgForm;
  constructor(private cloginService : CloginService , private route: Router) { }

  ngOnInit(): void {
  }

    toSignUp(){
     this.registered = !this.registered;
  }

    onSubmit() {
     if(!this.registered) {
          const newCompany = {
               name : this.signUpData.value.name,
              email: this.signUpData.value.email,
               location: this.signUpData.value.location,
               password: this.signUpData.value.password
          };
            this.cloginService.toSignUp(newCompany).subscribe(res=>{
               alert("Account Created Successfully resirecting to LogiN Page");
                this.route.navigate(['/']);
            });
     }
     else {
        const logInData =  {
            email : this.logInData.value.email,
             password: this.logInData.value.password
        };
        this.cloginService.toLogIn(logInData).subscribe(res=>{
           this.route.navigate(['/comp']);
        } , error => {
           console.log(error);
        });
     }
  }
}
