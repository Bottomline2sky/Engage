import {Injectable} from '@angular/core';
import {DprofileModel} from './dprofile.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {ReplaySubject, Subject} from 'rxjs';


@Injectable({providedIn: 'root'})

export class DprofileService {
        dProfile = new DprofileModel(
           "Anurag Srivastava",
            "Spokesperson at Foreign Ministry",
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztQS_0iZ6EV3Nd6zs6YcNmFB8c7ciapy1MA&usqp=CAU',
           [
             {year: "2020-2022" ,school: "the Dull Lake School"}
           ],[{
              skill: '3', value: 10
          }],[{
              year: '2023-2056',
              company: 'Hindustan Techno Limited'
          }]
        );
      profileEmit = new Subject<DprofileModel>();

     constructor(private http: HttpClient) {
     }

      updateProfile(nProfile: FormData) {
       return this.http.post<DprofileModel>(environment.apiUrl+"/devproute/update",nProfile).pipe(
            tap(res =>{
             this.profileEmit.next(res);
            }))
     }


}
