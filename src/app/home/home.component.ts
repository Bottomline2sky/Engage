import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DauthGuardService} from '../auth/dlogin/dauth-guard.service';
import {DloginService} from '../auth/dlogin/dlogin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dlogInService: DloginService) { }

  ngOnInit(): void {
  }

   logInDeveloper() {
       if(this.dlogInService.getToken() != null) {
           this.router.navigate(['/dev']);
       }
       else {
         this.router.navigate(['/dlogin']);
       }
   }
   logInCompany() {
     this.router.navigate(['/clogin']);
   }
}
