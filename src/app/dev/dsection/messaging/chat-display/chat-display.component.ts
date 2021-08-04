import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {
       @Input() index : number;
  constructor() { }

  ngOnInit(): void {
  }

}
