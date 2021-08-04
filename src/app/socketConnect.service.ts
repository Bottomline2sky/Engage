import {Injectable, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {io} from 'socket.io-client';
import {Subject} from 'rxjs';
import {DloginService} from './auth/dlogin/dlogin.service';
import {DprofileService} from './dev/dsection/dprofile.service';


@Injectable({providedIn: 'root'})
export class  SocketConnectService implements OnInit{
          socket: any;
            updateVal = new Subject();
      constructor(private dLogInService: DloginService) {


      }
       ngOnInit() {
        this.connectSocket()
       }


  connectSocket(){

    this.socket = io('http://localhost:3001')
    this.socket.emit('online',this.dLogInService.getUid(),(message)=>{
                console.log(message);
  })


         this.socket.on('display',(count)=>{
               this.updateVal.next(count);
         })
       }
           incrementCount(){
               this.socket.emit('increment');
           }

}
