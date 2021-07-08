import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {DloginService} from '../dlogin/dlogin.service';

@Injectable({providedIn: 'root'})


export class CloginService {
  private latestToken: string = null;
  private tokenValidity: number = null;

    retrieveLocalToken() {
         const localToken: {
             token: string,
             validity: number
         } = JSON.parse(localStorage.getItem('compData'));
          this.latestToken = localToken?.token;
          this.tokenValidity = localToken?.validity;
    }

     constructor(private http: HttpClient , private  dlogInSevice: DloginService) {
     }
       getToken() {
         const currentTimeStamp = Date.now();
         if (this.latestToken != null && currentTimeStamp < this.tokenValidity) {
           return this.latestToken;
         } else {
           this.latestToken = null;
           this.tokenValidity = null;
           return null;
         }
    }
           toSignUp(compData: {name: string, location: string , email: string, password: string }) {
            return this.http.post(environment.apiUrl + '/compg/signup',compData);
           }


      toLogIn(newLogIn: {email: string , password: string}) {
       return this.http.post<{logToken: string , validity: number}>(
              environment.apiUrl + '/compg/login',newLogIn
           ).pipe(tap(res=>{
                this.latestToken = res.logToken;
                 this.tokenValidity = res.validity;
                   this.saveTokenLocally(this.latestToken,this.tokenValidity);
                      this.dlogInSevice.removeToken();
           }));
         }

         private saveTokenLocally(tokenValue: string, validity: number) {
              const compData = {
                  token: tokenValue,
                 validity: validity
              };
              localStorage.setItem('compData', JSON.stringify(compData));
         }
          removeToken() {
         this.latestToken = null;
           this.tokenValidity = null;
           localStorage.removeItem('compData')
          }
   }
