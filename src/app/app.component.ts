import { Component } from '@angular/core';
import {DloginService} from './auth/dlogin/dlogin.service';
import {CloginService} from './auth/clogin/clogin.service';
import {SocketConnectService} from './socketConnect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Engage';
   constructor(private dloginService: DloginService,
               private cloginService: CloginService) {
        this.dloginService.retrieveLocalToken();
        this.cloginService.retrieveLocalToken();
   }
}
