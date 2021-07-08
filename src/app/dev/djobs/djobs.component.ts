import { Component, OnInit } from '@angular/core';
import {DJobModel} from './djobsService/DJob.model';
import {JobGeneralService} from '../../comp/jobServices/jobGeneral.service';
import {DjobsGeneralService} from './djobsService/djobsGeneral.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-djobs',
  templateUrl: './djobs.component.html',
  styleUrls: ['./djobs.component.css']
})
export class DjobsComponent implements OnInit {
    isLoading: boolean = true;
      allJobs: DJobModel[];
  constructor( private djobGeneralService: DjobsGeneralService, private route: Router  ) { }

  ngOnInit(): void {
        this.djobGeneralService.fetchAllPost().subscribe(res=>{
            console.log(res);
               this.allJobs = res;
             this.isLoading = false;
        },error=>{
            console.log(error);
            this.isLoading = false;
        });
  }

    applyHere(x : number) {
          this.route.navigate(['/dev',x,'djdesc']);
    }

}
