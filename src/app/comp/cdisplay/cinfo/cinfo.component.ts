import { Component, OnInit } from '@angular/core';
import {CdisplayService} from '../cdisplay.service';
import {PostModel} from '../../cpost/post.model';

@Component({
  selector: 'app-cinfo',
  templateUrl: './cinfo.component.html',
  styleUrls: ['./cinfo.component.css']
})
export class CinfoComponent implements OnInit {
       allPosts: PostModel[];
  constructor(private  cDisplayService: CdisplayService) { }

  ngOnInit(): void {
          this.allPosts = this.cDisplayService.getAllPosts();
  }

}
