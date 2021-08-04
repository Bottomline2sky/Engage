import {Injectable} from '@angular/core';
import {SocketConnectService} from '../../../socketConnect.service';
import {DloginService} from '../../../auth/dlogin/dlogin.service';

@Injectable({providedIn: 'root'})

export class MessageService{

    constructor(private socketConnect: SocketConnectService, private dLogInService: DloginService) {
          if(! this.socketConnect.socket){
                 this.socketConnect.connectSocket();
          }
          this.socketConnect.socket.on('message', (sandesh)=> {
            console.log(sandesh)
          })
    }
       sendMessage(room: string, message: string){
           const finalMessage = { room,
                 message,
                 sender: this.dLogInService.getUid()
           };
               this.socketConnect.socket.emit('message', finalMessage);
       }

}
