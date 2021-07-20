import {DSearchModel} from './Dsearch.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})


export class DSearchService {
  private  allCompanies: DSearchModel[]= null;
    private allSubscriptions : DSearchModel[] = null;
  ee = new Subject<DSearchModel[]>();
    ee2 = new Subject<DSearchModel[]>();
  constructor(private http: HttpClient) {
  }

  getAllSubscriptions() {
       if(this.allSubscriptions != null) {
         return [...this.allSubscriptions];
       }
       else return null;
  }

  //
  // loadCompany() {
  //   return this.http.get<DSearchModel[]>(environment.apiUrl + '/getAllCompanies').pipe(tap(res => {
  //     this.allCompanies = res;
  //
  //   }));
  // }

    loadSubscriptions () {
        return this.http.get<DSearchModel[]>(environment.apiUrl+'/dev/getAllSubscriptions').pipe(
            tap(res=>{
                   this.allSubscriptions  = res;
                    this.ee2.next(res);
            })
        )}

              searchCompany(name : string) {
        return this.http.get<DSearchModel[]>(environment.apiUrl+`/search/${name}/company`);
              }
}
