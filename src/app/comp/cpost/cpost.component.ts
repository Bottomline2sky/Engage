import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {PostModel} from './post.model';

@Component({
  selector: 'app-cpost',
  templateUrl: './cpost.component.html',
  styleUrls: ['./cpost.component.css']
})
export class CpostComponent implements OnInit {
  isActivePost: boolean = false;
  allPosts: PostModel[];
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(res=>{
      this.allPosts = res;
    });
    this.postService.ee.subscribe(res=>{
      this.allPosts = this.postService.getPosts();
    })
  }
  newPost() {
    this.isActivePost = true;
  }
  dnewPost() {
    this.isActivePost = false;
  }
}
