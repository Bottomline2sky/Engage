import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CdisplayService} from './cdisplay.service';

@Component({
  selector: 'app-cdisplay',
  templateUrl: './cdisplay.component.html',
  styleUrls: ['./cdisplay.component.css']
})
export class CdisplayComponent implements OnInit {
         isLoading =  true;
           cInfoMode = false;
            cAboutMode = true;
           cid: string;
              isAboutMode: boolean = false;
  constructor(private activatedRoute : ActivatedRoute, private  cDisplayService: CdisplayService) { }

  ngOnInit(): void {
        this.cid=  this.activatedRoute.snapshot.params['cid'];
          this.cDisplayService.fetchAllPost(this.cid).subscribe(res =>{
                 this.isLoading = false;
          })
      }
       toCinfoMode() {
            this.cAboutMode= false;
             this.cInfoMode = true;
       }
       toCaboutMode () {
      this.cAboutMode= true;
       this.cInfoMode= false;
       }


}
