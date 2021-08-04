import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {CloginService} from '../clogin/clogin.service';

@Injectable({providedIn: 'root'})




export class DloginService  {
       private latestToken : string = null;
         private tokenValidity : number = null;
               private uId : string = null;
        retrieveLocalToken() {
              const localToken: {
                   token : string,
                   validity:  number,
                    uId: string
              } = JSON.parse(localStorage.getItem('userData'));
               console.log(localToken?.token);
               this.latestToken = localToken?.token;
                 this.tokenValidity = localToken?.validity;
                   this.uId = localToken?.uId;
        }



       constructor(private http: HttpClient ) {
       }

       getToken() {
             const currentTimeStamp = Date.now();
         if(this.latestToken != null &&  currentTimeStamp<this.tokenValidity) {
            return this.latestToken;
          }
         else {
           this.latestToken = null;
            this.tokenValidity = null;
             return null;
         }
         }

         getUid(){
             return this.uId;
         }

  toSignUp(userData: {name: string , email: string, password: string}) {
        return  this.http.post(environment.apiUrl+'/devg/signup',userData);
       }
  toLogIn(newLogIn: {email: string, password: string}) {
        return this.http.post<{logToken: string , validity: number, uId: string}>(environment.apiUrl+ '/devg/login', newLogIn).pipe(map(res=>{
                 this.latestToken = res.logToken;
                  this.tokenValidity = res.validity;
                   this.uId = res.uId;
                    console.log(this.uId);
                   this.saveTokenLocally(this.latestToken,this.tokenValidity, this.uId);
                     localStorage.removeItem('compData');
        }));
       }


       private  saveTokenLocally(tokenValue: string , validity: number,uId: string) {
               const  userData  = {
                        token : tokenValue,
                       validity: validity,
                     uId: uId
                 } ;
            localStorage.setItem('userData' , JSON.stringify(userData));
       }

       removeToken() {
             this.latestToken = null;
               this.tokenValidity = null;
                 localStorage.removeItem('userData');
       }
}
