import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
       notifications = [{ title : "you are set to go" ,
         body: "you are the best one"},
         {
           title: "Oh welcome to new user!!",
            body: "you will feel awesome here guaranteed"
         }];
  constructor() { }

  ngOnInit(): void {
  }

}
