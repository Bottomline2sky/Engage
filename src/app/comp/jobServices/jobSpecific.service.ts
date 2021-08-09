import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JobGeneralService} from './jobGeneral.service';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {JobSpecificModel} from './JobSpecific.model';


@Injectable({providedIn: 'root'})
 export class JobSpecificService {

  constructor(private http: HttpClient, private jobGeneralService: JobGeneralService) {
  }

  getJobDetail(x: string) {
    return this.jobGeneralService.getJobWithJid(x);
  }

  fetchJobDetails(x: string) {
    return this.http.get<JobSpecificModel>(environment.apiUrl + `/comp/${x}/jobDetails`);

  }
}
