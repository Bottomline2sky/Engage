import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit {
         notRegistered:  boolean =  false;
       @ViewChild('f')   logInData : NgForm;
        @ViewChild('s')   signUpData : NgForm;
         @ViewChild('pass') password : NgModel;
   constructor() { }




  ngOnInit(): void {
  }


    onSubmit() {
       if(!this.notRegistered) console.log(this.logInData.value);
         else   console.log(this.signUpData.value);

    }

        toSignUp () {
               this.notRegistered = ! this.notRegistered;
        }


}
