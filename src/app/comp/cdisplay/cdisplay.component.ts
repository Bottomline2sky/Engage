import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cdisplay',
  templateUrl: './cdisplay.component.html',
  styleUrls: ['./cdisplay.component.css']
})
export class CdisplayComponent implements OnInit {
         isLoading = true;
           cid: string;
              isAboutMode: boolean = false;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
           this.cid=  this.activatedRoute.snapshot.params['cid'];


    }


}
