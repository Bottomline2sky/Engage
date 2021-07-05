import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})




export class DloginService  {
       private latestToken : string = null;
         private tokenValidity : number = null;

        retrieveLocalToken() {
              const localToken: {
                   token : string,
                   validity:  number
              } = JSON.parse(localStorage.getItem('userData'));
               console.log(localToken?.token);
               this.latestToken = localToken?.token;
                 this.tokenValidity = localToken?.validity;
        }



       constructor(private http: HttpClient) {
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



  toSignUp(userData: {name: string , email: string, password: string}) {
        return  this.http.post(environment.apiUrl+'/devg/signup',userData);
       }
  toLogIn(newLogIn: {email: string, password: string}) {
        return this.http.post<{logToken: string , validity: number}>(environment.apiUrl+ '/devg/login', newLogIn).pipe(map(res=>{
                 this.latestToken = res.logToken;
                  this.tokenValidity = res.validity;
                   this.saveTokenLocally(this.latestToken,this.tokenValidity);
        }));
       }


       private  saveTokenLocally(tokenValue: string , validity: number) {
               const  userData  = {
                        token : tokenValue,
                       validity: validity
                 } ;
            localStorage.setItem('userData' , JSON.stringify(userData));
       }




}
