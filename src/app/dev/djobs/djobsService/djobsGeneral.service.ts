import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {DJobModel} from './DJob.model';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DjobsGeneralService {

  private allJobs: DJobModel[];

  constructor(private http: HttpClient) {
  }

   fetchAllPost(){
   return this.http.get<DJobModel[]>(environment.apiUrl+ '/fetchAll/ongoingJobs').
    pipe(tap(res=>{
       this.allJobs = res;
    }));
  }

    getJobWithId(x: number) {
      return this.allJobs[x];
}
     applyToTheJob(jid : string) {
         return this.http.get(environment.apiUrl + '/apply/' + jid);
     }


}
