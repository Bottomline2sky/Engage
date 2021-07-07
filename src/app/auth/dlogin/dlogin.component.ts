import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DloginService} from './dlogin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit {
         registered:  boolean =  true;
       @ViewChild('f')   logInData : NgForm;
        @ViewChild('s')   signUpData : NgForm;
         @ViewChild('pass') password : NgModel;

   constructor(private dloginService : DloginService, private route: Router) { }

   ngOnInit(): void {
  }


    toSignUp () {
               this.registered = ! this.registered;
   }

  onSubmit() {
    if (!this.registered) {
          const newUser = {
               name : this.signUpData.value.name,
               email: this.signUpData.value.email,
              password: this.signUpData.value.password
          }
           this.dloginService.toSignUp(newUser).subscribe((res)=>{
                 alert("Account Created Successfully redirecting to login Page");
                   this.route.navigate(['/']);
           });
    }
    else {
        const logInData = {
             email: this.logInData.value.email,
             password: this.logInData.value.password
        };
         this.dloginService.toLogIn(logInData).subscribe((res)=>{
              this.route.navigate(['/dev']);

          },error => {
            console.log(error)
         });
    }
   }

}
