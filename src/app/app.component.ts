import { Component } from '@angular/core';
import {DloginService} from './auth/dlogin/dlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Engage';
   constructor(private dloginService: DloginService) {
        this.dloginService.retrieveLocalToken();
   }
}
