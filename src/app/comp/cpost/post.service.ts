import {Injectable} from '@angular/core';
import {PostModel} from './post.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Injectable({ providedIn : 'root'})




export class PostService {
    private postArray : PostModel[]=[];
      ee = new Subject<PostModel[]>();

       constructor(private http: HttpClient) {
      }




       fetchPosts() {
         return this.http.get<PostModel[]>(environment.apiUrl + '/compfeed/getPosts').pipe(tap(res => {
           this.postArray = res;
           this.ee.next(res);
         }));
       }


      getPosts() {
          let posts =  [...this.postArray];
          return posts;
      }

      addNewPost(newPost: FormData) {
       return this.http.post<PostModel[]>(environment.apiUrl+"/compfeed/post",newPost).pipe(tap(res=>{
               this.postArray = res;
                this.ee.next(res);
        })
      )}



}
