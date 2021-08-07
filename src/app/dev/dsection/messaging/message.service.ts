import {Injectable} from '@angular/core';
import {SocketConnectService} from '../../../socketConnect.service';
import {DloginService} from '../../../auth/dlogin/dlogin.service';
import {HttpClient} from '@angular/common/http';
import {ContactListModel} from './contactList.model';
import {environment} from '../../../../environments/environment.prod';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import { UserChatModel} from './userChat.model';

@Injectable({providedIn: 'root'})

export class MessageService {
  ee = new Subject<number>();
  contacts: ContactListModel[] = [];
  allChat = new Map();
  chatSubject = new Subject<void>();

  constructor(private socketConnect: SocketConnectService, private dLogInService: DloginService
    , private http: HttpClient) {
    if (!this.socketConnect.socket) {
      this.socketConnect.connectSocket();
    }
    this.socketConnect.socket.on('message', (sandesh) => {
      const date = new Date(sandesh.time);
      const timeZone = date.getHours() + ":" + date.getMinutes();
      if (this.allChat.has(sandesh.sender)) {
        const iv = this.allChat.get(sandesh.sender);
        iv.push({message: sandesh.message, time: timeZone,self: sandesh.self});
        this.allChat.set(sandesh.sender, iv);
      } else {
        this.allChat.set(sandesh.sender, [{message: sandesh.message, time: timeZone, self: sandesh.self}]);
      }
      this.chatSubject.next();
    })
  }

  sendMessage(room: string, message: string) {
    const finalMessage = {
      room,
      message,
      sender: this.dLogInService.getUid()
    };
    this.socketConnect.socket.emit('message', finalMessage);
  }

  getUserList() {
    return this.http.get<ContactListModel[]>(environment.apiUrl + '/getList/contactList').pipe(tap(res => {
      this.contacts = res;
    }));
  }

  addUserToList(data: { uName: string, uId: string }) {
    return this.http.post<{ message: string }>
    (environment.apiUrl + '/addList/contactList', data);
  }

  // Chat Load Area

  getChats(index: number) {
    if (index != -1 && this.allChat.has(this.contacts[index].contact.uId)) {
      return this.allChat.get(this.contacts[index].contact.uId);
    }
    return null;
  }

  fetchChats() {
    return this.http.get<any[]>(environment.apiUrl+'/dev/getAllChats').pipe(tap(res => {
      res.forEach(val => {
        const date = new Date(val.time);
        const timeZone = date.getHours() + ":" + date.getMinutes();
        if (this.allChat.has(val.sender)) {
          const iv = this.allChat.get(val.sender);
          iv.push({message: val.message, time: timeZone,self: val.self});
          this.allChat.set(val.sender, iv);
        } else {
          this.allChat.set(val.sender, [{message: val.message, time: timeZone, self: val.self}]);
        }
      })
    }))
  }
 }




