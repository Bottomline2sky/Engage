import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../cpost/post.model';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export  class CdisplayService {
  private allPosts: PostModel[];

  constructor(private http: HttpClient ) {

  }

      getAllPosts(){
          return  [... this.allPosts];
      }

      fetchAllPost( x:string) {
         return  this.http.get<PostModel[]>(environment.apiUrl+`/compfeed/${x}/getPosts`).pipe(tap(res=>{
                        console.log(res);
                     this.allPosts = res;
           }));
      }
      addSubScription(x: string) {
         return  this.http.get<{message: string}>(environment.apiUrl+`/newSubscriber/${x}/addSubscription`);
       }


}
