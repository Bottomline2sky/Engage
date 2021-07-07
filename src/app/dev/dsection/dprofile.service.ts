import {Injectable} from '@angular/core';
import {DprofileModel} from './dprofile.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {ReplaySubject, Subject} from 'rxjs';


@Injectable({providedIn: 'root'})

export class DprofileService {

    private    dProfile: DprofileModel = null;
      profileEmit = new ReplaySubject<DprofileModel>(1);

      constructor(private http: HttpClient) {
           this.profileEmit.next(null);
     }



       getProfile() : DprofileModel {
                return this.dProfile;
       }
       fetchProfile() {
           this.http.get<DprofileModel>(environment.apiUrl + "/devprofile/read").subscribe(res=>{
                   this.dProfile = res;
                     this.profileEmit.next(res);
                    console.log(res);
           });
      }

      updateProfile(nProfile: {
        name: any,
        education: any,
        skills: any,
        experience: any,
        about: any
      }) {
        return this.http.post<DprofileModel>(environment.apiUrl + "/devproute/update", nProfile).pipe(
              tap(res => {
                this.profileEmit.next(res);
              }));
      }
    updateImage(formData : FormData) {
          return this.http.post<{image: string}>(environment.apiUrl+"/devprofile/create/image", formData).pipe(tap(res=>{
                 this.dProfile.image = res.image;
                     let nObject = { ... this.dProfile};
                   this.profileEmit.next( nObject);
          }));
    }

}
