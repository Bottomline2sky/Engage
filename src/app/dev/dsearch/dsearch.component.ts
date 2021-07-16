import { Component, OnInit } from '@angular/core';
import {DSearchService} from './dsearch.service';
import {DSearchModel} from './Dsearch.model';

@Component({
  selector: 'app-dsearch',
  templateUrl: './dsearch.component.html',
  styleUrls: ['./dsearch.component.css']
})
export class DsearchComponent implements OnInit {
  isLoading: boolean = true;
  allSubscriptions: DSearchModel[];
  constructor(
    private dsearchService : DSearchService
  ) { }

  ngOnInit(): void {
    this.allSubscriptions = this.dsearchService.getAllSubscriptions();
    if(this.allSubscriptions == null) {
      this.dsearchService.loadSubscriptions().subscribe(res=>{
        this.allSubscriptions =  res;
        this.isLoading= false;
      })
    }
    else {
      this.isLoading =false;
    }
  }
     findCompanies() {

     }
     companyDisplay(x: number) {

    }
}
