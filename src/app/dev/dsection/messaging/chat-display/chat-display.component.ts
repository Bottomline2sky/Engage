import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {
            index : number = -1;
              messageBinder: string;
                 isClicked : boolean = false;
                   chatList: {message: string, time: string, self: boolean}[]= [];
  constructor(private  messageService: MessageService) { }

  ngOnInit(): void {
        this.messageService.ee.subscribe(res=>{
                this.index = res;
               this.getChatList();
                   this.isClicked = true;
        })
        this.messageService.chatSubject.subscribe(() =>{
                     this.chatList =  this.messageService.getChats(this.index);
        });
  }

  sendMessage(){
    const iMessage = this.messageBinder;
    this.messageService.sendMessage(this.messageService.contacts[this.index].contact.uId,iMessage);
    this.messageBinder="";
  }
      getChatList() {
             const cList = this.messageService.getChats(this.index);
              if(cList == null)  this.chatList = [];
                else this.chatList = cList;

      }

}
