import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {DloginService} from '../auth/dlogin/dlogin.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class DevInterceptorService implements HttpInterceptor {

        constructor(private devLoginService: DloginService) {
        }

       intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

           const  temp = environment.apiUrl;
        const allUrls = [temp + '/devproute/update' , temp+'/devprofile/read' , temp+'/devprofile/create/image'];
           if(allUrls.includes(req.url)) {
             const newUrl = req.clone({
               headers: new HttpHeaders({
                 'Authorization': 'Bearer '+  this.devLoginService.getToken()
               })
               }
             );
             return next.handle(newUrl).pipe(tap(event => {
               console.log(event);
             }));
           }
           else {
               return   next.handle(req);
              }
        }
}
