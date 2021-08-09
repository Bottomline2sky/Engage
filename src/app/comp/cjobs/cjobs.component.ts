import { Component, OnInit } from '@angular/core';
import {JobGeneralService} from '../jobServices/jobGeneral.service';
import {JobModel} from '../jobServices/Job.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cjobs',
  templateUrl: './cjobs.component.html',
  styleUrls: ['./cjobs.component.css']
})
export class CjobsComponent implements OnInit {
           isLoadingJobs = true;
              allOngoingJobs: JobModel[];
              allPastJobs: JobModel[];
              allFutureJobs: JobModel[];
  constructor(private jobService: JobGeneralService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
   this.jobService.fetchAllJobs().subscribe(res=>{
        this.allOngoingJobs = this.jobService.getAllOngoingJobs();
          this.isLoadingJobs = false;
    })
  }

  toJobDetails(x: string) {
         this.route.navigate([x ,'jdetails'] , {relativeTo: this.router});
  }

}
