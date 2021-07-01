import {Injectable} from '@angular/core';
import {PostModel} from './post.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Injectable({ providedIn : 'root'})




export class PostService {
    private postArray : PostModel[]=[{message : "hello this is the part of the sequence of the letter" ,
     image: 'https://images.unsplash.com/photo-1597413545419-4013431dbfec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}];
      ee = new Subject<PostModel[]>();

      constructor(private http: HttpClient) {
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
