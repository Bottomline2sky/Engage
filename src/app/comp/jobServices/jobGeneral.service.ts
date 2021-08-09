import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {JobModel} from './Job.model';


@Injectable({providedIn: 'root'})
export  class JobGeneralService {
        private allJobs: JobModel[];
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
    fetchAllJobs() {
       return this.http.get<JobModel[]>(environment.apiUrl + '/comp/allJobs').pipe(tap(res=>{
                this.allJobs = res;
                console.log(res);
       }))
     }

      getAllfutureJobs() {

      }
        getAllOngoingJobs() {
           return [...this.allJobs];
        }
       getAllPastJobs() {

       }

       getJobWithJid(x: string) {
      let job=null;
             this.allJobs.forEach(val=>{
                     if(val.jid ==  x)  job=val;
             })
           return job;
  }

}










