import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketConnectService} from '../../../socketConnect.service';
import {MessageService} from './message.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
   val: any=0;
      inputMessage: string;

  constructor(private messageService: MessageService, private socketService: SocketConnectService) { }

  ngOnInit(): void {
     // this.socketService.connectSocket();
      // this.socketService.updateVal.subscribe(res=>{
      //      this.val = res;
      // })
  }
   incr(){

   }
     sendMessage(){
             const iMessage = this.inputMessage;
         this.messageService.sendMessage('60e3160b18a6dd360087f9d5',iMessage);
     }

}
