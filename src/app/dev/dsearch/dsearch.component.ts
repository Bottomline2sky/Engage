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
  allCompanies: DSearchModel[];
  constructor(
    private dsearchService : DSearchService
  ) { }

  ngOnInit(): void {
    this.allCompanies = this.dsearchService.getAllCompanies();
    if(this.allCompanies.length ==0) {
      this.dsearchService.loadCompany().subscribe(res=>{
        this.allCompanies =  res;
        console.log(res)
        this.isLoading= false;
      })
    }
    else {
      this.isLoading =false;
    }
  }

}
