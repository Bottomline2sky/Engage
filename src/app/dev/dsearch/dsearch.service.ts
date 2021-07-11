import {DSearchModel} from './Dsearch.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})


export class DSearchService {
       private  allCompanies: DSearchModel[]= [];
          ee = new Subject<DSearchModel[]>();
      constructor(private http: HttpClient) {
      }

      getAllCompanies() {
        return [...this.allCompanies];
      }


     loadCompany() {
        return this.http.get<DSearchModel[]>(environment.apiUrl + '/getAllCompanies').pipe(tap(res=>{
                   this.allCompanies = res;
         }));

     }


}
