import { Component, OnInit } from '@angular/core';
import {DprofileModel} from '../dprofile.model';
import {DprofileService} from '../dprofile.service';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {
    dprofile : DprofileModel;
    skills: string[] = ['Web D', 'Software D' , 'Linux' ,'Data Science' , 'Java Script' , 'Java' , 'Python'];


   constructor(
    private dprofileService : DprofileService
  ) { }

  ngOnInit(): void {
     this.dprofileService.profileEmit.subscribe((res: DprofileModel )=>{
              if(res == null) {
                    this.dprofileService.fetchProfile();
              }
              else  {
                this.dprofile = res;
              }
     });
  }
}
