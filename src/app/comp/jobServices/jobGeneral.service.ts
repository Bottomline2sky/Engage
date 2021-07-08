import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export  class JobGeneralService {

  constructor(private http: HttpClient) {
  }

  newJobPost(jobData: {
    compensation: string,
    eligibility: string,
    jabout: string,
    jdeadline: string,
    jtitle: string,
    location: string,
    qualification: string
    skill: any
  }) {
    return this.http.post(environment.apiUrl + '/compjob/publish', jobData).pipe(tap(res => {
      console.log(res);
    }));


  }


}










