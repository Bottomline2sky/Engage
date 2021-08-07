import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketConnectService} from '../../../socketConnect.service';
import {MessageService} from './message.service';
import {ContactListModel} from './contactList.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
         val = -1;
      inputMessage: string;
           isListLoading:boolean  = true;
              contactList : ContactListModel[];
                  isChatLoading: boolean = true;

  constructor(private messageService: MessageService, private socketService: SocketConnectService) { }

   ngOnInit(): void {
     this.messageService.getUserList().subscribe(res => {
       this.contactList = res;
       console.log(res);
       this.isListLoading = false;
     });
     this.messageService.fetchChats().subscribe(res => {
       this.isChatLoading = false;
     })
   }

      toThisContact(x: number) {
        this.val = x;
        this.messageService.ee.next(x);
      }

   addUser(x: string, y: string) {
       const    data= { uName: x, uId: y};
        this.messageService.addUserToList(data).subscribe(res=>{
                alert("Added to contact list Successfully pleast refresh it")
        })
   }

     getColor(index: number) {
            if(index == this.val) {
               return 'red';
            }
            return 'white';
  }
}
