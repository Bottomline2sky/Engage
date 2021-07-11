import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {CloginService} from '../auth/clogin/clogin.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CompInterceptorService implements HttpInterceptor {
        constructor(private clogInService : CloginService) {
        }
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         const temp = environment.apiUrl;
          const allUrls =[temp+'/compjob/publish', temp+'/compfeed/post' , temp+'/compfeed/getPosts'];
          if(allUrls.includes(req.url)) {
             const newUrl = req.clone({
                headers: new HttpHeaders({
                   'Authorization' : 'Bearer '+ this.clogInService.getToken()
                })
             });
              return next.handle(newUrl).pipe(tap(event=>{
                   console.log(event);
              }));
          }
          else {
              return next.handle(req);
          }
        }
}
