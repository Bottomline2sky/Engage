import { Component, OnInit } from '@angular/core';
import {DprofileModel} from '../dprofile.model';
import {DprofileService} from '../dprofile.service';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {
    drprofile : DprofileModel;

  skills: string[] = ['Web D', 'Software D' , 'Linux' ,'Data Science' , 'Java Script' , 'Java' , 'Python'];


  constructor(
    private dprofileService : DprofileService
  ) { }

  ngOnInit(): void {
     this.drprofile = this.dprofileService.dProfile;
  }



}
